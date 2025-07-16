import { Link } from "react-router-dom";
import Commonbtn from "./Commonbtn";

const BannerWithOverlay = ({ 
  imageSrc,
  italicText,
  title,
  breadcrumb,
  buttonText,
  buttonLink = "/appointment",
  bgColor = "bg-[#d6eae4]",
  imageOverlayColor = "", // New prop for image overlay color
  italicTextColor = "text-[#0B2443]",
  titleColor = "text-[#0d2847]",
  className = ""
}) => {
  return (
    <div className={`relative w-full h-full overflow-hidden ${bgColor} mb-14 mt-4 ${className}`}>
      <div className="w-full h-full relative">
        {/* Image with optional colored overlay */}
        <div className="relative w-full h-full">
          <img
            src={imageSrc}
            alt="Banner"
            className="w-full h-[100%] object-contain"
          />
          {imageOverlayColor && (
            <div 
              className={`absolute inset-0 ${imageOverlayColor} mix-blend-multiply opacity-5`}
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      {/* Overlayed content */}
      <div className="absolute -top-10 left-12 h-full flex flex-col justify-center pl-16 z-10 gap-2">
        {italicText && (
          <div
            className={`${italicTextColor} text-lg mb-2 font-light italic pt-14`}
            style={{ fontFamily: "'EB Garamond', Garamond, serif" }}
          >
            {italicText}
          </div>
        )}
        
        <div
          className={`${titleColor} text-3xl md:text-4xl font-bold leading-tight mb-6 sm:text-xl sm:font-semibold`}
          style={{
            fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
          }}
        >
          {title}
          {breadcrumb && (
            <p className="font-normal text-xl">{breadcrumb}</p>
          )}
        </div>
        
        {buttonText && (
          <Link to={buttonLink}>
            <Commonbtn 
              className="font-bold  " 
              style={{
                fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
              }}
            >
              {buttonText}
            </Commonbtn>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BannerWithOverlay;