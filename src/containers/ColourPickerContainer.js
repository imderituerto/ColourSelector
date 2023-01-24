import { useState } from "react";
import ColourPickerComponent from "../components/ColourPickerComponent";

const ColourPickerContainer = () => {

    const [red, setRed] = useState(50);
    const [blue, setBlue] = useState(50);
    const [green, setGreen] = useState(50);
    
    // const [RGB, setRBG] = useState(0);

    const RGB = `rgb(${Math.ceil(red*2.55)}, ${Math.ceil(green*2.55)}, ${Math.ceil(blue*2.55)})`;

    return(
        <> 
            <ColourPickerComponent 
            red={red}
            green={green}
            blue={blue}

            setRed={setRed}
            setGreen={setGreen}
            setBlue={setBlue}
            />

            <h2 style={{backgroundColor: RGB}}> {RGB} </h2>
        </>
    );

}


export default ColourPickerContainer;