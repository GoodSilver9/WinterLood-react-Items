import "./App.css";
import React, { useState, useEffect } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import DiaryItem from "./DiarlyItem";

const dummyList = [
  {
    id: 1,
    author: "이승무",
    content: "하이 1",
    emotion: 1,
    created_date: new Date().getTime()
  }, {
    id: 2,
    author: "이송원",
    content: "하이 2",
    emotion: 2,
    created_date: new Date().getTime()
  }, {
    id: 3,
    author: "홍길동",
    content: "하이 3",
    emotion: 3,
    created_date: new Date().getTime()
  },
]


const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};
export default App;
