import React from 'react';
import profile from '../../public/images/profile.jpg'

const Intro = () => {
  return (
    <div className='intro row'>
      <div className='intro-desc col-md-8'>
        <p>Jin Ha</p>
        <p>I am a Full Stack Web Developer</p>
        <p>B.Com grad turned web developer. 
          Passionate about designing web applications that seamlessly merge functionality and efficiency with an intuitive user experience. 
          I derive great satisfaction from learning new web technologies to build better, more efficient solutions. When I am not coding, you will find me reading, listening to music or solving puzzles.</p>
        <p>My lifetime goal is using technology to connect people and help them communicate with each other.</p>
      </div>
      <div className='intro-profile col-md-4'>
        <img className='profile' src={profile}/>
      </div>
    </div>
  )
}

export default Intro;