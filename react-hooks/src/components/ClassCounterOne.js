import React,{Component} from 'react';
class ClassCounterOne extends Component
{
    constructor(props)
    {
        super(props);
        this.state={count:0};
    }
    componentDidMount()
    {
        console.log('component did mount');
        console.log(`Clicked ${this.state.count} times`);
    }
    componentDidUpdate()
    {
        console.log('component did update');
        console.log(`Clicked ${this.state.count} times`);
    }
    render()
    {
        return(
            <div>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Increase Count</button>
            </div>
        )
    }
}
export default ClassCounterOne;