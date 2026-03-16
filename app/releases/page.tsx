import { getReleases } from "@/lib/releases";
import ReleasesClient from "@/components/Releases/ReleasesClient";

export default async function ReleasesPage() {
  const releases = await getReleases();

  return (
    // MERGED: Added 'w-full' from main, kept 'pb-32' and 'space-y-6' from your fix
    <div className="mx-auto w-full max-w-5xl px-4 pt-10 pb-32 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#4169E1]">
          Releases
        </h1>
        <p className="text-sm text-zinc-500 mt-1">
          Celebrating contributors across Bude Global Enterprise releases
        </p>
      </div>

      <ReleasesClient releases={releases} />
    </div>
  );
}