import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Avatar, Dropdown, Table as NeetoUITable, Typography } from "neetoui";

const { Menu, MenuItem } = Dropdown;

const renderAvatarWithNameAndRole = (name, { role, profile }) => (
  <div className="flex space-x-2">
    <Avatar size="large" user={{ name, imageUrl: profile }} />
    <div className="flex flex-col">
      <Typography style="h4">{name}</Typography>
      <Typography style="body3">{role}</Typography>
    </div>
  </div>
);

const renderActionDropdown = setShowDeleteAlert => (
  <Dropdown buttonStyle="text" icon={MenuHorizontal}>
    <Menu>
      <MenuItem.Button>Edit</MenuItem.Button>
      <MenuItem.Button
        style="danger"
        onClick={() => {
          setShowDeleteAlert(true);
        }}
      >
        Delete
      </MenuItem.Button>
    </Menu>
  </Dropdown>
);

const Table = ({ contacts, setShowDeleteAlert }) => (
  <div className="w-full">
    <NeetoUITable
      allowRowClick
      rowSelection
      defaultPageSize={8}
      rowData={contacts}
      columnData={[
        {
          title: "Name & Role",
          dataIndex: "name",
          key: "name",
          width: "40%",
          render: renderAvatarWithNameAndRole,
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
          width: "30%",
        },
        {
          title: "Created at",
          dataIndex: "createdAt",
          key: "createdAt",
          width: "20%",
        },
        {
          title: "",
          dataIndex: "id",
          key: "id",
          width: "10%",
          render: () => renderActionDropdown(setShowDeleteAlert),
        },
      ]}
    />
  </div>
);

export default Table;
