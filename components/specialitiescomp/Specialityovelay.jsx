import BannerWithOverlay from "../subComponents/bannerwithoverlay";

const Specialityoverlay = () => {
  return (
    <div className="mt-11">
    <BannerWithOverlay
      imageSrc="/images/Specialitiesimage/drimg1.png"
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