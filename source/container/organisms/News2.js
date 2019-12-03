import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

class News2 extends Component{
    render(){
        return(

        <TouchableOpacity style={{backgroundColor:'white', flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginHorizontal: 15, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor:'#E8E9ED'}}>
            <View style={{flex:1}}>
            <Text>UNIQ goes to Finland</Text>

            </View>
            <View style={{height: 70, width: 100}}>
                <Image source={{uri:"http://www.unklab.ac.id/sites/default/files/inline-images/72436962_2817345141650811_8886161918083989504_o.jpg"}} style={{height:undefined, width:undefined, resizeMode:'cover', flex:1, borderRadius:6}}/>
            </View>
        </TouchableOpacity>
        )
    }
}

export default News2;