import React from "react";
import { Typography, Link, Grid } from "@material-ui/core";
import { LinkedIn, YouTube, Twitter, Facebook } from "@mui/icons-material";


const footerStyle = {
  backgroundColor: "rgb(124 58 237)",
  padding: "24px",
  marginTop: "50px",
  marginBottom: "0px"
};

const iconStyle = {
  marginRight: "16px",
  color: "#ffffff",
};

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
};

const hoverStyle = {
  textDecoration: "underline",
};

const Footer = () => {
  return (
    <div className="footer">
    <footer style={footerStyle}>
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="body1" style={linkStyle}>
            Connect with us:
          </Typography>
        </Grid>
        <Grid item>
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener"
            style={linkStyle}
          >
            <LinkedIn style={iconStyle} />
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener"
            style={linkStyle}
          >
            <YouTube style={iconStyle} />
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener"
            style={linkStyle}
          >
            <Twitter style={iconStyle} />
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener"
            style={linkStyle}
          >
            <Facebook style={iconStyle} />
          </Link>
        </Grid>
      </Grid>

      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item>
          <Link
            href="/HelpCenter"
            style={linkStyle}
            underline="none"
            sx={{ "&:hover": hoverStyle }}
          >
            Help Center
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="/center"
            style={linkStyle}
            underline="none"
            sx={{ "&:hover": hoverStyle }}
          >
            Center
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="/customer-service"
            style={linkStyle}
            underline="none"
            sx={{ "&:hover": hoverStyle }}
          >
            Customer Service
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="/contact"
            style={linkStyle}
            underline="none"
            sx={{ "&:hover": hoverStyle }}
          >
            Contact: +1 123-456-7890
          </Link>
        </Grid>
      </Grid>

      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item>
          <Link
            href="/about"
            style={linkStyle}
            underline="none"
            sx={{ "&:hover": hoverStyle }}
          >
            About Us
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="/privacy-policy"
            style={linkStyle}
            underline="none"
            sx={{ "&:hover": hoverStyle }}
          >
            Privacy Policy
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="/terms-of-service"
            style={linkStyle}
            underline="none"
            sx={{ "&:hover": hoverStyle }}
          >
            Terms of Service
          </Link>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        align="center"
        color="textSecondary"
        style={{ marginTop: "16px", color: "#ffffff" }}
      >
        &copy; {new Date().getFullYear()} FashionNova All rights reserved.
      </Typography>
    </footer>
    </div>
  );
};

export default Footer;
