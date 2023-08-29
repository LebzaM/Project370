import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you. What can I help you with today?');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleCourse = () => {
    const botMessage = createChatBotMessage('The courses in the BIS faculty will make sure that you are fully equipped with the skills necessary to handle 4IR in this day and age.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleInformation = () => {
    const botMessage = createChatBotMessage('You can find more information by simply following the link below `https://www.up.ac.za/information-science/article/1821926/bis-specialising-in-information-science`');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleStudy = () => {
    const botMessage = createChatBotMessage('With the BIS program you can choose to study any of the 3 programs. 1. BIS Information Science. 2 BIS Multimedia. 3. BIS Publishing. For more information just scroll below.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  
  
    const handleDog = () => {
      const botMessage = createChatBotMessage(
        "Here's a picture of the UP Hatfield Campus so you don't get lost. You can also view the virtual tour below.",
        {
          widget: 'dogPicture',
        }
      );
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    };
  
  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handleStudy,
            handleCourse,
            handleInformation,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;