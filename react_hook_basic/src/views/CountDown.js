import React, { Component, useState, useEffect } from 'react';


class CountDown extends Component {

    state = {
        count: 10
    }
    componentDidMount() {
        // setTimeout(() => {
        //     console.log('me');
        // }, 1000)
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1,
            })
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    componentDidUpdate(preProps, preState) {
        if (preState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer);
                // this.props.onTimesup();
            }
        }
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                {count}
            </div>
        );
    }
}

const NewCountDown = () => {
    const [countDown, setCountDown] = useState(10);
    useEffect(() => {
        if (countDown === 0) {
            alert('time up')
            return;
        }
        let timer = setInterval(() => {
            setCountDown(countDown - 1);
        }, 1000);
        return () => { clearInterval(timer) }

    }, [countDown]);
    return (
        <div>
            {countDown}
        </div>
    )
}

export { CountDown, NewCountDown };