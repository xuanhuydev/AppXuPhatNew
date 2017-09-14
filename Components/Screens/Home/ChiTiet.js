import React, { Component } from 'react';
import { Text,View } from 'react-native';


console.log('=======================')
console.log(this)
console.log('=======================')
export default class ChiTiet extends Component {
    
    static navigationOptions = {
        headerMode  : 'screen'  ,
        tabBarVisible: false,
    }
    render() {
        var {params} = this.props.navigation.state;
        return (
            <View style={{flex:1,backgroundColor:'yellow'}}>
                <Text>Man hinh ChiTiet {params.id}</Text>
            </View>
        );
    }
}