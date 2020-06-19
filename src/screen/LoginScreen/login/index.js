import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {
  Root,
  Container,
  Content,
  Text,
  Form,
  Item,
  Input,
  Button,
} from 'native-base';
import colors from '../../../helper/colors';

const login = ({navigation, route}) => {
  return (
    <Root>
      <Container>
        <Content contentContainerStyle={styles.wrapper}>
          <StatusBar backgroundColor={colors.blackcurrant} />
          <Text style={styles.TextA}>Login</Text>
          <Text style={styles.TextB}>
            Please login with your username and password
          </Text>
          <Form>
            <Item style={styles.inputTextBox} rounded>
              <Input placeholder="Username" style={styles.inputTextCont} />
            </Item>
            <Item style={styles.inputTextBox} rounded>
              <Input
                passwordRules
                placeholder="Password"
                secureTextEntry
                style={styles.inputTextCont}
              />
            </Item>
          </Form>
          <Button full style={styles.buttonBoxA} rounded>
            <Text>Login</Text>
          </Button>
          <Text style={styles.TextC}>
            Don't have account, please register at here
          </Text>
          <Button full style={styles.buttonBoxB} rounded>
            <Text style={{color: 'black'}}>Register</Text>
          </Button>
        </Content>
      </Container>
    </Root>
  );
};

export default login;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blackcurrant,
  },
  TextA: {
    fontFamily: 'Merriweather_Bold',
    color: colors.LavenderBlush,
    fontSize: 40,
    marginBottom: 10,
  },
  TextB: {
    fontFamily: 'Merriweather_LightItalic',
    color: colors.LavenderBlush,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
  },
  TextC: {
    fontFamily: 'Merriweather_LightItalic',
    color: colors.LavenderBlush,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 30,
  },
  inputTextBox: {
    width: 300,
    marginVertical: 20,
  },
  inputTextCont: {
    backgroundColor: colors.LavenderBlush,
    borderRadius: 20,
  },
  buttonBoxA: {
    marginHorizontal: 80,
    marginTop: 20,
    backgroundColor: colors.WatermelonCandy,
  },
  buttonBoxB: {
    marginHorizontal: 80,
    marginTop: 20,
    backgroundColor: colors.AquarelleRed,
  },
});
