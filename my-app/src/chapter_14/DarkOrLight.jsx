import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("light");
        }
    }, [theme]);

    return (
        /*
            context 사용
            ThemeContext.Provider 컴퍼넌트로 하위 컴퍼넌트들을 감싸주면
            모든 하위 컴퍼넌트들이 해당 컨텍스트에 접근할 수 있게 된다.
            주의할 점
                Provider 컴퍼넌트가 재렌더링될 때마다 모든 하위 consumer
                컴퍼넌트가 재랜더링 된다.
                state를 사용하여 불필요한 재랜더링을 막음.
        */
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContent />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;
