import React, { Component } from "react";
import {alerts} from "./Bienvenido";

class Botones extends Component {
render() {
    return (
    <div>
        <button onClick={() => alert(this.props.alerts.m1)}>Módulo 1</button>
        <button onClick={() => alert(this.props.alerts.m2)}>Módulo 2</button>
    </div>
    );
}
}

export default Botones;
