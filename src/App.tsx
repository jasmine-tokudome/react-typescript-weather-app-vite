import { useState } from "react"
import Title from "./components/Title"
import Form from "./components/Form"
import Results from "./components/Results"

const App  = () => {
  const [city, setCity] = useState<string>("")

  const getWeather = (e: any) => {
      e.preventDefault()
      fetch("")
      .then(res => console.log(res))
  }

  return (
    <div>
      <Title/>
      <Form setCity={setCity} getWeather={getWeather} />
      <Results/>
    </div>
  )
}

export default App
