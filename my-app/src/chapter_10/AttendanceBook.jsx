/*
    리스트 : 같은 아이템을 순서대로 모아놓은 것
    배열 : JS의 병수나 객체들을 하나의 변수로 묶어 놓는 것
    key : 각 객체나 아이템을 구분할 수 있는 고유한 값
        리엑트에서는 아이템을 구분핟기 위한 고유한 문자열.
*/
import React from "react";

const students = [  // 배열
    {   
        id: 1, // 키 값
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return ( // map()함수를 이용한 엘리먼트 렌더링
        // map() 함수 안에 있는 엘리먼츠는 꼭 key가 필요하다!
        <ul>
            {students.map((student, index) => {
                // 아이디 값을 키값으로 사용
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;
