// components/Home.js
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';
import styles from './home.module.css';

const Home = () => {
  const router = useRouter();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleChatClick = () => {
    setIsChatOpen(true);
  };

  const handleNewChatClick = () => {
    router.push('/chat');
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
  };

  return (
    <div className={styles.container}>
      <Sidebar onNewChatClick={handleNewChatClick} />
      <div className={styles.main}>
        {isChatOpen ? (
          <ChatWindow
            messages={messages}
            onCloseChat={handleCloseChat}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <div className={styles.chatButton} onClick={handleChatClick}>
            <span>Context Aware geo spatial chatbot</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
