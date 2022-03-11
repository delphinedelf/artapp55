import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import ButtonComponent from './ButtonComponent';

class PictureDetail extends React.Component {
  static propTypes = {
    onItemPress: PropTypes.func.isRequired,
    picture: PropTypes.array.isRequired,
  };
  handlePress = () => {
    this.props.onItemPress();
  };

  render(){
    return (
      <FlatList
        data={this.props.picture}
        renderItem={({item}) => 
          <View style={styles.picture_item}>
            <Image
              source={{uri: `${item.image_thumbnail}`}}
              style={styles.image}
            />
            <View style={styles.info}>
              <Text style={styles.artist}>{item.artist}</Text>
              <Text style={styles.title}>{item.object_names[0].name}</Text>
              <Text style={styles.title}>{item.production_date[0].period}</Text>
            </View>
          </View>
        }
        ListFooterComponent={() => 
          <ButtonComponent gallery={this.props.onItemPress}
 />
        }
     />
    );
  }
 }

const styles = StyleSheet.create({
  picture_item: {
    marginHorizontal: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: '#ccc',
  }, 
  info: {
    width: 300,
    height: 100,
    paddingTop: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 5,
  },
  artist: {
    fontWeight: 'bold',
    fontSize: 6,
    textAlign:'center',
  },
  
});
export default PictureDetail;