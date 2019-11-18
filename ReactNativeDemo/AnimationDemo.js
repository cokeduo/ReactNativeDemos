import React, {Component} from 'react'
import {
    Animated,
    Text,
    View,
} from 'react-native'

class AnimatedView extends Component{

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),        // 透明度初始值设置为0
            backColor: '#10e816'
        };
    }

    componentDidMount(): void {
        Animated.timing(            // 随着时间变化而执行的动画类型
            this.state.fadeAnim,    // 动画过程中的变量值
            {
                toValue: 1,         // 透明度最终为1
                duration: 3000,     // 动画持续时间
                delay: 2000,        // 延时开始动画
            }
        ).start();                   // 开始执行动画
    }


    render(){
        return(
            <Animated.View style={{             // 动画视图组件
                ...this.props.style,
                opacity: this.state.fadeAnim,    // 将透明度指定为动画变量值
            }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

class AnimationDemo extends Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <AnimatedView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading agsgsin</Text>
                </AnimatedView>
            </View>
        )
    }
}


export default AnimationDemo