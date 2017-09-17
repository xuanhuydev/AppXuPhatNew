import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TabXe from './TabXe.js';
import ChiTiet from './ChiTiet.js';
import { StackNavigator } from 'react-navigation';


class XeTai extends Component {
    static navigationOptions = {
        header: null,
    }
    Click = (item) => { this.props.navigation.navigate('ChiTiet', { id: item.key }) }

    render() {
        return (
            <TabXe loaixe='xetai' onPress={this.Click} />
        );
    }
}

export default XeMay = StackNavigator({
    XeTai: { screen: XeTai },
    ChiTiet: {
        screen: ChiTiet, navigationOptions: {
            tabBarVisible: false,
        }
    }
})