(function() {

  var counter = 0;

  var button = document.getElementById('press-me-button');

  button.addEventListener('click', function(event) {
    var count = document.getElementById('count');
    var countNumber = document.getElementById('count-number');
    counter++;
    countNumber.innerHTML = counter;
    if (count.className.indexOf('show') < 0) {
      count.className += ' show';
    }
  });

  var blogPostButton = document.getElementById('blog-posts');

})();