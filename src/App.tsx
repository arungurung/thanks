import { useRef, useState } from 'react';
import './App.css';
import { exportComponentAsPNG } from 'react-component-export-image';
import IMG from './assets/image.jpg';

const App = () => {
  const printRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');

  return (
    <>
      <div className="wrapper" ref={printRef}>
        <div className="text">Hi {name}</div>
        <img src={IMG} alt="image" />
      </div>

      <label htmlFor="name">Name : </label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={() => exportComponentAsPNG(printRef)}>
        Print
      </button>
    </>
  );
};

export default App;
