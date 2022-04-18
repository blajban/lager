// Expo/React
import { Image, Text, View } from 'react-native';


// Components
import Stock from './Stock';

// Style
import { base, typography } from "../styles/index";

// Assets
import warehouse from '../assets/warehouse.jpg';

export default function Home({products, setProducts}) {
    

    return (
        <View style={base.home}>
            <Image source={warehouse} style={base.fullwidthImg} />
            <Stock products={products} setProducts={setProducts}/>
            <Text style={typography.p}>Erik Sjöberg 2022</Text>
        </View>
    );
}
