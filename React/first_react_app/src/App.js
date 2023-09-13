// import Post from './components/post';
// import Timer from './components/timer';
import Form from './components/form';
// import { useState } from 'react';
import './App.css';

function App() {
  // const [show,setShow]=useState(true);

  
  return (

    <div className='App'>
    <h1>Hello React</h1>

    {/* <div>
    {show && <Timer/>}
            <button onClick={()=>{setShow(!show)}} >{show? "Hide Timer" :"Show Timer"}</button>
            </div>
     */}
     <div>
      <Form/>
     </div>

</div>
            
             
    
  );
}

export default App;
