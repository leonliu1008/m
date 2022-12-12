import axios from 'axios';      //先引入 axios

const baseUrl = 'http://localhost:5050';    //宣告基本的 api 路徑 baseUrl（方便之後更改及使用）

export const createPost = async ({title, author, image, content}) =>{   //建立 createPost 函式，以非同步 async/await 函數發送 api 請求
    try {
        const res = await axios.post(`${baseUrl}api/v1/posts`, { title, author, image, content }); //使用 axios.post() 並設定 api 路徑及 data (title, author, image, content 等等)
        return res;     //將 api 回傳的資料以 await 方式存在 res 變數，並回傳 res
    } catch (err) {
        console.log(err.response);
        alert('發布文章失敗....|||');
    }
};