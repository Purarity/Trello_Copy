export const list = [
  {
    id: "1",
    title: "Consumer Page (frontend)",
    tags: ["MVP"],
    tasks: [
      {
        id: "1b",
        title: "View all products",
        description: "",
        checkList: [
          {
            id: "1b1",
            name: "Features",
            list: [
              { id: "1b1a", name: "Filtering" },
              { id: "1b1b", name: "Sorting" },
              { id: "1b1c", name: "Pagination" },
            ],
          },
        ],
      },
      {
        id: "1c",
        title: "View all products",
        description: "",
        checkList: [
          {
            id: "1b1",
            name: "Features",
            list: [
              { id: "1b1a", name: "Filtering" },
              { id: "1b1b", name: "Sorting" },
              { id: "1b1c", name: "Pagination" },
            ],
          },
        ],
      },
      {
        id: "1d",
        title: "Product Page",
        description:
          "This is the page you reach when you click on a certain product.",
        checkList: [
          {
            id: "1a1",
            name: "Features",
            list: [
              { id: "1a1a", name: "Select quantity", checked: true },
              {
                id: "1a1b",
                name:
                  "Select assemble service (additional cost) or pick-up only",
                checked: false,
              },
              {
                id: "1a1c",
                name: "Add to reservation 'cart'",
                checked: false,
              },
            ],
          },
          {
            id: "1a2",
            name: "Information",
            list: [
              { id: "1a2a", name: "Image", checked: false },
              {
                id: "1a2b",
                name: "Name",
                checked: true,
              },
              {
                id: "1a2c",
                name: "Description",
                checked: false,
              },
              {
                id: "1a2d",
                name: "Price",
                checked: false,
              },
              {
                id: "1a2e",
                name: "Stock status (red 0, yellow badge 1-10 or green 10+)",
                checked: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Back Office Page (backend)",
    tags: ["MVP"],
    tasks: [
      {
        id: "2a",
        title: "CRUD Reservations",
        description:
          "Reservations data structure(id,customerId,productId,status",
      },
      {
        id: "2b",
        title: "CRUD Customers",
        description: "",
      },
    ],
  },
];