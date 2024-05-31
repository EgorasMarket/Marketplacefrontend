import React, { useState, useEffect } from "react";
import Staticdata from "../../assets/json/Static";
import { ShoppingBasket01Icon } from "hugeicons-react";
import { StakeIcon } from "hugeicons-react";
import formatNumber from "../../Components/FormatNumber";
import { UserGroupIcon } from "hugeicons-react";
import { ShoppingCart02Icon } from "hugeicons-react";
import { FETCH_ALL_STAKE } from "../../Services/ProductServices";
import { FETCH_STAKE_POOL_DATA } from "../../Services/userServices";
import SyncLoader from "react-spinners/SyncLoader";
import { FETCH_DASHBOARD_DATA } from "../../Services/userServices";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import NodataComp from "../../Components/NoData/NodataComp";
import "../AppStyles/dashboardEarn.css";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  Bar,
  BarChart,
  ResponsiveContainer,
} from "recharts";
const DashboardEarn = () => {
  const [stakes, setStakes] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [dashData, setDashData] = useState({});

  const { data: getProducts, isPending } = useQuery({
    queryKey: "getProducts",
    queryFn: async () => {
      const res = await FETCH_ALL_STAKE();
      console.log("====================================");
      console.log(res);
      console.log(res);
      setStakes(res.data);
      return res;
    },
  });
  const FetchAllProducts = async () => {
    await getProducts();
  };

  useEffect(() => {
    FetchAllProducts();
  }, []);

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
        myArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        console.log(myArray);
        const reversed = myArray
          .slice()
          .reverse()
          .map((data) => {
            return data;
          });
        const temp = reversed;

        setGraphData(() => temp);
        console.log(temp);
        return;
      }
      return res;
    },
  });
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
  return (
    <div className="dashboardEarnDiv">
      <div className="dashboardEarnDiv_cont1">
        <div className="dashboardEarnDiv_cont1_div1">
          <div className="dashboardEarnDiv_cont1_div1_earn_amount">
            <div className="dashboardEarnDiv_cont1_div1_earn_amount_cont1">
              <div className="dashboardEarnDiv_cont1_div1_earn_amount_cont1_title">
                Amount Earned
              </div>
              <div className="dashboardEarnDiv_cont1_div1_earn_amount_cont1_amount">
                <img
                  src="/img/egax_logo.png"
                  alt=""
                  className="dashboardEarnDiv_cont1_div1_earn_amount_cont1_amount_img"
                />
                {dashData.amount_earned}
                <span className="dashboardEarnDiv_cont1_div1_earn_amount_cont1_amount_span">
                  Egax
                </span>
              </div>
            </div>
            <div className="dashboardEarnDiv_cont1_div1_earn_amount_cont2">
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

                    <Bar
                      // type="monotone"
                      dataKey="value"
                      // stroke="#51cb89"
                      // fillOpacity={1}
                      fill="url(#colorUvBar1)"
                      // strokeWidth={2}
                      outerRadius="10"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="dashboardEarnDiv_cont1_div1_cont2">
            <div className="dashboardEarnDiv_cont1_div1_cont2_title">
              Products staked
            </div>
            <div className="dashboardEarnDiv_cont1_div1_cont2_amount">
              <ShoppingCart02Icon
                size={30}
                className="dashboardEarnDiv_cont1_div1_cont2_amount_icon"
              />
              {stakes.length}
              <span className="dashboardEarnDiv_cont1_div1_earn_amount_cont1_amount_span">
                prods
              </span>
            </div>
          </div>
        </div>
        <div className="dashboardEarnDiv_cont1_div2">
          {" "}
          <div className="dashboardEarnDiv_cont1_div2_cont1">
            <div className="dashboardEarnDiv_cont1_div1_cont2_title">
              Products staked
            </div>
            <div className="dashboardEarnDiv_cont1_div1_cont2_amount">
              <ShoppingCart02Icon
                size={30}
                className="dashboardEarnDiv_cont1_div1_cont2_amount_icon"
              />
              30{" "}
              <span className="dashboardEarnDiv_cont1_div1_earn_amount_cont1_amount_span">
                prods
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboardEarnDiv_cont2">
        <div className="dashboardEarnDiv_cont2_title">Products Staked</div>
        <div className="dashboardEarnDiv_cont2_div1">
          <div className="dashboardEarnDiv_cont2_div1_head">
            <div className="dashboardEarnDiv_cont2_div1_head_cont1_first">
              Product
            </div>
            <div className="dashboardEarnDiv_cont2_div1_head_cont1">
              Quantity Staked
            </div>
            <div className="dashboardEarnDiv_cont2_div1_head_cont1">Earned</div>
            <div className="dashboardEarnDiv_cont2_div1_head_cont1">
              Token Name
            </div>
            <div className="dashboardEarnDiv_cont2_div1_head_cont1_last">
              Date Staked
            </div>
          </div>
          {isPending ? (
            <div className="ProductLoadingDiv">
              <div className="prod_loading_cont">
                <SyncLoader
                  color="#18b36a"
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  className="loading_div_area_cont_icon"
                  // size={80}
                  speedMultiplier={1}
                />
                <div className="prod_loading_cont_txt">
                  Fetching Products Please wait...
                </div>
              </div>
            </div>
          ) : (
            <>
              {" "}
              {stakes.length >= 1 ? (
                stakes.map((data, index) => {
                  // const images = JSON.parse(data.product_images);
                  let date = data.start_date.split(" ");
                  return (
                    <div className="dashboardEarnDiv_cont2_div1_cont1">
                      <div className="dashboardEarnDiv_cont2_div1_cont1_div_first">
                        <img
                          src={data.product_images}
                          alt=""
                          className="dashboardEarnDiv_cont2_div1_cont1_product_divImg"
                        />
                        <div className="dashboardEarnDiv_cont2_div1_cont1_product_div_title">
                          {data.product_name}
                        </div>
                      </div>
                      <div className="dashboardEarnDiv_cont2_div1_cont1_div">
                        {data.amount_staked} NFts
                      </div>
                      <div className="dashboardEarnDiv_cont2_div1_cont1_div">
                        <img
                          src="/img/egax_logo.png"
                          alt=""
                          className="dashboardEarnDiv_cont2_div1_cont1_div_img"
                        />{" "}
                        {data.rewards_earned} egax
                      </div>
                      <div className="dashboardEarnDiv_cont2_div1_cont1_div">
                        {data.token_id}
                      </div>
                      <div className="dashboardEarnDiv_cont2_div1_cont1_div_last">
                        <button className="dashboardEarnDiv_cont2_div1_cont1_div_last_btn">
                          {date[0]}
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <NodataComp />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardEarn;
