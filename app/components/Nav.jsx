const React = require('react');
let {Link, IndexLink} = require('react-router');

let    Nav = React.createClass({
        render: function() {
            return (
                <div>
                    <h1>Nav Component</h1>
                    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                    <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                    <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>

                </div>
            
            );
        }
    });

module.exports = Nav;