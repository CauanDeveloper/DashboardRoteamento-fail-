import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebarContainer}>
      <Link to="/" className={styles.sidebarLink}>Home</Link>
      <Link to="/dashboard" className={styles.sidebarLink}>Dashboard</Link>
      <Link to="/profile" className={styles.sidebarLink}>Profile</Link>
    </div>
  );
};

export default Sidebar;
