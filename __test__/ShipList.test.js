import { render } from '@testing-library/react-native';
import React from 'react';

import ShipList from '../components/ship/ShipList'

/**
 * Undrer vyn ska det finnas knappar för att skicka ordrar.
 */
test('header should exist containing test Redo att skickas', async () => {
    const { getByText, debug } = render(<ShipList
        route={false}
    />);

    const setStateMock = jest.fn(() => [
        { id: 1, name: "Ettan" },
        { id: 2, name: "Tvåan" },
        { id: 3, name: "Trean" },
    ]);

    const useStateMock = (useState) => [useState, setStateMock];

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    debug("debug");

    //const header = await getByText('hej');
    //expect(header).toBeDefined();
});

/*

const [allOrders, setAllOrders] = useState<Order[]>([]);


export default interface Order {
    id: number,
    name: string,
    address: string,
    zip: string,
    city: string,
    country: string,
    status: string,
    status_id: number,
    order_items: Array<OrderItem>,
    api_key: string
};

<Button
                title={order.id + " " + order.name}
                key={index}
                color={base.buttonColor}
                onPress={() => {
                    navigation.navigate('Skicka', {
                        order: order
                    });
                }}

const orders = [
    { id: 1, name: "Ettan" },
    { id: 2, name: "Tvåan" },
    { id: 3, name: "Trean" },
];

                Order {
    id: number,
    name: string,
    address: string,
    zip: string,
    city: string,
    country: string,
    status: string,
    status_id: number,
    order_items: Array<OrderItem>,
    api_key: string
};
*/