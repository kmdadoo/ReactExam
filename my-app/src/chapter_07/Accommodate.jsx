// 함수 컴퍼넌트
import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

/*
    Hooks : 함수 컴퍼넌트는 스테이트를 정의해서 사용하거나 컴포넌트의 생명주기에 
        맞춰 어떤 코드가 실행되도록 할 수 없습니다. 따라서 이런기능을 지원하기 
        위해서 나온것이 바로 훅 입니다. use_로 시작한다.
        hook은 무조건 최상위 레벨에서만 호출해야 한다.
        hook은 컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출되어야 한다.
        리액트 함수 컴퍼넌트에서만 hook을 호출해야 한다.
        Custom hook 만들기 - use_로 시작! 여러개의 컴퍼넌트에서 하나의 Custom 
            Hook을 사용할 때 컴퍼넌트 내부에 있는 모든 state와 effects는 전부 
            분리되어 있다.
            각 Custon Hook 호출에 대해서 분리된 state를 얻게 됨!
*/
const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);
    
    // useEffect : Side effect(랜더링 이후에 실행되는 작업)를 수행하기 위한 hook
    // componentDidMount, componentDidUpdate와 비슷하게 작동합니다.
    useEffect(() => {   // 의존성 배열이 없는
        // 컴포넌트가 마운트 된 이후,
        // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
        // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 
        // 번씩만 실행됨
        // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });
    useEffect(() => { // 의존성 배열이 있는
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
