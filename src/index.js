import React from 'react';
import ReactDOM from 'react-dom';
import './Stylesheets/css/index.css';

var MasterComponent = React.createClass({

  render: function() {
    return (
      <div>Hello</div>
    )
  }
});

ReactDOM.render(
  <MasterComponent />,
  document.getElementById('root')
);
