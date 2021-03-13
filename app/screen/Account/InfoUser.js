import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

export default function InfoUser({ info }) {
    console.log(info.photoURL)
    console.log(info.displayName)
    return (
        <View style={styles.viewBody}>
            <Avatar
                rounded
                size="large"
                containerStyle={styles.avatarStyle}
                showEditButton={true}
                source={{ uri: info.photoURL || "https://tinyurl.com/u9wtr39b" }}
            />
            <View style={styles.viewContainer} >
                <Text style={styles.textName} >{info.displayName || 'Sarasa Guzman'}</Text>
                <Text>{info.email || 'Loggued with social media'}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        alignItems: 'center',
        flexDirection: "row",
        paddingBottom: 30,
        paddingTop: 30,
    },
    avatarStyle: {
        borderWidth: 3,
        marginRight: 10,
        marginTop: 5
    },
    textName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    viewContainer: {
    }
})