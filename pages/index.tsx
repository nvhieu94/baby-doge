import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import MainLayout from '@/components/layouts/main-layout/main-layout';

import {NextPageWithLayout} from '@/models/index';
// mui
import {Box} from '@mui/material'
//components
import Community from '@/components/community'
import Token from '@/components/token'
import styles from '@/styles/Home.module.scss'
const Home: NextPageWithLayout = () => {
  return (
    <Box className={styles.homepage}>
      <Community />
      <Token />
    </Box>
  )
}

Home.Layout = MainLayout
export default Home
