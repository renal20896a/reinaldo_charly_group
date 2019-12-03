import React, {Component} from 'react';
import {View, Text, Image, ActivityIndicator, ImageBackground, RefreshControl} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import MapView from 'react-native-maps';

class Info extends Component{
    render(){
        
        return(
            <ScrollView>
                <ImageBackground source={require('../../../assets/info1.jpg')} style={{height: 145}}>
                    <View  style={{flex:1, flexDirection:'row', marginTop:50, marginLeft:15}}>
                        <View style={{flex:1}}>
                            <Text style={{color: 'white', fontSize: 12, textAlign:'left'}}>The fear of the Lord</Text>
                            <Text style={{color: 'white', fontSize: 12, textAlign:'left'}}>is the beginning of knowledge</Text>
                            <Text style={{color: 'white', fontSize: 12, textAlign:'left'}}>Always put God first</Text>
                        </View>
                        <View style={{flex:1, left: 35}}>
                            <View style={{flexDirection:'row', marginBottom: 10}}>
                                <Text style={{color: 'white', fontSize: 6, textAlign:'center', backgroundColor:'#3C2767', paddingVertical: 2, paddingHorizontal:5, borderRadius:2}}>Business School</Text>
                                <Text style={{color: 'white', fontSize: 6, textAlign:'center', backgroundColor:'#F4C155', paddingVertical: 2, paddingHorizontal:5, borderRadius:2}}>Pendidikan</Text>
                                <Text style={{color: 'white', fontSize: 6, textAlign:'center', backgroundColor:'#783298', paddingVertical: 2, paddingHorizontal:5, borderRadius:2}}>Filsafat</Text>
                            </View>
                            <View style={{flexDirection:'row', marginBottom: 10}}>
                                <Text style={{color: 'white', fontSize: 6, textAlign:'center', backgroundColor:'#3C2767', paddingVertical: 2, paddingHorizontal:5, borderRadius:2}}>Keperawatan</Text>
                                <Text style={{color: 'white', fontSize: 6, textAlign:'center', backgroundColor:'#F4C155', paddingVertical: 2, paddingHorizontal:5, borderRadius:2}}>Komputer</Text>
                                <Text style={{color: 'white', fontSize: 6, textAlign:'center', backgroundColor:'#783298', paddingVertical: 2, paddingHorizontal:5, borderRadius:2}}>Pertanian</Text>
                            </View>
                            <View style={{flexDirection:'row', marginBottom: 10}}>
                                <Text style={{color: 'white', fontSize: 6, textAlign:'center', backgroundColor:'#3C2767', paddingVertical: 2, paddingHorizontal:5, borderRadius:2}}>ASMI</Text>
                                <Text style={{color: 'white', fontSize: 6, textAlign:'center', backgroundColor:'#F4C155', paddingVertical: 2, paddingHorizontal:5, borderRadius:2}}>Pascasarjana</Text>
                            </View>
                        </View>    
                    </View>
                </ImageBackground>
                <View style={{borderRadius:4, paddingBottom: 15, backgroundColor:'#3C2767'}}>
                    <Text style={{fontSize: 22, fontWeight:'bold', textAlign:'center', color:'white'}}>VISI</Text>
                    <Text style={{fontSize: 12, textAlign:'center', color:'white', marginBottom:10}}>Menjadi universitas swasta Kristen Masehi Advent Hari Ketujuh yang memperoleh pengakuan secara nasional, dan internasional melalui pendidikan, pengajaran, penelitian, dan pengabdian kepada masyarakat yang bermutu dengan dilandasi pada suatu proses pengembangan yang serasi yakni spiritual, intelektual, fisik dan sosial.</Text>
                    <ActivityIndicator size='small' color="#ffffff" />
                </View>
                <View style={{borderRadius:4, paddingBottom: 15, backgroundColor:'#F4C155'}}>
                    <Text style={{fontSize: 22, fontWeight:'bold', color:'white', textAlign:'center'}}>MISI</Text>
                    <Text style={{fontSize: 12, color:'white', textAlign:'center', marginBottom: 10}}>Universitas Klabat bertekad mencapai keunggulan mutu dalam pendidikan Kristen Masehi Advent Hari Ketujuh dengan menciptakan lingkungan yang kondusif untuk pengembangan karakter Kristiani yang mulia dan untuk pembekalan ketrampilan dan ilmu pengetahuan kepada mahasiswa agar bisa menjadi warga negara yang mampu hidup mandiri dan bekerja untuk melayani sesama manusia tanpa mementingkan diri sendiri.</Text>
                    <ActivityIndicator size='small' color="#ffffff" />
                </View>
                <MapView
                  initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                />
                <View style={{height: 145}}>
                    <Image source={require('../../../assets/info2.png')} style={{borderRadius:4, height: undefined, width: undefined, resizeMode:'cover', flex:1}} />
                </View>
            </ScrollView>
        )
    }
}

export default Info;