import React, { useRef, useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar,
    ImageBackground, TextInput, FlatList
} from 'react-native';

import Carousel from 'react-native-anchor-carousel';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';

export default function App() {

    const [background, setBackground] = useState({
        uri: 'https://upload.wikimedia.org/wikipedia/pt/9/9b/Avengers_Endgame.jpg',
        name: 'Avengers: End Game',
        stat: '2019 - Action/Sci-fi 3h 2m',
        desc: 'Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.'
    });

    const [gallery, setGallery] = useState([
        {
            image: 'https://upload.wikimedia.org/wikipedia/pt/9/9b/Avengers_Endgame.jpg',
            title: 'Vingadores',
            released: 'Teste',
            desc: 'teste',
            key: '1'
        },
        {
            image: 'https://s2.glbimg.com/FlVww0KgWce0x3tb2SIHHC8LdVc=/e.glbimg.com/og/ed/f/original/2020/01/08/frozen_2.jpg',
            title: 'Frozen',
            released: 'Teste',
            desc: 'teste',
            key: '2'
        },
        {
            image: 'https://br.web.img2.acsta.net/medias/nmedia/18/89/56/94/20055685.jpg',
            title: 'Frozen',
            released: 'Teste',
            desc: 'teste',
            key: '3'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/pt/b/bf/O_auto_da_compadecida.jpg',
            title: 'Titanic',
            released: 'Teste',
            desc: 'teste',
            key: '4'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/pt/b/bf/O_auto_da_compadecida.jpg',
            title: 'Auto da Compadecida',
            released: 'Teste',
            desc: 'teste',
            key: '4'
        }

    ]);

    const carouselRef = useRef(null);

    const { width, height } = Dimensions.get('window');

    const renderItem = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        carouselRef.current.scrollToIndex(index);
                        setBackground({
                            uri: item.image,
                            name: item.title,
                            stat: item.released,
                            desc: item.desc
                        })
                    }}>
                    <Image source={{ uri: item.image }} style={styles.carouselImage} />
                    <Text style={styles.carouselText}>{item.title}</Text>
                    <MaterialIcons name='library-add' size={30} color='white' style={styles.carouselIcon} />
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <ScrollView style={{ backgroundColor: '#000' }}>
            <View style={styles.carouselContentContainer}>
                <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
                    <ImageBackground
                        source={{ uri: background.uri }}
                        style={styles.ImageBg}
                        blurRadius={2}>
                        <View style={styles.searchBoxContainer}>
                            <TextInput
                                placeholder="Search Movies"
                                placeholderTextColor="#666"
                                style={styles.SearchBox} />
                            <Feather name='search' size={22} color='#666' style={styles.searchBoxIcon} />
                        </View>

                        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginVertical: 10 }}>
                            Top Picks this Week
                        </Text>

                        <View style={styles.carouserlContainerView}>
                            <Carousel
                                style={styles.carousel}
                                data={gallery}
                                renderItem={renderItem}
                                itemWidth={200}
                                containerWidth={width - 20}
                                separatorWidth={0}
                                ref={carouselRef}
                                inActiveOpacity={0.4}
                            />
                        </View>
                        <View style={styles.movieInfoContainer}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.movieName}>{background.name}</Text>
                                <Text style={styles.movieStat}>{background.stat}</Text>
                            </View>
                            <TouchableOpacity style={styles.playIconContainer}>
                                <FontAwesome5 name='play' size={22} color='#02ad94' style={{ marginLeft: 4 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
                            <Text style={{ color: 'white', opacity: 0.8, lineHeight: 20 }}>{background.desc}</Text>
                        </View>

                    </ImageBackground>
                </View>
            </View>

            <View style={{ marginHorizontal: 14 }}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Continue Watching</Text>
                <ImageBackground
                    source={{ uri: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/21959-cartaz.jpg' }}
                    style={{ height: 250, width: '100%', backgroundColor: '#000' }}
                    resizeMode='cover'
                >

                    <Text style={{ color: 'white', padding: 14 }}>How to train your Dragon: The Hidden World</Text>
                    <TouchableOpacity style={{...styles.playIconContainer, position: 'absolute', top: '40%', right: '40%'}}>
                        <FontAwesome5 name='play' size={22} color='#02ad94' style={{ marginLeft: 4 }} />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={{flexDirection: 'row', height: 100, justifyContent: 'space-between', alignItems: 'center', height: 100}}>
                    <Text style={{color: 'white', fontSize: 24, fontWeight:'bold'}}>My List</Text>
                    <Text style={{color: 'white', fontSize: 14, fontWeight:'normal'}}>View All</Text>
                </View>

            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    carouselContentContainer: {
        flex: 1,
        backgroundColor: '#000',
        height: 720,
        paddingHorizontal: 14
    },

    ImageBg: {
        flex: 1,
        height: null,
        width: null,
        opacity: 1,
        justifyContent: 'flex-start'
    },

    searchBoxContainer: {
        backgroundColor: '#FFF',
        elevation: 10,
        borderRadius: 4,
        marginVertical: 10,
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center'
    },

    SearchBox: {
        padding: 12,
        paddingLeft: 20,
        fontSize: 16
    },

    searchBoxIcon: {
        position: 'absolute',
        right: 20,
        top: 14
    },

    carouserlContainerView: {
        width: '100%',
        height: 350,
        borderRadius: 10,
        alignSelf: 'center',
    },

    carousel: {
        flex: 1,
        overflow: 'visible'
    },

    carouselImage: {
        width: 200,
        height: 300,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)'
    },

    carouselText: {
        padding: 14,
        color: 'white',
        position: 'absolute',
        bottom: 10,
        left: 2,
        fontWeight: 'bold'
    },

    carouselIcon: {
        position: 'absolute',
        top: 15,
        right: 15
    },

    movieInfoContainer: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 14
    },

    movieName: {
        paddingLeft: 14,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 6
    },

    movieStat: {
        paddingLeft: 14,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        opacity: 0.8
    },

    playIconContainer: {
        backgroundColor: '#212121',
        padding: 18,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        borderWidth: 4,
        borderColor: 'rgba(2,173,148,0.2)',
        marginBottom: 14
    }





});
