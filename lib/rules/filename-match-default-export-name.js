const path = require('path');

function getNodeName(node) {
    if (node.type === 'Identifier') {
        return node.name;
    }
}

function getExportedName(programNode, options) {
    for (var i = 0; i < programNode.body.length; i += 1) {
        var node = programNode.body[i];

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

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'If node contains default export, the filename should match the name of the defualt export',
            category: 'Possible Errors',
            recommended: true,
        },

        fixable: 'code',

        schema: [], // no options
    },
    create: function (context) {
        return {
            // callback functions
            Program: function (node) {
                var exportedName = getExportedName(node, context.options[0]);
                var fileNameData = parseFileName(context.getFilename());
                var fileName = fileNameData.name;

                if (exportedName !== fileName) {
                    context.report(
                        node,
                        'filename does not match default export name'
                    );
                }
            },
        };
    },
};
