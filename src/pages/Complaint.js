import logo from './logo.svg';
import { useState } from 'react';
import Navbar from '../components/Navbar'

function App() {



  const [formData, setFormData] = useState({ firstName: '',
   lastName: '', email: '', comments: '', isvisible:true, mode:'', favCar:"" });


  

  function ChangeHandler(event) {
    const{name, value, checked, type} = event.target
    setFormData((prevFormData) => {
        return {
        ...prevFormData,
        [name] : type ==="checkbox" ? checked : value
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("finally printing the entire form ka data......")
    console.log(formData)
  }


  return (
    
    <div className='App'>
          <Navbar/>


      <form onSubmit={submitHandler}>

       <label> First Name</label>
       
        <input 
        
          type='text'
          placeholder='Aditya'
          onChange={ChangeHandler}
          name='firstName'
          value={formData.firstName}
        />

        <label> Last Name</label>

        <input
          type='text'
          placeholder='Jack'
          onChange={ChangeHandler}
          name='lastName'
          value={formData.lastName}
        />

        <label> Email </label>

        <input
          type='email'
          placeholder='jack8820@gmail.com'
          onChange={ChangeHandler}
          name='email'
          value={formData.email}
        />
        
        <label> Comments </label>

        <textarea
        placeholder='enter your comments here'
        onChange={ChangeHandler}
        name='comments'
        value={formData.comments}
        />

        <br/>
        <br/>

       <fieldset>
          <legend> MODE: </legend>
        
          <input
        type='radio'
        onChange={ChangeHandler}
        name='mode'
        value='online-Mode'
        id='online-Mode'
        checked={formData.mode === "online-Mode"}
       />
      <label htmlFor='online-Mode'> ONLINE </label>

    <input
        type='radio'
        onChange={ChangeHandler}
        name='mode'
        value='offline-Mode'
        id='offline-Mode'
        checked={formData.mode === "offline-Mode"}
        />
       <label htmlFor='offline-Mode'>CASH</label>

       </fieldset>

       <label htmlFor='favCar'> Complaint type  </label>

       <select 
        onChange={ChangeHandler}
        name="favCar"
        id='favCar'
        value={formData.favCar}
        >
          <option value="scorpio"> double payment </option>
          <option value="fartuner">bank server</option>
          <option value="thor">internet </option>
          <option value="bolero">money debited but not credited</option>1
          <option value="rangerovar">other </option>

        </select>

      {/* <input type='submit' value="submit" />  */}
      <br/>
      <br/>

      <button>
        submit
      </button>

      </form>
    </div>
  );
}

export default App;
