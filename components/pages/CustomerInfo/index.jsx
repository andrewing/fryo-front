import Title from "../../common/Title"
import { TextField, Paper } from '@material-ui/core';
import InputTemplate from "./InputFields/InputTemplate";
import { useState } from "react";
import { useEffect } from "react";

const CustomerInfo = ({ setters, getters }) => {
  const { deliveryMethod, name, contactNumber, address} = getters
  const {setAllInputInPageValid, setName, setContactNumber, setAddress} = setters

  useEffect(()=>{
    const regexContactNumberPH = /^(09|\+639)\d{9}$/
    if(!name.trim() || !contactNumber.trim() || (!address.trim() && deliveryMethod.name.toLowerCase() === "delivery")){
      setAllInputInPageValid({
        message: "All fields are required!",
        isValid: false
      })
    }else if(!regexContactNumberPH.test(contactNumber)){
      setAllInputInPageValid({
        message: "Valid phone number required!",
        isValid: false
      })
    }else{
      setAllInputInPageValid({
        message: "Thank you for filling the fields!",
        isValid: true
      })
    }
  }, [contactNumber, name, address])

  return (
    <React.Fragment>
      <div style={{ height: "8vh", width: "100%" }} />
      <div style={{ maxWidth: "750px", width: "90%", margin: "0 auto" }}>
        <Title text="your details:" />
        <InputTemplate
          label="name"
          placeholder="John Doe"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <InputTemplate
          label="contact number"
          placeholder="09331234567"
          value={contactNumber}
          onChange={e => {
            setContactNumber(e.target.value)
          }}
        />
        {deliveryMethod.name.toLowerCase() === "delivery" ?
          <InputTemplate
            label="address"
            placeholder="123-c example street"
            value={address}
            onChange={e => setAddress(e.target.value)}
          /> : ""
        }
        <div style={{ height: "100px" }} />
      </div>
    </React.Fragment>
  )
}

export default CustomerInfo