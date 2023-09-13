import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture";
import Congrats from "../../assests/images/congrats1 (1).png";

const botName = 'Libby'
const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}. Ask me questions like what to study and where the Hafield campus is situated so you dont get lost. I'm here to help.`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  widgets:[
    {
      widgetName:'dogPicture',
      widgetFunc: (props)=> <DogPicture {...props}/>,
    },
    {
      widgetName:'congrats',
      widgetFunc: (props)=> <img src={Congrats} alt="Conratulations" style={{width:'75%'}}/>,
    }
  ]
}

export default config