import React, { Component } from "react";
import { StoreButton } from "../styled/StoreButton";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Contact extends Component {
  style = {
    top: 0,
    position: "relative",
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
  };
  render() {
    return (
      <div>
        <div className="google-map">
          <Map google={this.props.google} zoom={14} style={this.style}>
            <Marker onClick={this.onMarkerClick} name={"Current location"} />

            <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
          </Map>
        </div>
        <div className="contact-row">
          <div className="contact-col">
            <h3>Store</h3>
            <ul>
              <li>
                <i class="fas fa-phone"></i> +1-1412-1232
              </li>
              <li>
                <i class="fas fa-envelope"></i> office@fenixtech.com
              </li>
              <li>
                <i class="fas fa-map-marker"></i> 2645 Elston Avenue, Chicago
              </li>
              <li>
                <i class="fas fa-clock"></i> Mon - Sat 10 to 9, Sun 11 to 6
              </li>
            </ul>
          </div>
          <div className="contact-col">
            <h3>Info</h3>
            <p>Fenix Tech</p>

            <p>
              Fenix Tech is among the nation's leading information technology
              and electronic device suppliers, operating twenty-five large
              stores in major marketsnationwide. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Tenetur odit possimus animi.
            </p>
          </div>
          {/*col end */}
        </div>
        <div className="contact">
          <h2 id="h2-c">Contact us</h2>
          <form method="post">
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <br></br>
              <input type="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <br></br>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="texta">Message</label>
              <br></br>
              <textarea name="texta" cols="30" rows="10" required></textarea>
            </div>
            <br></br>
            <StoreButton preview>Submit</StoreButton>
          </form>
        </div>
        <div className="container-psh"></div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  /*apiKey: "AIzaSyBpT_XIeRAMIfWw0PDtr5C0E9IiMnoMesk",*/
})(Contact);
