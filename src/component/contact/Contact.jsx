import { Component } from "react";
import "./Contact.css"
class Contact extends Component {

  inputKeyUp(classValue = '', idValue = '') {

    if (document.getElementById(`${idValue}`).value === '') {
      document.querySelector(`.${classValue}`).style.top = '70px'
    }
    else {
      document.querySelector(`.${classValue}`).style.top = '0'
    }


  }
  state = {}

  render() {
    return <>
      <div className="contact vh-100  mt-5 p-5 mb-5 ">
        <h1 className="mt-5 fw-bolder  text-center">CONATCT SECTION</h1>
        <div className="star3 position-relative  text-center"> <i className="fa-solid fa-star text-center mb-3 mt-3"></i></div>
        <form className="m-auto">
          <div className="mb-3 overflow-hidden">
            <label htmlFor="name" className="form-label user">userName :</label>
            <input onKeyUp={() => this.inputKeyUp('user', 'name')} type="name" className="form-control" id="name" placeholder="userName" />
          </div>
          <div className="mb-3 overflow-hidden">
            <label htmlFor="age" className="form-label ageClass">userAge :</label>
            <input onKeyUp={() => this.inputKeyUp('ageClass', 'age')} type="number" className="form-control" id="age" placeholder="userAge" />
          </div>
          <div className="mb-3 overflow-hidden">
            <label htmlFor="email" className="form-label emailClass">userEmail :</label>
            <input onKeyUp={() => this.inputKeyUp('emailClass', 'email')} type="email" className="form-control" id="email" placeholder="userEmail" />
          </div>
          <div className="mb-3 overflow-hidden">
            <label htmlFor="password" className="form-label pass">userPassword :</label>
            <input onKeyUp={() => this.inputKeyUp('pass', 'password')} type="password" className="form-control" id="password" placeholder="userPassword" />
          </div>
          <button type="submit" className="rounded-3">send Messege</button>
        </form>

      </div>

    </>;
  }
}

export default Contact;