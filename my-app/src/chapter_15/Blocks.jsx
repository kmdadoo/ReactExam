/*
    CSS와 selector
    styled-components : CSS 문법을 그대로 사용하면서 결과물을 스타일링된 컴퍼넌트 형태로
        만들어주는 오픈소스 라이브러리 입니다.
        설치하기 >npm install --save styled-components
*/
import styled from "styled-components";

/*
    레이아웃과 관련된 속성
        display : 엘리먼트를 어떻게 표시할지 그방법에 대한 속성
        visibility : 엘리먼트를 화면에 보여주거나 감추기 위해 사용하는 속성
        position : 엥리먼트를 어떻게 위치시킬 것인지 정의하기 위한 속성
        Flexbox 와 관련된 속성
            flex-direction : 아이템들이 어떤 방향에 배치될 것인지를 지정
            align-items : 컨테이너 내에서 아이템을 어덯게 정렬 할 것인지 결정. cross-axis 기준
            justify-content : 컨테이너 내에서 아이템들을 어떻게 나란히 맞출 것인지 결정. main-axis 기준
*/
// template literal : `을 사용
const Wrapper = styled.div`
    padding: 1rem;
    display: flex; 
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: lightgrey;
`;

/*
    Font와 관련된 속성
        font-family : 어떤 글꼴을 사용할 것인지를 결정하는 속성.
        font-size : 글꼴의 크기와 관련된 속성.
        font-weight : 글꼴의 두게와 관련된 속성.
        font-style : 글꼴의 스타일을 지정하기 위한 속성.
*/
const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    background-color: ${(props) => props.backgroundColor};
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

const blockItems = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "red",
    },
    {
        label: "2",
        padding: "3rem",
        backgroundColor: "green",
    },
    {
        label: "3",
        padding: "2rem",
        backgroundColor: "blue",
    },
];

function Blocks(props) {
    return (
        <Wrapper>
            {blockItems.map((blockItem, index) => {
                return (
                    <Block
                        padding={blockItem.padding}
                        backgroundColor={blockItem.backgroundColor}
                    >
                        {blockItem.label}
                    </Block>
                );
            })}
        </Wrapper>
    );
}

export default Blocks;
