import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }
    if (message.includes('hey')) {
      actions.handleHello();
    }
    if (message.includes('campus')) {
      actions.handleDog();
    }
    if(message.includes('study')){
      actions.handleStudy()
    }
    if(message.includes('course')){
      actions.handleCourse();
    }
    if(message.includes('information')){
      actions.handleInformation();
    }
    //More
    if (message.includes('Hello')) {
      actions.handleHello();
    }
    if (message.includes('Hey')) {
      actions.handleHello();
    }
    if (message.includes('Campus')) {
      actions.handleDog();
    }
    if(message.includes('Study')){
      actions.handleStudy()
    }
    if(message.includes('Course')){
      actions.handleCourse();
    }
    if(message.includes('Information')){
      actions.handleInformation();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;