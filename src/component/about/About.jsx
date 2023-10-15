import { Component } from "react";
import "./About.css"
class About extends Component {
    state = {  } 
    render() { 
        return <>
        <section className="text-white">
<div>
<div><h1 className="text-center fw-bolder">ABOUT COMPONENT</h1></div>
<div className="star2 position-relative text-center mb-3 mt-3"> <i className="fa-solid fa-star text-center mb-2"></i></div>
<div className="container">
    <div className="row">
        <div className="col-md-6">
            <div className="info">
            Freelancer is a free bootstrap theme 
            created by Route. The download includes
             the complete source files including
              HTML, CSS, and JavaScript as well 
              as optional SASS stylesheets for
               easy customization.</div>
        </div>
        <div className="col-md-6">
            <div className="info">
            Freelancer is a free bootstrap theme created by Route. 
            The download includes the complete source files
             including HTML, CSS, and 
             JavaScript as well as optional SASS stylesheets for easy customization.
            </div>
        </div>
    </div>
</div>
</div>

        </section>
        
        
        </>;
    }
}
 
export default About ;