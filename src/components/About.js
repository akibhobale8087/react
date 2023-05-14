import React from "react";
import {Outlet} from "react-router-dom";

// const About = () =>{
   
//     return (
//         <div>
//         <h1>About</h1>
//         <p>In the previous article we looked at the  element, covering the original values of the type attribute available since the early days of HTML. Now we'll look at the functionality of newer form controls in detail, including some new input types, which were added in HTML5 to allow the collection of specific types of data.</p>
//         <Outlet/>
//         </div>
//     )
// }

 

class About extends React.Component{

    constructor(props){
        super(props)
        console.log("Child Constructor");
    }

    componentDidMount(){
        console.log("child componentDidMount");
    }
    render(){
        console.log("child Render");
        return(
            <div>
            <h1>About</h1>
            <p>In the previous article we looked at the  element, covering the original values of the type attribute available since the early days of HTML. Now we'll look at the functionality of newer form controls in detail, including some new input types, which were added in HTML5 to allow the collection of specific types of data.</p>
            <Outlet/>
            </div>
        )
    }
}

export default About;