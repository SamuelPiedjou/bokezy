import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default class FirstApi extends Component {
  constructor(props) {
    super(props);

    this.state = {                        
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://reactnative.dev/movijes.json') 
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.movies });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false }); 
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : ( 
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) =>(
              <Text>{item.title},{item.releaseYear}</Text>
            )}
          />
        )}
      </View>
    );
  }
};
/*import React, { Component } from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import {Picker} from '@react-native-community/picker'
class PickerExample extends Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Steve" value = "steve" />
               <Picker.Item label = "Ellen" value = "ellen" />
               <Picker.Item label = "Maria" value = "maria" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>
         </View>
      )
   }
}
export default PickerExample

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
})*/