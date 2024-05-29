import React, { useRef } from "react";
import { Cancel01Icon } from "hugeicons-react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import { numberWithCommas } from "../../assets/js/numberWithCommas";
import DownloadIcon from "@mui/icons-material/Download";
import html2canvas from "html2canvas";
const TableModal = ({
  closeModal,
  data,
  metaData,
  userName,
  formattedDate,
  formattedTime,
}) => {
  const divRef = useRef(null);

  const saveDivAsImage = () => {
    const divElement = divRef.current;
    html2canvas(divElement).then(function (canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "transaction_details.png"; // The filename for the downloaded image
      link.click();
    });
  };
  return (
    <div className="depositMoneyDiv">
      <div className="depositMoneyDiv_contb">
        <Cancel01Icon
          size={32}
          className="depositMoneyDiv_iconb"
          onClick={closeModal}
        />
        <div className="depositMoneyDiv_table_body" ref={divRef}>
          <div className="depositMoneyDiv_table_body_title">
            Transaction Details
          </div>
          <div className="depositMoneyDiv_table_body_cont">
            <div className="depositMoneyDiv_table_body_cont_1">
              <div className="depositMoneyDiv_table_body_cont_1_div1">Type</div>
              <div className="depositMoneyDiv_table_body_cont_1_div1_txt">
                {" "}
                {metaData.to_username === userName &&
                data.type === "INTERNAL" ? (
                  <div className="credit">
                    <img
                      src={data.image}
                      alt=""
                      className="stakingTable_body_row_data_img"
                    />
                    Credit{" "}
                    <SouthWestIcon className="stakingTable_body_row_data_icon" />{" "}
                  </div>
                ) : metaData.to_username !== userName &&
                  data.type === "INTERNAL" ? (
                  <div className="debit">
                    <img
                      src={data.image}
                      alt=""
                      className="stakingTable_body_row_data_img"
                    />
                    Debit{" "}
                    <NorthEastIcon className="stakingTable_body_row_data_icon" />
                  </div>
                ) : data.type === "Credit" ? (
                  <div className="credit">
                    <img
                      src={data.image}
                      alt=""
                      className="stakingTable_body_row_data_img"
                    />
                    {data.type}{" "}
                    <SouthWestIcon className="stakingTable_body_row_data_icon" />{" "}
                  </div>
                ) : data.type === "Debit" ? (
                  <div className="debit">
                    <img
                      src={data.image}
                      alt=""
                      className="stakingTable_body_row_data_img"
                    />
                    {data.type}
                    <NorthEastIcon className="stakingTable_body_row_data_icon" />{" "}
                  </div>
                ) : (
                  <div className="normal">
                    {" "}
                    <img
                      src={data.image}
                      alt=""
                      className="stakingTable_body_row_data_img"
                    />
                    {data.type}
                  </div>
                )}
              </div>
            </div>
            <div className="depositMoneyDiv_table_body_cont_1">
              {" "}
              <div className="depositMoneyDiv_table_body_cont_1_div1">
                Amount
              </div>
              <div className="depositMoneyDiv_table_body_cont_1_div1_txt">
                {metaData.symbol === "NGN" ? "₦" : null}{" "}
                {numberWithCommas(parseFloat(data.amount).toFixed(2))}{" "}
                {metaData.symbol !== "NGN" ? "EGC" : null}{" "}
              </div>
            </div>
            <div className="depositMoneyDiv_table_body_cont_1">
              {" "}
              <div className="depositMoneyDiv_table_body_cont_1_div1">From</div>
              <div className="depositMoneyDiv_table_body_cont_1_div1_txt">
                {data.email}
              </div>
            </div>
            <div className="depositMoneyDiv_table_body_cont_1">
              {" "}
              <div className="depositMoneyDiv_table_body_cont_1_div1">To</div>
              <div className="depositMoneyDiv_table_body_cont_1_div1_txt">
                {data.to_email}
              </div>
            </div>
            <div className="depositMoneyDiv_table_body_cont_1">
              {" "}
              <div className="depositMoneyDiv_table_body_cont_1_div1">Date</div>
              <div className="depositMoneyDiv_table_body_cont_1_div1_txt">
                {formattedDate}
              </div>
            </div>
            <div className="depositMoneyDiv_table_body_cont_1">
              {" "}
              <div className="depositMoneyDiv_table_body_cont_1_div1">Time</div>
              <div className="depositMoneyDiv_table_body_cont_1_div1_txt">
                {formattedTime}
              </div>
            </div>
            <div className="depositMoneyDiv_table_body_cont_1">
              {" "}
              <div className="depositMoneyDiv_table_body_cont_1_div1">
                Status
              </div>
              <div className="depositMoneyDiv_table_body_cont_1_div1_txt">
                <div className="stakingTable_body_row_data_last_div">
                  {data.status === "SUCCESS" ? (
                    <div className="stakingTable_body_row_status_success">
                      {data.status}
                    </div>
                  ) : data.status === "PENDING" ? (
                    <div className="stakingTable_body_row_status_pending">
                      {data.status}
                    </div>
                  ) : (
                    <>{data.status}</>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="depositMoneyDiv_table_body_title_img_div">
            <img
              src="/img/egoras-logo.png"
              alt=""
              className="depositMoneyDiv_table_body_title_img"
            />
          </div>
        </div>
        <button onClick={saveDivAsImage} className="SaveReceipt_btn">
          <DownloadIcon />
          Save
        </button>
      </div>
    </div>
  );
};

export default TableModal;
