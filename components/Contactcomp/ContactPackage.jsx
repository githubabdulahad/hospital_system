import PackageBanner from "../subComponents/Packagessubcomp";

const ContactPackage = () => {
  return (
    <div className="mt-36 mb-14 sm:mb-24">
    <PackageBanner
      imageSrc="/images/contactimg/iconcube.png"
      italicText="Latest"
      boldText="PACKAGES"
      description="At King's we offer comprehensive"
      highlightedText="packages and offers for numerous services"
      buttonText="View all packages"
      buttonLink=""
    />
    </div>
  );
}

export default ContactPackage
