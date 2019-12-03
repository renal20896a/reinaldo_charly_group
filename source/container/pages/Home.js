import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import News6 from '../organisms/News6'
import News5 from '../organisms/News5'
import News4 from '../organisms/News4'
import News3 from '../organisms/News3'
import News2 from '../organisms/News2';
import News1 from '../organisms/News1';
import Internal from '../organisms/Internal';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            A: ALL
        }
    }
    render(){
        return(
          <View>
            <View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{height:100}}>
                    <TouchableOpacity style={{width: 100, alignSelf:'center'}} onPress={() => this.setState({A: ALL})}>
                        <Text style={{textAlign:'center'}}>ALL</Text>
                    </TouchableOpacity>

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

const ALL = (
            <View>
                <ScrollView>
                    <News1/>
                    <News2/>
                    <News3/>
                    <News4/>
                    <News5/>
                    <News6/>
                </ScrollView>
            </View>
)

const FIK = (
    <View>
        <ScrollView>
            <News2 />
        </ScrollView>
    </View>
)

const FEKON = (
    <View>
        <ScrollView>
            <News1/>
        </ScrollView>
    </View>
)

const FKIP = (
    <View>
        <ScrollView>
           <News3/>
        </ScrollView>
    </View>
)

const FIKEP = (
    <View>
        <ScrollView>
            <Internal/>
        </ScrollView>
    </View>
)

const FILSAFAT = (
    <View>
        <ScrollView>
            <Internal/>
        </ScrollView>
    </View>
)

const PERTANIAN = (
    <View>
        <ScrollView>
            <Internal/>
        </ScrollView>
    </View>
)

const ASMIK = (
    <View>
        <ScrollView>
            <Internal/>
        </ScrollView>
    </View>
)
export default Home;