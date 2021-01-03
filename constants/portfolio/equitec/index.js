import desktopSlide1 from "../../../images/projects/equitec/slides/desktop/1.jpg";
import backupImageUrl1 from "../../../images/projects/equitec/slides/backup/1.jpg";
import mobileSlide1 from "../../../images/projects/equitec/slides/mobile/1.jpg";
import desktopSlide2 from "../../../images/projects/equitec/slides/desktop/2.jpg";
import mobileSlide2 from "../../../images/projects/equitec/slides/mobile/2.jpg";
import desktopSlide3 from "../../../images/projects/equitec/slides/desktop/3.jpg";
import mobileSlide3 from "../../../images/projects/equitec/slides/mobile/3.jpg";

const equitecInfo = {
  title: "Equitec",
  subtitle: "Finance",
  description:
    "The application allow older homeowners to borrow money from the value (the equity) of their property that has built up over time." +
    " The final balance is eventually repaid by the sale of the property upon death, or long-term care of the last survivor.",
  slides: [
    {
      imageUrl: desktopSlide1,
      mobileImageUrl: mobileSlide1,
      backupImageUrl: backupImageUrl1
    },
    { imageUrl: desktopSlide2, mobileImageUrl: mobileSlide2 },
    { imageUrl: desktopSlide3, mobileImageUrl: mobileSlide3 }
  ],
  href: "https://equitec.demohoster.com/"
};

export default equitecInfo;
