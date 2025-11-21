module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Generate a React component",

    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
    ],

    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: ".templates/component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.scss",
        templateFile: ".templates/component/Component.scss.hbs",
      },
    ],
  });
};
