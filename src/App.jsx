import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";

import Header from './Components/Header'
import Nav from './Components/Nav'
import Home from './Components/Home'
import SingleReview from './Components/SingleReview';
import { userContext } from "./Contexts/userContext";
import User from './Components/User';
import SelectUser from './Components/SelectUser';
import CategoriesList from './Components/CategoriesList';
import AllReviews from './Components/AllReviews';


function App() {

  const [user, setUser] = useState('new user')

  return (
    <>
      <userContext.Provider value={[user, setUser]}>
      <Header />
      <Nav />
      <User />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<AllReviews />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/signin" element={<SelectUser />} />
        </Routes>
      </userContext.Provider>
    </>
  )
}

export default App
