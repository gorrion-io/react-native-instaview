import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'



export default (props) => {
    return <View>
        <Image source={{ uri: `https://picsum.photos/400?image=${props.photo.id}` }} style={{ height: 0.6 * props.dimensions.height }} />
        <Text style={styles.author} >Author: {props.photo.author}</Text>
    </View>
}

const styles = StyleSheet.create({
    author: {textAlign: 'center', margin: 20 },
    goBack: { margin: 5 }
})