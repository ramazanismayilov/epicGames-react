import React from 'react'
import { useRoutes } from 'react-router-dom';
import clientRoutes from './routes/clientRoutes';

const App: React.FC = () => {
  const element = useRoutes([clientRoutes]);

  return element;
}

export default App