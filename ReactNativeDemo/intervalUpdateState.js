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
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text style={{color:'red'}}>{display}</Text>
        )
    }
}

//{/*<Blink text={'I love you'}></Blink>*/}

class BlinkApp extends Component{
    render() {
        return (
            <View>
                <Blink text={'I love you!'}></Blink>
                <Blink text={'明天是个好天气'}></Blink>
            </View>
        )
    }
}


export default BlinkApp
