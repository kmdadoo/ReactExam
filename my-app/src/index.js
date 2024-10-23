import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import Library from './chapter_03/Library'; // Library 컴퍼넌트 임포트
// import Clock from './chapter_04/Clock';
// import CommentList from './chapter_05/CommentList';
// import NotificationList from './chapter_06/NotificationList';
// import Accommodate from './chapter_07/Accommodate';
// import ConfirmButton from './chapter_08/ConfirmButton';
// import LandingPage from './chapter_09/LandingPage';
// import AttendanceBook from './chapter_10/AttendanceBook';
// import SignUp from './chapter_11/SignUp';
// import Calculator from './chapter_12/Calculator';
// import ProfileCard from './chapter_13/ProfileCard';
// import DarkOrLight from './chapter_14/DarkOrLight';
import Blocks from './chapter_15/Blocks';

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
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( // chapter_07
//   <React.StrictMode>
//     <Accommodate /> 
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( // chapter_08
//   <React.StrictMode>
//     <ConfirmButton /> 
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( // chapter_09
//   <React.StrictMode>
//     <LandingPage /> 
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( // chapter_10
//   <React.StrictMode>
//     <AttendanceBook /> 
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( // chapter_11
//   <React.StrictMode>
//     <SignUp /> 
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( // chapter_12
//   <React.StrictMode>
//     <Calculator /> 
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( // chapter_13
//   <React.StrictMode>
//     <ProfileCard /> 
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( // chapter_14
//   <React.StrictMode>
//     <DarkOrLight /> 
//   </React.StrictMode>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // chapter_15
  <React.StrictMode>
    <Blocks /> 
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
