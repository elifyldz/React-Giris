// return üzerinde herhangi bir değişken tanımlayabiliriz. js'te const'la tanımlanan bir şey parantez içerisinde direkt yazılmaz.
// fakat react'da const üzerinden bir değişken tanımlanıyor ve aynı sayfa üzerinde classname'i app olan bir div içerisinde ekrana bastırabiliyoruz.
//buna jsx yapısı denir.

// function App() {
//   const deneme = "elif"
//   return (
//     <div className="App">
//     {deneme}   
//     </div>
//   );
// }

// export default App;


//**component içinde yazdırdığım değişkenleri burada import etmeliyim. daha sonra return içerisinde yazıyoruz ve böylece tarayıcıda görünmüş oluyor.

import Selin from './components/İsimler.jsx'
import Deneme from './components/Deneme.jsx'
import { useState } from 'react'




function App() {
  const [color, setColor] = useState('blue')

 


  const deneme = "props mantığı";
  const arr = [
    {name: 'array1' , id:0},
    {name: 'array2' , id:1},
    {name: 'array3' , id:2},
  ]

  console.log(arr, "arr")

  const clickFunc = () => {
   setColor('red')
    }


//setCoount'la count2un değeri güncelleniyor


  return (
    <div className="App">
      {/* component mantığı */}
    <Selin selin={deneme}/> 
    <Deneme/>

  {
    arr.map((ar) => (
      <div key={ar.id}>{ar.name}</div> 
    ))
  }

  <div style={{color: color}}>
    leyla
  </div>


    {/* tarayıcda görünmesini sağlar ve mutlaka süslü parantez kullanılır */}

    <button onClick={clickFunc}>tıkla</button>
    </div>
  );
}

export default App;