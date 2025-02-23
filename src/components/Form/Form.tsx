import React, { FormEvent, useRef } from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(3),
  age: z.number({message: 'Age must be a number'}).min(18, {message: 'Age must be at least 18'})
})

type User = z.infer<typeof schema>;

export const Form = () => {


  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const user = {name: '', age: 0};
  const [user , setUser] = React.useState({name: '', age: ''});

  const {register, handleSubmit, formState: {errors}} = useForm<User>({resolver: zodResolver(schema)});

  
  const onSubmit = (data: FieldValues)=> {
    console.log('submitted', data);

  }


  const handleformSubmit = (event:FormEvent) => {
 
    // if (nameRef.current !== null && ageRef.current !== null){
    //   user.name =  nameRef.current.value;
    //   user.age =  parseInt(ageRef.current.value);
    // }
    console.log(user);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit, (data)=> console.log(data))}>
        <div className="mb-3"><label htmlFor="name" className="form-label">Name</label>
            <input {...register('name')} id="name" type="text" className="form-control" />
            {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input {...register('age',{valueAsNumber: true})} id="age" type="number" className="form-control" />
            {errors.age && <p>{errors.age.message}</p>}
          </div>
          <button className="btn btn-primary" type='submit'>Submit</button>
    </form>
  )
}