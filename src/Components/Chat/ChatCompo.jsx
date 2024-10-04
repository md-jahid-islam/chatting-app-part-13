
import React, { useState } from 'react';

// Sample user data
const currentUser = {
  name: 'Jahid',
  image: 'https://th.bing.com/th/id/OIP.S-uPT5jsv9CMhbu45iUq3gHaHa?pid=ImgDet&w=474&h=474&rs=1',
};

const friends = [
  {
    name: 'Jane Smith',
    image: 'https://www.icopify.com/wp-content/uploads/2018/10/Eric.png',
  },
  {
    name: 'Alex Brown',
    image: 'https://th.bing.com/th/id/OIP.Vc2T3XJyhdySJlCjmQRXyQHaHa?pid=ImgDet&w=474&h=474&rs=1',
  },
];

const ChatCompo = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(friends.map(friend => ({ ...friend, message: `${friend.name} joined the chat.` })));
  const [isMinimized, setIsMinimized] = useState(false);
  const [isChatClosed, setIsChatClosed] = useState(false);
  const maxMessages = 20;

  // Handle input change
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle sending a message
  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = { name: currentUser.name, image: currentUser.image, message };
      setMessages((prevMessages) => {
        if (prevMessages.length >= maxMessages) {
          return [...prevMessages.slice(1), newMessage];
        } else {
          return [...prevMessages, newMessage];
        }
      });
      setMessage(''); // Clear the input field

      // Simulate a friend replying based on whom you message
      setTimeout(() => {
        const friendReply = getFriendReply(message);
        if (friendReply) {
          setMessages((prevMessages) => {
            if (prevMessages.length >= maxMessages) {
              return [...prevMessages.slice(1), friendReply];
            } else {
              return [...prevMessages, friendReply];
            }
          });
        }
      }, 1000); // 1 second delay for reply
    }
  };

  // Get a friend reply based on the message content
  const getFriendReply = (userMessage) => {
    if (userMessage.toLowerCase().includes('jane')) {
      return {
        name: 'Jane Smith',
        image: 'https://www.icopify.com/wp-content/uploads/2018/10/Eric.png',
        message: 'Hey Jahid, it’s nice talking to you! How’s everything going?',
      };
    } else if (userMessage.toLowerCase().includes('alex')) {
      return {
        name: 'Alex Brown',
        image: 'https://th.bing.com/th/id/OIP.Vc2T3XJyhdySJlCjmQRXyQHaHa?pid=ImgDet&w=474&h=474&rs=1',
        message: 'Hi Jahid! Let’s catch up soon!',
      };
    }
    return null; // No reply if the message doesn’t mention Jane or Alex
  };

  // Handle "Enter" key to send message
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // Minimize Chat
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Close Chat
  const closeChat = () => {
    setIsChatClosed(true);
  };

  if (isChatClosed) {
    return null; // Return null to not render the chat component when closed
  }

  return (
    <div style={styles.chatContainer}>
      {/* Chat Header */}
      <div style={styles.header}>
        <div style={styles.callButtons}>
          <button onClick={() => alert('Voice call started')} style={styles.callButton}>🎤 Voice</button>
          <button onClick={() => alert('Video call started')} style={styles.callButton}>📹 Video</button>
        </div>
        <div>
          <button onClick={toggleMinimize} style={styles.minimizeButton}>{isMinimized ? '🔼' : '🔽'}</button>
          <button onClick={closeChat} style={styles.closeButton}>❌</button>
        </div>
      </div>

      {/* Chat Body */}
      {!isMinimized && (
        <>
          <div style={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <div key={index} style={styles.messageContainer}>
                <img src={msg.image} alt="User" style={styles.userImage} />
                <div>
                  <strong>{msg.name}</strong>
                  <div style={styles.message}>{msg.message}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              style={styles.input}
            />
            <button onClick={sendMessage} style={styles.button}>Send</button>
          </div>
        </>
      )}
    </div>
  );
};

// Enhanced styles
const styles = {
  chatContainer: {
    width: '90%',
    maxWidth: '600px',
    height: '80vh',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '20px auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  callButtons: {
    display: 'flex',
    gap: '10px',
  },
  callButton: {
    padding: '5px 10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  minimizeButton: {
    padding: '5px 10px',
    backgroundColor: '#ffc107',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  closeButton: {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  messagesContainer: {
    flex: 1,
    overflowY: 'auto',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #eee',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  userImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  message: {
    padding: '10px',
    borderBottom: '1px solid #eee',
    wordWrap: 'break-word',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

// Responsive design
styles.chatContainer['@media (max-width: 768px)'] = {
  width: '100%',
  height: '60vh',
};

export default ChatCompo;
