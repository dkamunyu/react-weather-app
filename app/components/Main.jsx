const React = require('react');
let Nav = require('Nav');
let Weather = require('Weather');
let About = require('About');

let Main = React.createClass({
    render: function() {
       return(
        <div>
               <Nav />
               <h2>Main Component</h2>
               {this.props.children}
               
            
        </div>
           
        
       ); 
        
    }
    
});

module.exports = Main;