
import React, { Component } from 'react';
import {
  
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  Alert,
  LogBox,  
  
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import { TextInput } from 'react-native-gesture-handler';

export default class App extends Component

       
{
  render ()
  {
    return(
      
      
      <ScrollView>
         <View style={{marginTop:130,
                        marginLeft:130,           
                      }}>
       <Image source={require('./src/logo.jpg')}/>


       </View>
       <View>
      
      <View style={{alignContent:'center',alignItems:'center', }}> 
        <Text style={{fontFamily:'default',marginLeft:20,marginTop:30,}}>
          Bokezy est votre assistant ! Gagner du temps
          Sur votre réservation, achat de ticket de bus de
           billet de train , d'evenements , envois des colis et bien plus  
        </Text>
        
        <Text></Text>

      </View>

      
        
         <View style={{flexDirection:'row',
                      }}>
           <View style={{borderWidth:1,
                          borderColor:'yellow',
                          marginLeft:10}}>
               <TextInput 
                    placeholder="Code Pays" 
                    maxLength={4}
                    style={{borderBottomWidth:1,borderBottomColor:"black"}}  >
 
          </TextInput>
        </View>
               <View style={{marginLeft:10}}>
               <TextInput keyboardType='numeric'
                    placeholder="Entrez votre numéro de téléphone" 
                    maxLength={14}  >
   
          </TextInput>
        </View>
         
      </View>
      <TouchableOpacity 
    >
       <View style={{alignItems:'center', 
                    backgroundColor:'#B88917',
                    marginTop:40,
                    marginLeft:70,
                    marginRight:70,
                    borderRadius:10,
                    }}>
     <Text style={{fontSize:25,
                   color:'#FFFFFF'}}> Suivant </Text> 
     
        </View>
      </TouchableOpacity>
      </View>

      </ScrollView>
     // onPress={() => Alert.alert('')}
      
      
    );
  }
}
const styles=StyleSheet.create({
  
})
