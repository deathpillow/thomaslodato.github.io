---
title: "What Postful Taught Me"
date: 2026-06-29
draft: true
tags: ["explorations", "building-in-public"]
description: A retrospective on Postful, the social media scheduling tool I built and shut down.
---

We shut down Postful in Q2 2026, about fifteen months after we kicked it off. It wasn't a surprise ending, more like a decision that had been becoming obvious for a while and finally felt right to make official.

This is my attempt to write it down before the lessons get fuzzy.

## What Postful was

Postful was a social media scheduling and authoring tool for small businesses. The pitch: use AI to turn what you already know (your work, your expertise, your wins) into posts worth publishing. No blank page, no generic template. Something that started from *you*.

We were in a crowded market (Buffer, Hootsuite, Later, and plenty of others), but we thought the angle was different enough to matter. SMBs need leads and repeat business. They struggle to stay consistent on social. Most tools give them infrastructure; we wanted to give them words.

## What we tried

Our first approach: arrive each day to a feed of ready-to-post content, generated from your business context. You'd tweak, approve, post. Simple.

Early testing showed us something interesting. When the feed hit, when it felt like *them*, people loved it. When it missed, they thought the product was broken and didn't understand them at all. There was no middle. Which told us the real problem wasn't the blank page. It was trust and fit.

We iterated. Built a more fluid workflow between writing your own post and asking for AI input. Added a feature to turn existing content — a link, a blog post, something you'd already written — into social copy. Built a 1:1 "jumpstart" mode that coached people through developing a post or campaign.

That last idea ended up becoming the seed of Solo Grow, the product I'm working on now. But that's getting ahead of things.

## Why it didn't work

**The audience didn't actually want to do this.** This is the one that stings a little. In our research, SMB owners anchored to what they understood: *I run a business, so I have to do marketing, even though I hate it.* We showed them something that could make it easier. That wasn't enough. What they actually wanted was to hand it off entirely. Done for them, reviewed, out the door without having to think about it.

We heard the stated preference ("help me post more") and missed the revealed one ("take this off my plate"). The right product for this audience isn't a better authoring tool. It's a managed service. That's a different business.

**The AI capabilities shifted under us.** We started building in Q1 2025. By the time we were iterating, the model landscape had changed considerably: better capabilities, more competition, features showing up in browsers and IDEs that ate at what we were building. A product that felt differentiated at the start felt less so twelve months later. Not fatal on its own, but it accelerated everything else.

**The market got noisy.** AI tools flooded every channel. Growth got harder. Organic social, the thing we were supposed to be helping people *do*, became harder to do ourselves, which is its own kind of irony.

**Social is just one piece.** The businesses we were talking to weren't just thinking about Instagram or LinkedIn. They had email, ads, their website, word of mouth. We were solving a slice of a shifting problem and they needed more coverage than we could offer.

## What I'd do differently

**Don't build the API integrations.** We built our own apps within the Meta, X, and LinkedIn APIs from scratch. That work was necessary to ship, but it ate dev time, required platform approvals, and meant every new feature had to clear the same friction. On Solo Grow, we use a service that abstracts all of that. We focus on product, not infrastructure.

**Take bigger swings.** We built an AI-first workflow and landed somewhere that looked a lot like the existing tools. We should have pushed further. Wilder, more opinionated versions of what AI-assisted authoring could actually look like. We played it too safe and ended up in the middle of the market instead of carving out something distinct.

**Top of funnel from day one.** We built, then promoted. By the time we were ready for customers, we didn't have any. We should have started with a waitlist, been running our own organic content, building SEO before there was a product to sell. Acquisition is an asset that compounds. We started building it too late.

## What carried forward

Solo Grow is, in a lot of ways, Postful's thesis corrected. The core insight that survived: SMBs need someone to take the marketing work *off* their plate, not a better tool to do it themselves.

So Solo Grow is a managed service. We do the work: AI in the operator workflow, humans reviewing before anything goes out. Customers approve, not author. The output is finished, not a starting point.

Top-of-funnel is a day-one priority this time. And we're not building any social API integrations.

---

Postful didn't work, but I'm not sure it was a waste. The product taught me more about what SMBs actually need from marketing help than any amount of prior research did. Sometimes you have to build the wrong thing to understand what the right thing is.

On to the next one.