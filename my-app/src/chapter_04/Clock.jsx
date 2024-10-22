import React from "react";
/**리액트 엘리먼트란? - 리액트 앱을 구성하는 가장 작은 요소. 한번 생성되면 변경할 수 없다. 불변.
컴퍼넌트는 붕어빵 틀, 엘리먼트는 붕어빵*/
function Clock(props) {
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;
