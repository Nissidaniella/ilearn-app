import React, { useContext, useState, useEffect } from 'react';
import ContextProvider, { Context } from '../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip, faSwatchbook, faClipboardList, faBarsProgress, faMessage, faBell, faGear } from '@fortawesome/free-solid-svg-icons';


const ChatBox = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  }
  // State to store only the latest conversation
  const [history, setHistory] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [loadingState, setLoadingState] = useState(false); // New loading state for AI response
  const [userMessage, setUserMessage] = useState(''); // State to track user's input immediately

  // Effect to update conversation with the latest message and response
  useEffect(() => {
    // Load the recent conversation from localStorage
    const savedHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    if (savedHistory.length > 0) {
      setHistory(savedHistory);
      setSelectedConversation(savedHistory[savedHistory.length - 1]);
    }
  }, []);

  useEffect(() => {
    if (recentPrompt && resultData) {
      const newConversation = { prompt: recentPrompt, response: resultData };
      const updatedHistory = [...history, newConversation];
      setHistory(updatedHistory);
      setSelectedConversation(newConversation); // Set the latest conversation for display
      setLoadingState(false); // Set loading state to false when response is received
      
      // Save the updated history to localStorage
      localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));
    }
  }, [recentPrompt, resultData]);

  // Function to handle sending messages
  const handleSend = () => {
    if (input.trim() === '') return; // Prevent sending empty messages
    setUserMessage(input); // Store user message to display immediately
    setLoadingState(true); // Show loading state while waiting for AI response
    onSent(); // Trigger the context function to handle AI response
    setInput(''); // Clear the input field after sending
  };

  // Function to delete a specific conversation
  const handleDelete = (indexToDelete) => {
    const updatedHistory = history.filter((_, index) => index !== indexToDelete);
    setHistory(updatedHistory);
    localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));
  };

  // Function to handle selecting a conversation from recent history
  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
  };

  // Helper function to truncate AI response to a few sentences
  const truncateResponse = (response, maxLength = 100) => {
    if (response.length > maxLength) {
      return response.substring(0, maxLength) + '...';
    }
    return response;
  };

  return (
    <div className="flex h-screen bg-gray-100">

          {/* Sidebar for Recent Conversations */}
      <div className="w-1/4 bg-white shadow-lg overflow-y-auto p-4 ">
        <h2 className="text-lg font-semibold mt-6">Recent Conversations</h2>
        <div className="space-y-3">
          {history.length === 0 ? (
            <p className="text-gray-500">No recent conversations</p>
          ) : (
            history.map((item, index) => (
              <div
                key={index}
                className="border-b pb-2 flex justify-between items-center cursor-pointer"
                onClick={() => handleSelectConversation(item)} // Select conversation when clicked
              >
                <div>
                  <p className="text-sm text-gray-800">User: {item.prompt}</p>
                  <p className="text-sm text-blue-800">
                    AI: {truncateResponse(item.response)}
                  </p>
                </div>
                <button
                  className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the click from selecting the conversation
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      


      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col justify-between bg-white shadow-lg p-4">
        {/* Header */}
        <div className="border-b pb-3 mb-3">
          <h1 className="text-xl font-semibold text-gray-800">Chat</h1>
        </div>

        {/* Messages Section */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-3 p-3">
          {/* Display the user's input immediately */}
          {userMessage && (
            <div className="bg-gray-200 rounded-lg p-3 text-gray-800">{userMessage}</div>
          )}
          
          {/* Show AI response or loading indicator */}
          {loadingState ? (
            <div className="bg-blue-100 rounded-lg p-3 text-blue-900">Loading AI response...</div>
          ) : (
            selectedConversation && (
              <div className="bg-blue-100 rounded-lg p-3 text-blue-900">
                {selectedConversation.response}
              </div>
            )
          )}
        </div>

        {/* Input Section */}
        <div className="border-t pt-3 sticky bottom-0 bg-white">
          <div className="flex items-center">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              className="ml-2 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
