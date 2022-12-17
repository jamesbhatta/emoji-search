import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <div>
          <img
            src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
            width="32"
            height="32"
            alt=""
          />
          Emoji
          <img
            src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
            width="32"
            height="32"
            alt=""
          />
        </div>
        <a
          className="github-link"
          href="https://github.com/jamesbhatta/emoji-search"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#ffcc4d"
              d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"
            ></path>
            <path
              fill="#664500"
              d="M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"
            ></path>
            <path
              fill="#ffffff"
              d="M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z"
            ></path>
            <path
              fill="#e95f28"
              d="M15.682 4.413l-4.542.801L8.8.961C8.542.492 8.012.241 7.488.333c-.527.093-.937.511-1.019 1.039l-.745 4.797-4.542.801c-.535.094-.948.525-1.021 1.064s.211 1.063.703 1.297l4.07 1.932-.748 4.812c-.083.536.189 1.064.673 1.309.179.09.371.133.562.133.327 0 .65-.128.891-.372l3.512-3.561 4.518 2.145c.49.232 1.074.123 1.446-.272.372-.395.446-.984.185-1.459L13.625 9.73l3.165-3.208c.382-.387.469-.977.217-1.459-.254-.482-.793-.743-1.325-.65zm4.636 0l4.542.801L27.2.961c.258-.469.788-.72 1.312-.628.526.093.936.511 1.018 1.039l.745 4.797 4.542.801c.536.094.949.524 1.021 1.063s-.211 1.063-.703 1.297l-4.07 1.932.748 4.812c.083.536-.189 1.064-.673 1.309-.179.09-.371.133-.562.133-.327 0-.65-.128-.891-.372l-3.512-3.561-4.518 2.145c-.49.232-1.074.123-1.446-.272-.372-.395-.446-.984-.185-1.459l2.348-4.267-3.165-3.208c-.382-.387-.469-.977-.217-1.459.255-.482.794-.743 1.326-.65z"
              class="twemoji-eyes origin-center"
            ></path>
          </svg>
          <span>Star on GitHub</span>
        </a>
      </header>
    );
  }
}
