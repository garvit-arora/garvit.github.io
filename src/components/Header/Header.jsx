import PillNav from "../PillNav.jsx";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-center">
      <PillNav
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "#projects" },
          { 
            label: "Resume",
            href: "https://www.dropbox.com/scl/fi/2k07gu85gsnf38aswet15/Resume.pdf?rlkey=fg1ln1wssdzu3nt4v6lc1j296&st=zf2ufnhw&dl=0", 
          },
          { label: "Contact", href: "#contact" },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </div>
  );
}
