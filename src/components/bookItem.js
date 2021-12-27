import * as React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import { main } from '../styles/main'

export const BookItem = ({ book }) => {
    const { volumeInfo } = book;
    const { title, description, publishedDate, imageLinks } = volumeInfo;
    console.log(imageLinks);
    return (

        <View style={main.container}>
            <TouchableOpacity style={main.card}>
                <Image style={main.cardImage} source={{ uri: `${imageLinks?.thumbnail}` }} />

                <Text style={main.cardText}>{title}</Text>
                <Text style={main.cardText}>{publishedDate}</Text>
                <Text style={main.cardText}>{description}</Text>
            </TouchableOpacity>



        </View>
    );
}