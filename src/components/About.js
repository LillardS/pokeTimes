import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
  return (
    <div className="container">
      <h4 className='center'>About</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!</p>
    </div>
  )
}

export default Rainbow(About)