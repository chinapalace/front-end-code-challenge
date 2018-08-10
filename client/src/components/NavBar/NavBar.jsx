import React, { Component } from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import avametricLogo from './avametricLogo2.png';

class NavBar extends Component {
    state = { partner: { logo: '', name: '' } }

    async componentDidMount() {
        try {
            const res = await fetch(`/api/partners/${this.props.match.params.partner}/`);

            const partner = await res.json();

            this.setState({ partner })
        }
        catch (err) {
            console.log(err);
        }

    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

        const { activeItem } = this.state;
        const { id, name, logo, web } = this.state.partner;

        return (
            <Container>
                <Menu secondary widths={4}>
                    <Menu.Item>
                        <a href="/">
                            <img height="40px" width="40px" src={avametricLogo} alt="Avametric" />
                        </a>
                    </Menu.Item>

                    <Menu.Item
                        name='features'
                        active={activeItem === 'features'}
                        onClick={this.handleItemClick}
                    >
                        Features
                </Menu.Item>

                    <Menu.Item
                        name='testimonials'
                        active={activeItem === 'testimonials'}
                        onClick={this.handleItemClick}
                    >
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
        )
    }
}

export default NavBar;