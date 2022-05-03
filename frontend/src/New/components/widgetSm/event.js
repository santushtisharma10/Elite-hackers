import moment from "moment";

const startDatetime = new Date("2022-05-04T09:00");
const endDatetime = new Date("2022-05-04T11:00");
const duration = startDatetime.getHours() - endDatetime.getHours();
export const event = {
  title: "Schedule an Event",
  description: "Example Event description.",
  location: "Delhi-India",
  duration,
  endDatetime: moment(endDatetime).format("YYYYMMDDTHHmmssZ"),
  startDatetime: moment(startDatetime).format("YYYYMMDDTHHmmssZ")
};
