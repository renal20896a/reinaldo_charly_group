import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import News2 from '../organisms/News2';
import News1 from '../organisms/News1';
import Internal from '../organisms/Internal';

class Home extends Component{
    render(){
        return(
            <ScrollView style={{flex:1}}>
                {/* News #1 */}
                <News1/>
                <News1/>
                <News1/>
                <News1/>
                <News1/>

                {/* News #2 */}
                <News2/>

                {/* Internal Section */}
                <Internal/>
                <Text>asdfasdfsadfaksdfjkhasdfjhkasdjkfhasdjhfbjsadbfhjasbfkhasdkhjfbjasdhbfhkjsadbjfhbasdhjfbsd nbmnbmmmn nbbhgggh ghfyhfhg jhghg hggfhghf hggfhgfhgf hgfhgf</Text>

            </ScrollView>
        )
    }
}

export default Home;