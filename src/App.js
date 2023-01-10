import './App.css';
import Home from './Home'
import AdminLogin from './AdminLogin'
import AdminDashboard from './AdminDashboard'
import { Route, Routes } from 'react-router-dom'
import NewQuiz from './QuizCreater/NewQuiz'

function App() {
  return (
    <div>
      
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminlogin/adminDashboard" element={<AdminDashboard />} />
      <Route path="/adminlogin/adminDashboard/NewQuiz" element={<NewQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
