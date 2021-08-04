import { createGlobalStyle } from 'styled-components'

export const Normalize = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    line-height: 1.15; /* 1 */
    cursor: default; /* 2 */
    word-break: break-word; /* 3 */
  }
  body {
    margin: 0;
    width: 1980px;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  main {
    display: block;
  }
  nav ol,
  nav ul {
    list-style: none;
  }
  pre {
    font-family: monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  small {
    font-size: 80%;
  }
  ::-moz-selection {
    background-color: #b3d4fc; /* 1 */
    text-shadow: none;
  }
  ::selection {
    background-color: #b3d4fc; /* 1 */
    text-shadow: none;
  }
  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }
  audio,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  img {
    border-style: none;
  }
  svg {
    fill: currentColor;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  table {
    border-collapse: collapse;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
  }
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    outline: none;
  }
  button {
    overflow: visible; /* 1 */
    text-transform: none; /* 2 */
    background: none;
    border: none;
    padding: 0;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    appearance: button;
  }
  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  input {
    overflow: visible;
  }
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  progress {
    display: inline-block; /* 1 */
    vertical-align: baseline; /* 2 */
  }
  select {
    text-transform: none;
  }
  textarea {
    overflow: auto; /* 1 */
    resize: vertical; /* 2 */
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  ::-webkit-search-decoration {
    appearance: none;
  }
  ::-webkit-file-upload-button {
    appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  details {
    display: block;
  }
  dialog {
    background-color: white;
    border: solid;
    color: black;
    display: block;
    height: fit-content;
    left: 0;
    margin: auto;
    padding: 1em;
    position: absolute;
    right: 0;
    width: fit-content;
  }
  dialog:not([open]) {
    display: none;
  }
  summary {
    display: list-item;
  }
  canvas {
    display: inline-block;
  }
  template {
    display: none;
  }
  a,
  area,
  input,
  label,
  select,
  summary,
  textarea,
  [tabindex] {
    touch-action: manipulation;
  }
  [hidden] {
    display: none;
  }
  [aria-busy='true'] {
    cursor: progress;
  }
  [aria-controls] {
    cursor: pointer;
  }
  [aria-disabled],
  [disabled] {
    cursor: disabled;
  }
  [aria-hidden='false'][hidden]:not(:focus) {
    clip: rect(0, 0, 0, 0);
    display: inherit;
    position: absolute;
  }
  .MuiListItemIcon-root {
      justify-content: center!important;
  }
  .MuiDrawer-docked {
      position: fixed;
  }
`
