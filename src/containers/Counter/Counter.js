import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import * as actions from '../../store/actions/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li 
                            // PS: passing an anonymous function doesn't call the function
                            // instantly. This is how we pass parameters
                            onClick={() => this.props.onDeleteResult(strResult.id)}
                            key={strResult.id}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actions.increment()),
        onDecrementCounter: () => dispatch(actions.decrement()),
        onAddCounter:() => dispatch(actions.add(5)),
        onSubCounter:() => dispatch(actions.sub(5)),
        onStoreResult:(_result) => dispatch(actions.storeResult(_result)),
        onDeleteResult:(_id) => dispatch(actions.deleteResult(_id))
    };
};

/**
 * connect() is an odd HOC
 * 
 * When the function is called, it returns another HOC function
 * The second parenthesis pair is the argument of that function (The container to be wrapped)
 */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);