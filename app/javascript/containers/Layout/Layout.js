import React, { Component } from "react";
import NavigationBar from "./../../component/NavigationBar/NavigationBar";
import Wrapper from "./../../hoc/Wrapper";

class Layout extends Component {
  render() {
    return (
      <Wrapper>
        <NavigationBar />
      </Wrapper>
    );
  }
}

export default Layout;
