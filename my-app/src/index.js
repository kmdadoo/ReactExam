import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import Library from './chapter_03/Library'; // Library 컴퍼넌트 임포트
// import Clock from './chapter_04/Clock';
// import CommentList from './chapter_05/CommentList';
// import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';

// ReactDOM.render( // chapter_03
//   // ReactDOM 을 사용해 root Dom노드에 랜더링 선언은 하나만
//   <React.StrictMode>
//     <Library /> 
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// setInterval(() =>{ // chapter_04
//   ReactDOM.render(
//     // ReactDOM 을 사용해 root Dom노드에 랜더링 선언은 하나만
//     <React.StrictMode>
//       <Clock /> 
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000) // setInterval 을 이용하여 1초마다 랜더링

// ReactDOM.render( // chapter_05
//   // ReactDOM 을 사용해 root Dom노드에 랜더링 선언은 하나만
//   <React.StrictMode>
//     <CommentList /> 
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render( // chapter_06
//   // ReactDOM 을 사용해 root Dom노드에 랜더링 선언은 하나만
//   <React.StrictMode>
//     <NotificationList /> 
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render는 더 이상 React 18에서 지원되지 않습니다. 
// 대신 createRoot를 사용하세요.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // chapter_07
  <React.StrictMode>
    <Accommodate /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
