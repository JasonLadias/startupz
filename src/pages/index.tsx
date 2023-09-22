import LandingPage from "@/components/LandingPage";
import Layout from "@/components/Layout";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
};

export default HomePage;
