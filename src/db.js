let db = [
  {
    id: 1,
    first_name: "Dacy",
    email: "dwykes0@cbsnews.com",
    gender: "Non-binary",
    ip_address: "130.183.23.67",
  },
  {
    id: 2,
    first_name: "Korey",
    email: "kblest1@jigsy.com",
    gender: "Genderqueer",
    ip_address: "41.60.230.4",
  },
  {
    id: 3,
    first_name: "Prudi",
    email: "ploakes2@epa.gov",
    gender: "Non-binary",
    ip_address: "121.19.75.176",
  },
  {
    id: 4,
    first_name: "Analiese",
    email: "adurban3@wsj.com",
    gender: "Female",
    ip_address: "70.139.6.69",
  },
  {
    id: 5,
    first_name: "Mace",
    email: "mdelascy4@dropbox.com",
    gender: "Agender",
    ip_address: "7.200.154.213",
  },
];
let headers = ["ID", "First_name", "Email", "Gender", "Ip Address"];
let headers_raw = ["id", "first_name", "email", "gender", "ip_address"];
module.exports.db = db;
module.exports.headers = headers;
module.exports.headers_raw = headers_raw;
