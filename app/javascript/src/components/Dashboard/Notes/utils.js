import dayjs from "lib/dayjs";

export const dateTimeFormat = date => dayjs(date).format("dddd, hh:mm A");

export const relativeCreationTime = date => dayjs(date).fromNow();
