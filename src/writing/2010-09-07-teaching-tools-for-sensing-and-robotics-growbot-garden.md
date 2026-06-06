---
layout: post.njk
title: "Teaching Tools for Sensing and Robotics (Growbot Garden)"
date: 2010-01-19
tags: [imported]
---
<figure>
	<img src="/images/teaching-tools/tt-v2-2.jpg">
</figure>

The Growbot Garden project was structured around a series of workshops in Atlanta, GA. These workshops engaged local growers, farmers, and food makers in discussions about agricultural technology. We focused the workshops on robotics as a means to embody a variety of comtemporary computational technologies. Participants were asked to envision what robotics for small-scale farming might look like. The prototypes and sketches they developed were not intended to be suggestions for actual systems, but instead representations of desires, needs, and expectations that individuals had about technology within the context of small-scale agriculture. In other words, the workshops used robotics on the farm to draw out the potential value conflicts between different modes of agricultural activity.

As part of these workshops, I developed two simple teaching tools to demonstrate the Sense-Think-Act paradigm of robotics. These tools familiarized participants with some basic ideas of robotics in order to ground the subsequent prototyping activities. These tools demonstrated simple sensors (light, vision, distance, and moisture) and actuation. These tools focused on teaching participants to consider the aspects of their farms that could be measured and what types of subsequent actions might occur.

--

###Machine Vision and Actuation
One of the teaching tools was a simple machine vision program that actuated an awning. The vision program was built in Processing and the actuation was handled by an Arduino microcontroller. The purpose of this tool was to demonstrate the capabilities and difficulties of vision systems on the farm.

<figure>
	<img src="/images/teaching-tools/tt-interface.jpg">
	<figcaption>Interface for a machine vision tool</figcaption>
</figure>

The software portion of the tool featured a two-panel display. The bottom panel displayed an unflitered video feed. The top panel applied various filters to the feed, such as color and blob detection. Additionally, the program allowed users to specify particular areas of interest. The reason for the two feeds was to show how the computer was interpreting the particular video input. As much as the program worked, it highlighted the imprecision of machine vision in many ways. This latter lesson helped demystify machine vision, and encouraged participants to question how their ideas might and might not work in real settings.

<figure>
	<img src="/images/teaching-tools/tt-v1-1.jpg">
	<figcaption>Early prototype of actuation mechanism</figcaption>
</figure>

Along with the machine vision program was a hardware component. Based on the vision input, a Servo motor actuated to move an awning. The prototype contributed to how we explained the Sense-Think-Act paradigm of robotics. I deliberately used craft materials rather than more polished plastics to lower the threshold for engaging and envisioning the robotics on the farm.

The final version of the machine vision and actuation prototype was demonstrated during the Growbot Garden workshops. We showed the idea to the participants, and invited them to play with the various filters and explore the actuation mechanism.

<figure>
	<img src="/images/teaching-tools/tt-v1-2.jpg">
	<figcaption>Final version of the computer vision/mechanized awning prototype</figcaption>
</figure>
<figure>
	<img src="/images/teaching-tools/tt-v1-5.jpg">
	<figcaption>In use during a workshop</figcaption>
</figure>


###Sensor Learning Station
The other teaching tool was a learning station that was used to explain how digital sensors work. Using Arduino and three simple sensors (photo resistor, capacitance/moisture, IR distance sensor), the display gave participants the opportunity to play with hardware. The learning station also introduced concepts related to measuring natural phenomena, such as soil moisture, changes in light, and the presence of animals.

For the second version of the learning station, we made  more self-contained display. Text was added to allow participants to engage with the display independent of us. We wanted to start to acclimate participants to the notion of tinkering, and allowing them to independently play with sensors was one way we sought to accomplish this.

<figure>
	<img src="/images/teaching-tools/tt-v1-3.jpg">
	<figcaption>Version 1 of the Sensor Learning Station</figcaption>
</figure>

<figure>
	<img src="/images/teaching-tools/tt-v2-1.jpg">
	<figcaption>Version 2 of the Sensor Learning Station</figcaption>
</figure>
