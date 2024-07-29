// components/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.css';

const Sidebar = ({ onNewChatClick }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <FontAwesomeIcon icon={faRobot} size="1x" />
        <span>ChatBot</span>
      </div>
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarItem} onClick={onNewChatClick}>New chat</li>
        <li className={styles.sidebarItem}>CSS Styling for Chat UI</li>
        <li className={styles.sidebarItem}>API Error Handling Debug</li>
        <li className={styles.sidebarItem}>Yesterday</li>
        <li className={styles.sidebarItem}>Copy File to Multiple</li>
        <li className={styles.sidebarItem}>Java Keyword Search Program</li>
        <li className={styles.sidebarItem}>Previous 7 Days</li>
      </ul>
    </div>
  );
};

export default Sidebar;
