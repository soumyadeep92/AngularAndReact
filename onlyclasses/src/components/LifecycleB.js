import React from 'react';
class LifecycleB extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={

        }
        console.log('Inside constructor Lifecycle B');
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('Get derived state from props LifeCycle B');
        return null;
    }
    componentDidMount()
    {
        console.log('Component Did Mount LifeCycle B');
    }
    shouldComponentUpdate()
    {
        console.log('ComponentShould Update LifecycleB');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('GetSnapshotBeforeUpdate LifecycleB');
        return null;
    }
    componentDidUpdate()
    {
        console.log('ComponentDidUpdate LifecycleB')
    }
    render()
    {
        console.log('Render Lifecycle B');
        return(
            <div>
                <p>Lifecycle B</p>
            </div>
        );
    }
}
export default LifecycleB;