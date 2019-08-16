import React from 'react'
import './Experience.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


export default props =>

    <div id='experienceDiv' style={experienceDivStyle}>
        <link href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap" rel="stylesheet"></link>
        <div id="tituloExperience">
            <h1 style={h1TitleStyle}>Experiências   <i className="fa fa-graduation-cap" aria-hidden="true"></i></h1>
        </div>
        <div id='descricaoExperience'>
          
          <div id='empresa1'>
          <h5>Empresa 1 (1914-1918) </h5>
          <p>Suspendisse condimentum sem id velit commodo pulvinar. Vivamus eget lacus ultricies, volutpat ex sit amet, hendrerit quam. Praesent eu auctor arcu. Ut fringilla ipsum sed eros ullamcorper vestibulum.</p>
          </div>
          <div id='empresa2'>
          <h5>Empresa 2 (1939-1945) </h5>
          <p>Suspendisse condimentum sem id velit commodo pulvinar. Vivamus eget lacus ultricies, volutpat ex sit amet, hendrerit quam. Praesent eu auctor arcu. Ut fringilla ipsum sed eros ullamcorper vestibulum.</p>
          
          </div>
          

           
        </div>


    </div>

const h1TitleStyle = {
    textShadow: '2px 2px 2px rgba(0,0,0,0.4)'
}
const experienceDivStyle = {
    flexDirection: 'column',
    color: 'white',
    display: 'flex',
    position: 'abosulute',
   
  

}
