import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(_props: Props): Promise<Metadata> {
  return {
    title: "Blog Post | AI Tool",
    description: "Blog content is disabled in this deployment build.",
  };
}

export default async function BlogDetails(_props: Props) {
  return (
    <>
      <Breadcrumb pageTitle="Blog Details" />
      <section className="pb-17.5 pt-20 lg:pb-22.5 lg:pt-25 xl:pb-27.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white/80">
            Blog post content is disabled in this deployment build.
          </div>
        </div>
      </section>
    </>
  );
}
