---
layout: post
title: Simpledown 1.2
slug: simpledown-one-point-two
subtitle: Small, significant changes.
---

What seems like a lifetime ago now, I pushed simpledown to the web. Simpledown was born out of a need for a simple text editor, with markdown support, that would let me immediately pull up a browser and start writing down my thoughts. Having a simple, browser based (due to constraints that I had [previously written about](http://snazzyham.com/2016/01/10/necessary-redesign/)) markdown editor was something I had always wanted, but was never really motivated to build. That is until I found the example in the Vue.js docs. I basically took that version, wrapped it in some html and css, and threw it onto a server. One day into using it, I hated it. So I scrapped the entire thing. However, having already had a taste of what I was looking for, I sought out some github repo's that would help me do what I want. A day or so later,  I had a better, more usable version. And that's how Simpledown 1.1 was born.  

Since then, I've been making a few small changes to the app, but never really anything noticable. The biggest change came in around March, when I adapted the layout to allow me to keep the app open side by side with another window on a smaller display, aka to let me take notes in class. However, as time passed, as much as I wanted to use Simpledown, I just stopped. I instead moved back to Mou on the mac _(and macdown since then)_. 

If not for any specific reason, its just that I didn't really take notes at the lab as much as I used to, and didn't find myself needing a browser based markdown editor. This morning, when I opened up Simpledown, after a regrettably long amount of time, a few things bothered me. To preface this, you should know that in the past month, I've begun using Vim exclusively for all my programming work, and there's a lot I've gotten used to. I'm used to using vim commands and shortcuts to moving around a file, and found myself constantly hitting escape, V and $ in the textarea. Another vim command I use often is Ngg (skip to line), which even if I did have vim commands in Simpledown would be hard, because there are no line numbers shown. Also, one of the biggest feature requests I've had from people who use the app was a dark theme. _The people I refer to, well person, singular, is myself. I found a to-do in my list app stating "make a dark mode for simpledown"_. So today, I am proud to bring you, if there even is a you, Simpledown 1.2! We've got it all. Line numbers, vim commands, dark mode and a few small improvements, that go toward making this app a little more usable. It's not good enough to become a daily thing, but its close. I can feel it. A full list of changes can be found below.    


## Changelog 
- Added Dark Mode
- Added Vim Commands
- Show Line Numbers
- Save to Markdown // Save to HTML now prompt the user for a filename rather than the annoying untitled.md or untitled.html it kept doing
- It works well in split screen mode now _(actually an old update but never announced)_
- Changed font to Roboto Mono

### What's next 
- Dropbox _(YES, I know. Still)_
- Full Screen Mode 
- Read Jekyll front matter 
- _(maybe?)_ make it a progressive web app and make it usable on mobile?
- Clean up the codebase cause its ew.
