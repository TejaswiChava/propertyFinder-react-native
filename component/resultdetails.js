import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

export default class ResultDetails extends Component{
    static navigationOptions = {
        title: 'Details',
      };
    render(){
        const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
        return(
            <View>
            <View >
              <Image style={styles.thumb} source={{ uri: itemId.img_url }} />
              <View>
                {/* <Text style={styles.price}>{price}</Text> */}
                <Text style={styles.title}
                  numberOfLines={3}>{itemId.title}</Text>
              </View>
            </View>
          </View>
        )
    }

}
const styles = StyleSheet.create({
    thumb: {
      width: 100,
      height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    },
    textContainer: {
      flex: 1
    },
    separator: {
      height: 1,
      backgroundColor: '#dddddd'
    },
    price: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#48BBEC'
    },
    title: {
      fontSize: 20,
      color: '#656565'
    },
  
  })