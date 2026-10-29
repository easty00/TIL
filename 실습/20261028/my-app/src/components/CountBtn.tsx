import {useState} from "react"      // App.tsx에 있던 const ... useState를 가져옴

export default function CountBtn() {
    const [count, setCount] = useState<number>(0)   //<number> : count, setcount 상태의 타입을 숫자로 정의. 숫자 함수를 공용이 아닌 단추가 직접 갖도록 함. children쪽에 통째로 가져온거라 이전 props 받는건 삭제
    return(
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count || 0) + 1)}   //원본은 ((count) => count + 1)
        >
          Count is {count}
        </button>
    )
}