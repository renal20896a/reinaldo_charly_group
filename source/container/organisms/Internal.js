import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

class Internal extends Component{
    render(){
        return(
            <TouchableOpacity style={{marginHorizontal: 15, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor:'#E8E9ED'}}>
                <Text> Undang Teman Baca Bersama</Text>
                <View style={{height: 150,width:'100%', marginVertical:10}}>
                    <Image source={require('../../../assets/ss2.png')} style={{height: undefined, width: undefined, resizeMode:'cover', flex:1, borderRadius:6}} />
                </View>
                <Text style={{alignSelf:'flex-end'}}>2019-11-22</Text>
            </TouchableOpacity>
        )
    }
}

export default Internal;