import React, { useReducer } from 'react'
import { Text, StyleSheet, Button, View } from 'react-native'

const counderReducer = (state, action) => {
    switch (action.counterAction) {
        case 'increase':
            return {...state,counter:state.counter + 1}
        case 'decrease':
            return {...state,counter:state.counter - 1}
        default:
            state
    }
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(counderReducer, { counter: 0 })
    const { counter } = state

    return <View>
        <Button title="Increase" onPress={() => {
            dispatch({ counterAction: 'increase' })
        }} />
        <Button title="Decrease" onPress={() => {
            dispatch({ counterAction: 'decrease' })
        }} />
        <Text>Counter Screen : {counter}</Text>
    </View>
}

const style = StyleSheet.create({})

export default CounterScreen