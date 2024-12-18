import React, { useState } from 'react'
import './Style.css'

const PasswordGenerator = () => {
    const [password, setPassword] = useState("")
    const [copyHsg, setCopyHsg] = useState(false)

    const generatePassword = ()=>{
        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ1234567890!~`@#%^&*'$?,.+_\-/(){}[]|"
        let password = ""
        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random()* characters.length);
            password += characters[randomIndex]
            
        }
        setPassword(password)
    }
    const copyMessage = ()=>{
        navigator.clipboard.writeText(password)
        setCopyHsg(true)
        setTimeout(()=>{
            setCopyHsg(false)
        }, 2000)
    }
  return (
    <>
    <div className='password-generator'>
        <h2>Generate a random Password</h2>
        <div className='password-display'>
            <input type="text" value={password} readOnly/>
            <button onClick={copyMessage}>
                <span role='img' aria-label='copy'>copy</span>
            </button>
        </div>
        {copyHsg && <div className='copy-message'>Password copy to the clipboard!</div>}
        <button className="generator-button" onClick={generatePassword}>
            <span role='img' aria-label='light'></span> Generate Password
        </button>
    </div>
    </>
  )
}

export default PasswordGenerator