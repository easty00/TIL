
import GithubIcon from "./svg/GithubIcon"

import XIcon from "./svg/XIcon"
import BlueskyIcon from "./svg/BlueskyIcon"
import DiscordIcon from "./svg/DiscordIcon"

export default function SocialIconList() {
    
    return(
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <GithubIcon/>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <DiscordIcon/>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <XIcon/>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <BlueskyIcon/>
                Bluesky
              </a>
            </li>
          </ul>
    )
}