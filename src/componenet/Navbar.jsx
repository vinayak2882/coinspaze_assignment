import React,{useState} from 'react'
import Form from './Form'

const Navbar = () => {
    const [condition,setCondition]=useState(false)
    const handleClick=()=>{

        setCondition(true)
    }
  return (
    <>
    <div>
      <button id='hidebtn' onClick={handleClick}>Payment</button>
      
    </div>
    <div>
    {condition ? <Form/> :null}
    </div>
    </>
  )
}

export default Navbar
