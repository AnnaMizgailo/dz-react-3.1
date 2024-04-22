import { useState } from "react"

const Warming = ({data}) =>{
    console.log(data);
    return(
        <>
        <h1>Hello, {data.login}!</h1>
        <h2>We know that your email is {data.email}</h2>
        <h3>Your age is {data.age}</h3>
        <h3>Your gender is </h3>
        {data.gender === 'f'? <h3>female</h3> : data.gender === 'm'? <h3>male</h3> : <h3>undefined</h3>}
        </>
    )
}

export default Warming;