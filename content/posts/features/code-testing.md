---
title: Code Testing
description: 'Some code'
date: 2021-01-25
cover_image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1
cover_image_id: Lp9uH9s9fss
ext_image: true
category: Features
tags: 
  - code
status: draft
hasPlaylist: false
---
This is a code test. 

```scss
// code
code[class*="language-"],
pre[class*="language-"] {
	color: var(--color-white);
	// text-shadow: 0 1px rgba(0, 0, 0, 0.3);
	font-family: "JetBrains Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre[class*="language-"].line-numbers span::before {
	color: var(--color-dark-gray);
	// border-color: blue;
}

.line-numbers .line-numbers-rows {
	border-right: 2px solid var(--color-dark-black) !important;
}

code.language-css,
code.language-scss {
	color: var(--color-orange);
}

pre[class*="language-"] {
	padding: 1em;
	margin: 0.5em 0;
	overflow: auto;
	border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: var(--color-dark-black);
}

:not(pre) > code[class*="language-"] {
	padding: 0.1em;
	border-radius: 0.3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: var(--color-gray);
}

.token.punctuation {
	color: var(--color-white);
}

.token.property + .token.punctuation {
	color: var(--color-red);
}

.namespace {
	opacity: 0.7;
}

//.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
	color: var(--color-white);
}

.token.property {
	color: var(--color-white);
}

// .token.atrule > .token.property {
//   color: var(--color-orange);
// }

.token.hexcode.color {
	color: var(--color-orange);
}

.token.combinator,
.token.operator {
	color: var(--color-yellow);
}

.token.boolean,
.token.number {
	color: var(--color-orange);
}

.token.selector,
// .token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: var(--color-red);
}

.token.selector .token.punctuation {
	color: var(--color-white);
}

.token.attr-name {
	color: var(--color-orange);
}

.token.class {
	color: var(--color-yellow);
	font-style: italic;
}

.token.entity,
.token.url,
//.language-css .token.string,
.style .token.string,
.token.variable {
	color: var(--color-white);
}

.language-css .token.string,
.language-scss .token.string {
	color: var(--color-green);
}

// .token.atrule,
//.token.attr-value,
.token.function {
	color: var(--color-aqua);
}

.token.atrule {
	color: var(--color-white);
}

.token.rule {
	color: var(--color-purple);
}

.token.attr-value {
	color: var(--color-green);
}

.token.keyword {
	color: var(--color-yellow);
}

.token.unit {
	color: var(--color-purple);
}

.token.regex,
.token.important {
	color: var(--color-orange);
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

.token.pseudo-class {
	color: var(--color-gray);
}

code.language-js {
	color: var(--color-red);

	.token.operator {
		color: var(--color-white);
	}

	.token.maybe-class-name {
		color: var(--color-white);
	}
	.token.keyword {
		color: var(--color-orange);
	}
	.token.string {
		color: var(--color-green);
	}
}

code[class*="language-"],
pre[class*="language-"] {
	// white-space: normal !important;
	word-break: break-word !important;
}

```
