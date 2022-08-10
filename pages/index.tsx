import Footer from "@components/Footer";
import Roadmap from "@components/Roadmap";
import Story from "@components/Story";
import Team from "@components/Team";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Title from "@components/Title";

const Home: NextPage = () => {
  return (
    <>
      <Title />
      <Story />
      <Roadmap />
      <Team />
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
