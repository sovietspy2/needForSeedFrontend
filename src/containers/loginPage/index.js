import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import "./styles.css";
import FormControl from '@material-ui/core/FormControl';


export default class loginPage extends PureComponent {


    constructor() {
        super();
        this.state = {username: null, password: null};
     }
    
     handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };


     handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username, this.state.password);
        console.log("uh oh submitted");
     }

  render() {

    return (
      <Paper className="paper">
        <form onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <TextField className="textfield" label="username" onChange={this.handleChange("username")} />
            </FormControl>
          <FormControl margin="normal" required fullWidth>
              <TextField className="textfield"  label="password" type="password" onChange={this.handleChange("password")} />  
          </FormControl>                   
          <Button className="button" type="submit">Submit</Button>
        </form>
      </Paper>
    )
  }
}
