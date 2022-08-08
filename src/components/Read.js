import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';



const Read = () =>
{

  const [ data, setData ] = useState( [] );
  const[inputText,setInputText]=useState("");
  const [ tabledark, setTableDark ] = useState( "" )
  function getData ()
  {
    axios.get( "https://62e8a173249bb1284eb13c60.mockapi.io/suraj" )
      .then( ( res ) =>
      {
        // console.log( res.data );
        setData( res.data )
      } )
  }
  function handleDelete ( id )
  {
    axios.delete( `https://62e8a173249bb1284eb13c60.mockapi.io/suraj/${ id }` )
      .then( () =>
      {
        getData();
      } )
  }
  const setToLocalStorage = ( id, name, email ) =>
  {
    localStorage.setItem( "id", id )
    localStorage.setItem( "name", name )
    localStorage.setItem( "email", email )
  }
  useEffect( () =>
  {
    getData();
  }, [] )
  const inputHandler=(e)=>{
    setInputText(e.target.value.toLowerCase())
  }
  return (
    <div className='container'>

      <div className="form-check form-switch my-3">
        <input className="form-check-input" type="checkbox" onClick={ () =>
        {
          if ( tabledark === "table-dark" )
            setTableDark( "" );
          else setTableDark( "table-dark" )

        } } />
      </div>
      <div className='d-flex justify-content-between'>
        <h2> Read operation</h2>
        <form>
        <input className="form-control sm" type="search" placeholder="type here" onChange={inputHandler} />
        </form>
        <NavLink to={ "/" }> <button type="button" className="btn btn-primary  
           my-3">Create</button></NavLink>
      </div>
      <table className={ `table ${ tabledark }` }>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">edit</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        {data.filter((el)=>{
          if(el===""){
            return el
          }
          else{
            return(el.name.toLowerCase().includes(inputText))
          }
        }).map( ( eachData ) =>
          {
            return (
              <>
                <tbody>
                  <tr key={ eachData.id }>
                    <th scope="row" >{ eachData.id }</th>
                    <td>{ eachData.name }</td>
                    <td>{ eachData.email }</td>
                    <td>
                      <NavLink to="/update"><button type="button" className="btn btn-primary" onClick={ () => setToLocalStorage( eachData.id, eachData.name, eachData.email ) }>Edit</button></NavLink> </td>
                    <td><button type="button" className="btn btn-danger" onClick={ () => handleDelete( eachData.id ) }>Delete</button></td>
                  </tr>
                </tbody>
              </> )
          } )
        }
      </table>
    </div>
  )
}

export default Read