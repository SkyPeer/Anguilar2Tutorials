var packages = {
    "app": {"defaultExtension": "js"},
    "angular2-in-memory-web-api": { main: "index.js", defaultExtension: "js" }
};

var ng2PackageNames = [
    'common', 'router', 'compiler', 'core', 'forms', 'http', 'platform-browser', 'platform-browser-dynamic', /*'testing', 'upgrade'*/
];

ng2PackageNames.forEach(function (pkgName) {
    packages["@angular/" + pkgName] = {main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
});

System.config({
    baseUrl: 'build/debug/app',
    transpiler: false,
    defaultJSExtensions: true,
    packages: packages,
    paths: {"npm:*": "node_modules/*"},
    map: {
        "@angular": "npm:@angular",
        "rxjs": "npm:rxjs",
        'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    }
});

System.import('build/debug/app/index');