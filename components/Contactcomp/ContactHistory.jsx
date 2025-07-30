const ContactHistory = () => {
  return (
    <div className="container mx-auto py-4 sm:py-12 md:py-16 px-2 sm:px-4 md:px-12 text-[#0B2443]" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-8 sm:mb-12 md:mb-16 text-center">Our History</h2>

      <div className="relative flex flex-col md:flex-row md:justify-around md:items-end pb-8 sm:pb-12 md:pb-20 gap-8 md:gap-0">
        {/* Timeline Item 1 */}
        <div className="flex flex-col items-center text-center max-w-xs mx-auto md:mx-4 relative z-10 mb-8 md:mb-0">
          <div className="relative mb-3 sm:mb-6">
            <img src="/images/contactimg/contacthistory1.png" alt="1980 Medical School" className="w-full max-w-[148px] sm:max-w-[160px] md:max-w-[200px] h-auto border border-gray-200 shadow-md" />
            <img src="/images/contactimg/contacthistory5.png" alt="" className='w-[164px] sm:w-[140px] md:w-[248px] -ml-2 md:-ml-6 -mt-2 sm:-mt-3'/>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4 sm:mt-6 md:mt-10 w-full sm:w-[240px] text-center md:text-left">1980</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2 w-full sm:w-[240px] text-left">
            In 1983, the Medical School was reunited with King's College
            London to form the King's College School of Medicine and Dentistry.
          </p>
        </div>

        {/* Timeline Item 2 */}
        <div className="flex flex-col items-center text-center max-w-xs mx-auto md:mx-4 relative z-10 mb-8 md:mb-0">
          <div className="relative mb-3 sm:mb-6">
            <img src="/images/contactimg/contacthistory2.png" alt="1990 Medical School" className="w-full max-w-[148px] sm:max-w-[160px] md:max-w-[200px] h-auto border border-gray-200 shadow-md" />
            <img src="/images/contactimg/contacthistory5.png" alt="" className='w-[164px] sm:w-[140px] md:w-[248px] -ml-2 sm:-ml-2 md:-ml-6 -mt-2 sm:-mt-3'/>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4 sm:mt-6 md:mt-10 w-full sm:w-[240px] text-center md:text-left">1990</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2 w-full sm:w-[240px] text-left">
            In 1983, the Medical School was reunited with King's College
            London to form the King's College School of Medicine and Dentistry.
          </p>
        </div>

        {/* Timeline Item 3 */}
        <div className="flex flex-col items-center text-center max-w-xs mx-auto md:mx-4 relative z-10 mb-8 md:mb-0">
          <div className="relative mb-3 sm:mb-6">
            <img src="/images/contactimg/contacthistory3.png" alt="2000 Medical School" className="w-full max-w-[148px] sm:max-w-[160px] md:max-w-[200px] h-auto border border-gray-200 shadow-md" />
            <img src="/images/contactimg/contacthistory5.png" alt="" className='w-[164px] sm:w-[140px] md:w-[248px] -ml-2 sm:-ml-2 md:-ml-6 -mt-2 sm:-mt-3'/>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4 sm:mt-6 md:mt-10 w-full sm:w-[240px] text-center md:text-left">2000</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2 w-full sm:w-[240px] text-left">
            In 1983, the Medical School was reunited with King's College
            London to form the King's College School of Medicine and Dentistry.
          </p>
        </div>

        {/* Timeline Item 4 */}
        <div className="flex flex-col items-center text-center max-w-xs mx-auto md:mx-4 relative z-10 mb-8 md:mb-0">
          <div className="relative mb-3 sm:mb-6">
            <img src="/images/contactimg/contacthistory1.png" alt="2001 Medical School" className="w-full max-w-[148px] sm:max-w-[160px] md:max-w-[200px] h-auto border border-gray-200 shadow-md" />
            <img src="/images/contactimg/contacthistory5.png" alt="" className='w-[164px] sm:w-[140px] md:w-[248px] -ml-2 sm:-ml-2 md:-ml-6 -mt-2 sm:-mt-3'/>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4 sm:mt-6 md:mt-10 w-full sm:w-[240px] text-center md:text-left">2001</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2 w-full sm:w-[240px] text-left">
            In 1983, the Medical School was reunited with King's College
            London to form the King's College School of Medicine and Dentistry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactHistory;