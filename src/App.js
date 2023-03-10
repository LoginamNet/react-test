import './App.css';
// import { Planet } from './Planet';
// import { User } from './User';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount(count - 1);
  }

  const setCountToZero = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={setCountToZero}>Set to Zero</button>

      <h2>{count}</h2>
    </div>
  );
}

// function App() {
//   const [showText, setShowText] = useState(true);
//   const [textColor, setTextColor] = useState("green");

//   return (
//     <div className="App">
//       <button onClick={() => {
//         setShowText(showText ? false : true);
//       }}> Show/Hide </button>
//       {showText && <h2>TEXT TO SHOW</h2>}
//       <button onClick={() => {
//         setTextColor(textColor === "green" ? "red" : "green");
//       }}>Repaint</button>
//       <h2 style={{ color: textColor }}>TEXT TO COLOR</h2>
//     </div>
//   );
// }

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value)
//   }
//   return (
//     <div className="App">
//       <input type="text" onChange={handleInputChange} />
//       {inputValue}
//     </div>
//   );
// }

// function App() {
//   const [age, setAge] = useState(0);

//   const increaseAge = () => {
//     setAge(age + 1);
//   };
//   return (
//     <div className="App">
//       {age}
//       <button onClick={increaseAge}> Increase Age </button>
//     </div>
//   );
// }

// function App() {
//   const planets = [
//     { name: "Mars", isGasPlanet: false },
//     { name: "Earth", isGasPlanet: false },
//     { name: "Jpiter", isGasPlanet: true },
//     { name: "Venus", isGasPlanet: false },
//     { name: "Uranus", isGasPlanet: true },
//   ];

//   return (
//     <div className="App">
//       {planets.map((planet, key) =>{
//         return (
//           <Planet key={key} name={planet.name} isGasPlanet={planet.isGasPlanet} />
//         )
//       })}
//     </div>
//   );
// }

// function App() {
//   const users = [
//     { name: "Sasha", age: 32 },
//     { name: "Olga", age: 21 },
//     { name: "Ivan", age: 45 },
//   ];

//   return (
//     <div className="App">
//       {users.map((user, key) =>{
//         return (
//           <User key={key} name={user.name} age={user.age} />
//         )
//       })}
//     </div>
//   );
// }

// function App() {
//   const names = ["Olga", "Igor", "Gleb", "Ivan", "Petya"];

//   return (
//     <div className="App">
//       {names.map((name, key) =>{
//         return <h2 key={key}>{name}</h2>
//       })}
//     </div>
//   );
// }


// function App() {
//   const age = 17;
//   const isGreen = true; 

//   return (
//     <div className="App">
//       {age <= 18 ? <h1>UNDER AGE</h1> : <h1>OVER AGE</h1>}
//       <h1 style={{ color: isGreen ? "green" : "red" }}>COLORED</h1>
//       </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <User name="Sasha" age="32" email="1@test.com" />
//       <Job salary={90000} position="Senior SDE" company="Amazon" />
//     </div>
//   );
// }

// function User(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h2>{props.email}</h2>
//     </div>
//   );
// }

// function Job (props) {
//   return (
//     <div className="table">
//       <span>{props.salary}</span>
//       <span>{props.position}</span>
//       <span>{props.company}</span>
//     </div>
//   );
// }

export default App;
