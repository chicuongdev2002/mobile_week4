import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ImageBackground, Text, CheckBox, Button, Pressable } from 'react-native';

import backgroundImage from '../image/background.png';

export default function Frame1g() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSpecialSymbol, setIncludeSpecialSymbol] = useState(true);

  const generatePassword = () => {
    // Logic để tạo mật khẩu dựa trên yêu cầu và độ dài
    let newPassword = '';

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialSymbols = '!@#$%^&*()_-+=<>?';

    const selectedChars = [
      includeLowerCase && lowercaseChars,
      includeNumber && numbers,
      includeSpecialSymbol && specialSymbols,
    ].filter(Boolean).join('');

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * selectedChars.length);
      newPassword += selectedChars.charAt(randomIndex);
    }

    setPassword(newPassword);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
        <View style={styles.containerBackground}>
          <View style={styles.containerText}>
            <Text style={styles.styleText}>PASSWORD GENERATOR</Text>
          </View>
          <TextInput
            style={styles.passwordInput}
            value={password}
            editable={false}
          />
          <View style={styles.checkboxContainer}>
            <View  style={styles.checkbox}>
              <Text style={styles.styleText}>Password length</Text>
              <TextInput
                style={styles.passwordLength}
                value={passwordLength.toString()}
                onChangeText={(text) => setPasswordLength(parseInt(text))}
              />
            </View>
            <View style={styles.checkbox}>
              <Text style={styles.styleText}>Include Lowercase Letters</Text>
              <CheckBox
                value={includeLowerCase}
                onValueChange={(newValue) => setIncludeLowerCase(newValue)}
              />
            </View>
            <View style={styles.checkbox}>
              <Text style={styles.styleText}>Include Numbers</Text>
              <CheckBox
                value={includeNumber}
                onValueChange={(newValue) => setIncludeNumber(newValue)}
              />
            </View>
            <View style={styles.checkbox}>
              <Text style={styles.styleText}>Include Special Symbols</Text>
              <CheckBox
                value={includeSpecialSymbol}
                onValueChange={(newValue) => setIncludeSpecialSymbol(newValue)}
              />
            </View>
          </View>
          <Pressable style={styles.styleButton} onPress={generatePassword}>
            <Text style={styles.styleTextButton}>PASSWORD GENERATOR</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 322,
    height: 605,
    flexShrink: 0,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#23235B',
    margin: 18,
    marginBottom: 18,
  },
  image: {
    flex: 1,
    width: 360,
    height: 640,
  },
  styleText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 29.3,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  containerText: {
    width: 181,
    height: 64,
    marginTop: 59,
  },
  passwordInput: {
    backgroundColor: '#151537',
    width: 200,
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  passwordLength: {
    backgroundColor: '#FFF',
    width: 118,
    height: 33,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 20,
    width: '100%',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop:20,
  },
  styleButton: {
    width: 269,
    height: 55,
    backgroundColor: '#3B3B98',
    justifyContent: 'center',
  },
  styleTextButton: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.09,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
