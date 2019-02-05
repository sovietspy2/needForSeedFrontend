import React, { Component, PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import "./style.css"

export default class List extends PureComponent {
    constructor(props) {
        super(props);
        this.state= {
            items: []
        };
    }

    render() { 
        return (<div> 
            <Paper className="page">
            <Button variant="contained" color="primary">fancy button</Button>
                hello
            </Paper>
             

            </div>)
    }

    renderButton() { 
        return (
            <button>
                hello
            </button>
        );
    }


}