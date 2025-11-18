import React from "react";

class Info extends React.Component {
  render() {
    const title = "This is my title.";
    const showTitle = true;

    if (showTitle) {
      return (
        <div>
          <h1>{title}</h1>
          <h2>{2 + 2}</h2>
          <p>Manage Your stuff.</p>
        </div>
      );
    } else {
      return <p>emptyyy </p>;
    }
  }
}

export default Info;
