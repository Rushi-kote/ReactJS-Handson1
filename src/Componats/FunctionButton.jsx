import React from 'react'
// import "./FunctionButton.css"
const FunctionButton = () => {
  return (
    <div className='flex-item'>
        <h1>This is created using function Component</h1>
        <h4>This is done using external css</h4>
        <h4 style={{color:"Red"}}>This is done using inline css</h4>
    </div>
  )
}

export default FunctionButton