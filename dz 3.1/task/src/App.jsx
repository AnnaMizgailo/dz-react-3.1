import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import Form from './form'
import Warming from './warming'

function App() {
  const [user, setUser] = useState({login: ""});
  useEffect(()=>{console.log(user)}, [user]);
  return(
    <>
      {user.login  == ""? <Form returnUser = {(userDef) => {setUser({login: userDef.login, email: userDef.email, age: userDef.age, gender: userDef.gender})}}/> : <Warming data={user}/>}
    </>
  )
  
}

export default App
