import React from 'react'
import image from '../assets/584830f5cef1014c0b5e4aa1.png'

const Nav = (props) => {
  return (
    <nav style={{backgroundColor: props.togg ?"#21222A" : "#F3F377",color:props.togg ?"white" : "black"}} >
      <div className="toggler" >
            <p className="toggler-light">Light</p>
              <div className={props.togg ? "toggler--slider toggler--slider-end":"toggler--slider toggler--slider-start"} onClick={props.toggle}  >
                <div className={props.togg ? "toggler--slider--circle toggler--slider--circle-end":"toggler--slider--circle toggler--slider--circle-start"} ></div>
              </div>
            <p className="toggler-dark">Dark</p>
      </div>
      <div >
      <img src={image} alt="" />
      <h3>ReactFact</h3>
      <h4>React Course - project 1</h4>
      </div>
    </nav>
  )
}

export default Nav
