import React, { useEffect, useState } from "react"
import {
    Button, Dropdown, DropdownButton, FormControl, InputGroup,
    Modal, Spinner
}
    from "react-bootstrap";
import Header from "../header/Header"
import SideBar from '../sidebar/SideBar'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { increament } from "../../redux/actions/Actions";
import SelectUnstyled from '@mui/base/SelectUnstyled';
import CustomDropDown from "../../component/CustomDropDown";
import AddCategory from "../addCategory/AddCategory";
import AddSubCategory from "../addSubCategory/AddSubCategory";
import ModalWindow from "../../component/modal-window/ModalWindow";
import AddBrand from "../addBrand/AddBrand";
import AddModalNumber from "../addModalNumber/AddModalNumber";

export const UserManagement = () => {
    // let data = useSelector(state=>state.RootReducer.increament)
    const [value,setValue]= useState('Select')
    const stateData = useSelector((state: any) => state.SignUpReducer)
    // console.log(stateData);

    const dispatch = useDispatch()

    const [category, setCategory] = useState(false);
    const [subcategory, setSubcategory] = useState(false);
    const [brand, setBrand]=useState(false);
    const [modalNumber, setModalNumber] = useState(false);
    const [categoryValue,setCategoryValue]=useState('')
    
const submitParent=(value:any)=>{
    console.log('function-----',value);
    
    

}
    // const handleClose = () => setShow(false);
    const handleShow = (value:string) => {
        if(value=='category')
        {
            setCategory(true)
            setSubcategory(false)
            setBrand(false)
            setModalNumber(false)
        }
        else if(value=='subcategory')
        {
            setCategory(false)
            setSubcategory(true)
            setBrand(false)
            setModalNumber(false)
        }
        else if(value=='brand')
        {
            setCategory(false)
            setSubcategory(false)
            setBrand(true)
            setModalNumber(false)
        }
        else if(value=='modalnumber')
        {
            setCategory(false)
            setSubcategory(false)
            setBrand(false)
            setModalNumber(true)
        }
        console.log('value----',value);
        
    };
    useEffect(() => {
        // const data = dispatch(increament())
        // console.log('--------selector',stateData);
        // console.log('--------dispatch',data);

    }, [])
    return (



        <>
            <div>
                <div className="container-scroller">

                    <Header />

                    <div className="container-fluid page-body-wrapper">

                        <SideBar />

                        <div className="main-panel">
                            <div className="content-wrapper">

                                <div className="page-header">
                                    <h3 className="page-title">
                                        <span className="page-title-icon bg-gradient-primary text-white mr-2">
                                            <i className="mdi mdi-home"></i>
                                        </span> Dashboard
                                    </h3>

                                </div>
                                <div className="row rowClass text-center">
                                    <div className="col-md-3">
                                        <Button className="button-class" variant="primary" onClick={()=>{handleShow('category')}}>
                                            Add Category
                                        </Button>
                                    </div>
                                    <h2></h2>
                                    <div className="col-md-3">
                                        <Button className="button-class" variant="primary" onClick={()=>{handleShow('subcategory')}}>
                                            Sub Category
                                        </Button>
                                    </div>
                                    <div className="col-md-3">
                                        <Button className="button-class" variant="primary" onClick={()=>{handleShow('brand')}}>
                                            Add Brand
                                        </Button>
                                    </div>

                                    <div className="col-md-3">
                                        <Button className="button-class" variant="primary" onClick={()=>{handleShow('modalnumber')}}>
                                            Add Modal Number
                                        </Button>
                                    </div>


                                </div>
                                <h5>{categoryValue}</h5>


                            </div>

                            

                        </div>

                    </div>

                </div>
            </div>
{category?<ModalWindow comp={<AddCategory/>}show={category} handleClose={()=>setCategory(false)} submit={submitParent} title='Add Category' name='modalnumber3'/>:null}
{subcategory?<ModalWindow comp={<AddSubCategory/>} show={subcategory} handleClose={()=>setSubcategory(false)} submit={submitParent} title='Add SubCategory' name='modalnumber2' />:null} 
 {brand?<ModalWindow comp={<AddBrand/>} show={brand} handleClose={()=>setBrand(false)} submit={submitParent} title='Add Brand' name='modalnumber1' />:null} 
 {modalNumber?<ModalWindow comp={<AddModalNumber/>} show={modalNumber} handleClose={()=>setModalNumber(false)} submit={(value:any)=>submitParent} title='Add ModalNumber' name='modalnumber' />:null} 

            {

                // xshow ? <Spinner animation="border" role='checkbox' size="sm" /> : null
            }
        </>

    )
}
export default UserManagement