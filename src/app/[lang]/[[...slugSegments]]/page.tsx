import { notFound } from "next/navigation";

import { AppRouterParams } from "@/types";

const Page = ({ params }: { params: AppRouterParams }) => {
  if (params.slugSegments?.length && params.slugSegments[0] === "404")
    notFound();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-4 text-lg font-semibold">
        Hello to{" "}
        <code className="rounded-sm bg-gray-200 px-1 font-mono">
          {params.lang}
        </code>{" "}
        speakers!
      </h1>
      <p>
        Slug:{" "}
        <code className="rounded-sm bg-gray-200 px-1 font-mono">
          /{params.slugSegments?.join("/")}
        </code>
      </p>
    </main>
  );
};

export default Page;
