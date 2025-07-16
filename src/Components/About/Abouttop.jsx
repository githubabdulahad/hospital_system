import BannerWithOverlay from "../subComponents/bannerwithoverlay";
import image from "../../assets/images/Aboutpg.png";

const Abouttop = () => {
  return (
    <BannerWithOverlay
      imageSrc={image}
      italicText="Welcome to Kings College Hospital London"
      title="About Us"
      breadcrumb="Home >> About"
      buttonText="Appointment"
    />
  );
};

export default Abouttop;