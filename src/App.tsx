import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import styles from './styles/App.module.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.appContainer}>
        <Sidebar />
        <div className={styles.contentContainer}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/profile" Component={Profile} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
