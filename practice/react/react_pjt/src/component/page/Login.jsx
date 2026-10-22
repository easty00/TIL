import React, { useState } from 'react' ;
import axios from "axios"

// 양방향 데이터 상태관리를 위해 훅을 사용함 
import '../css/Login.css' ;

// function Login() { } 을 사용할 수도 있지만 화살표 함수 사용을 추천
// function의 이름은 만들어진 파일과 동일해야한다
const Login = () => {

  // 훅을 이용한 변수와 상태관리 변수 활용
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //handler 정의
  const handleSubmit = async (e) => {

    e.preventDefault() ;
    console.log('btn click event') ;
    
    if (!userId || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요") ;
      return
    }

    // if (userId === "admin" && password === "1234") {
    //   alert("로그인 성공") ;
    //   setError("") ;
    // } else {
    //   setError("아이디 또는 비밀번호가 올바르지 않습니다.") ;
    // }

    // 로그인 API 요청
    const response = await axios.post("http://localhost:8080/api/login", {
      username: userId,
      password: password,
    });
    
    const token = response.data.token ;
    localStorage.setItem('token', token)
    
  }

  // return 을 이용해 html 작성하여 출력 가능
  return(
    <div className="login-container"> {/* React에서 클래스는 다양한 용도로 이용되므로 className을 사용 */}
      <form className="login-box" onSubmit={handleSubmit}> {/* 하단의 submit 포맷의 버튼을 통해 움직임. 해당 컴포넌트의 scriptfunction */}
        <h2>로그인</h2>

        <div className="input-group">
        <label>아이디</label>
        {/* 양방향 통신을 위해 각각의 컴포넌트를 제어할 수 있어야 함 */}
        <input
          type="text"
          placeholder='아이디를 입력하세요'
          value={userId}
          onChange={(e) => setUserId(e.target.value)} // 아이디, 비밀번호 각각 입력이벤트 존재
        />
        </div>

        <div className="input-group">
        <label>비밀번호</label>
        <input
          type="password"
          placeholder='비밀번호를 입력하세요'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>

        {error && <p className="error-message">{error}</p>}
          
        <button type="submit" className='login-btn'>
        로그인
        </button>
      </form>
    </div>
  );
}

export default Login ; //외부에서 사용할 수 있도록 정의