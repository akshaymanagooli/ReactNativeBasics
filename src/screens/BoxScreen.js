import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxScreen = () => {
    return <View style={style.viewStyle}>
        <Text style={style.textOneStyle}>Child 1</Text>
        <Text style={style.textTwoStyle}>Child 2</Text>
        <Text style={style.textThreeStyle}>Chils 3</Text>
        </View>
}

const style = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        borderWidth: 3,
        flexDirection:'row' ,
        height:200,
        alignItems:'center',
        justifyContent:'space-between'
    },
    textOneStyle: {
        borderColor: 'red',
        backgroundColor:'red',
        borderWidth: 1,
        margin:8
    },
    textTwoStyle: {
        borderColor: 'red',
        borderWidth: 1,
        // position:'absolute',
        backgroundColor:'green',
        alignSelf:'flex-end',
        margin:8,
        // flex:1,
        // top:0,
        // bottom:0,
        // left:0,
        // right:0
        //or
        // ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderColor: 'red',
        borderWidth: 1,
        // bottom:30,
        backgroundColor:'blue',
        margin:8
    }
})

export default BoxScreen