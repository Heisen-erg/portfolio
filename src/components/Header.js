import React from 'react'
import "../styles/header.css"
import tech from "../assets/tech.jpg"
import rs from "../assets/rs.png"
import css from "../assets/csshd (2).png"
import html from "../assets/htmlhd.png"
import js from "../assets/jshd.png"
import node from "../assets/node240.png"
import mongo from "../assets/mongo240.png"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <body>


            <div className="container-fluid" >
                <div className="row  ">
                    <div className="col-12 m-0 p-0"><img src={require("../assets/bg.jpg")} alt="" id='bg' /></div>
                    <div className="col-12 mt-1 p-0 z-2 d-flex justify-content-end"> <Link to="/projects"> <button className='btn custombutton '>PROJECTS</button> </Link> </div>
                    <div className="col-12 z-2 d-flex justify-content-center  "> <p id="text">HEISENBERG</p><p id="shadow">
                        <span id="glow">HEISEN</span><span id="blink">BERG</span>
                    </p>
                    </div>
                    <div className="col-12 z-2 d-flex justify-content-center  "> <Link to='/contact' > <button className='btn custombutton1 '>CONTACT</button> </Link> </div>
                </div> </div>
            <div className="container-fluid" id='margin'>
                <div className="row z-2 ">
                    <div className="col-12 col-xxl-6 z-2 margin1"><div id="overflow"> <img src={tech} className="img-fluid" alt="" id="shade" /> </div></div>
                    <div className="col-sm-12 col-xxl-6 textty"><p>" With this Fast changing world, you need to reach the larger audience in shorter time. In this era of chatgpt and other artificial intelligence tools . you need to have an edge with your competitors . you can contact me , if you want your website to be designed in most tempting way . "  </p></div>
                </div>
            </div>
            <div className="container-fluid ">
                <div className="row">
                    <div className=" heading col-12 text-center z-2"><h1 id='h3'>I'm A Frontend Web Developer</h1><h2 className='my-5 text-dark' id="h3">Technologies I  use :-</h2></div>
                    
                    <div class="col-xl-3 z-2 col-6 d-grid"><img src={css} alt="" id="image" /><p className='text-center' id="tag">HTML</p></div>
                    <div class="col-xl-3 d-grid z-2 col-6"><img src={js} alt="" id="image" /><p className='text-center' id="tag">Java Script</p></div>
                    <div class="col-xl-3 d-grid z-2 col-6"><img src={html} alt="" id="image" /><p className='text-center' id="tag">CSS</p></div>
                    <div class="col-xl-3 d-grid z-2 col-6"><img src={rs} alt="" id="image" /><p className='text-center' id="tag">REACT</p></div>
                    <div class="col-xl-3 d-grid z-2 col-6"><img src={node} alt="" id="image" /><p className='text-center' id="tag">Node</p></div>
                    <div class="col-xl-3 d-grid z-2 col-6"><img src={mongo} alt="" id="image" /><p className='text-center' id="tag">MongoDB</p></div>

                </div>
            </div>
            <div className="container-fluid">
                <div className="row text-center text-white ">
                    <div className="col-12 bg-dark footer z-2 d-grid"><p> I'm Heisenberg <br /> This is my portfolio website <br /> copyrights © are reserved , gmail :- heisenberg.database.1@gmail.com </p></div>
                </div>
            </div>

        </body>
    )
}

export default Header