import React, { useState, useEffect } from "react";
import { Container, Typography, CardContent } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import { createSvgIcon } from "@mui/material/utils";
import Link from "@mui/material/Link";
//     Icon Home
const ResearchIcon = createSvgIcon(
  <path d='M15.5,9.8C16.2,8.7,17.5,8,19,8c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.5,0-2.8-0.7-3.5-1.8H14c-0.6,0-1-0.4-1-1V6h-1v3.8 c0,0.3,0.2,0.5,0.5,0.5h2C15.3,10.3,15.5,10.1,15.5,9.8z M20,14c1.1,0,2-0.9,2-2s-0.9-2-2-2c-1.1,0-2,0.9-2,2S18.9,14,20,14z M12,14 c0-0.6,0.4-1,1-1s1,0.4,1,1s-0.4,1-1,1S12,14.6,12,14z M3,6v11c0,0.6,0.4,1,1,1h6v-1H4V7h6v-1H4C3.4,6,3,6.4,3,7z M9,9V7h1v2 H9z M12,7v2h-1V7H12z M15,7v2h-1V7H15z M18,7v2h-1V7H18z' />,
  "ResearchIcon"
);
//     Gmail icon
const GmailIcon = createSvgIcon(
  <path
    d='M20.5,3.5h-17C2.673,3.5,2,4.173,2,5v14c0,0.827,0.673,1.5,1.5,1.5h17c0.827,0,1.5-0.673,1.5-1.5v-14C22,4.173,21.327,3.5,20.5,3.5z
       M12,11.347L3.201,18H20.8L12,11.347z M3.5,16.926V6.687l8.454,6.397L3.5,16.926z M20.5,16.926L12.046,13.084l8.454-6.397v10.239z'
    fill='#D44638'
  />,
  "Gmail"
);
// LinkedIn icon
const LinkedInIcon = createSvgIcon(
  <>
    <path d='M19.5 0h-15c-1.379 0-2.5 1.121-2.5 2.5v15c0 1.379 1.121 2.5 2.5 2.5h15c1.379 0 2.5-1.121 2.5-2.5v-15c0-1.379-1.121-2.5-2.5-2.5zM7.5 17h-3v-9h3v9zM6 6.738c-.891 0-1.62-.744-1.62-1.659 0-.942.729-1.698 1.62-1.698.891 0 1.62.756 1.62 1.698 0 .915-.729 1.659-1.62 1.659zM18 17h-3v-4.428c0-1.051-.021-2.405-1.47-2.405-1.47 0-1.695 1.148-1.695 2.337v4.496h-3v-9h2.875v1.241h.04c.399-.753 1.371-1.548 2.837-1.548 3.035 0 3.59 1.998 3.59 4.59v5.717z' />
    <path d='M0 0h24v24h-24z' fill='none' />
  </>,
  "LinkedIn"
);

function DisplayUser() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://twaran123.github.io/AS_P/info.json"
      );
      const data = await response.json();
      setUserData(data.user);
    };
    fetchData();
  }, []);

  return (
    <Container minWidth='sm'>
      <Stack direction='column' align='center' spacing={1}>
        {userData.map((user) => (
          <CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={user.photo}
                alt={user.name}
                style={{ maxWidth: "80%", borderRadius: "200px" }}
              />
            </div>
            {/* Designation */}
            <Typography variant='h6' align='center' gutterBottom>
              {user.designation}
            </Typography>
            {/* Current Job */}
            <Typography variant='h6' align='center' gutterBottom>
              {user.latestJob}
            </Typography>

            {/* Home Address */}
            <Typography variant='h6' align='center' gutterBottom>
              <Link href={user.linkdinId} target='_blank' rel='noopener'>
                {user.address}
              </Link>
            </Typography>

            <Typography variant='h6' gutterBottom>
              <Stack direction='row' justifyContent='center' spacing={3}>
                <Link href={user.linkdinId} target='_blank' rel='noopener'>
                  <LinkedInIcon sx={{ fontSize: 60 }} />
                </Link>
                <Link href={user.gmailId} target='_blank' rel='noopener'>
                  <GmailIcon sx={{ fontSize: 55 }} />
                </Link>
                <Link href={user.researchGate} target='_blank' rel='noopener'>
                  <ResearchIcon sx={{ fontSize: 66 }} />
                </Link>
              </Stack>
            </Typography>
          </CardContent>
        ))}
      </Stack>
    </Container>
  );
}

export default DisplayUser;
