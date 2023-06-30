import {screen,render} from '@testing-library/react';
import {MuiMode} from './mui-mode';
import {AppProviders} from '../../providers/app-providers';
describe("testing theme",()=>{
    test("dark theme test",()=>{
        render(<MuiMode/>,{wrapper:AppProviders})
        const head=screen.getByRole('heading');
        expect(head).toHaveTextContent('dark mode');
    })
})