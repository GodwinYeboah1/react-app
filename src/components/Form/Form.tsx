import React, { FormEvent, useRef } from 'react'
import { FieldValues, useForm } from 'react-hook-form';

export const Form = () => {

  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const user = {name: '', age: 0};
  const [user , setUser] = React.useState({name: '', age: ''});

  const {register, handleSubmit} = useForm();
  const onSubmit = (data: FieldValues)=> {
    console.log('submitted', data);
  }


  const handleformSubmit = (event:FormEvent) => {
    event.preventDefault();
    // if (nameRef.current !== null && ageRef.current !== null){
    //   user.name =  nameRef.current.value;
    //   user.age =  parseInt(ageRef.current.value);
    // }
    console.log(user);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3"><label htmlFor="name" className="form-label">Name</label>
            <input {...register('name')} id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input {...register('age')} id="age" type="number" className="form-control" />
          </div>
          <button className="btn btn-primary" type='submit'>Submit</button>
    </form>
  )
}