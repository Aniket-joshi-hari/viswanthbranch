import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
// components
import Form from '../../../components/Form';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

const fieldsConfig = [
    // profile pic with edit btn,
    // profile bg pic with edit btn
    {
        type: "input",
        required: true,
        field: "fname",
        label: "Full Name",
        placeholder: "Full Name",
        className: 'textField',
        component: TextField
    },
    {
        type: "list",
        required: true,
        field: "gender",
        label: "Gender",
        component: Select,
        fullWidth: true,
        inputProps: {
            name: 'Gender',
            id: 'addressType',
        },
        defaultValue: "male",
        items: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" }
        ]
    },
    {
        type: "input",
        required: true,
        field: "mobileNumber",
        label: "Mobile Number",
        placeholder: "Mobile Number",
        className: 'textField',
        component: TextField,
        child: {
            type: "badge",
            required: true,
            field: "isMobileVerified",
            label: "vERIFIED",
            className: 'chip',
            component: TextField // badge
        },
    },
    {
        type: "input",
        inputType: "email", // type text
        required: true,
        field: "email",
        label: "Email Address",
        placeholder: "Email Address",
        className: 'textField',
        component: TextField
    },
    {
        type: "date",
        required: true,
        field: "birthday",
        label: "Birthday",
        placeholder: "birthday",
        className: 'textField',
        // defaultValue: new Date(),
        // component: TextField // date picker
    },
    {
        type: "input",
        required: true,
        field: "location",
        label: "Location",
        placeholder: "Location",
        className: 'textField',
        component: TextField
    }
];

class AccountDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    }

    handleFormSubmit = (data) => {
        console.log(data);
    };

    render(){
        const { classes } = this.props;
        const { isEdit } = this.state;
        return (
            <div className={classes.root}>
                <main className={classes.content}>
                    <Form
                        btnText={isEdit ? 'UPDATE DETAILS' : 'SAVE DETAILS'}
                        closeBtn={false}
                        onSubmit={this.handleFormSubmit}
                        fieldsConfig={fieldsConfig}
                        data={{}}
                    />
                </main>
            </div>
        );
    }
}

AccountDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountDetails);
