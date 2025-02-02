import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";

function Homesocials() {
  return (
    <div>
        <div className="home-socials">
            <a href="https://www.linkedin.com/in/ahmed-adham-479334331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedin /></a>
            <a href="https://github.com/ahmed26-coder" target='_blank'><FaGithub /></a>
            <a href="#" target='_blank'><FaDribbble /></a>
        </div>
    </div>
  )
}

export default Homesocials
