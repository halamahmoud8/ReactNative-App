import reactDom from 'react-dom';
import { StyleSheet } from 'react-native'
// import { shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    card: {
        borderWidth: 0,
        marginBottom: 40,
       
       marginVertical:10,
      
    //    shadowColor: '#000',
    //    shadowOffset: {width: 3, height: 3},
    //    shadowOpacity: 1,
borderWidth:3,
       backgroundColor:'#fff',
       marginVertical:10,
       marginLeft:15,
       marginRight:15,
       borderColor:'#aba6a6'
   
    
    },
    cardText: {
        fontSize: 16,
      marginBottom:10,
       alignSelf:'center',
       textAlign:'center'
       

    },
    cardImage: {
        height: hp('40%'), // 70% of height device screen
        width: wp('80%') ,
        alignSelf:"center",
        marginTop:10


    },
    descText:{
        fontSize:16,
        alignSelf:'center',
        textAlign:'left',
        width: wp('80%') ,
        marginBottom:10
       
        
    }
  
 
 
});