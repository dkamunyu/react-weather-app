const React = require('react');

//let WeatherMessage = React.createClass({
//    render: function() {
//        
//        let {temp, location} = this.props;
//        
//        return(
//        <p>It's {temp} in {location}</p>
//        
//        );
//    }
//});

let WeatherMessage = ({temp, location} ) => {
    
    return(
        <p>It's {temp} in {location}</p>

    );
    
}

module.exports = WeatherMessage;