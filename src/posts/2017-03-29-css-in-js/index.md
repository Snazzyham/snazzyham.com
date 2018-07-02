---
title: Why is Everyone Obsessed With Writing CSS as JavaScript?
slug: css-in-js
date_published: 2017-03-29T12:51:00.000Z
layout: post
--- 

There comes a point in many web developers lives, where they've spent the last two or so years moving from stack to stack learning the new hottest thing in tech, trying to see if its right for them, only to get insanely overwhelmed by all these new technologies and just break down and stick with one. I wouldn't say I've hit this point yet, but I have hit a pretty different one. I've reached the stage, where although I'm excited to learn the new hotness, I'm skeptical on some of the opinions that its community may hold. 

I love CSS. This maybe an unpopular opinion, but it's true. I love writing CSS. I laugh when people call it a _"Cascading Shit Show"_, but deep down, be it writing or debugging, I love it. Which is why it makes me sad that everyone is trying to replace it. 

For the past couple of months, I've been hearing terms like `css-in-js` and `css-modules` thrown around, but I never really knew why anyone would want to use it. I write my CSS the Atomic way, ala [jxnblk](http://jxnblk.com) and [mrmrs](http://mrmrs.cc) amongst many others, and I think it works great. It's performant, clean, reusable and fast to work with. Which is why, when I started learning React, I decided to just use regular CSS and ignore the whole argument for breaking down your CSS and using it as JavaScript and what not. I read a couple of articles about it, but I just really couldn't bring myself to ditching CSS, not when I was having this much fun with it. 

![](https://i.ytimg.com/vi/Zpi7qQaB0jU/hqdefault.jpg)

A couple of months passed, I had taken a break from React to get into Vue, because, once again, it seemed like the new hotness, plus I wanted to play around with it. I was still using CSS the way I loved, Atomically, and everything was swell. Then came a bigger challenge, we built [oddamatic](https://oddamatic.com) as an experiment to see what we could do with web technologies, and it got a good enough reception where we decided to turn it into a mobile app. However, we wanted it to run on iOS and Android, and I'm the only developer on the team, so we didn't really have the resources for me to learn Swift and Kotlin, or whatever it is Android Dev's swear by these days *(nb: I'm an Android loyalist, I just don't like Java)*. React Native seemed like the best option, because I was pretty familiar with React and I loved the way it worked, and I was pretty burned out on the Ionic framework and Angular, from when we built [Spencer](http://spectacularspencer.com). Also, `create-react-native-app` had just been announced, so there really was no better time. 

### Here comes the gotcha. 

You __*can't*__ use CSS in React Native 😥. This meant it was finally time to start looking into these CSS in JS solutions or whatever. Here's how it went. 

### The Default Method - Objects, or whatever. 
To learn React Native, I decided to take a course on Udemy. Mostly because Udemy sent me an email and I was tempted by the supposed 80% discount, which seems to have been going on since I signed up for Udemy years ago. I'm not knocking on the teacher here, because he's a fantastic teacher and explains it really well. However, he did choose to go with the traditional way of styling in react native, which makes me so so sad. 

This method, takes writing CSS, and turns it into javascript objects. With properties using camel case instead of kebab case, and commas instead of semicolons. Here's an example from the React Native docs;

```js
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);
```

Some of my gripes with this; 
- You have to store it in a variable, and type the variable name over, and over, and over. 
- it tries to look like CSS, giving you that tiny sense of hope, before it comes outta nowhere with the right hook
- Leaving React Native aside for a minute, if you use this method, or a similar method of writing inline styles in plain React, you miss out on media-queries and pseudo classes. Something as simple as a hover would either require you to import another library or writing a function. 

### CXS  
Now, it's no secret that I'm a huge fanboy of Brent Jackson, so when I found out he created something called CXS for handling styling in React, I thought I'd give it a shot. If I'm being honest, I still can't really tell what CXS is. From what I gather, it lets you write CSS in JS, and then abstracts it into regular CSS, which seems to be performant and reduces _'deduplication'_. Here's a code example from github. 

```js
import React from 'react'
import cxs from 'cxs'

const Box = (props) => {
  return (
    <div {...props} className={className} />
  )
}

const className = cxs({
  padding: 32,
  backgroundColor: 'tomato'
})

export default Box
```

The problem with CXS for me specifically, is that I don't realy understand it, and also, it uses JS objects, once again. Also, I'm not really sure if this would work with React Native. It probably doesn't. At this point in my research, I couldn't really tell how I felt about this whole inline styles and separation of css for each component. Questions I had;
>  _"How is this more performant? What if you want to reuse styles? Are you not supposed to reuse styles? but isn't that what atomic css is all about?"_ 

### styled-components &#128133;

After a lot of contemplating and research over multiple other styling solutions for React Native, I decided to go with `styled-components`. Styled Components removes the issue of mapping between components and styles, coming from the idea where if we're going to write our CSS inline anyway, why do we still need a format of mapping our CSS to our components. 

I have to admit, looking at styled-components at a glance, it does look a little odd, but once you read the github README, it actually makes a lot of sense. It also works on both React and React Native, so if I get used to it enough with React Native, I could easily start using it in my next React project. 

```js
import React from 'react';

import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>
```

One thing I really love about styled-components is that it lets you write the CSS you've always known and loved, and also does nifty things like automatic vendor prefixing. 

### Concluding Thoughts

At the end of the day, I still prefer writing CSS the Atomic way. However, if and when the time comes for me to move on from good old CSS, I'm probably going to use styled-components. 


