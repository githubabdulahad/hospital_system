// A reusable Add button for admin sub-pages
const CommonAddButton = ({ label, onClick }) => (
  <button
  style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}
    className="bg-[#C0E6DA] hover:bg-[#13b188] text-[#0B2443] font-semibold px-5 py-2 rounded flex items-center gap-2 transition"
    onClick={onClick}
  >
    <span className="text-xl">+</span> {label}
  </button>
);

export default CommonAddButton;
