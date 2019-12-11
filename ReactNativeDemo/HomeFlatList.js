import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    SafeAreaView,
} from 'react-native'

import {createAppContainer, withNavigationFocus} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import ajax from './utils/fetch'
import HomeFlatListDetail from './HomeFlatListDetail';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');


/************** 首页 list ******************/

class HomeFlatList extends Component{

    // 配置导航栏信息
    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props);

        this.state = {
            sourceData: [],
            refreshing: false,
            flatHeight: 0,
        }
    }

    currPage = 0;

    _getNewsList = () => {
        let _this = this;
        let requestCode = 'T1348648517839'

        ajax({
            url: `http://c.m.163.com/nc/article/headline/${requestCode}/${_this.currPage}-10.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=10&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore`,
            method: 'GET',
            success: (data) => {
                _this.setState({
                    sourceData: _this.state.refreshing? data[requestCode] : [..._this.state.sourceData, ...data[requestCode]]
                });
                _this.currPage += 10;
            },
            error: (err) => {
                alert('网络请求异常');
            },
            complete: () => {
                _this.state.refreshing && _this.setState({refreshing: false});
            }
        });
    }


    /**
     * 次函数用于为给定的item生成一个不重复的key
     * key 的作用是使react能够区分同类元素的不同个体，以便在刷新的时候能确定其变化的位置，减少重复渲染的开销
     * 若不指定次函数，则默认抽取item.key作为key值，若key.item不存在，则使用数组下标
     */
    _keyExtractor = (item, index) => index + '';

    _onClickListItemAction = (item) => {
        this.props.navigation.push('HomeDetail',{item})
    }

    _renderItem = ({item}) => {
        return(
            <HomeFlatListItem
                item={item}
                onClickItem={this._onClickListItemAction}
            >
            </HomeFlatListItem>
        )
    }

    // 下拉刷新
    _renderRefresh = ()=> {
        this.setState({
            refreshing: true
        });
        this.currPage=0;
        this._getNewsList();
    }

    _renderReached = ()=> {
        this._getNewsList()
    }

    // 分割线
    _renderItemSeparatorComponent = ()=> {
        return(
            <View style={{height:1, backgroundColor: '#e6e6e6'}}></View>
        )
    }

    // 没有数据时候页面提示
    _renderEmptyView = ()=> {
        return(
            <View style={{height: this.state.flatHeight, backgroundColor: '#f8f8f8', justifyContent:'center', alignItems:'center', marginTop:100}}>
                <Image source={require('./TabBarDemo/TagImgs/home_normal.png')} resizeMode={'contain'} style={{width:80, height:80}}></Image>
            </View>
        )
    }

    _setFlatListHeight = (e)=> {
        let height = e.nativeEvent.layout.height;
        if (this.state.flatHeight < height) {
            this.setState({flatHeight: height})
        }
    }

    // Footer视图
    _renderFooter = ()=> {
        let len = this.state.sourceData.length;
        return(
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height: len<1?0:150}}>
                <Image source={require('./utils/rnloading.gif')} resizeMode={'contain'} style={{width: 100, height: len<1?0:150, marginRight:5}}/>
                <Text>正在加载...</Text>
            </View>

        )
    }

    // Header 视图
    _renderHeader = ()=> {
        return(
            <View>
                <Image style={{height:100,width: screenWidth}} source={require('./utils/rnheader.gif')}/>
            </View>
        )
    }

    /**
     * 此函数用于为给定的item生成一个不重复的key
     * key 的作用是使react能够区分同类元素的不同个体，以便在刷新的时候能够确定其变化的位置，减少重新渲染的开销
     * 若不指定次函数，则默认抽取item.key作为key的值，若item.key不存在，组使用数组下标
     */
    _keyExtractor = (item, index) => index + '';

    componentDidMount(): void {
        this._getNewsList()
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                    ref={ref => this.flatList = ref}
                    keyExtractor={this._keyExtractor}
                    data={this.state.sourceData}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this._renderItemSeparatorComponent}
                    initialNumToRender={5}
                    // 正在加载的时候设置为true
                    refreshing={this.state.refreshing}
                    // 下拉刷新控件，同时需要正确设置refreshing属性
                    onRefresh={this._renderRefresh}
                    onEndReachedThreshold={0.1}
                    // 上拉加载, 当列表被滚动到距离内容底部不足onEndReachedThreshold设置的距离时调用次函数
                    onEndReached={this._renderRefresh}
                    ListEmptyComponent={this._renderEmptyView}
                    ListFooterComponent={this._renderFooter}
                    ListHeaderComponent={this._renderHeader}
                    onLayout={this._setFlatListHeight}
                />

                {/*<Text>今天是个好天气hahah</Text>*/}

            </SafeAreaView>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    }
})



