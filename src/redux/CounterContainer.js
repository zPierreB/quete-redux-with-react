import React from 'react';
import { connect } from 'react-redux';

const CounterComponent = ({count, add, remove}) => (
    <div>
        <p>{count}</p>
        <button type="button" onClick={add}>+</button>
        <button type="button" onClick={remove}>-</button>
    </div>
);

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = dispatch => ({
    add: () => dispatch({type: "ADD"}),
    remove: () => dispatch({type: "REMOVE"})
});

export default connect(CounterComponent, mapStateToProps, mapDispatchToProps);