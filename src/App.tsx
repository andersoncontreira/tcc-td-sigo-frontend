import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes';
import { AppProvider } from './store/AppContext';

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <AppProvider>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={() => {
              return (
                <route.layout>
                  <route.component />
                </route.layout>
              );
            }}
          />
        );
      })}
    </AppProvider>
  </Router>
);
