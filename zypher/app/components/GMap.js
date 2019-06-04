import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
// import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';


Geocode.setApiKey("AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0");
Geocode.enableDebug();


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

// const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     <Marker
//       position={{ lat: -34.397, lng: 150.644 }}
//     />
//   </GoogleMap>
// ));


class GMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: '',
      city: '',
      area: '',
      state: '',
      mapPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng
      },
      markerPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng
      }
    };
  }

  componentDidMount() {
    Geocode.fromLatLng(this.state.mapPosition.lat, this.state.mapPosition.lng).then(
      response => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);

        console.log('city', city, area, state);

        this.setState({
          address: (address) ? address : '',
          area: (area) ? area : '',
          city: (city) ? city : '',
          state: (state) ? state : '',
        })
      },
      error => {
        console.error(error);
      }
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.markerPosition.lat !== this.props.center.lat ||
      this.state.address !== nextState.address ||
      this.state.city !== nextState.city ||
      this.state.area !== nextState.area ||
      this.state.state !== nextState.state
    ) {
      return true
    } else if (this.props.center.lat === nextProps.center.lat) {
      return false
    }
  }

  getCity = (addressArray) => {
    let city = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };

  getArea = (addressArray) => {
    let area = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };

  getState = (addressArray) => {
    let state = '';
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onMarkerDragEnd = (event) => {
    console.log('event', event);
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng(),
      addressArray = [];
    Geocode.fromLatLng(newLat, newLng).then(
      response => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);
        this.setState({
          address: (address) ? address : '',
          area: (area) ? area : '',
          city: (city) ? city : '',
          state: (state) ? state : ''
        })
      },
      error => {
        console.error(error);
      }
    );
  };

  render() {
    const AsyncMap = withScriptjs(
      withGoogleMap(
        props => (
          <GoogleMap google={this.props.google}
            defaultZoom={this.props.zoom}
            defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
          >
            {/* For Auto complete Search Box */}
            <Autocomplete
              style={{
                width: '100%',
                height: '40px',
                paddingLeft: '16px',
                marginTop: '2px',
                marginBottom: '100px'
              }}
              onPlaceSelected={this.onPlaceSelected}
              types={['(regions)']}
            />
            {/*Marker*/}
            <Marker google={this.props.google}
              name={'Dolores park'}
              draggable={true}
              onDragEnd={this.onMarkerDragEnd}
              position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
            />
            <Marker />
            {/* InfoWindow on top of marker */}
            <InfoWindow
              onClose={this.onInfoWindowClose}
              position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
            >
              <div>
                <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
              </div>
            </InfoWindow>
          </GoogleMap>
        )
      )
    );
    let map;
    if (this.props.center.lat !== undefined) {
      map = <div>
        {/* <div>
          <div className="form-group">
            <label htmlFor="">City</label>
            <input type="text" name="city" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.city} />
          </div>
          <div className="form-group">
            <label htmlFor="">Area</label>
            <input type="text" name="area" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.area} />
          </div>
          <div className="form-group">
            <label htmlFor="">State</label>
            <input type="text" name="state" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.state} />
          </div>
          <div className="form-group">
            <label htmlFor="">Address</label>
            <input type="text" name="address" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.address} />
          </div>
        </div> */}
        <AsyncMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEl2dHsJm2Z44w5jXfT8yxQPSTBjWbCes&libraries=places"
          loadingElement={
            <div style={{ height: `100%` }} />
          }
          containerElement={
            <div style={{ height: this.props.height }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
        />
      </div>
    } else {
      map = <div style={{ height: this.props.height }} />
    }
    return (map)
  }
}

{/* <DialogContent> */ }
{/* <LoadScript
            id="script-loader"
            googleMapsApiKey="AIzaSyDYlbg9KfsdkqQPl3kGAFguNaXFJ8KVCCE"
            // {...other props}
          >
          <GoogleMap
            id='example-map'
            style={{ height: 200, overflow: 'inherit' }}
            // {...other props }
          >
            ...Your map components
        </GoogleMap>
      </LoadScript > */}


GMap.propTypes = {
  classes: PropTypes.object.isRequired,
  // btnText: PropTypes.string,
  // closeBtn: PropTypes.bool.isRequired,
  // onClose: PropTypes.func.isRequired,
  // onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(GMap);
