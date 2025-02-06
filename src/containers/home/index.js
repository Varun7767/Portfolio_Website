import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const Home =() => {

  const navigate = useNavigate();


  const handleContact = () => {
    navigate("/contact");
  }
  return (
    <>
    <section id='home' className='home'>
      <div className='home-text'>
        <h1 className='name-text'>
          Hello, I'm VARUN 
          <br />
          Front End Developer
        </h1>
        <div className="home-button">
        <button className='btn' onClick={handleContact}>Hire Me</button>
        </div>
      </div>

    </section>
    </>
  )
}
export default Home;