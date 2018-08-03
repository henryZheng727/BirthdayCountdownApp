import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

class Picker extends Component {


    constructor (props) {
        super(props)
        this.sate = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (data) {
        console.log('trying to change date for', date.d)
        this.setState({
            startDate: date
        });
    }
    
    render () {
        return (
            <div className="picker">
                <DatePicker
                    selected={this.state.startDate}
                    onchange={this.handleChange}
                />
            </div>
        )
    }
}

export default Picker;