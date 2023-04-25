// это основной компонент нашего приложения; 
// Он содержит логику для рендеринга маршрутов и получения данных с сервера.

import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import {LoginPage} from "./pages/LoginPage";
import {SignUpPage} from './pages/SignUpPage'
import {RegFormPage} from './pages/RegFormPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signUp" element={<SignUpPage/>} />
        <Route path="/registration" element={<RegFormPage/>} />
      </Routes>
   </>
  );
}

export default App; 
