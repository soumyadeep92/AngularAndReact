import {renderHook,act} from '@testing-library/react';
import {useCounter} from './useCounter';

describe('test counter hooks',()=>{
    test('renders counter for value of 0',()=>{
        const {result}=renderHook(useCounter);
        expect(result.current.count).toBe(0);
    })
    test('renders counter for value of initial count',()=>{
        const {result}=renderHook(useCounter,{initialProps:{initialCount:10}});
        expect(result.current.count).toBe(10);
    })
    test('checks increment by 1 of the counter',()=>{
        const {result}=renderHook(useCounter);
        act(()=>result.current.increment());
        expect(result.current.count).toBe(1);
    })
    test('checks decrement by 1 of the counter',()=>{
        const {result}=renderHook(useCounter);
        act(()=>result.current.decrement());
        expect(result.current.count).toBe(-1);
    })
})