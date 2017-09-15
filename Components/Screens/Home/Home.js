import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import XeMay from './XeMay.js';
import XeTai from './XeTai.js';
import XeOto from './XeOto.js';
import XeKhach from './XeKhach.js';
import ChiTiet from './ChiTiet.js'

const TabHome = TabNavigator({
    ManHinhXeMay: {
        screen: XeMay,
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