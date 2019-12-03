import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

class News3 extends Component{
    render(){
        return(

        <TouchableOpacity style={{backgroundColor:'white', flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginHorizontal: 15, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor:'#E8E9ED'}}>
            <View style={{flex:1}}>
            <Text>Presentasi dari Yehezkiel Tumewu, selaku Cultural Affairs Assistant and Education USA Advisor di US Consulate, Surabaya.</Text>

            </View>
            <View style={{height: 70, width: 100}}>
                <Image source={{uri:"https://scontent.fupg2-1.fna.fbcdn.net/v/t1.0-9/76895524_2838100249575300_2044690606566932480_n.jpg?_nc_cat=104&_nc_eui2=AeEbwJslKAS15pTMylLQqKcSzNstL-HZ83VLOoCvILRoIkGcMiI2TqH0yw-F3oA6gFL8q6r3QWJklhjYRfb4tua6VSAwQHNW47OpxdBQsVGtMw&_nc_ohc=mJyx2U1LQ34AQkgIn8_MuQs7E9n0f9SuDAl4LH4poXYFtBye--v-5nXOA&_nc_ht=scontent.fupg2-1.fna&oh=5861c977b12aa0c41daabc36876b911b&oe=5E8B4C6B"}} style={{height:undefined, width:undefined, resizeMode:'cover', flex:1, borderRadius:6}}/>
            </View>
        </TouchableOpacity>
        )
    }
}

export default News3;