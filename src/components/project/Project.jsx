import'./project.css'
import portfolio1 from'../../assets/portfolio1.jpg'
import portfolio2 from'../../assets/portfolio2.jpg' 
import portfolio3 from'../../assets/portfolio3.jpg'
import portfolio4 from'../../assets/portfolio4.jpg'
import portfolio5 from'../../assets/portfolio5.png'
import portfolio6 from'../../assets/portfolio6.jpg'

function Project() {
const portfolioData = [
  {
    id: 1,
    image: portfolio1,
    title:'Portfolio Item 1',
    githup:'https://githup.com/project1',
    demo:'https://demo1.com',
  },
  {
    id: 2,
    image: portfolio2,
    title:'Portfolio Item 2',
    githup:'https://githup.com/project2',
    demo:'https://demo2.com',
  },
  {
    id: 3,
    image: portfolio3,
    title:'Portfolio Item 3',
    githup:'https://githup.com/project3',
    demo:'https://demo3.com',
  },
  {
    id: 4,
    image: portfolio4,
    title:'Portfolio Item 4',
    githup:'https://githup.com/project4',
    demo:'https://demo4.com',
  },
  {
    id: 5,
    image: portfolio5,
    title:'Portfolio Item 5',
    githup:'https://githup.com/project5',
    demo:'https://demo5.com',
  },
  {
    id: 6,
    image: portfolio6,
    title:'Portfolio Item 6',
    githup:'https://githup.com/project6',
    demo:'https://demo6.com',
  },

]

  return (
    <section className="project" id='projects'>     
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="container projects_container">
        {portfolioData.map(({ id, title, image, githup, demo }) => (
         <article key={id} className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={image} alt="" />
         </div>
          <h3>{title} </h3>
         <div className="portfolio_item_btns">
            <a href={githup} target="_blank" className="btn">Git hup</a>
            <a href={demo} target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
         </article>
        ))}
      </div>
    </section>
  )
}

export default Project
