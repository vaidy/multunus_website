// JSON-P Twitter fetcher for Octopress
// (c) Brandon Mathis // MIT License

/* Sky Slavin, Ludopoli. MIT license.  * based on JavaScript Pretty Date * Copyright (c) 2008 John Resig (jquery.com) * Licensed under the MIT license.  */

function linkifyTweet(text, url) {
  // Linkify urls, usernames, hashtags
  text = text.replace(/(https?:\/\/)([\w\-:;?&=+.%#\/]+)/gi, '<a href="$1$2">$2</a>')
    .replace(/(^|\W)@(\w+)/g, '$1<a href="http://twitter.com/$2">@$2</a>')
    .replace(/(^|\W)#(\w+)/g, '$1<a href="http://search.twitter.com/search?q=%23$2">#$2</a>');

  // Use twitter's api to replace t.co shortened urls with expanded ones.
  for (var u in url) {
    if(url[u].expanded_url != null){
      var shortUrl = new RegExp(url[u].url, 'g');
      text = text.replace(shortUrl, url[u].expanded_url);
      var shortUrl = new RegExp(">"+(url[u].url.replace(/https?:\/\//, '')), 'g');
      text = text.replace(shortUrl, ">"+url[u].display_url);
    }
  }
  return text
}

function showTwitterFeed(tweets, twitter_user) {
  var timeline = document.getElementById('tweets'),
      content = '';

  for (var t in tweets) {
    content += '<li>';
    content += '<p>';
    content += linkifyTweet(tweets[t].text.replace(/\n/g, '<br>'), tweets[t].entities.urls);
    content += '</p>';
    content += '</li>';
  }
  timeline.innerHTML = content;
}

function getTwitterFeed(user, count, replies) {
  count = parseInt(count, 10);
  $.ajax({
      url: "http://api.twitter.com/1/statuses/user_timeline/" + user + ".json?trim_user=true&count=" + (count + 20) + "&include_entities=1&exclude_replies=" + (replies ? "0" : "1") + "&callback=?"
    , dataType: 'jsonp'
    , error: function (err) { $('#tweets li.loading').addClass('error').text("Twitter's busted"); }
    , success: function(data) { showTwitterFeed(data.slice(0, count), user); }
  })
}
