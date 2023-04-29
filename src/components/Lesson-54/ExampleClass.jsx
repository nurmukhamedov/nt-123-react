import { Component } from "react";

class ExampleClass extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }

        this.handleClick = this.addCount.bind(this);
        this.handleMinusClick = this.minusCount.bind(this);
    }

    addCount() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    minusCount() {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }))
    }

    componentDidMount() {
        console.log('Component Did mount')
    }
    componentDidUpdate(prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Component mounted');
        }
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleClick}>Add me</button>
                <button onClick={this.handleMinusClick}>Minus me</button>
            </div>
        )
    }
}

export default ExampleClass;