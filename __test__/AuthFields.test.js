import { render } from '@testing-library/react-native';
import AuthFields from '../components/auth/AuthFields';


let auth = {};
const setAuth = (newAuth) => {
    auth = newAuth;
};

const mockSubmit = jest.fn();

const navigation = () => false;

/**
 * Test authfields
 */
test('Testing authfield for login', async () => {

    const title = "Logga in";

    const { getAllByText } = render(<AuthFields 
        auth={auth}
        setAuth={setAuth}
        submit={mockSubmit}
        title={title}
        navigation={navigation}
    />);
    
    const titleElements = getAllByText(title);

    expect(titleElements.length).toBe(2);
});