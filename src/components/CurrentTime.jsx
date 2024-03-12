function CurrentTime(){
    let time = new Date()
    return(
        <>
            <h3>The current time is: {time.toLocaleDateString()} - {time.toLocaleTimeString()} </h3>
        </>
    )
}

export default CurrentTime