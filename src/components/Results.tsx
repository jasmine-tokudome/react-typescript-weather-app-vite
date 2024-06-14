const Results = (props: ResultsProps) => {
    return(
        <div>
            {props.results.country && 
                <div>{props.results.country}</div>}
        </div>
    )
}

export default Results