/*************** 自定义cell ***************/

class HomeFlatListItem extends Component{


    // 点击cell事件回传
    _onPress = (item)=> {
        this.props.onClickItem(item)
    }

    render(){
        let item = this.props.item

        let isThreePic = item['imgnewextra']
        let isVideo = item['videoinfo']

        if(isThreePic) {
            return(
                <TouchableOpacity
                    onPress={()=> this._onPress(item)}
                    style={{padding:7}}
                >
                    <View style={{justifyContent: 'space-between'}}>
                        <Text style={{fontSize:16, lineHeight: 25, color:'#2c2c2c'}}>{item.title}</Text>

                        <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between'}}>
                            <Image source={{uri:item.imgsrc}} style={{width: screenWidth*0.35, height: 80}}/>
                            {
                                item.imgnewextra.map((imgItem, index) => (
                                    <Image source={{uri: imgItem.imgsrc}} key={index+''} style={{width:screenWidth*.3, height:80}}></Image>
                                ))
                            }
                        </View>


                        <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginRight:6}}>{item.source}</Text>
                                <Text style={{marginRight:6}}>{item.replyCount}跟帖</Text>
                            </View>

                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={()=> {alert('x')}}
                            >
                                <Text>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }

        if (isVideo){
            return (
                <View>
                    <Text style={{padding:7, borderBottomWidth:1,borderBottomColor: '#e8e8e8', color: 'red'}}>这特么视频没有资源</Text>
                </View>
            )
        }else {
            // return <Text>哈哈，傻逼了吧</Text>

            return (
                <TouchableOpacity
                    onPress={()=>this._onPress(item)}
                    activeOpacity={0.8}
                    style={{padding:7}}
                >
                    <View>
                        <Text style={{fontSize:16, lineHeight:25, color:'#2c2c2c'}}>这是视频{item.title}</Text>

                        <ImageBackground source={{uri: item.imgsrc}} resizeMode={'cover'} style={{height:180, marginVertical:6, justifyContent:'center', alignItems:'center'}}>
                            <View style={{width:50, height:50, borderRadius: 25, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={require('./TabBarDemo/TagImgs/home_normal.png')} resizeMode={'contain'} style={{width:18, height:18, marginLeft:3}}></Image>
                            </View>
                        </ImageBackground>

                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{marginRight:6}}>{item.source}</Text>
                                <Text style={{marginRight:6}}>{item.replyCount}跟帖</Text>
                            </View>

                            <Text>X</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }

    }

}


// /************** 导航栏 ******************/


const HomeFlatListNavigator = createStackNavigator(
    {
        Home: HomeFlatList,
        HomeDetail: HomeFlatListDetail,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            // 导航统一默认配置
            headerStyle: {
                backgroundColor: 'white', // 导航栏背景颜色
            },
            headerTintColor: '#fff', // 导航栏标题和返回按钮前景色
            headerTitleStyle: {
                // 导航栏标题设置
                fontWeight: 'bold',
                color: 'black',
            },
        },
    },
    {
        mode: 'model',
        headerMode: 'none'
    }
)

const HomeListNavigatorDemo = createAppContainer(HomeFlatListNavigator)
export default HomeListNavigatorDemo

















