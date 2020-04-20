import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

const ImageDetail = ({image,title,imageScore}) => {
    return <View>
        <Image source={image} />
        <Text>{title}</Text>
        <Text>Image Score - {imageScore}</Text>
    </View>
}

const styles = StyleSheet.create({
})

export default ImageDetail