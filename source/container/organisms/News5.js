import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

class News5 extends Component{
    render(){
        return(

        <TouchableOpacity style={{backgroundColor:'white', flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginHorizontal: 15, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor:'#E8E9ED'}}>
            <View style={{flex:1}}>
            <Text>Seniors Class Batch 81</Text>

            </View>
            <View style={{height: 70, width: 100}}>
                <Image source={{uri:"http://www.unklab.ac.id/sites/default/files/styles/thumbnail/public/2019-11/20191022_102630_1.jpg?itok=dXpceiN_"}} style={{height:undefined, width:undefined, resizeMode:'cover', flex:1, borderRadius:6}}/>
            </View>
        </TouchableOpacity>
        )
    }
}

export default News5;