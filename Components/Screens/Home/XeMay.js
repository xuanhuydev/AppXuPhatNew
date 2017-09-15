import React, { Component } from 'react';
import { Text,View } from 'react-native';
import TabXe from './TabXe.js';

export default class XeMay extends Component {
    
    render() {
        return (
            <TabXe screenProps ='xemay'/> 
        );
    }
}





// import React, { Component } from 'react';
// import { Text, View, TouchableOpacity, FlatList } from 'react-native';
// import ChiTiet from './ChiTiet.js';
// import { StackNavigator } from 'react-navigation';
// import Realm from 'realm'

// const HotlineSchema = { name: 'DuongDayNong', properties: { key: 'int', ten_tinh: 'string', sdt_tinh: 'string' } }

// class XeMay extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             mang: [],
//         }
//     }
//     static navigationOptions = {
//         header: null,
//     }

//     Click(item) {
//         this.props.navigation.navigate('ChiTiet', { id: item.key })
//     }
//     delete = () => {
//         Realm.open({
//             schema: [HotlineSchema],
//             path: 'huy.realm'
//         })
//             .then((realm) => {
//                 realm.write(() => {
//                     let hotlines = realm.objects('DuongDayNong')
//                     realm.delete(hotlines)
//                     alert('Deleted')
//                 })
//             })
//     }

//     componentWillMount() {
//         Realm.open({
//             schema: [HotlineSchema],
//             path: 'huy.realm'
//         }).then((realm) => {
//             let dogs = realm.objects('DuongDayNong');
//             if (dogs.length == 0) {
//                 console.log('loading.....')
//                 fetch('http://192.168.8.2/xuphat/main.php')
//                     .then((data) => data.json())
//                     .then((dataJson) => {
//                         dataJson.forEach((item) => {
//                             realm.write(() => {
//                                 realm.create('DuongDayNong', item)

//                             })
//                         })

//                     })
//                 console.log('Da them du lieu vao Database')
//             }
//         })
//     }
//     getDataHotline(){
//         Realm.open({
//             schema:[HotlineSchema],
//             path:'huy.realm'
//         })
//         .then( (realm)=>{
//             let hotlines = realm.objects('DuongDayNong').slice(0,15)
//             this.setState({
//                 mang:hotlines
//             })
//         } )
//     }
//     render() {
//         return (
//             <View>
//                 <Text>ssss</Text>
//                 <TouchableOpacity onPress={() => { this.delete() } }>
//                     <Text style={{ backgroundColor: 'green', padding: 20, margin: 10 }}>DELETE</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity onPress={() => { this.getDataHotline() } }>
//                     <Text style={{ backgroundColor: 'green', padding: 20, margin: 10 }}>GET</Text>
//                 </TouchableOpacity>
//                 <FlatList
//                     data={this.state.mang}
//                     renderItem={({item}) =>
//                         <TouchableOpacity onPress={() => { this.Click(item) } }>
//                             <Text style={{ backgroundColor: 'green', padding: 20, margin: 10 }}>{item.key}</Text>
//                         </TouchableOpacity>
//                     }
//                     />


                
//                 <Text>afsdfsa</Text>
//             </View>
//         );
//     }
// }






// export default XeMay = StackNavigator({
//     XeMay: { screen: XeMay },
//     ChiTiet: { screen: ChiTiet }
// })

