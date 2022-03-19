import { Group } from "@mantine/core";
import TimeAndVenue from "../components/Home/TimeAndVenue";
import HeroSection from "../components/Home/HeroSection";
import Gallery from "../components/Home/Gallery";
import Navbar from "../components/common/Navbar";
import Head from "next/head";
export default function Home() {
  return (
    <Group direction="column" align="center" sx={{ width: "100%" }} p="md" grow>
      <Head>
        <title> marriage site</title>
        <meta property="og:title" content=" marriage site" key="title" />
        <meta name="keywords" content="Marraige" />
        <meta
          property="og:url"
          content="https://medical-blog-ten.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content="Welcome to marraige site" />
        <meta
          property="og:image"
          content={
            "https://i.pinimg.com/564x/f2/44/6d/f2446d9be14c3aafb7fa7e211e570968.jpg"
          }
        />
      </Head>
      <Navbar />
      <HeroSection />
      <TimeAndVenue />
      <Gallery />
    </Group>
  );
}
