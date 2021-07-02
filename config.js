module.exports = function () {

    var source = 'src',
        development = 'dist',
        test = 'test',
        remove = ['.sass-cache', 'dist'],

        // 템플릿 경로
        template = {
            src: source + '/template/**/!(_)*.html',
            parts: source + '/template/**/_*.html',
            dest: development + '/',
            src_m: source + '/template_m/**/!(_)*.html',
            parts_m: source + '/template_m/**/_*.html',
            dest_m: development + '/m/',
        },

        //json 추가
        json = {
            src: source + '/**/*.json',
            // copySrc: source + '/copy_temp/**/*.json',
        },

        // Sass 경로
        sass = {
            src: source + '/assets/sass/**/!(_)*.{scss,sass}',
            parts: source + '/assets/sass/**/_*.{scss,sass}',
            dest: development + '/static'
        },

        // Css 경로
        css = {
            src: source + '/assets/**/css/**/*.css',
            dest: development + '/'
        },

        // JS 경로
        js = {
            src: source + '/assets/**/js/**/*.js',
            dest: development + '/'
        },

        // Img 경로
        img = {
            // src : source + '/assets/img/**/*.{gif,jpg,png,ico}',
            src: source + '/assets/**/img/**/!(sprite)*/*',
            src_sprite: source + '/assets/img/**/sprite*/*',
            dest: development + '/img',
        },

        // etc 경로
        etc = {
            src: source + '/assets/**/*.!{html, css, sass, js, jpg, png, gif}',
            dest: development + '/static',
        },

        // static (씨베이 별도) 경로
        static = {
            src: source + '/assets/static/**',
            dest: development + '/static',
        },

        // HTML 옵션
        htmlbeautify = {
            "indentSize": 4
        };

    return {
        del: remove,
        src: source,
        test: test,
        dev: development,

        template: template,
        css: css,
        sass: sass,
        js: js,
        img: img,
        etc: etc,
        static: static,

        htmlbeautify: htmlbeautify,

        json: json

    };
};