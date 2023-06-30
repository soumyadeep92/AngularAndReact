import {render,screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import { Counter } from './counter';
describe('Counter',()=>{
    test('First test',()=>{
        render(<Counter/>);
        const heading=screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        const button=screen.getByRole('button',{name:'Increment'});
        expect(button).toBeInTheDocument();
    });
    test('Counter evaluates to zero at first',()=>{
        render(<Counter/>);
        const btnTest=screen.getByRole('heading');
        expect(btnTest).toHaveTextContent('0');
    });
    test('Counter has count value 1',()=>{
        // userEvent.setup();
        render(<Counter/>);
        const btnTest=screen.getByRole('button',{name:'Increment'});
        user.click(btnTest);
        const text=screen.getByRole('heading');
        expect(text).toHaveTextContent('1');
    });
    test('Counter has a set value of 10 after clicking Set button',()=>{
        render(<Counter/>);
        const butn=screen.getByRole("spinbutton");
        user.type(butn,"10");
        expect(butn).toHaveValue(10);
        const setBtn=screen.getByRole('button',{name:'Set'});
        user.click(setBtn);
        const head=screen.getByRole('heading')
        expect(head).toHaveTextContent("10");
    });
    test('Elements are in order and focus',()=>{
        render(<Counter/>);
        const amountInput=screen.getByRole('spinbutton');
        const setBtn=screen.getByRole('button',{name:'Set'});
        const btnTest=screen.getByRole('button',{name:'Increment'});
        user.tab();
        expect(btnTest).toHaveFocus();
        user.tab();
        expect(amountInput).toHaveFocus();
        user.tab();
        expect(setBtn).toHaveFocus();
    })
})