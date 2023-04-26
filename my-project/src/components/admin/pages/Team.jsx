import { Avatar } from "@mui/material";
import React from "react";

const Team = () => {
  const team = [
    {
      id: "1",
      name: "Jane Cooper",
      admin: true,
      post: "Regional Paradigm Technician",
    },
    {
      id: "2",
      name: "Cody Fisher",
      admin: false,
      post: "Product Directives Officer",
    },
    {
      id: "3",
      name: "Esther Howard",
      admin: true,
      post: "Forward Response Developer",
    },
    {
      id: "4",
      name: "Jenny Wilson",
      admin: true,
      post: "Central Security Manager",
    },
    {
      id: "5",
      name: "Kristin Watson",
      admin: true,
      post: "Lead Implementation Liaison",
    },
  ];
  return (
    <div className="">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto gap-4">
        {team?.map((e, index) => {
          return (
            <div>
              <div
                key={e.id}
                className="shadow-transparent border-2 rounded-md"
              >
                <div className="flex justify-between pt-4 pb-9">
                  <div className="">
                    {e.name}
                    {e.admin == true ? (
                      <span className="bg-green-100 text-green-800  border-2 border-green-200 rounded-full text-xs p-1 ml-2">
                        Admin
                      </span>
                    ) : (
                      <span className="bg-green-100 text-green-800  border-2 border-green-200 rounded-full text-xs p-1 ml-2">
                        Not Admin
                      </span>
                    )}
                  </div>
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                    sx={{ width: 24, height: 24 }}
                  />
                </div>

                <p className="font-light text-xs">{e.post}</p>
              </div>
            </div>
          );
        })}

        {/* <div className="bg-lime-300">item</div>
        <div className="bg-lime-300">item</div>
        <div className="bg-lime-300">item</div>
        <div className="bg-lime-300">item</div> */}
      </div>
    </div>
  );
};

export default Team;
