import React from 'react'
import classes from './Loggin.module.css'

class Loggin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            logged: true
        };
        this.logClick = this.logClick.bind(this);
    }
    logClick () {
        this.setState(prevState => ({
            logged: !prevState.logged
        }))
        console.log('CLICKED')
    }
    render() {
        return (
            <div className={classes.login} onClick={this.logClick}>
                {this.state.logged ? <p>true</p> : <p>false</p>}
            </div>
        )
    }
}

export default Loggin;