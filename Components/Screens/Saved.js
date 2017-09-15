import React, { Component } from 'react';
import { Text, View } from 'react-native';
const Realm = require('realm');



const DogSchema = { name: 'Dog', properties: { name: 'string' } }
export default class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = { realm: null };
    }

    componentWillMount() {
        // Realm.open({
        //     schema: []
        // }).then(realm => {
        //     realm.write(() => {
        //         realm.create('Dog', { name: 'Rex' });
        //     });
        //     this.setState({ realm });
        // });
        // Realm.open({
        //     schema:[DogSchema],
        //     path:'huy.realm'
        // }).then( (realm)=>{
        //     let dogs = realm.objects('Dog');
        //     console.log(dogs)
        // } )
        
        
    }
    render() {
        // const info = this.state.realm
        //     ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
        //     : 'Loading...';
        return (
            <View>
                <Text>Man hinh Saved</Text>
                <Text>
                    indo
                </Text>
            </View>
        );
    }
}