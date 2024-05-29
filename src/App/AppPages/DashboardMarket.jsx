import React, { useState, useEffect } from "react";
import "../AppStyles/dashboardMarket.css";
import { Link } from "react-router-dom";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_BY_ID,
} from "../../Services/ProductServices";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

const DashboardMarket = () => {
  const [products, setProducts] = useState([]);
  const { data: getProducts } = useQuery({
    queryKey: "getProducts",
    queryFn: async () => {
      const res = await FETCH_PRODUCTS();
      console.log("====================================");
      console.log(res);
      console.log(res);
      setProducts(res.data);
      return res;
    },
  });
  const FetchAllProducts = async () => {
    await getProducts();
  };

  useEffect(() => {
    FetchAllProducts();
  }, []);

  // const products = [
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  //   {
  //     id: "1",
  //     img: "/img/marketImgs/tesla_car_dummy.jpeg",
  //     title: "Egoras Gen(3000)",
  //     price: "20.43",
  //     Owner: "0x3de...2d33",
  //   },
  // ];

  return (
    <div className="dashboardMarketPlace">
      <div className="dashboardMarketPlace_div1">
        <img
          src="/img/marketImgs/marketBanner1.jpeg"
          alt=""
          className="dashboardMarketPlace_div1_img"
        />
      </div>
      <div className="market_trending_div">
        <div className="dashboardMarketPlace_div1_body_title">
          Trending Collections 🔥
        </div>
        <div className="market_trending_div_body">
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
      <div className="dashboardMarketPlace_div1_body">
        <div className="dashboardMarketPlace_div1_body_title">Collections</div>
        <div className="dashboardMarketPlace_div1_body_conts">
          {products.map((data) => (
            <a
              href={`/app/market/productdetail/${data.id}/${data.product_name}`}
              className="dashboardMarketPlace_div1_body_conts_div1"
              key={data.id}
              id={data.id}
            >
              <div className="dashboardMarketPlace_div1_body_conts_div1_img_div">
                <img
                  src={data.product_images}
                  alt=""
                  className="dashboardMarketPlace_div1_body_conts_div1_img"
                />
              </div>
              <div className="dashboardMarketPlace_div1_body_conts_div1_title">
                {data.product_name}
              </div>
              <div className="dashboardMarketPlace_div1_body_conts_div1_amount">
                <img
                  src="/img/egax_logo.png"
                  alt=""
                  className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_txt_img"
                />{" "}
                {parseFloat(data.amount).toFixed(2)}
                <span className="dashboardMarketPlace_div1_body_conts_div1_amount_span">
                  EGAX
                </span>
              </div>
              <div className="dashboardMarketPlace_div1_body_conts_div1_creator">
                Owner:{" "}
                <span className="dashboardMarketPlace_div1_body_conts_div1_creator_span">
                  {`${data.user_wallet.slice(0, 4)}...${data.user_wallet.slice(
                    39,
                    42
                  )}`}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardMarket;
