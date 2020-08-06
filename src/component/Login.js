import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'

const Login = () => {
    const[email,setEmai]=useState('')
    const[password,setPassword]=useState('')
    const[err,setErr]=useState('')


    const history =useHistory()
    const singIn=(e)=>{
        e.preventDefault()
        // loginlogin
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            // create a user logged in
            history.push('/')
        })
        .catch(e=>{
            setErr(e.message)
        })
}

    const signUp=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            // create a user logged in
            history.push('/')
        })
        .catch(e=>{
            setErr(e.message)
        })
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt='amazone'
                className="login__header"/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <p className="error">{err}</p>
                <form>
                    <h5>Email</h5>
                    <input type="email" placeholder="" value={email} onChange={(e)=>setEmai(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" placeholder="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button  className='login__loginButton' onClick={singIn}>Sign In</button>
                </form>
                <p>To protect your project from abuse, we limit the number of new Email/Password and Anonymous sign-ups that your
                 application can have from the same IP address.</p>
                <button className="login__register" onClick={signUp}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
