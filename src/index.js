// React Imports
import React from 'react';
import ReactDOM from 'react-dom';

// JSX Components Imports
import NavBar from './JSX/NavBar';

// CSS Import
import './Stylesheets/css/index.css';

var MasterComponent = React.createClass({

  render: function() {
    return (
      <NavBar />
    )
  }
});

ReactDOM.render(
  <MasterComponent />,
  document.getElementById('root')
);
