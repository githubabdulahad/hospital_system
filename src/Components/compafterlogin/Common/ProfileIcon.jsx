// SVG profile icon (same as admin sidebar)
const ProfileIcon = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#C0E6DA" viewBox="0 0 48 48" className={className}>
    <circle cx="24" cy="16" r="10" fill="#C0E6DA" />
    <ellipse cx="24" cy="36" rx="16" ry="10" fill="#C0E6DA" opacity="0.7" />
    <circle cx="24" cy="16" r="8" fill="#0B2443" />
    <ellipse cx="24" cy="36" rx="13" ry="8" fill="#0B2443" />
  </svg>
);

export default ProfileIcon;
