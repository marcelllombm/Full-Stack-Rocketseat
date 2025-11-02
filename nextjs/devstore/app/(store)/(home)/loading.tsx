import { Skeleton } from "@/app/components/skeleton";

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="col-span-6 grid-rows-6 gap-6 h-[856px] " />
      <Skeleton className="col-span-3 grid-rows-3 " />
      <Skeleton className="col-span-3 grid-rows-3 " />
    </div>
  );
}
