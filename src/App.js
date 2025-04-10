import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const[counter,setCounter] = useState(0);
  const[backgroundColor,setBackgroundColor] = useState("#ffffff")
  const handleIncrease = ()=>{
    setBackgroundColor(changeColor())
    setCounter(counter+1)
  }
  const handleDecrease = () => {
    const newCounter = counter - 1;
    setCounter(newCounter);
  };

  useEffect(()=>{
    if(counter ===0){
      setBackgroundColor("#ffffff")
    }else{
      setBackgroundColor(changeColor())
    }
  },[counter])
  

const changeColor = ()=>{
  let letters = "123456789ABCDE"  
  let color = "#"
  for (let index = 0; index < 6; index++) {
     color += letters[Math.floor(Math.random()*16)];
  }
  return color
}


  return (
    <div className="App" style={{margin:0,padding:0, backgroundColor:`${backgroundColor}`,height:"100vh"}}>
      <h1>Counter App</h1>
      <div  style={{display:"flex",justifyContent:"center",height:"100%"}}>
      <div className='counter-box' >
      <button className='btn' onClick={()=>handleIncrease()} >+</button>
        <h1 style={{color:"black"}}>{counter}</h1>
      <button className='btn' disabled={counter === 0} onClick={handleDecrease} >-</button>  
      </div>
      </div>
    </div>
  );
}

export default App;
