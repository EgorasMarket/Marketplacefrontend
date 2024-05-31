import React, { useState, useEffect } from "react";
import "./checkout.css";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ScaleLoader from "react-spinners/ScaleLoader";
// import { Swiper, SwiperSlide } from "swiper/react";
import Select from "react-select";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import "swiper/swiper-bundle.css";
// import { FreeMode, Pagination, Navigation, Thumbs } from "swiper/modules";
import { useNavigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import successLoader from "../../assets/icons/LottieSuccess.json";
import { Country, State, City } from "country-state-city";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { USER_BALANCE } from "../../Services/TransactionServices";
// import {
//   MAKE_PAYMENT_FOR_PRODUCT,
//   PRODUCT_DETAILS,
// } from "../../services/product_services";
// import { SUBMIT_USER_DELIEVRY } from "../../services/products";
import { numberWithCommas } from "../../assets/js/numberWithCommas";
// import { useSelector } from "react-redux";
// import WebPin from "../Common/CommonUI/Modals/WebPin";
import { ToastContainer, toast } from "react-toastify";
import { ShimmerButton } from "react-shimmer-effects-18";
// import useProtect from "../../hooks/useProtect";
// import useUserEligible from "../../hooks/useUserEligible";
import SuccessModal from "../../Components/SuccessModal/SuccessModal";
import ErrorModal from "../../Components/ErrorModal/ErrorModal";
import { FETCH_PRODUCTS_BY_ID } from "../../Services/ProductServices";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import {
  PURCHASE_PRODUCT,
  SUBMIT_DELIVERY_INFO,
} from "../../Services/ProductServices";

const ProductCheckoutPage = () => {
  // useProtect(); // call this hooks on a component you want to protect
  const { id, count, name } = useParams();
  const [success, setSuccess] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errorTxt, setErrorTxt] = useState("");
  const [loading, setLoading] = useState(false);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [deliveryVal, setDeliveryVal] = useState("");
  const [successTxt, setSuccessTxt] = useState("");
  const [userBal, setUserBal] = useState(0);
  const [deliveryPayload, setDeliveryPayload] = useState({
    fullname: "",
    phoneNumber: "",
    country: "",
    telegramId: "",
  });
  const [payload, setPayload] = useState({});

  const { data: getProductById, isPending: getProductByIdLoading } = useQuery({
    mutationKey: "getProductById",
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
    if (payload == {}) {
      FetchProductByid();
      return;
    }
  }, [payload]);

  useEffect(() => {
    console.log("====================================");
    console.log(Country);
    console.log("====================================");
    let states = Country.getAllCountries();
    let tempState = states;
    tempState.forEach((state) => {
      state.value = state.name;
      state.label = state.name;
    });
    setStates(tempState);
  }, []);

  const { mutate: purchaseProduct, isPending: purchaseProductLoading } =
    useMutation({
      mutationKey: "purchaseProduct",
      mutationFn: async (body) => {
        const res = await PURCHASE_PRODUCT(body);
        return res;
      },
      onSuccess: async (data) => {
        console.log(data, "alal");
        submit_delivery_func();
      },
    });
  const checkout = async () => {
    const body = {
      product_id: id,
      quantity: count,
      deliveryMethod: deliveryVal === "DELIVERY" ? "2" : "1",
    };
    await purchaseProduct(body);
  };
  const { mutate: submit_delivery, isPending: checkoutProductLoading } =
    useMutation({
      mutationKey: "submit_delivery",
      mutationFn: async (body) => {
        const res = await SUBMIT_DELIVERY_INFO(body);
        return res;
      },
      onSuccess: async (data) => {
        console.log(data, "alal");
        if (data.code == 200) {
          setSuccess(true);
          setSuccessTxt(
            `You have successfully purchased ${count} ${payload.product_name} and your item(s) has been stacked please continue to see ur staked items`
          );
          return;
        }
      },
    });
  const submit_delivery_func = async () => {
    const body = deliveryPayload;
    await submit_delivery(body);
  };

  const { data: userBalance } = useQuery({
    queryKey: ["userBalance"],
    queryFn: async () => {
      const res = await USER_BALANCE();
      console.log("====================================");
      console.log(res);
      for (let i = 0; i < res.data.length; i++) {
        switch (res.data[i].name) {
          case "Egochain":
            setUserBal(res.data[i]?.value === null ? "0" : res.data[i]?.value);
            break;
        }
      }

      return res;
    },
  });
  const userBalFunc = async () => {
    await userBalance();
  };
  useEffect(() => {
    userBalFunc();
  }, []);

  const handleStateOnChange = (e) => {
    //// console.logog(e);

    setDeliveryPayload({
      ...deliveryPayload,
      country: e.label,
    });
  };

  //// console.logog(selectedState);
  //// console.logog(deliveryVal);
  const checkedPickupStore = () => {
    setDeliveryVal("PICKUP");
  };
  const checkedPickupDelivery = () => {
    setDeliveryVal("DELIVERY");
  };

  if (getProductByIdLoading) {
    return (
      <div className="ProductCheckoutPage_div">
        <section className="ProductCheckoutPage_div_section">
          <div className="custom_container">
            <div className="ProductCheckoutPage_div_section_area">
              <div className="ProductCheckoutPage_div_section_area_1">
                <div className="ProductCheckoutPage_div_section_area_1_area1">
                  <div className="ProductCheckoutPage_div_section_area_1_area1_head">
                    Your Order
                  </div>
                  <div className="ProductCheckoutPage_div_section_area_1_area1_body">
                    <div className="ProductCheckoutPage_div_section_area_1_area1_body_1">
                      <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_img_div">
                        <ShimmerButton size="lg" className="custom_shimmer" />
                      </div>
                      <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_area1">
                        <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_area1_title">
                          <ShimmerButton size="sm" className="custom_shimmer" />
                        </div>
                        <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_area1_amount">
                          <ShimmerButton size="sm" className="custom_shimmer" />
                        </div>
                      </div>
                    </div>
                    <div className="ProductCheckoutPage_div_section_area_1_area1_body_1">
                      <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_img_div">
                        <ShimmerButton size="lg" className="custom_shimmer" />
                      </div>
                      <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_area1">
                        <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_area1_title">
                          <ShimmerButton size="sm" className="custom_shimmer" />
                        </div>
                        <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_area1_amount">
                          <ShimmerButton size="sm" className="custom_shimmer" />
                        </div>
                      </div>
                    </div>
                    <div className="ProductCheckoutPage_div_section_area_1_area1_body_1">
                      <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_img_div">
                        <ShimmerButton size="lg" className="custom_shimmer" />
                      </div>
                      <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_area1">
                        <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_area1_title">
                          <ShimmerButton size="sm" className="custom_shimmer" />
                        </div>
                        <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_area1_amount">
                          <ShimmerButton size="sm" className="custom_shimmer" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ProductCheckoutPage_div_section_area_1_area2">
                  <div className="ProductCheckoutPage_div_section_area_1_area2_cont1">
                    <div className="ProductCheckoutPage_div_section_area_1_area2_cont1_title">
                      Quantity
                    </div>
                    <div className="ProductCheckoutPage_div_section_area_1_area2_cont1_para">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="ProductCheckoutPage_div_section_area_1_area2_cont1">
                    <div className="ProductCheckoutPage_div_section_area_1_area2_cont1_title">
                      Sub Total
                    </div>
                    <div className="ProductCheckoutPage_div_section_area_1_area2_cont1_para">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                  </div>
                </div>
              </div>
              {/* ================ */}
              {/* ================ */}
              {/* ================ */}
              {/* ================ */}
              {/* ================ */}
              <div className="ProductCheckoutPage_div_section_area_2">
                <div className="ProductCheckoutPage_div_section_area_2_area1">
                  <div className="ProductCheckoutPage_div_section_area_2_area1_title">
                    Personal Info
                  </div>
                  <div className="ProductCheckoutPage_div_section_area_2_area1_body">
                    <div className="ProductCheckoutPage_div_section_area_2_area1_body_cont">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                    <div className="ProductCheckoutPage_div_section_area_2_area1_body_cont">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                    <div className="ProductCheckoutPage_div_section_area_2_area1_body_cont">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                  </div>
                </div>
                <div className="ProductCheckoutPage_div_section_area_2_area2">
                  <div className="ProductCheckoutPage_div_section_area_2_area1_title">
                    Billing Info
                  </div>
                  <div className="ProductCheckoutPage_div_section_area_2_area1_body">
                    <div className="ProductCheckoutPage_div_section_area_2_area1_body_cont">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                    <div className="ProductCheckoutPage_div_section_area_2_area1_body_cont">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                    <div className="ProductCheckoutPage_div_section_area_2_area1_body_cont">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                    <div className="ProductCheckoutPage_div_section_area_2_area1_body_cont">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                    <div className="ProductCheckoutPage_div_section_area_2_area1_body_cont">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                  </div>
                </div>
                <div className="ProductCheckoutPage_div_section_area_1_area3">
                  <div className="ProductCheckoutPage_div_section_area_1_area3_title">
                    Payment Info
                  </div>
                  <div className="ProductCheckoutPage_div_section_area_1_area3_body">
                    <ShimmerButton size="lg" className="custom_shimmer" />
                    {/* <ShimmerButton size="lg" className="custom_shimmer" /> */}
                  </div>
                </div>
                <div className="ProductCheckoutPage_div_section_area_2_area3">
                  <div className="ProductCheckoutPage_div_section_area_2_area3_cont">
                    <div className="ProductCheckoutPage_div_section_area_2_area3_cont_head">
                      Quantity
                    </div>
                    <div className="ProductCheckoutPage_div_section_area_2_area3_cont_para">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="ProductCheckoutPage_div_section_area_2_area3_cont">
                    <div className="ProductCheckoutPage_div_section_area_2_area3_cont_head">
                      Unit Amount
                    </div>
                    <div className="ProductCheckoutPage_div_section_area_2_area3_cont_para">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="ProductCheckoutPage_div_section_area_2_area3_cont">
                    <div className="ProductCheckoutPage_div_section_area_2_area3_cont_head">
                      Non-Merchant Fee
                    </div>
                    <div className="ProductCheckoutPage_div_section_area_2_area3_cont_para">
                      <ShimmerButton size="lg" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="ProductCheckoutPage_div_section_area_2_area3_cont">
                    <div className="ProductCheckoutPage_div_section_area_2_area3_cont_head">
                      Total
                    </div>
                    <div className="ProductCheckoutPage_div_section_area_2_area3_cont_para">
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

  let items = [];
  console.log("====================================");
  console.log(deliveryPayload);
  console.log("====================================");
  for (let i = 1; i <= count; i++) {
    items.push(payload);
  }
  const changeInputData = (e) => {
    const { value, id } = e.target;
    console.log("====================================");
    console.log(value);
    console.log("====================================");
    setDeliveryPayload({
      ...deliveryPayload,

      [id]: value,
    });
  };
  return (
    <>
      <section className="ProductCheckoutPage_div_section">
        <div className="custom_container">
          <div className="ProductCheckoutPage_div_section_area">
            <div className="ProductCheckoutPage_div_section_area_1">
              <div className="ProductCheckoutPage_div_section_area_1_area1">
                <div className="ProductCheckoutPage_div_section_area_1_area1_head">
                  Your Order
                </div>
                <div className="ProductCheckoutPage_div_section_area_1_area1_body">
                  {items.map((item, index) => {
                    // const images = JSON.parse(item.product_images);
                    return (
                      <div className="ProductCheckoutPage_div_section_area_1_area1_body_1">
                        <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_img_div">
                          <img
                            src={item.product_images}
                            alt=""
                            className="ProductCheckoutPage_div_section_area_1_area1_body_1_img"
                          />
                        </div>
                        <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_area1">
                          <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_area1_title">
                            {item.product_name}
                          </div>
                          <div className="ProductCheckoutPage_div_section_area_1_area1_body_1_area1_amount">
                            {numberWithCommas(
                              parseFloat(payload.amount).toFixed(2)
                            )}
                            {"  "}EGAX
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="ProductCheckoutPage_div_section_area_1_area2">
                <div className="ProductCheckoutPage_div_section_area_1_area2_cont1">
                  <div className="ProductCheckoutPage_div_section_area_1_area2_cont1_title">
                    Quantity
                  </div>
                  <div className="ProductCheckoutPage_div_section_area_1_area2_cont1_para">
                    {count}
                  </div>
                </div>
                <div className="ProductCheckoutPage_div_section_area_1_area2_cont1">
                  <div className="ProductCheckoutPage_div_section_area_1_area2_cont1_title">
                    Sub Total
                  </div>
                  <div className="ProductCheckoutPage_div_section_area_1_area2_cont1_para">
                    {numberWithCommas(
                      parseFloat(payload.amount * count).toFixed(2)
                    )}{" "}
                    {"  "}EGAX
                  </div>
                </div>
              </div>
            </div>
            {/* ================ */}
            {/* ================ */}
            {/* ================ */}
            {/* ================ */}
            {/* ================ */}
            <div className="ProductCheckoutPage_div_section_area_2">
              <div className="ProductCheckoutPage_div_section_area_2_area1">
                <div className="ProductCheckoutPage_div_section_area_2_area1_title">
                  Personal Info
                </div>
                <div className="ProductCheckoutPage_div_section_area_2_area1_body">
                  <div className="ProductCheckoutPage_div_section_area_2_area1_body_cont">
                    <div className="ProductCheckoutPage_div_section_area_2_area1_body_cont_input">
                      samuelify225@gmail.com
                    </div>
                  </div>
                  <div className="ProductCheckoutPage_div_section_area_2_area1_body_cont">
                    <div className="ProductCheckoutPage_div_section_area_2_area1_body_cont_input">
                      +234 8164020234
                    </div>
                  </div>
                </div>
              </div>
              <div className="ProductCheckoutPage_div_section_area_2_area1">
                <div className="ProductCheckoutPage_div_section_area_2_area1_title">
                  Delivery Options
                </div>
                <div className="ProductCheckoutPage_div_section_area_2_area1_body">
                  <div className="successCheckoutDiv_cont_body_1_para">
                    Select the delivery option that best suites you.
                  </div>
                  <div className="successCheckoutDiv_cont_body_2_body">
                    <div className="successCheckoutDiv_cont_body_2_body_1_div">
                      <input
                        type="radio"
                        id="radio-1"
                        name="radio"
                        // checked={checkedMetamask}
                        onChange={checkedPickupDelivery}
                      />
                      <label
                        className={
                          deliveryVal === "DELIVERY"
                            ? "successCheckoutDiv_cont_body_2_body_1 successCheckoutDiv_cont_body_2_body_1_active"
                            : "successCheckoutDiv_cont_body_2_body_1"
                        }
                        for="radio-1"
                      >
                        Pick up on delivery
                      </label>
                    </div>
                    {deliveryVal === "DELIVERY" ? (
                      <div className="fill_delivery_div">
                        <input
                          type="text"
                          id="fullname"
                          name="fullname"
                          placeholder="Full name"
                          onChange={changeInputData}
                          className="fill_delivery_div_input"
                        />
                        <PhoneInput
                          id="phoneNumber"
                          defaultCountry="us"
                          value={deliveryPayload.phoneNumber}
                          onChange={(value, code) => {
                            console.log("====================================");
                            console.log(code);
                            console.log("====================================");
                            setDeliveryPayload({
                              ...deliveryPayload,
                              phoneNumber: value,
                            });
                          }}
                        />
                        <Select
                          placeholder="Select Country"
                          classNamePrefix="select"
                          className="kypageDiv_cont_body_input_div_slect"
                          // value={selectedState}
                          onChange={handleStateOnChange}
                          id="Country"
                          isSearchable={true}
                          name="Country"
                          options={states}
                        />
                        <input
                          type="text"
                          id="telegramId"
                          onChange={changeInputData}
                          name="telegramId"
                          placeholder="Telegram Id"
                          className="fill_delivery_div_input"
                        />
                      </div>
                    ) : null}
                    <div className="successCheckoutDiv_cont_body_2_body_1_div">
                      <input
                        type="radio"
                        id="radio-2"
                        name="radio"
                        // checked={checkedMetamask}
                        onChange={checkedPickupStore}
                      />
                      <label
                        className={
                          deliveryVal === "PICKUP"
                            ? "successCheckoutDiv_cont_body_2_body_1 successCheckoutDiv_cont_body_2_body_1_active"
                            : "successCheckoutDiv_cont_body_2_body_1"
                        }
                        for="radio-2"
                      >
                        Pick up from store
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ProductCheckoutPage_div_section_area_1_area3">
                <div className="ProductCheckoutPage_div_section_area_1_area3_title">
                  Payment
                </div>
                <div className="ProductCheckoutPage_div_section_area_1_area3_body">
                  <div className="ProductCheckoutPage_div_section_area_1_area3_body_card1">
                    <div className="ProductCheckoutPage_div_section_area_1_area3_body_card1_cont1">
                      <div className="ProductCheckoutPage_div_section_area_1_area3_body_card1_cont1_div1">
                        <div className="ProductCheckoutPage_div_section_area_1_area3_body_card1_cont1_div1_title">
                          Wallet Balance
                        </div>
                        {loading ? (
                          <ShimmerButton size="md" className="custom_shimmer" />
                        ) : (
                          <div className="ProductCheckoutPage_div_section_area_1_area3_body_card1_cont1_div1_bal">
                            {numberWithCommas(parseFloat(userBal).toFixed(2))}{" "}
                            <span className="ProductCheckoutPage_div_section_area_1_area3_body_card1_cont1_div1_bal_span">
                              EGAX
                            </span>
                          </div>
                        )}
                      </div>
                      <a href="/app/wallet" style={{ color: "#fff" }}>
                        <div className="ProductCheckoutPage_div_section_area_1_area3_body_card1_cont1_div2">
                          Add Funds{" "}
                          <SwapHorizIcon className="ProductCheckoutPage_div_section_area_1_area3_body_card1_cont1_div2_icon" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ProductCheckoutPage_div_section_area_2_area3">
                <div className="ProductCheckoutPage_div_section_area_2_area3_cont">
                  <div className="ProductCheckoutPage_div_section_area_2_area3_cont_head">
                    Quantity
                  </div>
                  <div className="ProductCheckoutPage_div_section_area_2_area3_cont_para">
                    {count}
                  </div>
                </div>
                <div className="ProductCheckoutPage_div_section_area_2_area3_cont">
                  <div className="ProductCheckoutPage_div_section_area_2_area3_cont_head">
                    Unit Amount
                  </div>
                  <div className="ProductCheckoutPage_div_section_area_2_area3_cont_para">
                    {numberWithCommas(parseFloat(payload.amount).toFixed(2))}{" "}
                    EGAX
                  </div>
                </div>

                <div className="ProductCheckoutPage_div_section_area_2_area3_cont">
                  <div className="ProductCheckoutPage_div_section_area_2_area3_cont_head">
                    Total
                  </div>
                  <div className="ProductCheckoutPage_div_section_area_2_area3_cont_para">
                    {numberWithCommas(
                      parseFloat(count * payload.amount).toFixed(2)
                    )}{" "}
                    EGAX
                  </div>
                </div>

                {purchaseProductLoading ? (
                  <button className="ProductCheckoutPage_div_section_area_2_area3_button">
                    <ScaleLoader color="#366e51" height={20} />
                  </button>
                ) : (
                  <button
                    className="ProductCheckoutPage_div_section_area_2_area3_button"
                    onClick={checkout}
                  >
                    Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <ToastContainer />
      </section>

      {success ? (
        <SuccessModal
          SuccesTxt={successTxt}
          order_btn={true}
          successFunc2={() => {
            window.location.href = "/app/orders";
          }}
          successFunc={() => {
            window.location.href = "/app/earn";
          }}
        />
      ) : null}
      {errorModal ? (
        <ErrorModal
          ErrorTxt={errorTxt}
          errorFunc={() => {
            setErrorModal(false);
          }}
        />
      ) : null}
    </>
  );
};

export default ProductCheckoutPage;
