"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"
export default function Signin(){
    const[phone,setPhone] = useState("");
    const[password,setPassword] = useState("");


return <div>
   <div>
     <input type="text" placeholder="9898989898" name="Phone Number" 
     onChange={(e)=>{
      setPhone(e.target.value);
     }}/>
    <input type="password" name="Password" placeholder="password" onChange={(e)=>{
        setPassword(e.target.value);
    }}/>
   </div>
    <div>
       <button onClick={async()=>{
            const res = await signIn("credentials",{
                phone: phone,
                password: password,
                redirect: false
                
            
           })
           
        }}>Signin</button>
    </div>
</div>
}