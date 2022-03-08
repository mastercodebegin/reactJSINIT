import React from 'react'
import AddBrand from '../addBrand/AddBrand'
import CustomDropDown from '../../component/CustomDropDown'
import ModalWindow from '../../component/modal-window/ModalWindow'
import CustomInput from '../../component/CustomInput'

export default function AddSubCategory() {
  return (
    <div>
      {/* <p className='dis-text'>Select category</p> */}
      <CustomDropDown/>
      {/* <p className='dis-text'>nter SubCategory</p> */}
     <CustomInput/>
    </div>
  )
}
