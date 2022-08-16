import { Field, FieldArray, Form, Formik } from 'formik'
import React ,{useState} from 'react'
// import AddMoreField from './AddMoreField'

import * as Yup from 'yup'

export default function Dynamic2() {
    const [formValues, setFormValues] = useState(null)

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),

    })
    const priamaryValues = 
        {
            firstName:"",
            lastName:"",
            email:"",
            // addMoreField2 : "",
            addField : [""],
            education: [{
              qualification:"",
              grade:"",            }]
              

        }
    
//    function onChangeField(e,field,values,setValues){
//             const addField = [...values.addField];
//             setValues(...values,addField);
//             field.onChange(e);
//    }
//    function handleAddField(values,setValues){
//          setValues([...values ,{addField:""}])
//    }
//    function handleRemoveField(values , setValues ,index){
//     const addField = [...values.addField];
//            addField.splice(index,1);
//            setValues(addField)
//    }
//    function onSubmit(field){
//     console.log(field);
//    }
  return (
    <div className='container'>
        <Formik 
        initialValues={priamaryValues || formValues}
        onSubmit = {
            (values,submitProps)=>{
                console.log('Form data', values)
                console.log('submitProps', submitProps)
                // submitProps.setSubmitting(false)
                // submitProps.resetForm()
            }
        }
        validationSchema = {validationSchema}
        >
            {({values,setValues,errors,touched}) =>(
            <Form>
                <div>
                    <label htmlFor="">FirstName:</label>
                    <Field type="text" name="firstName"></Field>
                    {errors.firstName  ? (
             <div>{errors.firstName}</div>
           ) : null}
                </div>
                <div>
                    <label htmlFor="">LastName:</label>
                    <Field type="text" name="lastName"></Field>
                    {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <Field type="text" name="email"></Field>
                    
                    {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}
                </div>
                {/* <AddMoreField /> */}

                {/* <FieldArray name='addField'>
                    {()=>(values.addField.map((addFields,i)=>{
                        return(
                        <div key={i}>
                            <div>
                                <label htmlFor="">preferlocation</label>
                                <Field name={`addfield.${i}.location`} type="text"
                                 onChange={(e) =>  onChangeField(e,values,setValues)}/>
                            </div>
                            <div>
                                <button type="submit" onClick={handleAddField}>Add</button>
                            </div>
                            <div>
                                <button type="submit" onClick={handleRemoveField}>remove</button>
                            </div>
                        </div>
                        )
                    }))}
                </FieldArray> */}
                <div className=''>
              <label>perferLocation:</label>
              <FieldArray name='addField'>
                {fieldArrayProps => {
                  const { push, remove, form } = fieldArrayProps
                  const { values } = form
                  const { addField } = values
                  // console.log('fieldArrayProps', fieldArrayProps)
                  // console.log('Form errors', form.errors)
                  return (
                    <div>
                      {addField.map((addField, index) => (
                        <div key={index}>
                          <Field name={`addField[${index}]`} />
                          {index > 0 && (
                            <button type='button' onClick={() => remove(index)}>
                              remove
                            </button>
                          )}
                        </div>
                      ))}
                      <button type='button' onClick={() => push('')}>
                        Add
                      </button>
                    </div>
                  )
                }}
              </FieldArray>
            </div>
            <div className=''>
              <label>Education:</label>
              <FieldArray name='education'>
                {fieldArrayProps => {
                  const { push, remove, form } = fieldArrayProps
                  const { values } = form
                  const { education } = values
                  // console.log('fieldArrayProps', fieldArrayProps)
                  // console.log('Form errors', form.errors)
                  return (
                    <div>
                      {education.map((addField, index) => (
                        <div key={index}>
                          <label htmlFor="">Qualification</label>
                          {/* <Field name={`education[${index}].qualification`} /> */}
                          <Field as="select" name={`education[${index}].qualification`}>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            </Field>
                          <label htmlFor="">Grade</label>
                          <Field name={`education[${index}].grade`} />

                          {index > 0 && (
                            <button type='button' onClick={() => remove(index)}>
                              remove
                            </button>
                          )}
                        </div>
                      ))}
                      <button type='button' onClick={() => push('')}>
                        Add
                      </button>
                    </div>
                  )
                }}
              </FieldArray>
            </div>
          
                <button type="submit" onClick={() => setFormValues()}>Submit</button>
            </Form>
            )}
        </Formik>
    </div>
  )
}
