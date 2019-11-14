import {Component} from 'react'
import React from 'react'
import {Colors} from 'react-native/Libraries/NewAppScreen'

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native'




class ScrollViewDemo extends Component{
    render(){
        return(
            <View style={{backgroundColor: 'white', padding: 10}}>
                <ScrollView style={{backgroundColor: Colors.light}}>
                    <Text style={{fontSize: 96}}>Scroll me plz</Text>
                    <Image style={{width:300,height:300}} source={require('../img/react_icon.png')} />
                    <Image style={{width:300,height:300}} source={require('./react_icon.png')}></Image>
                    <Text style={{fontSize: 96}}>If you like</Text>
                    <Image style={{width:300,height:300}} source={require('./react_icon.png')}></Image>

                </ScrollView>
            </View>
        )
    }
}

const jjStyle = StyleSheet.create({
    contentViewStyle: {
        flex: 1,
        backgroundColor: Colors.light
    }
})


export default ScrollViewDemo