/*eslint-disable*/

import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {


  let [글제목1,글제목변경1] = useState(['남자 코트 추천','여자 코트 추천','프리사이즈 코트 추천']);
  //state는 그냥 변경이 가능하지 않다.
  //따봉 변경은 값을 변경시킬수 있다.
  let [따봉, 따봉변경] = useState(0);
  //그냥 변경할 수는 없다.

  function 글변경()
  {
    //복사가 아니라 값 공유라서 주의해야한다.
    //deepCopy 를 사용해야한다.
    var temp = [...글제목1];         // 1.카피본 생성
    var temp2 = temp[0];           // 2.카피본에 변경로직을 구현
    temp[0] = temp[1];
    temp[1] = temp2;
    temp.sort();

    //temp[0] = '여자코트추천';
    글제목변경1(temp);                // 3.변경함수를 실행한다. 
  };

  let posts = '강남 고기 맛집';
  let post2 = {color : 'blue', fontSize : '30px'} ;
  
  return (
    <div className="App">
      <div className="black-nav">
        <div style = {post2}> 개발 Blog</div>
      </div>
      <div className = "list">
        <h3>{글제목1[0]} <span onClick={()=>{따봉변경(따봉+1)}}>❤️</span>{따봉}</h3>
        <p> 2월 17일 발행</p>
        <hr/>
      </div>
      
      <div className = "list">
        <h3>{글제목1[1]}</h3>
        <p> 2월 17일 발행</p>
        <hr/>
      </div>
      
      <div className = "list">
        <h3>{글제목1[2]}</h3> 
        <p> 2월 17일 발행</p>
        <hr/>
      </div>
      
      <button onClick={글변경}>
        버튼을 누르면 여자코트 추천으로 변경되게 하자.
      </button>

    <Modal></Modal>      
    <Modal></Modal>      
    <Modal></Modal>      
    <Modal></Modal>      
    <Modal></Modal>      
      
    </div>
  );
}

//리액트를 쓰는 큰 이유 중 하나
//html를 덩어리째 관리를 할 수 있다.
//
function Modal(){
  return(
      <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
