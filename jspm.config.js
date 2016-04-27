SystemJS.config({
    transpiler: "plugin-babel",
    packages: {
        "bitbox-component": {
            "main": "index.js",
            "meta": {
                "*.js": {
                    "loader": "plugin-babel"
                }
            }
        }
    },
    meta: {
        "*.box": {
            "loader": "bitbox-transpiler"
        }
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "bitbox": "npm:bitbox@1.0.42",
        "bitbox-transpiler": "npm:bitbox-transpiler@1.0.6",
        "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
        "net": "github:jspm/nodelibs-net@0.2.0-alpha",
        "plugin-babel": "npm:systemjs-plugin-babel@0.0.9",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha",
        "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.5.7",
        "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha"
    },
    packages: {
        "github:capaj/systemjs-hot-reloader@0.5.7": {
            "map": {
                "debug": "npm:debug@2.2.0",
                "socket.io-client": "github:socketio/socket.io-client@1.4.5",
                "weakee": "npm:weakee@1.0.0"
            }
        },
        "npm:debug@2.2.0": {
            "map": {
                "ms": "npm:ms@0.7.1"
            }
        }
    }
});
