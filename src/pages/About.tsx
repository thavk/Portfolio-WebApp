import React from "react";
import ReactMarkdown from 'react-markdown';
import styles from "../styles/About.module.scss";

export const About = () => {
    return (
        <div className={styles.aboutMe}>
            <h1>About Me</h1>
            <div className={styles.textContainer}>
                <ReactMarkdown>
                    {`
# About Me

Hello. I'm Marco.

My path into software engineering hasn’t been traditional. In many ways, it began with a lifelong fascination for complex systems and the challenge of understanding how things work.

## Early Curiosity

I grew up in a small coastal city in Portugal called Vila do Conde. As a kid, I was deeply curious about the world. I read fantasy novels, devoured encyclopedias about animals and dinosaurs, and obsessed over anything related to space.

School came easily at first. I performed well without needing to study much, which unfortunately meant I never developed strong academic discipline early on.

Around that time I discovered competitive video games. What fascinated me was not just the entertainment, but the constant cycle of learning, failure, adaptation, and improvement. The better you got, the stronger your opponents became.

That system of continuous challenge hooked me.

Over time I began climbing into the higher percentiles of competitive games and playing with elite players. Without realizing it, I was developing a deep appreciation for mastering complex systems.

Unfortunately, the more time I spent there, the less attention I paid to school.

## Losing Direction

By the time I reached high school, the lack of discipline began to catch up with me.

I performed well in subjects that genuinely interested me, particularly biology, physics, and English. However, I struggled in areas that required consistent effort and study habits.

At the same time, I developed a kind of defensive indifference. The classic attitude of "I could do it if I cared enough to." It worked socially, but it was not an honest reflection of my potential.

During my final year of high school I barely attended classes. Somehow, through a mix of improvisation and last minute effort, I managed to graduate.

That experience forced me to confront something uncomfortable. I was not incapable. I had simply avoided applying myself.

## Searching for Answers

After graduating, I entered a period of deep introspection. I became obsessed with understanding human behavior and motivation.

- Why do people act against their own values?
- What creates discipline?
- How do biases shape our thinking?
- What actually leads to a meaningful life?

I spent several years reading psychology, philosophy, and scientific literature while trying to apply those ideas to my own life.

Those years were often confusing and difficult, but they forced me to develop a level of self awareness and reflection that continues to shape how I approach challenges today.

Eventually I realized something important. Understanding yourself is not a final destination. It is an ongoing process.

## Rebuilding

At one point I moved to a small mountain town to create distance from my usual environment. I rented a small apartment, found a job, and focused on rebuilding structure and direction in my life.

During that time I began recognizing patterns in how I learn best.

I thrive when tackling complex systems through experimentation and iteration rather than rigid instruction. Competitive environments had always pushed me to improve rapidly, and that same mindset translated well to analytical challenges.

A good example was chess. I started playing seriously during this period and within a year reached the 99.6th percentile of online players. Experiences like that reinforced something I had begun to suspect for years. I have a strong affinity for systems thinking, strategy, and pattern recognition.

That realization eventually brought me back to something I had always been curious about: computer science.

## Discovering Software Engineering

Around this time I met my mentor, Batuhan, a senior full stack engineer who helped guide my learning.

With his help I began studying front end development and quickly fell into the rhythm of building things and solving problems. We worked together on several projects using React, where I gained hands on experience with routing, APIs, and object oriented programming concepts.

Soon after, I began studying data structures and algorithms, which I immediately found fascinating.

From there my curiosity expanded beyond application development into the deeper layers of computing. I started studying memory, CPU architecture, and the relationship between hardware and software.

The more I learned, the more the field felt like a natural fit.

## Where I Am Now

Today I am focused on becoming a stronger software engineer by continuing to build projects, deepen my understanding of computer systems, and refine my problem solving skills.

Looking back, my path may have been unconventional, but it gave me something valuable: resilience, self awareness, and a genuine love for learning.

In many ways, I am just getting started.
`}
                </ReactMarkdown>
            </div>
       </div>
    );
};
