import React, { useState, useEffect } from "react";
import "../AppStyles/dashboardOrder.css";
import DashboardOrderModal from "./DashboardOrderModal";
import { numberWithCommas } from "../../assets/js/numberWithCommas";
import SyncLoader from "react-spinners/SyncLoader";
import NodataComp from "../../Components/NoData/NodataComp";
import { ShimmerButton } from "react-shimmer-effects-18";
import { FETCH_ALL_ORDERS } from "../../Services/ProductServices";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import "../AppStyles/DashboardProducts.css";

const DashboardOrders = () => {
  // const { user } = useSelector((state) => state.auth);
  const [saleDetails, setSaleDetails] = useState("");
  const [activeTab, setActiveTab] = useState("egc");

  const ToggleActiveTab = (e) => [setActiveTab(e.currentTarget.id)];

  const [orders, setOrders] = useState([]);
  const ToggleSaleDetails = (product_id) => {
    setSaleDetails(product_id);
    //// console.logog(product_id);
  };
  //

  const { data: getProducts, isPending } = useQuery({
    queryKey: ["getProducts"],
    queryFn: async () => {
      const res = await FETCH_ALL_ORDERS();
      console.log("====================================");
      console.log(res);
      console.log(res);
      setOrders(res.data);
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
    <div className="dashboardOrder_div">
      <div className="dashboardOrder_div_1">
        <div className="DashboardWalletsDiv_area2b">
          <div className="DashboardWalletsDiv_area2_cont1">
            Total Ordered Products
          </div>
          <div className="DashboardWalletsDiv_area2_cont2">
            <div className="DashboardWalletsDiv_area2_cont2_area1">
              {isPending ? (
                <ShimmerButton size="lg" className="custom_shimmer" />
              ) : (
                <div className="DashboardWalletsDiv_area2_cont2_area1_bal">
                  {orders.length}
                  <span className="DashboardWalletsDiv_area2_cont2_area1_bal_span">
                    itms
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="dashboardEarnDiv_cont2">
        <div className="dashboardEarnDiv_cont2_title">Orders</div>
        <div className="dashboardEarnDiv_cont2_div1">
          <div className="dashboardEarnDiv_cont2_div1_head">
            <div className="dashboardEarnDiv_cont2_div1_head_cont1_first">
              Product
            </div>
            <div className="dashboardEarnDiv_cont2_div1_head_cont1">Amount</div>
            <div className="dashboardEarnDiv_cont2_div1_head_cont1">
              Quantity
            </div>
            <div className="dashboardEarnDiv_cont2_div1_head_cont1">Owner</div>
            <div className="dashboardEarnDiv_cont2_div1_head_cont1_last">
              Delivery status
            </div>
          </div>
          <>
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
              <div className="dashboardOrder_div_body">
                {orders.length >= 1 ? (
                  orders.map((data, index) => {
                    // const images = JSON.parse(data.product_images);
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
                          <img
                            src="/img/egax_logo.png"
                            alt=""
                            className="dashboardEarnDiv_cont2_div1_cont1_div_img"
                          />{" "}
                          {data.amount}
                        </div>
                        <div className="dashboardEarnDiv_cont2_div1_cont1_div">
                          {data.quantity}
                        </div>
                        <div className="dashboardEarnDiv_cont2_div1_cont1_div">
                          0x3de...45fd
                        </div>
                        <div className="dashboardEarnDiv_cont2_div1_cont1_div_last">
                          <button className="dashboardEarnDiv_cont2_div1_cont1_div_last_btn">
                            {data.deliveryStatus}
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <NodataComp />
                )}
              </div>
            )}
          </>
          {/* ====== */}
          {/* ====== */}
          {/* ====== */}
          {/* ====== */}
        </div>
      </div>

      {saleDetails === ""
        ? null
        : orders.map((data) => (
            <>
              {data.id === saleDetails ? (
                <div>
                  <DashboardOrderModal
                    closeModal={ToggleSaleDetails}
                    payload={data}
                  />
                </div>
              ) : null}
            </>
          ))}
    </div>
  );
};

export default DashboardOrders;
