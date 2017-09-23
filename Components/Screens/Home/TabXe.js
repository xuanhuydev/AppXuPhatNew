import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import ChiTiet from './ChiTiet.js';
import { StackNavigator } from 'react-navigation';
import Realm from 'realm';
import { HotlineSchema, LoiSchema } from './Schema.js'


export default class TabXe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mang: [{ "key": 1, "ten_tinh": "T\u1ed5ng \u0111\u00e0i t\u01b0 v\u1ea5n giao th\u00f4ng", "sdt_tinh": "1088" }],
            begin: 0,
            end: 10,
            fetching: true
        }
    }
    // an title cua StackNavigator 
    static navigationOptions = {
        header: null,
    }

    componentWillMount() {
        loaixe = this.props.loaixe
        console.log(LoiSchema)
        Realm.open({
            schema: [LoiSchema],
            path: loaixe + '.realm'
        }).then((realm) => {
            let Lois = realm.objects('Loi');
            if (Lois.length == 0) {
                console.log('loading.....')
                fetch('http://192.168.8.2/xuphat/main.php?loaixe=' + loaixe)
                    .then((data) => data.json())
                    .then((dataJson) => {
                        dataJson.forEach((item) => {
                            realm.write(() => {
                                realm.create('Loi', item)
                                console.log('Da them')
                            })
                        })
                    })
                    .then(() => {
                        top10 = realm.objects('Loi').slice(this.state.begin, this.state.end)
                        this.setState({
                            mang: top10,
                            begin: this.state.begin + 10,
                            end: this.state.end + 10
                        })
                    })
            } else {
                top10 = realm.objects('Loi').slice(this.state.begin, this.state.end)
                this.setState({
                    mang: top10,
                    begin: this.state.begin + 10,
                    end: this.state.end + 10
                })
            }
        })
            .catch((e) => { console.log(e); alert('Yêu cầu internet ngay lần chạy đầu tiên') })
    }
    onEndReached = () => {
        this.setState({
            fetching: true
        })
        if (this.state.fetching) {
            console.log('cham day')
            Realm.open({
                schema: [LoiSchema],
                path: loaixe + '.realm'
            })
                .then((realm) => {
                    top10 = realm.objects('Loi').slice(this.state.begin, this.state.end)
                    newmang = this.state.mang.concat(top10)
                    this.setState({
                        mang: newmang,
                        begin: this.state.begin + 10,
                        end: this.state.end + 10
                    })
                })
            this.setState({ fetching: false })
        }



    }
    render() {
        return (
            <View>
                <Text>Search....</Text>
                <FlatList
                    data={this.state.mang}
                    renderItem={({item}) =>
                        <TouchableOpacity onPress={() => { this.props.onPress(item) } }>
                            <View style={{ backgroundColor: 'green', padding: 20, margin: 10 }}>
                                <Text> {item.key}</Text>
                                <Text> {item.ten_loi}</Text>
                                <Text> {item.muc_phat}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    onEndReachedThreshold={0.2}
                    onEndReached={this.onEndReached}

                    />
            </View>
        );
    }
}




// export default TabXe = StackNavigator({
//     TabXe: { screen: TabXe },
//     ChiTiet: { screen: ChiTiet,navigationOptions:{
//         tabBarVisible: false,
//     } }
// })



