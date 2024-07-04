import { useState } from "react" 
import Title from "./components/Title"
import Form from "./components/Form"
import Results from "./components/Results"

const App = () =>{
  const [city, setCity] = useState("")

  const [results,setResults] = useState({
    conutry: "",
    cityName: "",
    tempreture: "",
    conditionText: "",
    icon: ""
  })

    const getWeather = (e: any) => {
        e.preventDefault
        fetch("")
        .then(res => res.json())
        .then(data => setResults({
          conutry: data.location.country,
          cityName: data.location.name,
          tempreture: data.location.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        }))
    }

  return(
    <div>
    <Title/>
    <Form/>
    <Results/>
    </div>
  )
}

export default App
