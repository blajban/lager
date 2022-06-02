import ItemSeparator from './utility/ItemSeparator';
import { Text, FlatList } from 'react-native';
import { list } from "../styles/index";

export default function StockList({products}) {
    return (
        <FlatList
            data={products}
            renderItem={({item}) => (
                <Text style={list.item}>{item.name} - {item.stock}</Text>
            )}
            keyExtractor={(item) => item.name}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
}