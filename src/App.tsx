import { Suspense, useState } from "react"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import type { ITechnology } from "./types/technologyType"
import Technologies from "./components/Technologies/Technologies"

const technologiesFetch = async():Promise<ITechnology[]>=>{
  const res = await fetch("/data.json");
  return res.json()
}

function App() {
  // const [count, setCount] = useState(0)
const [technologiesPromise] = useState(()=>technologiesFetch())
  return (
    <>
    {/* <Nav/> */}
    {/* <Hero/> */}
    <Suspense fallback ={<h2>🌀 Loading...</h2>}>
      <Technologies technologiesPromise={technologiesPromise}/>
    </Suspense>
    </>
  )
}

export default App
