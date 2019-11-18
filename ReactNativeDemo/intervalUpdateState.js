import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


class Blink extends Component{

    constructor(props) {
        super(props)
        this.state = {
            showText: true
        }

        setInterval(()=>{
            this.setState({showText: !this.state.showText});
        }, 1000)
    }

    render() {
        // let display = this.state.showText ? this.props.text : ' ';
        let opacity = this.state.showText ? 1 : 0
        return (
            <Text style={{color:'red', opacity: opacity}}>{this.props.text}</Text>
        )
    }
}

//{/*<Blink text={'I love you'}></Blink>*/}

function foo(x: number) : string {
    return 'Result is ' + x * 2
}

class BlinkApp extends Component{

    reduceFunction(param: number): string{
        return 'result is' + " " + (20 - param)
    }

    render() {
        let who = 'world';
        let str = 'hello' + who;
        let result = foo(10);

        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Blink text={'I love you!'}></Blink>
                <Blink text={'明天是个好天气'}></Blink>
                <Blink text={str + result}></Blink>
                <Blink text={this.reduceFunction(10)}></Blink>
            </View>
        )
    }
}


export default BlinkApp
