import { useState } from "react"

const Form = () =>{
    const [city, setCity] = useState<string>("")

    const getWeather = (e: any) => {
        e.preventDefault()
        fetch("")
        .then(res => console.log(res))
    }

    return(
    <form>
        <input type="text" name="city" placeholder="都市名" onChange={ e => setCity(e.target.value) }/>
        <button type="submit" onClick={getWeather}>Get Weather</button>
    </form>
    )
}

export default Form
