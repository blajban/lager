import { render } from '@testing-library/react-native';
import StockList from '../components/StockList';

const products = [
    { name: "Shampoo", stock: 2 },
    { name: "Balsam", stock: 3 },
    { name: "Tvål", stock: 15 },
];

/**
 * I Lagerförteckningen ska det finnas en lista med produkter. 
 * Listan ska innehålla produktens namn och lagersaldo.
 */
test("List should contain correct items", async () => {
    const { getByText } = render(<StockList products={products} />);

    const shampoo = await getByText('Shampoo', { exact: false });
    const balsam = await getByText('Balsam', { exact: false });
    const soap = await getByText('Tvål', { exact: false });

    expect(shampoo).toBeDefined();
    expect(balsam).toBeDefined();
    expect(soap).toBeDefined();

});