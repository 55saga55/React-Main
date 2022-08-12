import React, { useState } from 'react';
  
function StudentForm(props) {
  const [name, setFirstName] = useState('');
  const [name2, setLastName] = useState('');

  
  
  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  
  const changeLastName = (event) => {
    setLastName(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      name2,
    };
    props.func(val);
    
    clearState();
  };
  
  const clearState = () => {
    setFirstName('');
    setLastName('');
  };
  
  return (
    <div className=' d-flex justify-content-center align-items-center'>
    <div className='container my-5 '>
        <div className="form-group col-md-6">
      <label>FirstName: </label>
      <input type="text" value={name} onChange={changeFirstName} />
      </div>
      <div className="form-group col-md-6">
      <label>LastName: </label>
      <input type="text" value={name2} onChange={changeLastName} />
      
      </div>
      <button  className="btn btn-primary ml-3" onClick={transferValue}>ADD</button>
    </div>
    </div>
  );
}
  
export default StudentForm;