import BannerWithOverlay from "../../Components/subComponents/bannerwithoverlay";
import appointmentImage from "../../assets/images/Appointmentimages/image1.png"; // Replace with your actual image path

const Appointmentoverlay = () => {
  return (
    <div className="mt-10.5">
    <BannerWithOverlay
      imageSrc={appointmentImage}
      italicText="Welcome to Kings College Hospital London"
      title="Book an Appointment"
      breadcrumb="Home >> Appointments"
      buttonText="See our Doctors"
      buttonLink="/doctors" // Or your specific appointment link
      bgColor=""
      imageOverlayColor="bg-[#ACD9E8] opacity-50" // You can change this color if needed
    />
    </div>
  );
};

export default Appointmentoverlay;