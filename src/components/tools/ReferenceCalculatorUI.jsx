"use client";

import { useId } from "react";
import { Activity, ArrowRight, BookOpen, Check, ChevronDown, CircleAlert, Info, RotateCcw, SlidersHorizontal } from "lucide-react";

export function FormPanel({
  title, description, icon: Icon = SlidersHorizontal, onReset, steps, activeStep,
  onStep, children, callout, actionLabel = "Calculate score", onCalculate, example = true,
}) {
  const headingId = useId();
  const current = activeStep ?? (steps ? steps.length - 1 : 0);
  const submit = (event) => {
    event.preventDefault();
    onCalculate?.();
    if (window.matchMedia("(max-width: 1100px)").matches) {
      document.querySelector(".ref-results")?.scrollIntoView({ block: "start" });
    }
  };

  return (
    <form className="ref-panel ref-form" aria-labelledby={headingId} onSubmit={submit}>
      <div className="ref-form-header">
        <span className="ref-icon-box"><Icon aria-hidden /></span>
        <h2 id={headingId}>{title}</h2>
        <button type="button" className="ref-reset" onClick={onReset}>
          <RotateCcw aria-hidden /> Reset
        </button>
      </div>
      {description && <p className="ref-form-description">{description}</p>}
      {steps?.length > 0 && (
        <ol className="ref-steps" aria-label="Calculator steps">
          {steps.map((step, index) => {
            const content = <><span className="ref-step-icon">{index < current ? <Check aria-hidden /> : index + 1}</span>{step}</>;
            return (
              <li key={step} data-current={index === current} data-complete={index < current} aria-current={index === current ? "step" : undefined}>
                {onStep ? <button type="button" onClick={() => onStep(index)}>{content}</button> : <span>{content}</span>}
              </li>
            );
          })}
        </ol>
      )}
      <div className="ref-form-content">{children}</div>
      {callout && <Callout title={callout.title}>{callout.body}</Callout>}
      <div className="ref-form-footer">
        <button type="submit" className="ref-primary-button">{actionLabel}<ArrowRight aria-hidden /></button>
        <span className="ref-form-state"><Info aria-hidden />{example ? "Example inputs shown" : "Your inputs"}</span>
      </div>
    </form>
  );
}

