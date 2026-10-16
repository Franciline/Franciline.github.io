// Generate homepage HTML from the same React components used in the browser.
// No duplicated portfolio text and no extra build dependencies.
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const React = require('react');
const { renderToString, renderToStaticMarkup } = require('react-dom/server');

const sourceRoot = path.resolve(__dirname, '../src');
const loadJavaScript = require.extensions['.js'];
for (const extension of ['.ts', '.tsx', '.js']) {
  require.extensions[extension] = (module, filename) => {
    if (!filename.startsWith(sourceRoot + path.sep)) return loadJavaScript(module, filename);
    const { outputText } = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.React,
        esModuleInterop: true,
        target: ts.ScriptTarget.ES2019,
      },
      fileName: filename,
    });
    module._compile(outputText, filename);
  };
}
require.extensions['.scss'] = () => {};
for (const extension of ['.png', '.jpg', '.svg', '.ico']) {
  require.extensions[extension] = (module, filename) => { module.exports = filename; };
}

const h = React.createElement;
const { academicProjects } = require('../src/components/AcademicProject.tsx');
const projectMarkup = renderToStaticMarkup(h('main', null,
  h('header', { className: 'project-hero' },
    h('h1', null, 'Projects'),
    h('p', { className: 'lead' }, 'Full project details'),
    h('p', null, 'The same information as the portfolio project cards, available as plain HTML.')
  ),
  ...academicProjects.map((project, index) => h('section', { key: project.title, id: `project-${index + 1}` },
    h('p', { className: 'eyebrow' }, project.date || ''),
    h('h2', null, project.title),
    project.status ? h('p', { className: 'eyebrow' }, project.status) : null,
    h('h3', null, 'Overview'), h('p', null, project.description),
    h('h3', null, 'Keywords'), h('p', null, project.skills.join(' · ')),
    project.collaborators?.length ? h('div', null,
      h('h3', null, 'Collaborators'),
      h('ul', null, project.collaborators.map(person => h('li', { key: person.name }, h('a', { href: person.linkedinUrl }, person.name))))
    ) : null,
    project.keyResults?.length ? h('div', null,
      h('h3', null, project.keyResultsTitle || 'Key results'),
      h('ul', null, project.keyResults.map(result => h('li', { key: result }, result)))
    ) : null,
    h('div', { className: 'resources' },
      project.reportUrl ? h('a', { href: project.reportUrl }, 'View report') : h('span', null, project.resourceNote || 'Report not available'),
      project.repositoryUrl ? h('a', { href: project.repositoryUrl }, 'View code') : null
    )
  )),
  h('footer', null, h('a', { href: '/#academic-project' }, '← Back to project cards'))
));
const projectDirectory = path.resolve(__dirname, '../public/projects');
fs.mkdirSync(projectDirectory, { recursive: true });
fs.writeFileSync(path.join(projectDirectory, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Projects | Amélie Chu</title><meta name="description" content="Full project descriptions, approaches, results, collaborators, and resources from Amélie Chu’s portfolio."><link rel="stylesheet" href="/projects/project-page.css"></head><body><nav class="site-nav" aria-label="Main navigation"><a href="/#academic-project">← Project cards</a><a href="/">Amélie Chu</a></nav>${projectMarkup}</body></html>`);
console.log('Generated plain HTML details for all projects.');
if (process.argv.includes('--projects-only')) process.exit(0);

const App = require('../src/App.tsx').default;
const markup = renderToString(React.createElement(App));
const outputPath = path.resolve(__dirname, '../build/index.html');
const template = fs.readFileSync(outputPath, 'utf8');
const root = '<div id="root"></div>';
if (!template.includes(root)) throw new Error('Expected empty root in production HTML');
fs.writeFileSync(outputPath, template.replace(root, `<div id="root" data-prerendered="true">${markup}</div>`));
console.log('Prerendered homepage: introduction, skills, projects, internships, education, and contact.');
