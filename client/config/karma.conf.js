import webpackConfig from './webpack.test.js';

export default (config) => {
    config.set({
        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                plugins: ['transform-es2015-modules-umd'],
                sourceMap: 'inline'
            }
        },
        basePath: '',
        frameworks: ['jasmine', 'source-map-support', 'karma-typescript'],
        files: [
            {pattern: './config/karma-test-shim.js', watched: false}
        ],
        preprocessors: {
            './src/**/!(*spec).ts': ['webpack', 'karma-typescript', 'sourcemap', 'coverage'],
            './src/**/*spec.ts': ['webpack', 'karma-typescript', 'sourcemap'],
            './config/karma-test-shim.js': ['webpack', 'sourcemap', 'sourcemap']
        },
        webpackMiddleware: {
            stats: 'errors-only'
        },


        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true,


        plugins: [
            'karma-jasmine',
            'karma-chai',
            'karma-mocha-reporter',
            'karma-coverage',
            'karma-remap-coverage',
            'karma-phantomjs-launcher',
            'karma-webpack',
            'karma-jasmine-html-reporter',
            'karma-babel-preprocessor',
            'karma-sourcemap-loader',
            'karma-sourcemap-writer',
            "karma-source-map-support",
            'karma-typescript'


        ],
        remapCoverageReporter: {
            'text-summary': null,
            'json': './coverage/coverage.json',
            'html': './coverage/html',
            'lcovonly': './coverage/lcov.info',
            cobertura: './coverage/cobertura.xml'

        },

        webpack: webpackConfig,

        reporters: ['progress', 'karma-typescript', 'kjhtml', 'coverage', 'remap-coverage', 'mocha'],

        webpackServer: {noInfo: true},

        colors: true,
        browsers: 'PhantomJS',

        coverageReporter: {
            //reporters: [
            //    // reporters not supporting the `file` property
            //    {type: 'html', subdir: 'report-html'}],
            type: 'in-memory'
        }
    });
}