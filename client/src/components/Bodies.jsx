import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, Card, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Bodies extends Component {
    state = {
        partner: this.props.match.params.partner,
        bodies: { shapes: [] },
        activeItem: 'female',
        loading: false,
        errorMessage: ''
    }
    static contextTypes = {
        router: PropTypes.shape({
            history: PropTypes.shape({
                push: PropTypes.func.isRequired,
                replace: PropTypes.func.isRequired
            }).isRequired,
            staticContext: PropTypes.object
        }).isRequired
    };

    handleOnClick = (name) => {
        this.context.router.history.push(`${this.props.match.url}/${this.state.activeItem}/${name}`);
    }
    componentDidMount() {
        this.fetchBodies()
    }

    fetchBodies = async () => {
        try {
            const res = await fetch(`/api/partners/${this.props.match.params.partner}/bodies/${this.state.activeItem}`);

            const bodies = await res.json();

            this.setState({ bodies })
        } catch (err) {
            this.setState({ errorMessage: err });
        }

    }
    handleItemClick = async (e, { name }) => {
        await this.setState({ activeItem: name, loading: true });
        await this.fetchBodies();
        this.setState({ loading: false })
    }
    renderData = () => {
        if (this.state.loading) {
            return (
                <div></div>
            )
        } else {
            return this.state.bodies.shapes.map((body, i) => {
                let cappedName = body.name.replace(/^\w/, c => c.toUpperCase());
                return (
                    <Card key={i} onClick={() => this.handleOnClick(body.name)}>
                        <Image src={body.asset.file_asset.url} />
                        <Card.Content>
                            <Card.Header>{cappedName}</Card.Header>
                            <Card.Description>{body.description}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>

                            <Icon name='user' />
                            {body.sizes.length} sizes
                                </Card.Content>

                    </Card>

                )
            })
        }
    }

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu secondary className="filter">
                    <Menu.Item
                        name='female'
                        active={activeItem === 'female'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='male'
                        active={activeItem === 'male'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='custom'
                        active={activeItem === 'custom'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
                <Search />
                <Card.Group>
                    {this.renderData()}
                </Card.Group>
            </div >
        )
    }
}

export default Bodies;