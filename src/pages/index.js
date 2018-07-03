import React from "react";
import Link from "gatsby-link";
import TwitterLogo from "../images/twitter.svg";
import InstagramLogo from "../images/instagram.svg";
import GithubLogo from "../images/github.svg";
import SpotifyLogo from "../images/spotify.svg";

const SiteTitle = () =>
  <div class="fl w-60-ns w-80 ph5-ns ph3 pv2">
    <h5 class="black-70 mb0 fw3">Hi, my name is</h5>
    <h1 class="mv0 f1">Soham Adwani</h1>
    <h5 class="black-70 mt0 fw3">I like using code to solve problems.</h5>
  </div>;

const BodyContent = props =>
  <div class="fl w-70-l w-90 f4 black-80 ph5-ns ph3 pv2 lh-copy">
    <p>
      I’m a full-stack developer, working mostly with Node.js, whichever front
      end framework is hype right now, and Go(lang). I also work with a lot of
      server code and bash scripts.
    </p>
    <p>
      I also really love writing SQL and CSS, which I’ve been told makes me very
      weird. And it’s all done in Vim, even though its first public release was
      4 years before I was born.
    </p>

    <p>
      My focus is on functional and practical design, as well as performant
      systems.
    </p>

    <p>
      When I’m not writing code or drawing up UML diagrams, I’m playing with
      gadgets and eating really hot wings in preparation for the day Sean Evans
      calls me up to be a guest on Hot Ones.
    </p>

    <p>
      If you want to get in touch, Twitter and Insta DM’s are open, or you could
      email me: snazzyham [at] gmail [dot] com.
    </p>
  </div>;

const SocialSection = () =>
  <div class="fl w-70-ns pl5-ns pv2">
    <h2 class="f3">Obligatory internet presence section</h2>
    <SocialContainer
      logo={TwitterLogo}
      title="Twitter"
      link="https://twitter.com/snazzyham"
      description="I mostly tweet about code, tech and the NBA. Basketball is very good."
    />
    <SocialContainer
      logo={GithubLogo}
      title="Github"
      link="https://github.com/snazzyham"
      description="Of all my code related accomplishments, having a PR merged into Tachyons
      is probably my proudest moment."
    />
    <SocialContainer
      logo={InstagramLogo}
      title="Instagram"
      link="https://instagram.com/snazzyham"
      description="I kinda only post stories, because I hear that’s what the cool kids do these days."
    />
    <SocialContainer
      logo={SpotifyLogo}
      title="Spotify"
      link="https://open.spotify.com/user/snazzyham"
      description="I make fire playlists. Or at least my cat thinks so."
    />
  </div>;

const SocialContainer = props =>
  <div class="flex mv4-ns mv3">
    <img src={props.logo} alt={props.title} class="fl self-center" width="54" />
    <div class="flex flex-column ml3-ns mt1">
      <a href={props.link} target="_blank" class="link dim f4 black-80 b">
        {props.title}
      </a>
      <p class="black-70 f6 mt0">
        {props.description}
      </p>
    </div>
  </div>;

const IndexPage = () =>
  <div class="fl w-100">
    <SiteTitle />
    <BodyContent />
    <SocialSection />
  </div>;

export default IndexPage;
