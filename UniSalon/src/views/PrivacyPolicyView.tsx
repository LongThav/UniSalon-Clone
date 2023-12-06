import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontSize} from '../constant/FontSize';

const PrivacyPolicyView = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containter}>
      <View style={styles.AppBar}>
        <TouchableOpacity
          style={styles.icon}
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={'white'} size={20}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.SubText}>Privacy Policy</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.txtStyle}>លក្ខខណ្ឌក្នុងការប្រើប្រាស់ អេប</Text>
        <Text style={styles.txtCondition}>១-លក្ខខណ្ឌរួម</Text>
        <View style={styles.item}>
          <View style={styles.circle}></View>
          <Text style={styles.txtRule1}>
            លក្ខខណ្ឌនៃការប្រើប្រាស់សេវា​ យួនីសាឡន ឬ​ហៅថា
            "លក្ខខណ្ឌនៃការប្រើប្រាស់" គឺជាកិច្ចសន្យា ឬ​
            កិច្ចព្រមព្រៀងរវាងក្រុមហ៊ុន យូនីសាឡន (UniSalon) និងអតិថិជន
            ក្នុងការប្រើប្រាស់សេវាយូនីសាឡន។ លក្ខខណ្ឌនេះបង្កើត
            ឡើងសម្រាប់ប្រើអមជាមួយ "ប័ណ្ណផ្សព្វផ្សាយ" និង "តារាងថ្លៃសេវា និង​
            ការកំណត់ប្រតិបត្តិការសេវា យួនីសាឡន"
          </Text>
        </View>
        <View style={styles.item}>
          <View style={styles.circle}></View>
          <Text style={styles.txtRule1}>
            សូមអានកិច្ចសន្យានេះ ឲបានយល់ច្បាស់មុនចុច "យល់ព្រម"
            ចុះឈ្មោះប្រើប្រាស់សេវា។​ នៅពេលលោក-លោកស្រី បានចុច "យល់ព្រម" មានន័យថា
            លោក-លោកស្រី បានយល់ព្រមគ្រប់លក្ខខណ្ឌដែលបានចែកនៅក្នុងកិច្ចសន្យា​នេះ
            និងទទួលខុសត្រូវលើការប្រើប្រាស់សេវា យូនី សាឡនរបស់លោក-លោកស្រី។
          </Text>
        </View>
        <View style={styles.item}>
          <View style={styles.circle}></View>
          <Text style={styles.txtRule1}>
            ក្រុមហ៊ុន យូនីសាឡន (UniSalon) អាចកែប្រែលក្ខខណ្ឌ និងសេវា យូនីសាឡន
            គ្រប់ពេលដោយអនុលមតាមច្បាប់់នៃព្រះរាជាណាចក្រកម្ពុជា។ ក្រុមហ៊ុន និង
            ជូនដំណឹងទៅលោល-លោកស្រី ក្នុងករណីដែលការកែប្រែនេះ ធ្វើឲប៉ះពាល់ដល់សិទ្ទិ
            និងកាតព្ចកិច្ចរបស់លោក-លោកស្រី។
          </Text>
        </View>
        <View style={styles.item}>
          <View style={styles.circle}></View>
          <Text style={styles.txtRule1}>
            នៅក្នុងលក្ខខណ្ឌនៃការប្រើប្រាស់នេះ ពាក់ថា "លោក-លោកស្រី"
            "របស់លោក-លោកស្រី" សំដៅដល់អតិថិជនឬម្ចាស់គណនីដែលប្រើប្រាស់សេវាយីនីសាឡន
            ជាមួយក្រុមហ៊ុន យូនីសាឡន (UniSalon)។
          </Text>
        </View>
        <Text style={styles.txtCondition}>
          ពាក្យថា "យើង" "របស់យើង" និង "ក្រុមហ៊ុន" សំដៅដល់ក្រុមហ៊ុន យូនីសាឡន
          (UniSalon)។
        </Text>
        <Text style={styles.txtCondition}>១-លក្ខខណ្ឌរួម</Text>
        <View style={styles.item}>
          <View style={styles.circle}></View>
          <Text style={styles.txtRule1}>
            ប្រព័ន្ឌ យូនីសាឡន (UniSalon System):
            គឺជាប្រព័ន្ធដែលអភិវឌ្បឡើងដោយក្រុមហ៊ុន យូនីសាឡនសម្រាប់ផ្ដល់ជូន
            អតិថិជន និង​ សាធារណជនទូទៅធ្វើប្រតិបត្តិការសេវាកម្ម
            សាឡនតាមរយះទូរស័ព្ធចល័ត។
          </Text>
        </View>
        <View style={styles.item}>
          <View style={styles.circle}></View>
          <Text style={styles.txtRule1}>
            គណនី យូនីសាឡន (UniSalon Account): គឺជាគណនីអតិថិជនមួយប្រភេទ
            ដែលរក្សាទុកនៅក្នុងប្រព័ន្ធ យូនីសាឡន។
            គណនីនេះត្រូវបានបង្កើតឡើងនៅពេលអតិចិជន ធ្វើការចុះឈ្មោះប្រើប្រាស់សេវា
            យូនីសាឡន (សេវាសាឡន(Salon)និងបាប៊ឺ(Barber)ជាមួយទូរស័ព្ធចល័ត) រួចរាល់។
            សូមមើលលម្អិតនូវលក្ខខណ្ឌនៃការប្រើប្រាស់គណនីយូនីសាឡន
            ក្នុងចំណុចខាងក្រោម។
          </Text>
        </View>
        <View style={styles.item}>
          <View style={styles.circle}></View>
          <Text style={styles.txtRule1}>
            UniSalon Application/App:គឺជាកម្មវិធីប្រតិបត្តិការវិស័យសាឡន(Salon)
            និងបាប៊ឺ(Barber) ដែលត្រូវបញ្ជូលក្នុងទូរស័ព្ធចល័័ត។
          </Text>
        </View>
        <Text style={styles.txtCondition}>៣-លក្ខខណ្ឌរួម</Text>
        <View style={styles.item}>
          <View style={styles.circle}></View>
          <Text style={styles.txtRule1}>
            ត្រូវមានទូរស័ព្ធចល័តផ្ទាល់ខ្លួន និង លេខទូរស័ព្ធដែលប្រតិបត្តិការដោយ
            IOS ឬ Android ។
          </Text>
        </View>
        <View style={styles.item2}>
          <View style={styles.circle}></View>
          <Text style={styles.txtRule1}>
            ត្រូវមានលេខទូរស័ព្ធ G-Mail និង Facebook Account ផ្ទាល់ខ្លួន។
          </Text>
        </View>
        <Text style={styles.txtCondition២}>
          បន្ទាប់ពីលោក-លោកស្រីចុះឈ្មោះប្រើប្រាស់សេវា យូនីសាឡនបានសម្រេចហើយ
          ប្រព័ន្ធនិងបង្កើតគណនីយូនីសាឡន ដោយស្វ័យប្រវត្តិនៅក្នុងប្រព័ន្ធយូនីសាឡន។
        </Text>
        <Text style={styles.txtCondition}>4-ការលើកទឹកចិត្ត</Text>
        <View style={styles.item2}>
          <View style={styles.circle}></View>
          <Text style={styles.txtRule1}>
            លើកទឹកចិត្តដល់លោក-លោកស្រីណាដែលផ្ដល់មតិយោបល់ល្អៗទៅលើការអភិឌ្បន៏សេវា។
          </Text>
        </View>
        <View style={styles.item2}>
          <View style={styles.circle}></View>
          <Text style={styles.txtRule1}>
            ផ្ដល់រង្វាន់លើកទឹកចិត្ត លោក-លោកស្រី ណាដែលប្រើប្រាស់សេវាកម្មយ៉ាងសកម្មយ៉ាងសកម្មនិងដោយមានភាពស្មោះត្រង់ដល់អតិថិជន។
          </Text>
        </View>
        <View style={styles.item2}>
          <View style={styles.circle}></View>
          <Text style={styles.txtRule1}>
            ទទូលបាននូវការបញ្ចុះតម្លៃពិសេស សម្រាប់លោក លោកស្រីដែលជាសមជិករបស់ ហាងសាឡន និងបាប៊ី។
          </Text>
        </View>
        <Text style={styles.txtCondition}>៥-លក្ខខណ្ឌផ្សេងៗ</Text>
        <View style={styles.item}>
          <Text style={{color: 'black', marginTop: 8}}>៥.១</Text>
          <Text style={styles.txtRule1}>
           លក្ខខណ្ឌនៃការប្រើប្រាស់នេះ សរសេរជាភាសារខ្មែរនិងភាសារអង់គ្លេស ប្រសិនបើចំណុចណាមួមានអត្ថន័យខុសគ្នា រវាងភាសារខ្មែរ និងភាសារអង់គ្លេសនោះលក្ខខណ្ឌជាភាសារខ្មែរត្រូវយកជាបានការ។
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={{color: 'black', marginTop: 8}}>៥.២</Text>
          <Text style={styles.txtRule1}>
           លក្ខខណ្ឌនៃការប្រើប្រាស់នេះ ត្រូវអនុលោមទៅតាមច្បាប់នៃព្រះរាជាណាចក្រកម្ពុជា។
          </Text>
        </View>
        <Text style={styles.txtCondition២}>ខ្ញុំបានអាន និងយល់ព្រមគ្រប់លក្ខខណ្ឌដែលបានបញ្ជាក់ខាងលើនេះ។</Text>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicyView;

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: 'white',
  },
  AppBar: {
    paddingHorizontal: 10,
    width: '100%',
    paddingBottom: 10,
    backgroundColor: '#16247d',
    paddingTop: '3%',
    flexDirection: 'row',
    verticalAlign: 'middle',
    justifyContent: 'center',
  },
  SubText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: '25%',
  },
  icon: {
    position: 'absolute',
    left: 0,
    top: 10,
    marginLeft: 15,
  },
  rowLeft: {
    marginLeft: 25,
    flexDirection: 'row',
    marginTop: 15,
  },
  txtStyle: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  txtCondition: {
    paddingTop: 20,
    paddingLeft: 15,
    fontSize: FontSize.font16,
    color: 'black',
    fontWeight: 'bold',
  },
  txtCondition២: {
    paddingTop: 20,
    paddingLeft: 15,
    fontSize: FontSize.font16,
    color: 'black',
  },
  circle: {
    width: 5,
    height: 5,
    borderRadius: 5 / 2,
    backgroundColor: 'black',
    marginTop: 17,
  },
  item: {
    marginHorizontal: 15,
    marginTop: 25,
    flexDirection: 'row',
  },
  item2: {
    marginHorizontal: 15,
    marginTop: 0,
    flexDirection: 'row',
  },
  txtRule1: {
    fontSize: 16,
    marginLeft: 10,
    lineHeight: 35,
    color: 'black',
  },
});
