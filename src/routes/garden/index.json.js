// import fs from "fs";
// import path from "path";
// import grayMatter from "gray-matter";

// const getAllGarden = () => {
//   try {
//     return fs.readdirSync("static/data/garden/").map((fileName) => {
//       const garden = fs.readFileSync(
//         path.resolve("static/data/garden", fileName),
//         "utf-8"
//       );
//       return grayMatter(garden).data;
//     });
//   } catch (e) {
//     return [];
//   }
// };

// export function get(_, res) {
//   res.writeHead(200, {
//     "Content-Type": "application/json",
//   });
//   const garden = getAllGarden();
//   res.end(JSON.stringify(garden));
// }