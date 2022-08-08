import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Create = () =>
{
    const history = useNavigate();
    const [ name, setName ] = useState( "" )
    const [ email, setEmail ] = useState( "" )
    const header = { "": "" }

    const handleSubmit = ( e ) =>
    {
        if(name && email===null? name && email===null :!name && email===""){
            return alert("FillUp the form");
        }
        e.preventDefault();
        // console.log("clicked");
        // eslint-disable-next-line no-undef
        axios.post(
            "https://62e8a173249bb1284eb13c60.mockapi.io/suraj",
            {
                name: name,
                email: email,
                header,


            } )
            .then( () =>
            {
                history( "/read" )
            } )

    };
    return (
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <h2>Create</h2>
                <NavLink to={ "/read" }> <button type="button" class="btn btn-success  my-3">show data</button></NavLink>

            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={ ( e ) => setName( e.target.value ) } />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ ( e ) => setEmail( e.target.value ) } />
                </div>
                <button type="submit" className="btn btn-primary" onClick={ handleSubmit }>Submit</button>
            </form>
        </div>
    )
}

export default Create
