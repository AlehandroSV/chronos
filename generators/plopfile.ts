import type { NodePlopAPI } from 'plop';

export default async function (plop: NodePlopAPI) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{name}}/index.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{name}}/styles.module.css',
        templateFile: 'templates/styles.hbs',
      },
    ],
  });
}
