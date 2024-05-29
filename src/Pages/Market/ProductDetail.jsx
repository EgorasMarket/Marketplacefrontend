import React from "react";
import "../../stylesheet/ProductDetail.css";
import {
  BgButtonNoBorder,
  NoBgButtonWithBorder,
} from "../Common/CommonUI/Button";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

const ProductDetail = () => {
  return (
    <div className="ProductDetailDiv">
      <section className="ProductDetailDiv_section1">
        <div className="ProductDetailDiv_section1_area">
          <img
            src="/img/dummyDetailPageImages/dumImgCarous1.webp"
            alt=""
            className="ProductDetailDiv_section1_area_img"
          />
          <div className="ProductDetailDiv_section1_area_txtArea">
            <div className="custom_container">
              <div className="ProductDetailDiv_section1_area_txtArea_conts">
                <div className="ProductDetailDiv_section1_area_txtArea_area1">
                  <div className="ProductDetailDiv_section1_area_txtArea_area1_txt">
                    Model EGC-80
                  </div>
                  <div className="ProductDetailDiv_section1_area_txtArea_area1_btn">
                    <a
                      href={`/productdetailorder/${1}/${"Egora dual fuel tricycle"}`}
                      className="HomeDivSection1_div_txts_2_link1"
                    >
                      <BgButtonNoBorder
                        btnTxt={
                          <div
                            className="HomeDivSection1_div_txts_2_div
                      "
                          >
                            Order Product{" "}
                            <ArrowOutwardOutlinedIcon className="HomeDivSection1_div_txts_2_icon" />
                          </div>
                        }
                      />
                    </a>
                  </div>
                </div>
                <div className="ProductDetailDiv_section1_area_txtArea_area2">
                  <div className="ProductDetailDiv_section1_area_txtArea_area2_cont1">
                    <div className="ProductDetailDiv_section1_area_txtArea_area2_cont1_head">
                      POWER
                    </div>
                    <div className="ProductDetailDiv_section1_area_txtArea_area2_cont1_para">
                      1015 CV
                    </div>
                  </div>
                  <div className="ProductDetailDiv_section1_area_txtArea_area2_cont1">
                    <div className="ProductDetailDiv_section1_area_txtArea_area2_cont1_head">
                      MAX. SPEED
                    </div>
                    <div className="ProductDetailDiv_section1_area_txtArea_area2_cont1_para">
                      350 km/h
                    </div>
                  </div>
                  <div className="ProductDetailDiv_section1_area_txtArea_area2_cont1">
                    <div className="ProductDetailDiv_section1_area_txtArea_area2_cont1_head">
                      0-100 km/h
                    </div>
                    <div className="ProductDetailDiv_section1_area_txtArea_area2_cont1_para">
                      2.5 s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      <section className="ProductDetailDiv_section2">
        <div className="ProductDetailDiv_section2_area">
          <div className="ProductDetailDiv_section2_area1">
            <img
              src="/img/dummyDetailPageImages/detail_img1.png"
              alt=""
              className="ProductDetailDiv_section2_area1Img"
            />
          </div>
          <div className="ProductDetailDiv_section2_area2">
            <div className="ProductDetailDiv_section2_area2_head">OVERVIEW</div>
            <div className="ProductDetailDiv_section2_area2_para">
              Just before the 60th anniversary of the marque, Lamborghini
              unveiled Revuelto, the first HPEV (High Performance Electrified
              Vehicle) hybrid super sports car. With the Revuelto, Lamborghini
              has established a new benchmark in performance, on-board
              technology, and driving pleasure. The ultimate thrill provided by
              the Revuelto is reached thanks to a powertrain that delivers 1015
              CV total, combining the power of a brand-new 12-cylinder internal
              combustion engine with three high-density electric motors and a
              groundbreaking transversal dual clutch e-gearbox.
            </div>
          </div>
        </div>
      </section>
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      <section className="ProductDetailDiv_section3">
        <div className="ProductDetailDiv_section3_area">
          <div className="ProductDetailDiv_section3_area1">
            <div className="ProductDetailDiv_section3_area2_head">OVERVIEW</div>
            <div className="ProductDetailDiv_section3_area2_para">
              Just before the 60th anniversary of the marque, Lamborghini
              unveiled Revuelto, the first HPEV (High Performance Electrified
              Vehicle) hybrid super sports car. With the Revuelto, Lamborghini
              has established a new benchmark in performance, on-board
              technology, and driving pleasure. The ultimate thrill provided by
              the Revuelto is reached thanks to a powertrain that delivers 1015
              CV total, combining the power of a brand-new 12-cylinder internal
              combustion engine with three high-density electric motors and a
              groundbreaking transversal dual clutch e-gearbox.
            </div>
          </div>
          <div className="ProductDetailDiv_section3_area2">
            <img
              src="/img/dummyDetailPageImages/detail_img2.png"
              alt=""
              className="ProductDetailDiv_section3_area1Img"
            />
          </div>
        </div>
      </section>
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      <section className="ProductDetailDiv_section4">
        <div className="ProductDetailDiv_section4_area">
          <img
            src="/img/dummyDetailPageImages/detail_img3.png"
            alt=""
            className="ProductDetailDiv_section4_area1Img"
          />
        </div>
      </section>
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      <section className="ProductDetailDiv_section5">
        <div className="ProductDetailDiv_section5_area">
          <div className="ProductDetailDiv_section5_area1">
            <img
              src="/img/dummyDetailPageImages/detail_img4.png"
              alt=""
              className="ProductDetailDiv_section2_area1Img"
            />
          </div>
          <div className="ProductDetailDiv_section5_area2">
            <div className="ProductDetailDiv_section2_area2_head">OVERVIEW</div>
            <div className="ProductDetailDiv_section2_area2_para">
              Just before the 60th anniversary of the marque, Lamborghini
              unveiled Revuelto, the first HPEV (High Performance Electrified
              Vehicle) hybrid super sports car. With the Revuelto, Lamborghini
              has established a new benchmark in performance, on-board
              technology, and driving pleasure. The ultimate thrill provided by
              the Revuelto is reached thanks to a powertrain that delivers 1015
              CV total, combining the power of a brand-new 12-cylinder internal
              combustion engine with three high-density electric motors and a
              groundbreaking transversal dual clutch e-gearbox.
            </div>
          </div>
        </div>
      </section>
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      <section className="ProductDetailDiv_section6">
        <div className="custom_container">
          <div className="ProductDetailDiv_section6_area">
            <div className="ProductDetailDiv_section6_area_head">
              TECHNICAL SPECIFICATIONS
            </div>
            <div className="ProductDetailDiv_section6_area_body">
              <div className="ProductDetailDiv_section6_area_body_cont1">
                <div className="ProductDetailDiv_section6_area_body_cont1_title">
                  Displacement
                </div>
                <div className="ProductDetailDiv_section6_area_body_cont1_spec">
                  6498.5 cm³ (396.6 cu in)
                </div>
              </div>
              <div className="ProductDetailDiv_section6_area_body_cont1">
                <div className="ProductDetailDiv_section6_area_body_cont1_title">
                  Displacement
                </div>
                <div className="ProductDetailDiv_section6_area_body_cont1_spec">
                  6498.5 cm³ (396.6 cu in)
                </div>
              </div>
              <div className="ProductDetailDiv_section6_area_body_cont1">
                <div className="ProductDetailDiv_section6_area_body_cont1_title">
                  Displacement
                </div>
                <div className="ProductDetailDiv_section6_area_body_cont1_spec">
                  6498.5 cm³ (396.6 cu in)
                </div>
              </div>
              <div className="ProductDetailDiv_section6_area_body_cont1">
                <div className="ProductDetailDiv_section6_area_body_cont1_title">
                  Displacement
                </div>
                <div className="ProductDetailDiv_section6_area_body_cont1_spec">
                  6498.5 cm³ (396.6 cu in)
                </div>
              </div>
              <div className="ProductDetailDiv_section6_area_body_cont1">
                <div className="ProductDetailDiv_section6_area_body_cont1_title">
                  Displacement
                </div>
                <div className="ProductDetailDiv_section6_area_body_cont1_spec">
                  6498.5 cm³ (396.6 cu in)
                </div>
              </div>
              <div className="ProductDetailDiv_section6_area_body_cont1">
                <div className="ProductDetailDiv_section6_area_body_cont1_title">
                  Displacement
                </div>
                <div className="ProductDetailDiv_section6_area_body_cont1_spec">
                  6498.5 cm³ (396.6 cu in)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      {/* ================================================ */}
      <section className="ProductDetailDiv_last_section">
        <div className="custom_container">
          <div className="ProductDetailDiv_last_section_area">
            <img
              src="/img/dummyDetailPageImages/dumImgCarous1.webp"
              alt=""
              className="ProductDetailDiv_last_section_area_img"
            />
            <div className="ProductDetailDiv_last_section_area_txt">
              <div className="ProductDetailDiv_last_section_area_txt_area1">
                Experience Egoras dual fuel <br /> Tricycle (EGC-80)
              </div>
              <div className="ProductDetailDiv_last_section_area_txt_area2">
                <a
                  className="ProductDetailDiv_last_section_area_txt_area2_link"
                  href={`/productdetailorder/${1}/${"Egora dual fuel tricycle"}`}
                >
                  <button className="ProductDetailDiv_last_section_area_txt_area2_btn">
                    Order Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
