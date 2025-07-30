"use client";
import BannerWithOverlay from "../subComponents/bannerwithoverlay";

const Abouttop = () => {
  return (
    <div className="pb-4 sm:pb-12">
      <BannerWithOverlay
        imageSrc="/images/Aboutpg.png"
        italicText="Welcome to Kings College Hospital London"
        title="About Us"
        breadcrumb="Home >> About"
      buttonText="Appointment"
    />
    </div>
  );
};

export default Abouttop;