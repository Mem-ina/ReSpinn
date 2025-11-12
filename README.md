# Author
Developer: Memina Sangara


# ReSpinn Catalog

A modern, professional catalog website for second-hand car parts. This information catalog allows customers to browse available parts and contact the business for inquiries.

## Features

- **Homepage**: Hero section with featured parts and company benefits
- **Parts Catalog**: Searchable and filterable catalog with categories, makes, conditions, and price ranges
- **Part Details**: Detailed view of individual parts with specifications, compatibility, and contact options
- **Contact Page**: Contact form and business information with map
- **About Page**: Company story, mission, and values
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean black and orange color scheme with smooth animations

## Tech Stack

- **Framework**: React js
- **Language**: JavaScript (JSX)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd ReSpinn-catalog
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install 
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:5173/](http://localhost:5173/) in your browser

## Project Structure

\`\`\`
ReSpinn-catalog/
├── src/pages/
│   ├── about/
│   │   ├── page.jsx          # About page
│   │   └── loading.jsx        # Loading state
│   ├── catalog/
│   │   ├── [id]/
│   │   │   ├── page.jsx       # Part detail page
│   │   │   └── loading.jsx    # Loading state
│   │   ├── page.jsx           # Catalog page
│   │   └── loading.jsx        # Loading state
│   ├── contact/
│   │   ├── page.jsx           # Contact page
│   │   └── loading.jsx        # Loading state
│   ├── layout.jsx             # Root layout
│   ├── page.jsx               # Homepage
│   ├── not-found.jsx          # 404 page
│   └── App.css                # Styles
├── components/
│   ├── site-header.jsx        # Header with navigation
│   ├── site-footer.jsx        # Footer with links
│   ├── parts-filters.jsx      # Catalog filters
│   ├── parts-grid.jsx         # Parts grid display
│   └── ui/                    # shadcn/ui components
├── public/
│   └── *.jpg, *.png           # Images and assets
└── README.md
\`\`\`

## Key Features Explained

### Parts Catalog
- Filter by category (Engine, Transmission, Body, Electrical, etc.)
- Filter by car make (Toyota, Honda, Ford, etc.)
- Filter by condition (Excellent, Good, Fair)
- Filter by price range
- Real-time search functionality
- Responsive grid layout

### Part Details
- Multiple images per part
- Detailed specifications
- Compatibility information
- Multiple contact methods (phone, email, WhatsApp)
- Related parts suggestions

### Design System
- **Primary Color**: Black (#000000)
- **Secondary Color**: Orange (#f97316)
- **Neutrals**: Grays and whites
- **Typography**: Inter font family
- **Spacing**: Consistent Tailwind spacing scale




## Customization

### Adding New Parts
Edit the `PARTS_DATA` array in `src/pages/catalog/page.jsx` to add new parts to the catalog.

### Changing Colors
Update the design tokens in `src/App.css` to change the color scheme.

### Modifying Contact Information
Update contact details in `src/components/site-footer.jsx` and `src/pages/contact/page.jsx`.



## Support

For questions or support, please contact the development team or open an issue in the repository.

## Acknowledgments

- Built with React js
- UI components from shadcn/ui
- Icons from Lucide React
- Styled with Tailwind CSS
