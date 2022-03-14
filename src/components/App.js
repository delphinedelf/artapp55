import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ajax from '../ajax';
import PictureDetail from './PictureDetail';
import Gallery from './Gallery';

class App extends React.Component {
  state = {
    pictures: [],
    results: [],
    gallery: false,
  };
// charger API
  async componentDidMount() {
    const results = this.randomUniqueNum(100,5);
    this.setState({results});
    const pictures = await ajax.fetchPicture();
    this.setState({pictures});
    //  console.log(pictures);
  }

  setGallery = () => {
    this.setState({ 
      gallery: true,

    });
  };

  backThumbnail = () => {
    this.setState({ 
      gallery: false,
    });
  };
 // recuperer les 2 images différentes
  currentPicture = () => {
    return this.state.pictures.filter(

      picture =>
        picture.object_number ===
          this.state.pictures[this.state.results[0]].object_number || 

     picture.object_number ===
          this.state.pictures[this.state.results[1]].object_number,
    );

 };
// tableau de nombres tirés au hasard et différents
  randomUniqueNum = (range, outputCount) => {
    let arr = []
    for (let i = 1; i <= range; i++) {
      arr.push(i)
    }

    let result = [];
    for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }
    return result;
  };

  render() {
    if (this.state.gallery){
      return (
        <Gallery onBack={this.backThumbnail} picture={this.currentPicture()} />
      );
    }
    if (this.state.pictures.length > 0 && !this.state.gallery) {
      return (
        <View style={styles.list}>
          <PictureDetail
            picture={this.currentPicture()}
            onItemPress={this.setGallery}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header} allowFontScaling={false}>ART APP</Text>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    fontFamily: 'Academy Engraved LET',
    
  },
  list: {
    marginTop: 100,
    
  },
});
export default App;