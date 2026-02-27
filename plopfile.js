module.exports = function (plop) {
  plop.setGenerator("component", {
    description:
      "Generar un React Component transversal / compartido (\`src/components\`)",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name (PascalCase):",
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
        path: "src/components/{{pascalCase name}}/index.ts",
        templateFile: ".templates/component/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: ".templates/component/Component.test.tsx.hbs",
      },
    ],
  });

  plop.setGenerator("feature", {
    description:
      "Generar la base de una nueva Feature (Feature-Sliced Design) (\`src/features\`)",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Feature name (kebab-case):",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/features/{{kebabCase name}}/api/index.ts",
        template: "// API requests para la feature {{kebabCase name}}\n",
      },
      {
        type: "add",
        path: "src/features/{{kebabCase name}}/components/index.ts",
        template: "// Exporta componentes de la feature {{kebabCase name}}\n",
      },
      {
        type: "add",
        path: "src/features/{{kebabCase name}}/hooks/index.ts",
        template: "// Custom hooks para la feature {{kebabCase name}}\n",
      },
      {
        type: "add",
        path: "src/features/{{kebabCase name}}/index.ts",
        templateFile: ".templates/feature/index.ts.hbs",
      },
    ],
  });
};
