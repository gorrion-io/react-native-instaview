import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'

export default (props) => props.photo ? <View>
    <Image source={{ uri: `https://picsum.photos/400?image=${props.photo.id}` }} style={styles.image} />
    <Text style={styles.author} >Author: {props.photo.author}</Text>
</View> : null

const styles = StyleSheet.create({
    image: { height: 420 },
    author: {textAlign: 'center', margin: 20 },
    goBack: { margin: 5 }
})