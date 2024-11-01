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
        <img src={IMG} alt="image" />
        <div className="text">
          <span className="name">Hi{' ' + name},</span>
          Thank you for your generous contribution.
          <br />
          Your support means the world to me and, more importantly,
          <br />
          to the children and families who benefit from Starlight’s <br />
          incredible programs.
          <span className="special">
            With heartfelt appreciation,
            <br />
            Pratistha
          </span>
        </div>
      </div>

      <label htmlFor="name">Name : </label>

      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
      />

      <button
        type="button"
        onClick={() => {
          if (!name) alert('Please enter your name');
          if (name) exportComponentAsPNG(printRef);
        }}
      >
        Print
      </button>
    </>
  );
};

export default App;
