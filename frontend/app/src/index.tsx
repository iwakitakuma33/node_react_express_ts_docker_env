import React, { useState,useEffect } from 'react';
import axios from 'axios';
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [text, setText] = useState("init");
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get('http://192.168.0.140:8888/v1/users').then(function(response) {
        console.log(response.data.userId);
        setText(String(response.data.userId));
      })
      .catch(function(error) {
        console.log('ERROR!! occurred in Backend.')
      });
     
    }
    getUser()
  }, [])
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>{text}</p>
    </div>
  );
}



//hot 機能を使用するため
export default hot(App);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


