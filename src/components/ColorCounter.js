import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return <View>
        <Text>{color}</Text>
        <Button
            onPress={() => { onIncrease() }}
            title={`Increase ${color}`} />
        <Button
            onPress={() => { onDecrease() }}
            title={`Decrease ${color}`} />
    </View>
}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default ColorCounter