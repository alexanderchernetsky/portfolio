import storytrackCard from "../../images/projects/storytrek/main.png";
import storytrackCardBlured from "../../images/projects/storytrek/main_blured.jpg";
import equitecitCard from "../../images/projects/equitec-it/main.png";
import equitecitCardBlured from "../../images/projects/equitec-it/main_blured.jpg";
import ergCard from "../../images/projects/erg/main.png";
import ergCardBlured from "../../images/projects/erg/main_blured.jpg";
import equitecCard from "../../images/projects/equitec/main.png";
import equitecCardBlured from "../../images/projects/equitec/main_blured.jpg";
import totepoolCard from "../../images/projects/totepool/main.png";
import totepoolCardBlured from "../../images/projects/totepool/main_blured.jpg";

const projects = [
  {
    title: "Storytrek",
    slug: "storytrek",
    technologies: "React, MST, Ant Design, Jest",
    image: storytrackCard,
    lowQualityImage: storytrackCardBlured
  },
  {
    title: "Equitec-it",
    slug: "equitec-it",
    technologies: "Next, React, Styled Components",
    image: equitecitCard,
    lowQualityImage: equitecitCardBlured
  },
  {
    title: "Equity Release Group",
    slug: "erg",
    technologies: "Next, React, Styled Components",
    image: ergCard,
    lowQualityImage: ergCardBlured
  },
  {
    title: "Equitec",
    slug: "equitec",
    technologies: "React, MobX, Ant Design",
    image: equitecCard,
    lowQualityImage: equitecCardBlured
  },
  {
    title: "Totepool",
    slug: "totepool",
    technologies: "React, Typescript, Cypress, React Testing Library",
    image: totepoolCard,
    lowQualityImage: totepoolCardBlured
  }
];

export default projects;
