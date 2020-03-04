import React from 'react'

const Footer = ({ siteTitle }) => (
  <div class="fl w-100 bg-snz-black pv3-ns lh-copy flex justify-center pl0-ns pl3">
    <div class="w-50-ns">
      <p class="f6 snz-white">
        &copy; whichever year it is now. This site was built using Gatsby.js and
        Tachyons. You can find the code{' '}
        <a
          href="https://github.com/snazzyham/snazzyham.com"
          target="_blank"
          class="link dim silver"
        >
          here.
        </a>
      </p>
    </div>
  </div>
)

export default Footer
