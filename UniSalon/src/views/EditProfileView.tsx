import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontSize} from '../constant/FontSize';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditProfileView = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.AppBar}>
        <AntDesign
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}
          name="arrowleft"
          color={'white'}
          style={{position: 'absolute', left: 0, top: 14, marginLeft: 15}}
          size={20}></AntDesign>
        <Text style={styles.TxtTitleAppBar}>Edit Profile</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.frmName}>
          <View style={styles.StyleDivider}>
            <Ionicons
              color={'black'}
              size={20}
              name="person-outline"
              style={{marginRight: 10}}
            />
            <View style={styles.divider}></View>
          </View>
          <TextInput
            placeholderTextColor={'black'}
            style={styles.txtInput}
            value="LongThav SiPav"
          />
        </View>
        <View style={styles.frmNameOther}>
          <View style={styles.StyleDivider}>
            <Ionicons
              color={'black'}
              size={20}
              name="mail-outline"
              style={{marginRight: 10, marginTop: 3}}
            />
            <View style={styles.divider}></View>
          </View>
          <TextInput
            placeholderTextColor={'black'}
            style={styles.txtInput}
            value="longthavsipav@gmail.com"
          />
        </View>
        <View style={styles.frmAbout}>
          <View style={styles.StyleDivider}>
            <AntDesign
              color={'black'}
              size={20}
              name="infocirlceo"
              style={{marginRight: 10, marginTop: 3}}
            />
            <View style={styles.divider}></View>
          </View>
          <TextInput
            placeholder="About"
            placeholderTextColor={'grey'}
            style={styles.txtInput}
          />
        </View>
        <View style={styles.btnSave}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
            Save
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AppBar: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  TxtTitleAppBar: {
    fontSize: FontSize.font16,
    color: 'white',
    fontWeight: 'bold',
  },
  btnSave: {
    padding: 10,
    backgroundColor: '#16247d',
    marginTop: 17,
    marginHorizontal: 15,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frmName: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 17,
    marginHorizontal: 15,
    borderRadius: 8,
    flexDirection: 'row',
  },
  frmNameOther: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 8,
    flexDirection: 'row',
  },
  divider: {
    width: 1.8,
    height: '100%',
    backgroundColor: 'gray',
  },
  StyleDivider: {
    flexDirection: 'row',
  },
  txtInput: {
    padding: 0,
    margin: 0,
    color: 'black',
    fontSize: 12.5,
    marginLeft: 12,
  },
  frmAbout: {
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 40,
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 8,
    flexDirection: 'row',
  },
});
