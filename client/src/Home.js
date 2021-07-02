import React from 'react'
import { Route } from 'react-router'
import App from './App'
import Check from "./Check"

const Home = () => {
    return (
        <div>
            <Route exact path="/"><App /></Route>
            <Route path = "/check"><Check/></Route>
        </div>
    )
}

export default Home
