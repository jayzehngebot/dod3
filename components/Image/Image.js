/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Image.scss'; // BRING IN REQUISITE SCSS STYLESHEET
import Location from '../../lib/Location'; // not really sure what this is about

// function isLeftClickEvent(event) {
//   return event.button === 0;
// }

// function isModifiedEvent(event) {
//   return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
// }

class Image extends Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    state: PropTypes.object,
    // onClick: PropTypes.func,
  };

  // static handleClick = event => {
  //   let allowTransition = true;
  //   let clickResult;

  //   if (this.props && this.props.onClick) {
  //     clickResult = this.props.onClick(event);
  //   }

  //   if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
  //     return;
  //   }

  //   if (clickResult === false || event.defaultPrevented === true) {
  //     allowTransition = false;
  //   }

  //   event.preventDefault();

  //   if (allowTransition) {
  //     const Image = event.currentTarget;
  //     Location.pushState(
  //       this.props && this.props.state || null,
  //       this.props && this.props.to || (Image.pathname + Image.search));
  //   }
  // };

  render() {
    // const { to, ...props } = this.props;
    return <img src=this.props.src>;
  }

}

export default Image;
