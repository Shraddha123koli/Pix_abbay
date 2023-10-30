import { useEffect,useState } from "react"
import './App.css'
const App = () => {
  const[data,setData]=useState([])
  const[search,setSearch]=useState("")
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=40363800-8dedda014c5dbc3ed36a9ce85&q=${search}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(d=>setData(d.hits))
  },[data])
  return (
    <div className="App">
      <section className="Navbar">
        <nav className="nav">
          <div><i class="fa-solid fa-camera"><br /><center>PIXABY</center></i></div>
          <div>exolore</div>
          <div><i class="fa-solid fa-bell"></i></div>
          <button>👆Upload</button>
        </nav>
        </section>


        <section className="Hea">
        <header className="Header">
        <h1>Stunning royalty-free images & royalty-free stock</h1>
        <h3>over 4.1 milion+ high quality stock, videos and music sheared by our talented community. </h3>
        <center><input type="text" placeholder="Search Image here What do you want" onChange={(e)=>setSearch(e.target.value)} /></center>
        </header>
        </section>

        
      {data.map((x)=>{
        return(
          <section key={x.type} className="secimg">
            <img src={x.webformatURL} alt=""  height={x.webformatHeight} width={x.webformatWidth}/>
          </section>
        )
     })}
      
    </div>
  )
}
export default App