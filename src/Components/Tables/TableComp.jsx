import React, { useEffect, useState } from "react";
import Paginate from "../Pagination/Paginate";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { ShimmerButton } from "react-shimmer-effects-18";
import Staticdata from "../../assets/json/Static";
import NodataComp from "../NoData/NodataComp";
import "./TableComp.css";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import { numberWithCommas } from "../../assets/js/numberWithCommas";
import TableModal from "./TableModal";
import { Link } from "react-router-dom";
// ======
// ======
// ======
// ======
export const TablePagination = ({
  TableData,
  tableTitle,
  contentLoading,
  dummyData,
  userName,
  email,
}) => {
  const [saleDetails, setSaleDetails] = useState("");
  const [smallMenu, setSmallMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 7;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const updatedTransactions = TableData.map((transaction) => {
    if (transaction.type === "DEPOSIT") {
      transaction.type = "Credit";
    } else if (
      transaction.type === "CASHOUT" ||
      transaction.type === "WITHDRAWAL"
    ) {
      transaction.type = "Debit";
    }
    return transaction;
  });
  const ToggleSaleDetails = (product_id) => {
    setSaleDetails(product_id);
    //// console.logog(product_id);
  };
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(updatedTransactions.length / PER_PAGE);
  const currentTransactions = updatedTransactions.slice(
    offset,
    offset + PER_PAGE
  );
  //// console.logog(currentTransactions);

  const ToggleSmallMenu = () => {
    setSmallMenu(!smallMenu);
  };

  return (
    <div className="TableCompWithDiv">
      <div className="TableCompWithDiv_title">
        {tableTitle}{" "}
        {/* <a
          href="/dashboard/transaction"
          className="TableCompWithDiv_title_link"
        >
          <button className="TableCompWithDiv_title_btn">View All</button>
        </a> */}
        <div
          className="TableCompWithDiv_title_drop_down"
          onClick={ToggleSmallMenu}
        >
          <MoreVertOutlinedIcon />
          {smallMenu ? (
            <div className="TableCompWithDiv_title_drop_down_div">
              <div className="TableCompWithDiv_title_drop_down_div_1">
                Products
              </div>
              <div className="TableCompWithDiv_title_drop_down_div_1">Swap</div>
              <div className="TableCompWithDiv_title_drop_down_div_1">
                Funding
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="TableCompWithDiv_cont">
        {contentLoading ? (
          <table className="TableCompWithDiv_cont_table">
            <thead className="TableCompWithDiv_cont_head">
              <tr className="TableCompWithDiv_cont_head_titles">
                <th className="TableCompWithDiv_cont_head_titles_div TableCompWithDiv_cont_head_titles_div_first">
                  Product Name
                </th>
                <th className="TableCompWithDiv_cont_head_titles_div">
                  Amount
                </th>
                <th className="TableCompWithDiv_cont_head_titles_div">
                  Product Brand
                </th>
                <th className="TableCompWithDiv_cont_head_titles_div">Date</th>

                <th className="TableCompWithDiv_cont_head_titles_div  TableCompWithDiv_cont_head_titles_div_last">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="stakingTable_body">
              {dummyData.map((data) => {
                return (
                  <tr className="stakingTable_body_row ">
                    <td className="stakingTable_body_row_data stakingTable_body_row_data_first  ">
                      <ShimmerButton size="md" className="custom_shimmer" />
                    </td>
                    <td className="stakingTable_body_row_data">
                      <ShimmerButton size="md" className="custom_shimmer" />
                    </td>
                    <td className="stakingTable_body_row_data">
                      <ShimmerButton size="md" className="custom_shimmer" />
                    </td>

                    <td className="stakingTable_body_row_data">
                      <ShimmerButton size="md" className="custom_shimmer" />
                    </td>
                    <td className="stakingTable_body_row_data stakingTable_body_row_data_last">
                      <ShimmerButton size="md" className="custom_shimmer" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <>
            {currentTransactions.length <= 0 ? (
              <NodataComp />
            ) : (
              <table className="TableCompWithDiv_cont_table">
                <thead className="TableCompWithDiv_cont_head">
                  <tr className="TableCompWithDiv_cont_head_titles">
                    <th className="TableCompWithDiv_cont_head_titles_div TableCompWithDiv_cont_head_titles_div_first">
                      Type
                    </th>
                    <th className="TableCompWithDiv_cont_head_titles_div">
                      Amount
                    </th>
                    <th className="TableCompWithDiv_cont_head_titles_div">
                      To
                    </th>

                    <th className="TableCompWithDiv_cont_head_titles_div">
                      Date
                    </th>
                    <th className="TableCompWithDiv_cont_head_titles_div">
                      Time
                    </th>

                    <th className="TableCompWithDiv_cont_head_titles_div  TableCompWithDiv_cont_head_titles_div_last">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="stakingTable_body">
                  {currentTransactions.map((data) => {
                    const metaData = JSON.parse(data.meta);
                    // Convert the createdAt date to the desired format
                    const createdAtDate = new Date(data.createdAt);
                    const formattedDate = `${createdAtDate.getDate()}/${
                      createdAtDate.getMonth() + 1
                    }/${createdAtDate.getFullYear()}`;
                    //// console.logog("====================================");
                    //// console.logog(metaData);
                    //// console.logog("====================================");

                    const timestamp = data.createdAt;

                    // Parse the timestamp into a Date object
                    const date = new Date(timestamp);

                    // Get the hours and minutes
                    const hours = date.getHours();
                    const minutes = date.getMinutes();

                    // Format the time
                    const formattedTime = `${hours % 12}:${minutes
                      .toString()
                      .padStart(2, "0")}${hours < 12 ? "am" : "pm"}`;

                    //// console.logog(formattedTime);
                    return (
                      <tr
                        className="stakingTable_body_row "
                        id={data.id}
                        onClick={() => {
                          ToggleSaleDetails(data.id);
                        }}
                      >
                        {metaData.to_username === userName &&
                        data.type === "INTERNAL" ? (
                          <td className="stakingTable_body_row_data stakingTable_body_row_data_first ">
                            <div className="credit">
                              <img
                                src={data.image}
                                alt=""
                                className="stakingTable_body_row_data_img"
                              />
                              Credit{" "}
                              <SouthWestIcon className="stakingTable_body_row_data_icon" />{" "}
                            </div>
                          </td>
                        ) : metaData.to_username !== userName &&
                          data.type === "INTERNAL" ? (
                          <td className="stakingTable_body_row_data stakingTable_body_row_data_first ">
                            <div className="debit">
                              <img
                                src={data.image}
                                alt=""
                                className="stakingTable_body_row_data_img"
                              />
                              Debit{" "}
                              <NorthEastIcon className="stakingTable_body_row_data_icon" />
                            </div>
                          </td>
                        ) : data.type === "Credit" ? (
                          <td className="stakingTable_body_row_data stakingTable_body_row_data_first ">
                            <div className="credit">
                              <img
                                src={data.image}
                                alt=""
                                className="stakingTable_body_row_data_img"
                              />
                              {data.type}{" "}
                              <SouthWestIcon className="stakingTable_body_row_data_icon" />{" "}
                            </div>
                          </td>
                        ) : data.type === "Debit" ? (
                          <td className="stakingTable_body_row_data stakingTable_body_row_data_first ">
                            <div className="debit">
                              <img
                                src={data.image}
                                alt=""
                                className="stakingTable_body_row_data_img"
                              />
                              {data.type}
                              <NorthEastIcon className="stakingTable_body_row_data_icon" />{" "}
                            </div>
                          </td>
                        ) : (
                          <td className="stakingTable_body_row_data stakingTable_body_row_data_first ">
                            <div className="normal">
                              {" "}
                              <img
                                src={data.image}
                                alt=""
                                className="stakingTable_body_row_data_img"
                              />
                              {data.type}
                            </div>
                          </td>
                        )}

                        <td className="stakingTable_body_row_data">
                          {metaData.symbol === "NGN" ? "₦" : null}{" "}
                          {numberWithCommas(parseFloat(data.amount).toFixed(2))}{" "}
                          {metaData.symbol !== "NGN" ? "EGC" : null}{" "}
                        </td>

                        <td className="stakingTable_body_row_data">
                          <div className="stakingTable_body_row_email">
                            @{`${data.to_email.slice(0, 8)}...`}
                          </div>
                        </td>

                        <td className="stakingTable_body_row_data">
                          {formattedDate}
                        </td>
                        <td className="stakingTable_body_row_data">
                          {formattedTime}
                        </td>
                        <td className="stakingTable_body_row_data stakingTable_body_row_data_last">
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
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
      {currentTransactions.length <= 0 ? null : (
        <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
      )}

      {saleDetails === ""
        ? null
        : currentTransactions.map((data) => {
            const metaData = JSON.parse(data.meta);
            // Convert the createdAt date to the desired format
            const createdAtDate = new Date(data.createdAt);
            const formattedDate = `${createdAtDate.getDate()}/${
              createdAtDate.getMonth() + 1
            }/${createdAtDate.getFullYear()}`;
            //// console.logog("====================================");
            //// console.logog(metaData);
            //// console.logog("====================================");

            const timestamp = data.createdAt;

            // Parse the timestamp into a Date object
            const date = new Date(timestamp);

            // Get the hours and minutes
            const hours = date.getHours();
            const minutes = date.getMinutes();

            // Format the time
            const formattedTime = `${hours % 12}:${minutes
              .toString()
              .padStart(2, "0")}${hours < 12 ? "am" : "pm"}`;

            //// console.logog(formattedTime);

            return (
              <>
                {data.id === saleDetails ? (
                  <div>
                    <TableModal
                      closeModal={ToggleSaleDetails}
                      data={data}
                      metaData={metaData}
                      userName={userName}
                      formattedDate={formattedDate}
                      formattedTime={formattedTime}
                    />
                  </div>
                ) : null}
              </>
            );
          })}
    </div>
  );
};

export const Table = ({
  TableData,
  tableTitle,
  contentLoading,
  dummyData,
  userName,
}) => {
  const [smallMenu, setSmallMenu] = useState(false);
  const [saleDetails, setSaleDetails] = useState("");
  const ToggleSaleDetails = (product_id) => {
    setSaleDetails(product_id);
    //// console.logog(product_id);
  };
  const ToggleSmallMenu = () => {
    setSmallMenu(!smallMenu);
  };
  const updatedTableData = TableData.map((transaction) => {
    if (transaction.type === "DEPOSIT") {
      transaction.type = "Credit";
    } else if (
      transaction.type === "CASHOUT" ||
      transaction.type === "WITHDRAWAL"
    ) {
      transaction.type = "Debit";
    }
    return transaction;
  });
  return (
    <div className="TableCompWithDiv">
      <div className="TableCompWithDiv_title">
        {tableTitle}{" "}
        <Link
          to="/dashboard/transaction"
          className="TableCompWithDiv_title_link"
        >
          <button className="TableCompWithDiv_title_btn">View All</button>
        </Link>
        {/* <div
          className="TableCompWithDiv_title_drop_down"
          onClick={ToggleSmallMenu}
        >
          <MoreVertOutlinedIcon />
          {smallMenu ? (
            <div className="TableCompWithDiv_title_drop_down_div">
              <div className="TableCompWithDiv_title_drop_down_div_1">
                Products
              </div>
              <div className="TableCompWithDiv_title_drop_down_div_1">Swap</div>
              <div className="TableCompWithDiv_title_drop_down_div_1">
                Funding
              </div>
            </div>
          ) : null}
        </div> */}
      </div>
      <div className="TableCompWithDiv_cont">
        {contentLoading ? (
          <table className="TableCompWithDiv_cont_table">
            <thead className="TableCompWithDiv_cont_head">
              <tr className="TableCompWithDiv_cont_head_titles">
                <th className="TableCompWithDiv_cont_head_titles_div TableCompWithDiv_cont_head_titles_div_first">
                  Product Name
                </th>
                <th className="TableCompWithDiv_cont_head_titles_div">
                  Amount
                </th>
                <th className="TableCompWithDiv_cont_head_titles_div">
                  Product Brand
                </th>
                <th className="TableCompWithDiv_cont_head_titles_div">Date</th>

                <th className="TableCompWithDiv_cont_head_titles_div  TableCompWithDiv_cont_head_titles_div_last">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="stakingTable_body">
              {dummyData.map((data) => {
                return (
                  <tr className="stakingTable_body_row ">
                    <td className="stakingTable_body_row_data stakingTable_body_row_data_first  ">
                      <ShimmerButton size="md" className="custom_shimmer" />
                    </td>
                    <td className="stakingTable_body_row_data">
                      <ShimmerButton size="md" className="custom_shimmer" />
                    </td>
                    <td className="stakingTable_body_row_data">
                      <ShimmerButton size="md" className="custom_shimmer" />
                    </td>

                    <td className="stakingTable_body_row_data">
                      <ShimmerButton size="md" className="custom_shimmer" />
                    </td>
                    <td className="stakingTable_body_row_data stakingTable_body_row_data_last">
                      <ShimmerButton size="md" className="custom_shimmer" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <>
            {updatedTableData.length <= 0 ? (
              <NodataComp />
            ) : (
              <table className="TableCompWithDiv_cont_table">
                <thead className="TableCompWithDiv_cont_head">
                  <tr className="TableCompWithDiv_cont_head_titles">
                    <th className="TableCompWithDiv_cont_head_titles_div TableCompWithDiv_cont_head_titles_div_first">
                      Type
                    </th>
                    <th className="TableCompWithDiv_cont_head_titles_div">
                      Amount
                    </th>
                    <th className="TableCompWithDiv_cont_head_titles_div">
                      From
                    </th>
                    <th className="TableCompWithDiv_cont_head_titles_div">
                      Date
                    </th>
                    <th className="TableCompWithDiv_cont_head_titles_div">
                      Time
                    </th>

                    <th className="TableCompWithDiv_cont_head_titles_div  TableCompWithDiv_cont_head_titles_div_last">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="stakingTable_body">
                  {updatedTableData.map((data) => {
                    const metaData = JSON.parse(data.meta);
                    // Convert the createdAt date to the desired format
                    const createdAtDate = new Date(data.createdAt);
                    const formattedDate = `${createdAtDate.getDate()}/${
                      createdAtDate.getMonth() + 1
                    }/${createdAtDate.getFullYear()}`;
                    //// console.logog("====================================");
                    // console.log(metaData);
                    //// console.logog("====================================");

                    const timestamp = data.createdAt;

                    // Parse the timestamp into a Date object
                    const date = new Date(timestamp);

                    // Get the hours and minutes
                    const hours = date.getHours();
                    const minutes = date.getMinutes();

                    // Format the time
                    const formattedTime = `${hours % 12}:${minutes
                      .toString()
                      .padStart(2, "0")}${hours < 12 ? "am" : "pm"}`;

                    //// console.logog(formattedTime);
                    return (
                      <tr
                        className="stakingTable_body_row "
                        id={data.id}
                        onClick={() => {
                          ToggleSaleDetails(data.id);
                        }}
                      >
                        {metaData.to_username === userName &&
                        data.type === "INTERNAL" ? (
                          <td className="stakingTable_body_row_data stakingTable_body_row_data_first ">
                            <div className="credit">
                              <img
                                src={data.image}
                                alt=""
                                className="stakingTable_body_row_data_img"
                              />
                              Credit{" "}
                              <SouthWestIcon className="stakingTable_body_row_data_icon" />{" "}
                            </div>
                          </td>
                        ) : metaData.to_username !== userName &&
                          data.type === "INTERNAL" ? (
                          <td className="stakingTable_body_row_data stakingTable_body_row_data_first ">
                            <div className="debit">
                              <img
                                src={data.image}
                                alt=""
                                className="stakingTable_body_row_data_img"
                              />
                              Debit{" "}
                              <NorthEastIcon className="stakingTable_body_row_data_icon" />
                            </div>
                          </td>
                        ) : data.type === "Credit" ? (
                          <td className="stakingTable_body_row_data stakingTable_body_row_data_first ">
                            <div className="credit">
                              <img
                                src={data.image}
                                alt=""
                                className="stakingTable_body_row_data_img"
                              />
                              {data.type}{" "}
                              <SouthWestIcon className="stakingTable_body_row_data_icon" />{" "}
                            </div>
                          </td>
                        ) : data.type === "Debit" ? (
                          <td className="stakingTable_body_row_data stakingTable_body_row_data_first ">
                            <div className="debit">
                              <img
                                src={data.image}
                                alt=""
                                className="stakingTable_body_row_data_img"
                              />
                              {data.type}
                              <NorthEastIcon className="stakingTable_body_row_data_icon" />{" "}
                            </div>
                          </td>
                        ) : (
                          <td className="stakingTable_body_row_data stakingTable_body_row_data_first ">
                            <div className="normal">
                              {" "}
                              <img
                                src={data.image}
                                alt=""
                                className="stakingTable_body_row_data_img"
                              />
                              {data.type}
                            </div>
                          </td>
                        )}

                        <td className="stakingTable_body_row_data">
                          {metaData.symbol === "NGN" ? "₦" : null}{" "}
                          {numberWithCommas(parseFloat(data.amount).toFixed(2))}{" "}
                          {metaData.symbol === "USDT" ? "usd" : null}{" "}
                          {metaData.symbol === "EGC" ? "egc" : null}{" "}
                        </td>

                        <td className="stakingTable_body_row_data">
                          <div className="stakingTable_body_row_email">
                            @{`${data.to_email.slice(0, 8)}...`}
                          </div>
                        </td>

                        <td className="stakingTable_body_row_data">
                          {formattedDate}
                        </td>
                        <td className="stakingTable_body_row_data">
                          {formattedTime}
                        </td>
                        <td className="stakingTable_body_row_data stakingTable_body_row_data_last">
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
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </>
        )}

        {saleDetails === ""
          ? null
          : updatedTableData.map((data) => {
              const metaData = JSON.parse(data.meta);
              // Convert the createdAt date to the desired format
              const createdAtDate = new Date(data.createdAt);
              const formattedDate = `${createdAtDate.getDate()}/${
                createdAtDate.getMonth() + 1
              }/${createdAtDate.getFullYear()}`;
              //// console.logog("====================================");
              //// console.logog(metaData);
              //// console.logog("====================================");

              const timestamp = data.createdAt;

              // Parse the timestamp into a Date object
              const date = new Date(timestamp);

              // Get the hours and minutes
              const hours = date.getHours();
              const minutes = date.getMinutes();

              // Format the time
              const formattedTime = `${hours % 12}:${minutes
                .toString()
                .padStart(2, "0")}${hours < 12 ? "am" : "pm"}`;

              //// console.logog(formattedTime);

              return (
                <>
                  {data.id === saleDetails ? (
                    <div>
                      <TableModal
                        closeModal={ToggleSaleDetails}
                        data={data}
                        metaData={metaData}
                        userName={userName}
                        formattedDate={formattedDate}
                        formattedTime={formattedTime}
                      />
                    </div>
                  ) : null}
                </>
              );
            })}
      </div>
    </div>
  );
};
//   const date = new Date(data.createdAt);
//   const day = date.getUTCDate().toString().padStart(2, "0");
//   const month = (date.getUTCMonth() + 1)
//     .toString()
//     .padStart(2, "0");
//   const year = date.getUTCFullYear();
//   const formattedDate = `${day}/${month}/${year}`;
//   //// console.logog(formattedDate);
//   const dateString = formattedDate;
//   const date2 = new Date(dateString);
//   const formattedDated = date.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "2-digit",
//   });
