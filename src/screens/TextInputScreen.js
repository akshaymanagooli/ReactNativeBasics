import React, { useState } from 'react'
import { StyleSheet,TextInput,Text, View} from 'react-native'

const TextInputScreen = () => {
    const [name,setName] = useState('')
    return <View>
        <Text>Enter password</Text>
        <TextInput 
        style={style.input}
        autoCapitalize="none"
        value={name}
        onChangeText={newText=>setName(newText)}
        autoCorrect={false}/>
        {name.length<5 ? <Text>Password must be longer than 5 characters</Text>:null}
        
    </View>
}

const style = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1,
        paddingStart:8,
        paddingEnd:8
    }
})

export default TextInputScreen