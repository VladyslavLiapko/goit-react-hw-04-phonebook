


import { useState } from "react";
import styles from "./ContactForm";



export default function ContactForm({ onSubmit }){
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
   
  };

   const reset = () => {
    setName('');
    setNumber('');
  };

  
 
    return (
      <>
      <form className={styles.TaskEditor} onSubmit={handleSubmit}>
          <label htmlFor="name" className={styles.TaskEditor_label} >Name</label>
          <br/>
          <input
            id="name"
            className={styles.TaskEditor_input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}/>
          <br/>
        
          <label htmlFor="number" className={styles.TaskEditor_label} >Number</label>
          <br/>
          <input
            id="number"
            className={styles.TaskEditor_input}
            type="text"
            name="number"
            value={number}
            onChange={handleChange}/>
          <br/>
        <button className={styles.TaskEditor_button} type="submit">
          Add contact
        </button>
        </form>
        </>
    );
}
  



