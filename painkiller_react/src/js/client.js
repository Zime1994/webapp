import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"


import Test from "./components/Paper"
import Header from "./components/Header"
import Dashboard from "./pages/dashboard"
import Roomcode from "./pages/roomcode"
import Selection from "./pages/selection"
import Chart from "./pages/chart"
import Drawer from "./components/drawer"

import Alert from "./components/alert"

import store from "./store"



const app = document.getElementById('app');

// In diesem Projekt wurde schon der React Router genutzt. Der Wechsel der Views ist in pages/Layout.js abgebildet.
ReactDOM.render(
    <Provider store={store}>
      <div>
<Header />
<Drawer />


        </div>
    </Provider>,
    app);
