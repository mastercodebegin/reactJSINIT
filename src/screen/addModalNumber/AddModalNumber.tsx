import { Input } from '@mui/material'
import React from 'react'
import CustomDropDown from '../../component/CustomDropDown'

export default function AddModalNumber(props:any) {
  const submit=(value:any)=>{

    console.log('submitted');
    
  }
  return (
    <div>
      {/* <h2>Select Brand</h2> */}
      <CustomDropDown/>
      {/* <h2>Enter Modal Number</h2>
      <Input placeholder='Enter Value'/> */}
      <div className="floating-label login-div p-t-10">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">Enter Modal Number</label>
  </div>
<p className='heading'>Specification</p>
<div className='row'>
  <div className='col-md-4'>
  <div className="floating-label login-div p-t-10 m-t-0">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">CPU</label>
  </div>
  </div>
  <div className='col-md-4'>
  <div className="floating-label login-div p-t-10 m-t-0">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">Battery</label>
  </div>
  </div>
  <div className='col-md-4'>
  <div className="floating-label login-div p-t-10 m-t-0">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">Camera</label>
  </div>
  </div>
</div>
<div className='row'>
  <div className='col-md-4'>
  <div className="floating-label login-div p-t-10 m-t-0">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">CPU</label>
  </div>
  </div>
  <div className='col-md-4'>
  <div className="floating-label login-div p-t-10 m-t-0">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">Battery</label>
  </div>
  </div>
  <div className='col-md-4'>
  <div className="floating-label login-div p-t-10 m-t-0">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">Camera</label>
  </div>
  </div>
</div>
<div className='row'>
  <div className='col-md-4'>
  <div className="floating-label login-div p-t-10 m-t-0">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">CPU</label>
  </div>
  </div>
  <div className='col-md-4'>
  <div className="floating-label login-div p-t-10 m-t-0">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">Battery</label>
  </div>
  </div>
  <div className='col-md-4'>
  <div className="floating-label login-div p-t-10 m-t-0">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">Camera</label>
  </div>
  </div>
</div>
<div className='row'>
  <div className='col-md-4'>
  <div className="floating-label login-div p-t-10 m-t-0">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">CPU</label>
  </div>
  </div>
 
</div>
<span className='heading'>Variant</span>
<span><button className='add'><i className='fa fa-plus-circle'></i></button><button className='min'><i className="fa fa-minus-circle" aria-hidden="true"></i></button></span>
<div className='row'>
  <div className='col-md-4'>
  <div className="floating-label login-div p-t-10 m-t-0">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">CPU</label>
  </div>
  </div>
  <div className='col-md-4'>
  <div className="floating-label login-div p-t-10 m-t-0">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">Battery</label>
  </div>
  </div>
  <div className='col-md-4'>
  <div className="floating-label login-div p-t-10 m-t-0">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">Camera</label>
  </div>
  </div>
  <div className='col-md-4'>
  <div className="floating-label login-div p-t-10 m-t-0">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">Battery</label>
  </div>
  </div>
  <div className='col-md-4'>
  <div className="floating-label login-div p-t-10 m-t-0">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">Camera</label>
  </div>
  </div>
</div>
<hr></hr>
{/* <CustomDropDown/> */}
<form id="form1" className='select-img'>
        <input type='file' id="imgInp" />
        {/* <img id="blah" src="#" alt="your image" /> */}
    </form>

    </div>
  )
}
