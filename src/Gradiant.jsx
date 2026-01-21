import { useState } from "react";
import { InputColorTypeColor } from "./components/InputColorTypeColor";
import { InputColorTypeText } from "./components/InputColorTypeText";
import { Range } from "./components/Range";

export default function Gradiant() {
  const [colorLeft, setColorLeft] = useState("#85FFBD");
  const [colorRight, setColorRight] = useState("#400040");
  const [angle, setAngle] = useState(160);
  const [stopLeft, setStopLeft] = useState(0);
  const [stopRight, setStopRight] = useState(100);

  const [presets] = useState([
    {
      id: 1,
      name: "Ocean Breeze",
      deg: "45deg",
      colorLeft: "#0093E9",
      stopLeft: "0",
      colorRight: "#80D0C7",
      stopRight: "100",
    },
    {
      id: 2,
      name: "Sunset Vibes",
      deg: "135deg",
      colorLeft: "#FBAB7E",
      stopLeft: "0",
      colorRight: "#F7CE68",
      stopRight: "100",
    },
    {
      id: 3,
      name: "Deep Purple",
      deg: "160deg",
      colorLeft: "#85FFBD",
      stopLeft: "0",
      colorRight: "#FFFB7D",
      stopRight: "100",
    },
    {
      id: 4,
      name: "Midnight City",
      deg: "225deg",
      colorLeft: "#2c3e50",
      stopLeft: "0",
      colorRight: "#000000",
      stopRight: "100",
    },
    {
      id: 5,
      name: "Lush Green",
      deg: "90deg",
      colorLeft: "#02fbff",
      stopLeft: "0",
      colorRight: "#7dff7d",
      stopRight: "100",
    },
    {
      id: 6,
      name: "Sweet Candy",
      deg: "45deg",
      colorLeft: "#FF3CAC",
      stopLeft: "0",
      colorRight: "#784BA0",
      stopRight: "100",
    },
    {
      id: 7,
      name: "Digital Gold",
      deg: "320deg",
      colorLeft: "#F4D03F",
      stopLeft: "0",
      colorRight: "#16A085",
      stopRight: "100",
    },
    {
      id: 8,
      name: "Soft Cherry",
      deg: "10deg",
      colorLeft: "#FF9A8B",
      stopLeft: "0",
      colorRight: "#FF6A88",
      stopRight: "100",
    },
    {
      id: 9,
      name: "Nordic Frost",
      deg: "180deg",
      colorLeft: "#A9C9FF",
      stopLeft: "0",
      colorRight: "#FFBBEC",
      stopRight: "100",
    },
    {
      id: 10,
      name: "Volcano",
      deg: "45deg",
      colorLeft: "#FF5F6D",
      stopLeft: "0",
      colorRight: "#FFC371",
      stopRight: "100",
    },
  ]);

  return (
    <>
      {/* PREVIEW BOX */}
      <div
        className="w-full h-52 md:h-80 rounded-3xl shadow-2xl mb-10 border-4 border-white transition-all duration-500 sticky top-0 z-10"
        style={{
          backgroundImage: `linear-gradient(${angle}deg, ${colorLeft} ${stopLeft}%, ${colorRight} ${stopRight}%)`,
        }}
      ></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN: COLORS & STOPS */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-8">
          <h3 className="font-bold uppercase text-xs tracking-widest opacity-50">
            Color Settings
          </h3>

          {/* Control Group 1 */}
          <div className="space-y-4">
            <div className="flex gap-2">
              <InputColorTypeColor
                colorValue={colorLeft}
                handleChange={setColorLeft}
              ></InputColorTypeColor>
              <InputColorTypeText
                colorValue={colorLeft}
                handleChange={setColorLeft}
              ></InputColorTypeText>
            </div>
            <div className="px-2">
              <Range
                value={stopLeft}
                handleChange={setStopLeft}
                max={100}
                label="Position"
              ></Range>
            </div>
          </div>

          {/* Control Group 2 */}
          <div className="space-y-4">
            <div className="flex gap-2">
              <InputColorTypeColor
                colorValue={colorRight}
                handleChange={setColorRight}
              ></InputColorTypeColor>
              <InputColorTypeText
                colorValue={colorRight}
                handleChange={setColorRight}
              ></InputColorTypeText>
            </div>
            <div className="px-2">
              <Range
                value={stopRight}
                handleChange={setStopRight}
                max={100}
                label="Position"
              ></Range>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ANGLE & CODE */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold uppercase text-xs tracking-widest opacity-50 mb-6 flex justify-between">
              Global Rotation <span>{angle}°</span>
            </h3>
            <input
              type="range"
              min="0"
              max="360"
              value={angle}
              onChange={(e) => setAngle(e.target.value)}
              className="range range-xs range-neutral w-full"
            />
          </div>

          <div className="mockup-code bg-slate-900 text-slate-300 w-full shadow-2xl overflow-x-auto text-xs md:text-sm">
            <pre data-prefix=">">
              <code>/* Copy-paste to your CSS */</code>
            </pre>
            <pre data-prefix=">">
              <code className="text-white">
                background-image: linear-gradient({angle}deg, {colorLeft}{" "}
                {stopLeft}%, {colorRight} {stopRight}%);
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* PRESETS */}
      <div className="mt-12">
        <h3 className="font-bold uppercase text-xs tracking-widest opacity-40 mb-6">
          Luminacolors Gallery
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-3">
          {presets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => {
                setColorLeft(preset.colorLeft);
                setColorRight(preset.colorRight);
                setAngle(preset.deg.replace("deg", ""));
                setStopLeft(preset.stopLeft);
                setStopRight(preset.stopRight);
              }}
              className="h-14 rounded-xl border-2 border-white shadow-sm hover:scale-110 active:scale-95 transition-all"
              style={{
                backgroundImage: `linear-gradient(${preset.deg}, ${preset.colorLeft}, ${preset.colorRight})`,
              }}
              title={preset.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
