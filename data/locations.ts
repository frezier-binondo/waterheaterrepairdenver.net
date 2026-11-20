export interface LocationItem {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  county: string;
  elevation: string;
  housingOverview: string;
  waterCharacteristics: string;
  weatherNotes: string;
  permitInfo: string;
  neighborhoods: string[];
  zipCodes: string[];
  heroImage: string;
  externalLink: { anchor: string; url: string };
  faqs: { q: string; a: string }[];
}

export const locationsData: LocationItem[] = [
  {
    slug: "aurora",
    name: "Aurora",
    h1: "Water Heater Services in Aurora, CO",
    metaTitle: "Water Heater Services Aurora, CO",
    metaDescription: "Water heater repair, installation and replacement in Aurora, CO. Licensed local plumbers, upfront pricing and fast scheduling. Get a free quote.",
    primaryKeyword: "water heater service Aurora CO",
    secondaryKeywords: ["water heater repair Aurora", "water heater plumber Aurora CO", "water heater installation Aurora", "water heater replacement Aurora"],
    county: "Arapahoe, Adams & Douglas Counties",
    elevation: "5,471 ft",
    housingOverview: "Aurora is one of the largest cities in Colorado, spanning parts of Arapahoe, Adams, and Douglas counties. That geographic expanse means dramatically diverse housing conditions. Older mid-century ranch homes and bungalows near Colfax Avenue and Original Aurora often feature cramped utility closets, original 1/2-inch gas piping, and atmospheric flue systems that predate modern standards. Conversely, expansive modern subdivisions in Southlands, Tallyn's Reach, Saddle Rock, and Murphy Creek feature multi-story layouts, large finished basements, luxury multi-head showers, and soaker tubs requiring high-capacity 75-gallon tanks or multi-unit tankless systems.",
    waterCharacteristics: "Aurora municipal water is supplied by Aurora Water, utilizing complex mountain reservoir storage. Mineral content varies significantly between older municipal pipeline grids and newer eastern growth zones. Hardness levels typically average between 70 to 140 mg/L (moderately hard to hard). Calcium carbonate deposits accumulate quickly on electric heating elements and tankless heat exchangers, making annual water heater flushing and descaling essential to prevent premature element burnout.",
    weatherNotes: "Located directly on the eastern plains edge, Aurora experiences extreme winter winds, rapid temperature drops, and bitter cold snaps. Unconditioned attached garages and perimeter utility closets can experience freezing temperatures that severely threaten exposed domestic water lines and hybrid heat pump units.",
    permitInfo: "Water heater replacements and fuel conversions in Aurora require plumbing permits and inspections through the City of Aurora Building Division. Licensed plumbers pull required permits to ensure proper seismic strapping, expansion tanks, and combustion venting.",
    neighborhoods: ["Original Aurora", "Southlands", "Tallyn's Reach", "Saddle Rock", "Murphy Creek", "Mission Viejo", "Heather Ridge", "Seven Hills"],
    zipCodes: ["80010", "80011", "80012", "80013", "80014", "80015", "80016", "80017", "80018"],
    heroImage: "/images/plumber-with-wrench-standing.jpg",
    externalLink: {
      anchor: "City of Aurora Building Division",
      url: "https://www.auroragov.org",
    },
    faqs: [
      { q: "How quickly can a plumber reach Aurora for emergency water heater repair?", a: "Licensed plumbers in our network serve Aurora daily, offering rapid dispatch across Original Aurora, Southlands, Saddle Rock, and Murphy Creek with same-day emergency arrival." },
      { q: "Do I need a permit for water heater replacement in Aurora?", a: "Yes. The City of Aurora requires plumbing permits for water heater replacements to certify gas line safety, venting clearance, and thermal expansion compliance. Your plumber handles the paperwork." },
      { q: "Why is water heater sediment buildup so prevalent in Aurora homes?", a: "Aurora's water carries dissolved mineral carbonates. As water heats, minerals crystallize and settle into a hard crust at the tank bottom, leading to popping noises and reduced hot water volume." },
    ],
  },
  {
    slug: "lakewood",
    name: "Lakewood",
    h1: "Water Heater Services in Lakewood, CO",
    metaTitle: "Water Heater Services Lakewood, CO",
    metaDescription: "Water heater repair, installation and replacement in Lakewood, CO. Licensed local plumbers, upfront pricing and fast scheduling. Get a free quote.",
    primaryKeyword: "water heater service Lakewood CO",
    secondaryKeywords: ["water heater repair Lakewood", "water heater plumber Lakewood CO", "water heater installation Lakewood", "water heater replacement Lakewood"],
    county: "Jefferson County",
    elevation: "5,518 ft",
    housingOverview: "Lakewood sits directly against the foothills west of Denver, characterized by established postwar residential developments. Mid-century brick ranches, 1960s bungalows, and 1970s split-levels dominate neighborhoods like Belmar, Green Mountain, and Bear Creek. Many homes have water heaters installed in basement utility nooks or adjacent to crawlspaces, where older galvanized piping, aging gate valves, and legacy flue connectors require careful inspection during replacement.",
    waterCharacteristics: "Lakewood is served by multiple water providers including Denver Water and Consolidated Mutual Water Company. Water hardness varies from 60 to 110 mg/L. Mineral scaling commonly coats sacrificial anode rods and accumulates on bottom tank heads, making proactive anode replacement and annual flushing critical to avoid tank leaks.",
    weatherNotes: "Proximity to the foothills creates sharp microclimate changes, including sudden upslope winter storms, rapid freezes, and high winds. Finished basements in Green Mountain and Bear Creek with walk-out lower levels require drain pans and flood detection to prevent costly water damage.",
    permitInfo: "Water heater installations in Lakewood are regulated by the City of Lakewood Building and Safety Division. Licensed plumbers submit plans and arrange follow-up inspections.",
    neighborhoods: ["Belmar", "Green Mountain", "Bear Creek", "Applewood", "Eiber", "Morse Park", "Kendrick Lake"],
    zipCodes: ["80214", "80215", "80226", "80227", "80228", "80232"],
    heroImage: "/images/technician-explaining-homeowner.jpg",
    externalLink: {
      anchor: "City of Lakewood Building Division",
      url: "https://www.lakewood.org",
    },
    faqs: [
      { q: "How long does a water heater repair take in Lakewood?", a: "Routine repairs like replacing heating elements, thermostats, or thermocouples typically take 1 to 2 hours once the technician arrives." },
      { q: "Why are basement drain pans critical for Lakewood homes?", a: "Many Lakewood homes have finished basement living spaces. A burst tank without a plumbed drain pan can release 50+ gallons of pressurized water across drywall and carpet." },
      { q: "Can I replace my old atmospheric heater with a tankless unit in Lakewood?", a: "Yes, provided gas line capacity (often 3/4-inch) and side-wall direct venting pathways through foundation walls are properly engineered." },
    ],
  },
  {
    slug: "arvada",
    name: "Arvada",
    h1: "Water Heater Services in Arvada, CO",
    metaTitle: "Water Heater Services Arvada, CO",
    metaDescription: "Water heater repair, installation and replacement in Arvada, CO. Licensed local plumbers, upfront pricing and fast scheduling. Get a free quote.",
    primaryKeyword: "water heater service Arvada CO",
    secondaryKeywords: ["water heater repair Arvada", "water heater plumber Arvada CO", "water heater installation Arvada", "water heater replacement Arvada"],
    county: "Jefferson & Adams Counties",
    elevation: "5,344 ft",
    housingOverview: "Arvada blends historic charm with rapid northwestern suburban expansion. Around Olde Town Arvada, historic century-old homes feature older plumbing stacks and compact mechanical spaces. In central Arvada, postwar ranches and 1970s split-levels are standard. Moving northwest toward Candelas, Leyden Rock, and Standley Lake, expansive modern custom homes feature advanced mechanical rooms with tankless water heaters, smart recirculation loops, and hybrid heat pump systems.",
    waterCharacteristics: "Arvada operates its own municipal water treatment system drawing from Clear Creek and Ralston Reservoir. Water hardness averages 75 to 130 mg/L. The mineral profile accelerates sediment crusting, making rumbling water heaters a frequent complaint among Arvada homeowners.",
    weatherNotes: "Northwest Arvada is exposed to notorious Chinook winds blowing down from the Rocky Mountain foothills with gusts exceeding 60 mph. These winds can cause pressure differentials that blow out standing pilot flames or disrupt natural draft water heater chimneys.",
    permitInfo: "Water heater installations in Arvada require permits through the City of Arvada Building Inspection Department. Upfront permitting guarantees safe gas unions, pressure relief discharge piping, and expansion tanks.",
    neighborhoods: ["Olde Town Arvada", "Candelas", "Leyden Rock", "Standley Lake", "Lake Arbor", "Alta Vista", "Meadowglen"],
    zipCodes: ["80002", "80003", "80004", "80005", "80007"],
    heroImage: "/images/plumber-kneeling-service.jpg",
    externalLink: {
      anchor: "City of Arvada Building Division",
      url: "https://www.arvada.org",
    },
    faqs: [
      { q: "Why does my Arvada water heater pilot light blow out during windy days?", a: "Down-drafts from strong foothill winds can blow down through older atmospheric flues. Installing a high-wind draft hood cap or upgrading to a sealed-combustion power-vent unit resolves this issue." },
      { q: "How can I tell if my Arvada water heater needs replacement or just flushing?", a: "If the heater is under 8 years old and rumbling, a professional sediment flush usually restores quiet operation. If water is leaking from the tank seams, replacement is unavoidable." },
      { q: "Do you service tankless water heaters in Candelas and Leyden Rock?", a: "Yes, our technicians specialize in Navien, Rinnai, and Noritz tankless units common in northwest Arvada developments." },
    ],
  },
  {
    slug: "westminster",
    name: "Westminster",
    h1: "Water Heater Services in Westminster, CO",
    metaTitle: "Water Heater Services Westminster, CO",
    metaDescription: "Water heater repair, installation and replacement in Westminster, CO. Licensed local plumbers, upfront pricing and fast scheduling. Get a free quote.",
    primaryKeyword: "water heater service Westminster CO",
    secondaryKeywords: ["water heater repair Westminster", "water heater plumber Westminster CO", "water heater installation Westminster", "water heater replacement Westminster"],
    county: "Adams & Jefferson Counties",
    elevation: "5,384 ft",
    housingOverview: "Westminster is a mature suburban corridor north of Denver. Neighborhoods developed between the 1970s and 1990s contain two-story homes and split-levels where original or second-generation water heaters are frequently past their 12-year design life. Modern infill around Westminster Station and the Church Ranch commercial sector includes multi-family townhomes and condos with tight interior mechanical closets.",
    waterCharacteristics: "Westminster treats water through the Semper and Northwest water treatment facilities. Moderate hardness leads to persistent mineral scale on heating elements and within tankless heat exchangers. Depleted anode rods left unserviced lead to premature internal tank corrosion.",
    weatherNotes: "Westminster experiences brisk plains winds and freezing winter temperatures. Power disruptions during heavy wet spring snowstorms can impact electric heaters and power-vented gas models.",
    permitInfo: "The City of Westminster Building Division mandates plumbing permits for all water heater installations to verify safety valve terminations and closed-loop expansion tanks.",
    neighborhoods: ["Westminster Station", "Standley Lake", "Church Ranch", "Hyland Hills", "Sheridan Green", "Countryside", "Legacy Ridge"],
    zipCodes: ["80020", "80021", "80030", "80031", "80234"],
    heroImage: "/images/outdoor-tankless-service-truck.jpg",
    externalLink: {
      anchor: "City of Westminster Building Department",
      url: "https://www.westminsterco.gov",
    },
    faqs: [
      { q: "Are same-day water heater replacements available in Westminster?", a: "Yes, licensed technicians maintain inventory of 40 and 50-gallon Bradford White and Rheem gas and electric units for immediate dispatch in Westminster." },
      { q: "What should I do if my Westminster water heater leaks from the top?", a: "Top leaks often come from corroded copper flex lines or dielectric nipples. These can be repaired without replacing the entire water heater if caught before corrosion reaches the tank." },
      { q: "Does Westminster water hardness require a water softener?", a: "While not mandatory, a water softener or dedicated scale filter significantly extends the life of water heaters and plumbing fixtures throughout Westminster." },
    ],
  },
  {
    slug: "centennial",
    name: "Centennial",
    h1: "Water Heater Services in Centennial, CO",
    metaTitle: "Water Heater Services Centennial, CO",
    metaDescription: "Water heater repair, installation and replacement in Centennial, CO. Licensed local plumbers, upfront pricing and fast scheduling. Get a free quote.",
    primaryKeyword: "water heater service Centennial CO",
    secondaryKeywords: ["water heater repair Centennial", "water heater plumber Centennial CO", "water heater installation Centennial", "water heater replacement Centennial"],
    county: "Arapahoe County",
    elevation: "5,830 ft",
    housingOverview: "Centennial is an established residential community in the south Denver metro area. Established neighborhoods built from the 1970s through the 1990s—such as Southglenn, Willow Creek, Cherry Knolls, and Foxfield—feature two-story family homes with expansive finished basements and attached garages. Water heaters are commonly installed in basement mechanical rooms or garage utility bays, where aging tanks over 10 years old represent high water damage liabilities.",
    waterCharacteristics: "Centennial is served by multiple water and sanitation districts, including Denver Water, East Cherry Creek Valley (ECCV), and Arapahoe County Water. Mineral profiles differ by district, but mineral sediment and anode depletion remain common causes of service calls.",
    weatherNotes: "Sitting at 5,830 feet, Centennial is higher in elevation than central Denver, receiving heavier winter snow and colder overnight temperatures. Garage-installed water heaters and hybrid heat pump units require proper freeze insulation.",
    permitInfo: "Plumbing permits in Centennial are processed through the City of Centennial Building Services and Arapahoe County.",
    neighborhoods: ["Southglenn", "Willow Creek", "Dove Valley", "Cherry Knolls", "Nob Hill", "Piney Creek", "Smoky Hill"],
    zipCodes: ["80111", "80112", "80121", "80122"],
    heroImage: "/images/standing-tank-water-heater.jpg",
    externalLink: {
      anchor: "City of Centennial Building Services",
      url: "https://www.centennialco.gov",
    },
    faqs: [
      { q: "Why is water heater replacement so common in Centennial right now?", a: "A massive percentage of Centennial homes were built in the 1980s and 1990s. Many second-generation water heaters installed in the 2010s are now crossing the 12–14 year threshold, prompting planned replacements." },
      { q: "How does Centennial's 5,830 ft elevation affect my gas water heater?", a: "Gas water heaters require proper high-altitude orifice sizing and flue draft verification to ensure complete combustion and prevent dangerous soot buildup." },
      { q: "Can a plumber add an expansion tank during replacement in Centennial?", a: "Yes, municipal plumbing codes in Centennial require a thermal expansion tank on all closed-loop water supplies to protect the water heater from extreme pressure spikes." },
    ],
  },
  {
    slug: "littleton",
    name: "Littleton",
    h1: "Water Heater Services in Littleton, CO",
    metaTitle: "Water Heater Services Littleton, CO",
    metaDescription: "Water heater repair, installation and replacement in Littleton, CO. Licensed local plumbers, upfront pricing and fast scheduling. Get a free quote.",
    primaryKeyword: "water heater service Littleton CO",
    secondaryKeywords: ["water heater repair Littleton", "water heater plumber Littleton CO", "water heater installation Littleton", "water heater replacement Littleton"],
    county: "Arapahoe, Douglas & Jefferson Counties",
    elevation: "5,351 ft",
    housingOverview: "Littleton features a charming historic downtown, mid-century neighborhoods along the South Platte River, and suburban communities expanding south. Historic properties often feature vintage galvanized supply piping and non-standard utility closets that require expert custom fitting. In newer subdivisions along Ken Caryl and Columbine, large single-family homes have high hot water demands.",
    waterCharacteristics: "Littleton water is provided by Denver Water and local sanitation districts. Dissolved minerals gradually deposit as sediment. Unmaintained tanks frequently suffer from noisy boiling and depleted anode rods that lead to rust-colored water.",
    weatherNotes: "Littleton's location near the mouth of the South Platte Canyon exposes it to rapid foothill weather shifts and heavy spring snows. Cold winter groundwater temperatures (sub-40°F) require heaters to work at maximum capacity.",
    permitInfo: "Littleton spans three counties, so permit jurisdictions vary by street address (City of Littleton, Arapahoe County, or Jefferson County). Licensed local plumbers confirm and pull appropriate permits.",
    neighborhoods: ["Downtown Littleton", "Columbine", "Ken Caryl", "TrailMark", "Heritage", "Southglenn Border"],
    zipCodes: ["80120", "80123", "80127", "80128"],
    heroImage: "/images/basement-tankless-maintenance.jpg",
    externalLink: {
      anchor: "City of Littleton Building Division",
      url: "https://www.littletongov.org",
    },
    faqs: [
      { q: "How do I know if my Littleton water heater needs repair or replacement?", a: "If your unit is under 8 years old and has an isolated problem (element, thermocouple, thermostat), repair is usually sensible. If the tank is over 10 years old or leaking from the bottom, replacement is the safe choice." },
      { q: "Are emergency weekend appointments available in Littleton?", a: "Yes, our network has on-call plumbers available 24/7 across Littleton for emergency leaks and no-hot-water situations." },
      { q: "Can older homes in Downtown Littleton accommodate tankless water heaters?", a: "Yes, but they may require upsizing the gas line from the meter and running new concentric PVC vents through exterior walls." },
    ],
  },
  {
    slug: "thornton",
    name: "Thornton",
    h1: "Water Heater Services in Thornton, CO",
    metaTitle: "Water Heater Services Thornton, CO",
    metaDescription: "Water heater repair, installation and replacement in Thornton, CO. Licensed local plumbers, upfront pricing and fast scheduling. Get a free quote.",
    primaryKeyword: "water heater service Thornton CO",
    secondaryKeywords: ["water heater repair Thornton", "water heater plumber Thornton CO", "water heater installation Thornton", "water heater replacement Thornton"],
    county: "Adams County",
    elevation: "5,351 ft",
    housingOverview: "Thornton is a rapidly growing northern Denver suburb. Older ranch and split-level homes in southern Thornton (near 84th Avenue) date from the 1960s and 1970s, where aging water heaters are frequently overdue for replacement. In northern Thornton—including Eastlake, Trail Winds, and Thorncreek—newer communities feature modern basements with high-efficiency gas power-vent or tankless units.",
    waterCharacteristics: "Thornton operates its own municipal water treatment facilities. Municipal water contains moderate mineral hardness that gradually accumulates as calcium scale on heat exchangers and tank bottoms, requiring annual flushing.",
    weatherNotes: "Open plains terrain subjects Thornton to severe winter winds, blizzards, and sub-zero cold waves. Water heaters in unheated utility areas need proper insulation, and gas exhaust flues must be shielded from drifting snow.",
    permitInfo: "Water heater replacements in Thornton require permits through the City of Thornton Building Inspection Division.",
    neighborhoods: ["Original Thornton", "Eastlake", "Trail Winds", "Thorncreek", "Signal Creek", "Woodcreek"],
    zipCodes: ["80229", "80233", "80241", "80260"],
    heroImage: "/images/technician-inspection-clipboard.jpg",
    externalLink: {
      anchor: "City of Thornton Building Department",
      url: "https://www.thorntonco.gov",
    },
    faqs: [
      { q: "How fast can a plumber arrive in Thornton for a leaking water heater?", a: "Emergency leak calls in Thornton receive prioritized dispatch, with licensed plumbers arriving quickly to shut off water and evaluate replacement." },
      { q: "Why does my Thornton water heater rumble during heating?", a: "Rumbling indicates sediment trapped on the tank bottom. Steam bubbles boil beneath the calcium sediment, causing popping sounds and wasted energy." },
      { q: "Does Thornton require expansion tanks?", a: "Yes, municipal plumbing code mandates thermal expansion tanks on closed-loop municipal water connections." },
    ],
  },
  {
    slug: "highlands-ranch",
    name: "Highlands Ranch",
    h1: "Water Heater Services in Highlands Ranch, CO",
    metaTitle: "Water Heater Services Highlands Ranch, CO",
    metaDescription: "Water heater repair, installation and replacement in Highlands Ranch, CO. Licensed local plumbers, upfront pricing and fast scheduling. Get a free quote.",
    primaryKeyword: "water heater service Highlands Ranch CO",
    secondaryKeywords: ["water heater repair Highlands Ranch", "water heater plumber Highlands Ranch CO", "water heater installation Highlands Ranch", "water heater replacement Highlands Ranch"],
    county: "Douglas County",
    elevation: "5,920 ft",
    housingOverview: "Highlands Ranch is a premier master-planned community in Douglas County, largely built from the 1990s onward. Homes here are typically larger (3,000 to 5,000+ sq ft), featuring finished basements, multiple bathrooms, soaking tubs, and dual-zone water heating or hot water recirculation loops. Many original 50 and 75-gallon water heaters are reaching the end of their operational lives, creating high demand for planned replacements and high-efficiency tankless conversions.",
    waterCharacteristics: "Highlands Ranch is served by Centennial Water and Sanitation District. Water hardness ranges from moderate to hard. Scale accumulation inside high-output burners and tankless heat exchangers is common, making annual chemical descaling and tank flushing essential.",
    weatherNotes: "At nearly 6,000 feet elevation, Highlands Ranch experiences colder winters and heavier snowfall than central Denver. High hot water demand coincides with the coldest months, when incoming groundwater is near freezing.",
    permitInfo: "Highlands Ranch is unincorporated and governed under Douglas County Building Division regulations. Local HOA guidelines may also govern exterior direct-vent wall terminations for tankless conversions.",
    neighborhoods: ["Northridge", "Southridge", "Eastridge", "Westridge", "Backcountry", "Highlands Ranch Town Center"],
    zipCodes: ["80126", "80129", "80130"],
    heroImage: "/images/tankless-descaling-bucket.jpg",
    externalLink: {
      anchor: "Douglas County Building Division",
      url: "https://www.douglas.co.us",
    },
    faqs: [
      { q: "Why do so many Highlands Ranch homes have two water heaters?", a: "Large homes with 4+ bathrooms and soaker tubs often exceed the capacity of a single 50-gallon tank. Plumbers install dual manifolded 50-gallon tanks or convert the home to a high-capacity tankless system with a dedicated recirculation pump." },
      { q: "How long does a tankless water heater last in Highlands Ranch?", a: "With annual descaling to counter mineral hardness, top-tier tankless systems (Navien, Rinnai) routinely last 20 to 25 years in Highlands Ranch." },
      { q: "Do Douglas County permits cover water heater installation in Highlands Ranch?", a: "Yes, licensed plumbers submit permits directly through Douglas County and schedule certified post-installation safety inspections." },
    ],
  },
];
