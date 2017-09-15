import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Realm from 'realm';
const HotlineSchema = { name: 'DuongDayNong', properties: { key: 'int', ten_tinh: 'string', sdt_tinh: 'string' } }


export default class ChiTiet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: '',
            aaa: ''
        }
    }
    static tabBarOption = {
        labelStyle: {
            fontSize: 12,
        },
        tabStyle: {
            width: 100,
        },
        style: {
            backgroundColor: 'blue',
        },
    }

    static navigationOptions = {
        headerMode: 'screen',
        tabBarLabel :'dhusadas',
        tabBarVisible: false,
    }
    componentDidMount() {
        let {params} = this.props.navigation.state;
        let id = params.id;
        Realm.open({ schema: [HotlineSchema], path: 'huy.realm' }).then((realm) => {
            realm.write(() => {
                let objs = realm.objects('DuongDayNong').filtered('key=' + id);
                this.setState({
                    aaa: objs[0]
                })
            })
        })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }} chitietok='100'>
                <Text>Man hinh ChiTiet - state:{this.state.aaa.sdt_tinh}</Text>
            </View>
        );
    }
}