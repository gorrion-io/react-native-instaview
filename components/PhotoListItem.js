import React from 'react'
import { Image, TouchableOpacity, StyleSheet } from 'react-native'

export default (props) => {
    const imageContainerStyle = { 
        width: props.itemSize - 2, 
        height: props.itemSize - 2, 
        marginHorizontal: 1,
        marginBottom: 2
    }

    const imageSource = { uri: `https://picsum.photos/400?image=${props.item.id}` }
    
    return <TouchableOpacity style = { imageContainerStyle } onPress = { props.onPress } >
        <Image style={ styles.image } resizeMode = "cover" source = { imageSource } />
    </TouchableOpacity> 
}

const styles = StyleSheet.create({
    image: { flex:1 }
})