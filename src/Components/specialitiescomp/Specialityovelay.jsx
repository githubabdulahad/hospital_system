import BannerWithOverlay from "../subComponents/bannerwithoverlay";
import DrImage from "../../assets/images/Specialitiesimage/drimg1.png"; // Replace with your actual image path

const Specialityoverlay = () => {
  return (
    <div className="mt-10.5">
    <BannerWithOverlay
      imageSrc={DrImage}
      italicText="Welcome to Kings College Hospital London"
      title="Explore Our Specialties"
      breadcrumb="Home >> Specialties"
      buttonText="Appointment"
      buttonLink="/appointment" // Or your specific appointment link
      bgColor=""
      imageOverlayColor="bg-[#ACD9E8] opacity-50" // You can change this color if needed
    />
    </div>
  );
};

export default Specialityoverlay;