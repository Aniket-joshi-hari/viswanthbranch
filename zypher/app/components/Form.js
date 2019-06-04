import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DatePicker from "react-datepicker";
import Moment from "moment";

import Utils from "../utils"
// css
import "react-datepicker/dist/react-datepicker.css";


const styles = theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
  dialogActions: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '30px auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing.unit * 2,
    minWidth: 250,
  },
  formControlLabel: {
    marginTop: theme.spacing.unit,
  },
  textField: {},
});


class Form extends React.Component {
  constructor(props){
    super(props);
    const state = {};
    const fieldsArr = [];
    this.props.fieldsConfig.forEach(f => {
      state[f.field] = this.props.data[f.field] || f.defaultValue || '';
      fieldsArr.push(f.field);
    });
    this.state = {
      ...state,
      fieldsArr,
      emptyFields: [],
    };
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({ [name]: value });
  };

  handleDateChange = name => date => {
    // Moment(date).format("YYYY/mm/DD");
    this.setState({ [name]: date });
  };

  handleSubmit = () => {
    const { emptyFields, fieldsArr, ...rest } = this.state;
    // check empty fields
    fieldsArr.forEach((field, i) => {
      // if (this.props.fieldsConfig[i].type === "date"){
      //   if (!this.state[field] && !emptyFields.includes(field)) {
      //     emptyFields.push(field);
      //   } else if (this.state[field] && emptyFields.includes(field)) {
      //     emptyFields.splice(emptyFields.indexOf(field), 1);
      //   }
      // } else {
        if (!this.state[field] && !emptyFields.includes(field)) {
          emptyFields.push(field);
        } else if (this.state[field] && emptyFields.includes(field)) {
          emptyFields.splice(emptyFields.indexOf(field), 1);
        }
      // }
    });
    this.setState({emptyFields});
    // on Success
    if(!emptyFields.length)
      this.props.onSubmit(rest);
  };

  render() {
    const { classes, btnText = 'Submit' } = this.props;
    const { emptyFields } = this.state;
    return (
      <>
        <DialogContent>
          <form className={classes.form} noValidate>
            {this.props.fieldsConfig.map((f, idx) => {
              const Tag = f.component;
              if(f.type === 'list')
                return(
                  <FormControl className={classes.formControl} key={idx}>
                    <InputLabel htmlFor={f.field}>{f.label}</InputLabel>
                    <Tag
                      required={f.required}
                      fullWidth={f.fullWidth}
                      value={this.state[f.field]}
                      onChange={this.handleChange(f.field)}
                      inputProps={{
                        name: f.label,
                        id: f.field,
                      }}
                    >
                      {f.items.map((item, idx) => (
                        <MenuItem key={idx} value={item.value}>{item.label}</MenuItem>
                      ))}
                    </Tag>
                  </FormControl>
                );
                else if(f.type === 'input')
                  return(
                    <FormControl className={classes.formControl} key={idx}>
                      <Tag
                        error={emptyFields.includes(f.field)}
                        id={f.field}
                        label={f.label}
                        placeholder={f.placeholder}
                        className={classes[f.className]}
                        margin="normal"

                        required={f.required}
                        fullWidth={f.fullWidth}
                        value={this.state[f.field]}
                        onChange={this.handleChange(f.field)}
                      />
                    </FormControl>
                  );
                else if(f.type === 'date')
                  return(
                    <FormControl className={classes.formControl} key={idx}>
                      <DatePicker
                        selected={this.state[f.field]}
                        onChange={this.handleDateChange(f.field)}
                        placeholderText={f.placeholder}
                        // maxDate={new Date()}
                        maxDate={Utils.subDays(new Date(), 365 * 8)}
                        showYearDropdown
                        scrollableYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
                        isClearable={true}
                        // popperPlacement="top-end"
                        customInput={<TextField
                          error={emptyFields.includes(f.field)}
                          id={f.field}
                          label={f.label}
                          className={classes[f.className]}
                          margin="normal"

                          // required={f.required}
                          // fullWidth={f.fullWidth}
                          // value={this.state[f.field]}
                          value={this.props.value}
                          onClick={this.props.onClick}
                        />}
                      />
                    </FormControl>
                  );
            })}
          </form>
          {this.props.render && this.props.render()}
        </DialogContent>
        <DialogActions className={classes.dialogActions} style={this.props.closeBtn ? {} : { borderTop: 'none' }}>
          {this.props.closeBtn && (
            <Button onClick={this.props.onClose} color="primary">
              Close
            </Button>)}
          <Button
            variant="contained"
            onClick={this.handleSubmit}
            color="primary"
          >
            {btnText}
          </Button>
        </DialogActions>
      </>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
  btnText: PropTypes.string,
  closeBtn: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(Form);
