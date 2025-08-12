import companyImg from "../assets/images/company.jpg";
import impactImg from "../assets/images/impact.jpg";
import billboard from "../assets/images/servicesImages/billboard.jpeg";
import roadshow from "../assets/images/servicesImages/roadshow.jpeg";
import seeding from "../assets/images/servicesImages/seeding.jpeg";
import wallbranding from "../assets/images/servicesImages/wallbranding.jpeg";
import promotion from "../assets/images/servicesImages/promotion.png";
import merchandising from "../assets/images/servicesImages/merchandising.jpeg";
import marketStorms from "../assets/images/servicesImages/market-storms.png";

export const services = [
  {
    category: "Activations",
    subcategories: [
      {
        icon: "icon-event",
        title: "Roadshows",
        description:
          "Dynamic roadshows across target regions to build awareness and create memorable live brand experiences.",
        image: roadshow,
        details: {
          overview:
            "We plan and execute route-based experiential tours with branded trucks, MCs, dancers, and mobile stages.",
          whatWeDo: [
            "Route planning and permits",
            "Branded trucks and stage setups",
            "Professional MCs and promo teams",
            "Sound systems and live demos",
            "Content capture (photo/video)",
          ],
          deliverables: [
            "Daily activity reports",
            "Audience reach and engagement metrics",
            "Event photo/video highlights",
            "Asset and staff deployment schedules",
          ],
          process: [
            "Brief and objectives",
            "Route mapping",
            "Execution",
            "Reporting",
          ],
          outcomes: [
            "Higher brand awareness",
            "Lead generation",
            "Retail uplift",
          ],
          industries: ["FMCG", "Telco", "Beverages", "Financial Services"],
        },
      },
      {
        icon: "icon-promotion",
        title: "Merchandising",
        description:
          "Retail merchandising to maximize product visibility, stock health, and compliance across outlets.",
        image: merchandising,
        details: {
          overview:
            "We deploy trained merchandisers to optimize planograms, POSM, and stock levels for consistent brand presence.",
          whatWeDo: [
            "Planogram compliance",
            "POSM deployment and audits",
            "Stock checks and replenishment",
            "Price and promo compliance",
            "Outlet staff training",
          ],
          deliverables: [
            "Outlet-level photo audits",
            "SKU availability reports",
            "Share-of-shelf metrics",
            "Promo compliance reports",
          ],
          process: ["Baseline audit", "Deployment", "Monitoring", "Reporting"],
          outcomes: [
            "Improved availability",
            "Shelf dominance",
            "Sales growth",
          ],
          industries: ["FMCG", "Pharma", "Household", "Beverages"],
        },
      },
      {
        icon: "icon-promotion",
        title: "Promotions",
        description:
          "Targeted in-store and field promotions to drive conversion, sampling, and trial.",
        image: promotion,
        details: {
          overview:
            "From samplings to price-off activations, we execute measurable promos that boost trial and uptake.",
          whatWeDo: [
            "Promo concepting and staffing",
            "Sampling and demos",
            "Couponing and instant wins",
            "End-cap takeovers",
            "In-store theatre",
          ],
          deliverables: [
            "Daily sales and conversions",
            "Sample volumes and feedback",
            "Footfall and dwell-time",
            "Geo-tagged photo logs",
          ],
          process: [
            "Brief",
            "Pilot",
            "Rollout",
            "Optimization",
            "Post-campaign report",
          ],
          outcomes: [
            "Increased conversion",
            "New user acquisition",
            "Basket size uplift",
          ],
          industries: ["FMCG", "D2C", "Electronics", "Beverages"],
        },
      },
      {
        icon: "icon-street",
        title: "Market Storms",
        description:
          "High-energy blitz activations that saturate a market with branded presence in a short period.",
        image: marketStorms,
        details: {
          overview:
            "We mobilize teams, vans, and POSM to take over key hotspots and retail clusters for maximum impact.",
          whatWeDo: [
            "Location mapping",
            "Clustered retail takeovers",
            "Street teams and product demos",
            "Vehicle branding and sound",
          ],
          deliverables: [
            "Coverage maps",
            "Engagement counts",
            "Retail penetration reports",
          ],
          process: [
            "Cluster planning",
            "Asset deployment",
            "Live execution",
            "Wrap-up report",
          ],
          outcomes: ["Brand buzz", "Retail lift", "Community awareness"],
          industries: ["FMCG", "Beverages", "Startups", "Telco"],
        },
      },
      {
        icon: "icon-event",
        title: "Exhibitions",
        description:
          "End-to-end trade show and expo support from booth design to staffing and lead capture.",
        image: companyImg,
        details: {
          overview:
            "We design, build, and run exhibition booths that showcase your offerings and drive qualified leads.",
          whatWeDo: [
            "Booth design and fabrication",
            "AV and interactive demos",
            "Hosts/hostesses and promoters",
            "Lead capture and scanning",
          ],
          deliverables: [
            "Booth renders and build",
            "Lead lists and follow-up sheets",
            "Event performance report",
          ],
          process: ["Design", "Build", "Event", "Post-event analytics"],
          outcomes: ["Lead generation", "Partner visibility", "Sales pipeline"],
          industries: ["B2B", "Technology", "Manufacturing", "Finance"],
        },
      },
      {
        icon: "icon-seeding",
        title: "Seeding",
        description:
          "Influencer and community seeding to generate authentic product trials and word-of-mouth.",
        image: seeding,
        details: {
          overview:
            "We identify micro-influencers and communities, distribute product kits, and collect qualitative feedback.",
          whatWeDo: [
            "Audience selection",
            "Kit assembly and dispatch",
            "Content capture and UGC",
            "Feedback collection",
          ],
          deliverables: [
            "Recipient lists",
            "UGC/content gallery",
            "Sentiment and feedback report",
          ],
          process: ["Audience mapping", "Seeding", "Follow-ups", "Reporting"],
          outcomes: ["Product trial", "Organic content", "Advocacy"],
          industries: ["Beauty", "FMCG", "Consumer Tech", "Lifestyle"],
        },
      },
    ],
  },
  {
    category: "Branding",
    subcategories: [
      {
        icon: "icon-branding",
        title: "Instore Branding",
        description:
          "Retail fit-outs, POSM systems, and wayfinding that elevate your in-store experience.",
        image: impactImg,
        details: {
          overview:
            "Design and deploy retail branding elements—shelves, lightboxes, danglers, and more—at scale.",
          whatWeDo: [
            "Design and prototyping",
            "Fabrication and installation",
            "POSM deployment and audits",
            "Maintenance and refresh",
          ],
          deliverables: [
            "Design files and mockups",
            "Install photos and sign-offs",
            "Inventory and maintenance logs",
          ],
          process: ["Design", "Fabrication", "Install", "QA"],
          outcomes: [
            "Improved shopper journey",
            "Brand consistency",
            "Higher conversion",
          ],
          industries: ["Retail", "FMCG", "Electronics", "Automotive"],
        },
      },
      {
        icon: "icon-outdoor",
        title: "Billboards",
        description:
          "Billboards, wall wraps, signage, and street furniture that command attention.",
        image: billboard,
        details: {
          overview:
            "Plan and execute outdoor media and branded structures with compliant fabrication and installation.",
          whatWeDo: [
            "Site surveys and permits",
            "Billboard and wall wrap fabrication",
            "3D signage and wayfinding",
            "Illumination and maintenance",
          ],
          deliverables: [
            "Site survey reports",
            "As-built documentation",
            "Maintenance schedules",
          ],
          process: ["Survey", "Fabrication", "Install", "Maintenance"],
          outcomes: ["High visibility", "Brand stature", "Footfall uplift"],
          industries: ["Real Estate", "Retail", "Hospitality", "Finance"],
        },
      },
      {
        icon: "icon-activation",
        title: "Vehicle Branding",
        description:
          "Fleet and vehicle wraps that extend brand visibility on the move.",
        image: companyImg,
        details: {
          overview:
            "Design, print, and apply high-quality vinyl wraps for cars, vans, and trucks with precise fit and finish.",
          whatWeDo: [
            "Vehicle templating",
            "High-res print and lamination",
            "Application and curing",
            "Aftercare and removal",
          ],
          deliverables: [
            "Design proofs",
            "Before/after photos",
            "Care guidelines",
          ],
          process: ["Design", "Print", "Apply", "QA"],
          outcomes: ["Wider reach", "Premium look", "Durable branding"],
          industries: ["Logistics", "FMCG", "Field Sales", "Services"],
        },
      },
      {
        icon: "icon-branding",
        title: "Wall Branding",
        description:
          "Custom wall graphics, murals, and signage to transform spaces and communicate your brand identity.",
        image: wallbranding,
        details: {
          overview:
            "We design and install visually striking wall branding solutions that enhance environments and reinforce brand presence.",
          whatWeDo: [
            "Custom wall graphics and murals",
            "3D lettering and signage",
            "Office and retail space branding",
            "Event and exhibition backdrops",
          ],
          deliverables: [
            "High-resolution wall designs",
            "Installation-ready files",
            "Material and print specifications",
          ],
          process: [
            "Concept Development",
            "Design",
            "Production",
            "Installation",
          ],
          outcomes: ["Visual Impact", "Brand Recognition", "Enhanced Spaces"],
          industries: ["Retail", "Corporate Offices", "Hospitality", "Events"],
        },
      },
    ],
  },
];

export default services;
