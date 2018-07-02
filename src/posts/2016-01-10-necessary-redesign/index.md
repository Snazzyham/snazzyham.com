---
title: Necessary Redesign.
slug: necessary-redesign
date_published: 2016-01-10T05:35:52.000Z
date_updated:   2016-01-10T05:39:11.000Z
tags: vuejs, javascript, markdown, learning
layout: post
---

About a week ago now, [I shipped Simpledown](https://medium.com/@SnazzyHam/why-i-built-simpledown-750e5663bb1f#.hvd6geua7), a simple, web-based Markdown editor. I built it using Vue.js, based off a template that was in the Vue docs. However, it's been a week and therefore it was obviously the time to revamp the entire thing. I kid. 

Seriously though, I've spent this past week receiving feedback, as well as testing out the app for my day to day use. The more I used it, the more I found myself wanting to add features / make design tweaks that I couldn't, due to my limited knowledge of how Vue.js works. While I tried to read through the docs, I just couldn't get Vue to do what I wanted it to. At the same time, someone on reddit introduced me to [SimpleMDE](https://github.com/NextStepWebs/simplemde-markdown-editor). This immediately made me doubt everything I've done. Why? Because it's essentially everything I needed. Or at least I thought it was. The more I played around with it, I realised that if I integrated it, Simpledown would become a lot less simple. Completely diverting me from the initial aim of the project. 

However, I was still curious, and ended up finding this really nice markdown editor. Part of me wanted to shut down Simpledown altogether, and just redirect users to that app. However, it wasn't really an app. It was more like just a demo. So I ended up forking it, tweaking it, cleaning up the code, and I began trying to integrate it into Simpledown. 

After about 2 hours, I almost gave up. It seemed a lot simpler to just build an app from scratch based around the demo code, rather than trying to integrate it, but where's the fun in that? So I took some time, well a lot of time, and it is now `2:39 am` and I think it's pretty much ready. No Vue.js. No Frameworks (aside from Solid of course, which I'm actually starting to like and loathe at the same time). All in all, I really feel as though this update has taken Simpledown from an app I liked using, to an app I **prefer** using. Hopefully, that is the case for you too.

I'm falling asleep. I've got the voices of Myke Hurley, Stephen Hackett and Federico Viticci blaring in my ears, but I'm still trying to write release notes. Those notes are below. Hopefully, update 1.1 has fixed more than it has broken. Hopefully. 

#### Update 1.1 Release Notes. 

<hr>

- Added Syntax highlighting in the editor window. _(for headings and html)_
- Added export HTML
- Added some new shit
- I can't even remember what I've changed. 
- I stopped using Vue I think?
- ctrl-alt-shift (cmd-alt-shift) now brings up save menu.
- pullquotes work better (aka they actually work)
- It now immediately focuses on the editor when you bring it up.
- It automatically saves your shit for you. 
- removed option to download as any extension, changed it to only download as markdown, keeping things simple.
- the key to success is to have emoji support :key:
- `inline code looks a bit prettier`
- tab support, cause some guy on reddit asked for it.
- drag and drop files to the app should open them? 
- You should be able to share the URL and have the receiver view your notes. keyword: **SHOULD**. 

###### Upcoming Features
* Save to Dropbox (yes, still.)


_A huge thank you to [jbt](http://jbt.github.io/)._
