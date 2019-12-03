import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

class News1 extends Component{
    render(){
        return(
        <TouchableOpacity style={{backgroundColor:'white', flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginHorizontal: 15, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor:'#E8E9ED'}}>
            <View style={{flex:1}}>
            <Text>UBS International Exchange Students dan International Conference</Text>

            </View>
            <View style={{height: 70, width: 100}}>
                <Image source={{uri:"http://www.unklab.ac.id/sites/default/files/inline-images/74336027_2819720774746581_8143186692463919104_o.jpg"}} style={{height:undefined, width:undefined, resizeMode:'cover', flex:1, borderRadius:6}}/>
            </View>
        </TouchableOpacity>
        )
    }
}

export default News1;