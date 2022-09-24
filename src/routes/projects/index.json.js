import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllProjects = () => {
  try {
    return fs.readdirSync("static/data/projects/").map((fileName) => {
      const project = fs.readFileSync(
        path.resolve("static/data/projects", fileName),
        "utf-8"
      );
      grayMatter(project).data.slug = fileName.replace('.md',''); // slug = filename
      return grayMatter(project).data;
    });
  } catch (e) {
    return [];
  }
};

export function get(_, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  let projects = getAllProjects();
  
  // For sorting by date
  // Splits the date into MM and YYYY and compares the year value with preference
  projects = projects.sort(function (a, b) {
    return parseInt(a.datestamp.substring(3,7)) - parseInt(b.datestamp.substring(3,7)) || parseInt(a.datestamp.substring(0,2)) - parseInt(b.datestamp.substring(0,2))
  });
  // Reverse to arrange newest - oldest
  projects = projects.reverse()

  projects = JSON.stringify(projects);
  res.end(projects);
}