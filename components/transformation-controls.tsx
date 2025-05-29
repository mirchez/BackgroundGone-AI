"use client";

import { useAppContext } from "@/context/app-context";
import { type ChangeEvent, useState } from "react";
import { Wand2 } from "lucide-react";

const transformationOptions = [
  {
    id: "bgremove",
    name: "Remove Background (Standard)",
    description: "Cost-efficient background removal",
  },
  {
    id: "changebg",
    name: "Change Background",
    description: "Replace the background with a new one from text prompt",
    params: [
      {
        id: "prompt",
        name: "Background Prompt",
        type: "text",
      },
    ],
  },
];

export default function TransformationControls() {
  const {
    selectedTransformation,
    setSelectedTransformation,
    setTransformationParams,
  } = useAppContext();
  const [params, setParams] = useState<string>("");
  console.log(params);

  const handleTransformationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTransformation(e.target.value);
  };

  const selectedOption = transformationOptions.find(
    (option) => option.id === selectedTransformation
  );

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 shadow-lg backdrop-blur-sm p-6 space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Wand2 className="h-5 w-5 text-purple-400" />
          Apply AI Transformation
        </h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Select Transformation
        </label>
        <select
          value={selectedTransformation || ""}
          onChange={handleTransformationChange}
          className="w-full block pl-3 pr-10 py-2.5 border border-slate-700 bg-slate-800 text-slate-200 rounded-lg shadow focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none"
        >
          <option value="" className="bg-slate-800 text-slate-300">
            Select a transformation
          </option>
          {transformationOptions.map((option) => (
            <option
              key={option.id}
              value={option.id}
              className="bg-slate-800 text-slate-200"
            >
              {option.name}
            </option>
          ))}
        </select>

        {selectedOption && (
          <p className="mt-2 text-xs text-slate-400">
            {selectedOption.description}
          </p>
        )}
      </div>

      {selectedOption?.params && selectedOption.params.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-slate-300">Parameters</h3>
          <div className="rounded-md border border-slate-700 bg-slate-800/50 p-4">
            {selectedOption.params.map((param) => (
              <div key={param.id} className="space-y-2">
                <label
                  htmlFor={param.id}
                  className="block text-xs text-slate-400 mb-1"
                >
                  {param.name}
                </label>
                <input
                  type={param.type}
                  id={param.id}
                  value={params}
                  onChange={(e) => setParams(e.target.value)}
                  name={param.id}
                  placeholder="Describe the background you want..."
                  className="w-full border border-slate-700 bg-slate-800 text-slate-200 rounded-md shadow-sm py-2 px-3 placeholder:text-slate-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end border-t border-slate-800 pt-4 mt-4">
            <button
              onClick={() => {
                if (params) {
                  setTransformationParams(params);
                }
              }}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-md transition-all hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Apply Effect
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
