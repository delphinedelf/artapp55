import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import PropTypes from 'prop-types';

class Gallery extends React.Component {
  static propTypes = { 
    picture: PropTypes.array.isRequired,
    onBack: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <View style={styles.gallery}>
          <TouchableOpacity onPress={this.props.onBack}>
            <Text allowFontScaling={false} style={styles.backlink}>Back</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <ImageViewer
              backgroundColor="#fff"
              imageUrls={[
                { url :
                  `${this.props.picture[0].image_iiif_id}/full/pct:10/0/default.jpg`
                },
                { url:
                  `${this.props.picture[1].image_iiif_id}/full/pct:10/0/default.jpg`
                },]}
          renderIndicator={() => null}
        />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  gallery: {
    marginTop: 50,
  },
  container: {
    //backgroundColor: '#F5FCFF',
    backgroundColor: "#fff",
    flex: 1,
  },
  backlink: {
    fontSize: 20,
    color: '#0000EE',
    padding: 10,
  },
});

export default Gallery;
