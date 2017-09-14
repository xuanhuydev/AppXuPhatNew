import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import ChiTiet from './ChiTiet.js';
import { StackNavigator } from 'react-navigation';




class XeMay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mang: []
        }
    }
    static navigationOptions = {
        header: null,
    }

    Click(item) {
        this.props.navigation.navigate('ChiTiet',{id:item.key})
    }
    render() {
        return (
            <View>

                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={({item}) =>
                        <TouchableOpacity onPress={() => { this.Click(item) } }>
                            <Text style={{backgroundColor:'green',padding:20,margin:10}}>{item.key}</Text>
                        </TouchableOpacity>
                    }
                    />


            </View>
        );
    }
}






export default XeMay = StackNavigator({
    XeMay: { screen: XeMay },
    ChiTiet: { screen: ChiTiet }
})

