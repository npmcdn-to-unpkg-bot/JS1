/**
 * Your slackbot token is available as the global variable:

process.env.SLACKBOT_TOKEN

 * When deployed to now.sh, the URL of your application is available as the
 * global variable:

process.env.NOW_URL

 * The URL is useful for advanced use cases such as setting up an Outgoing
 * webhook:
 * https://github.com/howdyai/botkit/blob/master/readme-slack.md#outgoing-webhooks-and-slash-commands
 *
 */

var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: process.env.SLACKBOT_TOKEN
})

var images = [
  'http://67.media.tumblr.com/6d23b3ebab885721fcc9c03c2fb5cc0e/tumblr_mvlzucYivH1r8lg7to1_500.jpg',
  'http://66.media.tumblr.com/715cd5cb793caac003ab13a0d9eb0b5a/tumblr_monqtnDpcD1r8lg7to1_500.jpg',
  'http://67.media.tumblr.com/e2c23b14a13cd106bd8e82cfb9b2ce4a/tumblr_mo32apssfq1r8lg7to1_500.jpg',
  'http://65.media.tumblr.com/0383495acc63b1ce918130628917e115/tumblr_mleikh3bCp1r8lg7to1_500.jpg',
  'http://66.media.tumblr.com/5b9719e5d8386c624ea1e5fcc9d85891/tumblr_ml2eejZqPo1r8lg7to1_500.png',
  'http://65.media.tumblr.com/37a10415d8776f5b329c8b59b4be5746/tumblr_mkx0fkSkYd1r8lg7to1_500.png',
  'http://65.media.tumblr.com/183349f121ff466cf34ac661a2d062a5/tumblr_mkt6cuQb8Q1r8lg7to1_500.png',
  'http://67.media.tumblr.com/aeee0121c2030603f16d4b5e40098400/tumblr_mj6h8jrwY81r8lg7to1_500.jpg',
  'http://67.media.tumblr.com/3bab4f512c142f66b77a74d82c3f2224/tumblr_mi93fnlrga1r8lg7to1_500.jpg',
  'http://67.media.tumblr.com/de5ec401177d9fdfb5b755918c9f2ad9/tumblr_mhgp8fyH3F1r8lg7to1_500.png',
  'http://67.media.tumblr.com/7d47ec9230f9d8756f214170b2eeb49c/tumblr_mh0etnjBxa1r8lg7to1_400.jpg',
  'http://66.media.tumblr.com/a41f5769d9b1a4f784d451137a0f1d52/tumblr_mfap8a8Hwt1r8lg7to1_500.png'
]

var randomImage = function(images){
  return images[Math.floor(Math.random()*images.length)];
}

bot.startRTM(function(error, whichBot, payload) {
  if (error) {
    throw new Error('Could not connect to Slack');
  }
});

controller.hears(['hey'], ['mention'], function(whichBot, message) {
  whichBot.reply(message, randomImage(images));
});

controller.hears(['girl'], ['mention'], function(whichBot, message) {
  whichBot.reply(message, randomImage(images));
});

controller.hears(['who goes there'], ['mention'], function(whichBot, message) {
    bot.api.users.list({},function(err,response) {
      var memberNames = []
      response.members.forEach(function(member){
        memberNames.push(member.name)
      })
      console.log(memberNames)
      whichBot.reply(message, memberNames.join(', '));
    })
});

