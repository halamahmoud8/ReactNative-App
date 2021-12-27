import React, { useEffect } from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';
import axios from 'axios';
import { BookItem } from '../../components/bookItem'
import { useNavigation } from '@react-navigation/native';
import { main } from '../../styles/main'

export const HomeScreen = () => {
    const [books, setBooks] = React.useState([]);
    const navigation = useNavigation();
    // navigation.navigate("addBook")
    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&&startIndex=0&&maxR')
            .then(response => {
                setBooks(response.data.items)

            })
            .catch(function (error) {

            })
    }, [])


    return (
        <View style={main.container}>
            
            {books?.map((item) => {
                return (
                    <BookItem book={item} key={item.id} />
                )
            })}
            <TouchableOpacity style={main.btn}>
            <Button 
                onPress={()=>{navigation.navigate("addBook")}}
                title="Add Book"

            />
            </TouchableOpacity>
           
        </View>
    );
}