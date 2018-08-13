import React from "react";
import { Button, Popup } from "semantic-ui-react";

const FAB = props => {
  return (
    <div
      style={{
        position: "fixed",
        margin: "2em",
        bottom: 0,
        right: 0,
        animation: "bounce 10s ease-in-out 10s infinite normal none running",
        zIndex: 6
      }}
    >
      <Popup
        trigger={
          <Button size="large" circular color="google plus" icon="plus" />
        }
        content="Coming Soon :)"
        basic
        style={{ color: "black" }}
      />
    </div>
  );
};

export default FAB;
