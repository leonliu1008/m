import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Word(){
    const [title, setTitle] = useState('');

    //宣告一個新的state變數 ,我叫他"count"
    const [count,setCount] = useState(0)

    //與 與 componentDidMount 和 componentDidUpdate 類似：
    useEffect(() => {
      // 使用瀏覽器 API 更新文件標題
      document.title = `You clicked ${count} times`;
    });
    useEffect(()=> {
      console.log(title);
     }, [title]);
    
    return (
      <div className="">
          <Header/>
          <div className="w-1/2 h-auto rounded-lg drop-shadow-md overflow-hidden bg-white p-10">
            <input
                type="text"
                placeholder={'標題'}
                value={title} maxLength={100}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full h-10 rounded-md bg-gray-50 px-4 py-2 mb-10 focus:outline-0 focus:bg-yellow-700/5">
             </input>
          </div>
          <p className="text-center text-3xl mt-20">This is TEST</p>
          <p className="text-center text-3xl mt-20">此為測試頁面</p>
          <p className="text-center text-3xl mt-20">You clicked {count} times</p>
          <p className="text-center text-3xl mt-20"><button onClick={() => setCount(count + 1)}>Click me</button></p>
          <p className="text-center text-3xl mt-20">
            <button onClick={() => setCount(0)}
            className="mx-5 text-white font-medium px-5 py-2 bg-yellow-700/40 hover:bg-yellow-700/70 rounded-md mt-12 hover:scale-110 transition ease-in"
            >歸零</button>
          </p>
          <Footer/>
      </div>
    );
}