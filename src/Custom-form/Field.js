import React from 'react'

export default function Field({ field, fieldChanged, type, value }) {

    // console.log(field,type,value);
  return (
   

<div key={field._uid}>
      <label htmlFor={field._uid} className="mx-2">{field.label}: </label>
      {console.log(field)}
      <input
        type={type || field.component}
        id={field._uid}
        name={field._uid}
        value={value}
        className="my-2"
        onChange={(e) => {
          // Notify the main state list of the new value
          fieldChanged(field._uid, e.target.value);
        }}
      />
   


    </div>
  )
}
