import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

class News2 extends Component{
    render(){
        return(

        <TouchableOpacity style={{marginHorizontal: 15, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor:'#E8E9ED'}}>
            <Text> Salah posisi duduk bikin pekerja kantoran rentan</Text>
            <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems:'center', marginVertical : 10}}>
                <View style={{height: 70, width:100}}>
                    <Image source={require('../../../assets/ss.png')} style={{height: undefined, width: undefined, resizeMode:'cover', flex:1, borderRadius:6}} />
                </View>
                <View style={{height: 70, width:100, marginHorizontal:5}}>
                    <Image source={require('../../../assets/ss.png')} style={{height: undefined, width: undefined, resizeMode:'cover', flex:1, borderRadius:6}} />
                </View>
                <View style={{height: 70, width:100}}>
                    <Image source={require('../../../assets/ss.png')} style={{height: undefined, width: undefined, resizeMode:'cover', flex:1, borderRadius:6}} />
                </View>
            </View>
            <Text style={{alignSelf:'flex-end'}}>2019-11-22</Text>
        </TouchableOpacity>
        )
    }
}

export default News2;