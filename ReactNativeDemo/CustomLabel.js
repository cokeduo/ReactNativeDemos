// import React, {Component} from 'react';
// import {AppRegistry, Text} from 'react-native';
//
//
//
// class HelloWorld extends Component{
//     render() {
//         return (
//             <Text>Hello world!</Text>
//         )
//     }
// }
//
//
// export default HelloWorld




import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';



class Greating extends Component{
    render() {
        return (
            <Text>我的名字叫： {this.props.name}, 我今年{this.props.age}岁了！ </Text>
        )
    }
}


class CustomLabel extends Component{
    render() {
        return (
            <View style={styles.backViewStyle}>
                <Greating name={'zhangsan'} age={'20'}></Greating>
                <Greating name={'lise'} age={22}></Greating>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    backViewStyle: {
        flex: 1,
        backgroundColor: Colors.light,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CustomLabel
