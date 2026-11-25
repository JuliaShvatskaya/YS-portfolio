import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CAREER_MILESTONES } from '../constants';

const CareerRoadmap: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(CAREER_MILESTONES.length - 1);
  const shouldReduceMotion = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeMilestone = CAREER_MILESTONES[activeIndex];
  const totalMilestones = CAREER_MILESTONES.length;
  const progressRatio = totalMilestones > 1 ? activeIndex / (totalMilestones - 1) : 1;

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const nextIdx = activeIndex > 0 ? activeIndex - 1 : totalMilestones - 1;
    setActiveIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex < totalMilestones - 1 ? activeIndex + 1 : 0;
    setActiveIndex(nextIdx);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let targetIndex: number | null = null;
    if (e.key === 'ArrowRight') {
      targetIndex = (index + 1) % totalMilestones;
    } else if (e.key === 'ArrowLeft') {
      targetIndex = (index - 1 + totalMilestones) % totalMilestones;
    } else if (e.key === 'Home') {
      targetIndex = 0;
    } else if (e.key === 'End') {
      targetIndex = totalMilestones - 1;
    }

    if (targetIndex !== null) {
      e.preventDefault();
      setActiveIndex(targetIndex);
      tabRefs.current[targetIndex]?.focus();
    }
  };

  const scrollToCaseStudy = (caseStudyId: string) => {
    const el = document.getElementById(`project-${caseStudyId}`);
    if (el) {
      const rect = el.getBoundingClientRect();
      const navOffset = 100;
      window.scrollTo({
        top: window.scrollY + rect.top - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mt-28 pt-20 border-t border-white/10" aria-label="Interactive Career Roadmap">
      {/* Roadmap Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div className="space-y-4">
          <p className="text-[#a0a0a5] tracking-widest text-xs font-semibold flex items-center">
            <span className="w-8 h-[1px] bg-[#fec13d] mr-3" aria-hidden="true" />
            Career Trajectory
          </p>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            15+ Years in Systems &amp; Product<span className="text-[#fec13d]">.</span>
          </h3>
          <p className="text-[#a0a0a5] text-sm md:text-base max-w-xl leading-relaxed">
            Select any milestone along the timeline to explore how mathematical rigor evolved into enterprise architecture and independent product ownership.
          </p>
        </div>

        {/* Step Counter & Prev/Next Controls */}
        <div className="flex items-center gap-4 shrink-0">
          <span className="text-sm font-mono tabular-nums text-[#a0a0a5] mr-2">
            <span className="text-white font-semibold">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="mx-1.5 text-white/30">/</span>
            <span>{String(totalMilestones).padStart(2, '0')}</span>
          </span>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous career milestone"
            className="min-h-[44px] min-w-[44px] px-4 py-2 border border-white/15 bg-[#1d1d24] text-white/80 hover:text-[#fec13d] hover:border-[#fec13d]/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fec13d] flex items-center justify-center gap-2 text-xs font-semibold tracking-wide whitespace-nowrap shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Previous</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next career milestone"
            className="min-h-[44px] min-w-[44px] px-4 py-2 border border-white/15 bg-[#1d1d24] text-white/80 hover:text-[#fec13d] hover:border-[#fec13d]/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fec13d] flex items-center justify-center gap-2 text-xs font-semibold tracking-wide whitespace-nowrap shrink-0"
          >
            <span className="hidden sm:inline">Next</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Interactive Horizontal Timeline Track */}
      <div className="relative mb-10">
        {/* Desktop Baseline Track & Animated Progress */}
        <div
          className="hidden lg:block absolute top-[21px] left-8 right-8 h-[1px] bg-white/10 pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            className="h-full bg-[#fec13d] origin-left"
            initial={false}
            animate={{ scaleX: progressRatio }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Milestone Selector Tablist */}
        <div
          role="tablist"
          aria-label="Career milestones"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4"
        >
          {CAREER_MILESTONES.map((milestone, index) => {
            const isActive = index === activeIndex;
            const isCompleted = index < activeIndex;

            return (
              <button
                key={milestone.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`roadmap-tab-${milestone.id}`}
                aria-selected={isActive}
                aria-controls={`roadmap-panel-${milestone.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => handleSelect(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`group relative text-left p-3.5 min-h-[76px] border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fec13d] flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#1d1d24] border-[#fec13d] text-white'
                    : 'bg-[#1d1d24]/50 border-white/10 text-[#a0a0a5] hover:border-white/25 hover:text-white'
                }`}
              >
                {/* Top Node & Year Row */}
                <div className="flex items-center justify-between w-full mb-2">
                  <span
                    className={`w-3 h-3 border transition-colors duration-200 shrink-0 ${
                      isActive
                        ? 'bg-[#fec13d] border-[#fec13d]'
                        : isCompleted
                        ? 'bg-[#fec13d]/30 border-[#fec13d]/70'
                        : 'bg-[#25252d] border-white/25 group-hover:border-white/60'
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`text-xs font-mono tabular-nums font-semibold whitespace-nowrap ${
                      isActive ? 'text-[#fec13d]' : 'text-[#a0a0a5] group-hover:text-white/80'
                    }`}
                  >
                    {milestone.yearLabel}
                  </span>
                </div>

                {/* Milestone Short Label */}
                <div className="min-w-0 w-full">
                  <p
                    className={`text-xs font-bold truncate ${
                      isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
                    }`}
                  >
                    {milestone.organization.replace('.com', '')}
                  </p>
                  <p className="text-[11px] text-[#a0a0a5] truncate mt-0.5">
                    {milestone.domain}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Milestone Detail Stage */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMilestone.id}
          role="tabpanel"
          id={`roadmap-panel-${activeMilestone.id}`}
          aria-labelledby={`roadmap-tab-${activeMilestone.id}`}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#1d1d24] border border-white/10 p-6 sm:p-10 lg:p-12"
        >
          {/* Top Metadata & Outcome Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10 items-start">
            <div className="lg:col-span-8 space-y-3">
              {/* Unboxed Metadata Line */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-[#a0a0a5]">
                <span className="text-[#fec13d] font-mono tabular-nums font-semibold">
                  {activeMilestone.period}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeMilestone.location}</span>
                <span aria-hidden="true">·</span>
                <span>{activeMilestone.domain}</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug [text-wrap:balance]">
                {activeMilestone.role}
              </h4>

              <p className="text-base sm:text-lg font-semibold text-white/80">
                {activeMilestone.organization}
              </p>
            </div>

            {/* Adjacent Outcome Metric */}
            <div className="lg:col-span-4 lg:text-right lg:pl-8 lg:border-l lg:border-white/10 flex flex-col lg:items-end justify-center">
              <span className="text-xs font-medium text-[#a0a0a5] mb-1">
                Milestone Impact
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#fec13d] tracking-tight tabular-nums">
                {activeMilestone.outcomeMetric}
              </span>
              <span className="text-xs text-white/75 mt-1">
                {activeMilestone.outcomeLabel}
              </span>
            </div>
          </div>

          {/* Middle Narrative & Contributions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-8">
            <div className="lg:col-span-5 space-y-6">
              <p className="text-[#a0a0a5] text-base leading-relaxed max-w-[65ch]">
                {activeMilestone.summary}
              </p>

              {/* Unboxed Core Technologies List */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-semibold text-white/70 mb-2.5">
                  Core Technologies &amp; Focus
                </p>
                <p className="text-sm text-[#fec13d]/90 leading-relaxed font-medium">
                  {activeMilestone.stack.join(' · ')}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs font-semibold text-white/70 mb-4">
                Key Contributions &amp; Engineering Scope
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {activeMilestone.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/85 leading-relaxed">
                    <span
                      className="text-xs font-mono tabular-nums text-[#fec13d] mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {activeMilestone.caseStudyId && (
                <button
                  type="button"
                  onClick={() => scrollToCaseStudy(activeMilestone.caseStudyId!)}
                  className="min-h-[44px] px-5 py-2.5 bg-[#fec13d] text-[#1d1d24] hover:bg-[#ffd066] font-bold text-xs tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>View Project Case Study</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              )}

              {activeMilestone.url && (
                <a
                  href={activeMilestone.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-5 py-2.5 border border-white/15 text-white hover:border-[#fec13d] hover:text-[#fec13d] font-semibold text-xs tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fec13d] inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>Visit Live Platform</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="min-h-[44px] px-3 py-2 text-xs font-semibold text-[#a0a0a5] hover:text-[#fec13d] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fec13d] inline-flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>
                {activeIndex < totalMilestones - 1
                  ? `Next: ${CAREER_MILESTONES[activeIndex + 1].yearLabel} · ${CAREER_MILESTONES[activeIndex + 1].organization.replace('.com', '')}`
                  : `Back to Start: ${CAREER_MILESTONES[0].yearLabel}`}
              </span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CareerRoadmap;
