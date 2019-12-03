import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

class News6 extends Component{
    render(){
        return(

        <TouchableOpacity style={{backgroundColor:'white', flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginHorizontal: 15, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor:'#E8E9ED'}}>
            <View style={{flex:1}}>
            <Text>Penandatanganan Perjanjian Kerjasama Program Beasiswa Bank Indonesia</Text>

            </View>
            <View style={{height: 70, width: 100}}>
                <Image source={{uri:"http://www.unklab.ac.id/sites/default/files/inline-images/71205827_2711747495543910_8060443352937529344_n.jpg"}} style={{height:undefined, width:undefined, resizeMode:'cover', flex:1, borderRadius:6}}/>
            </View>
        </TouchableOpacity>
        )
    }
}

export default News6;