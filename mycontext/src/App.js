import ThemeContext from "./context";
import {ThemedButton, Example} from "./ThemedButton";
import React from "react";
import StateApp from "./userstate";

function App() {
    return (
        <ThemeContext.Provider value='abc'>
            <StateApp></StateApp>
        </ThemeContext.Provider>
    );
}

export default App;
