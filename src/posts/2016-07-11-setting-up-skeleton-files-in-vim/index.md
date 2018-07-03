---
title: Setting up skeleton files with Vim
layout: post
slug: probably-an-outdated-post
date_published: 2016-07-11T11:42:02.000Z
---
 
Vim, for those of you who use it _(I mean if you don't use it this article probably is of no use to you)_, is actually a pretty powerful tool. I've been using it on and off lately, and I'm still trying to get the hang of it myself.   

I've been trying to make the switch from Atom, but one of the main things that holds me back is that I'm a lot faster in Atom. So I decided that step by step, I'm going to start trying to figure out how to do stuff in Vim that I usually do in Atom, the first of those was skeleton files. What I mean by this is that usually when I'm starting up an html file, I type `html5-` in Atom, hit enter and I get this;

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>
```

That comes as part of the `html-bootstrap` extension, and it really is a great starting point _(although I don't use Bootstrap anymore, I just delete the bootstrap links and throw in a link to [Solid](http://solid.buzzfeed.com))_. I wanted to figure out how to do this in Vim, but didn't really find many tutorials out there, so I had to ask a couple of people, and this is what I found out. By using the `BufNewFile` command and calling a function that appends the code you want, you can have Vim automatically add code to any file you create with a specific extension, in this case, `.html` files. Here's what it looks like; 

```vim
autocmd BufNewFile *.html ks|call HTMLHeader()|'s
fun HTMLHeader() 
    call append(0, "<!DOCTYPE html>")
    call append(1, "<html lang='en'>")
    call append(2, "  <head>")
    call append(3, "    <meta charset='utf-8'>")
    call append(4, "    <meta http-equiv='X-UA-Compatible' content='IE=edge'>")
    call append(5, "    <meta name='viewport' content='width=device-width, initial-scale=1'>")
    call append(6, "    <title></title>")
    call append(7, "    <link rel='stylesheet' href='style/solid.css'>")
    call append(8, "  </head>")
    call append(9, "  <body>")
    call append(10, " </body>")
    call append(11, "</html>")
```

Want to do this for another type of file? you just have to replace the `*.html` on the first line with the extension that you want. Of course you could bypass this altogether by setting up a webStarterKit, but this works for any sort of file you may have, and is pretty flexible.  

I hope this tutorial helps someone, and if you know someone who's just starting off with vim, link them to this, you never know when it may come in handy! 
