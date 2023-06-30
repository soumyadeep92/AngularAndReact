import { render,screen } from "@testing-library/react"
import user from "@testing-library/user-event";
import {counterTwo as CounterTwo} from './counterTwo';
describe('renders the tests correctly',()=>{
    test('test the header',()=>{
        render(<CounterTwo count={0}/>);
        const head=screen.getByText('Counter Two');
        expect(head).toBeInTheDocument();
    })
    test('handlers are called',()=>{
        const incrementHandler=jest.fn();
        const decrementHandler=jest.fn();
        render(<CounterTwo count={0} handleIncrement={incrementHandler} handleDecrement={decrementHandler}/>);
        const btn1=screen.getByRole('button',{name:'Increment'});
        const btn2=screen.getByRole('button',{name:'Decrement'});
        user.click(btn1);
        user.click(btn2);
        expect(incrementHandler).toHaveBeenCalledTimes(1);
        expect(decrementHandler).toHaveBeenCalledTimes(1);
    })
})