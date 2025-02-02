import { BiBookBookmark } from "react-icons/bi";
import { LuUserRound } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./nav.css";
import { useState, useEffect } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      let sections = document.querySelectorAll("section");
      let scrollY = window.scrollY;

      if (scrollY === 0) {
        setActiveNav("#");
        return;
      }

      sections.forEach((sec) => {
        let offset = sec.offsetTop - 250;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (scrollY >= offset && scrollY < offset + height) {
          setActiveNav(`#${id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <LuUserRound />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setActiveNav("#services")}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#projects"
        className={activeNav === "#projects" ? "active" : ""}
        onClick={() => setActiveNav("#projects")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
