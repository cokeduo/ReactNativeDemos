import React, {Component} from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
} from 'react-native'


import ajax from './utils/fetch'
import HTMLView from 'react-native-htmlview'

class HomeFlatListDetail extends Component{

    constructor(props) {
        super(props);


        this.state = {
            newData: '',
            body: '',
        }
    }

    _getNewData(){
        var item = this.props.navigation.getParam('item')
        let _this = this;
        let docid = item.docid

        let url1 = `http://c.m.163.com/nc/article/${docid}/full.html`
        console.log('url1 is :', url1)

        ajax({
            url:`http://c.m.163.com/nc/article/${docid}/full.html`,
            success: (data)=>{
                let body = data[docid].body;
                data[docid]['img'].forEach(item => {
                    console.log('body1 is ', body)
                    body = body.replace(item.ref,`<img src="${item.src}"/>`)
                    console.log('body2 is ', body)
                });
                _this.setState({
                    newData: data[docid],
                    body: body
                })
            },
            error: (err)=>{
                console.info('详情请求错误:');
                console.info(err);
            }
        })
    }

    _renderNode(node, index, siblings, parent, defaultRender){
        if (node.name === 'img'){
            const a = node.attribs
            return(
                <Image source={{url:a.src}} key={index} resizeMode={'stretch'} style={{flex:1, height:230, marginTop:35}}/>
            )
        }
    }

    componentDidMount(): void {
        this._getNewData()
    }

    render(){
        var item = this.props.navigation.getParam('item')
        console.log('id is :' + item.docid)
        return(
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={{padding: 10}}>
                        <Text style={{fontSize: 22, fontWeight: 'bold', color:'#2c2c2c', marginBottom: 10, lineHeight: 35}}>{this.state.newData.title}</Text>
                        <Text>{this.state.newData.source}  {this.state.newData.ptime}</Text>
                    </View>


                    <HTMLView
                        value={this.state.body}
                        onLinkPress={(url)=>alert('click link', url)}
                        stylesheet={htmlStyles}
                        renderNode={this._renderNode}
                    />

                </ScrollView>
            </View>
        )
    }
}

const htmlStyles = StyleSheet.create({
    p:{
        color: 'gray',
        lineHeight: 30,
        fontSize:16
    }
})

export default HomeFlatListDetail
