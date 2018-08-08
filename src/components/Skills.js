import React from 'react';
import react from '../../public/images/react.png'
import redux from '../../public/images/redux.png'
import js from '../../public/images/js.png'
import html from '../../public/images/html.png'
import css from '../../public/images/css.png'

const Skills = () => {
  return (
    <div className="skills-container row">
      <div className='skill col-sm-6 col-md-4 col-lg-3'>
        <img src={react}/>
        <p>React</p>
      </div>
      <div className='skill col-sm-6 col-md-4 col-lg-3'>
        <img src={redux}/>
        <p>Redux</p>
      </div>
      <div className='skill col-sm-6 col-md-4 col-lg-3'>
        <img src={js}/>
        <p>Javascript</p>
      </div>
      <div className='skill col-sm-6 col-md-4 col-lg-3'>
        <img src={html}/>
        <p>HTML</p>
      </div>
      <div className='skill col-sm-6 col-md-4 col-lg-3'>
        <img src={css}/>
        <p>CSS</p>
      </div>
    </div>
  )
}

export default Skills;