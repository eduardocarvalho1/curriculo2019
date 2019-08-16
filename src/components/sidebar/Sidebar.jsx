import React from 'react'
import Background from '../../images/avatar.png';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';



export default props =>

    <div id='sidebar' style={sidebarStyle}>

        <div id='avatarDiv' style={avatarDivStyle}>
        </div>
        <div style={divDescription} >
            <div id='name' style={divName}>
                <h2>Eduardo <br />Carvalho</h2>
            </div>
            <div id='description'>
                <h4 style={descriptionH4}>Estagiário em Testes</h4>
                <h5 align='center' style={descriptionH5}>dudeuves@gmail.com</h5>
            </div>
        </div>
        <div style={menuDivStyle} id='home'>
            <a href="/#" style={aStyle}>Home</a>
            <a href="/#" style={aStyle}>Código Fonte</a>
            <a href="/#" style={aStyle}>Contato</a>
        </div>
        <div style={iconsDivStyle} id='icons'>
            <i className="fa fa-github" aria-hidden="true" ></i>
            <i className="fa fa-twitter" aria-hidden="true" ></i>
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
            <i className="fa fa-envelope" aria-hidden="true"></i>
        </div>

    </div>
const aStyle = {
    margin: '10px',
    marginTop: '0px',
    textDecoration: 'none',
    color: '#414141',
    fontSize: '20px',
    fontWeight: 450
}

const menuDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    listStyleType: 'none',
    textDecoration: 'none',
    marginTop: '18%'
}
const descriptionH5 = {
    fontWeight: 350
}
const descriptionH4 = {
    fontWeight: 450
}
const iconsDivStyle = {
    borderTop: '1px solid rgba(0, 0, 0, 0.25)',
    textShadow: '1px 1px 10px black',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
    bottom: 0,
    height: '8%',
    position: 'absolute',
    width: '100%',
    marginBottom: '15px',
    fontSize: '50px',
    color: 'white'
}

const divName = {
    textShadow: '0px 0px 2px black',
    marginBottom: '20px',
    fontWeight: '100px'
}

const divDescription = {
    color: 'white',
    marginTop: '100%',


}
const sidebarStyle = {
    boxShadow: 'rgba(0, 0, 0, 0.35) 20px 1px 10px',
    display: 'flex',
    width: '350px',
    height: '100%',
    background: '#af0404',
    position: 'sticky',
    top:0,
    zindex: 999,
    flexDirection: 'column',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    overflowx: 'hidden',
    paddingtop: '20 px'

}
const avatarDivStyle = {
    width: '200px',
    height: '200px',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundColor: 'white',
    marginTop: '10%',
    borderRadius: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)',
    border: '0px solid black',
    boxShadow: '0px 0px 50px 5px'
}

