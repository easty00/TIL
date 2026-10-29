// import { useState, useEffect, } from 'react'    //  <Fragment> 와 <> 은 동일하므로 삭제. CountBtn이 숫자를 모두 가져가서 필요없게 되어 주석화
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Ticks from './components/Ticks'
import CenterHero from './components/CenterHero'
import CountBtn from './components/CountBtn'  // App에서 필요했던걸 통째로 가져갔으니 import
import SocialIconList from './components/SocialIconList'

function App() {
  // useState를 버튼으로 가져감
  // useEffect(() => {
  //   setCount(Number("1")); // number 타입으로 선언하지 않으면 1111 이 된다. CountBtn에서 부품들 가져갔기에 주석화
  // }, []); 

  // let cnt = 0;

  return (
    <>
      {/* CenterHero 컴포넌트 추가 */}
      <CenterHero />
      {/* Ticks 컴포넌트 추가 */}
      <Ticks /> 

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
          <CountBtn />  {/**버튼 추가 생성. 각자 잘 돌아가는지 확인하기 위함 */}
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <SocialIconList/>
        </div>
      </section>

      <Ticks /> 
      <section id="spacer">
        <CountBtn />
      </section>
    </>
  )
}

export default App
