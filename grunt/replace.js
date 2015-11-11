// Replace compiled template images sources from ../src/html to ../dist/html
module.exports = {
  src_images: {
    options: {
      usePrefix: false,
      patterns: [
        {
          match: /(<img[^>]+[\"'])(\.\.\/img\/)/gi,  // Matches <img * src="../src/img or <img * src='../src/img'
          replacement: 'test/$1'
        },
        {
          match: /(url\(*[^)])(\.\.\/img\/)/gi,  // Matches url('../src/img') or url(../src/img) and even url("../src/img")
          replacement: 'test/$1'
        }
      ]
    },

    files: [{
      expand: true,
      flatten: true,
      src: ['<%= paths.dist %>/*.html'],
      dest: '<%= paths.dist %>'
    }]
  }
};