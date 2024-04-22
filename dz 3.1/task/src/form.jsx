import { useState } from "react";


const Form = ({returnUser}) =>{

    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("u");
    const [age, setAge] = useState(0);


    


    const submitForm = () =>{
        if(login !== "" && email !== "" && gender !== "" && age !== 0 && validateEmail()){
          returnUser({login: login, email: email, gender: gender, age: age, email: email});
        }
      }
      const validateEmail = () =>{
          if(email.includes("@gmail.com") || email.includes("@tut.by") || email.includes("@mail.ru")){
            return true;
          }
          return false;
      }
    
      return (
        <>
          <div id="formContainer" name="form">
            <input type="text" placeholder='login' onChange={(e)=>setLogin(e.target.value)}/>
            <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
            <select onChange={(e)=>setGender(e.target.value)}>
              <option value="f">female</option>
              <option value="m">male</option>
              <option value="u">undefined</option>
            </select>
            <input type="number" placeholder="age" onChange={(e)=>setAge(e.target.value)}/>
            <button onClick={submitForm}></button>
          </div>
        </>
     
      )
}

export default Form;