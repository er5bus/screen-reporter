import React from 'react'
import { Transition, TransitionGroup } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 0.5 },
  exiting:  { opacity: 1 },
  exited:  { opacity: 1 },
};


export default ({ children, in: inProp }) => (
  <Transition
    in={inProp}
    timeout={{enter: 500,exit: 500}}
    classNames="fade-in"
    appear={true}
    enter={true}
    exit={true}
  >
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
      { children }
      </div>
    )}
  </Transition>
);
