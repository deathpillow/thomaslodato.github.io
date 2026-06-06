---
layout: post.njk
title: "Appendix to \"Show Your Work\""
date: 2023-10-06
tags: [imported, ai-at-work]
---
<p>In the <a href="https://deptofthomas.micro.blog/2023/10/06/show-your-work.html">previous post</a> I used a plan and execute agent to discuss the use of an LLM with an orchestration. An action agent is more elegant admittedly. Using a variant prompt (&ldquo;What is 2+2? Provide an explanation of how the final answer was obtained.&quot;) the output is more condensed, and honestly a lot more concise a point:</p>
<div class="highlight"><pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-bash" data-lang="bash">Entering new  chain...
 I need to use a calculator to solve this math problem.
Action: Calculator
Action Input: 2+2
Observation: Answer: <span style="color:#ae81ff">4</span>
Thought: I now know the final answer.
Final Answer: 2+2 is equal to 4. The final answer was obtained by using a calculator to solve the math problem.
</code></pre></div><p>The explanation at the end is a perfect encapsulation of LLMs answering math questions without doing math.</p>
<p>You can find the <a href="https://github.com/tlodato/deptofthomas/blob/fb7fd15a0fd417893971692b571f114962d6a319/math-action-agent.py">Python file</a> here used to run this</p>

