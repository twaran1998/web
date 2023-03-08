import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#03a9f4",
    color: "white",
    textAlign: "center",
    padding: "10px",
    position: "relative",
    left: 0,
    bottom: 0,
    width: "100%",
    marginTop: "100px", // Add top margin
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Typography variant="body1">© Twaran Sahai 9179760460</Typography>
    </Box>
  );
}

export default Footer;
