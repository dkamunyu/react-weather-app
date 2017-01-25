const React = require('react');

let WeatherForm = React.createClass({
    onFormSubmit: function(e) {
       e.preventDefault(); 
       let location = this.refs.location.value;
        
        if(location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    
    
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="location"/>
                <button className="button expanded">Get weather</button>
        </form>
            
        );
        
    }
    
});

module.exports = WeatherForm;