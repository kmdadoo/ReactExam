import React from "react";
/*
	컴퍼넌트(Componet) : 아주 중요함. 하나의 함수라고 생각하면 됨. 역할은 어더한 속성을 입력으로 받아 그에 맞는 
		리액트엘리먼트를 생성하여 리턴해주는 것.
		모든 리액트 컴퍼넌트는 그들의 Props에 관해서는 Pure(순수) 함수 같은 역할을 해야 한다.
		컴퍼넌트는 붕어빵 틀로 생각하면 됨.
*/
const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

/*
	프럽스(Props) : 리엑트 컴퍼넌트의 속성. 붕어빵에 들어가는 재료. 컴퍼넌트에 전달할 다양한 정보를 담고 있는 
		자바스크립트 객체
		특징 - Read-Only (읽기 전용). 값을 변경할 수 없다. Props의 값으로 엘리먼트를 생성하려면 새로운 값을
			컴퍼넌트에 전달하여 새로 엘리먼트를 생성.
			모든 리액느 컴퍼넌트는 Props를 직접 바꿀수 없고, 같은 Props에 대해서는 항상 같은 결과를 보여줄것!
			자바스크립트의 파라미터와 같음.
	함수 컴퍼넌트(Function component) : 리액트 컴퍼넌트를 일조의 함수라고 생각한다.
	컴퍼넌트의 이름은 항상 대문자로 시작.
*/
function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.image} alt="" />
            </div>
            
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment;
