import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return <View>
        <ImageDetail
            title='Forest'
            image={require('../../assets/forest.jpg')}
            imageScore='10' />
        <ImageDetail
            title='Beach'
            image={require('../../assets/beach.jpg')}
            imageScore='9' />
        <ImageDetail
            title='Mountain'
            image={require('../../assets/mountain.jpg')} 
            imageScore='8'/>
    </View>
}

const styles = StyleSheet.create({
})

export default ImageScreen