import { Button } from 'grommet'
import React, { Component } from 'react'

export class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Initial State'
        }
        console.log('Lifecycle component constructor');
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Lifecycle component getDerivedStateFromProps');
        return nextProps
    }
    componentDidMount() {
        console.log('Lifecycle component mounted');
    }
    reRender = () => {
        console.log('Component re-rendering');
        //this.forceUpdate();
        this.setState({ message: 'State Updated' });
    }
  render() {
    console.log('Lifecycle component rendered');
    return (
      <div>
        <h2>Lifecycle Component</h2>
        <Button type="button" label="Click Me" primary
          onClick={() => this.reRender()} />
      </div>
    )
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Lifecycle component shouldComponentUpdate');
    // You can add logic here to determine if the component should update
    return false; // Returning true means the component will update
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Lifecycle component getSnapshotBeforeUpdate');
    // You can capture some information from the DOM before it updates
    return null; // Returning null means no snapshot is captured
  } 
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Lifecycle component componentDidUpdate');
    // You can perform actions after the component has updated
    // For example, you can access the snapshot here
  } 
  componentWillUnmount() {
    console.log('Lifecycle component will unmount');
    // You can perform cleanup actions here
  }
}

export default Lifecycle