import React from 'react'
import './Home.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


export default props =>

    <div id='homeDiv' style={homeDivStyle}>
        <link href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap" rel="stylesheet"></link>
        <div id="titulo">
            <h1 style={h1TitleStyle}>Quem sou eu   <i className="fa fa-male" aria-hidden="true"></i></h1>
        </div>
        <div id='descricao'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat odio at bibendum auctor. Aenean arcu leo, blandit a dui sed, imperdiet pulvinar diam. Mauris id lectus metus. Proin velit enim, volutpat at feugiat eu, lacinia quis nibh. Nulla vitae semper orci. Maecenas suscipit gravida est, a tempor massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
        </div>


    </div>
const h1TitleStyle = {
    textShadow: '2px 2px 2px rgba(0,0,0,0.4)'
}
const homeDivStyle = {
    flexDirection: 'column',
    color: 'white',
    display: 'flex',
    position: 'abosulute',
    width: '100%',
    height: '33%',
    borderBottom: '1px solid rgba(0, 0, 0, 0.2)'

}

