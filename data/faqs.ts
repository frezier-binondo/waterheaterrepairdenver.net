export interface FAQItem {
  id: string;
  category: "General" | "Cost & Pricing" | "Emergency" | "Technical & High-Altitude" | "Maintenance";
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "How do I know if my water heater needs repair or complete replacement?",
    answer: "Age and leak location are the two primary determining factors. Conventional storage tank water heaters have an average lifespan of 8 to 12 years in Denver's mineral water conditions. If your heater is under 8 years old and experiencing a component failure (such as a heating element, thermostat, thermocouple, or pressure relief valve), professional repair is almost always economical. However, if the cylindrical steel tank itself is leaking or rusting from the bottom, repair is structurally impossible and replacement is mandatory. A licensed plumber can test your unit and compare the cost of repair versus replacement."
  },
  {
    id: "faq-2",
    category: "Cost & Pricing",
    question: "How much does a water heater service call and repair cost in Denver?",
    answer: "Water heater repair costs depend on the fuel source, accessibility, and the specific component that failed. Minor repairs—such as replacing a thermocouple, heating element, pilot assembly, or drain valve—typically range between $150 and $350. Major repairs—such as smart gas control valves, tankless electronic circuit boards, or draft inducer blowers—range between $450 and $800. Our network provides upfront, transparent written pricing before any work begins so there are never surprises on your bill."
  },
  {
    id: "faq-3",
    category: "Emergency",
    question: "How quickly can a plumber arrive for an emergency leak or total heat loss?",
    answer: "Emergency calls—including active basement flooding, strong gas odors, or loss of heat during freezing Colorado winter snaps—receive immediate dispatch priority. Licensed plumbers in our network serve Denver, Aurora, Lakewood, Arvada, Westminster, Centennial, Littleton, Thornton, and Highlands Ranch with rapid same-day and after-hours emergency response windows."
  },
  {
    id: "faq-4",
    category: "General",
    question: "Do you service gas, electric, tankless, and commercial water heaters?",
    answer: "Yes. Our matching network connects homeowners and commercial facilities with independent, licensed Colorado master plumbers who specialize across natural gas atmospheric tanks, electric resistance units, on-demand condensing tankless systems (Navien, Rinnai, Noritz, Rheem), commercial boiler systems, and hybrid heat pump units."
  },
  {
    id: "faq-5",
    category: "Emergency",
    question: "What should I do immediately if my water heater is leaking water onto the floor?",
    answer: "First, immediately shut off the cold water supply valve located on top of the tank (turn the brass lever perpendicular or the round wheel clockwise). Second, shut off the energy source: turn the gas control dial to 'OFF' or switch off the dedicated 240V breaker in your electrical service panel. Third, relieve pressure by opening a hot water tap upstairs. Finally, call our emergency dispatch line at (456) 789-0123."
  },
  {
    id: "faq-6",
    category: "Technical & High-Altitude",
    question: "How does Denver's 5,280 ft elevation affect gas water heater performance?",
    answer: "Denver's elevation means air contains approximately 17% to 20% less oxygen per cubic foot than at sea level. According to national fuel gas codes enforced across Colorado, atmospheric gas water heaters must be properly derated by roughly 4% per 1,000 feet of elevation (~21% derate) using calibrated high-altitude burner orifices or manifold pressure adjustments. Improperly derated heaters suffer from incomplete combustion, yellow sooting flames, carbon monoxide spillage, and delayed ignition."
  },
  {
    id: "faq-7",
    category: "Cost & Pricing",
    question: "Do I need a city permit to replace a water heater in the Denver metro area?",
    answer: "Yes. The City and County of Denver, as well as surrounding municipal jurisdictions (Aurora, Lakewood, Arvada, Westminster, Centennial, Thornton, and Douglas County), require a plumbing permit and follow-up safety inspection for water heater replacements. This certifies that gas piping, closed-loop thermal expansion tanks, and combustion exhaust venting meet strict safety codes. Licensed plumbers handle all permit applications and filings."
  },
  {
    id: "faq-8",
    category: "Maintenance",
    question: "Why does my water heater make loud popping, banging, or rumbling noises?",
    answer: "Popping noises are caused by calcium and mineral sediment accumulation on the tank bottom. In Denver's moderately hard water, dissolved carbonates precipitate and form a hardened crust. Water trapped beneath this mineral layer boils into steam pockets that violently burst through the sediment, producing popping and kettle-like sounds. An annual professional pressurized water heater flush clears this buildup and restores quiet, efficient heating."
  },
  {
    id: "faq-9",
    category: "Technical & High-Altitude",
    question: "Can I convert from a storage tank to a tankless water heater in Denver?",
    answer: "Yes, in most homes. However, because Denver winter groundwater is very cold (38°F–42°F), on-demand systems must be sized for an 80°F temperature rise. Conversions also require evaluating your gas line capacity (often upsizing to 3/4-inch pipe to supply up to 199,000 BTUs) and installing dedicated direct-vent PVC or polypropylene pipes through exterior walls."
  },
  {
    id: "faq-10",
    category: "Emergency",
    question: "What should I do if I smell natural gas or rotten eggs near my water heater?",
    answer: "Do not operate light switches, do not use a phone inside, and do not attempt to light any flame. Evacuate all household members and pets immediately, leaving doors open if safe to do so. Once outside at a safe distance, call Xcel Energy's emergency leak hotline at 1-800-895-2999 or dial 911. Only re-enter once emergency personnel declare the property safe."
  },
  {
    id: "faq-11",
    category: "Maintenance",
    question: "What is a sacrificial anode rod and how often should it be replaced?",
    answer: "An anode rod is a magnesium or aluminum rod suspended inside the tank that sacrifices itself through galvanic electrolysis to protect the steel tank from rusting. In Denver's water, an anode rod is typically consumed within 3 to 5 years. Inspecting and replacing the anode rod before it dissolves can easily double the operational lifespan of your water heater."
  },
  {
    id: "faq-12",
    category: "Cost & Pricing",
    question: "Are there utility rebates available for new water heaters in Colorado?",
    answer: "Yes! High-efficiency ENERGY STAR certified tankless water heaters and hybrid heat pump water heaters qualify for generous rebates from Xcel Energy Colorado ($400 to $1,200+) as well as federal Inflation Reduction Act (IRA) 25C tax credits up to $2,000. Your installing plumber will provide qualifying model documentation for rebate submission."
  }
];
