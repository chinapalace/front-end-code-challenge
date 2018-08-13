import React, { Component } from "react";
import {
  Container,
  Image,
  Segment,
  Dropdown,
  Grid,
  Popup
} from "semantic-ui-react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Measurements from "./Measurements";
class Body extends Component {
  state = {
    partner: this.props.match.params.partner,
    bodies: { shapes: [] },
    activeItem: this.props.match.params.gender,
    loading: false,
    errorMessage: "",
    currentBody: {
      asset: {
        file_asset: {
          url: ""
        }
      }
    }
  };
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  };

  async componentDidMount() {
    await this.fetchBodies();

    const currentBody = this.filterList(
      this.state.bodies.shapes,
      this.props.match.params.shape
    )[0];
    this.setState({ currentBody });
  }

  fetchBodies = async () => {
    try {
      const res = await fetch(
        `/api/partners/${this.state.partner}/bodies/${this.state.activeItem}`
      );

      const bodies = await res.json();

      this.setState({ bodies });
    } catch (err) {
      this.setState({ errorMessage: err });
    }
  };
  handleShapeChange = async (e, { value }) => {
    await this.props.history.push(`${value}`);

    const currentBody = this.filterList(
      this.state.bodies.shapes,
      this.props.match.params.shape
    )[0];
    this.setState({ currentBody });
  };
  filterList = (list, param) => {
    const initialList = list;
    return initialList.filter(item => {
      return item.name.toLowerCase().search(param.toLowerCase()) !== -1;
    });
  };

  render() {
    console.log(this.state.activeItem);
    const { shapes } = this.state.bodies;
    const shapeOptions = shapes.map(shape => {
      return { key: shape.name, value: shape.name, text: shape.name };
    });
    const sizes = ["XS", "S", "M", "L"];
    const sizeOptions = sizes.map(size => {
      return {
        key: size,
        value: size,
        text: size
      };
    });
    const sexes = ["male", "female"];
    const sexOptions = sexes.map(sex => {
      return {
        key: sex,
        value: sex,
        text: sex
      };
    });
    const { url } = this.state.currentBody.asset.file_asset;
    return (
      <div>
        <Container>
          <Grid centered>
            <Segment
              style={{
                borderRadius: ".28571429rem 0 0 .28571429rem",
                margin: 0
              }}
            >
              <Image
                src={url}
                style={{ minHeight: "100%", minWidth: "440px" }}
              />
            </Segment>
            <Measurements
              currentBody={this.state.currentBody}
              match={this.props.match}
            />
          </Grid>
        </Container>
        <div id="box">
          <Segment
            inverted
            style={{
              minWidth: "400px",
              minHeight: "100px",
              transform: "translate(0px, 0px)",
              display: "flex",
              flexDirection: "row",
              listStyle: "none",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <div>
              <Popup
                trigger={
                  <Dropdown
                    button
                    className="icon"
                    floating
                    labeled
                    icon="heterosexual"
                    options={sexOptions}
                    value={this.state.activeItem}
                  />
                }
                content="Coming Soon :)"
                basic
                style={{ color: "black" }}
              />
            </div>

            <div>
              <Dropdown
                onChange={this.handleShapeChange}
                button
                className="icon"
                floating
                labeled
                icon="user"
                options={shapeOptions}
                value={this.props.match.params.shape}
              />
            </div>
            <div>
              <Popup
                trigger={
                  <Dropdown
                    onChange={this.handleSizeChange}
                    button
                    className="icon"
                    floating
                    labeled
                    icon="resize vertical"
                    options={sizeOptions}
                    value="XS"
                  />
                }
                content="Coming Soon :)"
                basic
                style={{ color: "black" }}
              />
            </div>
          </Segment>
        </div>
      </div>
    );
  }
}

export default withRouter(Body);
