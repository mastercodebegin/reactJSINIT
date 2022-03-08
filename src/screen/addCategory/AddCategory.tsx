import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import CustomDropDown from '../../component/CustomDropDown'
import ModalWindow from '../../component/modal-window/ModalWindow'

export default function AddCategory(props:any) {
  const [value,setValue]= useState({label:''})
  const parent=(e:any)=>{
    // console.log(e,'-------- callback');
    // setValue(e);
    

  }
useEffect(()=>{

},[value])

 
  return (
    <div>
         <h4>{value?.label}</h4>
      <CustomDropDown parent={parent}/>
     
      </div>
    

  )
}
