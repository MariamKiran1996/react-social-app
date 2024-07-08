import React from 'react'
import loginInsta from '../assets/images/login.png'

export default function Login() {
  return (
    <>
    <div className='loginWrap'>
        <div className='left'>
            <img alt='insta' height='' width='' src={loginInsta} />
        </div>
        <div className='right'>
            <div className='borderWrap'>
                <h1>Instagram</h1>
                <form>
                    <input type='text' placeholder='Phone number, username or email' />
                    <input type='text' placeholder='Password' />
                    
                    <button></button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
