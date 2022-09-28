import { buildSelectOptions } from "utils";
import * as yup from "yup";

export const CONTACTS_DATA = [
  {
    id: 1,
    name: "Ronald Richards",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 5, 2021",
    profile: "",
  },
  {
    id: 2,
    name: "Jacob Jones",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 5, 2021",
    profile: "https://i.pravatar.cc/300",
  },
  {
    id: 3,
    name: "Ronald Richards",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 5, 2021",
    profile: "",
  },
  {
    id: 4,
    name: "Jacob Jones",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 5, 2021",
    profile: "https://i.pravatar.cc/300",
  },
  {
    id: 5,
    name: "Ronald Richards",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 5, 2021",
    profile: "",
  },
  {
    id: 6,
    name: "Ronald Richards",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 5, 2021",
    profile: "",
  },
  {
    id: 7,
    name: "Jacob Jones",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 5, 2021",
    profile: "https://i.pravatar.cc/300",
  },
  {
    id: 8,
    name: "Ronald Richards",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 5, 2021",
    profile: "",
  },
  {
    id: 9,
    name: "Jacob Jones",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 5, 2021",
    profile: "https://i.pravatar.cc/300",
  },
  {
    id: 10,
    name: "Ronald Richards",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 5, 2021",
    profile: "",
  },
];

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const ROLES_DATA = buildSelectOptions(["Admin", "Owner"]);

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),
  role: yup
    .object()
    .shape({
      label: yup.string().oneOf(ROLES_DATA.map(role => role.label)),
      value: yup.string().oneOf(ROLES_DATA.map(role => role.value)),
    })
    .nullable()
    .required("Role is required"),
});
