import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const searchResultsItem = ({ item }) => (
<View style={styles.search_results_item}>
<Image
    style={styles.singer_pic}
    source={{uri: item.singer_pic}}
    />
<Text style={styles.singer_name}>{item.singer_name}</Text>
</View>
  );

const SearchResults = ({ item }) => (
<FlatList
    style={styles.search_results}
    data={item}
    renderItem={searchResultsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default SearchResults;

const styles = StyleSheet.create({
    'singer_pic': {
        'width': '28vw',
        'height': '28vw',
        'marginTop': 5,
        'marginLeft': 10,
        'borderRadius': 50
    },
    'singer_name': {
        'color': '#080707',
        'fontSize': 16,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'marginLeft': 24
    }
});