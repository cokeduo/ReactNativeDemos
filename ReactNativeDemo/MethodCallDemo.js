import React from 'react'
import {Component} from 'react'
import {
    View,
    Text,
    Button,
} from 'react-native'


class CallMethodDemo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: 'default'
        }
    }


    method1() {
        alert('该种声明方法不能调用 this.setState 更新状态')
    }

    method2 = ()=> {
        alert('该种声明方法可以使用 this.setState 更新状态')
        this.setState({
            name: 'zhangsan'
        })
    }

    method3 = (param)=> {
        alert(param)
    }

    method4(param) {
        alert(param)
    }



    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>

                <Text>{this.state.name}</Text>

                <Button
                    title={'该种声明方法不能调用 this.setState 更新状态'}
                    onPress={this.method1}
                />
                <Button
                    title={'该种声明方法可以使用 this.setState 更新状态'}
                    onPress={this.method2}  // 方法调用后面不要加括号()
                />

                <Button
                    title={'带参数的方法调用方式一'}
                    onPress={()=>this.method3('带参数的方法调用方式一')}
                />

                <Button
                    title={'带参数的方法调用方式二'}
                    onPress={()=>this.method4('带参数的方法调用方式二')}
                />
            </View>
        )
    }
}

export default CallMethodDemo



