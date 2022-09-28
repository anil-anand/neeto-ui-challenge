import dayjs from "dayjs";

export const dateTimeFormat = date => dayjs(date).format("dddd, hh:mm A");

export const formatDateRelativeToNow = date => dayjs(date).fromNow();
