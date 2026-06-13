import { ServiceItem, ProductItem, GalleryItem, TestimonialItem, StatItem } from "./types";

import p11Img from "./assets/images/p11_cane_sofa_1781343981117.jpg";
import p12Img from "./assets/images/p12_leather_recliner_1781343997512.jpg";
import p13Img from "./assets/images/p13_pink_sofa_1781344010347.jpg";
import p14Img from "./assets/images/p14_curved_wood_sofa_1781344034247.jpg";
import p15Img from "./assets/images/p15_walnut_tv_unit_1781344047307.jpg";
import p17Img from "./assets/images/p17_cream_leather_suite_1781344060554.jpg";
import p18Img from "./assets/images/p18_emerald_velvet_couch_1781344074651.jpg";
import p19Img from "./assets/images/p19_glass_tv_unit_1781344095079.jpg";
import p20Img from "./assets/images/p20_crimson_sectional_1781344108565.jpg";
import p21Img from "./assets/images/p21_tobacco_sectional_1781344121972.jpg";
import p22Img from "./assets/images/p22_teal_grey_lounger_1781344134099.jpg";

import p1Img from "./assets/images/p1_royal_chesterfield_1781344683366.jpg";
import p2Img from "./assets/images/p2_l_shape_sofa_1781344697809.jpg";
import p4Img from "./assets/images/p4_teak_dining_table_1781344642828.jpg";
import p5Img from "./assets/images/p5_crimson_bed_1781344712078.jpg";
import p6Img from "./assets/images/p6_zen_bed_1781344727736.jpg";
import p7Img from "./assets/images/p7_glass_wardrobe_1781344745456.jpg";
import p9Img from "./assets/images/p9_walnut_desk_1781344761845.jpg";
import p10Img from "./assets/images/p10_workspace_suite_1781344660558.jpg";


