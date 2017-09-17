import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Realm from 'realm';
import { HotlineSchema, LoiSchema } from './Schema.js'


export default class ChiTiet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chitiet: ''
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
        console.log(this.props)
        let {params} = this.props.navigation.state;
        let id = params.id;
        let path = params.path
        Realm.open({ schema: [LoiSchema], path: path }).then((realm) => {
            realm.write(() => {
                let objs = realm.objects('Loi').filtered('key=' + id);
                this.setState({
                    chitiet: objs[0]
                })
            })
        })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <Text>Man hinh ChiTiet - state:{this.state.chitiet.ten_loi}</Text>
            </View>
        );
    }
}