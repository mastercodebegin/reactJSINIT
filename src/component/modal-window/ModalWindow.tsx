import React, { useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import CustomDropDown from '../CustomDropDown'

export default function ModalWindow(props:any) {
    useEffect(()=>{
        console.log(props,'props----');
        
    })
    const data='hi'
  return (
    <Modal className={props.name=='modalnumber'?'custom-popup':'allpopup'} show={props.show}  backdrop="static"
    keyboard={false}>
    <Modal.Header closeButton onClick={props.handleClose}>
        <Modal.Title className="modal-title">{props?.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {props.comp}
    <h6>{props.name}</h6>
    </Modal.Body>
    <Modal.Footer className="text-center">
        <Button variant="secondary" onClick={props.handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={(data)=>props.submit('hello')}>
            Save Changes
        </Button>
    </Modal.Footer>
</Modal>
  )
}
