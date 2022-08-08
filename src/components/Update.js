import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Update = () =>
{
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

const Navigate=useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    },[])
    const handleUpdate=(e)=>{
        e.preventDefault()
        axios.put(`https://62e8a173249bb1284eb13c60.mockapi.io/suraj/${id}`,
        {
            name:name,
            email:email,
        }
        ).then(()=>{
           Navigate("/read")
        })
    }

    return (
        <div className='container'>
            <h2>Update</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control"value={name} onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</
                    label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}

                    />
                </div>
                <NavLink to={"/read"}>
                <button type="submit" className="btn btn-primary" onClick={handleUpdate}>update</button></NavLink>
               <NavLink to={"/read"}> <button className='btn btn-primary mx-3'>Back</button></NavLink>
            </form>
        </div>
    )
}

export default Update