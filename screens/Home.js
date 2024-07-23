import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Entypo } from '@expo/vector-icons';
import colors from '../colors';
import GifImage from 'react-native-gif'; // Ensure you have installed this or a similar library for GIF support

const catImageUrl = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d";
const gifUrl = "https://media.giphy.com/media/qKCvrZLXLwvzcjMKQ5/giphy.gif?cid=ecf05e47132wjga7jdqja1qz4z8vwtimipzoj90ypxren31b&ep=v1_gifs_search&rid=giphy.gif&ct=g"; // Example GIF URL

const Home = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color={colors.gray} style={{ marginLeft: 15 }} />
            ),
            headerRight: () => (
                <Image
                    source={{ uri: catImageUrl }}
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 15,
                    }}
                />
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome to the Chatting App!</Text>
                <Text style={styles.introText}>Connect with friends and family in real-time.</Text>
                <GifImage
                    source={{ uri: gifUrl }}
                    style={styles.gif}
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
    },
    welcomeContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    introText: {
        fontSize: 16,
        color: colors.gray,
        marginBottom: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    gif: {
        width: 200,
        height: 200,
    },
    chatButton: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .9,
        shadowRadius: 8,
        position: 'absolute',
        bottom: 50,
        right: 20,
    }
});
