import { FlatList, Image, StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';

import { BeerTypes } from '@/constants/BeerTypes';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const bulletItem = '\t\u2022';

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
  });

export default function MyTab() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                  style={styles.reactLogo}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">I'm trying things out! 🥳</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Lists</ThemedText>
                {BeerTypes.map((item) => (
                    <View key={item.type} style={{ padding: 4 }}>
                        <ThemedText style={{ fontWeight: 'bold'}}>{item.type}</ThemedText>
                        <ThemedText style={{ fontWeight: 'normal'}}>{bulletItem} Style: {item.style}</ThemedText>
                        <ThemedText style={{ fontWeight: 'normal'}}>{bulletItem} Color: {item.color}</ThemedText>
                        <ThemedText style={{ fontWeight: 'normal'}}>{bulletItem} ABV: {item.typicalABV}</ThemedText>
                        <ThemedText style={{ fontWeight: 'normal'}}>{bulletItem} IBU: {item.typicalIBUs}</ThemedText>
                    </View>
                ))}
            </ThemedView>
        </ParallaxScrollView>
    );
}
