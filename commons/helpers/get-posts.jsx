import { marked } from 'marked';
import YML from 'yaml';
// import fs from 'fs';
// import path from 'path';

// @ts-ignore
const path = require('path');
// @ts-ignore
const fs = require('fs');

const getFileNames = async (dir) => {
  const directoryPath = path.join(dir);
  // @ts-ignore
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      // handling error
      if (err) {
        reject(err);
        // return console.log(`Unable to scan directory: ${err}`);
      }
      resolve(files);
    });
  });
};

export const getPosts = async (dir) => {
  const files = await getFileNames(dir);
  const posts = files.map((file) => {
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const postMetaYml = fileContent.split('---')[1];
    const post = YML.parse(postMetaYml);
    post.name = file.replace('.md', '');
    return post;
  });

  return posts;
};

export const getPost = async (dir, file) => {
  const filePath = path.join(dir, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const postMetaYml = fileContent.split('---')[1];
  const post = YML.parse(postMetaYml);
  // @ts-ignore
  post.content = fileContent.split('---')[2] || '';
  // post.content = marked.parse(fileContent.split('---')[2], {});
  // post.content = markdown.toHTML(fileContent.split('---')[2]);
  post.date = file.substring(0, 10);
  // post.content = fileContent.split('---')[2];

  return post;
};
