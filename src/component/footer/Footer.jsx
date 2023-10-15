import { Component } from "react";
import "../layout/Layout.css"
class Footer extends Component {

    state = {  } 
    render() { 
        return <>
        <footer className="">
<div className="container pt-4 pb-4">
  <div className="row">
    <div className="col-md-4 text-center mt-5">
<div >
  <h3>LOCATION</h3>
  <p>2215 John Daniel Drive</p>
  <p>Clark, MO 65243</p>
</div>
</div>

<div className="col-md-4 mt-5">
<div >
  <h3>ABOUT FREELANCER</h3>
<div className="icons">
<div className="icon text-white">
  <i className="fa-brands fa-facebook"></i>
  </div>
  <div className="icon text-white">
  <i className="fa-brands fa-twitter"></i>
  </div>
  <div className="icon text-white">
  <i className="fa-brands fa-linkedin-in"></i>
  </div>
  <div className="icon text-white">
  <i className="fa-solid fa-globe"></i>
  </div>
</div>
</div>
</div>

<div className="col-md-4 text-center mt-5">
<div >
  <h3>ABOUT FREELANCER</h3>
  <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
 
</div>
</div>


  </div>
</div>
<div className="divColor"><p className="text-white">Copyright © Your Website 2021</p></div>

</footer>
        </>
    }
}
 
export default Footer;