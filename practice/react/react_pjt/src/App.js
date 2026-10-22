import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Login from "./component/page/Login" ;
import Welcome from './component/page/Welcome';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/"        element={<Login />} />  {/** "/" = 루트. 사용자들이 가장 먼저 접하는 랜딩페이지 */}
        <Route path="/welcome" element={<Welcome />} />
        <Route></Route> {/* 이 라우트 하나가 하나의 컴포넌트 등록에 필요함 */}
        <Route /> {/**내부에 작성할 바디가 없다면 단독 태그도 가능함 */}
      
      </Routes>
    </Router>
  );
}
// 위와 같이 라우터를 작성하는 경우 index.js에 직접 등록하는 것은 불가능함. 

export default App;
