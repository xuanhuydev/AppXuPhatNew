import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import ChiTiet from './ChiTiet.js';
import { StackNavigator } from 'react-navigation';
import Realm from 'realm'

const HotlineSchema = { name: 'DuongDayNong', properties: { key: 'int', ten_tinh: 'string', sdt_tinh: 'string' } }
class TabXe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mang: [{ "key": 1, "ten_tinh": "T\u1ed5ng \u0111\u00e0i t\u01b0 v\u1ea5n giao th\u00f4ng", "sdt_tinh": "1088" }, { "key": 2, "ten_tinh": "C\u1ee5c c\u1ea3nh s\u00e1t giao th\u00f4ng \u0111\u01b0\u1eddng b\u1ed9", "sdt_tinh": "069.42608" }],
        }
    }
    // an title cua StackNavigator
    static navigationOptions = {
        header: null,
    }
    Click(item) {
        this.props.navigation.navigate('ChiTiet', { id: item.key })
    }
    componentWillMount() {
        Realm.open({
            schema: [HotlineSchema],
            path: 'huy.realm'
        }).then((realm) => {
            let dogs = realm.objects('DuongDayNong');
            if (dogs.length == 0) {
                console.log('loading.....')
                fetch('http://192.168.8.2/xuphat/main.php')
                    .then((data) => data.json())
                    .then((dataJson) => {
                        dataJson.forEach((item) => {
                            realm.write(() => {
                                realm.create('DuongDayNong', item)

                            })
                        })

                    })
                console.log('Da them du lieu vao Database')
            }
        })
    }
    render() {
        return (
            <View>
                <Text>Search....</Text>
                <FlatList
                    data={this.state.mang}
                    renderItem={({item}) =>
                        <TouchableOpacity onPress={() => { this.Click(item) } }>
                            <Text style={{ backgroundColor: 'green', padding: 20, margin: 10 }}> {this.props.screenProps} {item.key}</Text>
                        </TouchableOpacity>
                    }
                    />
            </View>
        );
    }
}




export default TabXe = StackNavigator({
    TabXe: { screen: TabXe },
    ChiTiet: { screen: ChiTiet,navigationOptions:{
        tabBarVisible: false,
    } }
})



