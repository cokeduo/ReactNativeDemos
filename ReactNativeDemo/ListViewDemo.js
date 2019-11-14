// import React ,{Component} from 'react';
// // import {
// //     View,
// //     ListView,
// // } from 'react-native';

import React, { Component } from 'react';
import {
    Text,
    View ,
    FlatList,
    StyleSheet,
    Button
} from 'react-native';


class ListViewDemo extends Component{

    constructor(props) {
        super(props);
    }

    refreshAction(){
        let timer = setTimeout(()=>{
            clearTimeout(timer)
            alert('刷新成功')
        },1500)
    }

    _onload(){
        let timer = setTimeout(()=>{
            clearTimeout(timer)
            alert('加载成功')
        },1500)
    }


    render() {

        var data = [];
        for (var i = 0; i < 30; i++){
            data.push({key: i, title: i + ''});
        }

        return (
            <View style={{flex: 1}}>

                <Button title={'滚动到指定位置'} onPress={()=>{
                    this._flatList.scrollToOffset({animated:true, offset:2000});
                }}/>


                <FlatList
                    ref={(flatList) => this._flatList = flatList}

                    ListHeaderComponent={this._header()}  // 绘制header
                    ListFooterComponent={this._footer()}  // 绘制footer
                    ItemSeparatorComponent={this._separator} // 自定义cell分割线
                    renderItem={this._renderItem}   // 绘制cell

                    onRefresh={this.refreshAction} // 下拉刷新事件
                    refreshing={false} //  在等待加载新数据时将此属性设置为true，触发刷新

                    onEndReachedThreshold={0} // 下滑距离底部多少距离时触发刷新操作(0-1,比例设置，0.5即一般距离时触发刷新)
                    onEndReached={
                        this._onload  // 上拉刷新
                    }

                    numColumns={3}  // cell中数据已3列展示
                    columnWrapperStyle={{borderWidth: 5, borderColor: 'green', paddingLeft: 20, paddingRight: 20}}

                    // horizontal={true} // 控制方向，默认竖直方向展示


                    // getItemLayout={(data, index) =>(
                    //     {length: 100, offset: (100+2) * index, index}
                    // )}

                    getItemLayout={(data, index)=>(
                        {length: 100, offset: (100+2) * index,index}
                    )}


                    data={data}
                >

                </FlatList>

            </View>
        );
    }

    _renderItem = (item) => {
        let txt = '第' + item.index + '个' + ' title=' + item.item.title;
        let bgColor = item.index % 2 === 0 ? '#ef7e1c' : '#3743ea';
        return (
            <Text style={[{flex: 1, height:100, backgroundColor: bgColor}, styles.txt]}>{txt}</Text>
        )
    }

    _header = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是头部</Text>
    }

    _footer = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是尾部</Text>
    }

    _separator = () => {
        return <View style={{height: 2, backgroundColor: 'red'}}/>
    }


}

const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
})




export default ListViewDemo