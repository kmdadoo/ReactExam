/*
    >npx create-react-app mini-blog // 새로운 프로젝트 만들기
    프로젝트에 필요한 패키지 설치하기 react-router-dom, styled-components
    >npm install --save react-router-dom styled-components
    react-router-dom : 라운팅을 쉽게 구현 알수 있도록 리엑트 컴퍼넌트로 제공해주는 
        라이브러리입니다.
*/
// Button 컴퍼넌트 
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
