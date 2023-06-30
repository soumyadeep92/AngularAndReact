import {logRoles, render,screen} from '@testing-library/react';
import {Skills} from './skills';
describe('Skills',()=>{
    const skills=['HTML','CSS','Javascript'];
    test('renders correctly',()=>{
        render(<Skills skills={skills}/>);
        const listElement=screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });
    test('renders a list of skills',()=>{
        render(<Skills skills={skills}/>);
        const listItemElements=screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(skills.length);
    });
    test('renders Login button',()=>{
        render(<Skills skills={skills}/>);
        const loginButton=screen.getByRole("button",{name:"Login",});
        expect(loginButton).toBeInTheDocument();
    });
    test('does not render Start Learning button',()=>{
        render(<Skills skills={skills}/>);
        const learnButton=screen.queryByRole("button",{name:"Start Learning",});
        expect(learnButton).not.toBeInTheDocument();
    });
    test('Start Learning button is eventually displayed',async ()=>{
        const view=render(<Skills skills={skills}/>);
        logRoles(view.container);
        const learnButton=await screen.findByRole("button",{name:"Start Learning",},{timeout:2000});
        expect(learnButton).toBeInTheDocument();
    });
});