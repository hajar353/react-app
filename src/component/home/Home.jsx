import { Component } from "react";
import "./Home.css"
import avataaars from '../../imgs/avataaars.svg'
class Home extends Component {


    render() { 
        return <>
        <section className='vh-100 text-white text-center'>
        
     <div>
     <div> <img className="w-75 m-auto my-0" src={avataaars} alt="" />
        </div>
            <div className="mt-5"><h1>START FRAMEWORK</h1></div>
           <div className="star position-relative"> <i className="fa-solid fa-star text-center mb-2"></i></div>
          <div>  <p>Graphic Artist - Web Designer - Illustrator</p></div>
     </div>
    

        </section>
        
        
        </>;
    }
}
 
export default Home;