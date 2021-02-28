
import React, {Component} from 'react';
import {ScrollView,
       Text, 
       View ,
       Image,
       TouchableOpacity,
    }  from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class  login extends Component{

 render(){
    return(
        <View backgroundColor="">
      <ScrollView>
        
            <View style={{flex:1,
                        flexDirection:'row',
                        marginTop:50,
                        marginLeft:10,
                        }}>
               <View  style={{
                              
                                      
                        }}>
                 <Image style={{}} source={require('../log2.jpg')} /> 
                 <Image style={{marginLeft:30,}} source={require('../log1.jpg')} />
               </View>

            </View>
            <View style={{marginLeft:40,
                          marginRight:30,}}>
              <TextInput  placeholder="Nom d'utilisateur (15 max)" 
                    maxLength={15}
                    style={{borderBottomWidth:1,borderBottomColor:"#B88917"}}/>
               <TextInput  placeholder="entrez le code de vérification (5 max)" 
                    maxLength={5}
                    style={{borderBottomWidth:1,borderBottomColor:"black"}}/>
                     <TouchableOpacity>
    
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
    </View>

        );
            
        
    }
}