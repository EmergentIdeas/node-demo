var fetch = require('./fetch')
var cheerio = require('cheerio')
var _ = require('underscore')

var stories = []

var printStory = function(story) {
	console.log('***' + story.headline)
	console.log(story.storyText)
	console.log()
	console.log()
}

var showHeadlines = function(webData) {
	var $ = cheerio.load(webData)

	var headlines = $('h2')
	headlines.each(function(index) {
		var story = {
			storyText: ''
		}
		stories.push(story)
		story.headline = $(this).text()
		story.url = $(this).closest('a').attr('href')

		var getStoryData = function(extraCallback) {
			fetch('www.economist.com', story.url, function(content) {
				var storyData = cheerio.load(content)
				storyData('.main-content p').each(function() {
					story.storyText += storyData(this).text() + '\n'
				})

				if(extraCallback) {
					extraCallback()
				}
			})
		}
		if(headlines.length - 1 == index) {
			//last one
			getStoryData(function() {
				_.each(stories, printStory)
			})
		}
		else {
			getStoryData()
		}
	})
}

fetch('www.economist.com', '/', showHeadlines)
