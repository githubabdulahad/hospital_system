import Link from "next/link";
import Commonbtn from "./Commonbtn";

const BannerWithOverlay = ({ 
  imageSrc,
  italicText,
  title,
  breadcrumb,
  buttonText,
  buttonLink = "/appointment",
  bgColor = "bg-[#d6eae4]",
  imageOverlayColor = "",
  italicTextColor = "text-[#0B2443]",
  titleColor = "text-[#0d2847]",
  className = ""
}) => {
  return (
    <div className={`relative w-full overflow-hidden ${bgColor} mb-8 md:mb-14 mt-2 md:mt-4 ${className}`}>
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Mobile Image Container with Overlaid Text */}
        <div className="relative w-full h-full ">
          <img
            src={imageSrc}
            alt="Banner"
            className="w-full h-full object-scale-down"
          />
          {imageOverlayColor && (
            <div 
              className={`absolute inset-0 ${imageOverlayColor} mix-blend-multiply opacity-10`}
              aria-hidden="true"
            />
          )}
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          
          {/* Overlaid Content on Mobile */}
          <div className="absolute inset-0 flex flex-col justify-center place-items-start text-center px-5 z-10">
            {italicText && (
              <div
                className="text-[#0b2443] font-light italic text-sm"
                style={{ fontFamily: "'EB Garamond', Garamond, serif" }}
              >
                {italicText}
              </div>
            )}
            
            <h1
              className="text-[#0b2443] mb-2 font-bold leading-tight"
              style={{
                fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
              }}
            >
              {title}
            </h1>
            
            {buttonText && (
              <Link href={buttonLink}>
                <Commonbtn 
                  className="px-3 py-2 text-sm mt-1" 
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
      </div>

      {/* Desktop Layout - Original Design */}
      <div className="hidden md:block">
        <div className="w-full h-full relative">
          {/* Desktop Image with optional colored overlay */}
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

        {/* Desktop Overlayed content */}
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
            className={`${titleColor} text-3xl md:text-4xl font-bold leading-tight mb-6`}
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
            <Link href={buttonLink}>
              <Commonbtn 
                className="font-bold" 
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
    </div>
  );
};

export default BannerWithOverlay;