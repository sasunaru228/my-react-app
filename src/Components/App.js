import React from 'react'
import Loggin from './Loggin/Loggin'
import Clock from "./Clock/Clock";


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            login: false
        }
    }
    render() {
        return(
            <>
                <Clock name="Dmitrii" />
                <Loggin
                    loggIn={this.state.login}
                />
            </>

        )
    }
}

export default App;

