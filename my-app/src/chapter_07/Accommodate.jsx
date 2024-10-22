import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

/*
    Hooks : 함수 컴퍼넌트는 스테이트를 정의해서 사용하거나 컴포넌트의 생명주기에 
        맞춰 어떤 코드가 실행되도록 할 수 없습니다. 따라서 이런기능을 지원하기 
        위해서 나온것이 바로 훅 입니다. use_로 시작한다.
        
*/
const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);
    
    // useEffect : Side effect(랜더링 이후에 실행되는 작업)를 수행하기 위한 hook
    // componentDidMount, componentDidUpdate와 비슷하게 작동합니다.
    useEffect(() => {
        // 컴포넌트가 마운트 된 이후,
        // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
        // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 
        // 번씩만 실행됨
        // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;
