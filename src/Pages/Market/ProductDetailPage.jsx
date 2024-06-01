import React, { useState, useEffect, useRef } from "react";
// Import Swiper React components
import "./PowerDetailPage.css";
import "./ProductDetail.css";
import "./checkout.css";
// import { numberWithCommas } from "../../assets/js/numberWithCommas";
import { numberWithCommas } from "../../assets/js/numberWithCommas";
import { Rating } from "react-simple-star-rating";
import { useParams } from "react-router-dom";
import { ShimmerButton } from "react-shimmer-effects-18";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { FETCH_PRODUCTS_BY_ID } from "../../Services/ProductServices";
import { FETCH_PRODUCTS } from "../../Services/ProductServices";
import Blockies from "react-blockies";
import { ShoppingCart02Icon } from "hugeicons-react";
import EgaxUsdPrice from "../../Components/EgaxUsdPrice";

// import required modules
const ProductDetailPage = () => {
  const { id, name } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const [subDisable, setSubDisable] = useState(true);
  const [addDisable, setAddDisable] = useState(false);
  const [payload, setPayload] = useState({});
  const [products, setProducts] = useState([]);
  const { data: getProducts } = useQuery({
    queryKey: ["getProducts"],
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
  const productQuantity = 150;
  const addCount = () => {
    setCount(parseInt(count) + 1);
  };
  const subtractCount = () => {
    setCount(parseInt(count) - 1);
  };
  const countChange = (e) => {
    setCount(parseFloat(e.target.value));
    //// console.logog(e.target.value);
    if (e.target.value === "") {
      setCount(1);
      return;
    }
    if (parseFloat(e.target.value) >= payload.quantity) {
      setCount(payload.quantity);
      //// console.logog("ive reached");
      return;
    }
    if (parseFloat(e.target.value) <= 1) {
      setCount(1);
      //// console.logog("ive reached");
      return;
    }
  };
  console.log("====================================");
  console.log(id, name);
  console.log("====================================");
  // const fetchProductDetail = async () => {
  //   const response = await PRODUCT_DETAILS(id);
  //   setLoading(false);
  //   if (!response.success) {
  //     setError("Failure to fetch product");
  //     return;
  //   }
  //   setProduct(response.data);
  //   //// console.logog(response);
  // };

  // useEffect(() => {
  //   fetchProductDetail();
  // }, [id]);

  useEffect(() => {
    if (count <= 1) {
      setSubDisable(true);
    } else {
      setSubDisable(false);
    }
    if (count === productQuantity) {
      setAddDisable(true);
    } else {
      setAddDisable(false);
    }

    if (productQuantity <= 0) {
      setAddDisable(true);
      setSubDisable(true);
    }
  }, [count, productQuantity]);

  const { data: getProductById, isPending: getProductByIdLoading } = useQuery({
    // queryKey: "getProductById",
    queryFn: async () => {
      const res = await FETCH_PRODUCTS_BY_ID(id);
      console.log("====================================");
      console.log(res);
      setPayload(res.data);
      return res;
    },
  });
  const FetchProductByid = async () => {
    await getProductById();
  };
  useEffect(() => {
    console.log("====================================");
    console.log(payload);
    console.log("====================================");
    if (payload.length === 0) {
      FetchProductByid();
      return;
    }
  }, [payload]);

  if (getProductByIdLoading) {
    return (
      <div className="ProductDetailPage_div">
        <section className="ProductDetailPage_section">
          <div className="custom_container">
            <div className="ProductDetailPage_section_area">
              <div className="ProductDetailPage_section_area_1">
                <ShimmerButton size="lg" className="custom_shimmer" />
              </div>
              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              <div className="ProductDetailPage_section_area_2">
                <div className="ProductDetailPage_section_area_2_title">
                  <ShimmerButton size="lg" className="custom_shimmer" />
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div className="ProductDetailPage_section_area_2_code">
                  Product code:{" "}
                  <span className="ProductDetailPage_section_area_2_code_span">
                    <ShimmerButton size="lg" className="custom_shimmer" />
                  </span>{" "}
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div className="ProductDetailPage_section_area_2_rating_div">
                  <Rating initialValue={"4"} readonly={true} />{" "}
                  <span className="ProductDetailPage_section_area_2_rating_div_span">
                    4.0
                  </span>
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div className="ProductDetailPage_section_area_2_count">
                  <div className="ProductDetailPage_section_area_2_count_div">
                    <ShimmerButton size="lg" className="custom_shimmer" />
                  </div>
                  <div className="ProductDetailPage_section_area_2_count_quant_div">
                    Quantity:{" "}
                    <span className="ProductDetailPage_section_area_2_count_quant_div_span">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </span>
                  </div>
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div className="ProductDetailPage_section_area_2_amount">
                  <ShimmerButton size="lg" className="custom_shimmer" />
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div className="ProductDetailPage_section_area_2_tec_div">
                  <div className="ProductDetailPage_section_area_2_tec_div_title">
                    Specifications
                  </div>
                  <div className="ProductDetailPage_section_area_2_tec_div_body">
                    <div className="ProductDetailPage_section_area_2_tec_div_body_1">
                      <div className="ProductDetailPage_section_area_2_tec_div_body_1_title">
                        <ShimmerButton size="lg" className="custom_shimmer" />
                      </div>
                      <div className="ProductDetailPage_section_area_2_tec_div_body_1_para">
                        <ShimmerButton size="lg" className="custom_shimmer" />
                      </div>
                    </div>
                    <div className="ProductDetailPage_section_area_2_tec_div_body_1">
                      <div className="ProductDetailPage_section_area_2_tec_div_body_1_title">
                        <ShimmerButton size="lg" className="custom_shimmer" />
                      </div>
                      <div className="ProductDetailPage_section_area_2_tec_div_body_1_para">
                        <ShimmerButton size="lg" className="custom_shimmer" />
                      </div>
                    </div>
                    <div className="ProductDetailPage_section_area_2_tec_div_body_1">
                      <div className="ProductDetailPage_section_area_2_tec_div_body_1_title">
                        <ShimmerButton size="lg" className="custom_shimmer" />
                      </div>
                      <div className="ProductDetailPage_section_area_2_tec_div_body_1_para">
                        <ShimmerButton size="lg" className="custom_shimmer" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div className="ProductDetailPage_section_area_2_warranty_div">
                  <ShimmerButton size="lg" className="custom_shimmer" />
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div className="ProductDetailPage_section_area_2_total_div">
                  <div className="ProductDetailPage_section_area_2_total_div_1">
                    <div className="ProductDetailPage_section_area_2_total_div_1_title">
                      Quantity
                    </div>
                    <div className="ProductDetailPage_section_area_2_total_div_1_para">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="ProductDetailPage_section_area_2_total_div_1">
                    <div className="ProductDetailPage_section_area_2_total_div_1_title">
                      Unit Amount
                    </div>
                    <div className="ProductDetailPage_section_area_2_total_div_1_para">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="ProductDetailPage_section_area_2_total_div_1">
                    <div className="ProductDetailPage_section_area_2_total_div_1_title">
                      Total
                    </div>
                    <div className="ProductDetailPage_section_area_2_total_div_1_para">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                  </div>
                  <ShimmerButton size="lg" className="custom_shimmer" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ProductDetailPage_div">
        <section className="ProductDetailPage_section">
          <div className="custom_container">
            <div className="ProductDetailPage_section_area">
              <div className="ProductDetailPage_section_area_1">
                <ShimmerButton size="lg" className="custom_shimmer" />
              </div>
              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              <div className="ProductDetailPage_section_area_2">
                <div className="ProductDetailPage_section_area_2_title">
                  <ShimmerButton size="lg" className="custom_shimmer" />
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div className="ProductDetailPage_section_area_2_code">
                  Product code:{" "}
                  <span className="ProductDetailPage_section_area_2_code_span">
                    <ShimmerButton size="lg" className="custom_shimmer" />
                  </span>{" "}
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div className="ProductDetailPage_section_area_2_rating_div">
                  <Rating initialValue={"4"} readonly={true} />{" "}
                  <span className="ProductDetailPage_section_area_2_rating_div_span">
                    4.0
                  </span>
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div className="ProductDetailPage_section_area_2_count">
                  <div className="ProductDetailPage_section_area_2_count_div">
                    <ShimmerButton size="lg" className="custom_shimmer" />
                  </div>
                  <div className="ProductDetailPage_section_area_2_count_quant_div">
                    Quantity:{" "}
                    <span className="ProductDetailPage_section_area_2_count_quant_div_span">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </span>
                  </div>
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div className="ProductDetailPage_section_area_2_amount">
                  <ShimmerButton size="lg" className="custom_shimmer" />
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div className="ProductDetailPage_section_area_2_tec_div">
                  <div className="ProductDetailPage_section_area_2_tec_div_title">
                    Specifications
                  </div>
                  <div className="ProductDetailPage_section_area_2_tec_div_body">
                    <div className="ProductDetailPage_section_area_2_tec_div_body_1">
                      <div className="ProductDetailPage_section_area_2_tec_div_body_1_title">
                        <ShimmerButton size="lg" className="custom_shimmer" />
                      </div>
                      <div className="ProductDetailPage_section_area_2_tec_div_body_1_para">
                        <ShimmerButton size="lg" className="custom_shimmer" />
                      </div>
                    </div>
                    <div className="ProductDetailPage_section_area_2_tec_div_body_1">
                      <div className="ProductDetailPage_section_area_2_tec_div_body_1_title">
                        <ShimmerButton size="lg" className="custom_shimmer" />
                      </div>
                      <div className="ProductDetailPage_section_area_2_tec_div_body_1_para">
                        <ShimmerButton size="lg" className="custom_shimmer" />
                      </div>
                    </div>
                    <div className="ProductDetailPage_section_area_2_tec_div_body_1">
                      <div className="ProductDetailPage_section_area_2_tec_div_body_1_title">
                        <ShimmerButton size="lg" className="custom_shimmer" />
                      </div>
                      <div className="ProductDetailPage_section_area_2_tec_div_body_1_para">
                        <ShimmerButton size="lg" className="custom_shimmer" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div className="ProductDetailPage_section_area_2_warranty_div">
                  <ShimmerButton size="lg" className="custom_shimmer" />
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div className="ProductDetailPage_section_area_2_total_div">
                  <div className="ProductDetailPage_section_area_2_total_div_1">
                    <div className="ProductDetailPage_section_area_2_total_div_1_title">
                      Quantity
                    </div>
                    <div className="ProductDetailPage_section_area_2_total_div_1_para">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="ProductDetailPage_section_area_2_total_div_1">
                    <div className="ProductDetailPage_section_area_2_total_div_1_title">
                      Unit Amount
                    </div>
                    <div className="ProductDetailPage_section_area_2_total_div_1_para">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="ProductDetailPage_section_area_2_total_div_1">
                    <div className="ProductDetailPage_section_area_2_total_div_1_title">
                      Total
                    </div>
                    <div className="ProductDetailPage_section_area_2_total_div_1_para">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                  </div>
                  <ShimmerButton size="lg" className="custom_shimmer" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // const images = JSON.parse(product.product_images);

  const specifications = payload.product_details.split(",");

  return (
    <div className="ProductDetailPage_div">
      <section className="ProductDetailPage_section">
        <div className="ProductDetailPage_section_area">
          <div className="ProductDetailPage_section_area_1">
            <img
              src={payload.product_images}
              className="ProductDetailPage_section_area_1Swiper_slide_img"
            />
          </div>
          {/* ========= */}
          {/* ========= */}
          {/* ========= */}
          {/* ========= */}
          {/* ========= */}
          <div className="ProductDetailPage_section_area_2">
            <div className="ProductDetailPage_section_area_2_title">
              {payload.product_name}
            </div>
            {/* ===== */}
            {/* ===== */}
            {/* ===== */}
            {/* ===== */}
            <div className="ProductDetailPage_section_area_2_code">
              Nft ID:{" "}
              <span className="ProductDetailPage_section_area_2_code_span">
                #{payload.product_id}
              </span>{" "}
            </div>
            {/* ===== */}
            {/* ===== */}
            {/* ===== */}
            {/* ===== */}
            <div className="ProductDetailPage_section_area_2_rating_div">
              <Rating initialValue={"4"} readonly={true} />{" "}
              <span className="ProductDetailPage_section_area_2_rating_div_span">
                4.0
              </span>
            </div>
            {/* ===== */}
            {/* ===== */}
            {/* ===== */}
            {/* ===== */}
            <div className="ProductDetailPage_section_area_2_count">
              <div className="ProductDetailPage_section_area_2_count_div">
                <button
                  className="ProductDetailPage_section_area_2_count_div_subtract"
                  onClick={subtractCount}
                  disabled={subDisable}
                >
                  _
                </button>
                <input
                  type="number"
                  value={count}
                  onChange={countChange}
                  className="ProductDetailPage_section_area_2_count_div_input"
                />
                <button
                  className="ProductDetailPage_section_area_2_count_div_add"
                  onClick={addCount}
                  disabled={addDisable}
                >
                  +
                </button>
              </div>
              <div className="ProductDetailPage_section_area_2_count_quant_div">
                Quantity:{" "}
                <span className="ProductDetailPage_section_area_2_count_quant_div_span">
                  {payload.quantity}
                </span>
              </div>
            </div>
            {/* ===== */}
            {/* ===== */}
            {/* ===== */}
            {/* ===== */}
            <div className="ProductDetailPage_section_area_2_amount">
              <img
                src="/img/egax_logo.png"
                alt=""
                className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_txt_img"
              />{" "}
              {numberWithCommas(parseFloat(count * payload.amount).toFixed(2))}{" "}
              EGAX
            </div>
            <EgaxUsdPrice
              num={parseFloat(count * payload.amount).toFixed(2)}
              className="productPriceUsd"
            />
            {/* ===== */}
            {/* ===== */}
            {/* ===== */}
            {/* ===== */}
            <div className="ProductDetailPage_section_area_2_tec_div">
              <div className="ProductDetailPage_section_area_2_tec_div_title">
                Specification
              </div>
              <div className="ProductDetailPage_section_area_2_tec_div_body">
                {specifications.map((data, index) => {
                  let val = data.split(":");
                  return (
                    <div className="ProductDetailPage_section_area_2_tec_div_body_1">
                      <div className="ProductDetailPage_section_area_2_tec_div_body_1_title">
                        {val[0]}
                      </div>
                      <div className="ProductDetailPage_section_area_2_tec_div_body_1_para">
                        {val[1]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* ===== */}
            {/* ===== */}
            {/* ===== */}
            {/* ===== */}
            <div className="ProductDetailPage_section_area_2_tec_div">
              <div className="ProductDetailPage_section_area_2_tec_div_title">
                Description
              </div>
              <div className="ProductDetailPage_section_area_2_tec_div_body_description">
                {payload.product_specifications}
              </div>
            </div>
            {/* ===== */}
            {/* ===== */}
            {/* ===== */}
            <div className="ProductDetailPage_section_area_2_warranty_div">
              Max 6months Warranty
            </div>
            {/* ===== */}
            {/* ===== */}
            {/* ===== */}
            <div className="ProductDetailPage_section_area_2_total_div">
              <div className="ProductDetailPage_section_area_2_total_div_1">
                <div className="ProductDetailPage_section_area_2_total_div_1_title">
                  Quantity
                </div>
                <div className="ProductDetailPage_section_area_2_total_div_1_para">
                  {count}
                </div>
              </div>
              <div className="ProductDetailPage_section_area_2_total_div_1">
                <div className="ProductDetailPage_section_area_2_total_div_1_title">
                  Unit Amount
                </div>
                <div className="ProductDetailPage_section_area_2_total_div_1_para">
                  <img
                    src="/img/egax_logo.png"
                    alt=""
                    className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_txt_img"
                  />{" "}
                  {numberWithCommas(parseFloat(payload.amount).toFixed(2))} EGAX
                </div>
              </div>
              <div className="ProductDetailPage_section_area_2_total_div_1">
                <div className="ProductDetailPage_section_area_2_total_div_1_title">
                  Total
                </div>
                <div className="ProductDetailPage_section_area_2_total_div_1_para">
                  <img
                    src="/img/egax_logo.png"
                    alt=""
                    className="dashboard_home_page_div_3_cont2_body_cont1_img_div_txt_div_amount_txt_img"
                  />{" "}
                  {numberWithCommas(
                    parseFloat(count * payload.amount).toFixed(2)
                  )}{" "}
                  EGAX
                </div>
              </div>
              {productQuantity < 0 ? (
                <button
                  className="ProductDetailPage_section_area_2_total_div_btn"
                  disabled
                >
                  Out Of Stock
                </button>
              ) : (
                <a
                  href={`/app/market/product/detail/${payload.id}/${count}/${payload.product_name}/checkout`}
                  className="ProductDetailPage_section_area_2_total_div_btn_link"
                >
                  <button className="ProductDetailPage_section_area_2_total_div_btn">
                    Proceed to Paymnet
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="ProductDetailPage_section_more_products_div">
          <div className="ProductDetailPage_section_more_products_div_title">
            More Collections{" "}
            <a href="/app/market">
              <button className="HomeDiv_section2_area_title_btn">
                View More
              </button>{" "}
            </a>
          </div>
          <div className="ProductDetailPage_section_more_products_div_body">
            {products.slice(0, 4).map((data) => (
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
                  <div className="dashboardMarketPlace_div1_body_conts_div1_title_txt">
                    {data.product_name}{" "}
                  </div>
                  <div className="dashboardMarketPlace_div1_body_conts_div1_title_div2">
                    <Blockies
                      seed={data.user_wallet}
                      size={8}
                      scale={4}
                      className="blockies_icona"
                    />
                    <span className="dashboardMarketPlace_div1_body_conts_div1_creator_span">
                      {`${data.user_wallet.slice(
                        0,
                        4
                      )}...${data.user_wallet.slice(39, 42)}`}
                    </span>
                  </div>
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
                <EgaxUsdPrice
                  num={parseFloat(data.amount).toFixed(2)}
                  className="productPriceUsd"
                />
                <div className="buyNow_div">
                  {" "}
                  <div className="buyNow_div_div1">View details</div>
                  <div className="buyNow_div_div2">
                    <ShoppingCart02Icon className="buyNow_div_div_icon" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
