import { LoaderIcon } from "lucide-react";

export default function RenderLoading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-70">
      <div className="flex flex-col items-center">
        <LoaderIcon className="animate-spin w-8 h-8 text-purple-600" />
        <p className="mt-2 text-sm text-black">Changing Image...</p>
        <p className="text-xs text-slate-500">
          AI Transformations May Take Some Time, Please Be Patient!
        </p>
      </div>
    </div>
  );
}
