import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

class Internal extends Component{
    render(){
        return(
            <TouchableOpacity style={{marginHorizontal: 15, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor:'#E8E9ED'}}>
                <Text style={{textAlign:"center"}}> Berita dari fakultas ini tidak tersedia</Text>
            </TouchableOpacity>
        )
    }
}

export default Internal;