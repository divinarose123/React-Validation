import React, { useState } from 'react'
import Form from './Form.css'
import validator from 'validator'
import Success from './Success'


function MyForm ()  {

    const [name, setName] = useState('')
    const [nameError, nameSetError] = useState('')
    const [ email, setEmail] = useState('')
    const [ emailError, emailSetError] = useState('')
    const [ userName, setUserName] = useState('')
    const [ userError, userSetError] = useState('')
    const [ password, setPassword] = useState('')
    const [ passwordError, passwordSetError] = useState('')
    const [ confirmPassword, setConfirmPassword] = useState('')
    const [ confirmPasswordError, confirmPasswordSetError] = useState('')
    const [ websiteName, setWebsiteName] = useState('')
    const [ websiteError, websiteSetError] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        let formSubmitted = true
        if (name == "") {
            nameSetError('-cannot be blank')
            formSubmitted = false
        } else {
            nameSetError('')
        }

        if (email == "") {
            emailSetError('-cannot be blank')
            formSubmitted=false
        } else {
            emailSetError("")
        }

        if(validator.isEmail(email)) {
            
        } else {
            emailSetError('-email is not valid')
        }

        if(userName == "") {
            userSetError('Cannot be blank')
            formSubmitted=false
        } else {
            userSetError('')
        }

        if (password == "") {
            passwordSetError(' is blank')
            formSubmitted=false
        } else {
            passwordSetError('')
        }

        if (confirmPassword == "") {
            confirmPasswordSetError('-must match password')
            formSubmitted=false
        } else {
            confirmPasswordSetError('')
        }

        if (validator.isURL(websiteName)) {

        } else { 
            websiteSetError('-url is not valid')
            formSubmitted=false
        }
    }


    return (
        
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label
                className={nameError ? "error" : "" }
                htmlFor="fname">Name {nameError}</label>
                <input 
                id="fname" 
                type="text" 
                onChange={(e) => setName(e.target.value)} 
                className={nameError ? "inputError" : ""} />
                </fieldset>
                <fieldset>
                <label 
                htmlFor="email" 
                className={emailError ? "error" : "" }>
                Email {emailError}</label>
                <input id="email" 
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                className={emailError ? "inputError" : ""}/>
                </fieldset>
                <fieldset>
                <label 
                className={userError ? "error" : "" }
                htmlFor="username">Username{userError}</label>
                <input 
                id="username" 
                type="text" 
                onChange={(e) => setUserName(e.target.value)} 
                className={userError ? "inputError" : "" }/>

                </fieldset>
                <fieldset>
                <label 
                className={passwordError ? "error" : "" }
                htmlFor="pwd">Password{passwordError}</label>
                <input id="pwd" 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                className={passwordError ? "inputError" : "" }/>
                </fieldset>
                <fieldset>
                <label 
                className={confirmPasswordError ? "error" : "" }
                htmlFor="confirmPwd">Confirm Password{confirmPasswordError}</label>
                <input id="confirmPwd" 
                type="password"  
                onChange={(e) => setConfirmPassword(e.target.value)} 
                className={confirmPasswordError ? "inputError" : "" }/>
                </fieldset>
                <fieldset>
                <label 
                className={websiteError ? "error" : "" }
                htmlFor="website">Website{websiteError}</label>
                <input id="website" 
                type="url" 
                onChange={(e) => setWebsiteName(e.target.value)} 
                className={websiteError ? "inputError" : "" }/>
            </fieldset>
          <fieldset>
          <button type="submit">Submit</button>
          </fieldset>
        </form>
        
        
    )
}




export default MyForm;