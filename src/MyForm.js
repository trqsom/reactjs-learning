import { useState } from "react"

export default function MyForm() {
    const [valueUser,setValueUser] = useState({name:"",email:"",status:""})
    

    return(
        <div>
<form onSubmit={(event)=>{alert("Tariq said alshukaili")}}>
    <label>
        Name:
    </label>
    <input value={valueUser.name} onChange={(event)=>{setValueUser({...valueUser,name:event.target.value})}}/>
    <hr/>
    <label>
        Email:
    </label>
    <input value={valueUser.email} onChange={(event)=>{setValueUser({...valueUser,email:event.target.value})}}/>
    <hr/>

    <button>submit</button>
</form>
        
        </div>
    )
}