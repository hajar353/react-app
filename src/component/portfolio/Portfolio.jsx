import { Component } from "react";
import "./Portfolio.css"
import poert1 from "../../imgs/poert1.png"
import port2 from "../../imgs/port2.png"
import port3 from "../../imgs/port3.png"

class Portfolio extends Component {
   
    render() { 
        return <>
        
        <div className=" bg-white portfolio text-center mt-5 pt-3">
            <h1 className="fw-bolder mt-5 pt-5">PORTFOLIO COMPONENT</h1>
            <div className="star3 position-relative"> <i className="fa-solid fa-star text-center mb-3 mt-3"></i></div>
<div className="container mb-5">
    <div className="row gy-4">
        <div className="col-md-4">
            <div className="position-relative">
                <img className="w-100 rounded-3" src={poert1} alt="" />
                <div className="lay d-flex justify-content-center align-items-center"><i className="fa-solid fa-plus fa-2xl text-white"></i></div>
            </div>
        </div>
        <div className="col-md-4">
        <div className="position-relative">
                <img className="w-100 rounded-3" src={port2} alt="" />
                <div className="lay d-flex justify-content-center align-items-center"><i className="fa-solid fa-plus fa-2xl text-white"></i></div>
            </div>
        </div>
        <div className="col-md-4">
        <div className="position-relative">
                <img className="w-100 rounded-3" src={port3} alt="" />
                <div className="lay d-flex justify-content-center align-items-center"><i className="fa-solid fa-plus fa-2xl text-white"></i></div>
            </div>
        </div>
        <div className="col-md-4">
        <div className="position-relative">
                <img className="w-100 rounded-3" src={poert1} alt="" />
                <div className="lay d-flex justify-content-center align-items-center"><i className="fa-solid fa-plus fa-2xl text-white"></i></div>
            </div>
        </div>
        <div className="col-md-4">
        <div className="position-relative">
                <img className="w-100 rounded-3" src={port2} alt="" />
                <div className="lay d-flex justify-content-center align-items-center"><i className="fa-solid fa-plus fa-2xl text-white"></i></div>
            </div>
        </div>
        <div className="col-md-4">
        <div className="position-relative">
                <img className="w-100 rounded-3" src={port3} alt="" />
                <div className="lay d-flex justify-content-center align-items-center"><i className="fa-solid fa-plus fa-2xl text-white"></i></div>
            </div>
        </div>
    </div>
</div>
        </div>
        
        
        </>;
    }
}
 
export default Portfolio ;