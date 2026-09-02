import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | AI Tool - Next.js Template for AI Tools",
  description: "This is Blog page for AI Tool",
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumb pageTitle="Blog Grid" />

      <section className="pb-17.5 pt-20 lg:pb-22.5 lg:pt-25 xl:pb-27.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white/80">
            Blog content is disabled in this deployment build.
          </div>
        </div>
      </section>
    </>
  );
}
