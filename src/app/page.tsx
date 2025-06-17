"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Palette,
  Sparkles,
  Download,
  Heart,
  RefreshCw,
  Lock,
  Copy,
} from "lucide-react";
import ColorPalette from "@/components/ColorPalette";
import PaletteControls from "@/components/PaletteControls";
import SavedPalettes from "@/components/SavedPalettes";

export type ColorFormat = "hex" | "rgb" | "hsl";
export type HarmonyRule = "complementary" | "analogous" | "triadic" | "random";
export type ColorInfo = {
  value: string;
  locked: boolean;
};

export default function Home() {
  const [colors, setColors] = useState<ColorInfo[]>([
    { value: "#FF5733", locked: false },
    { value: "#33FF57", locked: false },
    { value: "#3357FF", locked: false },
    { value: "#F3FF33", locked: false },
    { value: "#FF33F3", locked: false },
  ]);

  const [colorFormat, setColorFormat] = useState<ColorFormat>("hex");
  const [harmonyRule, setHarmonyRule] = useState<HarmonyRule>("random");
  const [savedPalettes, setSavedPalettes] = useState<ColorInfo[][]>([]);
  const [showApp, setShowApp] = useState(false);

  // Generate a new palette when the page loads
  useEffect(() => {
    generateNewPalette();
  }, []);

  // Function to generate a random color in HEX format
  const generateRandomColor = (): string => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  };

  // Function to generate a new palette based on harmony rules
  const generateNewPalette = () => {
    // For now, just generate random colors for each unlocked color
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.locked ? color : { ...color, value: generateRandomColor() },
      ),
    );
  };

  // Function to toggle lock status of a color
  const toggleLock = (index: number) => {
    setColors((prevColors) =>
      prevColors.map((color, i) =>
        i === index ? { ...color, locked: !color.locked } : color,
      ),
    );
  };

  // Function to update a specific color
  const updateColor = (index: number, newColor: string) => {
    setColors((prevColors) =>
      prevColors.map((color, i) =>
        i === index ? { ...color, value: newColor } : color,
      ),
    );
  };

  // Function to save the current palette
  const savePalette = () => {
    setSavedPalettes((prev) => [...prev, [...colors]]);
  };

  // Function to load a saved palette
  const loadPalette = (paletteIndex: number) => {
    if (savedPalettes[paletteIndex]) {
      setColors(savedPalettes[paletteIndex]);
    }
  };

  // Function to delete a saved palette
  const deletePalette = (paletteIndex: number) => {
    setSavedPalettes((prev) =>
      prev.filter((_, index) => index !== paletteIndex),
    );
  };

  if (!showApp) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
            <div className="text-center">
              {/* Floating Color Circles Animation */}
              <div className="relative mb-8">
                <div className="flex justify-center items-center space-x-4 mb-6">
                  <div className="w-4 h-4 bg-red-400 rounded-full animate-bounce"></div>
                  <div className="w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-bounce delay-200 shadow-lg">
                    <Palette className="h-5 w-5 text-white m-1.5" />
                  </div>
                  <div className="w-6 h-6 bg-green-400 rounded-full animate-bounce delay-300"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-400"></div>
                </div>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                  Color
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  Palette
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  Magic
                </span>
              </h1>

              <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
                Transform your designs with
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  {" "}
                  stunning color combinations
                </span>
                .
                <br className="hidden md:block" />
                Generate, lock, and export palettes in seconds.
              </p>

              {/* Interactive Feature Pills */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-purple-200 dark:border-purple-800 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">
                      Smart AI Generation
                    </span>
                  </div>
                </div>
                <div className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Lock className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">
                      Lock & Customize
                    </span>
                  </div>
                </div>
                <div className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-green-200 dark:border-green-800 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Download className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">
                      Export Anywhere
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="group px-10 py-5 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transform hover:scale-105 hover:-translate-y-1"
                  onClick={() => setShowApp(true)}
                >
                  <Palette className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Start Creating Magic
                  <Sparkles className="h-5 w-5 ml-2 group-hover:scale-125 transition-transform duration-300" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group px-10 py-5 text-xl font-bold rounded-2xl border-3 border-slate-300 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-500 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  onClick={() => {
                    generateNewPalette();
                    setShowApp(true);
                  }}
                >
                  <RefreshCw className="h-6 w-6 mr-3 group-hover:rotate-180 transition-transform duration-500" />
                  Try Random Palette
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Preview Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Watch the Magic
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light">
              Click anywhere on the palette below to see instant color
              generation
            </p>
          </div>

          {/* Enhanced Interactive Palette */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <Card className="relative overflow-hidden shadow-3xl border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-5 h-48 md:h-56">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className="relative group/color cursor-pointer transition-all duration-500 hover:scale-110 hover:z-10 hover:shadow-2xl"
                      style={{ backgroundColor: color.value }}
                      onClick={() => {
                        generateNewPalette();
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/color:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover/color:translate-y-0 transition-transform duration-300">
                          <RefreshCw className="h-8 w-8 text-white drop-shadow-lg animate-spin" />
                        </div>
                      </div>
                      {/* Floating color code */}
                      <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover/color:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-mono font-bold text-center shadow-lg">
                          {color.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-8 bg-gradient-to-r from-white/95 to-slate-50/95 dark:from-slate-900/95 dark:to-slate-800/95 backdrop-blur-sm">
                  <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {colors.map((color, index) => (
                      <div
                        key={index}
                        className="group/badge bg-white dark:bg-slate-800 rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
                      >
                        <div className="flex items-center space-x-2">
                          <div
                            className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                            style={{ backgroundColor: color.value }}
                          ></div>
                          <span className="font-mono text-sm font-semibold text-slate-700 dark:text-slate-200">
                            {color.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="text-slate-600 dark:text-slate-300 text-lg font-medium mb-2">
                      ✨ Click any color to generate a new palette instantly
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Experience the power of intelligent color generation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="relative bg-gradient-to-br from-slate-100/50 to-blue-50/30 dark:from-slate-900/50 dark:to-blue-950/30 py-24">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, rgba(139, 92, 246, 0.3) 2px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Why Designers
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Love This Tool
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light">
                Professional-grade features that make color selection effortless
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <Card className="relative text-center p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <Sparkles className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">
                    AI-Powered Magic
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Advanced algorithms create perfect color harmonies using
                    complementary, triadic, and analogous rules
                  </p>
                </Card>
              </div>

              {/* Feature 2 */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <Card className="relative text-center p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <Lock className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">
                    Smart Locking
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Lock your favorite colors and let AI generate perfect
                    companions around them
                  </p>
                </Card>
              </div>

              {/* Feature 3 */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <Card className="relative text-center p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <Copy className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-bounce"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">
                    Universal Formats
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Copy colors in HEX, RGB, HSL formats - perfect for any
                    design tool or workflow
                  </p>
                </Card>
              </div>

              {/* Feature 4 */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <Card className="relative text-center p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <Download className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full animate-spin"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">
                    Export Everything
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Download as images, JSON data, or CSS variables - ready for
                    any project
                  </p>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-20">
              <div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setShowApp(true)}
              >
                <span>Ready to create amazing palettes?</span>
                <Sparkles className="h-5 w-5 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-8 bg-background">
      <div className="w-full max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Color Palette Generator
            </h1>
            <p className="text-muted-foreground">
              Create beautiful color combinations for your design projects
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => setShowApp(false)}
            className="hidden md:flex"
          >
            Back to Home
          </Button>
        </div>

        <div className="space-y-8">
          <ColorPalette
            colors={colors.map((c) => c.value)}
            format={colorFormat}
            lockedColors={colors.map((c) => c.locked)}
            onColorChange={updateColor}
            onGenerateNew={generateNewPalette}
            onLockToggle={toggleLock}
          />

          <PaletteControls
            onGeneratePalette={(rule) => {
              setHarmonyRule(rule as HarmonyRule);
              generateNewPalette();
            }}
            onFormatChange={(format) => setColorFormat(format as ColorFormat)}
            onSavePalette={savePalette}
            onExportPalette={(format) => {
              console.log(`Exporting as ${format}`);
            }}
          />

          {savedPalettes.length > 0 && (
            <SavedPalettes
              palettes={savedPalettes.map((palette, index) => ({
                id: index.toString(),
                name: `Palette ${index + 1}`,
                colors: palette.map((c) => c.value),
              }))}
              onSelect={(palette) => {
                const paletteIndex = parseInt(palette.id);
                loadPalette(paletteIndex);
              }}
              onDelete={(id) => {
                const paletteIndex = parseInt(id);
                deletePalette(paletteIndex);
              }}
              onExport={(palette) => {
                console.log("Exporting palette:", palette);
              }}
            />
          )}
        </div>
      </div>
    </main>
  );
}
