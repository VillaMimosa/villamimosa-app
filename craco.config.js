const colors = require('./src/constants/colors');
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#222222',
                            '@link-color': colors.scheme["color-info-700"],
                            '@success-color': colors.scheme['color-success-500'],
                            '@info-color': colors.scheme['color-info-500'],
                            '@warning-color': colors.scheme['color-warning-500'],
                            '@error-color': colors.scheme['color-danger-500'],
                            '@font-family': 'Charlie Display',
                            '@layout-header-background': '#222222',
                            '@border-radius-base': '5px',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}