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
  const projects = getAllProjects();
  res.end(JSON.stringify(projects));
}