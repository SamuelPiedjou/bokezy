import React,{Component } from 'react';
import {
      View, 
      ScrollView,
      Text,
      Image,
} from 'react-native'; 


export default class getDestination extends Component {

     render(){
         return(
            <ScrollView>
              <View>
              <View style={{marginLeft:80}}>
                <Text style={{fontWeight:'bold'}}> Trouver votre voyage maintenant </Text>
                <Text style={{fontWeight:'bold'}}>  </Text>
                <Text style={{fontWeight:'bold'}}> Où désirez-vous aller ? </Text>
                </View>
                <View  style={{marginRight:10,marginTop:20,
                            }}>
                <Image style={{marginLeft:10,
                            }} source={require('../log3_1.jpg')} /> 
                </View>
              </View>
            </ScrollView>
         );
     }

}