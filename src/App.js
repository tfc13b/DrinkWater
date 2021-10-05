//import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import SetTimer from './SetTimer.js';
import ButtonSetTime from './ButtonSetTime.js'


function App() {
return (
    <div onload={notifyMe()} className="App">
      <header className="App-header">
        <img src="https://rm7ix2r8hzo4121x321k81m1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/Children-and-Water-Content-1024x536.jpg" className="App-logo" alt="logo" />
        <h1 onLoad={setClock}>
          Drink water!!
        </h1>
        <div>
        <SetTimer />
        <ButtonSetTime />
      </div>
      </header>
    </div>
  );
}
console.log(Notification.permission)
function notifyMe() {
  if (!window.Notification) {
      console.log('Browser does not support notifications.');
  } else {
      // check if permission is already granted
      if (Notification.permission === 'granted') {
          // show notification here
          var notify = new Notification('Hi there!', {
              body: 'Drink More Water :)',
              icon: 'https://rm7ix2r8hzo4121x321k81m1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/Children-and-Water-Content-1024x536.jpg',
          });
      } else {
          // request permission from user
          Notification.requestPermission().then(function (p) {
              if (p === 'granted') {
                  // show notification here
                  var notify = new Notification('Hi there!', {
                      body: 'Dink More Water :)',
                      icon: 'https://rm7ix2r8hzo4121x321k81m1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/Children-and-Water-Content-1024x536.jpg',
                  });
              } else {
                  console.log('User blocked notifications.');
              }
          }).catch(function (err) {
              console.error(err);
          });
      }
  }
}

const setClock = setInterval(notifyMe, React.useState.setTime);

export default App;
