import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  return {
    title: `Author: ${slug} | Blog`,
    description: `Author: ${slug} | Blog`,
  };
}

const AuthorPage = async (props: Props) => {
  const params = await props.params;
  const { slug } = params;

  return (
    <>
      <Breadcrumb pageTitle={slug} />

      <section className="pb-17.5 pt-20 lg:pb-22.5 lg:pt-25 xl:pb-27.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white/80">
            Author content is disabled in this deployment build.
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorPage;
