import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function ContactAccordion() {
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const accordions = [
    {
      id: 1,
      title: "How we order your search results ?",
      body: "Our site uses complex, dynamic algorithms to ensure your search results are ordered efficiently. On the search results page, you can select how to sort the results we display, and also use filter options to see only those search results that meet your chosen preferences. If you don’t decide to use these features, then you’ll see our chosen default sort order which orders results as follows",
    },
    {
      id: 2,
      title: "Refunds on hotel and vacation rental bookings ?",
      body: `Due to COVID-19, most refunds for flights are issued within 12 weeks. Some refunds could take a bit longer, depending on the airline.
      Refunds for hotel, car, or activity are processed within our normal timeframe, 24 hours from the cancellation request. Keep in mind, your bank or payment service determines when the funds become available in your account.
      In other circumstances not impacted by COVID-19, here’s what you should know about refund timelines:`,
    },
    {
      id: 3,
      title: "Hospitality taxes ?",
      body: "Depending on the city you're visiting, you may have to pay a hospitality or tourism tax. This is usually a small fee that goes towards maintaining and improving a destination — think more parks, cleaner streets, and better public transportation — and helps support the tourism industry. You can review tax details at checkout. Any taxes we’re aware of will be included in the total price.",
    },
    {
      id: 4,
      title: "Request a call recording ?",
      body: "To request a recording of a call you had with one of our customer service agents, contact us and we'll process your request within the statutorily prescribed timeline. Please know that we only provide call recordings to the person recorded.",
    },
    {
      id: 5,
      title: "Why ar conversations monitored ?",
      body: "We take privacy and security very seriously at Expedia Group and want to make sure you feel confident arranging bookings on our platform. One way we protect your privacy and security is by monitoring conversations that take place on our platform between you and our travel suppliers.",
    },
  ];
  return (
    <div>
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.id}
          expanded={expanded === accordion.id}
          onChange={handleChange(accordion.id)}
        >
          <AccordionSummary
            id={`${accordion.id}`}
            aria-controls={`${accordion.id}`}
          >
            <Typography>{accordion.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{accordion.body}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
