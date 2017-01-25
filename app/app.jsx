var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="Examples" component={Examples}/>
            <IndexRoute component={Weather}/>
                        
        </Route>    
        
    </Router>,
    document.getElementById('app')
);


