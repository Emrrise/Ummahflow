import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Qiblah from './pages/Qiblah';
import Settings from './pages/Settings';
import IslamicAIChat from './components/chat/IslamicAIChat';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/qiblah" component={Qiblah} />
          <Route path="/settings" component={Settings} />
          <Route path="/chat" component={IslamicAIChat} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;