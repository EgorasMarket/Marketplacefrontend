import React, { useState, useEffect } from "react";
import "./Home.css";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Globe02Icon, UserIcon } from "hugeicons-react";
import { Coins01Icon } from "hugeicons-react";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FETCH_PRODUCTS } from "../../Services/ProductServices";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import Blockies from "react-blockies";
import { ShoppingCart02Icon } from "hugeicons-react";
import { LogoutSquare02Icon } from "hugeicons-react";
import { ArrowUpRight01Icon } from "hugeicons-react";

const Home = () => {
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

  // useEffect(() => {
  //   FetchAllProducts();
  // }, []);
  return (
    <div className="HomeDiv">
      <section className="HomeDiv_section1">
        <div className="HomeDiv_section1_container">
          <div className="HomeDiv_section1_area">
            <div className="HomeDiv_section1_area_1">
              <div className="HomeDiv_section1_area_1_title">
                <span className="HomeDiv_section1_area_1_title_span">
                  {" "}
                  Discover,
                </span>{" "}
                Buy <br />
                And Earn On
                <br /> EgoEarn
              </div>
              <div className="HomeDiv_section1_area_1_para">
                Explore Egoras' diverse tokenized products: smart TVs, electric
                vehicles, tricycles, and more. Securely purchase, receive
                physical goods, and earn rewards by staking associated NFTs.
              </div>
              <div className="HomeDiv_section1_area_1_btn_div">
                <a href="/register">
                  <button className="HomeDiv_section1_area_1_btn">
                    Get started
                  </button>
                </a>
              </div>
            </div>
            <div className="HomeDiv_section1_area_2">
              <Swiper
                style={{ width: "100%" }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={false}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="landingPageSection2_area_1"
              >
                <SwiperSlide>
                  <div className="HomeDiv_section1_area_2_card1">
                    <img
                      src="/img/car_img.jpeg"
                      alt=""
                      className="HomeDiv_section1_area_2_card1_img"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="HomeDiv_section1_area_2_card1">
                    <img
                      src="/img/car_img.jpeg"
                      alt=""
                      className="HomeDiv_section1_area_2_card1_img"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="HomeDiv_section1_area_2_card1">
                    <img
                      src="/img/3D7A4033.jpeg"
                      alt=""
                      className="HomeDiv_section1_area_2_card1_img"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="HomeDiv_section1_area_2_card1">
                    <img
                      src="/img/3D7A4033.jpeg"
                      alt=""
                      className="HomeDiv_section1_area_2_card1_img"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      <section className="HomeDiv_section2">
        <div className="HomeDiv_section1_container">
          <div className="HomeDiv_section2_area">
            <div className="HomeDiv_section2_area_title">
              Top Collections{" "}
              <a href="/app/market">
                <button className="HomeDiv_section2_area_title_btn">
                  View More
                </button>{" "}
              </a>
            </div>
            <div className="HomeDiv_section2_area_body">
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
                    <div className="dashboardMarketPlace_div1_body_conts_div1_title_txt">
                      {" "}
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
        </div>
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      <section className="HomeDiv_section4" id="how_to">
        <div className="HomeDiv_section1_container">
          <div className="HomeDiv_section4_area">
            <div className="HomeDiv_section4_title">How to Earn</div>
            <div className="HomeDiv_section4_area_body">
              <div className="HomeDiv_section4_area_body_cont1">
                <UserIcon
                  size={42}
                  className="HomeDiv_section4_area_body_cont1_icon"
                />
                <div className="HomeDiv_section4_area_body_cont1_txts">
                  <div className="HomeDiv_section4_area_body_cont1_title">
                    Create an Account
                  </div>
                  <div className="HomeDiv_section4_area_body_cont1_para">
                    Provide your email address to sign up effortlessly.
                  </div>
                </div>
                <ArrowUpRight01Icon
                  size={32}
                  className="HomeDiv_section4_area_body_cont1_txts_icon"
                />
                {/* <button className="HomeDiv_section4_area_body_cont1_btn">
                  Get started
                </button> */}
              </div>
              <div className="HomeDiv_section4_area_body_cont1">
                <Globe02Icon
                  size={42}
                  className="HomeDiv_section4_area_body_cont1_icon"
                />
                <div className="HomeDiv_section4_area_body_cont1_txts">
                  <div className="HomeDiv_section4_area_body_cont1_title">
                    Explore
                  </div>
                  <div className="HomeDiv_section4_area_body_cont1_para">
                    Browse a wide selection of products tailored to your
                    interests.
                  </div>
                </div>
                <ArrowUpRight01Icon
                  size={32}
                  className="HomeDiv_section4_area_body_cont1_txts_icon"
                />
                {/* <button className="HomeDiv_section4_area_body_cont1_btn">
                  Get started
                </button> */}
              </div>
              <div className="HomeDiv_section4_area_body_cont1">
                <ShoppingCart02Icon
                  size={42}
                  className="HomeDiv_section4_area_body_cont1_icon"
                />
                <div className="HomeDiv_section4_area_body_cont1_txts">
                  <div className="HomeDiv_section4_area_body_cont1_title">
                    Purchase
                  </div>
                  <div className="HomeDiv_section4_area_body_cont1_para">
                    Use $EGAX to buy from our range of products and redeem your
                    purchases.
                  </div>
                </div>
                <ArrowUpRight01Icon
                  size={32}
                  className="HomeDiv_section4_area_body_cont1_txts_icon"
                />
                {/* <button className="HomeDiv_section4_area_body_cont1_btn">
                  Get started
                </button> */}
              </div>
              <div className="HomeDiv_section4_area_body_cont1">
                <Coins01Icon
                  size={42}
                  className="HomeDiv_section4_area_body_cont1_icon"
                />
                <div className="HomeDiv_section4_area_body_cont1_txts">
                  <div className="HomeDiv_section4_area_body_cont1_title">
                    Earn
                  </div>
                  <div className="HomeDiv_section4_area_body_cont1_para">
                    Stake the NFTs you acquire to earn $EGAX daily.
                  </div>
                </div>
                <ArrowUpRight01Icon
                  size={32}
                  className="HomeDiv_section4_area_body_cont1_txts_icon"
                />
                {/* <button className="HomeDiv_section4_area_body_cont1_btn">
                  Get started
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      <section className="HomeDiv_section5">
        <div className="HomeDiv_section1_container">
          <div className="HomeDiv_section5_area">
            <div className="HomeDiv_section5_area_1">
              <img
                src="/img/coin_3d.png"
                alt=""
                className="HomeDiv_section5_area_1_img"
              />
            </div>
            <div className="HomeDiv_section5_area_2">
              <div className="HomeDiv_section5_area_2_title">
                Buy and earn
                <br /> with{" "}
                <span className="HomeDiv_section5_area_2_title_span">
                  EgoEarn
                </span>
              </div>
              <div className="HomeDiv_section5_area_2_para">
                Effortlessly stake your NFTs on EgoEarn to earn daily rewards in
                EGAX.
              </div>
              <a href="/app/market">
                <button className="HomeDiv_section5_area_2_btn">
                  View marketplace
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      <section className="HomeDiv_section3">
        <div className="HomeDiv_section1_container">
          {/* <div className="HomeDiv_section3_div1">Earn On Egoearn</div> */}
          <div className="HomeDiv_section3_div2">
            <div className="HomeDiv_section3_div2_cont1">
              <div className="HomeDiv_section3_div2_cont1_title">
                Discover, Buy and Earn on{" "}
                <span className="HomeDiv_section3_div2_cont1_title_">
                  EgoEarn
                </span>
              </div>
              <button className="HomeDiv_section3_div2_cont1_btn">
                Earn now
              </button>
            </div>
            <div className="HomeDiv_section3_div2_cont2">
              <div className="HomeDiv_section3_div2_cont2_cont">
                <img
                  src="/img/nft_dummy_img.jpeg"
                  alt=""
                  className="HomeDiv_section3_div2_cont2_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
    </div>
  );
};

export default Home;
