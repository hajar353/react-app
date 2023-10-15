
import { Component } from 'react';
import './App.css'
import Layout from './component/layout/Layout';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import About from './component/about/About';
import Portfolio from './component/portfolio/Portfolio';
import Contact from './component/contact/Contact';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
const router= createHashRouter([

{path:'',element:<Layout />, children:[
  {path:"*",element:<h1 className='fw-bolder vh-100 d-flex justify-content-center align-items-center bg'> 404  Not Found</h1>},
  {path:'',element:<Home />},
  {path:'about',element:<About />},
  {path:'portfolio',element:<Portfolio />},
  {path:'contact',element:<Contact />}

]}


])



class App extends Component {
 
  render() { 
    return <>

<RouterProvider router={router} />
      
      </> ;
  }
}
 
export default App;
