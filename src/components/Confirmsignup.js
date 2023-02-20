import '../App.css';
import { confirmFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import React, { useState, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';

const fields=confirmFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Confirm(){
    const [confirmState,setConfirmState]=useState(fieldsState);

    const handleChange=(e)=>{
        setConfirmState({...confirmState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    async function authenticateUser() {
    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={confirmState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                )
            }
        </div>
        
        <FormAction handleSubmit={handleSubmit} text="Login"/>

      </form>
    )
}