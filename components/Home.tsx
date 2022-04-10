// Expo/React
import { Image, Text, View } from 'react-native';


// Components
import Stock from './Stock';

// Style
import styles from "../styles/index";

// Assets
import warehouse from '../assets/warehouse.jpg';

export default function Home({products, setProducts}) {
    

    return (
        <View style={styles.base}>
            <Text style={styles.h1}>Infinity Warehouses</Text>
            <Image source={warehouse} style={styles.fullwidthImg} />
            <Stock products={products} setProducts={setProducts}/>
            <Text style={styles.p}>Erik Sjöberg 2022</Text>
        </View>
    );
}


