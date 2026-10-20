"use client";

import dynamic from "next/dynamic";

const PnpProgramExperience = dynamic(() => import("./PnpProgramExperience"));

export default function PnpProgramExperienceGate({ program, programs, programOptions }) {
  return <PnpProgramExperience program={program} programs={programs} programOptions={programOptions} />;
}
