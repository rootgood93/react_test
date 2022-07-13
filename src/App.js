/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // let [listname] = ['제목1', '제목2', '제목3']
  // let relistName = ['수정제목1', '제목2', '제목3'] 변경함수, 리액트만의 장점이다. 
  let [listname, relistName] = useState(['다_제목1', '나_제목2', '가_제목3', '라_제목4'])

  // good의 초기값은 0이다.
  let [good, regood] = useState([0,0,0,0])

  let [modal, setModal] = useState(false)

  // {
  //   [1,2,3,4].map((a,i)=>{console.log(a,i)})
  //   listname.map((a,i)=>{console.log(a,i)})
  // }


  return (
    <div>
      <header>
        <div>글목록</div>
      </header>

      <button onClick={()=>{
        // deep 카피한 것, listname을 통째로 복사했다는 뜻, ...  배열은 벗기고 그 안의 콘텐츠만 리스트만 담아옴
        let copy = [...listname]
        copy[0] = '제목수정'
        // console.log(copy)
        relistName(copy)

      }}>글 제목 변경</button>

      <button onClick={()=>{setModal(!modal)}}>
        모달창 열기
      </button>
      {
        // 조건문 ? 참 : 거짓
        modal == true ? <Modal /> : null
      }

      {
        // map은 배열이 있을 때 사용하는 것, 1번째 파라미터는 각각의 값을 담음/ 2번째는 순서를 담음 사용하는 곳에 key값을 i로 줘야 함
       listname.map((a,i)=>{
          return(
            <div className="list" key={i}>
              {/* <p className="listname">{a}</p> */}
              <p className="listname">{listname[i]}</p>
              <p className="good"><span onClick={()=>{
                let copy = [...good]
                copy[i] = copy[i] + 1 
                regood(copy)
             }}>😘</span>{good[i]}</p>
             <p className="date">7월 13일 발행</p>
            </div>
         )
       })
      }
      

    </div>
  );
}


function Modal() {
  return(
    <div>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>모달창 상세내용</p>
      </div>
    </div>
  );
}

export default App;
