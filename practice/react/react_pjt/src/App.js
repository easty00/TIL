import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route></Route> {/* 이 라우트 하나가 하나의 컴포넌트 등록에 필요함 */}
      </Routes>
    </Router>
  );
}

export default App;
