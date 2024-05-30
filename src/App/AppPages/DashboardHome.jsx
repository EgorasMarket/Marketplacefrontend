import React, { useState, useEffect } from "react";
import { ShoppingBasket01Icon } from "hugeicons-react";
import { StakeIcon } from "hugeicons-react";
import "../AppStyles/dashboardHome.css";
import formatNumber from "../../Components/FormatNumber";
import { UserGroupIcon } from "hugeicons-react";
import { Table } from "../../Components/Tables/TableComp";
import Staticdata from "../../assets/json/Static";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  Bar,
  BarChart,
  ResponsiveContainer,
} from "recharts";
import { FETCH_ALL_STAKE } from "../../Services/ProductServices";
import {
  FETCH_DASHBOARD_DATA,
  FETCH_REFERRAL_DATA,
  FETCH_STAKE_POOL_DATA,
} from "../../Services/userServices";

const DashboardHome = () => {
  const queryClient = useQueryClient();

  const [graphData2, setGraphData2] = useState([]);

  const [graphData, setGraphData] = useState([
    // {
    //   value: 3729.2599999999998,
    //   timestamp: "Jan 01, 2024",
    //   month: "Jan",
    // },
    // {
    //   value: 459.12999999999994,
    //   timestamp: "Dec 30, 2023",
    //   month: "Dec",
    // },
    // {
    //   value: 412.28,
    //   timestamp: "Dec 29, 2023",
    //   month: "Dec",
    // },
    // {
    //   value: 28.11,
    //   timestamp: "Dec 25, 2023",
    //   month: "Dec",
    // },
    // {
    //   value: 0,
    //   timestamp: "Dec 24, 2023",
    //   month: "Dec",
    // },
    // {
    //   value: 281.09999999999997,
    //   timestamp: "Dec 23, 2023",
    //   month: "Dec",
    // },
    // {
    //   value: 103.07,
    //   timestamp: "Dec 17, 2023",
    //   month: "Dec",
    // },
    // {
    //   value: 3738.6299999999997,
    //   timestamp: "Dec 16, 2023",
    //   month: "Dec",
    // },
    // {
    //   value: 993.2199999999999,
    //   timestamp: "Dec 10, 2023",
    //   month: "Dec",
    // },
    // {
    //   value: 0,
    //   timestamp: "Dec 08, 2023",
    //   month: "Dec",
    // },
    // {
    //   value: 65.58999999999999,
    //   timestamp: "Dec 07, 2023",
    //   month: "Dec",
    // },
    // {
    //   value: 65.58999999999999,
    //   timestamp: "Dec 06, 2023",
    //   month: "Dec",
    // },
    // {
    //   value: 580.9399999999999,
    //   timestamp: "Dec 05, 2023",
    //   month: "Dec",
    // },
    // {
    //   value: 65.58999999999999,
    //   timestamp: "Dec 04, 2023",
    //   month: "Dec",
    // },
    // {
    //   value: 65.58999999999999,
    //   timestamp: "Dec 03, 2023",
    //   month: "Dec",
    // },
    // {
    //   value: 11290.849999999999,
    //   timestamp: "Dec 01, 2023",
    //   month: "Dec",
    // },
    // {
    //   value: 15872.779999999999,
    //   timestamp: "Nov 29, 2023",
    //   month: "Nov",
    // },
  ]);
  const [ChartValue, setChartValue] = useState(0);
  const [ChartTime, setChartTime] = useState(0);
  const [ChartValue2, setChartValue2] = useState(0);
  const [ChartTime2, setChartTime2] = useState(0);
  const [LastArray, setLastArray] = useState(0);
  const [lastIndex, setlastIndex] = useState(0);
  const [LastArray2, setLastArray2] = useState(0);
  const [lastIndex2, setlastIndex2] = useState(0);

  const [dashData, setDashData] = useState({});
  const [referralCount, setReferralCount] = useState(0);
  const {
    data: dashInfo,
    isPending: isDashLoading,
    isError: isDashError,
    error: dashError,
  } = useQuery({
    queryKey: "dash_data",
    queryFn: async () => {
      const res = await FETCH_DASHBOARD_DATA();
      console.log("====================================");
      console.log(res);
      console.log(res);
      setDashData(res.data);
      return res;
    },
  });
  const {
    data: graph_data,
    isPending: isGraphDataLoading,
    isError: isGraphError,
    error: graphError,
  } = useQuery({
    queryKey: "graph_data",
    queryFn: async () => {
      const res = await FETCH_STAKE_POOL_DATA();
      console.log("====================================");
      console.log(res);
      console.log(res, "graph data");
      setGraphData(res.data.stakeData);
      return res;
    },
  });
  const {
    data: referralInfo,
    isPending: isReferralPending,
    isError: isReferralError,
    error: referralError,
  } = useQuery({
    queryKey: "refer_data",
    queryFn: async () => {
      const res = await FETCH_REFERRAL_DATA();
      console.log("====================================");
      console.log(res, "alalalal");
      console.log(res);
      setReferralCount(res?.count);
      return res;
    },
  });

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

  const tableData = [
    {
      id: 2062,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"type":"product","product_id":"f322de4f-7e46-4563-bdd3-eb210e9052d0","index_id":"120","quantity":"1","amount":"10000.000000000000000000000000000000","symbol":"NGN","user":"0x251118B90Efd7dD1856d7d8de60b6f023347ac26"}',
      amount: "10000.000000000000000000000000000000",
      type: "PURCHASE",
      status: "PENDING",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-05-27T10:11:29.000Z",
      updatedAt: "2024-05-27T10:11:29.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 2061,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"EGC","tokenOut":"NGN","amountIn":4.925422556021186,"price":182315.6369205357,"amountOut":897981.5504037754}',
      amount: "897981.550403775400000000000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-05-27T10:10:42.000Z",
      updatedAt: "2024-05-27T10:10:42.000Z",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/15368.png",
      current_price: "13.090000000000000000000000000000",
    },
    {
      id: 2035,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"type":2,"chainId":56,"nonce":178,"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x3b9aca00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x3b9aca00"},"gasPrice":null,"gasLimit":{"type":"BigNumber","hex":"0x86d3"},"to":"0x55d398326f99059fF775485246999027B3197955","value":{"type":"BigNumber","hex":"0x00"},"data":"0xa9059cbb00000000000000000000000081d3f3bba223a1ae0140873f7c9bc6a1efe302b30000000000000000000000000000000000000000000000018370a915875b0000","accessList":[],"hash":"0xb9fa766419e1cd8c2da8ddcfce4cad8fb6ebda28404a752fee28d880690cfb1e","v":1,"r":"0x5a76d86c88fe27fe1aaafa3232c1ef18f69d638a3441319ea21230e046c32eda","s":"0x0c0bad23d32fa351d9d2b251078ea4f3eb2ff24b8ba37873a47577a968972e39","from":"0xBb8fC16787D6a7c221d5b2C8177823c9d9E8475D","confirmations":0,"symbol":"USD","network":"BINANCE","fee":"1%","to_send":27.918,"wallet_address":"0x81d3f3bba223a1ae0140873f7c9bc6a1efe302b3","txnId":"5K3L9R4ISE"}',
      amount: "27.918000000000000000000000000000",
      type: "WIITHDRAWAL",
      status: "SUCCESS",
      approved_by: "toniaadiele@gmail.com",
      origin: "DEFAULT",
      createdAt: "2024-05-26T19:14:07.000Z",
      updatedAt: "2024-05-26T19:31:02.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 2034,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"USD","txh":"0x8505f146d705475b619d34d70c3a3e6a115dea75b59451d6f9fd72639f1045ad","confirmation":"3/3","network":"EGOCHAIN","wallet_address":"0x83D4b67B333b2b79e04883Dd2F239C6474C434ca","txnId":"5K3L9R4ISE"}',
      amount: "28.200000000000000000000000000000",
      type: "Credit",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-05-26T19:14:07.000Z",
      updatedAt: "2024-05-26T19:14:07.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 1952,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"type":2,"chainId":56,"nonce":173,"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x3b9aca00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x3b9aca00"},"gasPrice":null,"gasLimit":{"type":"BigNumber","hex":"0x86d3"},"to":"0x55d398326f99059fF775485246999027B3197955","value":{"type":"BigNumber","hex":"0x00"},"data":"0xa9059cbb00000000000000000000000081d3f3bba223a1ae0140873f7c9bc6a1efe302b3000000000000000000000000000000000000000000000000510f668d950e8000","accessList":[],"hash":"0xd4522bb51e02c0f0d6305712f7b9d26133919d5e89a64eecde67995b28a5804d","v":1,"r":"0xfbff49098ca9df08c52732f48db703ac5c23348b3129fcba2346b8fd27dbb00d","s":"0x60cd07dbf2180f8443a45181526b62ddaf0c6b763bc5696f3e6d0262c750b628","from":"0xBb8fC16787D6a7c221d5b2C8177823c9d9E8475D","confirmations":0,"symbol":"USD","network":"BINANCE","fee":"1%","to_send":5.841,"wallet_address":"0x81d3f3bba223a1ae0140873f7c9bc6a1efe302b3","txnId":"2YSMGGH0LY"}',
      amount: "5.841000000000000000000000000000",
      type: "WIITHDRAWAL",
      status: "SUCCESS",
      approved_by: "obeletobs@gmail.com",
      origin: "DEFAULT",
      createdAt: "2024-05-20T08:50:09.000Z",
      updatedAt: "2024-05-20T09:03:03.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 1951,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"USD","txh":"0xab38034474fee1d73909f8a18767b682f19cdec3e52620ca1c40f695693e6c26","confirmation":"3/3","network":"EGOCHAIN","wallet_address":"0x251118B90Efd7dD1856d7d8de60b6f023347ac26","txnId":"2YSMGGH0LY"}',
      amount: "5.900000000000000000000000000000",
      type: "Credit",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-05-20T08:50:09.000Z",
      updatedAt: "2024-05-20T08:50:09.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 1947,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"type":2,"chainId":56,"nonce":171,"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x3b9aca00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x3b9aca00"},"gasPrice":null,"gasLimit":{"type":"BigNumber","hex":"0xc9ab"},"to":"0x55d398326f99059fF775485246999027B3197955","value":{"type":"BigNumber","hex":"0x00"},"data":"0xa9059cbb00000000000000000000000081d3f3bba223a1ae0140873f7c9bc6a1efe302b3000000000000000000000000000000000000000000000001c9824fd5564d8000","accessList":[],"hash":"0x349008a3d3bdd386357692af55932e6236192af24555ce8c6361eb964afc2bfa","v":1,"r":"0x145d331a427ff1b55dfb7d6aae4f7d24eb58a9d447d3ba8506047825140d5caf","s":"0x470847c32b6ef7af4ba747148c55ec2ab49e55d2f5a6a7651a94c77401fde327","from":"0xBb8fC16787D6a7c221d5b2C8177823c9d9E8475D","confirmations":0,"symbol":"USD","network":"BINANCE","fee":"1%","to_send":32.967,"wallet_address":"0x81d3f3bba223a1ae0140873f7c9bc6a1efe302b3","txnId":"U8AH3HV00T"}',
      amount: "32.967000000000000000000000000000",
      type: "WIITHDRAWAL",
      status: "SUCCESS",
      approved_by: "toniaadiele@gmail.com",
      origin: "DEFAULT",
      createdAt: "2024-05-19T23:08:09.000Z",
      updatedAt: "2024-05-19T23:27:02.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 1946,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"USD","txh":"0x265e8218d2bc1a29dd339d8ad037e5ddd31befb9ce1154e608c04e6c33f210a3","confirmation":"3/3","network":"EGOCHAIN","wallet_address":"0x251118B90Efd7dD1856d7d8de60b6f023347ac26","txnId":"U8AH3HV00T"}',
      amount: "33.300000000000000000000000000000",
      type: "DEPOSIT",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-05-19T23:08:09.000Z",
      updatedAt: "2024-05-19T23:08:09.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 1735,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"type":2,"chainId":56,"nonce":143,"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x3b9aca00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x3b9aca00"},"gasPrice":null,"gasLimit":{"type":"BigNumber","hex":"0xc99f"},"to":"0x55d398326f99059fF775485246999027B3197955","value":{"type":"BigNumber","hex":"0x00"},"data":"0xa9059cbb00000000000000000000000081d3f3bba223a1ae0140873f7c9bc6a1efe302b300000000000000000000000000000000000000000000000aa052ef7108120000","accessList":[],"hash":"0x59b79fbf582ce4a0c5f517ffa039deab34ed74f9e045287d7350839d23cfc057","v":1,"r":"0xbef5dd9f71196b1e35de11e0265d08d43ba749295f81de74c27c120778dc537e","s":"0x30b99827425e77e8e2d0fa63eb548b36878cd5c47f0f4670b384c18964db5d25","from":"0xBb8fC16787D6a7c221d5b2C8177823c9d9E8475D","confirmations":0,"symbol":"USD","network":"BINANCE","fee":"1%","to_send":196.02,"wallet_address":"0x81d3f3bba223a1ae0140873f7c9bc6a1efe302b3","txnId":"A2C3K4DXYX"}',
      amount: "196.020000000000000000000000000000",
      type: "WIITHDRAWAL",
      status: "SUCCESS",
      approved_by: "toniaadiele@gmail.com",
      origin: "DEFAULT",
      createdAt: "2024-05-02T19:20:08.000Z",
      updatedAt: "2024-05-03T11:30:02.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 1734,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"USD","txh":"0x61be8d56f516d9fc8a723a5d499da782412948c7c623ee8bfcc46c2a240a93c0","confirmation":"3/3","network":"EGOCHAIN","wallet_address":"0x251118B90Efd7dD1856d7d8de60b6f023347ac26","txnId":"A2C3K4DXYX"}',
      amount: "198.000000000000000000000000000000",
      type: "DEPOSIT",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-05-02T19:20:08.000Z",
      updatedAt: "2024-05-02T19:20:08.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 1708,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"type":2,"chainId":56,"nonce":139,"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x3b9aca00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x3b9aca00"},"gasPrice":null,"gasLimit":{"type":"BigNumber","hex":"0xc9b7"},"to":"0x55d398326f99059fF775485246999027B3197955","value":{"type":"BigNumber","hex":"0x00"},"data":"0xa9059cbb00000000000000000000000081d3f3bba223a1ae0140873f7c9bc6a1efe302b300000000000000000000000000000000000000000000000245bcf78166de4a20","accessList":[],"hash":"0xa20a53a831ff46dcb787f5438305d11826add1e494f764d225e2aef52a55be8a","v":0,"r":"0x2d337dda7d130276735139c75a39c1b2b5bc578d7d5a2195237c072a2e0afabc","s":"0x5b6de5a0e45b328be00a0071acf5c0979855d593948f86065d4c7dab99d78094","from":"0xBb8fC16787D6a7c221d5b2C8177823c9d9E8475D","confirmations":0,"symbol":"USD","network":"BINANCE","fee":"1%","to_send":41.91865156680642,"wallet_address":"0x81d3f3bba223a1ae0140873f7c9bc6a1efe302b3","txnId":"IHYL3JHG89"}',
      amount: "41.918651566806420000000000000000",
      type: "WIITHDRAWAL",
      status: "SUCCESS",
      approved_by: "goodluckcanhelp@gmail.com",
      origin: "DEFAULT",
      createdAt: "2024-04-29T21:08:09.000Z",
      updatedAt: "2024-04-30T11:24:01.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 1707,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"USD","txh":"0x91c7014bd12b8d9c928b6de5a9fefeb93c8bc8ac16199b97ab6d53efcd1bf1bd","confirmation":"3/3","network":"EGOCHAIN","wallet_address":"0x251118B90Efd7dD1856d7d8de60b6f023347ac26","txnId":"IHYL3JHG89"}',
      amount: "42.342072289703450000000000000000",
      type: "DEPOSIT",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-29T21:08:09.000Z",
      updatedAt: "2024-04-29T21:08:09.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 1670,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"type":2,"chainId":56,"nonce":131,"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x3b9aca00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x3b9aca00"},"gasPrice":null,"gasLimit":{"type":"BigNumber","hex":"0x86d3"},"to":"0x55d398326f99059fF775485246999027B3197955","value":{"type":"BigNumber","hex":"0x00"},"data":"0xa9059cbb00000000000000000000000081d3f3bba223a1ae0140873f7c9bc6a1efe302b3000000000000000000000000000000000000000000000001a9e8c865bcbd0000","accessList":[],"hash":"0x72141e6c0ed2825592b31dc77cfbffa86a56044136f577acd17b442953aa84f5","v":1,"r":"0xd25c2df0e49cf43524ca3c9906b600c711519ca4d3b0d05e528da617bcdfebee","s":"0x215ee6a17ad0787bf33a301c44c49f1793e77559492d9bd2fc3200a3079a184d","from":"0xBb8fC16787D6a7c221d5b2C8177823c9d9E8475D","confirmations":0,"symbol":"USD","network":"BINANCE","fee":"1%","to_send":30.69,"wallet_address":"0x81d3f3bba223a1ae0140873f7c9bc6a1efe302b3","txnId":"V81XA0K014"}',
      amount: "30.690000000000000000000000000000",
      type: "WIITHDRAWAL",
      status: "SUCCESS",
      approved_by: "toniaadiele@gmail.com",
      origin: "DEFAULT",
      createdAt: "2024-04-27T15:54:08.000Z",
      updatedAt: "2024-04-27T15:56:02.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 1669,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"USD","txh":"0xdd6b0ad86f112fd8ac18d7f6d9165ea45500b022cd61af6370b7555ef7e08531","confirmation":"3/3","network":"EGOCHAIN","wallet_address":"0x251118B90Efd7dD1856d7d8de60b6f023347ac26","txnId":"V81XA0K014"}',
      amount: "31.000000000000000000000000000000",
      type: "DEPOSIT",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-27T15:54:08.000Z",
      updatedAt: "2024-04-27T15:54:08.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 1508,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"type":2,"chainId":5439,"nonce":29,"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x07"},"maxFeePerGas":{"type":"BigNumber","hex":"0x07"},"gasPrice":null,"gasLimit":{"type":"BigNumber","hex":"0xc993"},"to":"0x59135ECF9Be79324403F9549ddFD6282c8705F5C","value":{"type":"BigNumber","hex":"0x00"},"data":"0xa9059cbb000000000000000000000000a5ff0fd1a84d004649e97b465779499546654fed0000000000000000000000000000000000000000000000051934b8b3a57d0000","accessList":[],"hash":"0xa18fc62d108626542de9f2ae4a2176e9385d50adc3b455410c0ac7b0ca68fce4","v":1,"r":"0x6adf31d5cfcb651bd77510fb9650ae56fbe3af78f768a030c0e2447c501362dc","s":"0x188adcd7a062994de1cf3c60583fc17e98827d93801126e7e23220819a6c85b8","from":"0xBb8fC16787D6a7c221d5b2C8177823c9d9E8475D","confirmations":0,"symbol":"USD","network":"EGOCHAIN","fee":"1%","to_send":94.05,"wallet_address":"0xa5ff0Fd1a84D004649E97b465779499546654feD","txnId":"9APHPYUQRB"}',
      amount: "94.050000000000000000000000000000",
      type: "WIITHDRAWAL",
      status: "SUCCESS",
      approved_by: "obeletobs@gmail.com",
      origin: "DEFAULT",
      createdAt: "2024-04-16T13:55:05.000Z",
      updatedAt: "2024-04-16T13:56:07.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 1507,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"USD","txh":"0x83aa97c6214571af4eef06e8b07a1765c923ac31f84bd5deec71b862ebbcf7b4","confirmation":"3/3","network":"BINANCE","txnId":"9APHPYUQRB"}',
      amount: "95.000000000000000000000000000000",
      type: "DEPOSIT",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-16T13:55:05.000Z",
      updatedAt: "2024-04-16T13:55:05.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 1494,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"type":2,"chainId":5439,"nonce":24,"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x07"},"maxFeePerGas":{"type":"BigNumber","hex":"0x07"},"gasPrice":null,"gasLimit":{"type":"BigNumber","hex":"0x86c7"},"to":"0x59135ECF9Be79324403F9549ddFD6282c8705F5C","value":{"type":"BigNumber","hex":"0x00"},"data":"0xa9059cbb000000000000000000000000a5ff0fd1a84d004649e97b465779499546654fed000000000000000000000000000000000000000000000005796106fc2af20000","accessList":[],"hash":"0xb89bcf9745ce403a98154da82fd308a86026942122625d7f49443b1e562b0e19","v":1,"r":"0x07517cd3450dfa3c5a0183c01575a41e4aaee890fc2b930056f21f4bd5bccb44","s":"0x0c5503f9856be80f85ae68e787770e6cde9dd6ec0fb5be4faf629857aa99fd5b","from":"0xBb8fC16787D6a7c221d5b2C8177823c9d9E8475D","confirmations":0,"symbol":"USD","network":"EGOCHAIN","fee":"1%","to_send":100.98,"wallet_address":"0xa5ff0Fd1a84D004649E97b465779499546654feD","txnId":"Y41TBRPZ2Q"}',
      amount: "100.980000000000000000000000000000",
      type: "WIITHDRAWAL",
      status: "SUCCESS",
      approved_by: "obeletobs@gmail.com",
      origin: "DEFAULT",
      createdAt: "2024-04-16T10:08:05.000Z",
      updatedAt: "2024-04-16T10:09:06.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 1493,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"USD","txh":"0x7ff6260cdb8e81b50ce1d3dcf6dd4c86cb6a48684155fb95c21c7c46ebccde6e","confirmation":"3/3","network":"BINANCE","txnId":"Y41TBRPZ2Q"}',
      amount: "102.000000000000000000000000000000",
      type: "DEPOSIT",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-16T10:08:05.000Z",
      updatedAt: "2024-04-16T10:08:05.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 1461,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"type":2,"chainId":1,"nonce":0,"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x05511add7f"},"maxFeePerGas":{"type":"BigNumber","hex":"0x05511add7f"},"gasPrice":null,"gasLimit":{"type":"BigNumber","hex":"0xe029"},"to":"0xCE5464B006A10d20c5fC56a19618212A129eed45","value":{"type":"BigNumber","hex":"0x00"},"data":"0xa9059cbb000000000000000000000000a5ff0fd1a84d004649e97b465779499546654fed000000000000000000000000000000000000000000000000000384665653e000","accessList":[],"hash":"0xe47d00e4c78f1b1c1be47e48374f6ba9247bac6f17af844a620cf6b3f880ecb7","v":1,"r":"0xa770241afb18948ed1cdedaab0f6263cc9c16c20f6db3e0a1f7f1bdc578b0aad","s":"0x67b10131cd7415d7dd0cad17334f5b96b0b299b86819aa0041ef65dea24e5abc","from":"0xBb8fC16787D6a7c221d5b2C8177823c9d9E8475D","confirmations":0,"symbol":"ESTA","network":"Ethereum","fee":"1%","to_send":0.00099,"wallet_address":"0xa5ff0Fd1a84D004649E97b465779499546654feD","txnId":"I82L2NFFUP"}',
      amount: "0.000990000000000000000000000000",
      type: "WIITHDRAWAL",
      status: "SUCCESS",
      approved_by: "ogemdiugoji@gmail.com",
      origin: "DEFAULT",
      createdAt: "2024-04-15T13:28:05.000Z",
      updatedAt: "2024-04-15T13:30:02.000Z",
      image: "https://egoswap.io/img/esta_logo.jpeg",
      current_price: "5.820700000000000000000000000000",
    },
    {
      id: 1460,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"ESTA","txh":"0x0959a6c92fe35a12f1d489088866ce9810c65dd88769dce50603c12bb88091d4","confirmation":"3/3","network":"Egochain","wallet_address":"0x251118B90Efd7dD1856d7d8de60b6f023347ac26","txnId":"I82L2NFFUP"}',
      amount: "0.001000000000000000000000000000",
      type: "DEPOSIT",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-15T13:28:05.000Z",
      updatedAt: "2024-04-15T13:28:05.000Z",
      image: "https://egoswap.io/img/esta_logo.jpeg",
      current_price: "5.820700000000000000000000000000",
    },
    {
      id: 1458,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"ESTA","network":"Ethereum","fee":"1%","to_send":0.00009900000000000001,"wallet_address":"0xa5ff0Fd1a84D004649E97b465779499546654feD","txnId":"JHPA5AWI0L"}',
      amount: "0.000099000000000000010000000000",
      type: "WIITHDRAWAL",
      status: "SUCCESS",
      approved_by: "ogemdiugoji@gmail.com",
      origin: "DEFAULT",
      createdAt: "2024-04-15T12:37:07.000Z",
      updatedAt: "2024-04-15T12:48:01.000Z",
      image: "https://egoswap.io/img/esta_logo.jpeg",
      current_price: "5.820700000000000000000000000000",
    },
    {
      id: 1457,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"ESTA","txh":"0x7ef1f37980c9d61a623ed1a8449bd8a4fcd9fd8d882beaabf52dadd36812832a","confirmation":"3/3","network":"Egochain","wallet_address":"0x251118B90Efd7dD1856d7d8de60b6f023347ac26","txnId":"JHPA5AWI0L"}',
      amount: "0.000100000000000000000000000000",
      type: "DEPOSIT",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-15T12:37:07.000Z",
      updatedAt: "2024-04-15T12:37:07.000Z",
      image: "https://egoswap.io/img/esta_logo.jpeg",
      current_price: "5.820700000000000000000000000000",
    },
    {
      id: 1454,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"type":2,"chainId":56,"nonce":102,"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x3b9aca00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x3b9aca00"},"gasPrice":null,"gasLimit":{"type":"BigNumber","hex":"0x5474"},"to":"0xCE5464B006A10d20c5fC56a19618212A129eed45","value":{"type":"BigNumber","hex":"0x00"},"data":"0xa9059cbb000000000000000000000000a5ff0fd1a84d004649e97b465779499546654fed000000000000000000000000000000000000000000000000000384665653e000","accessList":[],"hash":"0x517d2da253a66ab54a8d7d58870a4a0b60cee9ae817d5d7981d52176b04cf416","v":0,"r":"0x5d90f8c2f8c95ac1e29c4cd75fccedb96378b0889b4e083b079586fd366cd24c","s":"0x2cfbcdc3966a23f55bf8329c92a4fbdfc47f89b8dcc8703f7f14c7687eb58e3e","from":"0xBb8fC16787D6a7c221d5b2C8177823c9d9E8475D","confirmations":0,"symbol":"ESTA","network":"Ethereum","fee":"1%","to_send":0.00099,"wallet_address":"0xa5ff0Fd1a84D004649E97b465779499546654feD","txnId":"98EY7KD1GU"}',
      amount: "0.000990000000000000000000000000",
      type: "WIITHDRAWAL",
      status: "SUCCESS",
      approved_by: "ogemdiugoji@gmail.com",
      origin: "DEFAULT",
      createdAt: "2024-04-15T11:53:07.000Z",
      updatedAt: "2024-04-15T11:55:02.000Z",
      image: "https://egoswap.io/img/esta_logo.jpeg",
      current_price: "5.820700000000000000000000000000",
    },
    {
      id: 1453,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"ESTA","txh":"0xafb03ab94a4e9ff840b0f7671b04a0276fdabaf70671d13937eca64a0a4d0964","confirmation":"3/3","network":"Egochain","wallet_address":"0x251118B90Efd7dD1856d7d8de60b6f023347ac26","txnId":"98EY7KD1GU"}',
      amount: "0.001000000000000000000000000000",
      type: "DEPOSIT",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-15T11:53:07.000Z",
      updatedAt: "2024-04-15T11:53:07.000Z",
      image: "https://egoswap.io/img/esta_logo.jpeg",
      current_price: "5.820700000000000000000000000000",
    },
    {
      id: 1448,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"ESTA","txh":"0x7a774cfa8d973a45a77af3172fe8c11e75e3f47781dd4b8af40c22ef48d43508","confirmation":"3/3","network":"Ethereum (ERC20)","wallet_address":"0x251118B90Efd7dD1856d7d8de60b6f023347ac26"}',
      amount: "0.001000000000000000000000000000",
      type: "DEPOSIT",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-15T09:47:08.000Z",
      updatedAt: "2024-04-15T09:47:08.000Z",
      image: "https://egoswap.io/img/esta_logo.jpeg",
      current_price: "5.820700000000000000000000000000",
    },
    {
      id: 511,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"EGC","amountIn":1321.4400605677135,"price":3676.160409556314,"amountOut":0.35946202378236314}',
      amount: "0.359462023782363140000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-12-10T17:52:54.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 510,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"USD","tokenOut":"NGN","amountIn":1.0744328432860086,"price":0.0008106380128175776,"amountOut":1325.416309496202}',
      amount: "1325.416309496202000000000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-12-10T07:19:36.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 520,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"USD","tokenOut":"NGN","amountIn":3.22,"price":0.0008123987154422819,"amountOut":3963.5710135841173}',
      amount: "3963.571013584117300000000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "CEX",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-12-15T22:37:27.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 521,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"EGC","tokenOut":"NGN","amountIn":0.35838363771101606,"price":15267.488,"amountOut":5471.617888149285}',
      amount: "5471.617888149285000000000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "CEX",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-12-15T23:01:49.000Z",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/15368.png",
      current_price: "13.090000000000000000000000000000",
    },
    {
      id: 542,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"EGC","amountIn":9406.883335028202,"price":1904.1336206896551,"amountOut":4.9402432858788226}',
      amount: "4.940243285878822600000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-12-28T15:50:37.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 578,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"USD","tokenOut":"NGN","amountIn":0.0032985298580259,"price":0.0008190608499993608,"amountOut":4.027209770835066}',
      amount: "4.027209770835066000000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "CEX",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2024-02-17T12:56:11.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 581,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"USD","txh":"0x5dc9d75464f59704f5f4113d8898f67c4226bb7bc01bab4a8ecb9cef4e47e324","confirmation":"3/3","network":"Ethereum (ERC20)","wallet_address":"0x251118B90Efd7dD1856d7d8de60b6f023347ac26"}',
      amount: "2.000000000000000000000000000000",
      type: "DEPOSIT",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2024-02-17T22:48:02.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 582,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"USD","tokenOut":"EGAX","amountIn":1,"price":2.5063291139240507,"amountOut":0.398989898989899}',
      amount: "0.398989898989899000000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2024-02-17T22:48:38.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 584,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"USD","tokenOut":"EGAX","amountIn":1,"price":2.5,"amountOut":0.4}',
      amount: "0.400000000000000000000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2024-02-17T23:01:12.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 585,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"EGAX","network":"BNB Smart Chain (BEP20)","fee":0.1,"to_send":0.4,"wallet_address":"0xDE41Bab358B663293179858A6e97c8b183979348","decline_action":"REVERSE"}',
      amount: "0.500000000000000000000000000000",
      type: "WIITHDRAWAL",
      status: "DECLINED",
      approved_by: "goodluckcanhelp@gmail.com",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2024-02-18T09:40:11.000Z",
      image: "https://www.egochain.org/img/egax_logo.png",
      current_price: "5.820700000000000000000000000000",
    },
    {
      id: 586,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"EGAX","tokenOut":"USD","amountIn":0.15,"price":2.50004,"amountOut":0.37500599999999995}',
      amount: "0.375005999999999950000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2024-02-18T08:20:10.000Z",
      image: "https://www.egochain.org/img/egax_logo.png",
      current_price: "5.820700000000000000000000000000",
    },
    {
      id: 587,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"EGAX","network":"BNB Smart Chain (BEP20)","fee":0.1,"to_send":0.4,"wallet_address":"0xDE41Bab358B663293179858A6e97c8b183979348","decline_action":"REVERSE"}',
      amount: "0.500000000000000000000000000000",
      type: "WIITHDRAWAL",
      status: "DECLINED",
      approved_by: "goodluckcanhelp@gmail.com",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2024-02-18T10:01:33.000Z",
      image: "https://www.egochain.org/img/egax_logo.png",
      current_price: "5.820700000000000000000000000000",
    },
    {
      id: 588,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"EGAX","network":"BNB Smart Chain (BEP20)","fee":0.1,"to_send":0.4,"wallet_address":"0xe39774CC7AF44d1C646ef10E3739476C3bd639dB"}',
      amount: "0.500000000000000000000000000000",
      type: "WIITHDRAWAL",
      status: "PENDING",
      approved_by: "goodluckcanhelp@gmail.com",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2024-02-18T19:19:01.000Z",
      image: "https://www.egochain.org/img/egax_logo.png",
      current_price: "5.820700000000000000000000000000",
    },
    {
      id: 589,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"EGAX","tokenOut":"USD","amountIn":0.1465929292929293,"price":2.50004,"amountOut":0.3664881869494949}',
      amount: "0.366488186949494900000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2024-02-18T19:39:38.000Z",
      image: "https://www.egochain.org/img/egax_logo.png",
      current_price: "5.820700000000000000000000000000",
    },
    {
      id: 590,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"USD","network":"BNB Smart Chain (BEP20)","fee":0.1,"to_send":0.5,"wallet_address":"0xa5ff0Fd1a84D004649E97b465779499546654feD"}',
      amount: "0.600000000000000000000000000000",
      type: "WIITHDRAWAL",
      status: "DECLINED",
      approved_by: "obeletobs@gmail.com",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2024-02-19T19:05:10.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 625,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"USD","tokenOut":"EGAX","amountIn":0.13926970438864644,"price":2.7570954042803684,"amountOut":0.05051319739332609}',
      amount: "0.050513197393326090000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2024-02-19T17:07:06.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 737,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"USD","tokenOut":"EGAX","amountIn":1e-17,"price":4.602564805173453,"amountOut":2.1727016181846325e-18}',
      amount: "0.000000000000000002172701618185",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2024-02-21T10:26:27.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 106,
      email: "hitechsuite@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"NGN","to_username":"cyntax","from_username":"wrapsticks"}',
      amount: "1.000000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-06T06:27:17.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 364,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"EGC","amountIn":200,"price":130952.38613861386,"amountOut":0.001527272666786681}',
      amount: "0.001527272666786681000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-31T14:55:30.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 332,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"EGC","amountIn":10,"price":104036.26086956522,"amountOut":0.00009612033262650062}',
      amount: "0.000096120332626500620000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-14T13:29:13.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 331,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"EGC","amountIn":10,"price":104036.17391304347,"amountOut":0.0000961204129667273}',
      amount: "0.000096120412966727300000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-13T16:00:05.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 328,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"EGC","amountIn":100,"price":104035.30434782608,"amountOut":0.000961212163763806}',
      amount: "0.000961212163763806000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-13T15:14:50.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 319,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"EGC","amountIn":10,"price":99678.38983050847,"amountOut":0.00010032264783774937}',
      amount: "0.000100322647837749370000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-11T15:20:19.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 318,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"EGC","amountIn":40,"price":99678.05084745762,"amountOut":0.0004012919560517293}',
      amount: "0.000401291956051729300000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-11T13:59:35.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 317,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"EGC","amountIn":10,"price":99677.96610169491,"amountOut":0.00010032307430709064}',
      amount: "0.000100323074307090640000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-11T13:55:08.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 275,
      email: "ugojivincentuk@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"NGN","to_username":"cyntax","from_username":"Vincent_LivingLarge1"}',
      amount: "10.000000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-07T15:59:24.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 274,
      email: "samuelify225@gmail.com",
      to_email: "ugojivincentuk@gmail.com",
      meta: '{"symbol":"NGN","to_username":"Vincent_LivingLarge1","from_username":"cyntax"}',
      amount: "50.000000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-07T15:53:47.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 221,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"NGN","txh":"b926298c11a342cbb5cd0ca6e9aedea3","confirmation":"3/3","network":"Watu","wallet_address":"n/a"}',
      amount: "100.000000000000000000000000000000",
      type: "DEPOSIT",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-07T09:27:18.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 365,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"EGC","tokenOut":"NGN","amountIn":0.001,"price":130954.36633663367,"amountOut":130.95436633663368}',
      amount: "130.954366336633680000000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-31T15:05:46.000Z",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/15368.png",
      current_price: "13.090000000000000000000000000000",
    },
    {
      id: 104,
      email: "hitechsuite@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"NGN","to_username":"cyntax","from_username":"wrapsticks"}',
      amount: "10.000000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-06T06:04:05.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 103,
      email: "egorasmarket@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"NGN","to_username":"cyntax","from_username":"harry"}',
      amount: "1000.000000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-06T05:29:39.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 102,
      email: "samuelify225@gmail.com",
      to_email: "egorasmarket@gmail.com",
      meta: '{"symbol":"NGN","to_username":"harry","from_username":"cyntax"}',
      amount: "5.000000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-06T05:24:30.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 86,
      email: "fortapphq@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"NGN","to_username":"cyntax","from_username":"Fortapp"}',
      amount: "70.000000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-05T19:54:25.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 80,
      email: "hitechsuite@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"NGN","to_username":"cyntax","from_username":"wrapsticks"}',
      amount: "10.000000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-05T11:14:13.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 79,
      email: "hitechsuite@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"NGN","to_username":"cyntax","from_username":"wrapsticks"}',
      amount: "10.000000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-05T11:12:42.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 78,
      email: "hitechsuite@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"NGN","to_username":"cyntax","from_username":"wrapsticks"}',
      amount: "10.000000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-05T11:09:42.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 75,
      email: "hitechsuite@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"NGN","to_username":"cyntax","from_username":"wrapsticks"}',
      amount: "20.000000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-05T10:35:06.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 62,
      email: "hitechsuite@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"NGN","to_username":"cyntax","from_username":"wrapsticks"}',
      amount: "10.000000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-03T19:39:35.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 397,
      email: "samuelify225@gmail.com",
      to_email: "fortapphq@gmail.com",
      meta: '{"symbol":"USD","to_username":"Fortapp","from_username":"cyntax"}',
      amount: "0.100000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-03T13:13:39.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 432,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"USD","amountIn":5092.666215498436,"price":0.0008439059603130502,"amountOut":4.2977313731440345}',
      amount: "4.297731373144034500000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-07T17:05:08.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 431,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"USD","tokenOut":"NGN","amountIn":0.7182218879781324,"price":0.0008424184501749272,"amountOut":852.5714124957667}',
      amount: "852.571412495766700000000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-07T17:02:26.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 419,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"EGC","tokenOut":"NGN","amountIn":0.03240705601606533,"price":131216.18811881187,"amountOut":4252.330358580903}',
      amount: "4252.330358580903000000000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-04T13:13:59.000Z",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/15368.png",
      current_price: "13.090000000000000000000000000000",
    },
    {
      id: 406,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"amount":"0.500000000000000000000000000000","symbol":"USD"}',
      amount: "0.500000000000000000000000000000",
      type: "SUBSCRIPTION",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-03T14:04:56.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 404,
      email: "harry@egoras.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"USD","to_username":"cyntax","from_username":"harry66"}',
      amount: "1.000000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-03T14:02:23.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 402,
      email: "harry@egoras.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"USD","to_username":"cyntax","from_username":"harry66"}',
      amount: "0.200000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-03T13:54:50.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 401,
      email: "samuelify225@gmail.com",
      to_email: "fortapphq@gmail.com",
      meta: '{"symbol":"USD","to_username":"Fortapp","from_username":"cyntax"}',
      amount: "0.010000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-03T13:24:11.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 400,
      email: "samuelify225@gmail.com",
      to_email: "fortapphq@gmail.com",
      meta: '{"symbol":"USD","to_username":"Fortapp","from_username":"cyntax"}',
      amount: "0.010000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-03T13:19:52.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 399,
      email: "samuelify225@gmail.com",
      to_email: "fortapphq@gmail.com",
      meta: '{"symbol":"USD","to_username":"Fortapp","from_username":"cyntax"}',
      amount: "0.010000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-03T13:18:35.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 398,
      email: "samuelify225@gmail.com",
      to_email: "fortapphq@gmail.com",
      meta: '{"symbol":"USD","to_username":"Fortapp","from_username":"cyntax"}',
      amount: "0.100000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-03T13:16:24.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 61,
      email: "hitechsuite@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"symbol":"NGN","to_username":"cyntax","from_username":"wrapsticks"}',
      amount: "10.000000000000000000000000000000",
      type: "INTERNAL",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-03T18:25:23.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 396,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"USD","amountIn":285,"price":0.0008735747170568986,"amountOut":0.24896879436121608}',
      amount: "0.248968794361216080000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-03T12:53:37.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 381,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"USD","tokenOut":"EGC","amountIn":2.3e-17,"price":117,"amountOut":1.965811965811966e-19}',
      amount: "0.000000000000000000196581196581",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-03T09:44:37.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 379,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"USD","tokenOut":"EGC","amountIn":0.3771271468094474,"price":11.7,"amountOut":0.03223308947089294}',
      amount: "0.032233089470892940000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-03T09:33:44.000Z",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      current_price: "1.000000000000000000000000000000",
    },
    {
      id: 378,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"USD","amountIn":285.5214354975094,"price":0.0008860074676505282,"amountOut":0.25297412402509195}',
      amount: "0.252974124025091950000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-03T09:33:12.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 377,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"EGC","tokenOut":"USD","amountIn":0.0008119974407552132,"price":11.7,"amountOut":0.009500370056835994}',
      amount: "0.009500370056835994000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-03T09:32:30.000Z",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/15368.png",
      current_price: "13.090000000000000000000000000000",
    },
    {
      id: 371,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"USD","amountIn":10,"price":0.0008879259824900996,"amountOut":0.008879259824900995}',
      amount: "0.008879259824900995000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-01T23:23:10.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 370,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"USD","amountIn":10,"price":0.0008879338666856093,"amountOut":0.008879338666856093}',
      amount: "0.008879338666856093000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-01T22:51:30.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 369,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"USD","amountIn":10,"price":0.000887941751021133,"amountOut":0.00887941751021133}',
      amount: "0.008879417510211330000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-11-01T22:37:55.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
    {
      id: 366,
      email: "samuelify225@gmail.com",
      to_email: "samuelify225@gmail.com",
      meta: '{"tokenIn":"NGN","tokenOut":"USD","amountIn":100,"price":0.0008880206020779682,"amountOut":0.08880206020779682}',
      amount: "0.088802060207796820000000000000",
      type: "SWAP",
      status: "SUCCESS",
      approved_by: "N/A",
      origin: "DEFAULT",
      createdAt: "2024-04-11T01:46:57.000Z",
      updatedAt: "2023-10-31T15:06:42.000Z",
      image: "https://i.imgur.com/JXm7zwC.png",
      current_price: "755.000000000000000000000000000000",
    },
  ];

  return (
    <div className="dashboard_home_page_div">
      {isDashLoading ? (
        <div>...</div>
      ) : isDashError ? (
        <div> {dashError} </div>
      ) : (
        <div className="dashboard_home_page_div_1">
          <div className="dashboard_home_page_div_1_title">User Overview</div>
          <div className="dashboard_home_page_div_1_body">
            <div className="dashboard_home_page_div_1_cont1">
              <div className="dashboard_home_page_div_1_cont1_div1">
                <div className="dashboard_home_page_div_1_cont1_div1_title">
                  Products bought
                </div>
                <div className="dashboard_home_page_div_1_cont1_div1_content">
                  {dashData.products_bought}
                  <span className="dashboard_home_page_div_1_cont1_div1_content_span">
                    products
                  </span>
                </div>
              </div>
              {/* <div className="dashboard_home_page_div_1_cont1_icon"> */}
              <ShoppingBasket01Icon
                size={28}
                className="dashboard_home_page_div_1_cont1_icon"
              />
              {/* </div> */}
            </div>

            <div className="dashboard_home_page_div_1_cont1">
              <div className="dashboard_home_page_div_1_cont1_div1">
                <div className="dashboard_home_page_div_1_cont1_div1_title">
                  Amount Earned
                </div>
                <div className="dashboard_home_page_div_1_cont1_div1_content">
                  {dashData.amount_earned}
                  <span className="dashboard_home_page_div_1_cont1_div1_content_span">
                    egax
                  </span>
                </div>
              </div>
              {/* <div className="dashboard_home_page_div_1_cont1_icon"> */}
              <StakeIcon
                size={28}
                className="dashboard_home_page_div_1_cont1_icon"
              />
              {/* </div> */}
            </div>
            <div className="dashboard_home_page_div_1_cont1">
              <div className="dashboard_home_page_div_1_cont1_div1">
                <div className="dashboard_home_page_div_1_cont1_div1_title">
                  Total Referrals
                </div>
                <div className="dashboard_home_page_div_1_cont1_div1_content">
                  {referralCount}
                  <span className="dashboard_home_page_div_1_cont1_div1_content_span">
                    ref(s)
                  </span>
                </div>
              </div>
              {/* <div className="dashboard_home_page_div_1_cont1_icon"> */}
              <UserGroupIcon
                size={28}
                className="dashboard_home_page_div_1_cont1_icon"
              />
              {/* </div> */}
            </div>
            <div className="dashboard_home_page_div_1_cont1">
              <div className="dashboard_home_page_div_1_cont1_div1">
                <div className="dashboard_home_page_div_1_cont1_div1_title">
                  Total Referrals
                </div>
                <div className="dashboard_home_page_div_1_cont1_div1_content">
                  {referralCount}
                  <span className="dashboard_home_page_div_1_cont1_div1_content_span">
                    ref(s)
                  </span>
                </div>
              </div>
              {/* <div className="dashboard_home_page_div_1_cont1_icon"> */}
              <UserGroupIcon
                size={28}
                className="dashboard_home_page_div_1_cont1_icon"
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      )}
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      <div className="dashboard_home_page_div_3">
        <div className="dashboard_home_page_div_3_cont1">
          <div className="dashboard_home_page_div_3_cont1_title">
            Earnings Overview
          </div>
          <div className="dashboard_home_page_div_3_cont1_body">
            <div
              className="analytics_container_1_Amount"
              onChange={CustomTooltip2}
            >
              ${formatNumber(ChartValue2)}
            </div>
            <span className="analytics_container_1_Amount_span">
              {ChartTime2}
            </span>
            <div className="analytics_container_1_chart">
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
                    <XAxis dataKey="month" stroke="0" color="#fff" />
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
              {/* ===== */}
              {/* ===== */}
              {/* ===== */}
            </div>
          </div>
        </div>
        <div className="dashboard_home_page_div_3_cont2">
          <div className="dashboard_home_page_div_3_cont2_title">
            Trending Products
          </div>
          <div className="dashboard_home_page_div_3_cont2_body">
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
      </div>
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      <div className="dashboard_home_page_div_2">
        <div className="dashboard_home_page_div_2_body">
          <Table
            tableTitle={"Transactions"}
            TableData={tableData.slice(0, 7)}
            dummyData={Staticdata.productsTableData.slice(0, 8)}
            contentLoading={false}
            userName={"cyntax"}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
