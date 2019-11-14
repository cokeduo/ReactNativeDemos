import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {
    Component
} from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';



// const QQLogin: () => React$Node = () => {
//     return (
//         <View style={styles.backViewStyle}>
//             <View>
//                 <Text>头像</Text>
//             </View>
//             <View>
//                 <Text>账号</Text>
//                 <Text>密码</Text>
//             </View>
//             <View>
//                 <Text>登录</Text>
//             </View>
//             <View>
//                 <Text>忘记密码</Text>
//                 <Text>用户注册</Text>
//             </View>
//         </View>
//     )
// };

let {KScreenWidth, KScreenHeight} = Dimensions.get('window');
let kwidth = Dimensions.get('window').width;
let kheight = Dimensions.get('window').height;

class QQLogin extends Component{

    state={
        curText: 'default Text'
    }

    updateText = (text) => {
        this.setState((state) => {
            return {
                curText: text
            }
        })
    }

    onPressAction(){
        alert("onPressButton")
    }

    render(){
        return (
            <View style={styles.backViewStyle}>
                <Text ref={'label'}
                    style={styles.changeLabelStyle}
                >{this.state.curText}</Text>

                {/*本地图片加载*/}
                <Image
                    style={styles.iconStyle}
                    source={require('../img/react_icon.png')}>
                </Image>

                <TextInput
                    style={styles.inputStyle}
                    placeholder={"请输入用户名"}
                    onChange={(event) => this.updateText(
                        'TextInput.onChangedAction' + event.nativeEvent.text
                    )}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="请输入密码"
                />

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>{alert('️👍')}}
                >
                    <View style={styles.loginBtnStyle}>
                        <Text>登录</Text>
                    </View>
                </TouchableOpacity>


                <TouchableWithoutFeedback
                    onPress={()=>{alert('onPress事件')}}
                >
                    <Text>TEST</Text>
                </TouchableWithoutFeedback>

                <View style={styles.actionBackViewStyle}>
                    <Text style={styles.forgetBtnStyle}>忘记密码</Text>
                    <Text style={styles.registBtnStyle}>用户注册</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    changeLabelStyle: {
        position: 'absolute',
        left: 10,
        top: 20,
        color: 'red'
    },
    backViewStyle: {
        flex: 1,
        backgroundColor: Colors.light,
        alignItems: 'center'
    },
    iconStyle: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginTop: 80,
        marginBottom:20
    },
    inputStyle: {
        width: kwidth,
        height: 40,
        backgroundColor: 'skyblue',
        marginBottom: 1,
    },
    loginBtnStyle: {
        width: 0.9 * kwidth,
        height: 40,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    actionBackViewStyle: {
        marginTop: 15,
        width: 0.9 * kwidth,
        height: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    forgetBtnStyle: {

    },
    registBtnStyle: {

    }
});


export default QQLogin;
