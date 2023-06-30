import { render,screen } from "@testing-library/react"
import { rest } from "msw";
import { server } from "../mocks/server";
import Users from './users';
describe('test for users',()=>{
    test('Test for user', ()=>{
        render(<Users/>);
        const head=screen.getByRole('heading');
        expect(head).toHaveTextContent('Users');
    })
    test('Renders Users correctly',()=>{
        render(<Users/>);
        const head=screen.getByText('Users');
        expect(head).toBeInTheDocument();
    })
    test("Renders list of items",async ()=>{
        render(<Users/>);
        const element=await screen.findAllByRole('listitem');
        expect(element).toHaveLength(3);
    })
    test('Renders error',async ()=>{
        server.use(
            rest.get(
                'https://jsonplaceholder.typicode.com/users',(req,res,ctx)=>{
                    return res(ctx.status(500));
                }
            )
        )
        render(<Users/>);
        const error=await screen.findByText('Error occured');
        expect(error).toBeInTheDocument();
    })
})