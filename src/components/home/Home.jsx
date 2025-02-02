import'./home.css'
import me from '../../assets/me.png'
import cv from '../../assets/cv.pdf'
import Homesocials from './Homesocials'


function Home() {
  return (
    <div>
      <div className="container home-container">
        <h4>Hello I&#39;m</h4>
        <h1>Ahmad Adham Shrara🔥</h1>
        <h4 className="text-light">Frontend Developer</h4>

        <div className="btns">
          <a href={cv} className="btn" download>Download Cv</a>
          <a href="#projects" className="btn btn-primary">let &#39;s talk</a>
        </div>
        <div className="me">
          <img src={me} alt="" />
        </div>
        <a href="#about" className="scroll_down">scroll down --&gt;</a>
        <Homesocials/>
      </div>
    </div>
  )
}

export default Home
