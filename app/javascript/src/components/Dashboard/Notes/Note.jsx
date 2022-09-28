import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Avatar, Dropdown, Tag, Tooltip, Typography } from "neetoui";

import { dateTimeFormat, formatDateRelativeToNow } from "./utils";

const { Menu, MenuItem } = Dropdown;

const Note = ({ note, setShowDeleteAlert, setSelectedNoteId }) => (
  <div className="m-3 w-full  border border-gray-200 p-4 shadow-sm  dark:border-gray-500 dark:bg-gray-600">
    <div className="flex justify-between">
      <Typography style="h4" weight="bold">
        {note.title}
      </Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <Menu>
          <MenuItem.Button>Edit</MenuItem.Button>
          <MenuItem.Button
            style="danger"
            onClick={() => {
              setShowDeleteAlert(true);
              setSelectedNoteId(note);
            }}
          >
            Delete
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
    <Typography style="body2" weight="light">
      {note.description}
    </Typography>
    <hr className="mt-3" />
    <div className="mt-3 flex justify-between">
      <Tag
        className="box-border flex flex-row items-center justify-center gap-2 rounded border-solid border-[#D8DCDE] bg-[#F8F9F9] px-2 py-0.5"
        label="Getting Started"
        style="secondary"
        type="outline"
      />
      <div className="flex items-center space-x-2">
        <Clock size={13} />
        <Tooltip
          content={dateTimeFormat(note.createdAt)}
          position="bottom-start"
        >
          <Typography style="body3" weight="light">
            {" "}
            {formatDateRelativeToNow(note.createdAt)}
          </Typography>
        </Tooltip>
        <Avatar
          size="small"
          user={{
            imageUrl: note.profilePicture,
          }}
        />
      </div>
    </div>
  </div>
);

export default Note;
