# Introduction

This is the technical assignment for fullstack developers applying to ResQ Club. The whole assignment should take no more than 2-3 hours of your time, and will form the basis of our discussion in the tech interview. If you find the task is taking longer, and you don't have the time to complete it, feel free to stop early and provide some notes on how you were planning to proceed.

The assignment is based on a (fictional) scenario which requires you to do a couple of tasks similar to working at ResQ Club.

# The story so far

The tech team was running low on ideas for which product feature to build next, so we decided to out-source the development of a platform for collecting product ideas. Unfortunately it seems that the quality of software produced was not very high, and so the contract has been cancelled. It is therefore now up to the tech team (and yourself) to continue development. This repo contains the source code for the platform so far. Be warned, the product may have bugs and poor design decisions.

# Current features

1. Users can submit ideas to the platform
2. Users can see all submitted ideas
3. User can navigate to a stats page to see some summary stats on the ideas submitted so far

# Task 1: Implementing better submission error UX

When a user submits a new idea to the platform, the idea is passed through validation on the backend before it is saved. Unfortunately, if the user's idea fails validation there is currently no feedback that it has failed. Your task is to improve the UX of idea submission such that,

1. The user receives a meaningful error message when validation fails
2. The user is able to update their submission when it fails validation, and try again

It is up to you to design the UX and implementation in whatever way you see fit to fulfil these requirements. Feel free to change and refactor as much or as little of the codebase as you like. We are not necessarily expecting you to write perfect code as time is very limited for this assignment, but be ready to discuss your choices and what you might have done with more time.

Please clone this repo and create a new git branch with your changes. Ideally you will create a private repo on GitHub and give [@resq-bot](https://github.com/resq-bot) sufficient permissions to view and add extra collaborators (so other members of the tech team can review). Again ideally, you would raise a PR from your branch to `main` as if this were a real piece of work. If, for some reason, you cannot submit your changes in the ideal way, please discuss with us.

In reality we always favour small PRs reviewed and merged quickly, but for this assignment it is okay to make a larger PR with more changes that you would normally include at once.

# Task 2: Code review

Thankfully, you are not alone in developing this service. One of our developers has submitted some code for you to review. Their code is meant to close the following task from our work management system,

> ResQ employees are not as creative as originally expected, and are struggling to come up with ideas. They would still like to be involved in the product development process however, and have asked for a button which would provide an auto-generated idea for them. This is a somewhat pointless feature, but the demand is very high and will buy us some goodwill to implement.
>
> We should implement the following,
>
> - Add a button to the idea submission form that fills the > content box with some auto-generated text
> - The auto-generated text should describe a product idea or provide useful feedback on an existing feature

The implementation can be found in the branch `feature/awesome-thing`.

Please provide code review as if this were a real project. Ideally you should raise a PR from branch `feature/awesome-thing` in your GitHub repo from Task 1 (don't worry about filling in the PR description etc.) and review the code there. Again, if there is an issue with this method of submission please discuss with us.

# Task 3 (optional): Think about how to improve this codebase and product

In the tech interview we will discuss this repo and dig into some concrete ideas about how to improve it and prepare it for production release. You therefore might want to spend some time reading through the code, looking at the functionality and design and coming up with some ideas ahead of time. If you want, you can submit some short notes on your thinking along with this assignment, or you can wait to discuss in the tech interview.

# Technical details

## Repo content

This is a yarn workspaces monorepo with 2 packages. `frontend` package is a Vue 3 application and `backend` an Express server. Both are written with TypeScript.

## Running the app

Both commands should be run in the root of the repo.

1. Install dependencies `yarn`
2. Run dev server `yarn dev`

These commands run the fullstack app with hot-reload on backend and frontend changes.
