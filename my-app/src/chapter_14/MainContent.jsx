/*
    Context : 기존의 일반적인 react애플리케이션에서는 데이터가 컴퍼넌트의 
        props를 통한 부모에서 자식으로 단방향으로 데이터 전달되었지만 여러
        컴퍼넌트에 걸쳐 굉장히 자주 사용되는 데이터의 경우 기존 방식을 사용
        하면 코드도 너무 복잡하고 사용하기에 불편함이 많다. 그래서 나오게 
        된 것이 바로 컨텓스트입니다.
        리액트 컴퍼넌트들 사이에서 데이터를 기존의 프롭을 통해 전달하는 방식 
        대신 컴퍼넌트 트리를 통해 곧바로 컴퍼넌트로 전달하는 새로운 방식을 
        제공한다. 이를 통해 어던 컴퍼넌트 든지 데이터에 쉽게 접근할 수 있다.
        데이터를 필요로 하는 컴퍼넌트에 직접 전달할 수 있다. 다라서 코드로 
        깔끔해지고 데이터를 한곳에서 관리하기 때문에 디버깅을 하기에도 굉정히
        유리하다.
        로그인 여부, 로그인 정보, UI테마, 현재 언어등에 사용.
        Context를 사용하기 전에 고려할 점은 다른 레벨의 많은 컴퍼넌트가 데이터를 
        필요로 하는 경우에 사용
*/
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
    // useContext hook을 사용해서 사용. 
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                // 
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContent;
