"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Slider } from "./ui/slider"
import { Button } from "./ui/button"
import { RotateCcw } from "lucide-react"

export function PartsFilters({ filters, onFiltersChange, parts }) {
  // Extract unique values for filters
  const categories = ["all", ...Array.from(new Set(parts.map((p) => p.category))).sort()]
  const makes = ["all", ...Array.from(new Set(parts.map((p) => p.make))).sort()]
  const conditions = ["all", "Like New", "Excellent", "Good"]

  const handleReset = () => {
    onFiltersChange({
      category: "all",
      make: "all",
      condition: "all",
      priceRange: [0, 2000],
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={handleReset} className="h-8 px-2">
          <RotateCcw className="h-4 w-4 mr-1" />
          Reset
        </Button>
      </div>

      {/* Category Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Category</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={filters.category}
            onValueChange={(value) => onFiltersChange({ ...filters, category: value })}
          >
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <RadioGroupItem value={category} id={`category-${category}`} />
                <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">
                  {category === "all" ? "All Categories" : category}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Make Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Make</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={filters.make} onValueChange={(value) => onFiltersChange({ ...filters, make: value })}>
            {makes.map((make) => (
              <div key={make} className="flex items-center space-x-2">
                <RadioGroupItem value={make} id={`make-${make}`} />
                <Label htmlFor={`make-${make}`} className="text-sm font-normal cursor-pointer">
                  {make === "all" ? "All Makes" : make}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Condition Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Condition</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={filters.condition}
            onValueChange={(value) => onFiltersChange({ ...filters, condition: value })}
          >
            {conditions.map((condition) => (
              <div key={condition} className="flex items-center space-x-2">
                <RadioGroupItem value={condition} id={`condition-${condition}`} />
                <Label htmlFor={`condition-${condition}`} className="text-sm font-normal cursor-pointer">
                  {condition === "all" ? "All Conditions" : condition}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Price Range Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            min={0}
            max={2000}
            step={50}
            value={filters.priceRange}
            onValueChange={(value) => onFiltersChange({ ...filters, priceRange: value })}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>R{filters.priceRange[0]}</span>
            <span>R{filters.priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
