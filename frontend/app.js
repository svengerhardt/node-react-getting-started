import React from "react"
import ReactDOM from 'react-dom';
import { Router, browserHistory } from "react-router";
import routes from "./routes"
import "./sass/bootstrap.scss"

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, window.document.getElementById('app'));
