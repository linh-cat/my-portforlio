/* eslint-disable react/no-unescaped-entities */
import BaseLayout from "../components/layouts/BaseLayout";
import Basepage from "../components/layouts/Basepage";
import SectionAbout from "../components/SectionAbout";
import SectionExperience from "../components/SectionExperience";
import SectionIntroduce from "../components/SectionIntroduce";
import SectionPortforlio from "../components/SectionPortforlio";
import SectionSkill from "../components/SectionSkill";

export default function Home() {
  return (
    <Basepage
      title="Home page"
      description=" I am a Front-End developer with more than 2+ year of experience. I like to explore new technologies and develop software solutions and quick hacks."
    >
      <BaseLayout>
        <SectionIntroduce />
        <SectionAbout />
        <SectionSkill />
        <SectionExperience />
        <SectionPortforlio />
      </BaseLayout>
    </Basepage>
  );
}
