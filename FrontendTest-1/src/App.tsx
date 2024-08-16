import React from 'react';
import ProjectPage from './Pages/ProjectPage';
import './App.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const App: React.FC = () => {
  return (
    <>
      <ProjectPage />
      <ToastContainer />
    </>);
}

export default App;
