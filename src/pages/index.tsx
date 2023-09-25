import LandingPage from "@/components/LandingPage";
import Layout from "@/components/Layout";
import VirtualInstructor from "@/components/VirtualInstructor";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <LandingPage />
      <VirtualInstructor />
    </Layout>
  );
};

export default HomePage;
