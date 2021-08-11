 import React from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, View} from 'react-native';

export default class ReadStoryScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
         title:this.props.navigation.getParam('title'),
         author:this.props.navigation.getParam('author'),
         story:this.props.navigation.getParam('story')
    };
  }
    render(){
        return(  
            <View>
<View style={styles.container}>
<Text style={styles.title} onPress={this.dataReciver}>{this.state.title}</Text>
                <Text style={styles.story}>{this.state.story}</Text>
                <Text style={styles.author}>By {this.state.author}</Text>
</View>
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
  container: {
alignSelf:"center",
borderWidth:1,
width:350,
marginTop:50,
borderRadius:15
  },
  title:{
backgroundColor:"lightblue" ,
fontSize:50,
borderRadius:15,
textAlign:"center"
  },
  story:{
    marginTop:10,
    marginBottom:7,
    fontSize:15,
    marginLeft:5
  },
  author:{
textAlign:"center",
marginBottom:5,
fontSize:18,
textDecorationLine:"underline",
fontWeight:"bold"
  }
});