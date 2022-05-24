/* eslint-disable react/no-unescaped-entities */
import BaseLayout from "../components/layouts/BaseLayout";
import SectionAbout from "../components/SectionAbout";
import SectionIntroduce from "../components/SectionIntroduce";

export default function Home() {
  return (
    <BaseLayout>
      <SectionIntroduce />
      <SectionAbout />
    </BaseLayout>
  );
}
