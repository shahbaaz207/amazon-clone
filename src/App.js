import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'
import Checkout from './component/Checkout'
import Successful from './component/Successful'
import Login from './component/Login'
import { useStateValue } from './component/StateProvider'
import { auth } from './firebase'
import ShippingAddress from './component/ShippingAddress'

const App = () => {

    const [{user},dispatch]=useStateValue()

    useEffect(()=>{
      const unSubs=auth.onAuthStateChanged((authuser)=>{
        if(authuser){
          // logged in
          dispatch({
            type:"SET_USER",
            user:authuser
          })
        }else{
          // loggd out
          dispatch({
            type:"SET_USER",
            user:null

          })
        }
      })
      return ()=>{unSubs()}
    },[])

  return (
    <Router>   
      <div className='App'>
        <Switch>
            <Route exact path="/">
              <Header/>
              <Home/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/checkout">
              <Header/>
              <Checkout/>
            </Route> 

            <Route exact path="/shipping" >
            <Header/>
            <ShippingAddress/>
            </Route>
            <Route exact path="/success" >
            <Header/>
            <Successful/>
            </Route>
        </Switch>
      </div>
    </Router>

  
  )
}

export default App
