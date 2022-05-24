/* eslint-disable react/no-unescaped-entities */
import BaseLayout from "../components/layouts/BaseLayout";
import SectionAbout from "../components/SectionAbout";
import SectionExperience from "../components/SectionExperience";
import SectionIntroduce from "../components/SectionIntroduce";
import SectionSkill from "../components/SectionSkill";

export default function Home() {
  return (
    <BaseLayout>
      <SectionIntroduce />
      <SectionAbout />
      <SectionSkill />
      <SectionExperience />
    </BaseLayout>
  );
}
