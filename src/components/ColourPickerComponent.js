
const ColourPickerComponent = ({red, green, blue, setRed, setGreen, setBlue}) => {

    const handleSetRed = (event) => {
        setRed(event.target.value);
    }

    const handleSetGreen = (event) => {
        setGreen(event.target.value);
    }

    const handleSetBlue = (event) => {
        setBlue(event.target.value);
    }

    return (
        <>
            <label htmlFor="red">Red</label>
            <input
                type="range" 
                id="red"
                onChange={handleSetRed}></input>
            <p>Red: {red}%</p>

            <label htmlFor="green">Green</label>
            <input 
                type="range" 
                id="green"
                onChange={handleSetGreen}></input>
            <p>Green: {green}%</p>
            
            <label htmlFor="blue">Blue</label>
            <input 
                type="range" 
                id="blue"
            onChange={handleSetBlue}></input>
            <p>Blue: {blue}%</p>
        </>
    );
}

export default ColourPickerComponent;