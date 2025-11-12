import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

export function PartsGrid({ parts }) {
  if (parts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="rounded-full bg-muted p-6 mb-4">
          <svg
            className="h-12 w-12 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">No parts found</h3>
        <p className="text-muted-foreground max-w-md leading-relaxed">
          Try adjusting your filters or search query to find what you're looking for
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {parts.map((part) => (
        <Card key={part.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={part.image || "/placeholder.svg"}
              alt={part.name}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <CardContent className="p-4">
            <div className="mb-3">
              <div className="flex items-start justify-between gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {part.condition}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {part.category}
                </Badge>
              </div>
              <h3 className="font-semibold text-lg mb-1 line-clamp-1">{part.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">
                {part.make} {part.model}
              </p>
              <p className="text-xs text-muted-foreground">{part.year}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary">R{part.price}</span>
              <Button size="sm" variant="outline" asChild>
                <Link href={`/catalog/${part.id}`}>View Details</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
