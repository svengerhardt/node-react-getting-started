import React from "react"
import { Route, IndexRoute } from "react-router";
import Index from "./components/index"
import Home from "./components/home"
import Stickers from "./components/stickers/index"

export default (
    <Route path={"/"} component={Index} >
        <IndexRoute component={Home}/>
        <Route path="/stickers/:type" component={Stickers} />
    </Route>
)