export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "custom-furniture",
    title: "Custom Furniture Manufacturing",
    description: "Tailor-made solid wood and premium ply furniture engineered to fit your specific dimensions and design language perfectly.",
    iconName: "Hammer",
    longDescription: "Since 2007, our Banashankari workshop has crafted unique bespoke works using marine-grade plywood, solid teakwood, and premium laminates. We custom-engineer every piece, marrying traditional joinery craft with modular hardware.",
    benefits: [
      "Custom size fitting down to the millimeter",
      "Choice of premium seasoned teak, mahogany, or ply",
      "Germany-imported hydraulic fittings and soft-close channels",
      "Generous 5-year replacement warranty on structural craftsmanship"
    ]
  },
  {
    id: "home-interiors",
    title: "Home Interior Design",
    description: "Turnkey luxury interior solutions from 3D conceptualization to complete installation, delivering spectacular living spaces.",
    iconName: "Palette",
    longDescription: "Our full-service spatial division turns apartments, villas, and penthouses into luxury retreats. We conceptualize cohesive color schemes, ambient lighting solutions, ceiling detailing, and customized wall partitions.",
    benefits: [
      "Photorealistic 3D rendering designs before executing",
      "Ergonomic space-saving layouts optimized for families",
      "Complete coordination for electrical, false ceiling, and wallpapering",
      "Dedicated Project Manager overseeing execution timelines"
    ]
  },
  {
    id: "sofa-manufacturing",
    title: "Luxury Sofa Manufacturing",
    description: "Indulgently comfortable custom sofa sets, couch designs, and chesterfields with lifetime-guaranteed high-density foams.",
    iconName: "Armchair",
    longDescription: "Experience bespoke comfort. We manufacture tailored L-shape sofas, recliners, loungers, and formal wingback chairs. Choose from over 1000+ premium upholstery options, including stain-resistant fabrics and genuine leatherette.",
    benefits: [
      "Highest quality 40-density sleepwell and memory foam cores",
      "Sturdily built with solid sal-wood frames resistant to borer and termites",
      "Imported easy-clean fabrics, velvets, and luxury micro-leathers",
      "Perfect ergonomics computed to support waist, neck, and posture"
    ]
  },
  {
    id: "wardrobes-closets",
    title: "Bespoke Wardrobes & Walk-In Closets",
    description: "Sleek sliding doors, illuminated walk-in closets, and built-in wardrobes engineered with modular storage racks.",
    iconName: "FolderOpen",
    longDescription: "Maximize storage with stunning elegance. Our built-in wardrobe solutions feature dust-sealed glass slider doors, integrated LED motion sensor bars, customized jewelry drawers, and pull-down clothing rods.",
    benefits: [
      "Advanced floor-to-ceiling sliding mechanisms with aluminum tracks",
      "Smart internal organizer systems (tie-racks, hidden safe boxes)",
      "High-gloss acrylic, PU paint, and natural wood veneer finishes",
      "Moisture-proof polymer boards for back panel protection"
    ]
  },
  {
    id: "dining-solutions",
    title: "Exquisite Dining Tables & Chairs",
    description: "Statement dining tables crafted from imported Italian marble, seamless quartz, and grain-rich solid teakwood.",
    iconName: "Compass",
    longDescription: "The true center of an elegant home. We craft dining ensembles designed for gathering. Choose from extendable tables, marble tops with sturdy metal powder-coated or gold-chrome bases, and fully padded custom chairs.",
    benefits: [
      "Treated heat-resistant and stain-proof dining surfaces",
      "Perfect height pairings for comfortable sitting posture during long meals",
      "Premium foam-back chairs constructed with high durability fabrics",
      "Bespoke dining benches and buffet counter options"
    ]
  },
  {
    id: "study-solutions",
    title: "Premium Study & Library Tables",
    description: "Inspiring workspaces featuring smart cable management, floating book racks, and premium ergonomic desk units.",
    iconName: "BookOpen",
    longDescription: "Create a focused setting for work and study. Our tables combine wire-grommets, secret drawer slots, soft magnetic pinboards, and matching bookcase cabinets that blend productivity with quiet luxury.",
    benefits: [
      "Seamless invisible wire management grommets and raceways",
      "Extremely hard-wearing, anti-scratch laminate table surfaces",
      "Adjustable modular shelving that scales with your storage needs",
      "Space-efficient corner study desks and wall-mounted writing ledges"
    ]
  },
  {
    id: "office-furniture",
    title: "Office Furniture Solutions",
    description: "Ergonomic workstations, luxury executive tables, conference table suites, and high-performance posture office seating.",
    iconName: "Briefcase",
    longDescription: "Maximize work output and team morale. We supply modern office setups for IT startups, standard corporate chambers, and dedicated co-working setups in and around Bengaluru, complying with commercial standards.",
    benefits: [
      "Heavy-duty metal powder-coated frame office desks",
      "Acoustic felt dividers and multi-point drawer locks",
      "Certified mesh back task chairs with lumbar adjustment links",
      "Minimalist reception desks and boardroom luxury panel tables"
    ]
  },
  {
    id: "repair-renovation",
    title: "Furniture Repair & Renovation",
    description: "Heritage furniture restoration, complete sofa re-upholstery, and premium polyurethane polishing services.",
    iconName: "Wrench",
    longDescription: "Preserve the items you love or restore office seating. Our technicians provide master-level re-upholstery, leatherette replacement, spring tension adjustments, and high-quality Italian PU touchups in Banashankari.",
    benefits: [
      "Complete disassembly and micro-level structural tightening of wood jointing",
      "Vast catalog of heavy-duty replacement fabric cloths and leathers",
      "Full PU coatings and natural lacquer hand polishing work",
      "Quick pickup and on-time doorstep delivery options"
    ]
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "p1",
    title: "The Regal Chesterfield Sofa Set",
    category: "Sofa Sets",
    description: "An elegant, deep-buttoned chesterfield wrapped in velvet with gold-plated stainless steel base rails and hand-tufted details.",
    imageUrl: p1Img,
    materials: ["Solid Salwood Framing", "Royal Velvet fabric", "High Density Sleepwell 40-D Foam", "Gold Stainless steel base"],
    features: ["Deep hand-tufted cushioning", "Stain-resistant easy-clean wash", "Extremely sturdy solid construction"],
    priceRange: "Premium Range (Custom-Sized)"
  },
  {
    id: "p2",
    title: "Modern L-Shape Lounge Sofa",
    category: "Sofa Sets",
    description: "Contemporary sectional sofa styled with extra-deep lounge cushions and high-premium linen upholstery for elite family lounges.",
    imageUrl: p2Img,
    materials: ["Waterproof Plywood basis", "Breathing organic linen", "Dual pocket springs for bounce", "Treated premium oakwood feet"],
    features: ["Modular design configurations", "Reversible chaise arrangement", "Includes 5 complimentary premium throw pillows"],
    priceRange: "Luxury Custom Suite"
  },
  {
    id: "p4",
    title: "Teak & Warm Glass Dining Table",
    category: "Dining Tables",
    description: "Organic hand-sculpted teakwood dining table topped with gold-fused tinted tempered glass, showcasing premium rustic grains.",
    imageUrl: p4Img,
    materials: ["Seasoned Banashankari Teakwood", "12mm Tempered Bronze Glass", "Natural Oil-grain protective coat"],
    features: ["Exquisite live wood edge layout", "Visible joint details with premium brass butterfly keys", "Includes solid teak bench seating option"],
    priceRange: "Teakwood High-Art Collection"
  },
  {
    id: "p5",
    title: "Royal Crimson Master Bedroom Suite",
    category: "Bedroom Furniture",
    description: "A commanding king-size bed featuring an integrated tufted velvet headboard, golden profile stripes, and hidden hydraulic lift storage.",
    imageUrl: p5Img,
    materials: ["Heavy duty Action TESA borer-free board", "Tufted premium velvet headboard", "Hydraulic gas-lift struts"],
    features: ["Dual side embedded USB power docks", "Superb squeak-free structural design", "Expansive 900-Litre under-bed storage compartment"],
    priceRange: "Elite Bedroom Collection"
  },
  {
    id: "p6",
    title: "The Floating Zen Platform Bed",
    category: "Bedroom Furniture",
    description: "Minimalist oak-finished floating bed layout equipped with built-in warm-LED underglow light strips and side nightstand shelves.",
    imageUrl: p6Img,
    materials: ["German laminated waterproof board", "Moisture-resistant back paneling", "Premium LED diffuser striping"],
    features: ["Optical floating frame aesthetic", "Soft-close touch-release side drawer panels", "Anti-dust guard frame base"],
    priceRange: "Modern Showroom Accent"
  },
  {
    id: "p7",
    title: "Bespoke Glass Walk-In Wardrobe",
    category: "Wardrobes",
    description: "Luxury closet with internal warm LED lighting, glass doors, black anodized aluminum frameworks, and smart accessory pullouts.",
    imageUrl: p7Img,
    materials: ["Anodized structural aluminum profiles", "Tough tempered gray float glass", "Suede velvet interior trays"],
    features: ["Integrated infrared motion lamp lights", "German sliding door damper sliders", "Soft-close storage organizers and safety safe drawers"],
    priceRange: "Bespoke Architecture Project"
  },
  {
    id: "p9",
    title: "The Creative's Walnut Study Desk",
    category: "Study Tables",
    description: "Exquisite floating workstation table featuring solid walnut wood framing, magnetic desktop organizer, and premium leather desk pad overlay.",
    imageUrl: p9Img,
    materials: ["American Walnut solid timber", "Genuine leather surface backing", "Steel metal legs powder-coated black"],
    features: ["Secret laptop charger drawer compartment", "Neat wire management grommet layouts", "Magnetic desk item holder dock"],
    priceRange: "Designer Desk Series"
  },
  {
    id: "p10",
    title: "Corporate Executive Workspace Suite",
    category: "Office Furniture",
    description: "A commanding command table featuring marble details, wire organizer, computer shelf space, and modular drawer chest.",
    imageUrl: p10Img,
    materials: ["Matte Charcoal high pressure board", "Faux marble panels", "Heavy metal supporting frames"],
    features: ["High workspace density layouts", "Built-in drawer locks for document safety", "Sleek wire pathway raceways"],
    priceRange: "Executive Grade Commercial"
  },
  {
    id: "p11",
    title: "The Banashankari Teak & Cane Sofa Bed",
    category: "Sofa Sets",
    description: "Superb convertible sofa-cum-bed handcrafted with rich solid teak wood, classic natural handwoven cane lattice detailing on the base, and high-density supportive cushions.",
    imageUrl: p11Img,
    materials: ["Solid Burma Teakwood", "Natural Handwoven Cane Lattice Weave", "40-D High-Density Comfort Foam", "Premium Eco-Linen Washable Covers"],
    features: ["Convertible pull-out daybed system", "Elegant retro mid-century modern aesthetic", "Double-sealed anti-borer wooden framing"],
    priceRange: "Premium Custom Range"
  },
  {
    id: "p12",
    title: "Bespoke Leather Console Recliner",
    category: "Sofa Sets",
    description: "Stunning ergonomic rich brown leather recliner sofa set equipped with a built-in central storage console, soft central tray, and stainless steel dual cup holders.",
    imageUrl: p12Img,
    materials: ["Premium Top-Grain Italian Leather", "Reinforced Alloy Reclining Mechanics", "Memory foam hybrid cushioning", "Acoustic wood console base"],
    features: ["Integrated storage compartment drawer", "Deep-cup stainless steel holders", "Smooth zero-wall proximity glide mechanism"],
    priceRange: "Luxury Custom Suite"
  },
  {
    id: "p13",
    title: "The Velvet Blush Designer Daybed",
    category: "Sofa Sets",
    description: "A glamorous plush blush-pink velvet sofa bed featuring deep luxury lounging scale, customized geometric cushions, and polished rose-gold metal slide feet.",
    imageUrl: p13Img,
    materials: ["High-luxury plush velvet cloth", "Kiln-dried Malaysian hardwood basis", "No-sag gold-finished metal legs", "High-resilience Sleepwell layers"],
    features: ["Deep luxury lounging seat scale", "Includes custom geometric throw pillows", "Seamlessly converts to a spacious guest bed"],
    priceRange: "Elite Custom Collection"
  },
  {
    id: "p14",
    title: "Heritage Curved Wood Sectional Sofa",
    category: "Sofa Sets",
    description: "Stately L-shaped classical sectional sofa framed with majestic polished curved teakwood armrests and multi-tonal heavy-weave linen upholstery.",
    imageUrl: p14Img,
    materials: ["Hand-sculpted curved teak wood armrest", "Durable heavy-weight woven linen", "Premium seasoned salwood base structure", "Reinforced multi-spring support base"],
    features: ["Ornate hand-finished curved wooden armor", "Vast modular L-shape corner layout", "High-profile neck-support backing cushions"],
    priceRange: "Luxury Custom Suite"
  },
  {
    id: "p15",
    title: "The Banashankari Minimalist TV Console & Library",
    category: "TV Units & Cabinets",
    description: "A smart, modern space-saving TV entertainment unit featuring premium matte wood veneers, push-to-release storage drawers, and an elegant side-integrated bookshelf tower with transparent floating glass shelves.",
    imageUrl: p15Img,
    materials: ["Marine-grade BWR Plywood", "Tempered Smoked Glass Shelves", "Premium Matte Walnut Laminate", "Soft-close Hettich channels"],
    features: ["Side-tower bookshelves with glass accents", "Hidden cable pathway raceways", "Four broad storage push-drawers"],
    priceRange: "Premium Custom Range"
  },
  {
    id: "p17",
    title: "The Royal Heritage Ivory Leather Suite",
    category: "Sofa Sets",
    description: "An opulent cream-colored luxury classical sofa set featuring customized deep-quilted scale, decorative hand-threaded diamond upholstery on outer armrests, and extra-thick master comfort cushioning.",
    imageUrl: p17Img,
    materials: ["Italian Full-Grain Cream Leather", "High-Elastic Sag-Resistant springs", "Solid Teak Internal Framing", "Gold-Accented Brass Trim Wood feet"],
    features: ["Elegant decorative diamond tufted side detailing", "Stunning broad lounge-scale arm cushions", "Plush multi-tier backrest pillow supports"],
    priceRange: "Elite Custom Collection"
  },
  {
    id: "p18",
    title: "The Emerald Velvet Designer Sectional",
    category: "Sofa Sets",
    description: "A majestic emerald-green L-shaped velvet sectional sofa styled with gorgeous linear vertical tufted channel backrests, elegant tapered golden-teak wood feet, and a generous lounge chaise.",
    imageUrl: p18Img,
    materials: ["Ultra-luxury plush emerald velvet", "Solid Seasoned Salwood skeletal frame", "45-D Supremely soft Sleepwell foam", "Polished Teak tapered wooden legs"],
    features: ["Distinctive vertical track channel tufting", "Reversible modular corner lounge chaise", "Hypoallergenic easy-dry soft upholstery"],
    priceRange: "Premium Custom Range"
  },
  {
    id: "p19",
    title: "The Sovereign Glass-Door Entertainment Unit",
    category: "TV Units & Cabinets",
    description: "An architectural floor-to-ceiling double-tower glass display unit designed with integrated LED backlight arrays, a floating console board, and premium woodgrain backboard paneling.",
    imageUrl: p19Img,
    materials: ["Premium Action TESA BWR Board", "Anodized Black Aluminum Profiles", "Frosted Tempered Safety Glass", "LED Touch-Dimmer Controller modules"],
    features: ["Double-ended glass display towers", "Integrated ambient warm-LED strip slots", "Sublime soft-close magnetic glass hinges"],
    priceRange: "Bespoke Architecture Project"
  },
  {
    id: "p20",
    title: "The Crimson Accent Two-Tone Sectional",
    category: "Sofa Sets",
    description: "A high-impact dual-tone L-shaped sofa set combining ultra-comfortable rich crimson red seating cushions with pristine ivory-cream structured backing and custom lumbar block support pillows.",
    imageUrl: p20Img,
    materials: ["Heavy-duty cross-woven designer fabric", "Thicker multi-layer Sleepwell core", "Solid structural sal-wood inner base", "Moisture-sealed high ply baseboards"],
    features: ["Vibrant custom contrast dual-shade layout", "Extra height high-back posture support pillars", "Includes 6 tailored contrast plush scatter-pillows"],
    priceRange: "Luxury Custom Suite"
  },
  {
    id: "p21",
    title: "The Tobacco Heritage Diamond Sectional",
    category: "Sofa Sets",
    description: "A majestic tobacco-brown leather sectional sofa boasting precise diamond-tufted backrests with crystal-accent buttons, extra-deep seating cushions, and polished metallic glide feet.",
    imageUrl: p21Img,
    materials: ["Top-grain Tobacco Breathable Leatherette", "Specially kiln-dried Malaysian wood frames", "High-density foam layers with pocket springs", "Crystal-styled decorative upholstery buttons"],
    features: ["Exquisite luxury hand-tufted diamond quilting", "Durable wipe-clean surface safe for families", "Heavy-load stainless steel support pillars"],
    priceRange: "Premium Custom Range"
  },
  {
    id: "p22",
    title: "The Dual-Perspective Showroom Lounger",
    category: "Sofa Sets",
    description: "An innovative dual-faced customized sofa unit featuring contrasting rich teal green base fabric with light-grey buttoned backrest inserts, built on modern clean wood frames.",
    imageUrl: p22Img,
    materials: ["Plush stain-shield micro-velvets", "Seasoned silverwood structural framework", "Polyester fiberfill comfort cushions", "Solid matte oak accents"],
    features: ["Stunning double-sided interactive seat orientation", "Highly unique modern color contrast blocking", "Exceptional workspace and lounge versatility"],
    priceRange: "Modern Showroom Accent"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Opulent Living Hall Showcase",
    category: "Interior Projects",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "landscape",
    description: "A stunning living room interior featuring custom gold-profile wooden wall paneling, a marble accent wall, and our premium bespoke sofa collection."
  },
  {
    id: "g2",
    title: "Classic Teakwood Master Bedroom",
    category: "Large Furniture",
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "square",
    description: "Bespoke premium glass wardrobes paired with custom upholstered hydraulic beds, creating a warm, master retreat."
  },
  {
    id: "g3",
    title: "Executive Office Chamber Setup",
    category: "Commercial Spaces",
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "landscape",
    description: "Custom office furniture installation in Bengaluru workspace, featuring custom conference table layouts and high density mesh seating."
  },
  {
    id: "g5",
    title: "Luxury Kitchen Transformation",
    category: "Before/After",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200", // After
    beforeUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1200", // Before (plain table)
    aspectRatio: "landscape",
    description: "Showcasing our complete modular kitchen renovation. From cluttered cabinets to a luxury seamless quartz layout."
  },
  {
    id: "g6",
    title: "Custom Walk-In Closet Installation",
    category: "Large Furniture",
    imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "portrait",
    description: "Master closet execution featuring floor-to-ceiling glass paneling and smart drawers with satin lining."
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Rajesh Gowda",
    rating: 5,
    text: "We ordered a complete teak wood dining set and a custom L-shape sofa from Prestige Furniture. Their Banashankari workshop team visited our home to measure, and delivered high quality products within our budget. The level of customization is incredible!",
    projectType: "Custom Sofa & Dining Table",
    date: "April 2026"
  },
  {
    id: "t2",
    name: "Dr. Ananya Rao",
    rating: 5,
    text: "Prestige renovated our complete 3BHK flat interiors in South Bengaluru. Outstanding craftsmanship, highly disciplined execution, and affordable rates. Their German soft-close fittings are top-tier. Highly recommended for premium home interior works!",
    projectType: "Turnkey 3BHK Home Interiors",
    date: "February 2026"
  },
  {
    id: "t3",
    name: "Vikram Shah",
    rating: 5,
    text: "Outstanding modular office workstations. We needed desk units, custom computer chairs, and reception desk panels for our startup office in JP Nagar. Not only did they complete it beforehand, but the pricing was at least 25% lower than fancy retailers.",
    projectType: "Office Furniture Suite",
    date: "May 2026"
  },
  {
    id: "t4",
    name: "Meera Fernandez",
    rating: 5,
    text: "Getting a custom wardrobe fitted into our tricky curved-wall bedroom felt impossible. Prestige Furniture built a sleek, seamless sliding glass door wardrobe that utilized every single inch perfectly. Extremely professional wood artisans!",
    projectType: "Bespoke Glass Slidewardrobe",
    date: "January 2026"
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: "s1",
    value: 19,
    suffix: "+",
    label: "Years Experience",
    description: "Mastering custom furniture craftsmanship since 2007."
  },
  {
    id: "s2",
    value: 4000,
    suffix: "+",
    label: "Happy Customers",
    description: "Trusted by elite households, builders, and corporates in Bengaluru."
  },
  {
    id: "s3",
    value: 100,
    suffix: "%",
    label: "Customized Designs",
    description: "Every item tailored exactly to client dimensional layouts."
  },
  {
    id: "s4",
    value: 2000,
    suffix: "+",
    label: "Sofas Manufactured",
    description: "Handcrafted high-density foam structures built for comfort."
  },
  {
    id: "s5",
    value: 5,
    suffix: " Year",
    label: "Craftsmanship Warranty",
    description: "Uncompromised materials from borer-free marine ply to seasoned teak."
  }
];
