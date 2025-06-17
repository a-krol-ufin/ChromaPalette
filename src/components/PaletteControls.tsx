"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Save, Download, RefreshCw } from "lucide-react";

interface PaletteControlsProps {
  onGeneratePalette?: (harmonyRule: string) => void;
  onFormatChange?: (format: string) => void;
  onSavePalette?: () => void;
  onExportPalette?: (format: string) => void;
}

const PaletteControls = ({
  onGeneratePalette = () => {},
  onFormatChange = () => {},
  onSavePalette = () => {},
  onExportPalette = () => {},
}: PaletteControlsProps) => {
  const [harmonyRule, setHarmonyRule] = useState("complementary");
  const [colorFormat, setColorFormat] = useState("hex");

  const handleHarmonyChange = (value: string) => {
    setHarmonyRule(value);
  };

  const handleFormatChange = (value: string) => {
    setColorFormat(value);
    onFormatChange(value);
  };

  const handleGeneratePalette = () => {
    onGeneratePalette(harmonyRule);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-background border rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <Select value={harmonyRule} onValueChange={handleHarmonyChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Harmony Rule" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="complementary">Complementary</SelectItem>
            <SelectItem value="analogous">Analogous</SelectItem>
            <SelectItem value="triadic">Triadic</SelectItem>
            <SelectItem value="monochromatic">Monochromatic</SelectItem>
            <SelectItem value="random">Random</SelectItem>
          </SelectContent>
        </Select>

        <Button
          onClick={handleGeneratePalette}
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Generate
        </Button>
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto">
        <Tabs
          defaultValue="hex"
          value={colorFormat}
          onValueChange={handleFormatChange}
          className="w-[200px]"
        >
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="hex">HEX</TabsTrigger>
            <TabsTrigger value="rgb">RGB</TabsTrigger>
            <TabsTrigger value="hsl">HSL</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={onSavePalette}
            className="flex items-center gap-2"
          >
            <Save className="h-4 w-4" />
            Save
          </Button>

          <Select onValueChange={onExportPalette}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Export" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="image">Image</SelectItem>
              <SelectItem value="json">JSON</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default PaletteControls;
