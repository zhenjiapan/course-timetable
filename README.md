# Course Timetable — Fall 2026

A personal, responsive course timetable maintained by Zhenjia Pan. It brings weekly scheduling, course descriptions, instructor links, and location photos into one place.

[Live timetable](https://steven-s-weekly-course-timetable-fa.vercel.app) · [中文说明](README.zh-CN.md) · [Data guide](docs/data-guide.md)

## Motivation

I started this project as a first-year student at CUHK-Shenzhen to address practical needs in my daily university life:

- **Finding teaching buildings:** As a newcomer, I was unfamiliar with campus locations. Building images from the campus map provide visual references to help me find where classes take place.
- **Checking my schedule conveniently:** An online timetable lets me check my classes whenever needed, saving time in everyday use.
- **Understanding courses and instructors:** Course descriptions help me understand what I will study this semester, while instructor information and homepage links help me explore their research interests.

## Preview

### Desktop weekly view

![Desktop weekly timetable](docs/images/timetable-desktop.png)

### Mobile daily view

<img src="docs/images/timetable-mobile.png" alt="Mobile daily timetable" width="360">

## Features

- Desktop weekly grid with time-based course positioning.
- Mobile daily view with weekday selection and an empty-day message.
- Separate visual styles for enrolled and audited courses.
- Course details with instructor links and location photos.
- Keyboard-accessible course buttons and a native modal dialog.

## Project context

This is a personal academic planning and frontend practice project, not an official university timetable or a research result. Course enrollment and auditing are distinguished in the data. The application does not fetch live enrollment information.

The implementation uses Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Static export keeps deployment simple: course information is bundled at build time, while day selection and course details run in the browser.

## Design decisions

- **Static deployment:** Course data is bundled at build time; no database or backend service is required.
- **Responsive views:** A weekly grid supports desktop browsing, while a daily list supports smaller screens.
- **Separated responsibilities:** Semester data, time-positioning logic, and interactive components are maintained separately.
- **Shared images:** Sessions can reference the same location photo without duplicate files.
- **Validation:** Automated checks cover time conversion, positioning, session identifiers, and image paths.

## Development approach

This is my first vibe coding project: a practical exploration of building an application with AI assistance. Turning a personal need into a working tool helped me develop my software development skills and become more familiar with using Codex.

The project is maintained by Zhenjia Pan. AI-assisted tools were used for repository restructuring, documentation improvements, and selected implementation changes.

## Run locally

Use Node.js 22.18 or newer (CI uses Node.js 24) and npm. No environment variables are required.

```sh
git clone https://github.com/zhenjiapan/course-timetable.git
cd course-timetable
npm ci
npm run dev
```

After the development server starts, keep the terminal open and visit http://localhost:3000 . If a different port is shown in the terminal, use that address instead.

This address works only while a server is running on your computer. Visitors can use the [live timetable](https://steven-s-weekly-course-timetable-fa.vercel.app) without installing anything.

To check the code and generate deployment files:

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

The build generates `out/`. To preview it, with Python 3 installed:

```sh
npm start
```

This serves static files on localhost:3000. Run the build again after changing source files. Deploy `out/` to a static host; this project does not use a production Next.js server.

Use either `npm run dev` or `npm start` at a time; both use port 3000 by default. Press Ctrl+C to stop the server.

## Repository structure

```text
app/                         Route entry, metadata, and global styles
components/timetable/        Interactive timetable and course dialog
data/fall-2026.ts             Semester course sessions and descriptions
lib/timetable.ts             Time conversion and positioning
public/images/locations/     Shared location photos
tests/                       Time and semester-data checks
docs/data-guide.md           Editing and verification instructions
.github/workflows/           Automated checks
```

`node_modules/`, `.next/`, and `out/` are generated locally and are not source files. `AGENTS.md` and `CLAUDE.md` contain development-tool guidance.

## Maintenance and limitations

Edit `data/fall-2026.ts` to update courses; see the [data guide](docs/data-guide.md). This is a recurring weekly view for Fall 2026, using campus local time (China Standard Time (UTC+08:00)). It does not model holidays, date-specific changes, overlapping-course layout, calendar export, or user accounts. The initial mobile selection is Monday.

Course schedules and verbatim course descriptions come from CUHK-Shenzhen SIS. Location images come from the university's public campus map and show teaching buildings, not individual classrooms. The maintainer has checked instructor information and homepage links. See [Sources](docs/sources.md) for provenance and details that remain undocumented. Verify current arrangements with official university information. This repository does not currently grant a separate open-source license; third-party text and images should not be assumed to be freely reusable.

## Maintainer

[Zhenjia Pan](https://github.com/zhenjiapan)
