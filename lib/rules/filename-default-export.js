/**
 * @fileoverview Rule to disallow unnecessary semicolons
 * @author Nicholas C. Zakas
 */

import path from 'path';

function getNodeName(node) {
    // var op = options || [];

    if (node.type === 'Identifier') {
        return node.name;
    }

    // if (node.id && node.id.type === 'Identifier') {
    //     return node.id.name;
    // }

    // if (
    //     op[2] &&
    //     node.type === 'CallExpression' &&
    //     node.callee.type === 'Identifier'
    // ) {
    //     return node.callee.name;
    // }
}

function getExportedName(programNode, options) {
    for (var i = 0; i < programNode.body.length; i += 1) {
        var node = programNode.body[i];

        // export default ...
        if (node.type === 'ExportDefaultDeclaration') {
            return getNodeName(node.declaration, options);
        }
    }
}

function parseFileName(filename) {
    var ext = path.extname(filename);

    return {
        dir: path.dirname(filename),
        base: path.basename(filename),
        ext: ext,
        name: path.basename(filename, ext),
    };
}

export default {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'disallow unnecessary semicolons',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-extra-semi',
        },

        fixable: 'code',

        schema: [], // no options
    },
    create: function (context) {
        return {
            // callback functions
            Program: function (node) {
                const exportedName = getExportedName(node, context.options[0]);
                const fileNameData = parseFileName(context.getFilename());
                const fileName = fileNameData.name;

                console.log(
                    `filename: ${fileNameData.dir}, ${fileNameData.base}, ${fileNameData.name}, ${fileNameData.ext} }`
                );
                console.log(`exportedName: ${exportedName}`);

                if (exportedName !== fileName) {
                    context.report(
                        node,
                        'default export name and filename does not match'
                    );
                }
            },
        };
    },
};
