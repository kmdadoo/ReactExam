/*
    Shared State : 공유된 스테이트
        자식 컴퍼넌트들이 가장 가가운 공통된 부모 컴포넌트의 스테이트를 공유
        해서 사용하는 것
        State 에 있는 데이터를 여러개의 하위 컴퍼넌트에서 공통적으로 사용하는
        경우
        하위 컴퍼넌트가 공통된 부모 컴퍼넌트의 state를 공유하여 사용하는 것
 */
import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) { // 화씨 온도로 변환하는 함수
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {    // 섭씨 온도로 변환 하는 함수
    return (celsius * 9) / 5 + 32;
}

// 온도값과 변환하는 함수를 파라미터로 받아서 값을 변환시켜 리턴해주는 함수
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {    // 부모 컴퍼넌트
    const [temperature, setTemperature] = useState(""); // 온도값
    const [scale, setScale] = useState("c");    // 단위

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;
