import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ListScreenComponent = () => {
    const friendList = [
        { name: 'Akshay', age: 'Age 26' },
        { name: 'Raman', age: 'Age 27' },
        { name: 'Nitish', age: 'Age 26' },
        { name: 'Shreya', age: 'Age 29' },
        { name: 'Harshali', age: 'Age 24' },
        { name: 'parag', age: 'Age 30' },
        { name: 'kirti', age: 'Age 29' },
        { name: 'umesh', age: 'Age 26' },
        { name: 'vinay', age: 'Age 27' },
        { name: 'mahesh', age: 'Age 26' },
        { name: 'kartik', age: 'Age 26' },
        { name: 'Akshata', age: 'Age 26' }
    ]
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={friendList => friendList.name}
            data={friendList}
            renderItem={({ item }) => {
                return <Text style={style.itemStyle}>{item.name} - {item.age}</Text>
            }}
        />
    )
}

const style = StyleSheet.create({
    itemStyle: {
        margin: 16
    }
})

export default ListScreenComponent