var Handlebars = require("handlebars/runtime");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['config.js.template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    'extends': '"
    + alias4(((helper = (helper = helpers.preset || (depth0 != null ? depth0.preset : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"preset","hash":{},"data":data}) : helper)))
    + "',\n    /*\n       the '"
    + alias4(((helper = (helper = helpers.preset || (depth0 != null ? depth0.preset : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"preset","hash":{},"data":data}) : helper)))
    + "' preset\n       contains these rules:\n       no-circular            - flags all circular dependencies\n       no-orphans             - flags orphan modules (except typescript .d.ts files)\n       no-deprecated-core     - flags dependencies on deprecated node 'core' modules\n       no-deprecated-npm      - flags dependencies on deprecated npm modules\n       no-non-package-json    - flags (npm) dependencies that don't occur in package.json\n       not-to-unresolvable    - flags dependencies that can't be resolved\n       no-duplicate-dep-types - flags dependencies that occur more than once in package.json\n\n       If you need to, you can override these rules. E.g. to ignore the\n       no-duplicate-dep-types rule, you can set its severity to \"ignore\" by\n       adding this to the 'forbidden' section:\n       {\n            name: 'no-duplicate-dep-types',\n            severity: 'ignore'\n       }\n\n       Also, by default, the preset does not follow any external modules (things in\n       node_modules or in yarn's plug'n'play magic). If you want to have that\n       differently, just override it the options.doNotFollow key.\n     */\n    forbidden: [\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    forbidden: [\n        /* rules from the 'recommended' preset: */\n        {\n            name: 'no-circular',\n            severity: 'warn',\n            comment: 'Warn in case there\\'s circular dependencies',\n            from: {},\n            to: {\n                circular: true\n            }\n        },\n        {\n            name: 'no-orphans',\n            severity: 'info',\n            comment: 'Inform in case there\\'s orphans hiding in the code base',\n            from: {\n                orphan: true,\n                pathNot: '\\\\.d\\\\.ts$'\n            },\n            to: {}\n        },\n        {\n            name: 'no-deprecated-core',\n            comment: 'Warn about dependencies on deprecated core modules.',\n            severity: 'warn',\n            from: {},\n            to: {\n                dependencyTypes: [\n                  'core'\n                ],\n                path: '^(punycode|domain|constants|sys|_linklist|_stream_wrap)$'\n            }\n        },\n        {\n            name: 'no-deprecated-npm',\n            comment: 'These npm modules are deprecated - find an alternative.',\n            severity: 'warn',\n            from: {},\n            to: {\n                dependencyTypes: [\n                  'deprecated'\n                ]\n            }\n        },\n        {\n            name: 'no-non-package-json',\n            severity: 'error',\n            comment: 'Don\\'t allow dependencies to packages not in package.json',\n            from: {},\n            to: {\n                dependencyTypes: [\n                  'npm-no-pkg',\n                  'npm-unknown'\n                ]\n            }\n        },\n        {\n            name: 'not-to-unresolvable',\n            comment: 'Don\\'t allow dependencies on modules dependency-cruiser can\\'t resolve to files on disk (which probably means they don\\'t exist)',\n            severity: 'error',\n            from: {},\n            to: {\n                couldNotResolve: true\n            }\n        },\n        {\n            name: 'no-duplicate-dep-types',\n            comment: 'Warn if a dependency you\\'re actually using occurs in your package.json more than once (technically: has more than one dependency type)',\n            severity: 'warn',\n            from: {},\n            to: {\n                moreThanOneDependencyType: true\n            }\n        },\n\n        /* rules you might want to tweak for your specific situation: */\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        , tsPreCompilationDeps: true\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "        // , tsPreCompilationDeps: false\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        , tsConfig: {\n            fileName: '"
    + container.escapeExpression(((helper = (helper = helpers.tsConfig || (depth0 != null ? depth0.tsConfig : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tsConfig","hash":{},"data":data}) : helper)))
    + "'\n        }\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "        // , tsConfig: {\n        //    fileName: './tsconfig.json'\n        // }\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        , webpackConfig: {\n            fileName: '"
    + container.escapeExpression(((helper = (helper = helpers.webpackConfig || (depth0 != null ? depth0.webpackConfig : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"webpackConfig","hash":{},"data":data}) : helper)))
    + "'\n            //, env: {}\n            //, args: {}\n        }\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "        // , webpackConfig: {\n        //    fileName: './webpack.conf.js'\n        //    , env: {}\n        //    , args: {}\n        // }\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        , externalModuleResolutionStrategy: '"
    + container.escapeExpression(((helper = (helper = helpers.externalModuleResolutionStrategy || (depth0 != null ? depth0.externalModuleResolutionStrategy : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"externalModuleResolutionStrategy","hash":{},"data":data}) : helper)))
    + "'\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "        // , externalModuleResolutionStrategy: 'node_modules'\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "module.exports = {\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.preset : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        {\n            name: 'not-to-test',\n            comment: 'Don\\'t allow dependencies from outside the test folder to test',\n            severity: 'error',\n            from: {\n                pathNot: '^(test|spec)'\n            },\n            to: {\n                path: '^(test|spec)'\n            }\n        },\n        {\n            name: 'not-to-spec',\n            comment: 'Don\\'t allow dependencies to (typescript/ javascript/ coffeescript) spec files',\n            severity: 'error',\n            from: {},\n            to: {\n                path: '\\\\.spec\\\\.(js|ts|ls|coffee|litcoffee|coffee\\\\.md)$'\n            }\n        },\n        {\n            name: 'not-to-dev-dep',\n            severity: 'error',\n            comment: 'Don\\'t allow dependencies from src/app/lib to a development only package',\n            from: {\n                path: '^(src|app|lib)',\n                pathNot: '\\\\.spec\\\\.(js|ts|ls|coffee|litcoffee|coffee\\\\.md)$'\n            },\n            to: {\n                dependencyTypes: [\n                    'npm-dev'\n                ]\n            }\n        },\n        {\n            name: 'optional-deps-used',\n            severity: 'info',\n            comment: 'Inform when using an optional dependency. It might not be wrong - but it\\'s not typicaly either',\n            from: {},\n            to: {\n                dependencyTypes: [\n                    'npm-optional'\n                ]\n            }\n        },\n        {\n            name: 'peer-deps-used',\n            comment: 'Warn when using a peer dependency - which might not be wrong - but it\\'s not typicaly either',\n            severity: 'warn',\n            from: {},\n            to: {\n                dependencyTypes: [\n                    'npm-peer'\n                ]\n            }\n        }\n    ],\n    options: {\n\n        /* conditions specifying which files not to follow further when encountered:\n           - path: a regular expression to match\n           - dependencyTypes: see https://github.com/sverweij/dependency-cruiser/blob/develop/doc/rules-reference.md#dependencytypes\n             for a complete list\n        */\n        doNotFollow: {\n            // path: 'node_modules',\n            dependencyTypes: [\n                'npm',\n                'npm-dev',\n                'npm-optional',\n                'npm-peer',\n                'npm-bundled',\n                'npm-no-pkg'\n            ]\n        }\n\n        /* conditions specifying which dependencies to exclude \n           - path: a regular expression to match\n           - dynamic: a boolean indicating whether to ignore dynamic (true) or static (false) dependencies.\n                    leave out if you want to exclude neither (recommended!)\n        */\n        // , exclude : {\n        //   path: ''\n        //   , dynamic: true\n        // }\n\n        /* pattern specifying which files to include (regular expression) \n           dependency-cruiser will skip everything not matching this pattern\n        */\n        // , includeOnly : ''\n\n        /* list of module systems to cruise */\n        // , moduleSystems: ['amd', 'cjs', 'es6', 'tsd']\n\n        /* prefix for links in html and svg output (e.g. https://github.com/you/yourrepo/blob/develop/) */\n        // , prefix: ''\n\n        /* if true detect dependencies that only exist before typescript-to-javascript compilation */\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tsPreCompilationDeps : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\n        /* if true combines the package.jsons found from the module up to the base\n           folder the cruise is initiated from. Useful for how (some) mono-repos\n           manage dependencies & dependency definitions.\n         */\n        // , combinedDependencies: false\n\n        /* if true leave symlinks untouched, otherwise use the realpath */\n        // , preserveSymlinks: false\n\n        /* Typescript project file ('tsconfig.json') to use for\n           (1) compilation and\n           (2) resolution (e.g. with the paths property)\n\n           The (optional) fileName attribute specifies which file to take (relative to\n           dependency-cruiser's current working directory). When not provided\n           defaults to './tsconfig.json'.\n         */\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tsConfig : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "\n        /* Webpack configuration to use to get resolve options from.\n\n          The (optional) fileName attribute specifies which file to take (relative to dependency-cruiser's\n          current working directory. When not provided defaults to './webpack.conf.js'.\n\n          The (optional) `env` and `args` attributes contain the parameters to be passed if\n          your webpack config is a function and takes them (see webpack documentation\n          for details)\n         */\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.webpackConfig : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "\n        /* How to resolve external modules - use \"yarn-pnp\" if you're using yarn's Plug'n'Play.\n           otherwise leave it out (or set to the default, which is 'node_modules')\n        */\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.externalModuleResolutionStrategy : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + "    }\n};\n// generated: dependency-cruiser@"
    + alias4(((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data}) : helper)))
    + " on "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "\n";
},"useData":true});
