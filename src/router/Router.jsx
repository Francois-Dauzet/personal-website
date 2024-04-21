import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from './../config/routes';

const Router = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default Router;
