// 입력 컴퍼넌트
const scaleNames = {
    c: "섭씨",
    f: "화씨",
};

function TemperatureInput(props) {  // 하위 컴퍼넌트
    const handleChange = (event) => {
        // 온도값을 변경할 때마다 onTemperatureChange 함수를 통해 변경된 온도
        // 값이 상위 컴퍼넌트로 전달
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]}):
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput;
