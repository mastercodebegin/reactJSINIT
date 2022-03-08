
//@ts-nocheck
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];




export default function CustomDropDown(props:any) {
  const [value,setValue]= useState('')
  useEffect(()=>{
    console.log(value,'CustomDropDown---useeffect');
    
  },[value])
   const updateDropDownValue=e=>{
    setValue(e.value)
    props.parent(value)
    console.log(value,'setvalue');
    
  }
  
  return(
<Dropdown options={options} value={value} placeholder="Select an option" onChange={(e)=>{props.parent(e)}}
/>
 )}
  