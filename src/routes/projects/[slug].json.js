import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import marked from "marked";

const getProject = (fileName) => {
  return fs.readFileSync(
    path.resolve("static/data/projects/", `${fileName}.md`),
    "utf-8"
  );
};

export function get(req, res, _) {
  const { slug } = req.params;

  const project = getProject(slug);
  const renderer = new marked.Renderer();

  const { data, content } = grayMatter(project);
  const html = marked(content, { renderer });

  if (html) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify({ html, ...data }));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}