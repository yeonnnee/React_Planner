import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { faCheckSquare, faSquare } from "@fortawesome/free-solid-svg-icons";
import { SLink } from "../Header/Header.styles";
import { navItems } from "./navItems";
import { Container, List, Icon, Menu } from "./styles";

const Nav = withRouter((navProps) => {
  const { state, location } = navProps;

  return (
    <>
      {state.isAuthenticated ? (
        <>
          <Container>
            <List>
              {navItems.map((navItme, index) => {
                return (
                  <SLink to={navItme.path} key={index}>
                    {location.pathname.includes(navItme.path) ? (
                      <Icon icon={faCheckSquare} />
                    ) : (
                      <Icon icon={faSquare} />
                    )}
                    <Menu current={location.pathname === navItme.path}>
                      {navItme.name}
                    </Menu>
                  </SLink>
                );
              })}
            </List>
          </Container>
        </>
      ) : null}
    </>
  );
});

function mapStateToProps(state) {
  return { state: state.authReducer };
}

export default connect(mapStateToProps)(Nav);
