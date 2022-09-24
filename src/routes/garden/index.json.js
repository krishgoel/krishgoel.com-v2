import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllPlants = () => {
  try {
    return fs.readdirSync("static/data/plants/").map((fileName) => {
      const plant = fs.readFileSync(
        path.resolve("static/data/plants", fileName),
        "utf-8"
      );
      grayMatter(plant).data.slug = fileName.replace('.md',''); // slug = filename
      return grayMatter(plant).data;
    });
  } catch (e) {
    return [];
  }
};

export function get(_, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  let plants = getAllPlants();
  
  // // For sorting by date
  // // Splits the date into MM and YYYY and compares the year value with preference
  // plants = plants.sort(function (a, b) {
  //   return parseInt(a.datestamp.substring(3,7)) - parseInt(b.datestamp.substring(3,7)) || parseInt(a.datestamp.substring(0,2)) - parseInt(b.datestamp.substring(0,2))
  // });
  // // Reverse to arrange newest - oldest
  // plants = plants.reverse()

  plants = JSON.stringify(plants);
  res.end(plants);
}