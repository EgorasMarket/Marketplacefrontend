import React, { useState, useEffect } from "react";
import Staticdata from "../../assets/json/Static";
import { ShoppingBasket01Icon } from "hugeicons-react";
import { StakeIcon } from "hugeicons-react";
import formatNumber from "../../Components/FormatNumber";
import { UserGroupIcon } from "hugeicons-react";
import { ShoppingCart02Icon } from "hugeicons-react";
import { FETCH_ALL_STAKE } from "../../Services/ProductServices";
import SyncLoader from "react-spinners/SyncLoader";
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
  const [graphData2, setGraphData2] = useState([]);
  const [graphData, setGraphData] = useState([
    {
      value: 3729.2599999999998,
      timestamp: "Jan 01, 2024",
      month: "Jan",
    },
    {
      value: 459.12999999999994,
      timestamp: "Dec 30, 2023",
      month: "Dec",
    },
    {
      value: 412.28,
      timestamp: "Dec 29, 2023",
      month: "Dec",
    },
    {
      value: 28.11,
      timestamp: "Dec 25, 2023",
      month: "Dec",
    },
    {
      value: 0,
      timestamp: "Dec 24, 2023",
      month: "Dec",
    },
    {
      value: 281.09999999999997,
      timestamp: "Dec 23, 2023",
      month: "Dec",
    },
    {
      value: 103.07,
      timestamp: "Dec 17, 2023",
      month: "Dec",
    },
    {
      value: 3738.6299999999997,
      timestamp: "Dec 16, 2023",
      month: "Dec",
    },
    {
      value: 993.2199999999999,
      timestamp: "Dec 10, 2023",
      month: "Dec",
    },
    {
      value: 0,
      timestamp: "Dec 08, 2023",
      month: "Dec",
    },
    {
      value: 65.58999999999999,
      timestamp: "Dec 07, 2023",
      month: "Dec",
    },
    {
      value: 65.58999999999999,
      timestamp: "Dec 06, 2023",
      month: "Dec",
    },
    {
      value: 580.9399999999999,
      timestamp: "Dec 05, 2023",
      month: "Dec",
    },
    {
      value: 65.58999999999999,
      timestamp: "Dec 04, 2023",
      month: "Dec",
    },
    {
      value: 65.58999999999999,
      timestamp: "Dec 03, 2023",
      month: "Dec",
    },
    {
      value: 11290.849999999999,
      timestamp: "Dec 01, 2023",
      month: "Dec",
    },
    {
      value: 15872.779999999999,
      timestamp: "Nov 29, 2023",
      month: "Nov",
    },
  ]);
  const [ChartValue, setChartValue] = useState(0);
  const [ChartTime, setChartTime] = useState(0);
  const [ChartValue2, setChartValue2] = useState(0);
  const [ChartTime2, setChartTime2] = useState(0);
  const [LastArray, setLastArray] = useState(0);
  const [lastIndex, setlastIndex] = useState(0);
  const [LastArray2, setLastArray2] = useState(0);
  const [lastIndex2, setlastIndex2] = useState(0);
  const CustomTooltip2 = ({ active, payload, label }) => {
    console.log(active, payload);
    if (active && payload && payload.length) {
      setChartValue2(payload[0].payload.value);
      setChartTime2(payload[0].payload.timestamp);
    } else {
      if (LastArray2 === 0) {
        setChartValue2(0);
        setChartTime2(0);
      } else {
        setChartValue2(LastArray2.value);
        setChartTime2(LastArray2.timestamp);
      }
    }
    return null;
  };

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
                1,000
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
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    {/* <XAxis dataKey="month" stroke="0" color="#fff" /> */}
                    {/* <YAxis /> */}
                    <Tooltip content={<CustomTooltip2 />} />
                    {/* <Legend /> */}
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
              30{" "}
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
                  color="#6ebbb1"
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
                        {data.amount_staked}
                      </div>
                      <div className="dashboardEarnDiv_cont2_div1_cont1_div">
                        <img
                          src="/img/egax_logo.png"
                          alt=""
                          className="dashboardEarnDiv_cont2_div1_cont1_div_img"
                        />{" "}
                        {data.rewards_earned}
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
