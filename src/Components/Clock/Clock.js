import React from 'react'
import classes from './Clock.module.css'

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(), 1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    clickclock (e) {
        e.preventDefault();
        console.log('clocked!!!');
    }
    render(){
        return(
            <div className={classes.block}>
                <p>my name is {this.props.name}</p>
                <p onClick={this.clickclock}>сейчас {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}


export default Clock