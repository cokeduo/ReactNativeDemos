import React from 'react'
import {Component} from 'react'
import {
    TextInput,
    Text,
    View,
    StyleSheet,
} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen';


class TextInputDemo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        return(
            <View style={jjStyle.contentStyle}>
                <TextInput
                    style={jjStyle.textInputStyle}
                    placeholder={'placeholder'}
                    onChangeText={(text) => this.setState(text={text})}
                />

                <Text style={{padding: 10, fontSize:42}}>
                    {this.state.text.split(' ').map((word) => word && '😸').join(' ')}
                </Text>
            </View>
        )
    }
}

const jjStyle = StyleSheet.create({
    contentStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    textInputStyle: {
        width: 200,
        height: 40,
        backgroundColor: Colors.light,
        marginTop: 80
    }
});


export default TextInputDemo