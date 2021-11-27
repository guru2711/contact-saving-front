import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        This is MERN stack Project called <b>Contact-saving</b> Web application
        using
      </p>
      <ul>
        <li>Express Backend API</li>
        <li>jwt authentication(JSON Web Token)</li>
        <li>MongoDB / Mongoose</li>
        <li>Password Encryption</li>
        <li>React Hooks</li>
        <li>Context API</li>
        <li>Route Protection</li>
      </ul>
      <div>
        <AppBar
          position="relative"
          color="primary"
          style={{ background: "#cccccc", bottom: -300 }}
        >
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" style={{ color: "brown" }}>
                © 2021 Contact-Savings
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </div>
  );
};

export default About;
