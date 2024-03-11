
import { useState } from "react";
import './ChatGPT.css';


// const configuration = new Configuration({
    
//     apiKey: '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'
// });
const API_KEY = "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";


export function ChatGPT() {
    const [chat, setChat] = useState([]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const message = e.target.message.value;
      setChat([...chat, message]);
  
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "you are a professor/teacher now answer queries" },
              { role: "user", content: message }, // Use the user's input as content
            ],
            max_tokens: 150, // Adjust as needed
          }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log(data)
  
        if (data.choices && data.choices.length > 0) {
          console.log(data.choices[0].text);
          setChat([...chat, message, data.choices[0].message.content]);
        } else {
          console.error("Invalid response from OpenAI API:", data);
        }
      } catch (error) {
        console.error("Error calling OpenAI API:", error);
      }
    };
  
    return (
      <div id="Gpt">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <div id='chat'>
            {chat.map((mess, index) => (
              index % 2 === 0 ?
                <div className="flex-right" key={index}><div className='mess' id='mess0'>
                  <p>{mess}</p>
                </div></div> :
                <div className="flex-left" key={index}><div className='mess' id='mess1'>
                  <p>{mess}</p></div>
                </div>
            ))}
          </div>
          <input type="text" id='message' />
          <button type='submit' id="send">send</button>
        </form>
      </div>
    );
  }
  
