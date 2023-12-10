import React, { useState } from 'react'
import AllRoute from '../router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {

  const [open, setOpen] = useState(true)
  const [email, setemail] = useState('')

  const SubmitHandler = (e) => {
    e.preventDefault()
  }


  return (
    <div className="App" id='scrool'>
      <AllRoute />
      <ToastContainer />

      

      
    </div>
  );
}

export default App;