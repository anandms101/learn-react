// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Gallery from './qcomps/state'
import Form from './qcomps/stuckForm'
import RequestTracker from './qcomps/shoppingCart'
import Scoreboard from './qcomps/updObjectsForm'
import List from './qcomps/artistsRemoveArr'
import BucketList from './qcomps/arrObj'

export default function Home() {
  return (
    <>
      <Gallery />
      <Form />
      <RequestTracker />
      <Scoreboard />
      <List />
      <BucketList />
    </>
  )
}
