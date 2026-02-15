import { useState } from "react";
import { getContract } from "../contract";

export default function HR(){

const [employee,setEmployee]=useState("");
const [salary,setSalary]=useState("");

async function start(){

const c=await getContract();

const tx=await c.startStream(
employee,
BigInt(salary),
10
);

await tx.wait();

alert("Stream started");

}

return(

<div style={page}>

<h1>🏢 HR Dashboard</h1>

<input
placeholder="Employee wallet"
style={input}
onChange={e=>setEmployee(e.target.value)}
/>

<input
placeholder="Monthly salary (wei)"
style={input}
onChange={e=>setSalary(e.target.value)}
/>

<button onClick={start} style={btn}>
Start Stream
</button>

</div>
);
}

const page={padding:40,color:"white",minHeight:"100vh",background:"#020617"};
const input={display:"block",marginTop:10,padding:12,width:300};
const btn={marginTop:20,padding:12};
