import React, { Component } from 'react';
import { Select } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";

class PartnerSelector extends Component {
    state = { partners: [] }
    async componentDidMount() {
        const res = await fetch('/api/partners');

        let partners = await res.json();

        this.setState({ partners })
    }
    setPartner = () => {

    }
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
            }
        })

    }

    render() {

        return (
            <Select options={this.renderContent()} />
        )
    }
}

PartnerSelector = withRouter(PartnerSelector);
export default PartnerSelector;