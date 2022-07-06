import React, { useState } from 'react'
import '../App.css'
function Form({setData, data}) {
    const [formData, setFormData]= useState([]);
    const [firstName, setFirstName]= useState();
    const [lastName, setlastName]= useState();
    const [gender, setGender]= useState();
    const [firstNameError, setFirstNametError]= useState();



const handleChange = (e) => {
    e.preventDefault()
    // if (alert("do you want to submit")){
    if (!firstName){
        alert("Enter First Name")
setFirstNametError("enter First name")
    } else {
        submit();
    }
}


console.log(data,)
const submit = () => {
    if(gender === "male"){
        setData([...data, `Mr. ${firstName} ${lastName}`])
    } else if (gender === "female"){
        setData([...data, `Mrs. ${firstName} ${lastName}`])
    }else {
        setData([...data, ` ${firstName} ${lastName}`])
    }
}

  return (
      <div className='container'>
    <div className='formHeading'>Input component</div>
    <div className='form' id="form" >
        <input
            placeholder='First Name'
            className='input'
            name='firstName'
            onChange={(e)=>setFirstName(e.target.value)}
        />
        <input
            className='input'
            name='lastName'
            placeholder='Last Name'
            onChange={(e)=>setlastName(e.target.value)}

        />
        <select className='select' name="gender"
            onChange={(e)=>setGender(e.target.value)}
        >
            <option selected value={null}>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <button className='button'onClick={(e)=>handleChange(e)}>Submit</button>
    </div>
    </div>
  )
}

export default Form