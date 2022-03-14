import React from 'react';
import {Text,StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

class ButtonComponent extends React.Component {
  static propTypes = {
    gallery: PropTypes.func.isRequired,
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.gallery}
        underlayColor="#fff">
        <Text allowFontScaling={false} style={styles.textButton}>
          Details
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#F2EECB',
    borderColor: '#bbb',
    borderWidth: 1,
    marginHorizontal: 80,
    borderRadius: 20,
  }, 
  textButton: {
    fontSize: 22,
    fontFamily: 'AcademyEngravedLetPlain',
    //color: '#fff',
    alignSelf: 'center',
  },
});

export default ButtonComponent; 