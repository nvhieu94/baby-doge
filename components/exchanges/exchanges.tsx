import React from "react";
import { Box } from "@mui/material";
import styles from "@/styles/Home.module.scss";
import SlickSlide from "../slick-slide";
import bittrue from "@/assets/images/bittrue.png";
import huobi from "@/assets/images/huobi.png";
import okex from "@/assets/images/okex.png";
import PanacakeSwappng from "@/assets/images/PanacakeSwappng.png";
import bitmart from "@/assets/images/bitmart.png";
import ztglobal from "@/assets/images/zt-global.png";
import { height } from "@mui/system";
// import ztglobal from '@/assets/images/zt-global.png';
const dataSlide = [
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/xt_logo_300x100.png?v=1627046585 ',
      link:'https://www.xt.com/trade/babydoge_usdt',
      width:143,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/pancakewsap_logo_300x100.png?v=1627046232"',
      link:'',
      width:82,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/bsc_logo_300x100.png?v=1624037011',
      link:'',
      width:117,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/cmc_logo_300x100.png?v=1624036847',
      link:'',
      width:173,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/lbank-1_300x100.png?v=1623937685',
      link:'',
      width:95,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hotbit_300x100.png?v=1623937685',
      link:'',
      width:95,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/digifinex_logo_300x100.png?v=1632504712',
      link:'https://www.digifinex.com/en-ww/trade/USDT/BABYDOGE',
      width:164,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/bitrue_logo_300x100.png?v=1632504671',
      link:'https://www.bitrue.com/trade/babydoge_usdt',
      width:99,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-bitforex_300x100.png?v=1646835628',
      link:'https://www.bitforex.com/en/spot/babydoge_usdt',
      width:176,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/Huobi_logo_d1202d2a-d5d4-4238-8d6d-f29aa3702a8f_300x100.png?v=1652462271',
      link:'https://www.huobi.com/en-us/exchange/babydoge_usdt',
      width:118,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/okex_logo_300x100.png?v=1628770471',
      link:'https://www.okx.com/trade-spot/babydoge-usdt',
      width:84,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/logo4.fcb2042_300x100.png?v=1638538191',
      link:'https://www.bitmart.com/trade/en?symbol=BABYDOGE_USDT&amp;layout=basic',
      width:123,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/ZT_Global_300x100.png?v=1638537317',
      link:'https://www.ztb.im/exchange?coin=BABYDOGE_USDT',
      width:138,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/GateIo_300x100.png?v=1638537303',
      link:'https://www.gate.io/trade/BABYDOGE_USDT',
      width:85,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/xt_logo_300x100.png?v=1627046585',
      link:'https://www.xt.com/trade/babydoge_usdt',
      width:143,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/pancakewsap_logo_300x100.png?v=1627046232',
      link:'',
      width:82,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/bsc_logo_300x100.png?v=1624037011',
      link:'',
      width:173,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/cmc_logo_300x100.png?v=1624036847',
      link:'',
      width:95,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/lbank-1_300x100.png?v=1623937685',
      link:'',
      width:95,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hotbit_300x100.png?v=1623937685',
      link:'',
      width:164,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/digifinex_logo_300x100.png?v=1632504712',
      link:'https://www.digifinex.com/en-ww/trade/USDT/BABYDOGE',
      width:176,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/bitrue_logo_300x100.png?v=1632504671',
      link:'https://www.bitrue.com/trade/babydoge_usdt',
      width:118,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-bitforex_300x100.png?v=1646835628',
      link:'https://www.bitforex.com/en/spot/babydoge_usdt',
      width:84,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/Huobi_logo_d1202d2a-d5d4-4238-8d6d-f29aa3702a8f_300x100.png?v=1652462271',
      link:'https://www.huobi.com/en-us/exchange/babydoge_usdt',
      width:123,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/okex_logo_300x100.png?v=1628770471',
      link:'https://www.okx.com/trade-spot/babydoge-usdt',
      width:138,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/logo4.fcb2042_300x100.png?v=1638538191',
      link:'https://www.bitmart.com/trade/en?symbol=BABYDOGE_USDT&amp;layout=basic',
      width:85,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/ZT_Global_300x100.png?v=1638537317',
      link:'https://www.ztb.im/exchange?coin=BABYDOGE_USDT',
      width:143,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/GateIo_300x100.png?v=1638537303',
      link:'https://www.gate.io/trade/BABYDOGE_USDT',
      width:82,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/xt_logo_300x100.png?v=1627046585',
      link:'https://www.xt.com/trade/babydoge_usdt',
      width:117,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/pancakewsap_logo_300x100.png?v=1627046232',
      link:'',
      width:173,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/bsc_logo_300x100.png?v=1624037011',
      link:'',
      width:95,
      height:30
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/cmc_logo_300x100.png?v=1624036847',
      link:'',
      width:95,
      height:30
    },
];

const ExchangesComponent = () => {
  return (
    <Box className={styles.exchanges}>
      <Box className={styles.exchanges_title}>EXCHANGES</Box>
      <Box className={styles.exchanges_subtitle}>FRIENDS OF LUCKYFLOKI</Box>
      <Box className={styles.exchanges_slide}>
        <Box className="custom-slick-slide">
          <SlickSlide dataSource={dataSlide} />
        </Box>
      </Box>
    </Box>
  );
};

export default ExchangesComponent;
