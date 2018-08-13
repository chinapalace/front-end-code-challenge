import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Container, Image } from "semantic-ui-react";
import avametricLogo from "./avametricLogo1.png";

class NavBar extends Component {
  state = { partner: { logo: "", name: "" } };

  async componentDidMount() {
    try {
      const res = await fetch(
        `/api/partners/${this.props.match.params.partner}/`
      );

      const partner = await res.json();

      this.setState({ partner });
    } catch (err) {
      console.log(err);
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { id, name, logo, web } = this.state.partner;

    return (
      <Container fluid>
        <Menu secondary widths={4}>
          <Menu.Item>
            <Link to="/">
              <img width="190px" src={avametricLogo} alt="Avametric" />
            </Link>
          </Menu.Item>

          <Menu.Item name="bodies" active={activeItem === "bodies"} disabled>
            Features
          </Menu.Item>

          <Menu.Item name="account" active={activeItem === "account"} disabled>
            Testimonials
          </Menu.Item>
          <Menu.Item>
            <div>
              <a target="blank" href={web}>
                <Image src={logo.url} avatar />
                <span>{name}</span>
              </a>
            </div>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default NavBar;
