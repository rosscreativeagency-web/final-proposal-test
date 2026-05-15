import { proposalChapters } from "@/data/proposal";

const chapterMap = Object.fromEntries(proposalChapters.map((chapter) => [chapter.id, chapter]));

const renderBullets = (items: string[]) => (
  <ul className="space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function Home() {
  const intro = chapterMap.introduction;
  const why = chapterMap.why;
  const overview = chapterMap.overview;
  const audience = chapterMap.audience;
  const foundation = chapterMap.foundation;
  const structure = chapterMap.structure;
  const awareness = chapterMap.awareness;
  const positioning = chapterMap.positioning;
  const advertising = chapterMap.advertising;
  const sell = chapterMap.sell;
  const kpi = chapterMap.kpi;
  const outcome = chapterMap.outcome;

  return (
    <main className="bg-zinc-950 text-zinc-100">
      <section className="mx-auto min-h-[80vh] max-w-6xl px-6 py-24 md:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">SPM Proposal</p>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">{intro.englishTitle}</h1>
        <p className="mt-8 max-w-4xl text-lg leading-10 text-zinc-200">{intro.persianNarrative}</p>
      </section>

      <section className="grid gap-8 bg-zinc-100 px-6 py-20 text-zinc-900 md:grid-cols-2 md:px-12">
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">{why.englishTitle}</h2>
          <p className="mt-5 text-lg leading-9">{why.persianNarrative}</p>
        </article>
        <article className="rounded-3xl bg-zinc-900 p-8 text-zinc-100">
          <h3 className="text-2xl font-semibold">{why.sections?.[0]?.englishHeading}</h3>
          <p className="mt-4 text-zinc-300">{why.sections?.[0]?.persianLead}</p>
          <div className="mt-4">{renderBullets(why.sections?.[0]?.bullets ?? [])}</div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-semibold">{overview.englishTitle}</h2>
        <p className="mt-5 text-lg leading-9 text-zinc-300">{overview.persianNarrative}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {overview.sections?.map((section) => (
            <article key={section.englishHeading} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold text-emerald-300">{section.englishHeading}</h3>
              <div className="mt-4">{renderBullets(section.bullets)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-emerald-50 to-white px-6 py-24 text-zinc-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold">{audience.englishTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {audience.sections?.map((section, i) => (
              <article key={`${section.englishHeading}-${i}`} className={`rounded-2xl p-6 ${i % 2 === 0 ? "bg-white" : "bg-zinc-900 text-zinc-100"}`}>
                <h3 className="text-2xl font-semibold">{section.englishHeading}</h3>
                {section.persianLead ? <p className="mt-4">{section.persianLead}</p> : null}
                <div className="mt-4">{renderBullets(section.bullets)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-24 md:grid-cols-[1.1fr_1fr]">
        <div className="md:sticky md:top-12 md:self-start">
          <h2 className="text-4xl font-semibold">{foundation.englishTitle}</h2>
          <p className="mt-5 text-lg leading-9 text-zinc-300">{foundation.persianNarrative}</p>
        </div>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <h3 className="text-2xl font-semibold text-emerald-300">{foundation.sections?.[0]?.englishHeading}</h3>
          <div className="mt-5">{renderBullets(foundation.sections?.[0]?.bullets ?? [])}</div>
        </div>
      </section>

      <section className="bg-zinc-100 px-6 py-24 text-zinc-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold">{structure.englishTitle}</h2>
          <div className="mt-12 space-y-8 border-s-2 border-emerald-500 ps-6">
            {structure.sections?.map((section) => (
              <article key={section.englishHeading} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-semibold">{section.englishHeading}</h3>
                {section.persianLead ? <p className="mt-3 text-zinc-700">{section.persianLead}</p> : null}
                <div className="mt-4">{renderBullets(section.bullets)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {[
        awareness,
        positioning,
        advertising,
        sell,
      ].map((chapter, idx) => (
        <section key={chapter.id} className={`px-6 py-24 ${idx % 2 ? "bg-zinc-100 text-zinc-900" : "bg-zinc-950 text-zinc-100"}`}>
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-semibold">{chapter.englishTitle}</h2>
            {chapter.persianNarrative ? <p className="mt-5 text-lg leading-9">{chapter.persianNarrative}</p> : null}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {chapter.sections?.map((section) => (
                <article key={section.englishHeading} className={`rounded-2xl p-6 ${idx % 2 ? "bg-white" : "bg-zinc-900"}`}>
                  <h3 className="text-xl font-semibold text-emerald-400">{section.englishHeading}</h3>
                  {section.persianLead ? <p className="mt-3 text-sm">{section.persianLead}</p> : null}
                  <div className="mt-4">{renderBullets(section.bullets)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-emerald-600 px-6 py-20 text-emerald-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold">{kpi.englishTitle}</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-6">
            {kpi.sections?.[0]?.bullets.map((metric) => (
              <div key={metric} className="rounded-xl bg-emerald-700/50 p-4 text-center text-lg font-semibold">
                {metric}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-semibold">{outcome.englishTitle}</h2>
        <p className="mt-5 text-lg text-zinc-300">{outcome.persianNarrative}</p>
        <div className="mt-8 rounded-3xl border border-emerald-700 bg-zinc-900 p-8">
          {renderBullets(outcome.sections?.[0]?.bullets ?? [])}
        </div>
      </section>
    </main>
  );
}
