# Job Application Strategist

**Career Workspace** for organizing company research and job application materials.

## Content source and publishing

This repository is the presentation and publication site. The private **Application Writer Multi-Agent** workflow is the source of truth for the analysis instructions, JSON schemas, HTML renderers, and templates. This site is not a separate research workflow. The public `application-writing-agents` repository is not the source renderer for this site.

Authorized maintainers generate and validate reports in the private writer workspace, review the public content, then copy only approved HTML and required assets into this repository. Company reports are published under `company-*/<date>/report-*/`; job pages and related analyses are under `company-*/jobs/`. Private JSON, source notes, execution records, archives, and unprotected applicant information must stay out of the public export.

There is no background pull or sync from the private source. Authorized maintainers can explicitly run the writer's `scripts/writer_pipeline.py prepare` command to validate and stage allowed HTML/assets against a read-only copy of this site. Its `verify-prepare` and `publish-plan` commands check and describe the proposed export; they do not push. Content review, approval, promotion and publication remain separate steps. GitHub Pages serves committed files and currently does not enforce that private local gate. See the private writer README and `docs/writer-pipeline.md` for maintainer instructions; private access is not needed to read this site.

**[Open the site →](https://nana-park.github.io/job-application-strategist/)**

![Career Workspace company list](docs/images/career-workspace.jpg)

## What it does

- Company Research
- JD Analysis
- Essay Question
- Application Strategy (지원전략)
- Employee Interviews (현직자 인터뷰)

## Structure and setup

Static HTML, CSS, and JavaScript, served on GitHub Pages without a build step.

- `index.html`: company list
- `company-*/`: company and job application materials
- `assets/fonts/`: bundled fonts
- `tools/`: document protection utilities and synthetic test pages

Serve the repository root with a static HTTP server for local use. GitHub Pages publishes the root (`/`) of `main` with `.nojekyll`; internal links and image paths are relative.

The screenshot shows the public home page without unlocked personal materials; `synthetic` and `demo` pages under `tools/` use synthetic data and public test keys.
