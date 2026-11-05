"use client";
import { useState } from "react";
import { courses, days } from "@/data/fall-2026";
import { startHour, endHour, slotHeight, timeToMinutes, getPosition, getHourLabel } from "@/lib/timetable";
import CourseDetailsDialog from "./CourseDetailsDialog";

export default function Timetable() {
  // 当前被点击的课程
  const [selectedCourse, setSelectedCourse] =
    useState<(typeof courses)[number] | null>(null);

  const [selectedDay, setSelectedDay] = useState("Monday");

  const totalHeight =
    ((endHour - startHour) * 60 / 30) * slotHeight;

  return (
    <main className="min-h-screen bg-slate-50 px-3 py-5 text-slate-800 sm:px-5 sm:py-7 lg:px-8">
      <div className="mx-auto max-w-[1500px]">

        {/* =========================
            页面标题 + 右上角图例
        ========================= */}
        <div className="mb-5 flex flex-col gap-4 sm:mb-7 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="mb-1 text-xs font-medium text-slate-500 sm:text-sm">
              Fall Semester 2026
            </p>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Steven&apos;s Schedule
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              My weekly course timetable
            </p>
          </div>

          {/* 右上角图例 */}
          <div className="flex items-center gap-6 pb-1 text-sm text-slate-500">

            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded border-2 border-emerald-300 bg-emerald-50" />
              <span>正式课程</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded border-2 border-pink-300 bg-pink-50" />
              <span>旁听课程</span>
            </div>

          </div>
        </div>

        {/* =========================
            Mobile timetable
        ========================= */}
        <div className="mb-4 md:hidden">
          <div className="flex gap-1 overflow-x-auto rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                aria-pressed={selectedDay === day}
                className={`min-w-[72px] flex-1 rounded-lg px-2 py-2 text-xs font-semibold ${
                  selectedDay === day
                    ? "bg-slate-800 text-white"
                    : "text-slate-500"
                }`}
              >
                {day.slice(0, 3)}
              </button>
            ))}
          </div>

          <div className="mt-4 space-y-3">
            {!courses.some((course) => course.day === selectedDay) && <p className="p-4 text-sm text-slate-500">No classes scheduled / 当天无课</p>}
            {courses
              .filter((course) => course.day === selectedDay)
              .map((course) => (
                <button
                  key={`${course.day}-${course.start}-${course.name}`}
                  onClick={() => setSelectedCourse(course)}
                  className={`w-full rounded-2xl border-2 bg-white p-4 text-left shadow-sm ${
                    course.audit
                      ? "border-pink-200"
                      : "border-emerald-200"
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="w-14 shrink-0">
                      <div className="text-sm font-bold text-slate-700">
                        {course.start}
                      </div>
                      <div className="mt-1 text-xs text-slate-400">
                        {course.end}
                      </div>
                    </div>

                    <div
                      className={`w-px ${
                        course.audit
                          ? "bg-pink-200"
                          : "bg-emerald-200"
                      }`}
                    />

                    <div className="min-w-0 flex-1">
                      <div
                        className={`text-sm font-bold ${
                          course.audit
                            ? "text-pink-900"
                            : "text-emerald-900"
                        }`}
                      >
                        {course.name}
                      </div>

                      {course.courseName && (
                        <div className="mt-1 text-sm text-slate-700">
                          {course.courseName}
                        </div>
                      )}

                      <div
                        className={`mt-2 text-xs font-semibold ${
                          course.audit
                            ? "text-pink-700"
                            : "text-emerald-700"
                        }`}
                      >
                        {course.type}
                      </div>

                      <div className="mt-2 truncate text-xs text-slate-500">
                        📍 {course.location}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </div>

        {/* =========================
            课表
        ========================= */}
        <div className="hidden overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
          <div className="min-w-[900px] lg:min-w-0">

            {/* 星期标题 */}
            <div
              className="grid border-b border-slate-200"
              style={{
                gridTemplateColumns: "68px repeat(7, 1fr)",
              }}
            >
              <div className="flex h-16 items-center justify-center border-r border-slate-200 bg-slate-50 text-sm font-semibold text-slate-500">
                Time
              </div>

              {days.map((day) => (
                <div
                  key={day}
                  className="flex h-16 items-center justify-center border-r border-slate-200 bg-slate-100 text-sm font-semibold text-slate-600 last:border-r-0"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* 时间 + 每天课程 */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: "68px repeat(7, 1fr)",
              }}
            >

              {/* 左侧时间轴 */}
              <div
                className="relative border-r border-slate-200"
                style={{
                  height: totalHeight,
                }}
              >
                {Array.from(
                  {
                    length: endHour - startHour + 1,
                  },
                  (_, index) => {
                    const hour = startHour + index;

                    return (
                      <div
                        key={hour}
                        className="absolute right-3 -translate-y-1/2 text-xs font-medium text-slate-400"
                        style={{
                          top:
                            ((hour - startHour) * 60 / 30) *
                            slotHeight,
                        }}
                      >
                        {getHourLabel(hour)}
                      </div>
                    );
                  }
                )}
              </div>

              {/* 七天 */}
              {days.map((day) => {
                const dayCourses = courses.filter(
                  (course) => course.day === day
                );

                return (
                  <div
                    key={day}
                    className="relative border-r border-slate-200 last:border-r-0"
                    style={{
                      height: totalHeight,
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, transparent 0px, transparent 47px, #e2e8f0 48px)",
                    }}
                  >

                    {/* 整点辅助线 */}
                    {Array.from(
                      {
                        length: endHour - startHour,
                      },
                      (_, index) => (
                        <div
                          key={index}
                          className="absolute left-0 right-0 border-t border-slate-300"
                          style={{
                            top:
                              index * 2 * slotHeight,
                          }}
                        />
                      )
                    )}

                    {/* 课程卡片 */}
                    {dayCourses.map((course) => {
                      const { top, height } = getPosition(
                        course.start,
                        course.end
                      );

                      const duration =
                        timeToMinutes(course.end) -
                        timeToMinutes(course.start);

                      const isShortCourse = duration <= 60;

                      return (
                        <button
                          key={`${course.day}-${course.start}-${course.name}`}

                          // 点击课程
                          onClick={() => setSelectedCourse(course)}

                          className={
                            course.audit
                              ? "absolute text-left left-2 right-2 cursor-pointer overflow-hidden rounded-xl border-2 border-pink-300 bg-pink-50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                              : "absolute text-left left-2 right-2 cursor-pointer overflow-hidden rounded-xl border-2 border-emerald-300 bg-emerald-50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                          }
                          style={{
                            top: top + 2,
                            height: height - 4,
                            padding: isShortCourse
                              ? "8px 10px"
                              : "12px",
                          }}
                        >

                          {/* 短课程 */}
                          {isShortCourse ? (
                            <>
                              <div
                                className={
                                  course.audit
                                    ? "text-sm font-bold text-pink-900"
                                    : "text-sm font-bold text-emerald-900"
                                }
                              >
                                {course.name}
                              </div>

                              <div className="mt-1 flex items-center whitespace-nowrap">
                                <span
                                  className={
                                    course.audit
                                      ? "text-xs font-semibold text-pink-700"
                                      : "text-xs font-semibold text-emerald-700"
                                  }
                                >
                                  {course.type}
                                </span>

                                <span className="text-xs text-slate-600">
                                  {"\u00A0\u00A0"}
                                  {course.start} – {course.end}
                                </span>
                              </div>

                              <div className="mt-1 whitespace-nowrap text-xs text-slate-500">
                                📍 {course.location}
                              </div>
                            </>
                          ) : (

                            /* 普通课程 */
                            <>
                              <div
                                className={
                                  course.audit
                                    ? "text-sm font-bold text-pink-900"
                                    : "text-sm font-bold text-emerald-900"
                                }
                              >
                                {course.name}
                              </div>

                              <div
                                className={
                                  course.audit
                                    ? "mt-1 text-xs font-semibold text-pink-700"
                                    : "mt-1 text-xs font-semibold text-emerald-700"
                                }
                              >
                                {course.type}
                              </div>

                              <div className="mt-2 text-xs font-medium text-slate-600">
                                {course.start} – {course.end}
                              </div>

                              <div className="mt-1 text-xs text-slate-500">
                                📍 {course.location}
                              </div>
                            </>
                          )}

                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* =====================================================
          课程详情弹窗
      ===================================================== */}
      {selectedCourse && <CourseDetailsDialog selectedCourse={selectedCourse} onClose={() => setSelectedCourse(null)} />}

    </main>
  );
}
