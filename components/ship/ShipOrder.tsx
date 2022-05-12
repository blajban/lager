import { View, Text, StyleSheet } from "react-native";
import { typography } from "../../styles/index";

import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

export default function ShipOrder({ route }) {
    //const { order } = route.params;

    return (
        <View style={styles.container}>
            <Text style={typography.h2}>Här ska jag visa info om order och karta</Text>

            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 56.1612,
                    longitude: 15.5869,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}>

                <Marker
                    coordinate={{latitude: 56.17, longitude: 15.59}}
                    title="En markör"
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});