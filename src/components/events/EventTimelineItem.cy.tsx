import React from "react";
import { EventTimelineItem } from "./EventTimelineItem";

const event = {
  job_event_id: "5e884a00-5840-4840-9aa7-ed270933941f",
  job_card_id: "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
  job_event_type: "started",
  job_event_user: "Thad Cormier",
  job_event_metadata: {
    device: {
      station: {
        zone_name: "Bench - Panels",
        factory_name: "Urban Splash House Factory",
        partner_name: "Urban Splash",
        station_name: "Bay 1",
      },
      device_id:
        "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3",
    },
    job_headcount: 2,
    checked_pre_flight_checks: [
      {
        images: [
          {
            path: "operations/c70c8592-3c5e-4203-af7c-cb74300a4dc1/pre_flight_checks/1898c571-56e2-4d04-97ca-fc753b2bdc86.png",
            title: "PFC1.png",
          },
        ],
        content: "For this task, you'll need these tools...",
        category: "Tools / Jigs",
      },
      {
        images: [
          {
            path: "operations/c70c8592-3c5e-4203-af7c-cb74300a4dc1/pre_flight_checks/30d5eb54-9219-404a-8108-8b2d2b6ce3d2.png",
            title: "PFC2.png",
          },
        ],
        content: "You'll also need...",
        category: "People, PPE & Training",
      },
    ],
  },
  job_event_occurrence: "2022-11-23 17:30:59.179995+00",
};

beforeEach(() => {
  cy.mount(<EventTimelineItem event={event} />);
});

describe("<EventTimelineItem />", () => {
  it("should render started timeline node", () => {
    // see: https://on.cypress.io/mounting-react
    cy.get('[data-testid="PlayCircleFilledWhiteIcon"]').should("exist");
    cy.get("p").should("contain.text", "Started");
    cy.get("p").should("contain.text", "Thad Cormier");
    cy.get("div").should("contain.text", "18:30:59");
  });

  it("should show more info on arrow click", () => {
    // see: https://on.cypress.io/mounting-react
    cy.get('[data-testid="KeyboardArrowDownIcon"]').should("exist");
    cy.get('[data-testid="KeyboardArrowDownIcon"]').click();
    cy.get("span").should(
      "contain.text",
      "ID: 5e884a00-5840-4840-9aa7-ed270933941f"
    );
    cy.get("span").should(
      "contain.text",
      "Job card id: ce6bff8d-eb09-4208-9405-c2594f74ccb0"
    );
    cy.get("span").should("contain.text", "Metadata");
  });

  it("should hide more info on arrow click", () => {
    // see: https://on.cypress.io/mounting-react
    cy.get('[data-testid="KeyboardArrowDownIcon"]').click();
    cy.get("span").should(
      "contain.text",
      "ID: 5e884a00-5840-4840-9aa7-ed270933941f"
    );
    cy.get('[data-testid="KeyboardArrowUpIcon"]').should("exist");
    cy.get('[data-testid="KeyboardArrowUpIcon"]').click();
    cy.get("span").should(
      "contain.not.text",
      "ID: 5e884a00-5840-4840-9aa7-ed270933941f"
    );
  });
});
