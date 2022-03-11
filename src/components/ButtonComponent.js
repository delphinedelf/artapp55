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
        <Text style={styles.textButton}>Details</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    paddingTop: 20,
    backgroundColor: "#F2EECB",
    borderColor: '#bbb',
    borderWidth: 1,
    marginHorizontal: 80,
    borderRadius: 20,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'AcademyEngravedLetPlain',
  },
});

export default ButtonComponent; 