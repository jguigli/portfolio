import { Link } from "react-router-dom";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiGithub, SiLinkedin } from 'react-icons/si';

export default function Footer()
{
  const techLogos = [
    { node: <SiGithub />, title: "Github", href: "https://github.com/jguigli" },
    { node: <SiLinkedin />, title: "Linkedin", href: "https://www.linkedin.com/in/joël-guigli-b969a5144/" },
  ];


  return (
    <footer className="h-16 flex items-center justify-center text-white">
      <p className="text-sm text-gray-400">© 2025 Joël Guigli.</p>
    </footer>
  );
};