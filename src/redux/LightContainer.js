import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    light: state.light
});

const LightComponent = ({ light, onSwitch}) => (
    <div>
        <p>{Light}</p>
        <button type="button" onClick={onSwitch}>
            switch
        </button>
    </div>
);

const mapDispatchToProps = dispatch => ({
    onSwitch: () => dispatch({type: "SWITCH"})
});

export default connect(mapStateToProps, mapDispatchToProps)(LightComponent);