import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import React from "react";
import type { UserResponse } from "../../hooks/User/UserResponse";
import Grid from "@mui/material/Grid";

interface ListUsersAccordionProps {
  Users: UserResponse[];
}
export const ListUsersAccordion: React.FC<ListUsersAccordionProps> = ({
  Users,
}) => {
  return (
    <div>
      {Users.map((user, idx) => (
        <Grid>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">{user.email}</Typography>
            </AccordionSummary>
            <AccordionDetails>{user.email}</AccordionDetails>
          </Accordion>
        </Grid>
      ))}
    </div>
  );
};
