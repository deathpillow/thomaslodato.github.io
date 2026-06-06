---
layout: post.njk
title: "More for less: OpenAI's larger and cheaper context window"
date: 2023-11-07
tags: [imported, ai-at-work]
---
<p>Yesterday (11/6/2023) OpenAI announced GPT-4 Turbo, an update to their state-of-the-art model GPT-4. Amongst many features, GPT-4 Turbo has a huge context window. Context windows are the amount of text (counted in a unit called tokens<sup id="fnref:1"><a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a></sup>) that can be input into a model. At 128000 tokens, GPT-4 Turbo can take in about 98.5k words or ~200 pages of text.<sup id="fnref:2"><a href="#fn:2" class="footnote-ref" role="doc-noteref">2</a></sup></p>
<p>Prior to this announcement, OpenAI’s model with the largest context window was GPT-4-32k. This model has a context window of 32768 tokens, or roughly 50 pages (approx. 25k words). This model quadrupled GPT-4’s context window of 8192 tokens or 12 pages (approx. 6k words).</p>
<p>Performance aside, the increased context window with GPT-4 Turbo allows for use cases previously requiring some complicated approaches to using for OpenAI’s GPT-4 models. What is more notable is the cost of this context window.</p>
<p>With the introduction of GPT-4 and GPT-4-32k, the context window was a premium feature. Compared to its predecessor, GPT-3.5-turbo-1106 (context window: 16385), GPT-4 is 30 times more expensive to use at $0.03 per 1000 input tokens and GPT-4-32k 60 times more expensive at $0.06 per 1000 input tokens.<sup id="fnref:3"><a href="#fn:3" class="footnote-ref" role="doc-noteref">3</a></sup> In other words, inputing the the same 12 pages to these GPT-4 models would cost about $2.50 and $5, respectively. GPT-3.5-turbo-1106 would only cost about 8 cents. Arguably, GPT-4-32k would only be necessary for inputs that exceeded GPT-4’s context window and GPT-3.5-turbo-1106’s response quality, meaning it would be more costly—and maybe used less frequently—for specific kinds of use cases. In either case, OpenAI was charging users for the compute required to run a model with a larger context window.</p>
<p>GPT-4 Turbo, however, is sixth as expensive as GPT-4-32k, a third as expensive as GPT-4 at $0.01 per 1000 input tokens, and ten times as expensive as GPT-3.5-turbo-1106. Using our examples of a 12 page document, GPT-4 Turbo would cost about $0.80 to process the same prompt.</p>
<p>With lower cost, bigger context window, and a slew of other features, OpenAI seems to want developers and businesses to move to GPT-4 Turbo. This could be a strategy for OpenAI to increase its market share while taking a hit on operating cost and/or for consolidating its numerous offerings as its models become multimodal.<sup id="fnref:4"><a href="#fn:4" class="footnote-ref" role="doc-noteref">4</a></sup> Reflecting on the keynote and announcements, Ben Thompson <a href="https://stratechery.com/2023/the-openai-keynote/">speculates</a> that OpenAI’s strategy is to become “the most important consumer-facing product since the iPhone”. As much as OpenAI presented these features as important for developers, Thompson thinks the company is leaning into the fact they are an “accidental consumer technology company”. As such, the features—context window included—seem positioned get more consumers using products developed using OpenAI’s technology than for developers to be excited about developing according to Thompson.</p>
<p>Regardless, OpenAI is moving extraordinarily fast and using its partnership with Microsoft to dominate the ecosystem. I&rsquo;ll be curious to see what else follows in the coming weeks around pricing, access, and developer &amp; consumer resources.</p>
<section class="footnotes" role="doc-endnotes">
<hr>
<ol>
<li id="fn:1" role="doc-endnote">
<p>Tokens are language units that enable an LLM to represent natural language. LLMs represent language through associations. For example, the word “jumping” may resolve into two tokens: “jump” and “ing”. By doing so, an LLM may associate jumping with other physical movement words (e.g. leaping, bounding, running) by way of the root verbs (e.g. jump, leap, bound, run). Likewise, an LLMs may also able to association the word with parts of speech (e.g. gerund, present participle) by way of its suffix (-ing). (LLMs also create many other associations that are harder to explain.) <a href="https://www.linkedin.com/pulse/demystifying-tokens-llms-understanding-building-blocks-lukas-selin/">This article</a> explains more about tokens and how tokenization (the process by which words are turned into tokens) occurs.&#160;<a href="#fnref:1" class="footnote-backref" role="doc-backlink">&#x21a9;&#xfe0e;</a></p>
</li>
<li id="fn:2" role="doc-endnote">
<p>I am using the ratio of 1.3:1 for tokens to words found <a href="https://github.com/ray-project/llm-numbers#readme">here</a>. This ratio is not hard and fast, but an approximation based on tokenization strategies and actual model performance. I am also using 500 words (single spaced) per page, which is an estimation I have used for years and I am not sure where it comes from or how accurate it is.&#160;<a href="#fnref:2" class="footnote-backref" role="doc-backlink">&#x21a9;&#xfe0e;</a></p>
</li>
<li id="fn:3" role="doc-endnote">
<p>Pricing of input and output tokens—that is, what is provided as a prompt and what is served as a response—are different. See the pricing <a href="https://openai.com/pricing">here</a>.&#160;<a href="#fnref:3" class="footnote-backref" role="doc-backlink">&#x21a9;&#xfe0e;</a></p>
</li>
<li id="fn:4" role="doc-endnote">
<p>OpenAI maintains <a href="https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo">9 different families of models with multiple models therein</a>, some for image generation, some for audio, some for text. Also announced during the keynote was a version of GPT-4 that includes image-to-text (”vision”) capabilities.&#160;<a href="#fnref:4" class="footnote-backref" role="doc-backlink">&#x21a9;&#xfe0e;</a></p>
</li>
</ol>
</section>

