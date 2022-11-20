import App from '../App';
import { describe, it, render, waitFor, expect } from './test-utils';

describe("application-wide tests", () => {
    it('renders the application', async () => {
      const { getByText } = render(<App />);
      await waitFor(() => expect(getByText('rendering!')).toBeTruthy()); 
    });
});
