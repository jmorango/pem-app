import React from 'react';
import { View, Button, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Chatroom from '../screens/ChatroomScreen';
import * as firebase from 'firebase'
import 'firebase/firestore';
import Firebase from '../backend/firebase'
//import {HeaderButtons, Item } from 'react-navigation-header-buttons';
//import CustomHeaderButton from '../components/CustomHeaderButton';

const ChatTabScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Display Chats</Text>
            <Button title='Go to Global Chat' onPress={() => props.navigation.navigate('Chatroom', { name: firebase.auth().currentUser.email })}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


ChatTabScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Chats',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Menu' iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navigationData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),

    }
};

export default ChatTabScreen;