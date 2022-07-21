import { cleanup, render, screen } from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from='PLN' to='USD' amount='100' />);
    })
    it('should render proper info about conversion when PLN -> USD', () => {
        const testObj = [
            { from: 'PLN', to: 'USD', amount: '100', textContent: 'PLN 100.00 = $28.57' },
            { from: 'PLN', to: 'USD', amount: '51', textContent: 'PLN 51.00 = $14.57' },
            { from: 'PLN', to: 'USD', amount: '28', textContent: 'PLN 28.00 = $8.00' },
            { from: 'PLN', to: 'USD', amount: '17', textContent: 'PLN 17.00 = $4.86' },
        ]

        for (const testOb of testObj) {
            render(<ResultBox from= {testOb.from} to={testOb.to} amount={testOb.amount} />);
            const mainBox = screen.getByTestId('mainBox')
            expect(mainBox).toHaveTextContent(testOb.textContent);
            cleanup();
        }
    })
    it('should render proper info about conversion when USD -> PLN', () => {
        const testObj = [
            { from: 'USD', to: 'PLN', amount: '100', textContent: '$100.00 = PLN 350.00' },
            { from: 'USD', to: 'PLN', amount: '51', textContent: '$51.00 = PLN 178.50' },
            { from: 'USD', to: 'PLN', amount: '28', textContent: '$28.00 = PLN 98.00' },
            { from: 'USD', to: 'PLN', amount: '17', textContent: '$17.00 = PLN 59.50' },
        ]

        for (const testOb of testObj) {
            render(<ResultBox from= {testOb.from} to={testOb.to} amount={testOb.amount} />);
            const mainBox = screen.getByTestId('mainBox')
            expect(mainBox).toHaveTextContent(testOb.textContent);
            cleanup();
        }
    })
    it('should render proper info about conversion when USD => USD or PLN => PLN ', () => {
        const testObj = [
            { from: 'USD', to: 'USD', amount: '123', textContent: '$123.00 = $123.00' },
            { from: 'USD', to: 'USD', amount: '15', textContent: '$15.00 = $15.00' },
            { from: 'PLN', to: 'PLN', amount: '83', textContent: 'PLN 83.00 = PLN 83.00' },
            { from: 'PLN', to: 'PLN', amount: '77', textContent: 'PLN 77.00 = PLN 77.00' },
        ]

        for (const testOb of testObj) {
            render(<ResultBox from= {testOb.from} to={testOb.to} amount={testOb.amount} />);
            const mainBox = screen.getByTestId('mainBox')
            expect(mainBox).toHaveTextContent(testOb.textContent);
            cleanup();
        }
    })
    it('should render warning info about conversion when amount is negative ', () => {
        const testObj = [
            { from: 'USD', to: 'USD', amount: '-133', textContent: 'Wrong value…' },
            { from: 'USD', to: 'USD', amount: '-25', textContent: 'Wrong value…' },
            { from: 'PLN', to: 'PLN', amount: '-28', textContent: 'Wrong value…' },
            { from: 'PLN', to: 'PLN', amount: '-12', textContent: 'Wrong value…' },
        ]

        for (const testOb of testObj) {
            render(<ResultBox from= {testOb.from} to={testOb.to} amount={testOb.amount} />);
            const mainBox = screen.getByTestId('negativAmount')
            expect(mainBox).toHaveTextContent(testOb.textContent);
            cleanup();
        }
    })
});