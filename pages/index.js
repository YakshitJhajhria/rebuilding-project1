import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./components/common/Layout";
import Hero from "./components/landingpage/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
