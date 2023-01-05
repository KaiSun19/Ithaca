import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Welcome from '../components/Home/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Change Ithaca</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap" rel="stylesheet" />
      </Head>
    <Welcome />
    </>
  )
}
