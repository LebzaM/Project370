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

  const handleSecret = () => {
    const botMessage = createChatBotMessage('I see you found the secret feature. What is the first building at the University of Pretoria?');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleAnswers = () => {
    const botMessage = createChatBotMessage('Congratulations! The Old Arts Building, on the main campus of the University of Pretoria, was one of the first structures built there. The building is located on the eastern side of an open courtyard facing the University of Pretoria Faculty of Engineering.',
    {
      widget: 'congrats',
    });
    

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  
  
    const handleDog = () => {
      const botMessage = createChatBotMessage(
        "The university of pretoria is located on Lynnwood Rd, Hatfield, Pretoria, 0002. Here's a picture of the UP Hatfield Campus so you don't get lost. You can also view the virtual tour below.",
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
            handleSecret,
            handleAnswers,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;