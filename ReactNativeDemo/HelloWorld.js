import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';



class HelloWorld extends Component{
    render() {
        return (
            <View style={myStyle.viewStyle}>
                <Text style={myStyle.textStyle}>Hello world!</Text>
            </View>
        )
    }
}


const myStyle = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#4143ff',
        fontSize: 40,
        fontWeight: 'bold'
    }
});

export default HelloWorld
