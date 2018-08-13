import React, { Component } from "react";
import { Select, Container, Header } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class PartnerSelector extends Component {
  state = { partners: [] };
  async componentDidMount() {
    const res = await fetch("/api/partners");

    let partners = await res.json();

    this.setState({ partners });
  }
  setPartner = () => {};
  handleOnClick = partner => {
    this.props.history.push(`/${partner}`);
  };
  renderContent = () => {
    return this.state.partners.map(partner => {
      return {
        text: partner.name,
        value: partner.name,
        image: { avatar: true, src: partner.logo.thumb.url },
        onClick: () => this.handleOnClick(partner.id)
      };
    });
  };

  render() {
    return (
      <Container text>
        <Header
          as="h1"
          content="Partner Login"
          inverted
          style={{
            fontSize: "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "3em"
          }}
        />
        <Select options={this.renderContent()} />
      </Container>
    );
  }
}

PartnerSelector = withRouter(PartnerSelector);
export default PartnerSelector;
