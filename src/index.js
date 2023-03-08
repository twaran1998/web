import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import { Container } from "@material-ui/core";
// import DisplayUser from "./Components/User/DisplayUser";
// import DisplayEducation from "./Components/Education/DisplayEducation";
// import { Grid, Paper, Typography } from "@material-ui/core";
// import CssBaseline from "@mui/material/CssBaseline";
// import Dummydata from "./Components/DummyData/Dummydata";
// import ResponsiveAppBar from "./Components/Header/Navbar";
// import EduInstitute from "./Components/EducationInstitute/EduInstitute";
// import Footer from "./Components/Footer/footer";
// import ProfessionalSkills from "./Components/ProfessionalSkill/ProfessionalSkills";
// import CoursesAndTraining from "./Components/CourseAndTraining/CAT";
// import Oral from "./Components/Presentation/Oral";
// import Posters from "./Components/Presentation/Poster";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <React.Fragment>
      <CssBaseline />
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container
        maxWidth="lg"
        sx={{ bgcolor: "#cfe8fc", height: "50vh", bordweRadius: "100px" }}
      >
        <Typography variant="h1" align="center" gutterBottom></Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Paper>
              <Typography>
                {" "}
                <DisplayUser></DisplayUser>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>
              <Typography>
                {" "}
                <Dummydata></Dummydata>
                <DisplayEducation></DisplayEducation>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <EduInstitute></EduInstitute>
        <Typography
          style={{ marginTop: "80px" }}
          variant="h4"
          align="center"
          gutterBottom
        >
          <strong>Professional Skills</strong>
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ProfessionalSkills></ProfessionalSkills>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CoursesAndTraining></CoursesAndTraining>
          </Grid>
        </Grid>
        <Oral></Oral>
        <Posters></Posters>
      </Container>
      <Footer></Footer>
    </React.Fragment> */}

    <App></App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
