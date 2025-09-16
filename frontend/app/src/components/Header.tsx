import { Link } from "react-router-dom";
import LogoLoop from "./react_bits/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiGithub, SiLinkedin } from 'react-icons/si';

export default function Header()
{
  const techLogos = [
    { node: <SiGithub />, title: "Github", href: "https://github.com/jguigli" },
    { node: <SiLinkedin />, title: "Linkedin", href: "https://www.linkedin.com/in/joël-guigli-b969a5144/" },
  ];


  return (
    <header className="w-full text-white">
      <div
          style={{
            position: 'fixed',
            top: 50,
            left: 0,
            width: '100%',
            overflow: 'hidden',
            zIndex: 10,
          }}
        >
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="left"
            logoHeight={70}
            gap={100}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000ff"
            ariaLabel="Technology partners"
          />
        </div>
    </header>
  );
};