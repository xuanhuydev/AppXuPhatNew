import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'


import Home from './Screens/Home/Home.js';
import Saved from './Screens/Saved.js';
import Ads from './Screens/Ads.js';
import More from './Screens/More.js';

const TabApp = TabNavigator(
    {
        HomeScreen: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
            }
        },
        SavedScreen: {
            screen: Saved,
            navigationOptions: {
                tabBarLabel: 'Saved',
            }
        },
        AdsScreen: {
            screen: Ads,
            navigationOptions: {
                tabBarLabel: 'Ads',
            }
        },
        MoreScreen: {
            screen: More,
            navigationOptions: {
                tabBarLabel: 'More',
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        
    }
)

export default class App extends Component {
    render() {
        return (
            <TabApp />
        );
    }
}