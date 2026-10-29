

export default function CountBtn({count, setCount}: {count:number | undefined, setCount: (counter: number) => void }) {
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