import React, { useState } from 'react';
import './App.css';
import Modal from './Components/Modal';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={()=> setIsOpen(true)}>Open Modal</button>

      <Modal open={isOpen}>
        Fancy Modal
      </Modal>
    </div>

  );
}

export default App;
