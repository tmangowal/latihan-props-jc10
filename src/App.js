import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './1.components/Header'
import Home from './1.components/Home'
import Login from './1.components/Login'

function App() {

  // const kali = () => {
  //   return 3*3
  // }

  // var a = {
  //   warna : 'merah',
  //   tinggi : '3cm',
  //   lebar : '1cm'
  // }

  return (
    <div className="App">
      {/* <Header nama='Seto' huruf={a} />
      <Home funKali={kali()} /> */}
      <Login/>

    </div>
  );
}

export default App;
