import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

class Notification extends React.Component {
    constructor(props) {
        super(props);
		/*
			state는 JS 객체이다. 직접 수정 할수 없다. 변경할 때는 setState()함수를 이용할 것.
		*/
        this.state = {};	//
    }
	/*
		리액트 클래스 컴포넌트의 생명 주기 : Mounting -> Updating -> Unmounting
		컴퍼넌트가 계속 존재하는 것이 아니라, 시간의 흐름에 따라 생성되고 업데이트 되다가 사라진다.
	*/
    componentDidMount() { // 출생, `: 사용주의
        console.log(`${this.props.id} componentDidMount() called.`);
    }

    componentDidUpdate() {	// 인생
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }

    componentWillUnmount() {	// 사망
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;
