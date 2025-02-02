import'./about.css'
import me_about from'../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={me_about} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

            <div className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </div>

            <div className="about_card">
              <FiUsers className="about_icon"/>
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </div>

            <div className="about_card">
             <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </div>
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. illum recusandae praesentium, quibusdam ipse libero quae quisquam adipiscei saepe, inventore consectetur, odio ad deserunt porro. vitae necessitatibus eius sint iste repellendus?</p>

          <a href="#contact" className="btn btn_primary">Let&#39;s Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About
