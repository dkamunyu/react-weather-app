const React = require('react');
let {Link} = require('react-router');
//let Examples = React.createClass({
//    
//    render: function() {
//        return(
//        <h3>Examples Component</h3>
//        );
//    }
//});

let Examples = (props)=> {
    return(
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out</p>
            <ol>
                <li>
                    <Link to="/?location=London">London, GB</Link>
                </li>
                <li>
                    <Link to="/?location=New York">New York, USA</Link>
                </li>
            </ol>
            
        </div>
        
    );
    
}

module.exports = Examples;