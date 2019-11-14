import React from 'react'
import {Component} from 'react'

import {
    View,
    Text,
    Button,
    FlatList,
    TouchableOpacity,
} from 'react-native'


class RequestDemo extends Component{

    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
        }
    }


    getMoviesFromApiAsync = () => {

        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                console.log(responseJson.movies)

            let ds = responseJson.movies
            let data = []
            for(let i = 0; i < ds.length; i++){
                data.push(ds[i])
            }
            this.setState({
                dataSource: data
            })
        })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        return(
            <View style={{flex: 1, padding: 20}}>
                <Button
                    title={'请求数据'}
                    onPress={this.getMoviesFromApiAsync}
                />
                <FlatList
                    renderItem={this._renderItem}
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this._separatorRender}
                />
            </View>
        )
    }

    _renderItem = (item) => {
        let txt = '第' + item.index + '个' + item.item.title
        return (
            <TouchableOpacity
                style={{opacity: 0.5}}
                onPress={()=>this._clickedCellIndex(item.index)}
            >
                <View style={{flex:1, height: 100}}>
                    <Text>This is number id : {item.item.id}</Text>
                    <Text>This is title : {item.item.title}</Text>
                    <Text>This is releaseYear: {item.item.releaseYear}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _separatorRender(){
        return <View style={{backgroundColor: 'black', height: 1}}></View>
    }

    _clickedCellIndex(index){
        alert('clicked id:' + index)
    }


}


export default RequestDemo