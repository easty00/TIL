import React from 'react' ;

// 로그인 화면과 같은 카드 모양을 쓰기 위해 Login.css를 그대로 가져옴
import '../css/Login.css' ;

// 컴포넌트 이름은 반드시 대문자로 시작해야 함
const Welcome = () => {

  return (
    <div className="login-box">
      <h2>환영합니다!</h2>
      <p>로그인에 성공했습니다.</p>
    </div>
  );
}

export default Welcome ; //외부에서 사용할 수 있도록 정의
