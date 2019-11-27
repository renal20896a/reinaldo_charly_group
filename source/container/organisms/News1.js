import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

class News1 extends Component{
    render(){
        return(
        <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginHorizontal: 15, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor:'#E8E9ED'}}>
            <Text>Apa yang telah terjadi</Text>
            <View style={{height: 70, width: 100}}>
                <Image source={require('../../../assets/amien-rais.jpg')} style={{height:undefined, width:undefined, resizeMode:'cover', flex:1, borderRadius:6}}/>
            </View>
        </TouchableOpacity>
        )
    }
}

export default News1;