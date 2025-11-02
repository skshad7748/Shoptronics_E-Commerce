import { Breadcrumbs, Crumb } from "@molecules/Breadcrumbs";

export function PageHeroBar({
  crumbs,
  height = "h-20", // tweak to h-16 / h-24 if you need
}: {
  crumbs: Crumb[];
  height?: string;
}) {
  return (
    <div className={`mb-6 rounded-2xl bg-[#3C1FF4] ${height}`}>
      <div className="mx-auto flex h-full max-w-6xl items-start px-6 py-4">
        <Breadcrumbs items={crumbs} />
      </div>
    </div>
  );
}
