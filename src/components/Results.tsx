const Results = (props) => {
    return(
        <div>
            {props.results.country && 
            <div>
                <div>{props.results.country}</div>
                <div>{props.results.cityName}</div>
                <div>{props.results.temperature} <span>℃</span></div>
                <div>
                <img src={props.results.icon} alt="icon" />
                </div>
                <div>{props.results.conditionText}</div>
            </div>
            }
        </div>
    )
}

export default Results
