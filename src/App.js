import React, { useState } from 'react';
import logo from './img/logo.png';
// import './App.css';
import './index.css';
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import About from './components/About.js'
import SkillsServices from './components/SkillsServices';
import Projects from './components/Projects';

function App() {
  // const [counter, setCounter] = useState(0)
  // const incrementer = () => {
  //   setCounter(counter + 1)
  // }

  // const [toggle, setToggle] = useState(false)
  // const elementToggle = () => {
  //   setToggle((prev) => !prev)
  // }

  const name = "Haziq Shahrahman"
  const benefits = ['Tahan panas', 'Tahan badai', 'Tahan api']
  const listBenefits = benefits.map((itemBenefit) =>
    <li key={itemBenefit}>{itemBenefit}</li>
  )
  return (
    <main className="App font-body">
      {/* <h1 className={toggle ? "text-7xl" : "text-5xl"}>Hello World</h1>
      <h1>Clicked {counter} times</h1>
      <button onClick={incrementer}>Click here</button>
      <br></br>
      <button onClick={elementToggle}>Toggle Here</button> */}
      <Navbar />
      <Header name={name} />
      <About />
      <SkillsServices />
      <Projects />
      {/* <div className="py-32">
        <p>Rp 3.000.000</p>
        <CheckDiscount isDiscount="y" />
        <ul>
          {listBenefits}
        </ul>
        <ReviewItems />
      </div> */}
    </main>
  );
}

function TambahCart(e) {
  return console.log(`Anda mengklik ${e}`)
}

function ReviewItems() {
  const user = [
    {
      "id": 1,
      "name": "Haziq Shahrahman",
      "review": "Mantap dan bagus"
    },
    {
      "id": 2,
      "name": "Ahmad Suripto",
      "review": "Mantap dan bagus"
    },
    {
      "id": 3,
      "name": "Abdul Dudul",
      "review": "Mantap dan bagus"
    }
  ]
  const listReview = user.map((itemReview) =>
    <div>
      <h1>{itemReview.name}</h1>
      <p>{itemReview.review}</p>
    </div>
  )

  return (
    <div>
      <h1>Reviews</h1>
      {listReview}
    </div>
  )
}

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount === "y") {
    return (
      <p>Diskon 50% sekarang</p>
    )
  } else {
    return (
      <p>Belum ada diskon</p>
    )
  }
}

export default App;
