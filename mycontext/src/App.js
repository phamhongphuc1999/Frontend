import {ThemeContext, themes} from './DynamicContext/theme-context';
import ThemedButton from './DynamicContext/themed-button';
import React, {useState} from "react";
import ipfsClient from 'ipfs-http-client';

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark,
            }));
        };
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}/>
                </ThemeContext.Provider>
            </div>

        );
    }
}

const AppHook = () => {
    const [theme, setTheme] = useState(themes.dark)
    return (
        <button onClick={() =>{
            console.log('123');
            const ipfs = ipfsClient({
                host: 'localhost',
                port: 5001,
                protocol: 'http',
                headers: {
                    "Access-Control-Allow-Headers" : "*",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    "Access-Control-Allow-Credentials": true,
                    "Content-Type": "application/json"
                }
            })
            const cid = ipfs.add('hello world');
            cid.then(result =>{
                console.log(result);
            })
        }}>Click</button>
    )
}

export {
    App, AppHook
};
