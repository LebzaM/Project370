import Home from "./pages/Home";
import Chatbot from "react-chatbot-kit";
import config from "./components/chatbot/config";
import ActionProvider from "./components/chatbot/ActionProvider";
import MessageParser from "./components/chatbot/MessageParser";
import './App.css'
import 'react-chatbot-kit/build/main.css';
function App() {
  return (
    // <div className="appchat">
    //   <div style={{maxWidth: '300px'}}>
    //   <Chatbot config={config}
    //     messageParser={MessageParser}
    //     actionProvider={ActionProvider}/>
    //   </div>
    // </div>
    <Home />
  );
}

export default App;
