import React, { useEffect } from 'react';
import { View, Text ,StyleSheet,TextInput} from 'react-native';
import {main} from '../../styles/main'

export const AddBookScreen = () => {
    const [title, onChangeTitle] = React.useState(null);
    const [Desc, onChangeDesc] = React.useState(null);
    const [image, onChangeImage] = React.useState(null);
    const [date, onChangeDate] = React.useState(null);



    return (
        <View style={main.container}>
           <TextInput
        style={main.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholder="Enter Book Title"
        keyboardType="numeric"
      />
            <TextInput
        style={main.input}
        onChangeText={onChangeDesc}
        value={Desc}
        placeholder="Enter Book Description"
        keyboardType="numeric"
      />
               <TextInput
        style={main.input}
        onChangeText={onChangeImage}
        value={image}
        placeholder="Enter Book Image"
        keyboardType="numeric"
      />
            <TextInput
        style={main.input}
        onChangeText={onChangeDate}
        value={date}
        placeholder="Enter Book Date"
        keyboardType="numeric"
      />
        </View>
    );
    
}

  