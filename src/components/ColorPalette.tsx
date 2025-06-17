"use client";

import React, { useState } from "react";
import { Lock, Unlock, Copy, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ColorSwatchProps {
  color: string;
  format: "hex" | "rgb" | "hsl";
  locked: boolean;
  onLockToggle: () => void;
  onColorChange: (newColor: string) => void;
  onCopy: () => void;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  color = "#FFFFFF",
  format = "hex",
  locked = false,
  onLockToggle = () => {},
  onColorChange = () => {},
  onCopy = () => {},
}) => {
  // Format the color code based on the selected format
  const getFormattedColor = () => {
    if (format === "hex") return color;

    // Convert hex to RGB
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    if (format === "rgb") return `rgb(${r}, ${g}, ${b})`;

    // Convert RGB to HSL
    const r1 = r / 255;
    const g1 = g / 255;
    const b1 = b / 255;

    const max = Math.max(r1, g1, b1);
    const min = Math.min(r1, g1, b1);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r1:
          h = (g1 - b1) / d + (g1 < b1 ? 6 : 0);
          break;
        case g1:
          h = (b1 - r1) / d + 2;
          break;
        case b1:
          h = (r1 - g1) / d + 4;
          break;
        default:
          h = 0;
      }
      h /= 6;
    }

    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  };

  return (
    <div className="group flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div
        className="h-48 w-full relative rounded-t-2xl"
        style={{ backgroundColor: color }}
      >
        <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-background/80 backdrop-blur-md hover:bg-background/90 border border-border/50 shadow-sm h-8 w-8"
                  onClick={onLockToggle}
                >
                  {locked ? (
                    <Lock className="h-3.5 w-3.5" />
                  ) : (
                    <Unlock className="h-3.5 w-3.5" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{locked ? "Unlock color" : "Lock color"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {!locked && (
          <input
            type="color"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
          />
        )}
      </div>
      <div className="p-5 flex justify-between items-center bg-card/50 backdrop-blur-sm">
        <span className="font-mono text-sm font-medium text-foreground/80 tracking-wide">
          {getFormattedColor()}
        </span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent/50 h-8 w-8 transition-colors duration-200"
                onClick={onCopy}
              >
                <Copy className="h-3.5 w-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy to clipboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

interface ColorPaletteProps {
  colors?: string[];
  format?: "hex" | "rgb" | "hsl";
  onColorChange?: (index: number, newColor: string) => void;
  onGenerateNew?: () => void;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({
  colors = ["#F9ED69", "#F08A5D", "#B83B5E", "#6A2C70", "#08D9D6"],
  format = "hex",
  onColorChange = () => {},
  onGenerateNew = () => {},
}) => {
  const [lockedColors, setLockedColors] = useState<boolean[]>(
    Array(colors.length).fill(false),
  );

  const handleLockToggle = (index: number) => {
    const newLockedColors = [...lockedColors];
    newLockedColors[index] = !newLockedColors[index];
    setLockedColors(newLockedColors);
  };

  const handleColorChange = (index: number, newColor: string) => {
    onColorChange(index, newColor);
  };

  const handleCopy = (color: string, format: "hex" | "rgb" | "hsl") => {
    let textToCopy = color;

    if (format !== "hex") {
      // Convert hex to RGB
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);

      if (format === "rgb") {
        textToCopy = `rgb(${r}, ${g}, ${b})`;
      } else if (format === "hsl") {
        // Convert RGB to HSL
        const r1 = r / 255;
        const g1 = g / 255;
        const b1 = b / 255;

        const max = Math.max(r1, g1, b1);
        const min = Math.min(r1, g1, b1);
        let h,
          s,
          l = (max + min) / 2;

        if (max === min) {
          h = s = 0;
        } else {
          const d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

          switch (max) {
            case r1:
              h = (g1 - b1) / d + (g1 < b1 ? 6 : 0);
              break;
            case g1:
              h = (b1 - r1) / d + 2;
              break;
            case b1:
              h = (r1 - g1) / d + 4;
              break;
            default:
              h = 0;
          }
          h /= 6;
        }

        textToCopy = `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
      }
    }

    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <div className="w-full bg-gradient-to-br from-background to-muted/20 p-8 rounded-3xl border border-border/30 shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Color Palette
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            Create beautiful color combinations
          </p>
        </div>
        <Button
          variant="default"
          onClick={onGenerateNew}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 bg-gradient-to-r from-primary to-primary/90"
        >
          <RefreshCw className="h-4 w-4" />
          Generate New
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {colors.map((color, index) => (
          <ColorSwatch
            key={index}
            color={color}
            format={format}
            locked={lockedColors[index]}
            onLockToggle={() => handleLockToggle(index)}
            onColorChange={(newColor) => handleColorChange(index, newColor)}
            onCopy={() => handleCopy(color, format)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
