import Container from "./Container";
import SectionHeading from "./SectionHeading";

const stages = [
  {
    label: "Enquiries",
    value: "500",
    note: "Starting point",
    tone: "start" as const,
    description: "Every patient who raised a hand - calls, forms, DMs, walk-ins.",
    width: "lg:w-full",
  },
  {
    label: "Reached",
    value: "240",
    note: "-260 lost",
    tone: "loss" as const,
    description: "Calls and messages go unanswered; the patient is gone by morning.",
    width: "lg:w-[91%]",
  },
  {
    label: "Booked",
    value: "120",
    note: "-120 lost",
    tone: "loss" as const,
    description: "No timely nudge, so consult rooms and OT slots sit half-empty.",
    width: "lg:w-[82%]",
  },
  {
    label: "Consulted",
    value: "70",
    note: "-50 lost",
    tone: "loss" as const,
    description: "Follow-up depends on who remembers; most fall through the cracks.",
    width: "lg:w-[73%]",
  },
  {
    label: "Treated",
    value: "24",
    note: "-46 lost",
    tone: "treated" as const,
    description: "A slow, generic response sends ready patients down the road.",
    width: "lg:w-[64%]",
  },
];

const GrowthLeakSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F3F7FB] py-16 md:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-25 -right-25 size-[420px]"
        style={{
          background:
            "radial-gradient(70.71% 70.71% at 50% 50%, rgba(220, 91, 55, 0.06) 0%, rgba(220, 91, 55, 0) 70%)",
        }}
      />
      <Container className="relative z-10 max-w-[1040px]">
        <SectionHeading
          eyebrow="The Growth Leak"
          title="You can't grow what you can't see."
          description="Without a view of patient behavior, a typical hospital loses most of its enquiries long before anyone notices and every drop-off is revenue walking out the door."
          className="max-w-[620px]"
          titleClassName="md:text-[30px] lg:text-[32px]"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 lg:grid-cols-2 lg:items-center lg:gap-15">
          <ol className="space-y-3">
            {stages.map((stage) => {
              const isStart = stage.tone === "start";

              return (
                <li
                  key={stage.label}
                  className={`flex min-h-[84px] w-full overflow-hidden rounded-xl border bg-white shadow-[0_8px_22px_-18px_hsl(var(--home-heading)/0.55)] ${stage.width} ${
                    stage.tone === "treated"
                      ? "border-[#83d8d2] bg-[#e4f8f6]"
                      : "border-[#dce9f1]"
                  }`}
                  style={
                    isStart
                      ? {
                          background:
                            "linear-gradient(90deg, rgba(13, 92, 148, 0.05) 0%, rgba(13, 148, 136, 0.03) 100%)",
                        }
                      : undefined
                  }
                >
                  {isStart ? (
                    <div className="flex w-full items-center justify-between gap-4 border-r-[1.11px] border-home-success/25 p-4 md:p-5">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="size-2 shrink-0 rounded-full bg-home-heading" />
                          <p className="text-base font-bold text-home-ink">
                            {stage.label}
                          </p>
                        </div>
                        <p className="mt-1 text-[11px] leading-[1.45] text-home-muted md:text-xs">
                          {stage.description}
                        </p>
                      </div>

                      <div className="flex shrink-0 flex-col items-end justify-center text-right leading-none">
                        <p className="text-2xl font-extrabold leading-none tracking-[-0.05em] text-home-heading lg:text-3xl">
                          {stage.value}
                        </p>
                        <p className="mt-2 text-xs rounded bg-home-heading/5 px-2 py-1 font-semibold text-home-heading">
                          {stage.note}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div
                        className="min-w-0 flex-1 p-4 md:p-4"
                        style={
                          stage.tone === "treated"
                            ? {
                                background:
                                  "linear-gradient(90deg, rgba(13, 148, 136, 0.14) 0%, rgba(20, 184, 166, 0.1) 100%)",
                              }
                            : {
                                background:
                                  "linear-gradient(90deg, rgba(13, 92, 148, 0.09) 0%, rgba(13, 148, 136, 0.07) 100%)",
                              }
                        }
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`size-2 shrink-0 rounded-full ${
                              stage.tone === "treated" ? "bg-home-success" : "bg-home-heading"
                            }`}
                          />
                          <p className="text-base font-bold text-home-ink">{stage.label}</p>
                        </div>
                        <p className="mt-1 text-[11px] leading-[1.45] text-home-muted md:text-xs">
                          {stage.description}
                        </p>
                      </div>

                      <div
                        className={`flex w-[112px] shrink-0 flex-col items-center justify-center px-3 text-center border-l ${
                          stage.tone === "treated" ? "border-[#83d8d2]" : "border-[#dce9f1]"
                        }`}
                      >
                        <p
                          className={`text-2xl leading-none font-extrabold lg:text-3xl ${
                            stage.tone === "treated" ? "text-home-success" : "text-home-heading"
                          }`}
                        >
                          {stage.value}
                        </p>
                        <p
                          className={`mt-2 rounded bg-[#fff0eb] px-2 py-1 text-xs font-bold text-home-danger`}
                        >
                          {stage.note}
                        </p>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ol>

          <div className="flex lg:items-center pr-8">
            <div className="w-full overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-30px_hsl(var(--home-heading)/0.5)]">
              <div className="h-1 w-full bg-gradient-to-r from-home-danger via-home-heading to-home-success" />
              <div className="p-7 md:p-8">
              <p className="text-6xl leading-none font-extrabold text-home-heading md:text-7xl lg:8xl">
                476
                <span className="ml-1 text-3xl font-semibold text-home-muted md:text-4xl lg:text-5xl">/500</span>
              </p>

              <p className="mt-3 max-w-sm text-sm leading-relaxed text-home-body">
                patients never reach the procedure table most before anyone in the hospital notices.
              </p>

              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-[#e7eff3]">
                <div className="h-full w-[4.8%] rounded-full bg-home-success" />
              </div>
              <div className="mt-2 flex justify-between text-sm font-bold">
                <span className="text-home-success">4.8% treated</span>
                <span className="text-home-muted">95.2% leaked</span>
              </div>

              <div className="mt-6 border-t border-[#e7eff3] pt-5" />
              <p className="text-base font-semibold leading-relaxed text-home-ink lg:text-lg">
                DecentCare shows you{" "}
                <span className="text-home-success font-bold">exactly where they go</span> and why.
              </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GrowthLeakSection;
