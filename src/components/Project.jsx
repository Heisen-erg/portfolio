import React from 'react'
import "../styles/project.css"
import {Link} from "react-router-dom"

const Project = () => {

   

    return (
        <>
      
        
        <div className="container-fluid">
            <div className="row " >
                <div className="col-12 m-0 p-0 "><img className='backg' src={require("../assets/project2.jpg")} alt="" /></div>
                <div className="col-12 mt-3 p-0 customproject d-grid">

                    <div className="car mt-2 z-2 d-grid ">
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-touch="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src= {require("../assets/ss1.png")}  class="d-block w-100" alt="..." />
                                </div>
                        
                                </div>
                            </div>
                           
                        </div>
                      <div className='center' > <Link to='https://blogs.heisenberg.in.net/'><button className='btn mt-0 z-2 car1' >►</button> </Link> </div> 

    

                    </div>
                </div>
            </div>
        
            </>
    )
}

export default Project