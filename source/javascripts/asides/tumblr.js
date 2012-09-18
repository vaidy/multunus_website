// JSON-P Twitter fetcher for Octopress
// (c) Brandon Mathis // MIT License

/* Sky Slavin, Ludopoli. MIT license.  * based on JavaScript Pretty Date * Copyright (c) 2008 John Resig (jquery.com) * Licensed under the MIT license.  */

function showTumblrPost(data, user) {
  var timeline = document.getElementById('tumblr_post'),
  content = '<li class="nav-header">@'+data.tumblelog.title+'</li>';
  var posts = data.posts;
  for (var i in posts) {
    var postType = posts[i].type;
    if(postType === "video"){
      content += posts[i]["video-player-250"];
    }
    else if(postType === "photo"){
      content += '<img src="'+posts[i]["photo-url-250"]+'">';
    }
    content += '<li>';
    content += '<p>';
    content += posts[i][postType+"-caption"];
    content += '</p>';
    content += '</li>';
  }
  timeline.innerHTML = content;
}

function getTumblrPost(user, count) {
  count = parseInt(count, 1);
  $.ajax({
      url: "http://multunus.tumblr.com/api/read/json?start=0&num=1&callback="
      , dataType: 'jsonp'
    , error: function (err) { $('#tumblr li.loading').addClass('error').text("Twitter's busted"); }
    , success: function(data) { showTumblrPost(data, user); }
  })
}
