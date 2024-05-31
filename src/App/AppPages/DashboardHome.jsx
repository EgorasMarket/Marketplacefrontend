import React, { useState, useEffect } from "react";
import { ShoppingBasket01Icon } from "hugeicons-react";
import { StakeIcon } from "hugeicons-react";
import "../AppStyles/dashboardHome.css";
import formatNumber from "../../Components/FormatNumber";
import { UserGroupIcon } from "hugeicons-react";
import { Table } from "../../Components/Tables/TableComp";
import Staticdata from "../../assets/json/Static";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { TRANSACTIONS } from "../../Services/TransactionServices";
import getUserInfo from "../../helper/userhelper";
import getMonthFromNumber from "../../Components/MonthFromNumber";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  Bar,
  BarChart,
  ResponsiveContainer,
} from "recharts";
import { FETCH_ALL_STAKE } from "../../Services/ProductServices";
import {
  FETCH_DASHBOARD_DATA,
  FETCH_REFERRAL_DATA,
  FETCH_STAKE_POOL_DATA,
} from "../../Services/userServices";

const DashboardHome = () => {
  const queryClient = useQueryClient();

  const [graphData2, setGraphData2] = useState([]);

  const [graphData, setGraphData] = useState([]);
  const [ChartValue, setChartValue] = useState(0);
  const [ChartTime, setChartTime] = useState(0);
  const [ChartValue2, setChartValue2] = useState(0);
  const [ChartTime2, setChartTime2] = useState(0);
  const [LastArray, setLastArray] = useState(0);
  const [lastIndex, setlastIndex] = useState(0);
  const [LastArray2, setLastArray2] = useState(0);
  const [lastIndex2, setlastIndex2] = useState(0);
  const [transaction, setTransaction] = useState([]);
  const [dashData, setDashData] = useState({});
  const [referralCount, setReferralCount] = useState(0);
  const [refEarn, setRefEarn] = useState(0);

  const {
    data: dashInfo,
    isPending: isDashLoading,
    isError: isDashError,
    error: dashError,
  } = useQuery({
    queryKey: "dash_data",
    queryFn: async () => {
      const res = await FETCH_DASHBOARD_DATA();
      console.log("====================================");
      console.log(res);
      console.log(res);
      setDashData(res.data);
      return res;
    },
  });
  const {
    data: graph_data,
    isPending: isGraphDataLoading,
    isError: isGraphError,
    error: graphError,
  } = useQuery({
    queryKey: "graph_data",
    queryFn: async () => {
      const res = await FETCH_STAKE_POOL_DATA();
      console.log("====================================");
      console.log(res);
      console.log(res, "graph data");
      if (res.data.stakeData.length !== 0) {
        const myArray = res.data.stakeData;
        myArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        console.log(myArray);
        const reversed = myArray
          .slice()
          .reverse()
          .map((data) => {
            return data;
          });
        const temp = reversed;
        for (const data of temp) {
          const date = new Date(data.createdAt);

          const day = date.getUTCDate().toString().padStart(2, "0");
          const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
          const year = date.getUTCFullYear();
          const formattedDated = `${day}/${month}/${year}`;
          const dateString = formattedDated;
          const dateParts = dateString.split("/");
          const dateObj = new Date(
            dateParts[2],
            dateParts[1] - 1,
            dateParts[0]
          );
          // format the date using toLocaleDateString()
          const formattedDate = dateObj.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          });
          data.timestamp = formattedDate;
          data.month = getMonthFromNumber(dateParts[1]);
        }
        console.log(reversed);
        console.log(temp);
        setGraphData(() => temp);
        setlastIndex2(temp.length - 1);
        setLastArray2(temp[temp.length - 1]);
        setChartValue2(() => temp[temp.length - 1].reward);
        setChartTime2(() => temp[temp.length - 1].timestamp);
        return;
      }
      // setGraphData(res.data.stakeData);
      return res;
    },
  });
  const {
    data: referralInfo,
    isPending: isReferralPending,
    isError: isReferralError,
    error: referralError,
  } = useQuery({
    queryKey: "refer_data",
    queryFn: async () => {
      const res = await FETCH_REFERRAL_DATA();
      console.log("====================================");
      console.log(res, "alalalal");
      console.log(res);
      setReferralCount(res?.count);
      let total = 0;
      res.data.forEach((item) => {
        total += parseFloat(item.amount);
      });
      setRefEarn(total);
      return res;
    },
  });

  const CustomTooltip2 = ({ active, payload, label }) => {
    console.log(active, payload);
    if (active && payload && payload.length) {
      setChartValue2(payload[0].payload.reward);
      setChartTime2(payload[0].payload.timestamp);
    } else {
      if (LastArray2 === 0) {
        setChartValue2(0);
        setChartTime2(0);
      } else {
        setChartValue2(LastArray2.reward);
        setChartTime2(LastArray2.timestamp);
      }
    }
    return null;
  };

  const { data: getTransaction, isPending: getTransactionLoding } = useQuery({
    queryKey: "transaction",
    queryFn: async () => {
      const res = await TRANSACTIONS();
      console.log("====================================");
      console.log(res);
      if (res.code === 200) {
        setTransaction(res.data);
        return;
      }

      return res;
    },
  });
  const transactionFunc = async () => {
    await getTransaction();
  };
  useEffect(() => {
    transactionFunc();
  }, []);
  return (
    <div className="dashboard_home_page_div">
      {/* {isDashLoading ? (
        <div>...</div>
      ) : isDashError ? (
        <div> {dashError} </div>
      )  */}
      <div className="dashboard_home_page_div_1">
        <div className="dashboard_home_page_div_1_title">User Overview</div>
        <div className="dashboard_home_page_div_1_body">
          <div className="dashboard_home_page_div_1_cont1">
            <div className="dashboard_home_page_div_1_cont1_div1">
              <div className="dashboard_home_page_div_1_cont1_div1_title">
                Products bought
              </div>
              <div className="dashboard_home_page_div_1_cont1_div1_content">
                {dashData.products_bought}
                <span className="dashboard_home_page_div_1_cont1_div1_content_span">
                  products
                </span>
              </div>
            </div>
            {/* <div className="dashboard_home_page_div_1_cont1_icon"> */}
            <ShoppingBasket01Icon
              size={28}
              className="dashboard_home_page_div_1_cont1_icon"
            />
            {/* </div> */}
          </div>

          <div className="dashboard_home_page_div_1_cont1">
            <div className="dashboard_home_page_div_1_cont1_div1">
              <div className="dashboard_home_page_div_1_cont1_div1_title">
                Amount Earned
              </div>
              <div className="dashboard_home_page_div_1_cont1_div1_content">
                {dashData.amount_earned}
                <span className="dashboard_home_page_div_1_cont1_div1_content_span">
                  egax
                </span>
              </div>
            </div>
            {/* <div className="dashboard_home_page_div_1_cont1_icon"> */}
            <StakeIcon
              size={28}
              className="dashboard_home_page_div_1_cont1_icon"
            />
            {/* </div> */}
          </div>
          <div className="dashboard_home_page_div_1_cont1">
            <div className="dashboard_home_page_div_1_cont1_div1">
              <div className="dashboard_home_page_div_1_cont1_div1_title">
                Total Referrals
              </div>
              <div className="dashboard_home_page_div_1_cont1_div1_content">
                {referralCount}
                <span className="dashboard_home_page_div_1_cont1_div1_content_span">
                  ref(s)
                </span>
              </div>
            </div>
            {/* <div className="dashboard_home_page_div_1_cont1_icon"> */}
            <UserGroupIcon
              size={28}
              className="dashboard_home_page_div_1_cont1_icon"
            />
            {/* </div> */}
          </div>
          <div className="dashboard_home_page_div_1_cont1">
            <div className="dashboard_home_page_div_1_cont1_div1">
              <div className="dashboard_home_page_div_1_cont1_div1_title">
                Ref Earnings
              </div>
              <div className="dashboard_home_page_div_1_cont1_div1_content">
                {refEarn}
                <span className="dashboard_home_page_div_1_cont1_div1_content_span">
                  egax
                </span>
              </div>
            </div>
            {/* <div className="dashboard_home_page_div_1_cont1_icon"> */}
            <UserGroupIcon
              size={28}
              className="dashboard_home_page_div_1_cont1_icon"
            />
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      <div className="dashboard_home_page_div_3">
        <div className="dashboard_home_page_div_3_cont1">
          <div className="dashboard_home_page_div_3_cont1_title">
            Earnings Overview
          </div>
          <div className="dashboard_home_page_div_3_cont1_body">
            <div
              className="analytics_container_1_Amount"
              onChange={CustomTooltip2}
            >
              {formatNumber(ChartValue2)} egax
            </div>
            <span className="analytics_container_1_Amount_span">
              {ChartTime2}
            </span>
            <div className="analytics_container_1_chart">
              <div
                className="assets_chart_area1a"
                style={{ width: "100%", height: 120 }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={130}
                    height={10}
                    data={graphData}
                    margin={{
                      top: 0,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="colorUvBar1"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#51cb89"
                          stopOpacity={0.7}
                        />
                        <stop
                          offset="100%"
                          stopColor="#51cb89"
                          stopOpacity={0.3}
                        />
                      </linearGradient>
                    </defs>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="month" stroke="0" color="#fff" />
                    {/* <YAxis /> */}
                    <Tooltip content={<CustomTooltip2 />} />
                    {/* <Legend /> */}
                    <Bar
                      // type="monotone"
                      dataKey="reward"
                      // stroke="#51cb89"
                      // fillOpacity={1}
                      fill="url(#colorUvBar1)"
                      // strokeWidth={2}
                      outerRadius="10"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              {/* ===== */}
              {/* ===== */}
              {/* ===== */}
            </div>
          </div>
        </div>
        <div className="dashboard_home_page_div_3_cont2">
          <div className="dashboard_home_page_div_3_cont2_title">
            Trending Products
          </div>
          <div className="dashboard_home_page_div_3_cont2_body">
            <div className="dashboard_home_page_div_3_cont2_body_cont1">
              <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div">
                <img
                  src="/img/erc404_car_img_dummy.jpeg"
                  alt=""
                  className="dashboard_home_page_div_3_cont2_body_cont1_img_div_img"
                />
              </div>
              <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div">
                <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_title">
                  EgoApex28
                </div>
                <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount">
                  <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_title">
                    Price
                  </div>
                  <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_txt">
                    <img
                      src="/img/egax_logo.png"
                      alt=""
                      className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_txt_img"
                    />{" "}
                    20.05
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard_home_page_div_3_cont2_body_cont1">
              <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div">
                <img
                  src="/img/erc404_car_img_dummy.jpeg"
                  alt=""
                  className="dashboard_home_page_div_3_cont2_body_cont1_img_div_img"
                />
              </div>
              <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div">
                <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_title">
                  EgoApex28
                </div>
                <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount">
                  <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_title">
                    Price
                  </div>
                  <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_txt">
                    <img
                      src="/img/egax_logo.png"
                      alt=""
                      className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_txt_img"
                    />{" "}
                    20.05
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard_home_page_div_3_cont2_body_cont1">
              <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div">
                <img
                  src="/img/erc404_car_img_dummy.jpeg"
                  alt=""
                  className="dashboard_home_page_div_3_cont2_body_cont1_img_div_img"
                />
              </div>
              <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div">
                <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_title">
                  EgoApex28
                </div>
                <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount">
                  <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_title">
                    Price
                  </div>
                  <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_txt">
                    <img
                      src="/img/egax_logo.png"
                      alt=""
                      className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_txt_img"
                    />{" "}
                    20.05
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard_home_page_div_3_cont2_body_cont1">
              <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div">
                <img
                  src="/img/erc404_car_img_dummy.jpeg"
                  alt=""
                  className="dashboard_home_page_div_3_cont2_body_cont1_img_div_img"
                />
              </div>
              <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div">
                <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_title">
                  EgoApex28
                </div>
                <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount">
                  <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_title">
                    Price
                  </div>
                  <div className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_txt">
                    <img
                      src="/img/egax_logo.png"
                      alt=""
                      className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_txt_img"
                    />{" "}
                    20.05
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      <div className="dashboard_home_page_div_2">
        <div className="dashboard_home_page_div_2_body">
          <Table
            tableTitle={"Transactions"}
            TableData={transaction.slice(0, 7)}
            dummyData={Staticdata.productsTableData.slice(0, 8)}
            contentLoading={getTransactionLoding}
            userName={getUserInfo().username}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
