import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Button,
} from 'react-native'


// 不同平台文件创建、引用规则

// 不同平台创建：
// BigButton.ios.js
// BigButton.android.js
// 然后去掉平台扩展名直接引用：, ReactNative 会根据运行平台不同自动引入正确对应的组件
// import BigButton from '../BigButton';
// web端复用文件那么可以使用.native.js为扩展名，iOS和安卓创建：BigButton.native.js, web端会使用 BigButton.js


class IOSPlatform extends Component{

    buttonAction() {

        let platform = '平台: ' + Platform.OS   // ios: iOS  安卓：android
        let version = 'Version: ' + Platform.Version.toString()

        let majorVersionIOS = 'majorVersion: ' + parseInt(Platform.Version, 10).toString()

        let content = platform + ' ' + version + ' ' + majorVersionIOS
        alert(content)

    }

    render() {
        return(
            <View style={styles.container}>
                <Text>iOS特定平台</Text>
                <Button title={'ios'} onPress={this.buttonAction}/>
            </View>
        )
    }

}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // 不同平台不同背景颜色
    platformStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        ...Platform.select({
            ios: {
                backgroundColor: 'red'
            },
            android: {
                backgroundColor: 'blue'
            }
        })

    }
})


export default IOSPlatform
