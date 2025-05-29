"use client";

import { useAppContext } from "@/context/app-context";
import TransformationControls from "./transformation-controls";

export default function TransformationSection() {
  const { uploadedImageUrl } = useAppContext();

  if (!uploadedImageUrl) {
    return (
      <div className="text-center my-10">
        Please upload an image to see the transformations.
      </div>
    );
  }

  return (
    <div className="mt-8 p-6rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-white">
        Apply AI Transformation
      </h2>
      <TransformationControls />
    </div>
  );
}
