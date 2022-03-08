import { Input } from '@mui/material'
import React from 'react'
import CustomDropDown from '../../component/CustomDropDown'

export default function AddBrand() {
  return (
    <div>
      {/* AddBrand
        <Input placeholder='enter name'/> */}
         <div className="floating-label login-div p-t-10">      
    <input className="input" type="text" placeholder=" "/>
    
    <label className="label label-2">Add Brand</label>
  </div>
        <CustomDropDown/>
    </div>
  )
}
