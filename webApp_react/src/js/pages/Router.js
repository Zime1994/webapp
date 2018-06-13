import React from 'react';

import {HashRouter, Route, Link} from 'react-router-dom';

import Test from "../components/Paper"
import Header from "../components/Header"
import Dashboard from "./dashboard"
import Roomcode from "./roomcode"
import Selection from "./selection"
import Chart from "./chart"
import Drawer from "../components/drawer"
import Headline from "../components/headline"



export default class Router extends React.Component{


render(){

  return(



    <HashRouter>

    <div>
    <Header />
    <Route exact path="/selection" component={Selection}/>
    <Route exact path="/roomcode" component={Roomcode}/>
    <Route exact path="/home" component={Dashboard}/>
    <Route exact path="/chart" component={Chart}/>
    <Route exact path="/dashboard" component={Dashboard}/>




        </div>
        </HashRouter>


  );
}

}
