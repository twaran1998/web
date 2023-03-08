import * as React from "react";
import "./App.css";

import { Container } from "@material-ui/core";
import DisplayUser from "./Components/User/DisplayUser";
import DisplayEducation from "./Components/Education/DisplayEducation";
import { Grid, Paper, Typography } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import Dummydata from "./Components/DummyData/Dummydata";
import ResponsiveAppBar from "./Components/Header/Navbar";
import EduInstitute from "./Components/EducationInstitute/EduInstitute";
import Footer from "./Components/Footer/footer";
import ProfessionalSkills from "./Components/ProfessionalSkill/ProfessionalSkills";
import CoursesAndTraining from "./Components/CourseAndTraining/CAT";
import Oral from "./Components/Presentation/Oral";
import Posters from "./Components/Presentation/Poster";
import PeerReviews from "./Components/Miscleneous/PeerReview";
import PublicationCard from "./Components/Publications/publication";

function App() {
  return (
    <React.StrictMode>
      <React.Fragment>
        <CssBaseline />
        <ResponsiveAppBar></ResponsiveAppBar>

        <Container
          maxWidth='lg'
          sx={{ bgcolor: "#cfe8fc", height: "50vh", bordweRadius: "100px" }}
        >
          <Typography variant='h1' align='center' gutterBottom></Typography>
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
            style={{
              marginTop: "60px",
              marginBottom: "-10px",
              textDecorationColor: "green",
              textDecorationLine: "underline",
              lineBreak: 2,
            }}
            variant='h4'
            align='center'
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

          <Typography
            style={{
              marginTop: "30px",
              marginBottom: "-20px",
              textDecorationColor: "green",
              textDecorationLine: "underline",
              lineBreak: 2,
              // textDecoration: "underline",
            }}
            variant='h4'
            align='center'
            gutterBottom
          >
            <strong>Presentation</strong>
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Oral></Oral>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Posters></Posters>
            </Grid>
            <Grid item xs={12} sm={12}>
              <PublicationCard></PublicationCard>
            </Grid>
          </Grid>

          <PeerReviews></PeerReviews>
        </Container>
        <Footer></Footer>
      </React.Fragment>
    </React.StrictMode>
  );
}

export default App;
