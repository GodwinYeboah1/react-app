import React, { FormEvent, useRef } from 'react'

export const Form = () => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const user = {name: '', age: 0};
  const [user , setUser] = React.useState({name: '', age: ''});

  const handleformSubmit = (event:FormEvent) => {
    event.preventDefault();
    // if (nameRef.current !== null && ageRef.current !== null){
    //   user.name =  nameRef.current.value;
    //   user.age =  parseInt(ageRef.current.value);
    // }
    console.log(user);
  }
  return (
    <form onSubmit={handleformSubmit}>
        <div className="mb-3"><label htmlFor="name" className="form-label">Name</label>
            <input value={user.name} onChange={(e)=> setUser({...user, name: e.target.value })} id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input value={user.age} onChange={(e)=> setUser({...user, age: parseInt(e.target.value) })} id="age" type="number" className="form-control" />
          </div>
          <button className="btn btn-primary" type='submit'>Submit</button>
    </form>
  )
}