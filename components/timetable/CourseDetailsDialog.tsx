"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import type { CourseSession } from "@/data/fall-2026";

export default function CourseDetailsDialog({ selectedCourse, onClose }: { selectedCourse: CourseSession; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    dialog.current?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  return (
    <dialog ref={dialog} aria-labelledby="course-details-title" onCancel={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      className="m-auto max-h-[90vh] w-full max-w-lg rounded-2xl bg-transparent p-0 backdrop:bg-slate-900/30 backdrop:backdrop-blur-sm">
          <div
            className="flex h-[75vh] w-full max-w-lg flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"

            // 点击弹窗本身不会关闭
            onClick={(event) => event.stopPropagation()}
          >

            {/* 弹窗标题 */}
            <div className="flex items-start justify-between">

              <div>
                <p className="text-sm font-medium text-slate-400">
                  Course Details
                </p>

                <h2 id="course-details-title"
                  className={
                    selectedCourse.audit
                      ? "mt-1 text-2xl font-bold text-pink-900 sm:text-2xl"
                      : "mt-1 text-2xl font-bold text-emerald-900 sm:text-2xl"
                  }
                >
                  {selectedCourse.name}
                </h2>
              </div>

              {/* 关闭按钮 */}
              <button
                onClick={() => onClose()}
                className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* 分割线 */}
            <div className="my-5 border-t border-slate-100" />

            {/* 课程信息 */}
            <div className="min-h-0 flex-1 space-y-5 overflow-y-auto pr-2">

              {/* 中文课程名称 */}
              {selectedCourse.courseName && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Course Name
                  </p>

                  <p className="mt-1 text-base font-medium text-slate-700">
                    {selectedCourse.courseName}
                  </p>
                </div>
              )}

              {/* 课程类型 */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Course Type
                </p>

                <p
                  className={
                    selectedCourse.audit
                      ? "mt-1 text-base font-medium text-pink-700"
                      : "mt-1 text-base font-medium text-emerald-700"
                  }
                >
                  {selectedCourse.type}
                </p>
              </div>

              {/* 学分 */}
              {selectedCourse.credits && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Credits
                  </p>

                  <p className="mt-1 text-base font-medium text-slate-700">
                    {selectedCourse.credits}
                  </p>
                </div>
              )}

              {/* 评分 */}
              {selectedCourse.grading && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Grading
                  </p>

                  <p className="mt-1 text-base font-medium text-slate-700">
                    {selectedCourse.grading}
                  </p>
                </div>
              )}

              {/* 上课时间 */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Time
                </p>

                <p className="mt-1 text-base font-medium text-slate-700">
                  {selectedCourse.day},{" "}
                  {selectedCourse.start} – {selectedCourse.end}
                </p>
              </div>

              {/* 课程简介 */}
              {selectedCourse.description && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Description
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {selectedCourse.description}
                  </p>
                </div>
              )}

              {/* 老师 */}
              {selectedCourse.teacher && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Instructor
                  </p>

                  <p className="mt-1 text-base font-medium text-slate-700">
                    {selectedCourse.teacher}
                  </p>
                </div>
              )}
              {selectedCourse.homepage && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Homepage
                  </p>

                  <a
                    href={selectedCourse.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block break-all text-sm leading-6 text-blue-600 underline underline-offset-2 transition hover:text-blue-800"
                  >
                    {selectedCourse.homepage}
                  </a>
                </div>
              )}

              {selectedCourse.homepages &&
                selectedCourse.homepages.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Homepage
                    </p>

                    <div className="mt-1 space-y-1">
                      {selectedCourse.homepages.map(
                        (homepage, index) => (
                          <a
                            key={index}
                            href={homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block break-all text-sm leading-6 text-blue-600 underline underline-offset-2 transition hover:text-blue-800"
                          >
                            {homepage}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                )}

              {/* 上课地点 */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Location
                </p>

                <p className="mt-1 text-base font-medium text-slate-700">
                  📍 {selectedCourse.location}
                </p>

                {/* 地点照片：只需要在课程数据中的 locationImage 填入图片路径或 URL */}
                {selectedCourse.locationImage && (
                  <Image
                    width={1200}
                    height={800}
                    unoptimized
                    src={selectedCourse.locationImage}
                    alt={`${selectedCourse.location} location`}
                    className="mt-3 w-full rounded-xl border border-slate-200 object-cover shadow-sm"
                  />
                )}
              </div>

            </div>

            {/* 底部关闭按钮 */}
            <button
              onClick={() => onClose()}
              className="mt-7 w-full rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
            >
              Close
            </button>

          </div>
    </dialog>
  );
}
