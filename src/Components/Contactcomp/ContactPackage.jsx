import PackageBanner from "../subComponents/Packagessubcomp";
import icon from "../../assets/images/contactimg/iconcube.png"

const ContactPackage = () => {
  return (
    <div className="mt-36 mb-24">
    <PackageBanner
      imageSrc={icon}
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
