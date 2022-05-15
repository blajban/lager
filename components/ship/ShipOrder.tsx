import { View, Text, StyleSheet } from "react-native";
import { typography } from "../../styles/index";

import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import getCoordinates from "../../models/nominatim";
import { useEffect, useState } from "react";

import * as Location from "expo-location";

export default function ShipOrder({ route }) {
    const { order } = route.params;

    const [marker, setMarker] = useState(null);
    const [locationMarker, setLocationMarker] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        (async () => {
            const result = await getCoordinates(`${order.address},${order.city}`);
            console.log(result);

            setMarker(<Marker
                coordinate={{latitude: parseFloat(result[0].lat), longitude: parseFloat(result[0].lon)}}
                title={result[0].display_name}
                />);
        })();
    }, [])

    useEffect(() => {
        (async () => {
            const {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMessage("Permission to access location was denied");
                console.log(errorMessage);
                return;
            }

            const currentLocation = await Location.getCurrentPositionAsync({});
            setLocationMarker(<Marker
                coordinate={{latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude}}
                title={"Min plats"}
                pinColor="blue"
                />);
        })();
    }, [])

    

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

                {marker}
                {locationMarker}
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