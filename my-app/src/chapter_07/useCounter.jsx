import { useState } from "react";

function useCounter(initialValue) {
    // useState : state를 사용하기 위한 hook. 변수 각각에 대해 set함수가 다로 존재.
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;
