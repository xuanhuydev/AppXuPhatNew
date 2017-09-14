import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import XeMayStack from './XeMay.js';
import XeTai from './XeTai.js';
import XeOto from './XeOto.js';
import XeKhach from './XeKhach.js';



const TabHome = TabNavigator({
    ManHinhXeMay: {
        screen: XeMayStack
    },
    ManHinhXeTai: { 
        screen: XeTai
    }
},
    {
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: {
            tabStyle: {
                height: 40
            },
            indicatorStyle: {
                borderBottomColor: '#ffffff',
                borderBottomWidth: 2,
            },


        }
    }
)


export default class Home extends Component {

    render() {
        return (
            <TabHome />
        );
    }
}