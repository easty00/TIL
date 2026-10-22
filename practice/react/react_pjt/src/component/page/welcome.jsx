import React from 'react' ;
import { useNavigate, useLocation } from 'react-router-dom' ;

// 로그인 화면과 같은 카드 모양을 쓰기 위해 Login.css를 그대로 가져옴
// import '../css/Login.css' ;

// 컴포넌트 이름은 반드시 대문자로 시작해야 함
const Welcome = () => {

  // 페이지 이동을 위한 훅
  const moveUrl = useNavigate() ;

  // useLocation : 이전 페이지가 이동하면서 넘겨준 값(state)을 받아오는 기능
  const location = useLocation() ;
  const username = location.state?.username || 'Guest' ;

  // 로그아웃: 저장해 둔 토큰을 지우고 로그인 화면("/")으로 이동
  const handleLogout = () => {
    localStorage.removeItem('token') ;
    moveUrl('/') ;
  }

  return (
    <div style={styles.container}> {/** 내부에서 바로 스타일 적용가능 */}
      <h2>{username}님, 환영합니다!</h2>
      <p>로그인에 성공했습니다.</p>
      <button onClick={handleLogout} style={styles.btn}>로그아웃</button>
    </div>
  );
}

// 인라인 스타일: CSS 속성 이름은 카멜 표기(background-color → backgroundColor), 값은 문자열
// 인라인 스타일시트 정의
const styles = {
  container: {
    width: '320px',
    padding: '32px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
  },
  btn: {
    marginTop: '16px',
    padding: '10px 20px',
    color: '#ffffff',
    backgroundColor: '#4a6cf7',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
}

export default Welcome ; //외부에서 사용할 수 있도록 정의
