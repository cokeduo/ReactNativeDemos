import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
} from 'react-native';


const MoviesURL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

class MoveListDermo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
        }

        // fetchData 和 this 绑定
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount(): void {
        this.fetchData()
    }


    fetchData() {
        fetch(MoviesURL)
            .then(response => response.json())
            .then(responseData => {

                this.setState({
                    data: this.state.data.concat(responseData.movies),
                    loaded: true,
                })
            }).catch((error) => {
            console.error(error)
        })
    }

    render(){
        if (!this.state.loaded){
            return this.renderLoadingView()
        }

        return (
            <FlatList
            data={this.state.data}
            renderItem={this.renderMoveItem}
            style={styles.list}
            ItemSeparatorComponent={this.renderSeparotroView}
            />
        )
    }

    renderMoveItem({item}) {
        // item 是FlatList 中固定参数名
        return(
            <View style={styles.container}>
                <Image
                    source={{uri: item.posters.thumbnail}}
                    style={styles.thumbnail}
                >
                </Image>
                <View style={styles.rightContentStyle}>
                    <Text style={{fontSize: 20, color: 'rgba(0,0,0,0.75)'}}>{item.title}</Text>
                    <Text style={{fontSize: 12, color: 'orange'}}>{item.year}</Text>
                </View>
            </View>
        )
    }


    renderSeparotroView() {
        return(
            <View style={styles.seperatorStyle}></View>
        )
    }

    renderLoadingView() {
        return (
            <View style={styles.loadingView}>
                <Text>Loading movies...</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    loadingView: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'white'
    },

    thumbnail: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        height: 60,
        width: 100,
    },

    rightContentStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
    list: {
        paddingTop: 10,
        backgroundColor: '#F5FCFF',
    },
    seperatorStyle:{
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.1)'
    }


})


export default MoveListDermo
