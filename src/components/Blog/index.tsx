import SectionTitle from "../Common/SectionTitle";

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-25">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Read Our Latest Blogs"
          title="Latest Blogs & News"
          paragraph="Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."
        />

        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white/80">
          Blog content is disabled in this deployment build.
        </div>
      </div>
    </section>
  );
}
