import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import News2 from '../organisms/News2';
import News1 from '../organisms/News1';
import Internal from '../organisms/Internal';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            A: FIK
        }
    }
    render(){
        return(
          <View>
            <View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{height:30}}>
                    <TouchableOpacity style={{width: 100, alignSelf:'center'}} onPress={() => this.setState({A: FIK})}>
                        <Text style={{textAlign:'center'}}>FIK</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width: 100, alignSelf:'center'}} onPress={() => this.setState({A: FEKON})}>
                        <Text style={{textAlign:'center'}}>FEKON</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width: 100, alignSelf:'center'}} onPress={() => this.setState({A: FKIP})}>
                        <Text style={{textAlign:'center'}}>FKIP</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{width: 100, alignSelf:'center'}} onPress={() => this.setState({A: FIKEP})}>
                        <Text style={{textAlign:'center'}}>FIKEP</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{width: 100, alignSelf:'center'}} onPress={() => this.setState({A: FILSAFAT})}>
                        <Text style={{textAlign:'center'}}>FILSAFAT</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{width: 100, alignSelf:'center'}} onPress={() => this.setState({A: PERTANIAN})}>
                        <Text style={{textAlign:'center'}}>PERTANIAN</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{width: 100, alignSelf:'center'}} onPress={() => this.setState({A: ASMIK})}>
                        <Text style={{textAlign:'center'}}>ASMIK</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>  
            <View>
                {this.state.A}
            </View>
          </View>  
        )
    }
}

const FIK = (
            <View>
                <ScrollView>
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
                </ScrollView>
            </View>
)

const FEKON = (
    <View>
        <ScrollView>
            <Text> Test </Text>
            {/* Internal Section */}
            <Internal/>

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
        </ScrollView>
    </View>
)

const FKIP = (
    <View>
        <ScrollView>
            <Text> Test </Text>
            {/* News #1 */}
            <News1/>
            {/* Internal Section */}
            <Internal/>
            <News1/>
            <News1/>
            <News1/>
            <News1/>

            {/* News #2 */}
            <News2/>

            {/* Internal Section */}
            <Internal/>
        </ScrollView>
    </View>
)

const FIKEP = (
    <View>
        <ScrollView>
            <Text> Test </Text>
            {/* News #1 */}
            <News1/>
            <News1/>
            <News1/>
            {/* Internal Section */}
            <Internal/>
            <News1/>
            <News1/>

            {/* News #2 */}
            <News2/>

            {/* Internal Section */}
            <Internal/>
        </ScrollView>
    </View>
)

const FILSAFAT = (
    <View>
        <ScrollView>
            <Text> Test </Text>
            {/* News #1 */}
            <News1/>
            <News1/>
            <News1/>
            <News1/>
            {/* Internal Section */}
            <Internal/>
            <News1/>

            {/* News #2 */}
            <News2/>

            {/* Internal Section */}
            <Internal/>
        </ScrollView>
    </View>
)

const PERTANIAN = (
    <View>
        <ScrollView>
            <Text> Test </Text>
            {/* News #1 */}
            <News1/>
            {/* News #2 */}
            <News2/>
            <News1/>
            <News1/>
            <News1/>
            <News1/>

            {/* News #2 */}
            <News2/>

            {/* Internal Section */}
            <Internal/>
        </ScrollView>
    </View>
)

const ASMIK = (
    <View>
        <ScrollView>
            <Text> Test </Text>
            {/* News #1 */}
            <News1/>
            <News1/>
            {/* News #2 */}
            <News2/>
            <News1/>
            <News1/>
            <News1/>

            {/* News #2 */}
            <News2/>

            {/* Internal Section */}
            <Internal/>
        </ScrollView>
    </View>
)
export default Home;