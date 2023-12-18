import styles from './App.module.css'
import Display from './components/Display';
import Button  from './components/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  let [calval,setcalval]=useState('');
  const OnbuttonClick =(item)=>
  {
    if(item==='c')
    {
      setcalval("")

    } else if(item==='=')
    {
      const result=eval(calval);
      setcalval(result)

    }
    else{
      const newDisplayvalue=calval +item
      setcalval(newDisplayvalue);
    }
  
  
  console.log(item)
  }
  return  <div  className={styles.calculator}>
    <Display DisplayValue={calval}></Display>
    <Button onButtonclick={OnbuttonClick}></Button>
    
    
  </div>
    
  
}

export default App;
