// Form(양식) 과 Controlled Component
import React, { useState } from "react";

/*
    Form : 사용자로부터 입력을 받기 위해 사용
    Controlled Component : 값이 리엑트의 통제를 받는 input Form Element
        사용자의 입력을 직접적으로 제어할 수 있음!
        제어 컴퍼넌트를 통해 사용자의 입력을 직접적으로 제어할 수 있다
        ex) event.target.value.toUpperCase() -> 대문자로
*/
function SignUp(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");

    // 이벤트 객체
    const handleChangeName = (event) => {
        setName(event.target.value); // event.target.value는 input element의 값
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => { // 제출버튼 이후 알럿창
        alert(`이름: ${name}, 성별: ${gender}`);
        event.preventDefault();
    };

    return (
        // 리엑트에서의 form
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                성별: 
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;
