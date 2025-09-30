"use client"
import { signIn,signOut,useSession } from "next-auth/react"

export const Appbar=()=>{
    const session = useSession();
    const{status} = session;
     if(status==='loading'){
        return <div>
            loading...
        </div>
     }
    if(status==='authenticated'){
      return <div>
        <button onClick={()=>{
           signOut();
        }}>
            logout
        </button>
        {JSON.stringify(session)}
      </div>
    }
    else
    return <div>
        <button onClick={()=>{
            signIn();
        }}>Signin</button>
        

    </div>
}