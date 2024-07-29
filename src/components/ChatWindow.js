// components/ChatWindow.js
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUpload, faUser, faTimes, faRobot } from '@fortawesome/free-solid-svg-icons';
import styles from './ChatWindow.module.css';

const ChatWindow = ({ messages, onCloseChat, onSendMessage }) => {
  const inputRef = useRef(null);

  const handleSend = () => {
    const message = inputRef.current.value.trim();
    if (message) {
      onSendMessage(message);
      inputRef.current.value = '';
    }
  };

  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <span>Chat Bot</span>
        <button onClick={onCloseChat}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>
      <div className={styles.chatBody}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.chatMessage}>
            <div className={styles.chatAvatar}>
              <FontAwesomeIcon icon={faUser} size="2x" />
            </div>
            <div className={styles.chatContent}>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.chatInputContainer}>
        <label htmlFor="fileInput" className={styles.uploadButton}>
          <FontAwesomeIcon icon={faUpload} />
          <input id="fileInput" type="file" className={styles.fileInput} />
        </label>
        <input
          id="chatInput"
          type="text"
          placeholder="Message Chat Bot"
          className={styles.chatInput}
          ref={inputRef}
        />
        <button className={styles.sendButton} onClick={handleSend}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
      <div className={styles.chatFooter}>
        {/* <p>Chat Bot can make mistakes. Check important info.</p> */}
      </div>
    </div>
  );
};

export default ChatWindow;
