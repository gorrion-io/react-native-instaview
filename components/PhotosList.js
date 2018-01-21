import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PhotoGrid from 'react-native-photo-grid';

import PhotoListItem from './PhotoListItem'

export default class PhotosList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPhotos()
    }

    renderItem(item, itemSize) {
        return <PhotoListItem onPress={() => this.props.selectPhoto(item)} key={item.id} item={item} itemSize={itemSize} />
    }


    render() {
        return <PhotoGrid
                data = { this.props.photos }
                itemsPerRow = { 3 }
                renderItem = { (item, itemSize) => this.renderItem(item, itemSize) } />
    }
} 

const styles = StyleSheet.create({
    container: { flex: 1 }
})
