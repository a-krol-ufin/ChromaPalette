"use client";

import React, { useState } from "react";
import { Trash2, Download, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ColorPalette {
  id: string;
  name: string;
  colors: string[];
}

interface SavedPalettesProps {
  palettes?: ColorPalette[];
  onSelect?: (palette: ColorPalette) => void;
  onDelete?: (id: string) => void;
  onExport?: (palette: ColorPalette) => void;
}

export default function SavedPalettes({
  palettes = [
    {
      id: "1",
      name: "Sunset Vibes",
      colors: ["#FF5E5B", "#D8D8D8", "#FFFFEA", "#00CECB", "#FFED66"],
    },
    {
      id: "2",
      name: "Forest Theme",
      colors: ["#2D3047", "#93B7BE", "#E0CA3C", "#A37871", "#419D78"],
    },
    {
      id: "3",
      name: "Pastel Dream",
      colors: ["#FFCDB2", "#FFB4A2", "#E5989B", "#B5838D", "#6D6875"],
    },
  ],
  onSelect = () => {},
  onDelete = () => {},
  onExport = () => {},
}: SavedPalettesProps) {
  const [hoveredPalette, setHoveredPalette] = useState<string | null>(null);

  return (
    <div className="w-full bg-background p-6 rounded-lg border border-border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Saved Palettes</h2>
        {palettes.length > 0 && (
          <span className="text-sm text-muted-foreground">
            {palettes.length} {palettes.length === 1 ? "palette" : "palettes"}
          </span>
        )}
      </div>

      {palettes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <p className="text-muted-foreground mb-2">No saved palettes yet</p>
          <p className="text-sm text-muted-foreground">
            Your saved color palettes will appear here
          </p>
        </div>
      ) : (
        <ScrollArea className="w-full">
          <div className="flex space-x-4 pb-4 pr-4">
            {palettes.map((palette) => (
              <Card
                key={palette.id}
                className="min-w-[220px] relative group"
                onMouseEnter={() => setHoveredPalette(palette.id)}
                onMouseLeave={() => setHoveredPalette(null)}
              >
                <CardContent className="p-3">
                  <div className="flex mb-2">
                    {palette.colors.map((color, index) => (
                      <div
                        key={index}
                        className="h-16 flex-1"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-sm font-medium truncate">
                      {palette.name}
                    </p>
                    <div className="flex space-x-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => onDelete(palette.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Delete palette</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => onExport(palette)}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Export palette</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </CardContent>

                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute inset-0 opacity-0 group-hover:opacity-90 flex items-center justify-center transition-opacity"
                  onClick={() => onSelect(palette)}
                >
                  <span className="mr-1">Use this palette</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}
