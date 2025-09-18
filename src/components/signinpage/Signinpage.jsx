 import React,{useState} from 'react'
import logo from '../../assets/attrallogo.png'
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'
import facebook from '../../assets/facebook.png'
import './Signinpage.css'
import { Link } from 'react-router-dom';
export const Signinpage = () => {
   const [expanded, setExpanded]=useState(false);
    const handleClick = ()=>{
      setExpanded(!expanded);
    };
  
  
  return (
    <div>
      
        <div className='Signinpage'>
            <img className='signin-attral' src={logo}alt="attral" />
            <a href='https://techbrainnetworks.com/' className='signin-Poweredby '>Powered by <span className='signin-techbrain'>TechBrain Networks</span></a>
        </div>

        <div className={`signin-container ${expanded ? 'expanded' : ''}`}>
          <h1 className='signin-tittle '>Sign in</h1>
          <div className='signin-input-box'>
          <input type="email" placeholder='Enter your email ID' />
          </div>
          <div className='signin-input-box'>
          <input type="password" placeholder='Enter your password' />
           </div>
          <div className='signin-input-box'>
            <button className='signup-button'>Sign in </button>
            <div>
            <p className='or-signup'>or sign up with</p>
            </div>
            <div className='signin-social-icon'>
              <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&dsh=S923705133%3A1755240909638246&flowEntry=ServiceLogin&flowName=GlifWebSignIn&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AdBytiNJEEZp61ZvHvgzv_9DIiUqhrZNclj7ya7FMIcV5O9Js2f6FZ7_XmyOiMu2us0KrDjpYC--Cw">
              <img src={google} alt="google-login" />
              </a>
                <a href="https://account.apple.com/sign-in">
                <img src={apple} alt="apple-logo" />
                </a>        
                <a href="https://www.facebook.com/">
                <img src={facebook} alt="facebook-logo" />
                </a>
                <span className='no-account'>Don't have an account ? <Link to="/Signuppage" className='signin' onClick={handleClick}>{expanded ? 'Close' : 'Sign up'} </Link>   </span>
              </div>
          </div>
        </div>
    </div>
  )
}
export default Signinpage   