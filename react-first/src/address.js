function Address(props) {

    return (
        <>
            <div>
                <span><b>A/P:</b> Bank - IND</span>
                <br />
                <span><b>Contact Info:</b>9876543210</span>
                <br></br>
                {/* receiving input property from address component in contact */}
                <span><b>Open From:</b> {props.time}</span>   
                <br></br>
                <span>I am inside address component</span>
            </div>
        </>
    );
}
export default Address;