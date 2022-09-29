import { buildSelectOptions } from "utils";
import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const NOTES_CARD_DATA = [
  {
    id: 1,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    tag: "Getting Started",
    status: "Created",
    createdAt: "Wednesday, September 21, 2022 4:00 PM",
    profilePicture: "https://i.pravatar.cc/300",
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    tag: "Getting Started",
    status: "Created",
    createdAt: "Wednesday, September 21, 2022 5:00 PM",
    profilePicture: "https://i.pravatar.cc/300",
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    tag: "Getting Started",
    status: "Created",
    createdAt: "Wednesday, September 21, 2022 6:00 PM",
    profilePicture: "https://i.pravatar.cc/300",
  },
];

export const CONTACTS_DATA = buildSelectOptions([
  "Oliver Smith",
  "Eve Smith",
  "Sam Smith",
]);

export const TAGS_DATA = buildSelectOptions([
  "Sales",
  "Finance",
  "User Experience",
]);

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object()
    .shape({
      label: yup.string().oneOf(CONTACTS_DATA.map(contact => contact.label)),
      value: yup.string().oneOf(CONTACTS_DATA.map(contact => contact.value)),
    })
    .nullable()
    .required("Assigned contact is required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().oneOf(TAGS_DATA.map(tag => tag.label)),
        value: yup.string().oneOf(TAGS_DATA.map(tag => tag.value)),
      })
    )
    .min(1, "Atleast one tag is required")
    .required("Tag is required"),
});
