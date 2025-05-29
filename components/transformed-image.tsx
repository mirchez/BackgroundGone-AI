"use client";

import { useAppContext } from "@/context/app-context";
import Image from "next/image";
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import RenderLoading from "./render-loading";

export default function TransformedImage() {
  const { uploadedImageUrl, selectedTransformation, transformationParams } =
    useAppContext();
  const [transformedUrl, setTransformedUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT || "";

  useEffect(() => {
    if (!uploadedImageUrl || !selectedTransformation) {
      return;
    }
    const path = uploadedImageUrl.replace(urlEndpoint, "");
    let trString = `tr=`;
    switch (selectedTransformation) {
      case "bgremove":
        trString += `e-bgremove`;
        break;
      case "changebg":
        if (transformationParams) {
          trString += `e-changebg-prompt-${transformationParams}`;
        }
        break;
    }
    // Build the transformed URL
    const newUrl = `${urlEndpoint}${path}?${trString}`;
    setTransformedUrl(newUrl);
    setIsLoading(true);
  }, [
    uploadedImageUrl,
    selectedTransformation,
    urlEndpoint,
    transformationParams,
  ]);

  const handleDownload = async () => {
    if (!transformedUrl) return;

    try {
      const response = await fetch(transformedUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const blob = await response.blob();
      saveAs(blob, "transformed-image.png");
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="space-y-4">
      {transformedUrl && (
        <div className="aspect-video rounded-md relative bg-gray-200 overflow-hidden">
          {isLoading && <RenderLoading />}
          <Image
            key={transformedUrl}
            src={transformedUrl || ""}
            width={500}
            height={400}
            alt="Enhanced result"
            className="w-full h-full object-contain"
            unoptimized
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
        </div>
      )}
      <div className="p-4 bg-slate-50 rounded-md text-black">
        <p className="text-sm font-medium">Processing URL:</p>
        <p
          className="
        text-xs font-mono break-all mt-2 p-2 bg-slate-100 rounded border border-slate-200
         text-black"
        >
          {transformedUrl || "No URL generated yet."}
        </p>
      </div>

      {/* download button */}
      <button
        onClick={handleDownload}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-md transition-all hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        Download Image
      </button>
    </div>
  );
}
