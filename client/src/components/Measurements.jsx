import React, { Component } from "react";
import { Table, Header, Image, Tab, Segment, Divider } from "semantic-ui-react";
import { splitCamelCaseToString, spaceCamel } from "../helpers";

class Measurements extends Component {
  state = {
    sizeName: "M",
    currentSize: [
      {
        measurements: "",
        size: ""
      }
    ]
  };
  componentDidUpdate(prevProps) {
    if (this.props.currentBody !== prevProps.currentBody) {
      const currentSize = this.filterList(
        this.props.currentBody.sizes,
        this.state.sizeName
      );
      console.log(currentSize);
      this.setState({ currentSize });
    }
    // const currentSize = this.filterList(this.props.currentBody.sizes, this.props.match.params.size)[0]

    // this.setState({ currentBody: this.props.currentBody })
  }

  renderData = () => {
    if (this.state.currentSize) {
      return Object.entries(this.state.currentSize[0].measurements).map(
        ([key, value], i) => {
          return (
            <Table.Row key={i}>
              <Table.Cell>{key}</Table.Cell>
              <Table.Cell>{value}</Table.Cell>
            </Table.Row>
          );
        }
      );
    } else return console.log("hi");
  };

  filterList = (list, param) => {
    const initialList = list;
    return initialList.filter(item => {
      return item.display_name.toLowerCase().search(param.toLowerCase()) !== -1;
    });
  };
  render() {
    const gender = this.props.match.params.gender;
    let panes = [];
    if (gender === "female") {
      panes = [
        {
          menuItem: "Petite",
          render: () => (
            <Tab.Pane className="inverted">
              <MeasurementsTable data={/[P]/} />
            </Tab.Pane>
          )
        },
        {
          menuItem: "Regular",
          render: () => (
            <Tab.Pane className="inverted">
              <MeasurementsTable data={/[R]/} />
            </Tab.Pane>
          )
        },
        {
          menuItem: "Tall",
          render: () => (
            <Tab.Pane className="inverted">
              <MeasurementsTable data={/[T]/} />
            </Tab.Pane>
          )
        }
      ];
    } else {
      panes = [
        {
          menuItem: "Small",
          render: () => (
            <Tab.Pane className="inverted">
              <MeasurementsTable data={/[S]/} />
            </Tab.Pane>
          )
        },
        {
          menuItem: "Average",
          render: () => (
            <Tab.Pane className="inverted">
              <MeasurementsTable data={/[A]/} />
            </Tab.Pane>
          )
        },
        {
          menuItem: "Tall",
          render: () => (
            <Tab.Pane className="inverted">
              <MeasurementsTable data={/[T]/} />
            </Tab.Pane>
          )
        }
      ];
    }

    const MeasurementsTable = ({ data }) => {
      let [result] = this.state.currentSize.filter(
        size => size.size.search(data) !== -1
      );
      if (result) {
        return Object.entries(result.measurements).map(([key, value], i) => {
          return (
            <Table.Row key={i}>
              <Table.Cell style={{ fontWeight: "300" }}>
                {spaceCamel(key)}
              </Table.Cell>
              <Table.Cell>{value.toString()}</Table.Cell>
            </Table.Row>
          );
        });
      } else return null;
    };

    return (
      <Segment
        inverted
        style={{ borderRadius: "0 .28571429rem .28571429rem 0", margin: 0 }}
      >
        <Header style={{ marginLeft: "5px" }} as="h3">
          Measurements
        </Header>
        <Divider />
        <Tab panes={panes}>
          <Table
            inverted
            selectable
            basic="very"
            compact
            size="small"
            celled
            collapsing
            style={{ maxHeight: "80vh", overflow: "scroll", border: "none" }}
          >
            <Table.Body>
              {this.state.currentSize.measurements ? this.renderData() : null}
            </Table.Body>
          </Table>
        </Tab>
      </Segment>
    );
  }
}

export default Measurements;
