import React from 'react'
import './Skills.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


export default props =>

<div id='skillDiv' style={skillDivStyle}>
<link href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap" rel="stylesheet"></link>
<div id="tituloSkills">
    <h1 style={h1TitleStyle}>Como posso ser útil   <i className="fa fa-graduation-cap" aria-hidden="true"></i></h1>
</div>
<div id='descricao'>
    <ul>
        <h4 align='center'>Hábilidades técnicas (front-end)</h4>
        <li>- HTML</li>
        <li>- CSS</li>
        <li>- Javascript</li>
        <li>- Bootstrap</li>
        
    </ul>
    <ul>
        <h4 align='center'>Hábilidades técnicas (back-end)</h4>
        <li>- Node.js</li>
        <li>- Java</li>
        <li>- Java</li>
    </ul>
    <ul>
        <h4 align='center'>Hábilidades técnicas (SGBD)</h4>
        <li>- PostgreSQL</li>
        <li>- MySQL</li>
        <li>- Hibernate</li>
    </ul>
    <ul>
        <h4 align='center'>Hábilidades interpessoais</h4>
        <li>- Profissionalismo</li>
        <li>- Responsabilidade</li>
        <li>- Flexibilidade</li>
    </ul>
</div>


</div>

const h1TitleStyle = {
    textShadow: '2px 2px 2px rgba(0,0,0,0.4)'
}
const skillDivStyle = {
    flexDirection: 'column',
    color: 'white',
    display: 'flex',
    position: 'abosulute',
    width: '100%',
    height: '33%',
    borderBottom: '1px solid rgba(0, 0, 0, 0.2)'

}

