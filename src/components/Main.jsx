import React from 'react'

const Main = (props) => {
  return (
    <main style={{backgroundColor: props.togg ?"#282D35" : "white",color:props.togg ?"white" : "black"}}>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    </main>
  )
}

export default Main
