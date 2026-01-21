import { useState } from "react";
import { InputColorTypeColor } from "./components/InputColorTypeColor";
import { InputColorTypeText } from "./components/InputColorTypeText";

export default function Shadow() {
  // offset-x offset-y blur-radius spread-radius color inset;

  const [offsetX, setOffsetX] = useState(4);
  const [offsetY, setOffsetY] = useState(8);
  const [blurRadius, setBlurRadius] = useState(20);

  const [color, setColor] = useState("#454545");
  const [alpha, setAlpha] = useState(0.12);

  const [blurSpreadRadius, setSpreadRadius] = useState(null);
  const [inset, setInset] = useState(null);

  const [backgroundColorContainer, setBackgroundColorContainer] =
    useState("#ffffff");

  const [backgroundColorBox, setBackgroundColorBox] = useState("#ffffff");

  const [textColor, setTextColor] = useState("#1f2937");

  const [text, setText] = useState("Hello World!");

  const colorRgba = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
    color.slice(3, 5),
    16
  )}, ${parseInt(color.slice(5, 7), 16)}, ${alpha})`;

  return (
    <>
      {/* ================= PREVIEW ================= */}
      <section className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-10">
        <div
          className="w-full lg:w-6/12 p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-10 flex justify-center items-center"
          style={{ backgroundColor: `${backgroundColorContainer}` }}
        >
          <div
            className="w-full sm:w-8/12 lg:w-7/12 h-20 rounded-xl flex items-center justify-center transition-all duration-500"
            style={{
              boxShadow: `${offsetX}px ${offsetY}px ${blurRadius}px ${colorRgba}`,
              backgroundColor: backgroundColorBox,
            }}
          >
            <p
              className="text-sm sm:text-base lg:text-lg font-medium tracking-tight transition-all duration-500"
              style={{ color: textColor }}
            >
              {text}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-6/12">
          <div className="mockup-code bg-slate-900 text-slate-300 w-full shadow-2xl overflow-x-auto text-[10px] sm:text-xs md:text-sm">
            <pre data-prefix=">">
              <code>/* Copy-paste to your CSS */</code>
            </pre>
            <pre data-prefix=">">
              <code className="text-white">
                box-shadow: {offsetX}px {offsetY}px {blurRadius}px {colorRgba}
              </code>
            </pre>
          </div>

          <div className="my-5">
            <InputColorTypeText
              className="w-full"
              colorValue={text}
              handleChange={setText}
            />
          </div>
        </div>
      </section>

      {/* ================= CONTROLS ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        {/* COLORS */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-10">
          <h3 className="text-xs font-medium uppercase tracking-widest text-slate-400">
            Colors
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-4">
                Container
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <InputColorTypeColor
                  colorValue={backgroundColorContainer}
                  handleChange={setBackgroundColorContainer}
                />
                <InputColorTypeText
                  colorValue={backgroundColorContainer}
                  handleChange={setBackgroundColorContainer}
                />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-4">
                Box
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <InputColorTypeColor
                  colorValue={backgroundColorBox}
                  handleChange={setBackgroundColorBox}
                />
                <InputColorTypeText
                  colorValue={backgroundColorBox}
                  handleChange={setBackgroundColorBox}
                />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-4">
                Text
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <InputColorTypeColor
                  colorValue={textColor}
                  handleChange={setTextColor}
                />
                <InputColorTypeText
                  colorValue={textColor}
                  handleChange={setTextColor}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SHADOW */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-10">
          <h3 className="text-xs font-medium uppercase tracking-widest text-slate-400">
            Shadow
          </h3>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p className="text-xs uppercase text-slate-500 font-medium w-24">
                Offset X
              </p>
              <InputColorTypeText
                colorValue={offsetX}
                handleChange={setOffsetX}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p className="text-xs uppercase text-slate-500 font-medium w-24">
                Offset Y
              </p>
              <InputColorTypeText
                colorValue={offsetY}
                handleChange={setOffsetY}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p className="text-xs uppercase text-slate-500 font-medium w-24">
                Blur
              </p>
              <InputColorTypeText
                colorValue={blurRadius}
                handleChange={setBlurRadius}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p className="text-xs uppercase text-slate-500 font-medium w-24">
                Color
              </p>
              <InputColorTypeColor colorValue={color} handleChange={setColor} />
              <InputColorTypeText colorValue={color} handleChange={setColor} />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p className="text-xs uppercase text-slate-500 font-medium w-24">
                Alpha
              </p>
              <InputColorTypeText colorValue={alpha} handleChange={setAlpha} />
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
