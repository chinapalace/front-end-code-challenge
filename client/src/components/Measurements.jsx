import React, { Component } from 'react';
import { Table, Header, Image } from 'semantic-ui-react';

class Measurements extends Component {
    state = { currentBody: '' }
    componentDidMount() {

        //const currentSize = this.filterList(this.state.currentBody.sizes, this.props.match.params.size)[0]
        this.setState({ currentBody: this.props.currentBody })
    }
    renderData = () => {
        return this.props.currentBody(
            <Table.Row>
                <Table.Cell>

                </Table.Cell>
                <Table.Cell></Table.Cell>
            </Table.Row>
        )
    }
    filterList = (list, param) => {
        const initialList = list;
        return initialList.filter(item => {
            return item.name.toLowerCase().search(param.toLowerCase()) !== -1;
        });
    };
    render() {
        console.log(this.state.currentBody)
        return (
            <Table basic='very' celled collapsing>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                        </Table.Cell>
                        <Table.Cell>22</Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table>
        )
    }
}

export default Measurements;