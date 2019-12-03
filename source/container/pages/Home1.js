import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

const news = [
        {id:1, title: "UBS International Exchange Students dan International Conference",  count:"Fekon", image:"http://www.unklab.ac.id/sites/default/files/inline-images/74336027_2819720774746581_8143186692463919104_o.jpg"},
        {id:2, title: "UNIQ goes to Finland",  count:"FIK", image:"http://www.unklab.ac.id/sites/default/files/inline-images/72436962_2817345141650811_8886161918083989504_o.jpg"},
        {id:3, title: "Safari Gemar Membaca Nasional 2019",  count:"UNKLAB", image:"http://www.unklab.ac.id/sites/default/files/inline-images/20191025_093329_0.jpg"}, 
        {id:4, title: "Seniors Class Batch 81",  count:"UNKLAB", image:"http://www.unklab.ac.id/sites/default/files/styles/thumbnail/public/2019-11/20191022_102630_1.jpg?itok=dXpceiN_https://lorempixel.com/400/200/nature/6/"}
        ]
const Home1 = ({navigation}) => {
  return(
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('News')}>
        <Text style={{justifyContent: "flex-end",textAlign: "right",paddingTop:20,paddingEnd:20}}>
          View All News
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={news}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <TouchableOpacity style={styles.card}>
                <View style={styles.imageContainer}>
                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.count}>({item.count})</Text>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 10,
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '45%',
    marginHorizontal: 10,
  },
  cardContent: {
    paddingVertical: 17,
    justifyContent: 'space-between',
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  imageContainer:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
    color:"#778899"
  },
  count:{
    fontSize:18,
    flex:1,
    color:"#B0C4DE"
  },
});

export default Home1;