import heroImg from '../assets/hero.png' // assets 에서 그림 가져옴
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import CountBtn from './CountBtn' // components 폴더


export default function CenterHero() {   // 컴포넌트가 된 단추가 App에 있던 Counter, setCounter 를 가져갔으므로 props 삭제
    return (
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>LG CNS 7TH</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <CountBtn />    {/*컴포넌트로 떼어낸것 이식*/}
      </section>
    )
}