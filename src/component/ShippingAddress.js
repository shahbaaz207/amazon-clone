import React from 'react'
import { useState } from 'react'
import { db } from '../firebase'
import { useHistory, Link } from 'react-router-dom'

const ShippingAddress = () => {

    const [useraname,setUsername]=useState('')
    const [address,setAddress]=useState('')
    const [address2,setAddress2]=useState('')
    const [city,setCity]=useState('')
    const [pin,setPin]=useState('')
    const [mobile,setMobile]=useState('')
    const history=useHistory()
    const handleSubmit=(e)=>{
        e.preventDefault()
        db.collection('amazon-shipp').add({
            useraname:useraname,
            address:address,
            address2:address2,
            city:city,
            pin:pin,
            mobile:mobile
        })
        .then(u=>{
            history.push('/success')

        })
        .catch(err=>{
            console.log("error is",err)
        })
        setMobile('')
        setPin('')
        setUsername('')
        setAddress2('')
        setAddress('')
        setCity('')
    }
    return (
        <div className='login'>
            <div><h1 className='hide'>S</h1></div>
            <div className="login__container">
                <h1>Shipping Address</h1>
                <form >
                    <h5>Username</h5>
                    <input type="text" placeholder="" 
                    onChange={(e)=>setUsername(e.target.value)} value={useraname} required/>
                    <h5>Address 1</h5>
                    <input type="text" placeholder=""
                     onChange={(e)=>setAddress(e.target.value)} value={address} required/>
                    <h5>Address 2</h5>
                    <input type="text" placeholder="" 
                    onChange={(e)=>setAddress2(e.target.value)} value={address2} required/>
                    <h5>City</h5>
                    <input type="text" placeholder="" 
                    onChange={(e)=>setCity(e.target.value)} value={city} required/>
                    <h5>Pin Code</h5>
                    <input type="text" placeholder=""
                     onChange={(e)=>setPin(e.target.value)} value={pin} required/>
                    <h5>Mobile</h5>
                    <input type="text" placeholder="" 
                    onChange={(e)=>setMobile(e.target.value)} value={mobile} required/>
                    
                    <Link to='/success'> <button  onClick={handleSubmit} className='login__loginButton'>Submit</button></Link>
                </form>
                
            </div>
        </div>
    )
}

export default ShippingAddress
