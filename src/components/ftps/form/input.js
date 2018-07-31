import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props.value || ''};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.value || ''});
    }

    handleChange(event) {
        this.setState({value: event.target.value,});
    }

    render() {
        const {type, label, className} = this.props;
        return (
            <TextField
                id={type}
                label={label}
                className={className}
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                margin="normal"
            />
        )
    }
}