import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Container, Root, Content, Text} from 'native-base';
import colors from '../../helper/colors';

const SplashScreen = ({navigation, route}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth');
    }, route.params?.time);
  });
  return (
    <Root>
      <Container>
        <Content contentContainerStyle={styles.container}>
          <StatusBar backgroundColor={colors.blackcurrant} />
          <Text style={styles.TextA}>Sie Link</Text>
        </Content>
      </Container>
    </Root>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blackcurrant,
  },
  TextA: {
    color: colors.LavenderBlush,
    fontFamily: 'Merriweather_Bold',
    fontSize: 40,
  },
});
