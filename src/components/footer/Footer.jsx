import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import'./footer.css'
function Footer() {
  return (
    <footer className="footer">
      <a href="" className="footer_logo">Ahmad Adham</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.instagram.com/ahmad_.shrara/profilecard/?igsh=Ym55YXl2eWN6em1x" target='_blank'><FaSquareInstagram /></a>
        <a href="https://www.facebook.com/profile.php?id=100089991578793&mibextid=ZbWKwL" target='_blank'><FaFacebookSquare /></a>
        <a href="https://t.me/+201016626452" target='_blank'><FaTelegramPlane /></a>
      </div>
      <div className="footer_copyrighty">
        <small>&copy; <a href="#">Ahmad Adham</a>All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
