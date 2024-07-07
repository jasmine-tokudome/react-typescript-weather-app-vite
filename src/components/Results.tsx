const Results =  (props) => {
    return(
            {props.results.country && <div>props.results.country</div>}
            {props.results.cityName && <div>props.results.cityName</div>}
            {props.results.temperature && <div>props.results.temperature<span>℃</span></div>}
            {props.results.conditionText && <div><img src={props.results.icon}<span>{props.results.conditionText}</span></div>}
    )
}

export default Results