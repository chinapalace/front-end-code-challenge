import React, { Component } from 'react';
import { Container, Image, Segment, Dropdown, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import Measurements from './Measurements';
class Body extends Component {
    state = {
        partner: this.props.match.params.partner,
        bodies: { shapes: [] },
        activeItem: this.props.match.params.gender,
        loading: false,
        errorMessage: '',
        currentBody: {
            asset: {
                file_asset: {
                    url: ''
                }
            }
        }
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

    async componentDidMount() {
        await this.fetchBodies();

        const currentBody = this.filterList(this.state.bodies.shapes, this.props.match.params.shape)[0]
        this.setState({ currentBody })
    }

    fetchBodies = async () => {
        try {
            const res = await fetch(`/api/partners/${this.state.partner}/bodies/${this.state.activeItem}`);

            const bodies = await res.json();

            this.setState({ bodies })
        } catch (err) {
            this.setState({ errorMessage: err });
        }

    }
    handleShapeChange = async (e, { value }) => {
        await this.props.history.push(`${value}`);
        //this.context.router.history.push(`${value}`);
        const currentBody = this.filterList(this.state.bodies.shapes, this.props.match.params.shape)[0]
        this.setState({ currentBody })

    }
    filterList = (list, param) => {
        const initialList = list;
        return initialList.filter(item => {
            return item.name.toLowerCase().search(param.toLowerCase()) !== -1;
        });
    };

    render() {
        const { shapes } = this.state.bodies;
        const shapeOptions = shapes.map(shape => {
            return { key: shape.name, value: shape.name, text: shape.name }
        })
        console.log("current body", this.state.currentBody)

        const { url } = this.state.currentBody.asset.file_asset;
        return (

            <Container fluid>
                <Grid>
                    <Image src={url} />
                    <Measurements currentBody={this.state.currentBody} match={this.props.match} />
                </Grid>
                <div id="box">
                    <Segment inverted style={{ minWidth: "400px", minHeight: "100px", transform: "translate(0px, 0px)", display: "flex", flexDirection: "row", listStyle: "none", justifyContent: "space-around" }}>

                        <div>
                            <Dropdown
                                button
                                className='icon'
                                floating
                                labeled
                                icon='world'
                                options={[{ key: 'male', text: 'male', value: 'male' }, { key: 'female', text: 'female', value: 'female' }]}

                            />
                        </div>
                        <div>
                            <Dropdown
                                onChange={this.handleShapeChange}
                                button
                                className='icon'
                                floating
                                labeled
                                icon='world'
                                options={shapeOptions}
                                value={this.props.match.params.shape}
                            />
                        </div>
                        <div>
                            <Dropdown
                                button
                                className='icon'
                                floating
                                labeled
                                icon='world'
                                options={[{ key: 'male', text: 'male', value: 'male' }, { key: 'female', text: 'female', value: 'female' }]}

                            />
                        </div>

                    </Segment>
                </div>
            </Container>
        )
    }
}

export default withRouter(Body);