export function Field({ label, id, value, onChange, options, type = "text", suffix, min, max, step, highlight, warning, wide, children }) {
  return (
    <div className="ref-field" data-wide={wide || undefined}>
      <label htmlFor={id}>{label}</label>
      {children ?? (
        <div className="ref-control" data-highlight={highlight || undefined} data-warning={warning || undefined} data-numeric={type === "number" || undefined}>
          {options ? (
            <>
              <select id={id} value={value ?? ""} onChange={(event) => onChange(event.target.value)}>
                {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
              <ChevronDown className="ref-select-chevron" aria-hidden />
            </>
          ) : (
            <input id={id} type={type} value={value ?? ""} onChange={(event) => onChange(event.target.value)} min={min} max={max} step={step} />
          )}
          {suffix && <span className="ref-suffix" aria-hidden>{suffix}</span>}
        </div>
      )}
    </div>
  );
}

export function SectionLabel({ children }) {
  return <h3 className="ref-section-label">{children}</h3>;
}

export function Callout({ title, children, variant }) {
  const Icon = variant === "book" || variant === "guide" ? BookOpen : Info;
  return (
    <div className="ref-callout">
      <Icon aria-hidden />
      <div><h3>{title}</h3><div className="ref-callout-body">{children}</div></div>
    </div>
  );
}

export function ResultPanel({ children }) {
  return <section className="ref-panel ref-results" aria-label="Calculator results">{children}</section>;
}

const centerX = 170;
const centerY = 121;
const startAngle = -125;
const sweep = 250;
const formatter = new Intl.NumberFormat("en-CA");

function polar(radius, angle) {
  const radians = angle * Math.PI / 180;
  // Keep the SVG path strings identical between server and browser renders.
  // Unrounded floating point tails can differ by a few ULPs and trigger
  // hydration warnings despite producing the same visible gauge.
  return [centerX + radius * Math.sin(radians), centerY - radius * Math.cos(radians)]
    .map((coordinate) => Number(coordinate.toFixed(4)));
}

function arc(radius, start, end) {
  return `M ${polar(radius, start).join(" ")} A ${radius} ${radius} 0 ${end - start > 180 ? 1 : 0} 1 ${polar(radius, end).join(" ")}`;
}

function gaugeSegment(start, end) {
  const outside = arc(95, start, end);
  return `${outside} L ${polar(81, end).join(" ")} A 81 81 0 0 0 ${polar(81, start).join(" ")} Z`;
}

function angleFor(value, min, max) {
  if (!(max > min)) return startAngle;
  return startAngle + sweep * Math.max(0, Math.min(1, (value - min) / (max - min)));
}

function Gauge({ value, max, min, criteria, threshold, ticks, sublabel, unitLabel, centerLabel }) {
  const gradientId = useId();
  const hasValue = typeof value === "number" && Number.isFinite(value);
  const count = criteria?.length || (unitLabel ? 6 : 11);
  const scoreAngle = angleFor(value, min, max);
  const [markerX, markerY] = polar(88, scoreAngle);
  const thresholdAngle = angleFor(threshold, min, max);
  const [thresholdX, thresholdY] = polar(103, thresholdAngle);
  const tickValues = ticks ?? [min, Math.round(min + (max - min) * .25), Math.round((min + max) / 2), Math.round(min + (max - min) * .75), max];

  return (
    <div className="ref-gauge">
      <svg viewBox="0 0 340 193" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="79" x2="254" y1="156" y2="37">
            <stop offset="0" stopColor="var(--ref-arc-low)" />
            <stop offset="1" stopColor="var(--ref-arc-high)" />
          </linearGradient>
        </defs>
        <path className="ref-gauge-outline" d={arc(98, startAngle, startAngle + sweep)} />
        <path className="ref-gauge-outline ref-gauge-outline-inner" d={arc(73.5, startAngle, startAngle + sweep)} />
        {Array.from({ length: count }, (_, index) => {
          const stepAngle = sweep / count;
          const lo = startAngle + index * stepAngle + 1.15;
          const hi = startAngle + (index + 1) * stepAngle - 1.15;
          const item = criteria?.[index];
          const fillTo = item?.status === "provided" ? hi : item || !hasValue ? lo : Math.min(hi, scoreAngle);
          const [cx, cy] = polar(88, (lo + hi) / 2);
          const [lx, ly] = polar(118, (lo + hi) / 2);
          return (
            <g key={item?.label ?? index}>
              <path className="ref-gauge-segment" data-status={item?.status} d={gaugeSegment(lo, hi)} />
              {fillTo > lo && <path d={gaugeSegment(lo, fillTo)} fill={`url(#${gradientId})`} />}
              {item && (
                <>
                  {item.status !== "pending" && (
                    <g className="ref-criteria-marker" data-status={item.status}>
                      <circle cx={cx} cy={cy} r="7" />
                      {item.status === "provided"
                        ? <path d={`M ${cx - 3} ${cy} l 2 2 4 -4`} />
                        : <text x={cx} y={cy + 3.3} textAnchor="middle">!</text>}
                    </g>
                  )}
                  <text className="ref-gauge-tick" data-warning={item.status === "review"} x={lx} y={ly} textAnchor={lx < centerX - 33 ? "end" : lx > centerX + 33 ? "start" : "middle"} dominantBaseline="middle">{item.label}</text>
                </>
              )}
            </g>
          );
        })}
        {!criteria && tickValues.map((tick) => {
          const number = typeof tick === "object" ? tick.value : tick;
          const label = typeof tick === "object" ? tick.label : formatter.format(tick);
          const angle = angleFor(number, min, max);
          const [x, y] = polar(113, angle);
          const [a, b] = polar(99, angle);
          const [c, d] = polar(105, angle);
          const selected = unitLabel && hasValue && Number(value) === number;
          return (
            <g key={number}>
              <path className="ref-gauge-outline" d={`M ${a} ${b} L ${c} ${d}`} />
              {selected && <rect x={x - 9} y={y - 9} width="18" height="17" rx="5" fill="#fff3f5" />}
              <text className="ref-gauge-tick" data-selected={selected || undefined} x={x} y={y} dominantBaseline="middle" textAnchor="middle">{label}</text>
            </g>
          );
        })}
        {!criteria && Number.isFinite(threshold) && <g className="ref-threshold"><path d={`M ${polar(80, thresholdAngle).join(" ")} L ${thresholdX} ${thresholdY}`} /><circle cx={thresholdX} cy={thresholdY} r="2.4" /></g>}
        {!criteria && hasValue && <g className="ref-score-marker"><circle cx={markerX} cy={markerY} r="6.2" fill="#fff6f6" /><circle cx={markerX} cy={markerY} r="2.65" fill="#df1640" /></g>}
      </svg>
      <div className="ref-gauge-text">
        {unitLabel && <span className="ref-gauge-unit">{unitLabel}</span>}
        <strong>{centerLabel ?? (hasValue ? formatter.format(value) : "—")}</strong>
        <span>{sublabel ?? `/ ${formatter.format(max)} points`}</span>
      </div>
    </div>
  );
}

export function ScoreResult({ title, example = true, value, max = 100, sublabel, unitLabel, threshold, ticks, min = 0, criteria, footerLabel, footerValue, warning, centerLabel }) {
  const Icon = criteria ? Check : Activity;
  return (
    <div className="ref-score" aria-live="polite">
      <div className="ref-score-pattern" aria-hidden="true" />
      <div className="ref-score-heading">
        <h2><Icon aria-hidden />{title}</h2>
        <span className="ref-result-badge">{example ? "Example result" : "Your result"}</span>
      </div>
      <Gauge {...{ value, max, sublabel, unitLabel, threshold, ticks, min, criteria, centerLabel }} />
      {(footerLabel || footerValue) && (
        <div className="ref-score-footer" data-warning={warning || undefined}>
          <span>{footerLabel}</span><strong>{footerValue}</strong>
        </div>
      )}
    </div>
  );
}

export function ResultNote({ children }) {
  return children ? <p className="ref-result-note"><Info aria-hidden />{children}</p> : null;
}

export function PointsBreakdown({ rows, note }) {
  return (
    <div className="ref-breakdown">
      <div className="ref-result-heading"><h3>Points breakdown</h3><span>Earned / maximum</span></div>
      <ul className="ref-breakdown-list" data-compact={rows.length >= 5}>
        {rows.map(({ label, points, max }) => {
          const ratio = max > 0 ? Math.min(100, Math.max(0, points / max * 100)) : 0;
          return (
            <li key={label} className="ref-points-row">
              <span>{label}</span>
              <span className="ref-progress" aria-hidden><i style={{ width: `${ratio || 0}%` }} /></span>
              <strong data-zero={!points}>{points ?? "—"}</strong>
              <span className="ref-row-max">{max != null ? `/ ${max}` : ""}</span>
            </li>
          );
        })}
      </ul>
      <ResultNote>{note}</ResultNote>
    </div>
  );
}

export function CriteriaSummary({ rows, note }) {
  return (
    <div className="ref-breakdown">
      <div className="ref-result-heading"><h3>Criteria summary</h3><span>Based on your answers</span></div>
      <ul className="ref-breakdown-list" data-compact={rows.length >= 5}>
        {rows.map(({ label, status }) => {
          const Icon = status === "provided" ? Check : status === "review" ? CircleAlert : Info;
          const wording = status === "provided" ? "Provided" : status === "review" ? "Needs review" : "Not answered";
          return (
            <li key={label} className="ref-criteria-row" data-status={status}>
              <Icon aria-hidden /><span>{label}</span><strong>{wording}</strong>
            </li>
          );
        })}
      </ul>
      <ResultNote>{note}</ResultNote>
    </div>
  );
}
