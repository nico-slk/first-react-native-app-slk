import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements/dist/overlay/Overlay'

export default function Loading({ isVisible, text }) {
    return (
        <Overlay
            isVisible={isVisible}
            windowBackgroundColor="rgba(0,0,0,0.5)"
            overlayBackground="transparent"
            overlayStyle={styles.overlayPrimary}
        >
            <View style={styles.view}>
                <ActivityIndicator size="large" color="pink" />
                {text && <Text style={styles.text} >{text}</Text>}
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlayPrimary: {
        height: 100,
        width: 200,
        backgroundColor: "#fff",
        borderColor: "#a1a1a1",
        borderWidth: 2,
        borderRadius: 10
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "gray",
        textTransform: "uppercase",
        marginTop: 10,
    }
})