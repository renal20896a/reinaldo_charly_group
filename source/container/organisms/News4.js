import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

class News4 extends Component{
    render(){
        return(

        <TouchableOpacity style={{backgroundColor:'white', flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginHorizontal: 15, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor:'#E8E9ED'}}>
            <View style={{flex:1}}>
            <Text>Safari Gemar Membaca Nasional 2019</Text>

            </View>
            <View style={{height: 70, width: 100}}>
                <Image source={{uri:"http://www.unklab.ac.id/sites/default/files/inline-images/20191025_093329_0.jpg"}} style={{height:undefined, width:undefined, resizeMode:'cover', flex:1, borderRadius:6}}/>
            </View>
        </TouchableOpacity>
        )
    }
}

export default News4;