import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import MainLayout from "@/components/layouts/main-layout/main-layout";

import { NextPageWithLayout } from "@/models/index";
// mui
import { Box, Container, Button } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
//components
import Community from "@/components/community";
import Token from "@/components/token";
import ExchangesComponent from "@/components/exchanges";
import AboutComponent from "@/components/about";
import BabyDogCardComponent from "@/components/baby-dog-card";
import RewardsSectionComponent from "@/components/rewards";
import BabyDogMediaSection from "@/components/baby-dog_media";
import PawBoardSectionComponent from '@/components/paw-board';
import FaqSctionComponent from '@/components/faq';
import JoinOurCommunitySection from '@/components/join-our-community';
import CryptoWithCause from '@/components/crypto-with-cause';
import ContactUs from '@/components/contact-us'
//styles
import styles from "@/styles/Home.module.scss";
import SlickSlide from '@/components/slick-slide';

const asSeenInData = [
  {
    image: "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-nasdaq_300x100.png?v=1646404931",
    height: 30,
    width: 106,
    link: "https://www.nasdaq.com/articles/baby-doge-crypto%3A-5-things-to-know-about-babydoge-and-the-elon-musk-buzz-2021-07-01?amp",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-cnbc_300x100.png?v=1646404932",
    height: 45,
    width: 191,
    link: "https://www.cnbc.com/2021/07/13/what-are-altcoins-elon-musk-tweets-about-baby-dogecoin-shiba-inu.html",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-new-york-post_300x100.png?v=1646404932",
    height: 30,
    width: 200,
    link: "https://nypost.com/2021/07/02/what-you-need-to-know-about-baby-doge-the-dogecoin-spinoff/",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-business-insider_300x100.png?v=1646404932",
    height: 30,
    width: 75,
    link: "https://markets.businessinsider.com/news/stocks/a-dogecoin-spinoff-called-baby-doge-doubled-in-price-following-an-early-morning-tweet-from-elon-musk-1030572506",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-yahoo_300x100.png?v=1646404931",
    height: 30,
    width: 83,
    link: "https://finance.yahoo.com/news/elon-musk-thrusts-baby-doge-130512796.html",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-newsweek_300x100.png?v=1646404932",
    height: 30,
    width: 220,
    link: "https://www.newsweek.com/dogecoin-baby-doge-coin-price-spike-elon-mask-tweets-release-doge-1605912",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-benzinga_300x100.png?v=1646404931",
    height: 30,
    width: 220,
    link: "https://www.benzinga.com/markets/cryptocurrency/21/06/21628588/dogecoin-fans-launch-baby-doge-coin-with-average-daily-gain-of-1-213",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-market-watch_300x100.png?v=1646404931",
    link: "https://www.marketwatch.com/story/elon-musk-may-be-losing-his-sway-with-dogecoin-investorsbut-baby-doge-coin-is-soaring-11625160997",
    height: 30,
    width: 209,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-nasdaq_300x100.png?v=1646404931",
    link: "https://www.nasdaq.com/articles/baby-doge-crypto%3A-5-things-to-know-about-babydoge-and-the-elon-musk-buzz-2021-07-01?amp",
    height: 30,
    width: 191,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-cnbc_300x100.png?v=1646404932",
    link: "https://www.cnbc.com/2021/07/13/what-are-altcoins-elon-musk-tweets-about-baby-dogecoin-shiba-inu.html",
    height: 30,
    width: 142.68,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-new-york-post_300x100.png?v=1646404932",
    lnk: "https://nypost.com/2021/07/02/what-you-need-to-know-about-baby-doge-the-dogecoin-spinoff/",
    height: 45,
    width: 200,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-business-insider_300x100.png?v=1646404932",
    link: "https://markets.businessinsider.com/news/stocks/a-dogecoin-spinoff-called-baby-doge-doubled-in-price-following-an-early-morning-tweet-from-elon-musk-1030572506",
    height: 45,
    width: 75,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-yahoo_300x100.png?v=1646404931",
    link: "https://finance.yahoo.com/news/elon-musk-thrusts-baby-doge-130512796.html?guccounter=1",
    height: 45,
    width: 83,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-newsweek_300x100.png?v=1646404932",
    link: "https://www.newsweek.com/dogecoin-baby-doge-coin-price-spike-elon-mask-tweets-release-doge-1605912",
    height: 30,
    width: 220,
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-benzinga_300x100.png?v=1646404931",
    link: "https://www.benzinga.com/markets/cryptocurrency/21/06/21628588/dogecoin-fans-launch-baby-doge-coin-with-average-daily-gain-of-1-213",
    height: 30,
    width: 220,
  },

  {
    image:
      "	https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-market-watch_300x100.png?v=1646404931",
    link: "https://www.marketwatch.com/story/elon-musk-may-be-losing-his-sway-with-dogecoin-investorsbut-baby-doge-coin-is-soaring-11625160997",
    height: 30,
    width: 209,
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-nasdaq_300x100.png?v=1646404931",
    link: "https://www.nasdaq.com/articles/baby-doge-crypto%3A-5-things-to-know-about-babydoge-and-the-elon-musk-buzz-2021-07-01?amp",
    height: 30,
    width: 106,
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-cnbc_300x100.png?v=1646404932",
    link: "https://www.cnbc.com/2021/07/13/what-are-altcoins-elon-musk-tweets-about-baby-dogecoin-shiba-inu.html",
    height: 30,
    width: 106,
  },

  {
    image:
      "	https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-new-york-post_300x100.png?v=1646404932",
    link: "https://nypost.com/2021/07/02/what-you-need-to-know-about-baby-doge-the-dogecoin-spinoff/",
    height: 30,
    width: 200,
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-newsweek_300x100.png?v=1646404932",
    link: "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-newsweek_300x100.png?v=1646404932",
    height: 30,
    width: 220,
  },
];

const Home: NextPageWithLayout = () => {
  return (
    <Box className={styles.homepage}>
      <Community />
      <Token />
      <ExchangesComponent />
      <AboutComponent />
      <BabyDogCardComponent />
      <RewardsSectionComponent />
      <Box className={styles.out_document}>
        <Container>
          <Box className={styles.header}>OUR DOCUMENTS</Box>
          <Box className={styles.document_select_wrapper}>
            <Box px={2} className={styles.select_box}>
              <Select
                className={styles.select_address}
                displayEmpty
                value={1}
                input={<OutlinedInput sx={{ color: "#fff", width: "100%" }} />}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value={1}>
                  WOOF PAPER
                </MenuItem>
              </Select>
            </Box>

            <Button className={styles.btn_primary}>View</Button>
          </Box>
        </Container>
      </Box>
      <BabyDogMediaSection />
      <Box className={styles.as_seen_in}>
        <Box className={styles.title}>AS SEEN IN</Box>
        <Box sx={{marginTop:'30px'}} className="custom-slick-slide">
        <SlickSlide dataSource={asSeenInData} />
        </Box>
      </Box>
      <PawBoardSectionComponent />
      <FaqSctionComponent />
      <JoinOurCommunitySection />
      <CryptoWithCause />
      <ContactUs />
    </Box>
  );
};

Home.Layout = MainLayout;
export default Home;
