// var React = require('react');
// var Markdown = require('react-remarkable');

// var MyComponent = React.createClass({

import React, { Component } from 'react';
import Markdown from 'react-remarkable';

export default class extends Component {

    render() {
    return (
      <div>
        <Markdown>

          ## Reasons React is great

          ### Whatever

          1. Server-side rendering
          2. This totally works:
          Pretty neat!

        </Markdown>
      </div>
    );
  }

}


