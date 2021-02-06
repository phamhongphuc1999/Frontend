import ThemeContext from "./context";
import React, {useState} from "react";

const ThemedButton = (props) => (
    <ThemeContext.Consumer>
        {
            theme => {
                return <button {...props}>button with them: {theme}</button>
            }}
    </ThemeContext.Consumer>
);

function Example() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(() => count + 1)}>
                Click me
            </button>
        </div>
    );
}

export {
    Example, ThemedButton
}
