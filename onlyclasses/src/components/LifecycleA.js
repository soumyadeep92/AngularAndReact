import React from 'react';
import LifecycleB from './LifecycleB';
class LifecycleA extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:'Soumya'
        }
        console.log('Inside constructor Lifecycle A');
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('Get derived state from props LifeCycle A');
        return null;
    }
    componentDidMount()
    {
        console.log('Component Did Mount LifeCycle A');
    }
    shouldComponentUpdate()
    {
        console.log('ComponentShould Update LifecycleA');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('GetSnapshotBeforeUpdate LifecycleA');
        return null;
    }
    componentDidUpdate()
    {
        console.log('ComponentDidUpdate LifecycleA')
    }
    changeName=()=>
    {
        this.setState({name:'CodeEvolution'});
    }
    render()
    {
        console.log('Render Lifecycle A');
        return(
            <div>
                <p>Lifecycle A</p>
                <button onClick={this.changeName}>Change Name</button>
                <LifecycleB/>
            </div>
        );
    }
}
export default LifecycleA;