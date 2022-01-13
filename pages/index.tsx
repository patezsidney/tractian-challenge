import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button, Heading, Text } from "@chakra-ui/react";
import { Header } from "../src/components/header";
import { Main } from "../src/components/main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TRACTIAN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
