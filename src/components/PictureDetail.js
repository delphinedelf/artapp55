import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, Linking} from 'react-native';
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

  render() {
    return (
      <FlatList style={styles.flatlist}
        data={this.props.picture}
        renderItem={({item}) => 
          <View style={styles.picture_item}>
            <Image
              source={{uri: `${item.image_thumbnail}`}}
              style={styles.image}
            />
            <View style={styles.info}>
              <Text allowFontScaling={false} style={styles.artist}>{item.artist}</Text>
              <Text allowFontScaling={false} style={styles.title}>{item.object_names[0].name}</Text>
              <Text allowFontScaling={false} style={styles.title}>{item.production_date[0].period}</Text>
            </View>
          </View>
        }
        ListFooterComponent={() => 
          <View style={styles.containerButton}>
            <ButtonComponent gallery={this.props.onItemPress} />
            <Text
              allowFontScaling={false}
              style={styles.footer1}
              onPress= {() => {Linking.openURL('https://www.smk.dk/en/article/smk-api/')}}>Using SMK API</Text>
            <Text
              allowFontScaling={false}
              style={styles.footer}
              onPress= {() => {Linking.openURL('https://fr.freepik.com/vecteurs/fond')}}>
              Logo by GarryKillian
            </Text>
            <Text
              allowFontScaling={false}
              style={styles.footer}
              onPress={() => {
                Linking.openURL('https://freepik.com');
              }}>
              www.freepik.com
            </Text>
          </View>
        }
     />

    );
  }
 }
 
const styles = StyleSheet.create({
  picture_item: {
  //  marginHorizontal: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  containerButton: {
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
    fontSize: 22,
  },
  artist: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  footer1: {
    paddingTop: 25,
    paddingBottom: 10,
    fontSize: 15,
    //textAlign: 'center',
    fontStyle: 'italic',
    color: '#0000EE',
  },
  footer: {
    fontSize: 15,
    //textAlign: 'center',
    fontStyle: 'italic',
    color: '#0000EE',
  },
});
export default PictureDetail;