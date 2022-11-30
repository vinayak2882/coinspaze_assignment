import React,{useRef, useState} from 'react'

const Form = () => {
const [form ,setForm]=useState({
   email:"" ,
   amount:0,
   description:"",
   selectCoins:""

})

const emailRef=useRef()

const onchange=(e)=>{
    const {name,value}=e.target;
    setForm({
        ...form,
        [name]:value
    })
}

const handleSubmit=(e)=>{
e.preventDefault();
console.log(form)
}

  return (
    <div id='formdiv'>
      <form onSubmit={handleSubmit}>
        <div className='childdiv'>
            <label htmlFor="email">Email : </label>
        <input 
       
       type="email"
       name="email"
       onChange={onchange}
       value={form.email}
       required
       />
        </div>

        <div className='childdiv'>
            <label htmlFor="selecttag">Select One : </label>
        <select  onChange={onchange} name="selectCoins" value={form.selectCoins}  required >
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
        </select>
        </div>

        <div className='childdiv'>
            <label htmlFor="Amount">Amount : </label>
        <input 
        type="number"
        name="amount"
        onChange={onchange}
        value={form.amount}
        required
        />
        </div>
        <div className='childdiv'>
            <label htmlFor="description">Description : </label>
        <input 
        type="text"
        name="description"
        onChange={onchange}
        value={form.description}
        required
        />
        </div>
        <input id='sbtn' type="submit" />
      </form>
    </div>
  )
}

export default Form
