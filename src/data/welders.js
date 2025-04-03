const basePath = process.env.NODE_ENV === "production" ? "/welderfind" : "";

const welders = [
  {
    id: 1,
    name: "Jenny Kim",
    image: `${basePath}/images/welder1.png`,
    hourlyRate: "$150/hr",
    city: "New York",
  },
  {
    id: 2,
    name: "Jack Smith",
    image: `${basePath}/images/welder2.png`,
    hourlyRate: "$45/hr",
    city: "Los Angeles",
  },
  {
    id: 3,
    name: "Mike Johnson",
    image: `${basePath}/images/welder3.png`,
    hourlyRate: "$55/hr",
    city: "Chicago",
  },
  {
    id: 4,
    name: "Sarah Lee",
    image: `${basePath}/images/welder4.png`,
    hourlyRate: "$125/hr",
    city: "Houston",
  },
  {
    id: 5,
    name: "Chris Evans",
    image: `${basePath}/images/welder5.png`,
    hourlyRate: "$70/hr",
    city: "Phoenix",
  },
  {
    id: 6,
    name: "Emma Watson",
    image: `${basePath}/images/welder6.png`,
    hourlyRate: "$90/hr",
    city: "Philadelphia",
  },
  {
    id: 7,
    name: "Robert Brown",
    image: `${basePath}/images/welder7.png`,
    hourlyRate: "$60/hr",
    city: "San Antonio",
  },
  {
    id: 8,
    name: "Sophia Davis",
    image: `${basePath}/images/welder8.png`,
    hourlyRate: "$80/hr",
    city: "San Diego",
  },
  {
    id: 9,
    name: "Liam Wilson",
    image: `${basePath}/images/welder9.png`,
    hourlyRate: "$100/hr",
    city: "Dallas",
  },
  {
    id: 10,
    name: "Olivia Martinez",
    image: `${basePath}/images/welder10.png`,
    hourlyRate: "$110/hr",
    city: "San Jose",
  },
  {
    id: 11,
    name: "Noah Anderson",
    image: `${basePath}/images/welder11.png`,
    hourlyRate: "$95/hr",
    city: "Austin",
  },
];

export default welders;