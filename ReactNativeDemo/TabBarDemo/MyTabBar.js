import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator';


class HomePage extends Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange'}}>
                <Text>HomePage</Text>
            </View>
        )
    }
}


class PersonPage extends Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
                <Text>PersonPage</Text>
            </View>
        )
    }
}


class MyTabBar extends Component{

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: '首页'
        }
    }

    // 封装tabbar
    _renderTabbarItem(selectedTab, icon, selectedIcon, Component) {
        return (
            <TabNavigator.Item
                title={selectedTab}
                selected={this.state.selectedTab === selectedTab}
                renderIcon={() => <Image source={icon} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={selectedIcon} style={styles.iconStyle}/>}
                onPress={() => this.setState({selectedTab: selectedTab})}
            >
                <Component/>
            </TabNavigator.Item>
        )
    }

    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
                <TabNavigator
                    // tabbar item文字+图标偏移
                    // tabBarStyle={{paddingBottom: 34}}
                    // tabbar.view 底部偏移
                    // sceneStyle={{marginBottom: 10, backgroundColor: 'red'}}
                >
                    {this._renderTabbarItem('首页', require('../TabBarDemo/TagImgs/home_normal.png'), require('../TabBarDemo/TagImgs/home_select.png'), HomePage)}
                    {this._renderTabbarItem('我的', require('../TabBarDemo/TagImgs/person_normal.png'), require('../TabBarDemo/TagImgs/person_select.png'), PersonPage)}
                </TabNavigator>
            </SafeAreaView>
        )
    }



    // render(){
    //     return(
    //         <TabNavigator>
    //             <TabNavigator.Item
    //                 title={'首页'}
    //                 selected={this.state.selectedTab === 'home'}
    //                 titleStyle={{color: '#9d9d9d'}}
    //                 selectedTitleStyle={{color: '#ed7f30'}}
    //                 badgeText={'1'}
    //                 allowFontScaling={false}
    //                 renderIcon={() => <Image source={require('../TabBarDemo/TagImgs/home_normal.png')} style={styles.iconStyle}/>}
    //                 renderSelectedIcon={() => <Image source={require('../TabBarDemo/TagImgs/home_select.png')} style={styles.iconStyle}/>}
    //                 onPress={() => {
    //                     this.setState({
    //                         selectedTab : 'home'
    //                     })
    //                 }}
    //             >
    //                 <HomePage/>
    //             </TabNavigator.Item>
    //
    //             <TabNavigator.Item
    //                 title={'我的'}
    //                 selected={this.state.selectedTab === 'person' }
    //                 titleStyle={{color: '#9d9d9d'}}
    //                 selectedTitleStyle={{color: '#ed7f30'}}
    //                 renderBadge={()=> <Text style={{color: 'purple'}}>11</Text>}
    //                 renderIcon={() => <Image source={require('../TabBarDemo/TagImgs/person_normal.png')} style={styles.iconStyle}/>}
    //                 renderSelectedIcon={() => <Image source={require('../TabBarDemo/TagImgs/person_select.png')} style={styles.iconStyle}/>}
    //                 onPress={() => {
    //                     this.setState({
    //                         selectedTab: 'person'
    //                     })
    //                 }}
    //             >
    //                 <FavorPage/>
    //             </TabNavigator.Item>
    //         </TabNavigator>
    //     )
    // }
}


const styles = StyleSheet.create({
    homeViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        height: 25,
        width: 25,
    }
})


export default MyTabBar

