import logo from './logo.svg';
import './App.css';
import WrappedComp1 from './WrappedComp1';
import WrappedComp2 from './WrappedComp2';
import CounterApp from './counter/CounterApp';
import { useState } from 'react';

function App() {
const [data, setData]=useState({
  name:'',
  lastName:'',
  country:'',
  gender:'',
  hobbies:[],
})


const handleCheckbox=(value)=>{
  let newArry = data.hobbies.includes(value) ? data.hobbies.filter(item=> item != value):[...data.hobbies, value]

  setData(prev=>({...prev, hobbies:newArry}))
}

const submitFunction=(e)=>{
e.preventDefault()
console.log(data)

}

  return (
    
    <div className="App">
      <form onSubmit={(e)=>submitFunction(e)}>
      <input placeholder='name'/>
      <br />
      <input placeholder='last name' type="email" required={true}/>
      <div>
        <select value={data.country} onChange={(e)=>setData(prev=>({...prev, country:e.target.value}))}>
        <option value="">select</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Shrilanka">Shrilanka</option>
        </select>
      </div>
      <div>
        <h6>Gender:</h6>
        <div>
        <label>
          <input id="1" type="radio"  checked={data.gender=="male"} onChange={()=>setData(prev=>({...prev, gender:"male"}))}/>
          Male</label>
          <label>
          <input type="radio" id="1"  checked={data.gender=="female"} onChange={()=>setData(prev=>({...prev, gender:"female"}))}/>
          Female</label>
          <label>
          <input type="radio" id="1"   checked={data.gender=="other"} onChange={()=>setData(prev=>({...prev, gender:"other"}))}/>
          Other</label>
        </div>
        <div>
          <h6>Hobbies</h6>
          <label>
          <input id="4" type="checkbox"  checked={data.hobbies.includes('swimming')} onChange={()=>handleCheckbox('swimming')}/>
          Male</label>
          <label>
          <input type="checkbox" id="2"  checked={data.hobbies.includes('sleeping')} onChange={()=>handleCheckbox("sleeping")}/>
          Female</label>
          <label>
          <input type="checkbox" id="3"   checked={data.hobbies.includes("eating")} onChange={()=>handleCheckbox("eating")}/>
          Other</label>
        </div>
      </div>
      <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
