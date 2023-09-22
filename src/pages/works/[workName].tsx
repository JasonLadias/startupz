import Layout from "@/components/Layout";
import { WorkObject, ourWorks } from "@/services/constants";
import { NextPage } from "next";
import { GetServerSidePropsContext } from 'next';



type WorkPageProps = {
  name: string;
};

const WorkPage: NextPage<WorkPageProps> = ({ name }) => {

  return (
    <Layout>
    <div className="container">
      <h1>WorkPage about {name}</h1>
    </div>

    </Layout>
  );
}

export const getServerSideProps = ({ params }: GetServerSidePropsContext) => {
  const workName = params?.workName;

  console.log(workName)

  if (typeof params?.workName !== "string" || !workName) {
    return {
      notFound: true,
    };
  }

  const workObj = ourWorks.find(work => work.url === `/works/${workName}`);

  console.log(workObj)

  if (!workObj) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      name: workObj.title,
    },
  };
};

export default WorkPage;