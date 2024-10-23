import React, { useState } from "react";

// 함수 컴퍼넌트
function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    // 바인드를 사용하는 방식으로 이벤트 핸들러를 처리
    const handleConfirm = () => {   // Arrow function
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        // 리엑트 이벤트
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;
