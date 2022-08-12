import React from 'react'

export default function EditableRow() {
  return (
  
    <tr>
   <td>id</td>
    <td>
        <input type="text" placeholder='Enter firstName' name="firstName" />
    </td>
    <td>
        <input type="text" name="lastName" placeholder='Enter lastName' />
    </td>
   
  </tr>
    
  )
}
