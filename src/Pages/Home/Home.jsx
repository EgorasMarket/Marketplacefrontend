import React, { useState, useEffect } from "react";
import "./Home.css";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
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

const Home = () => {
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
                Collect <br />
                And Earn On
                <br /> EgoEarn
              </div>
              <div className="HomeDiv_section1_area_1_para">
                Earn on the world's first purchase to earn platform.
              </div>
              <div className="HomeDiv_section1_area_1_btn_div">
                <button className="HomeDiv_section1_area_1_btn">
                  Get started
                </button>
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
                      src="/img/marketImgs/tesla_car_hero_dummy.jpeg"
                      alt=""
                      className="HomeDiv_section1_area_2_card1_img"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="HomeDiv_section1_area_2_card1">
                    <img
                      src="/img/marketImgs/tesla_car_hero_dummy.jpeg"
                      alt=""
                      className="HomeDiv_section1_area_2_card1_img"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="HomeDiv_section1_area_2_card1">
                    <img
                      src="/img/marketImgs/tesla_car_hero_dummy.jpeg"
                      alt=""
                      className="HomeDiv_section1_area_2_card1_img"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="HomeDiv_section1_area_2_card1">
                    <img
                      src="/img/marketImgs/tesla_car_hero_dummy.jpeg"
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
              <button className="HomeDiv_section2_area_title_btn">
                View More
              </button>{" "}
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
                    {data.product_name}{" "}
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
      <section className="HomeDiv_section4">
        <div className="HomeDiv_section1_container">
          <div className="HomeDiv_section4_area">
            <div className="HomeDiv_section4_title">How to Earn</div>
            <div className="HomeDiv_section4_area_body">
              <div className="HomeDiv_section4_area_body_cont1">
                <LogoutSquare02Icon className="HomeDiv_section4_area_body_cont1_icon" />
                <div className="HomeDiv_section4_area_body_cont1_title">
                  Register
                </div>
                <div className="HomeDiv_section4_area_body_cont1_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  blanditiis repudiandae, placeat ratione aliquid aut.
                </div>
                <button className="HomeDiv_section4_area_body_cont1_btn">
                  Get started
                </button>
              </div>
              <div className="HomeDiv_section4_area_body_cont1">
                <LogoutSquare02Icon className="HomeDiv_section4_area_body_cont1_icon" />
                <div className="HomeDiv_section4_area_body_cont1_title">
                  Register
                </div>
                <div className="HomeDiv_section4_area_body_cont1_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  blanditiis repudiandae, placeat ratione aliquid aut.
                </div>
                <button className="HomeDiv_section4_area_body_cont1_btn">
                  Get started
                </button>
              </div>
              <div className="HomeDiv_section4_area_body_cont1">
                <LogoutSquare02Icon className="HomeDiv_section4_area_body_cont1_icon" />
                <div className="HomeDiv_section4_area_body_cont1_title">
                  Register
                </div>
                <div className="HomeDiv_section4_area_body_cont1_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  blanditiis repudiandae, placeat ratione aliquid aut.
                </div>
                <button className="HomeDiv_section4_area_body_cont1_btn">
                  Get started
                </button>
              </div>
              <div className="HomeDiv_section4_area_body_cont1">
                <LogoutSquare02Icon className="HomeDiv_section4_area_body_cont1_icon" />
                <div className="HomeDiv_section4_area_body_cont1_title">
                  Register
                </div>
                <div className="HomeDiv_section4_area_body_cont1_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  blanditiis repudiandae, placeat ratione aliquid aut.
                </div>
                <button className="HomeDiv_section4_area_body_cont1_btn">
                  Get started
                </button>
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
                src="/img/coin_3d.svg"
                alt=""
                className="HomeDiv_section5_area_1_img"
              />
            </div>
            <div className="HomeDiv_section5_area_2">
              <div className="HomeDiv_section5_area_2_title">
                Buy and earn
                <br /> with your{" "}
                <span className="HomeDiv_section5_area_2_title_span">NFts</span>
              </div>
              <div className="HomeDiv_section5_area_2_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, reiciendis odit ex provident quos commodi.
              </div>
              <button className="HomeDiv_section5_area_2_btn">
                View marketplace
              </button>
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
                Create your unique NFT collection in <br />
                <span className="HomeDiv_section3_div2_cont1_title_">
                  OKX NFT Studio
                </span>
              </div>
              <button className="HomeDiv_section3_div2_cont1_btn">
                Earn now
              </button>
            </div>
            <div className="HomeDiv_section3_div2_cont2">
              <div className="HomeDiv_section3_div2_cont2_cont">
                <img
                  src="/img/nft_dummy_img.webp"
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
