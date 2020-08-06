import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import uuid from 'uuid'
import { Link } from 'react-router-dom'

const Successful = () => {

    const[collection,setColection]=useState([])

    useEffect(()=>{
        db.collection('amazon-shipp').onSnapshot(snap=>{
            setColection(snap.docs.map(doc=>
                doc.data()
            ))
        })
    },[])
    console.log(collection)
    return (
        <div>
                <div className='login'>   
                <h1 style={{opacity:0,fontSize:'5rem'}}>HEllo</h1>         
                    <div className="login__container">
                        <h5 style={{padding:15}}>Successfully Placed your order</h5>
                        <h4>Order Id:<small style={{textDecoration:'underline',color:"blue"}}> {uuid()}</small></h4>
                        <form>
                            <h5>Thanking You..</h5>
                            <p><Link to='/'>go to more shopping..</Link></p>            
                        </form>               
            </div>
        </div>
        </div>
    )
}

export default Successful