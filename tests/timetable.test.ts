import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { courses, days } from "../data/fall-2026.ts";
import { timeToMinutes, getPosition } from "../lib/timetable.ts";

test("time conversion and timetable coordinates", () => {
  assert.equal(timeToMinutes("08:30"), 510);
  assert.deepEqual(getPosition("08:30", "09:50"), { top: 48, height: 128 });
  assert.throws(() => timeToMinutes("25:00"));
  assert.throws(() => getPosition("10:00", "09:00"));
});
test("semester sessions have valid times, unique identities and existing images", () => {
  const ids = new Set<string>();
  for (const course of courses) {
    assert.ok(days.includes(course.day));
    assert.ok(timeToMinutes(course.start) >= 480);
    assert.ok(timeToMinutes(course.end) <= 1320);
    assert.ok(timeToMinutes(course.start) < timeToMinutes(course.end));
    const id = `${course.day}-${course.start}-${course.name}`;
    assert.ok(!ids.has(id)); ids.add(id);
    assert.ok(existsSync(`public${course.locationImage}`));
  }
});
