import { groupEventsByJob } from "./helpers";
import { JobEvent } from "../../data/types";

const events: JobEvent[] = [
  {
    job_event_id: "d270c3b6-96c3-43d1-ac85-7c512de0be34",
    job_card_id: "ce6bff8d-eb09-4208-9405-c2594f74cc9021",
    job_event_type: "canceled",
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
    },
    job_event_occurrence: "2022-11-23 17:31:15.617801+00",
  },
  {
    job_event_id: "87874db1-f5be-4a49-be2f-409c5c3ac4d6",
    job_card_id: "ce6bff8d-eb09-4208-9405-c2594f74cc9021",
    job_event_type: "canceled",
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
    },
    job_event_occurrence: "2022-11-23 17:33:53.638472+00",
  },
  {
    job_event_id: "e6c2c29d-156d-49ca-9c55-59c6ff464892",
    job_card_id: "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
    job_event_type: "canceled",
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
    },
    job_event_occurrence: "2022-11-23 17:40:46.800652+00",
  },
  {
    job_event_id: "5e884a00-5840-4840-9aa7-ed270933941f",
    job_card_id: "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
    job_event_type: "canceled",
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
    },
    job_event_occurrence: "2022-11-23 17:30:59.179995+00",
  },
];

describe("test job helpers", () => {
  it("should group events by date", () => {
    const grouped = groupEventsByJob(events);
    const keys = Object.keys(grouped);
    expect(keys).toContain("ce6bff8d-eb09-4208-9405-c2594f74ccb0");
    expect(keys).toContain("ce6bff8d-eb09-4208-9405-c2594f74cc9021");
    expect(keys).toHaveLength(2);
    expect(grouped[keys[0]]).toHaveLength(2);
    expect(grouped[keys[1]]).toHaveLength(2);
  });
});
