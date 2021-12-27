import { StyleSheet } from 'react-native'
// import { shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export const main = StyleSheet.create({
    card: {
        borderWidth: 0, 
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0,
        shadowRadius: 2.22,
        marginLeft: '2%',
        backgroundColor:'#fff',
        shadowOpacity: 1,
        width:'30%',
        shadowOffset: {
            height: 3,
            width: 3
        }
    },
    cardText: {
        fontSize: 16,
        padding: 10,

    },
    cardImage: {
        width: '100%',
        height: 200,
         resizeMode: 'stretch'

    },
    container: {
        marginTop: 40,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:'20%'
    },
    btn:{
        width:'10%',
        margin:20,
        borderRadius:15
    }
});