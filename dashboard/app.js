// ---- DATA ----
const STATE_EXPOSURE = {"AL":5.8,"AK":4.2,"AZ":6.1,"AR":5.5,"CA":7.1,"CO":6.8,"CT":7.4,"DE":7.2,"FL":6.0,"GA":6.3,"HI":4.9,"ID":5.4,"IL":6.7,"IN":5.8,"IA":5.6,"KS":5.9,"KY":5.4,"LA":5.6,"ME":5.3,"MD":7.0,"MA":7.2,"MI":5.9,"MN":6.4,"MS":5.1,"MO":5.9,"MT":4.8,"NE":5.8,"NV":5.5,"NH":6.1,"NJ":7.1,"NM":5.3,"NY":7.3,"NC":6.2,"ND":5.2,"OH":6.1,"OK":5.6,"OR":6.3,"PA":6.3,"RI":6.4,"SC":5.7,"SD":5.3,"TN":5.9,"TX":6.5,"UT":6.6,"VT":5.5,"VA":7.0,"WA":7.2,"WV":5.0,"WI":5.8,"WY":4.9,"DC":7.8};

const STATE_NAMES = {"AL":"Alabama","AK":"Alaska","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","FL":"Florida","GA":"Georgia","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PA":"Pennsylvania","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming","DC":"District of Columbia"};

const STATE_TOP_OCC = {"AL":"Bookkeeping Clerks","AK":"Administrative Assistants","AZ":"Customer Service Reps","AR":"Bookkeeping Clerks","CA":"Software Developers","CO":"Software Developers","CT":"Insurance Underwriters","DE":"Financial Analysts","FL":"Customer Service Reps","GA":"Customer Service Reps","HI":"Retail Salespersons","ID":"Bookkeeping Clerks","IL":"Accountants & Auditors","IN":"Bookkeeping Clerks","IA":"Bookkeeping Clerks","KS":"Bookkeeping Clerks","KY":"Bookkeeping Clerks","LA":"Bookkeeping Clerks","ME":"Bookkeeping Clerks","MD":"Software Developers","MA":"Software Developers","MI":"Bookkeeping Clerks","MN":"Accountants & Auditors","MS":"Bookkeeping Clerks","MO":"Bookkeeping Clerks","MT":"Bookkeeping Clerks","NE":"Bookkeeping Clerks","NV":"Cashiers","NH":"Software Developers","NJ":"Accountants & Auditors","NM":"Bookkeeping Clerks","NY":"Accountants & Auditors","NC":"Customer Service Reps","ND":"Bookkeeping Clerks","OH":"Bookkeeping Clerks","OK":"Bookkeeping Clerks","OR":"Software Developers","PA":"Accountants & Auditors","RI":"Financial Analysts","SC":"Bookkeeping Clerks","SD":"Bookkeeping Clerks","TN":"Customer Service Reps","TX":"Customer Service Reps","UT":"Customer Service Reps","VT":"Bookkeeping Clerks","VA":"Software Developers","WA":"Software Developers","WV":"Bookkeeping Clerks","WI":"Bookkeeping Clerks","WY":"Bookkeeping Clerks","DC":"Software Developers"};

const NEWS = [
  {title:"WEF 2025: Fastest-Growing Roles — AI/ML Specialists, Security Analysts, Renewable Energy & EV Engineers Lead",source:"WEF Future of Jobs 2025",url:"https://www.weforum.org/publications/the-future-of-jobs-report-2025/",time:"2025"},
  {title:"WEF 2025: Fastest-Declining Roles — Cashiers, Admin Assistants, Printing Workers, Accountants & Auditors",source:"WEF Future of Jobs 2025",url:"https://www.weforum.org/publications/the-future-of-jobs-report-2025/",time:"2025"},
  {title:"WEF 2025: AI, Robots & Autonomous Systems Are Primary Drivers of Clerical Role Decline Globally",source:"WEF Future of Jobs 2025",url:"https://www.weforum.org/publications/the-future-of-jobs-report-2025/",time:"2025"},
  {title:"WEF 2025: Green Transition Driving Growth — EV Specialists, Environmental & Renewable Energy Engineers in Top 15",source:"WEF Future of Jobs 2025",url:"https://www.weforum.org/publications/the-future-of-jobs-report-2025/",time:"2025"},
  {title:"WEF 2025: Geopolitical Fragmentation Boosting Security Management Specialist Demand — Top 5 Fastest-Growing",source:"WEF Future of Jobs 2025",url:"https://www.weforum.org/publications/the-future-of-jobs-report-2025/",time:"2025"},
  {title:"WEF Future of Jobs 2025: 170M New Roles Created, 92M Displaced by AI & Automation",source:"World Economic Forum",url:"https://www.weforum.org/publications/the-future-of-jobs-report-2025/",time:"2025"},
  {title:"Goldman Sachs: AI Could Impact 300 Million Full-Time Jobs Globally",source:"Goldman Sachs Research",url:"https://www.goldmansachs.com/intelligence/pages/generative-ai-could-raise-global-gdp-by-7-percent.html",time:"2023"},
  {title:"OpenAI/UPenn: GPT-4 Affects 80% of US Workforce at Some Level",source:"Eloundou et al. 2023",url:"https://arxiv.org/abs/2303.10130",time:"2023"},
  {title:"McKinsey: 12M US Workers May Need to Switch Occupations by 2030",source:"McKinsey Global Institute",url:"https://www.mckinsey.com",time:"2025"},
  {title:"BLS: Computer & IT Occupations Projected to Grow 13% by 2033",source:"Bureau of Labor Statistics",url:"https://www.bls.gov/ooh/computer-and-information-technology/home.htm",time:"2024"},
  {title:"MIT: AI Exposure Concentrated in High-Wage Professional Roles",source:"MIT Work of the Future",url:"https://workofthefuture.mit.edu",time:"2024"},
  {title:"Accenture: 44% of Working Hours Automatable with Current AI by 2028",source:"Accenture Research",url:"https://www.accenture.com",time:"2025"},
  {title:"Felten et al.: Measuring AI Exposure for 800+ Occupations Using O*NET",source:"Princeton / NBER 2023",url:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4350925",time:"2023"},
  {title:"Stanford AI Index 2024: Comprehensive Benchmarks on AI Capability, Adoption & Economic Impact",source:"Stanford HAI",url:"https://aiindex.stanford.edu/report/",time:"2024"},
  {title:"IMF 2024: Gen-AI Could Affect 40% of Jobs Globally — Complementing or Displacing Labour",source:"IMF Staff Discussion Notes SDN/2024/001",url:"https://www.imf.org/en/Publications/Staff-Discussion-Notes/Issues/2024/01/14/Gen-AI",time:"2024"},
  {title:"Brynjolfsson, Li & Raymond: Generative AI at Work — Productivity Gains of 14% Among Customer Support Agents",source:"arxiv.org / Nov 2024",url:"https://arxiv.org/abs/2304.11771",time:"2024"},
  {title:"Harvard Business School: AI Navigates Jagged Frontier — Boosts Knowledge Worker Output by 40% on Some Tasks",source:"Dell'Acqua et al. / Harvard Business School 2023",url:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321",time:"2023"},
  {title:"Noy & Zhang (Science 2023): Generative AI Increases Worker Productivity — Strongest Gains for Lower-Skilled Workers",source:"Science Vol. 381 / 2023",url:"https://www.science.org/doi/10.1126/science.adh2586",time:"2023"},
  {title:"David Autor (NBER 2024): AI Could Rebuild Middle-Class Jobs If Directed Toward Task Augmentation vs. Automation",source:"NBER Working Paper 32140",url:"https://www.nber.org/system/files/working_papers/w32140/w32140.pdf",time:"2024"},
  {title:"IFR World Robotics 2024: Global Robot Density in Factories Doubled in Seven Years",source:"International Federation of Robotics",url:"https://ifr.org/ifr-press-releases/news/global-robot-density-in-factories-doubled-in-seven-years",time:"2024"},
  {title:"World Bank 2024: Generative AI Adoption Highest in High-Income, High-Education Countries",source:"World Bank Policy Research WP 10870",url:"https://documents1.worldbank.org/curated/en/099720008192430535/pdf/IDU15f321eb5148701472d1a88813ab677be07b0.pdf",time:"2024"},
  {title:"WEF 2024: Leveraging Generative AI for Job Augmentation and Workforce Productivity",source:"World Economic Forum",url:"https://www.weforum.org/publications/the-future-of-jobs-report-2025/",time:"2024"},
  {title:"BLS OES May 2026: National Employment & Wage Data Across All US Jobs",source:"Bureau of Labor Statistics",url:"https://www.bls.gov/oes/",time:"2026"},
  {title:"BLS Occupational Outlook Handbook: Detailed Data on 341 US Occupations",source:"Bureau of Labor Statistics",url:"https://www.bls.gov/ooh/",time:"2026"},
];

// ---- UTILITY ----
function fmtEmp(n) {
  if (n >= 1e6) return (n/1e6).toFixed(1)+'M';
  if (n >= 1e3) return (n/1e3).toFixed(0)+'K';
  return n.toString();
}
function fmtWage(n) {
  if (!n || n === 0) return 'N/A';
  if (n >= 1000) return '$' + (n/1000).toFixed(0) + 'K';
  return '$' + n;
}
function exposureColor(e) {
  if (e <= 2) return '#16a34a';
  if (e <= 4) return '#4ade80';
  if (e <= 5) return '#a3e635';
  if (e === 6) return '#facc15';
  if (e === 7) return '#fb923c';
  if (e <= 8) return '#f97316';
  if (e <= 9) return '#ef4444';
  return '#dc2626';
}
function exposureBg(e) {
  // returns a darker version for cell backgrounds
  if (e <= 2) return '#0d3320';
  if (e <= 4) return '#1a4d1a';
  if (e <= 5) return '#3a4a10';
  if (e === 6) return '#4a3a00';
  if (e === 7) return '#4a2800';
  if (e <= 8) return '#4a1e00';
  return '#4a0a0a';
}

// Clock
function updateClock() {
  const now = new Date();
  const h = String(now.getUTCHours()).padStart(2,'0');
  const m = String(now.getUTCMinutes()).padStart(2,'0');
  const s = String(now.getUTCSeconds()).padStart(2,'0');
  document.getElementById('utc-clock').textContent = h+':'+m+':'+s+' UTC';
}
setInterval(updateClock, 1000);
updateClock();

// Filter state
let activeFilter = 'all';
let activeSector = 'all';

function getFiltered(data) {
  return data.filter(d => {
    let ok = true;
    if (activeFilter === 'low') ok = d.e <= 3;
    else if (activeFilter === 'med') ok = d.e >= 4 && d.e <= 6;
    else if (activeFilter === 'high') ok = d.e >= 7;
    if (activeSector !== 'all') ok = ok && d.s === activeSector;
    return ok;
  });
}

const OCCUPATIONS = [{"t":"Accountants and auditors","s":"Business & Finance","e":8,"emp":1448290,"w":93520,"o":5,"od":"Faster than average","edu":"Bachelor's degree","r":"Accountancy is a fundamentally digital occupation centered on data analysis, regulatory compliance, and reporting, all of which are highly susceptible to AI and robotic process aut","soc":"13-2011","slug":"accountants-and-auditors","cat":"business-and-financial"},{"t":"Actors","s":"Entertainment","e":7,"emp":38800,"w":48526,"o":0,"od":"Little or no change","edu":"Some college, no degree","r":"While live theater and physical presence on set remain human-centric, the occupation is highly exposed due to AI's ability to generate digital likenesses, synthesize voices, and re","soc":"27-2011","slug":"actors","cat":"entertainment-and-sports"},{"t":"Actuaries","s":"Mathematics","e":8,"emp":28340,"w":134990,"o":22,"od":"Much faster than average","edu":"Bachelor's degree","r":"Actuarial work is fundamentally digital, involving the analysis of large datasets, statistical modeling, and financial forecasting—all areas where AI and machine learning excel. Wh","soc":"15-2011","slug":"actuaries","cat":"math"},{"t":"Administrative services and facilities managers","s":"Management","e":5,"emp":422600,"w":106880,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"This occupation is a hybrid of digital knowledge work and physical site management. While AI can significantly automate administrative tasks like recordkeeping, supply procurement,","soc":"","slug":"administrative-services-managers","cat":"management"},{"t":"Adult basic and secondary education and ESL teachers","s":"Education","e":7,"emp":40900,"w":59950,"o":-14,"od":"Decline","edu":"Bachelor's degree","r":"The core work product—language instruction, literacy training, and test preparation—is fundamentally digital and information-based, making it highly susceptible to AI-driven tutori","soc":"","slug":"adult-literacy-and-ged-teachers","cat":"education-training-and-library"},{"t":"Advertising sales agents","s":"Sales","e":7,"emp":97470,"w":76350,"o":-6,"od":"Decline","edu":"High school diploma or equivalent","r":"The core of this occupation involves digital knowledge work such as analyzing sales statistics, preparing media kits, and drafting contracts, all of which are highly susceptible to","soc":"41-3011","slug":"advertising-sales-agents","cat":"sales"},{"t":"Advertising, promotions, and marketing managers","s":"Management","e":8,"emp":434000,"w":159660,"o":6,"od":"Faster than average","edu":"Bachelor's degree","r":"This occupation is predominantly digital and information-based, involving market research, data analysis, and content strategy—all areas where AI is rapidly advancing. While high-l","soc":"","slug":"advertising-promotions-and-marketing-managers","cat":"management"},{"t":"Aerospace engineering and operations technologists and technicians","s":"Architecture & Eng","e":5,"emp":9300,"w":79830,"o":8,"od":"Much faster than average","edu":"Associate's degree","r":"This occupation involves a significant amount of physical labor, such as building test facilities, installing instruments, and maintaining hardware, which provides a buffer against","soc":"","slug":"aerospace-engineering-and-operations-technicians","cat":"architecture-and-engineering"},{"t":"Aerospace engineers","s":"Architecture & Eng","e":7,"emp":68440,"w":141180,"o":6,"od":"Faster than average","edu":"Bachelor's degree","r":"Aerospace engineering is a high-level knowledge occupation where core tasks like aerodynamic modeling, structural analysis, and propulsion design are increasingly performed using d","soc":"17-2011","slug":"aerospace-engineers","cat":"architecture-and-engineering"},{"t":"Agricultural and food science technicians","s":"Science","e":4,"emp":38900,"w":48480,"o":5,"od":"Faster than average","edu":"Associate's degree","r":"This occupation involves a significant amount of physical labor, such as collecting biological samples, maintaining farm equipment, and operating laboratory hardware, which provide","soc":"","slug":"agricultural-and-food-science-technicians","cat":"life-physical-and-social-science"},{"t":"Agricultural and food scientists","s":"Science","e":6,"emp":38700,"w":78770,"o":6,"od":"Faster than average","edu":"Bachelor's degree","r":"This occupation involves a significant amount of digital knowledge work, including data analysis, research synthesis, and report writing, which are highly susceptible to AI enhance","soc":"","slug":"agricultural-and-food-scientists","cat":"life-physical-and-social-science"},{"t":"Agricultural engineers","s":"Architecture & Eng","e":6,"emp":1700,"w":84630,"o":6,"od":"Faster than average","edu":"Bachelor's degree","r":"Agricultural engineering is a hybrid role that combines digital design and data analysis with physical site visits and hardware testing. While AI will significantly automate core t","soc":"","slug":"agricultural-engineers","cat":"architecture-and-engineering"},{"t":"Agricultural workers","s":"Agriculture","e":3,"emp":812600,"w":35980,"o":-3,"od":"Decline","edu":"See How to Become One","r":"The core of this occupation involves physical labor, animal handling, and operating machinery in unpredictable outdoor environments, which provides a strong natural barrier to AI. ","soc":"","slug":"agricultural-workers","cat":"farming-fishing-and-forestry"},{"t":"Air traffic controllers","s":"Transportation","e":7,"emp":24100,"w":144580,"o":1,"od":"Slower than average","edu":"Associate's degree","r":"The core work is fundamentally digital and data-driven, involving the monitoring of radar screens and the processing of complex spatial information to ensure aircraft separation. W","soc":"","slug":"air-traffic-controllers","cat":"transportation-and-material-moving"},{"t":"Aircraft and avionics equipment mechanics and technicians","s":"Installation & Repair","e":3,"emp":160800,"w":79140,"o":5,"od":"Faster than average","edu":"Postsecondary nondegree award","r":"The core of this occupation involves physical labor, manual dexterity, and real-time troubleshooting in a physical environment, which provides a strong barrier against AI automatio","soc":"","slug":"aircraft-and-avionics-equipment-mechanics-and-technicians","cat":"installation-maintenance-and-repair"},{"t":"Airline and commercial pilots","s":"Transportation","e":5,"emp":155400,"w":198100,"o":4,"od":"As fast as average","edu":"See How to Become One","r":"The occupation is a hybrid of high-level digital information processing and critical physical presence. While AI and advanced automation can handle navigation, flight planning, and","soc":"","slug":"airline-and-commercial-pilots","cat":"transportation-and-material-moving"},{"t":"Animal care and service workers","s":"Personal Care","e":2,"emp":439400,"w":33860,"o":11,"od":"Much faster than average","edu":"High school diploma or equivalent","r":"The core duties of this occupation are physical and require real-time presence, such as feeding, grooming, cleaning, and physically training animals. AI may assist with peripheral ","soc":"","slug":"animal-care-and-service-workers","cat":"personal-care-and-service"},{"t":"Announcers and DJs","s":"Media & Comms","e":7,"emp":39500,"w":45115,"o":-2,"od":"Decline","edu":"See How to Become One","r":"The occupation is split between highly exposed digital work and less exposed physical work. Broadcast and radio roles are under significant threat from AI-generated voices and auto","soc":"","slug":"announcers","cat":"media-and-communication"},{"t":"Anthropologists and archeologists","s":"Science","e":5,"emp":8070,"w":71070,"o":4,"od":"As fast as average","edu":"Master's degree","r":"This occupation is a hybrid of physical fieldwork and digital knowledge work. While AI can significantly automate data analysis, pattern recognition in artifacts, and report writin","soc":"19-3091","slug":"anthropologists-and-archeologists","cat":"life-physical-and-social-science"},{"t":"Arbitrators, mediators, and conciliators","s":"Legal","e":7,"emp":9100,"w":67710,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"This occupation is primarily digital and information-based, involving the analysis of legal documents, evidence, and the drafting of settlement agreements—tasks where AI is rapidly","soc":"","slug":"arbitrators-mediators-and-conciliators","cat":"legal"},{"t":"Architects","s":"Architecture & Eng","e":7,"emp":111140,"w":103390,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"Architects perform high-level knowledge work that is increasingly digital, utilizing CADD and BIM software which is highly susceptible to AI-driven automation in generative design ","soc":"17-1011","slug":"architects","cat":"architecture-and-engineering"},{"t":"Architectural and engineering managers","s":"Management","e":7,"emp":210340,"w":175710,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"This occupation is predominantly knowledge-based and digital, involving project planning, budgeting, and technical oversight that can be significantly enhanced by AI tools. While t","soc":"11-9041","slug":"architectural-and-engineering-managers","cat":"management"},{"t":"Archivists, curators, and museum workers","s":"Education","e":6,"emp":40200,"w":57100,"o":6,"od":"Faster than average","edu":"See How to Become One","r":"This occupation is a hybrid of digital knowledge work and physical preservation. AI will significantly automate archival tasks like cataloging, metadata generation, and electronic ","soc":"","slug":"curators-museum-technicians-and-conservators","cat":"education-training-and-library"},{"t":"Art directors","s":"Arts & Design","e":8,"emp":50370,"w":128100,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"Art directors work in a fundamentally digital domain where AI is rapidly advancing in image generation, layout design, and video synthesis. While the role requires high-level human","soc":"27-1011","slug":"art-directors","cat":"arts-and-design"},{"t":"Assemblers and fabricators","s":"Production","e":3,"emp":1885400,"w":43570,"o":-1,"od":"Decline","edu":"High school diploma or equivalent","r":"The core of this occupation involves physical manipulation, manual dexterity, and real-time adjustments in a physical environment, which provides a significant buffer against AI. W","soc":"","slug":"assemblers-and-fabricators","cat":"production"},{"t":"Athletes and sports competitors","s":"Entertainment","e":1,"emp":19100,"w":62360,"o":5,"od":"Faster than average","edu":"No formal educational credential","r":"The core of this occupation is physical performance, manual dexterity, and real-time human presence in the physical world, which AI cannot replicate. While AI is used as a peripher","soc":"","slug":"athletes-and-sports-competitors","cat":"entertainment-and-sports"},{"t":"Athletic trainers","s":"Healthcare","e":3,"emp":33900,"w":60250,"o":11,"od":"Much faster than average","edu":"Master's degree","r":"The core duties of athletic trainers—such as applying tape/braces, providing emergency first aid on the field, and performing manual rehabilitation—require physical presence and ta","soc":"","slug":"athletic-trainers","cat":"healthcare"},{"t":"Atmospheric scientists, including meteorologists","s":"Science","e":8,"emp":9400,"w":97450,"o":1,"od":"Slower than average","edu":"Bachelor's degree","r":"The core of this occupation involves analyzing digital data, running computer models, and writing code, all of which are highly susceptible to AI advancement. Machine learning is a","soc":"","slug":"atmospheric-scientists-including-meteorologists","cat":"life-physical-and-social-science"},{"t":"Audiologists","s":"Healthcare","e":4,"emp":15800,"w":92120,"o":9,"od":"Much faster than average","edu":"Doctoral or professional degree","r":"Audiology is a clinical healthcare profession that requires physical presence for examinations, wax removal, and fitting hardware like hearing aids or cochlear implants. While AI w","soc":"","slug":"audiologists","cat":"healthcare"},{"t":"Automotive body and glass repairers","s":"Installation & Repair","e":2,"emp":193000,"w":50680,"o":2,"od":"Slower than average","edu":"High school diploma or equivalent","r":"The core tasks are highly physical, involving manual dexterity, welding, and the use of pneumatic tools in unpredictable repair environments that are difficult to automate. AI's pr","soc":"","slug":"automotive-body-and-glass-repairers","cat":"installation-maintenance-and-repair"},{"t":"Automotive service technicians and mechanics","s":"Installation & Repair","e":3,"emp":688840,"w":55260,"o":4,"od":"As fast as average","edu":"Postsecondary nondegree award","r":"The core of this occupation involves physical labor, manual dexterity, and real-time mechanical repair in a physical environment, which provides a strong barrier against AI automat","soc":"49-3023","slug":"automotive-service-technicians-and-mechanics","cat":"installation-maintenance-and-repair"},{"t":"Bakers","s":"Production","e":2,"emp":231890,"w":37670,"o":6,"od":"Faster than average","edu":"No formal educational credential","r":"The core duties of a baker are physical and sensory, involving manual dexterity for shaping dough and real-time monitoring of physical products in high-heat environments. While AI ","soc":"51-3011","slug":"bakers","cat":"production"},{"t":"Barbers, hairstylists, and cosmetologists","s":"Personal Care","e":2,"emp":651200,"w":35420,"o":5,"od":"Faster than average","edu":"Postsecondary nondegree award","r":"The core of this occupation involves manual dexterity and physical interaction in a highly unpredictable environment (human hair and skin). While AI can assist with peripheral task","soc":"","slug":"barbers-hairstylists-and-cosmetologists","cat":"personal-care-and-service"},{"t":"Bartenders","s":"Food Service","e":2,"emp":756700,"w":33530,"o":6,"od":"Faster than average","edu":"No formal educational credential","r":"The core of bartending involves physical manipulation of objects, manual cleaning, and real-time social interaction in a physical environment. While AI can assist with peripheral t","soc":"","slug":"bartenders","cat":"food-preparation-and-serving"},{"t":"Bill and account collectors","s":"Office & Admin","e":9,"emp":165020,"w":48370,"o":-10,"od":"Decline","edu":"High school diploma or equivalent","r":"This occupation is almost entirely digital, consisting of data analysis, skip tracing, and communication via phone or computer. AI and automated systems are already driving a proje","soc":"43-3011","slug":"bill-and-account-collectors","cat":"office-and-administrative-support"},{"t":"Biochemists and biophysicists","s":"Science","e":7,"emp":35600,"w":103650,"o":6,"od":"Faster than average","edu":"Doctoral or professional degree","r":"This occupation is heavily centered on knowledge work, data analysis, and complex modeling, all of which are being revolutionized by AI (e.g., AlphaFold for protein structure predi","soc":"","slug":"biochemists-and-biophysicists","cat":"life-physical-and-social-science"},{"t":"Bioengineers and biomedical engineers","s":"Architecture & Eng","e":7,"emp":22200,"w":106950,"o":5,"od":"Faster than average","edu":"Bachelor's degree","r":"This occupation involves heavy digital knowledge work, including software design, statistical modeling, and technical writing, all of which are highly susceptible to AI augmentatio","soc":"","slug":"biomedical-engineers","cat":"architecture-and-engineering"},{"t":"Biological technicians","s":"Science","e":5,"emp":76190,"w":58020,"o":3,"od":"As fast as average","edu":"Bachelor's degree","r":"The role is a hybrid of physical laboratory work and digital data analysis. While AI can significantly automate data interpretation, report writing, and experimental modeling, the ","soc":"19-4021","slug":"biological-technicians","cat":"life-physical-and-social-science"},{"t":"Boilermakers","s":"Construction","e":2,"emp":10170,"w":76900,"o":-2,"od":"Decline","edu":"High school diploma or equivalent","r":"The core work is highly physical, involving manual assembly, welding, and repair in unpredictable and cramped environments like boilers and tanks. While AI can assist with peripher","soc":"47-2011","slug":"boilermakers","cat":"construction-and-extraction"},{"t":"Bookkeeping, accounting, and auditing clerks","s":"Office & Admin","e":9,"emp":1613400,"w":49210,"o":-6,"od":"Decline","edu":"Some college, no degree","r":"This occupation is almost entirely digital and involves routine information processing, data entry, and mathematical verification—tasks that AI and automated software already perfo","soc":"","slug":"bookkeeping-accounting-and-auditing-clerks","cat":"office-and-administrative-support"},{"t":"Broadcast, sound, and video technicians","s":"Media & Comms","e":6,"emp":146100,"w":56600,"o":1,"od":"Slower than average","edu":"See How to Become One","r":"This occupation is a hybrid of physical labor (setting up hardware, rigging lights, running cables) and digital knowledge work (mixing sound, editing video, managing broadcast sign","soc":"","slug":"broadcast-and-sound-engineering-technicians","cat":"media-and-communication"},{"t":"Budget analysts","s":"Business & Finance","e":8,"emp":47170,"w":93920,"o":1,"od":"Slower than average","edu":"Bachelor's degree","r":"Budget analysts perform work that is almost entirely digital, involving data analysis, financial modeling, and report writing—all areas where AI is highly capable. While the role r","soc":"13-2031","slug":"budget-analysts","cat":"business-and-financial"},{"t":"Bus drivers","s":"Transportation","e":4,"emp":546100,"w":48370,"o":1,"od":"Slower than average","edu":"High school diploma or equivalent","r":"While autonomous driving technology is a direct long-term threat to the core task of vehicle operation, the role involves significant physical and interpersonal responsibilities th","soc":"","slug":"bus-drivers","cat":"transportation-and-material-moving"},{"t":"Butchers","s":"Production","e":2,"emp":143100,"w":38960,"o":1,"od":"Slower than average","edu":"No formal educational credential","r":"The core of this occupation involves manual dexterity, physical strength, and real-time interaction with physical products in a cold, unpredictable environment. While AI can assist","soc":"","slug":"butchers-and-meat-cutters","cat":"production"},{"t":"Calibration technologists and technicians","s":"Installation & Repair","e":4,"emp":15800,"w":65040,"o":5,"od":"Faster than average","edu":"Associate's degree","r":"This occupation involves a significant physical component, requiring manual dexterity to adjust hardware and presence in industrial or laboratory environments. While AI can automat","soc":"","slug":"calibration-technologists-and-technicians","cat":"installation-maintenance-and-repair"},{"t":"Cardiovascular technologists and technicians","s":"Healthcare","e":4,"emp":64700,"w":67260,"o":3,"od":"As fast as average","edu":"Associate's degree","r":"The role requires significant physical presence for tasks like positioning patients, attaching electrodes, and assisting in invasive surgical procedures. While AI will heavily auto","soc":"","slug":"cardiovascular-technologists-and-technicians","cat":"healthcare"},{"t":"Career and technical education teachers","s":"Education","e":4,"emp":239600,"w":62910,"o":-1,"od":"Decline","edu":"Bachelor's degree","r":"While AI can significantly automate lesson planning, grading, and the delivery of theoretical knowledge, the core of this occupation involves supervising hands-on activities in phy","soc":"","slug":"career-and-technical-education-teachers","cat":"education-training-and-library"},{"t":"Carpenters","s":"Construction","e":2,"emp":697740,"w":64040,"o":4,"od":"As fast as average","edu":"High school diploma or equivalent","r":"Carpentry is a highly physical occupation requiring manual dexterity, strength, and real-time problem-solving in unpredictable physical environments. While AI may assist with perip","soc":"47-2031","slug":"carpenters","cat":"construction-and-extraction"},{"t":"Cartographers and photogrammetrists","s":"Architecture & Eng","e":8,"emp":13400,"w":78380,"o":6,"od":"Faster than average","edu":"Bachelor's degree","r":"The core tasks of collecting, analyzing, and visualizing geospatial data are fundamentally digital and highly susceptible to AI-driven automation. Computer vision and machine learn","soc":"","slug":"cartographers-and-photogrammetrists","cat":"architecture-and-engineering"},{"t":"Cashiers","s":"Sales","e":7,"emp":3148030,"w":31810,"o":-10,"od":"Decline","edu":"No formal educational credential","r":"While the job has physical components like bagging and stocking, the core function of processing transactions is highly susceptible to automation through computer vision and AI-dri","soc":"41-2011","slug":"cashiers","cat":"sales"},{"t":"Chefs and head cooks","s":"Food Service","e":3,"emp":197300,"w":60990,"o":7,"od":"Much faster than average","edu":"High school diploma or equivalent","r":"The core of the job is highly physical and sensory, requiring manual dexterity, real-time human leadership in a fast-paced kitchen, and the use of taste and smell. While AI can sig","soc":"","slug":"chefs-and-head-cooks","cat":"food-preparation-and-serving"},{"t":"Chemical engineers","s":"Architecture & Eng","e":6,"emp":20330,"w":128430,"o":3,"od":"As fast as average","edu":"Bachelor's degree","r":"Chemical engineering involves a significant amount of digital knowledge work, including process simulation, CAD design, and data analysis, which are highly susceptible to AI-driven","soc":"17-2041","slug":"chemical-engineers","cat":"architecture-and-engineering"},{"t":"Chemical technicians","s":"Science","e":5,"emp":55640,"w":61300,"o":4,"od":"As fast as average","edu":"Associate's degree","r":"The role is a hybrid of physical laboratory work and digital data analysis. While AI can significantly automate the compilation of results, report generation, and predictive modeli","soc":"19-4031","slug":"chemical-technicians","cat":"life-physical-and-social-science"},{"t":"Chemists and materials scientists","s":"Science","e":7,"emp":95500,"w":86620,"o":5,"od":"Faster than average","edu":"Bachelor's degree","r":"This occupation is a high-level blend of digital knowledge work and physical laboratory experimentation. AI is already revolutionizing the digital aspects—such as molecular modelin","soc":"","slug":"chemists-and-materials-scientists","cat":"life-physical-and-social-science"},{"t":"Childcare workers","s":"Personal Care","e":2,"emp":520180,"w":33140,"o":-3,"od":"Decline","edu":"High school diploma or equivalent","r":"The core responsibilities of this role—physical care, safety monitoring, hygiene, and emotional support—require a physical presence and human empathy that AI cannot replicate. Whil","soc":"39-9011","slug":"childcare-workers","cat":"personal-care-and-service"},{"t":"Chiropractors","s":"Healthcare","e":3,"emp":57200,"w":79000,"o":10,"od":"Much faster than average","edu":"Doctoral or professional degree","r":"The core of chiropractic work is highly physical, requiring manual dexterity for spinal adjustments and real-time physical assessment of a patient's musculoskeletal system. While A","soc":"","slug":"chiropractors","cat":"healthcare"},{"t":"Civil engineering technologists and technicians","s":"Architecture & Eng","e":6,"emp":64900,"w":64200,"o":2,"od":"Slower than average","edu":"Associate's degree","r":"This occupation is a hybrid of digital knowledge work and physical field work. While AI and advanced CAD software are significantly automating drafting, cost estimation, and data a","soc":"","slug":"civil-engineering-technicians","cat":"architecture-and-engineering"},{"t":"Civil engineers","s":"Architecture & Eng","e":6,"emp":355410,"w":107050,"o":5,"od":"Faster than average","edu":"Bachelor's degree","r":"Civil engineering involves significant digital knowledge work, including CAD design, data analysis, and cost estimation, which are highly susceptible to AI-driven productivity gain","soc":"17-2051","slug":"civil-engineers","cat":"architecture-and-engineering"},{"t":"Claims adjusters, appraisers, examiners, and investigators","s":"Business & Finance","e":7,"emp":365300,"w":76790,"o":-5,"od":"Decline","edu":"See How to Become One","r":"This occupation is heavily focused on information processing, document review, and data-driven decision-making, all of which are highly susceptible to AI automation. While physical","soc":"","slug":"claims-adjusters-appraisers-examiners-and-investigators","cat":"business-and-financial"},{"t":"Clinical laboratory technologists and technicians","s":"Healthcare","e":5,"emp":343040,"w":65320,"o":2,"od":"Slower than average","edu":"Bachelor's degree","r":"This occupation is a hybrid of physical laboratory work and digital data analysis. While AI and computer vision are rapidly automating the interpretation of slides and test results","soc":"29-2010","slug":"clinical-laboratory-technologists-and-technicians","cat":"healthcare"},{"t":"Coaches and scouts","s":"Entertainment","e":4,"emp":250940,"w":58910,"o":6,"od":"Faster than average","edu":"Bachelor's degree","r":"While AI is significantly impacting the analytical side of the job—such as processing player data, optimizing game strategy, and analyzing opponent film—the core of the occupation ","soc":"27-2022","slug":"coaches-and-scouts","cat":"entertainment-and-sports"},{"t":"Community health workers","s":"Community Service","e":3,"emp":65100,"w":51030,"o":11,"od":"Much faster than average","edu":"High school diploma or equivalent","r":"The core of this occupation is built on trust, cultural sensitivity, and physical presence within specific communities, which AI cannot replicate. While AI can assist with peripher","soc":"","slug":"community-health-workers","cat":"community-and-social-service"},{"t":"Compensation and benefits managers","s":"Management","e":7,"emp":20900,"w":140360,"o":0,"od":"Little or no change","edu":"Bachelor's degree","r":"This occupation is primarily digital and data-driven, involving the analysis of wage trends, benefits structures, and regulatory compliance—tasks where AI excels. While the role re","soc":"","slug":"compensation-and-benefits-managers","cat":"management"},{"t":"Compensation, benefits, and job analysis specialists","s":"Business & Finance","e":8,"emp":107000,"w":77020,"o":5,"od":"Faster than average","edu":"Bachelor's degree","r":"This occupation is fundamentally digital and data-driven, involving core tasks like market research, cost analysis, and report generation that align perfectly with AI's strengths. ","soc":"","slug":"compensation-benefits-and-job-analysis-specialists","cat":"business-and-financial"},{"t":"Compliance officers","s":"Business & Finance","e":8,"emp":397770,"w":84980,"o":3,"od":"As fast as average","edu":"Bachelor's degree","r":"Compliance work is primarily digital and involves analyzing vast amounts of regulatory text, auditing data, and generating reports—all areas where LLMs and automated systems excel.","soc":"13-1041","slug":"compliance-officers","cat":"business-and-financial"},{"t":"Computer and information research scientists","s":"Computer & IT","e":9,"emp":497800,"w":111960,"o":20,"od":"Much faster than average","edu":"Master's degree","r":"This occupation is fundamentally digital, involving high-level coding, algorithm design, and data analysis—all areas where AI is rapidly advancing. While these scientists are the o","soc":"15-1211","slug":"computer-and-information-research-scientists","cat":"computer-and-information-technology"},{"t":"Computer and information systems managers","s":"Management","e":7,"emp":645970,"w":187990,"o":15,"od":"Much faster than average","edu":"Bachelor's degree","r":"This occupation is predominantly digital and knowledge-based, involving strategic planning, analysis, and technical oversight that AI can significantly augment. While high-level le","soc":"11-3021","slug":"computer-and-information-systems-managers","cat":"management"},{"t":"Computer hardware engineers","s":"Architecture & Eng","e":8,"emp":75710,"w":156770,"o":7,"od":"Much faster than average","edu":"Bachelor's degree","r":"The core work of designing schematics, analyzing circuits, and testing components is increasingly performed using digital Electronic Design Automation (EDA) tools that are highly s","soc":"17-2061","slug":"computer-hardware-engineers","cat":"architecture-and-engineering"},{"t":"Computer network architects","s":"Computer & IT","e":8,"emp":177010,"w":135890,"o":12,"od":"Much faster than average","edu":"Bachelor's degree","r":"The core work of designing, documenting, and configuring networks is fundamentally digital and data-driven, making it highly susceptible to AI-driven automation and optimization to","soc":"15-1241","slug":"computer-network-architects","cat":"computer-and-information-technology"},{"t":"Computer programmers","s":"Computer & IT","e":9,"emp":109870,"w":103640,"o":-6,"od":"Decline","edu":"Bachelor's degree","r":"The core tasks of writing, testing, and debugging code are entirely digital and align perfectly with the strengths of Large Language Models, which are already highly proficient in ","soc":"15-1251","slug":"computer-programmers","cat":"computer-and-information-technology"},{"t":"Computer support specialists","s":"Computer & IT","e":8,"emp":882300,"w":61550,"o":-3,"od":"Decline","edu":"See How to Become One","r":"The core tasks of diagnosing technical issues, documenting problems, and guiding users through digital workflows are highly susceptible to AI automation via advanced chatbots and L","soc":"","slug":"computer-support-specialists","cat":"computer-and-information-technology"},{"t":"Computer systems analysts","s":"Computer & IT","e":8,"emp":521100,"w":103790,"o":9,"od":"Much faster than average","edu":"Bachelor's degree","r":"This occupation is fundamentally digital, involving data modeling, system design, and technical analysis that can be performed entirely on a computer. AI is highly capable of autom","soc":"","slug":"computer-systems-analysts","cat":"computer-and-information-technology"},{"t":"Concierges","s":"Personal Care","e":5,"emp":45600,"w":37320,"o":2,"od":"Slower than average","edu":"High school diploma or equivalent","r":"The role is a hybrid of digital information processing and physical hospitality. While AI can automate core tasks like making reservations, providing local recommendations, and ans","soc":"","slug":"concierges","cat":"personal-care-and-service"},{"t":"Conservation scientists and foresters","s":"Science","e":4,"emp":42400,"w":69060,"o":3,"od":"As fast as average","edu":"Bachelor's degree","r":"This occupation involves a significant amount of physical field work, such as fire suppression, planting trees, and navigating difficult terrain, which provides a natural barrier t","soc":"","slug":"conservation-scientists","cat":"life-physical-and-social-science"},{"t":"Construction and building inspectors","s":"Construction","e":5,"emp":137210,"w":76430,"o":-1,"od":"Decline","edu":"High school diploma or equivalent","r":"The occupation is a hybrid of physical site visits and digital knowledge work. AI and computer vision can significantly automate the 'plans examiner' and report-writing functions, ","soc":"47-4011","slug":"construction-and-building-inspectors","cat":"construction-and-extraction"},{"t":"Construction equipment operators","s":"Construction","e":3,"emp":539500,"w":58320,"o":4,"od":"As fast as average","edu":"High school diploma or equivalent","r":"The core of this occupation involves physical operation of heavy machinery in unpredictable, outdoor environments that require real-time human coordination and manual maintenance. ","soc":"","slug":"construction-equipment-operators","cat":"construction-and-extraction"},{"t":"Construction laborers and helpers","s":"Construction","e":1,"emp":1649100,"w":46050,"o":7,"od":"Much faster than average","edu":"See How to Become One","r":"The core duties of this occupation are almost entirely physical, involving manual labor, tool operation, and site preparation in unpredictable outdoor environments. While AI might ","soc":"","slug":"construction-laborers-and-helpers","cat":"construction-and-extraction"},{"t":"Construction managers","s":"Management","e":5,"emp":348330,"w":119660,"o":9,"od":"Much faster than average","edu":"Bachelor's degree","r":"Construction management is a hybrid role that combines digital knowledge work—such as cost estimation, scheduling, and contract analysis—with essential physical presence. While AI ","soc":"11-9021","slug":"construction-managers","cat":"management"},{"t":"Cooks","s":"Food Service","e":3,"emp":2805100,"w":35760,"o":5,"od":"Faster than average","edu":"See How to Become One","r":"The core of the job involves physical dexterity, sensory judgment (taste and smell), and real-time adaptation in a high-heat, unpredictable kitchen environment. While AI-driven aut","soc":"","slug":"cooks","cat":"food-preparation-and-serving"},{"t":"Correctional officers and bailiffs","s":"Protective Services","e":3,"emp":406500,"w":57950,"o":-7,"od":"Decline","edu":"High school diploma or equivalent","r":"The core duties are physical and interpersonal, requiring real-time human presence to maintain security, conduct searches, and physically restrain individuals. AI exposure is limit","soc":"","slug":"correctional-officers","cat":"protective-service"},{"t":"Cost estimators","s":"Business & Finance","e":8,"emp":221400,"w":77070,"o":-4,"od":"Decline","edu":"Bachelor's degree","r":"Cost estimation is a data-intensive, digital-first occupation centered on analyzing blueprints, technical documents, and historical databases to predict costs. AI and advanced soft","soc":"","slug":"cost-estimators","cat":"business-and-financial"},{"t":"Court reporters and simultaneous captioners","s":"Legal","e":9,"emp":17700,"w":67310,"o":0,"od":"Little or no change","edu":"Postsecondary nondegree award","r":"The core product of this occupation is a verbatim digital transcript, a task where AI speech-to-text and natural language processing are already highly proficient. While legal requ","soc":"","slug":"court-reporters","cat":"legal"},{"t":"Craft and fine artists","s":"Arts & Design","e":6,"emp":52000,"w":56260,"o":0,"od":"Little or no change","edu":"See How to Become One","r":"This occupation is a hybrid of physical craftsmanship and digital creation. While craft artists (potters, glassblowers) and sculptors have low exposure due to the physical nature o","soc":"","slug":"craft-and-fine-artists","cat":"arts-and-design"},{"t":"Credit counselors","s":"Business & Finance","e":7,"emp":31800,"w":50480,"o":3,"od":"As fast as average","edu":"Bachelor's degree","r":"The core tasks of credit counseling—analyzing financial data, creating budgets, and explaining debt management options—are fundamentally digital and information-based, making them ","soc":"","slug":"credit-counselors","cat":"business-and-financial"},{"t":"Customer service representatives","s":"Office & Admin","e":9,"emp":2725930,"w":45380,"o":-5,"od":"Decline","edu":"High school diploma or equivalent","r":"The core duties of this role—answering questions, processing orders, and resolving complaints—are fundamentally digital and information-based, making them highly susceptible to AI-","soc":"43-4051","slug":"customer-service-representatives","cat":"office-and-administrative-support"},{"t":"Dancers and choreographers","s":"Entertainment","e":2,"emp":17000,"w":51022,"o":5,"od":"Faster than average","edu":"See How to Become One","r":"The core of this occupation is physical performance, athleticism, and real-time human interaction in physical spaces, which AI cannot replicate. While AI may assist choreographers ","soc":"","slug":"dancers-and-choreographers","cat":"entertainment-and-sports"},{"t":"Data scientists","s":"Mathematics","e":9,"emp":233440,"w":124590,"o":34,"od":"Much faster than average","edu":"Bachelor's degree","r":"Data science is a fully digital occupation centered on coding, statistical modeling, and data analysis—all areas where AI is rapidly achieving parity or superiority. While human ju","soc":"15-2051","slug":"data-scientists","cat":"math"},{"t":"Database administrators and architects","s":"Computer & IT","e":9,"emp":144900,"w":123100,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"This occupation is entirely digital, involving coding (SQL), system architecture, and data management—all areas where AI is exceptionally proficient. AI can already automate routin","soc":"","slug":"database-administrators","cat":"computer-and-information-technology"},{"t":"Delivery truck drivers and driver/sales workers","s":"Transportation","e":3,"emp":1531300,"w":42770,"o":8,"od":"Much faster than average","edu":"High school diploma or equivalent","r":"While AI and autonomous vehicle technology are advancing, the core of this job involves significant physical labor, such as loading/unloading cargo and navigating unpredictable 'la","soc":"","slug":"delivery-truck-drivers-and-driver-sales-workers","cat":"transportation-and-material-moving"},{"t":"Dental and ophthalmic laboratory technicians and medical appliance technicians","s":"Production","e":5,"emp":66800,"w":45820,"o":-1,"od":"Decline","edu":"High school diploma or equivalent","r":"This occupation is a hybrid of physical craftsmanship and digital design, with AI and automation already driving a projected decline in dental technician roles. While the physical ","soc":"","slug":"dental-and-ophthalmic-laboratory-technicians-and-medical-appliance-technicians","cat":"production"},{"t":"Dental assistants","s":"Healthcare","e":3,"emp":381900,"w":47300,"o":6,"od":"Faster than average","edu":"Postsecondary nondegree award","r":"The core of the job involves physical, hands-on tasks such as sterilizing instruments, assisting in surgeries, and providing direct patient care that requires human presence and ma","soc":"","slug":"dental-assistants","cat":"healthcare"},{"t":"Dental hygienists","s":"Healthcare","e":2,"emp":219070,"w":93890,"o":7,"od":"Much faster than average","edu":"Associate's degree","r":"The core of this occupation involves high-precision manual dexterity and physical procedures performed on patients in a clinical setting, which AI cannot replicate. While AI may as","soc":"29-1292","slug":"dental-hygienists","cat":"healthcare"},{"t":"Dentists","s":"Healthcare","e":3,"emp":149300,"w":179210,"o":4,"od":"As fast as average","edu":"Doctoral or professional degree","r":"The core of dentistry involves highly precise physical procedures, manual dexterity, and real-time patient interaction in a clinical setting, which are resistant to AI automation. ","soc":"","slug":"dentists","cat":"healthcare"},{"t":"Desktop publishers","s":"Office & Admin","e":9,"emp":5000,"w":53620,"o":-12,"od":"Decline","edu":"Associate's degree","r":"The work product is entirely digital and involves routine information processing, layout design, and basic editing—all areas where AI is highly proficient. Generative AI and automa","soc":"","slug":"desktop-publishers","cat":"office-and-administrative-support"},{"t":"Diagnostic medical sonographers","s":"Healthcare","e":5,"emp":86460,"w":92550,"o":13,"od":"Much faster than average","edu":"Associate's degree","r":"The occupation is a hybrid of physical and digital work; while AI is rapidly advancing in image analysis and diagnostic assistance, the role requires significant physical presence ","soc":"29-2032","slug":"diagnostic-medical-sonographers","cat":"healthcare"},{"t":"Diesel service technicians and mechanics","s":"Installation & Repair","e":3,"emp":319900,"w":60640,"o":2,"od":"Slower than average","edu":"High school diploma or equivalent","r":"The core of this occupation is highly physical, requiring manual dexterity, strength, and real-time problem-solving in a hands-on environment. While AI will significantly enhance d","soc":"","slug":"diesel-service-technicians-and-mechanics","cat":"installation-maintenance-and-repair"},{"t":"Dietitians and nutritionists","s":"Healthcare","e":6,"emp":90900,"w":73850,"o":6,"od":"Faster than average","edu":"Bachelor's degree","r":"The core tasks of analyzing nutritional data, interpreting research, and creating personalized meal plans are highly digital and data-driven, making them susceptible to AI automati","soc":"","slug":"dietitians-and-nutritionists","cat":"healthcare"},{"t":"Drafters","s":"Architecture & Eng","e":9,"emp":192100,"w":65380,"o":0,"od":"Little or no change","edu":"Associate's degree","r":"Drafters perform work that is almost entirely digital, converting conceptual sketches into technical CAD and BIM models. AI is rapidly advancing in generative design and automated ","soc":"","slug":"drafters","cat":"architecture-and-engineering"},{"t":"Drywall installers, ceiling tile installers, and tapers","s":"Construction","e":1,"emp":118600,"w":58800,"o":4,"od":"As fast as average","edu":"No formal educational credential","r":"The core tasks of this occupation are entirely physical, involving manual labor, dexterity, and movement in unpredictable construction environments. While AI might assist with peri","soc":"","slug":"drywall-and-ceiling-tile-installers-and-tapers","cat":"construction-and-extraction"},{"t":"Economists","s":"Science","e":9,"emp":15880,"w":130910,"o":1,"od":"Slower than average","edu":"Master's degree","r":"Economists perform work that is almost entirely digital, involving data analysis, mathematical modeling, and technical writing. AI is exceptionally proficient at the core tasks of ","soc":"19-3011","slug":"economists","cat":"life-physical-and-social-science"},{"t":"Editors","s":"Media & Comms","e":9,"emp":95480,"w":85700,"o":1,"od":"Slower than average","edu":"Bachelor's degree","r":"Editing is a fully digital occupation centered on language processing, a core strength of Large Language Models. AI can already perform high-level copy editing, fact-checking, and ","soc":"27-3041","slug":"editors","cat":"media-and-communication"},{"t":"Electrical and electronic engineering technologists and technicians","s":"Architecture & Eng","e":5,"emp":93700,"w":77180,"o":1,"od":"Slower than average","edu":"Associate's degree","r":"This occupation involves a significant amount of physical labor, such as assembling prototypes, soldering circuitry, and repairing hardware, which provides a buffer against full au","soc":"","slug":"electrical-and-electronics-engineering-technicians","cat":"architecture-and-engineering"},{"t":"Electrical and electronics engineers","s":"Architecture & Eng","e":7,"emp":287900,"w":118780,"o":7,"od":"Much faster than average","edu":"Bachelor's degree","r":"The core work of designing circuits, modeling systems, and writing documentation is digital and highly susceptible to AI-driven automation and optimization. While physical testing,","soc":"","slug":"electrical-and-electronics-engineers","cat":"architecture-and-engineering"},{"t":"Electrical and electronics installers and repairers","s":"Installation & Repair","e":3,"emp":118800,"w":71270,"o":0,"od":"Little or no change","edu":"See How to Become One","r":"The core of this occupation involves physical manipulation of hardware, manual troubleshooting in unpredictable environments, and the use of hand tools, which are highly resistant ","soc":"","slug":"electrical-and-electronics-installers-and-repairers","cat":"installation-maintenance-and-repair"},{"t":"Electrical power-line installers and repairers","s":"Installation & Repair","e":2,"emp":127400,"w":92560,"o":7,"od":"Much faster than average","edu":"High school diploma or equivalent","r":"The core work is highly physical, involving climbing towers, operating heavy machinery, and manual repair in unpredictable outdoor environments. While AI can assist with remote mon","soc":"","slug":"line-installers-and-repairers","cat":"installation-maintenance-and-repair"},{"t":"Electricians","s":"Construction","e":2,"emp":742580,"w":69630,"o":9,"od":"Much faster than average","edu":"High school diploma or equivalent","r":"The core work of an electrician is highly physical, involving manual installation, repair, and navigation of complex, unpredictable physical environments like construction sites an","soc":"47-2111","slug":"electricians","cat":"construction-and-extraction"},{"t":"Electro-mechanical and mechatronics technologists and technicians","s":"Architecture & Eng","e":4,"emp":15000,"w":70760,"o":1,"od":"Slower than average","edu":"Associate's degree","r":"This occupation involves a significant amount of physical labor, including soldering, operating metalworking machinery, and repairing hydraulic systems, which provides a strong bar","soc":"","slug":"electro-mechanical-technicians","cat":"architecture-and-engineering"},{"t":"Elementary, middle, and high school principals","s":"Management","e":6,"emp":333300,"w":104070,"o":-2,"od":"Decline","edu":"Master's degree","r":"Principals perform significant knowledge work—such as curriculum development, budget management, and data analysis of student performance—that is highly susceptible to AI augmentat","soc":"","slug":"elementary-middle-and-high-school-principals","cat":"management"},{"t":"Elevator and escalator installers and repairers","s":"Construction","e":3,"emp":24200,"w":106580,"o":5,"od":"Faster than average","edu":"High school diploma or equivalent","r":"The core of this occupation involves highly physical, manual labor in unpredictable environments, such as elevator shafts and machine rooms, which provides a strong barrier against","soc":"","slug":"elevator-installers-and-repairers","cat":"construction-and-extraction"},{"t":"Emergency management directors","s":"Management","e":6,"emp":12570,"w":97700,"o":3,"od":"As fast as average","edu":"Bachelor's degree","r":"The role involves significant digital knowledge work, such as analyzing hazards, drafting complex response plans, and managing federal funding applications, all of which are highly","soc":"11-9161","slug":"emergency-management-directors","cat":"management"},{"t":"EMTs and paramedics","s":"Healthcare","e":3,"emp":282900,"w":46350,"o":5,"od":"Faster than average","edu":"Postsecondary nondegree award","r":"The core of this occupation involves physical intervention, manual dexterity, and real-time human presence in unpredictable environments, which are highly resistant to AI. While AI","soc":"","slug":"emts-and-paramedics","cat":"healthcare"},{"t":"Entertainment and recreation managers","s":"Management","e":5,"emp":43200,"w":77180,"o":8,"od":"Much faster than average","edu":"Bachelor's degree","r":"This role involves a significant amount of digital knowledge work, such as budgeting, scheduling, and strategic planning, which is highly susceptible to AI optimization. However, t","soc":"","slug":"entertainment-and-recreation-managers","cat":"management"},{"t":"Environmental engineering technologists and technicians","s":"Architecture & Eng","e":5,"emp":12900,"w":58890,"o":1,"od":"Slower than average","edu":"Associate's degree","r":"This occupation is a hybrid of physical fieldwork and digital knowledge work. While AI can significantly automate data analysis, report reviewing, and regulatory compliance checks,","soc":"","slug":"environmental-engineering-technicians","cat":"architecture-and-engineering"},{"t":"Environmental engineers","s":"Architecture & Eng","e":6,"emp":37950,"w":110570,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"Environmental engineering involves a significant amount of digital knowledge work, including data analysis, system design, and report writing, which are highly susceptible to AI au","soc":"17-2081","slug":"environmental-engineers","cat":"architecture-and-engineering"},{"t":"Environmental science and protection technicians","s":"Science","e":4,"emp":40400,"w":49490,"o":4,"od":"As fast as average","edu":"Associate's degree","r":"The core of this role involves physical fieldwork, such as collecting soil and water samples and inspecting facilities, which AI cannot perform. However, AI will significantly impa","soc":"","slug":"environmental-science-and-protection-technicians","cat":"life-physical-and-social-science"},{"t":"Environmental scientists and specialists","s":"Science","e":6,"emp":84930,"w":88640,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"This occupation involves a significant amount of digital knowledge work, including data analysis, report writing, and regulatory compliance, which are highly susceptible to AI augm","soc":"19-2041","slug":"environmental-scientists-and-specialists","cat":"life-physical-and-social-science"},{"t":"Epidemiologists","s":"Science","e":7,"emp":11460,"w":94160,"o":16,"od":"Much faster than average","edu":"Master's degree","r":"Epidemiology is a data-intensive knowledge profession where core tasks like statistical analysis, pattern recognition in large datasets, and literature reviews are highly susceptib","soc":"19-1041","slug":"epidemiologists","cat":"life-physical-and-social-science"},{"t":"Exercise physiologists","s":"Healthcare","e":4,"emp":23900,"w":58160,"o":9,"od":"Much faster than average","edu":"Bachelor's degree","r":"The role involves a significant amount of physical presence, including conducting stress tests, measuring vital signs with medical equipment, and providing hands-on rehabilitative ","soc":"","slug":"exercise-physiologists","cat":"healthcare"},{"t":"Farmers, ranchers, and other agricultural managers","s":"Management","e":4,"emp":836100,"w":87980,"o":-1,"od":"Decline","edu":"High school diploma or equivalent","r":"The role involves a significant amount of physical labor, equipment maintenance, and real-time management of biological systems that cannot be digitized. However, AI will heavily i","soc":"","slug":"farmers-ranchers-and-other-agricultural-managers","cat":"management"},{"t":"Fashion designers","s":"Arts & Design","e":7,"emp":25700,"w":80690,"o":2,"od":"Slower than average","edu":"Bachelor's degree","r":"Fashion design is increasingly digital, utilizing CAD and graphics software for sketching, trend analysis, and virtual modeling—all areas where generative AI is rapidly advancing. ","soc":"","slug":"fashion-designers","cat":"arts-and-design"},{"t":"Film and video editors and camera operators","s":"Media & Comms","e":7,"emp":79900,"w":70570,"o":3,"od":"As fast as average","edu":"Bachelor's degree","r":"This occupation is a hybrid of physical camera operation and digital video editing. While camera operators have a physical barrier to AI due to the need for on-site equipment manag","soc":"","slug":"film-and-video-editors-and-camera-operators","cat":"media-and-communication"},{"t":"Financial analysts","s":"Business & Finance","e":9,"emp":429000,"w":101910,"o":6,"od":"Faster than average","edu":"Bachelor's degree","r":"Financial analysts perform work that is almost entirely digital, involving the processing of large datasets, trend analysis, and the generation of reports—all areas where AI excels","soc":"","slug":"financial-analysts","cat":"business-and-financial"},{"t":"Financial clerks","s":"Office & Admin","e":9,"emp":1193000,"w":48650,"o":-5,"od":"Decline","edu":"High school diploma or equivalent","r":"Financial clerks perform routine, digital-first tasks such as data entry, record updating, and basic financial calculations that are highly susceptible to AI automation. While some","soc":"","slug":"financial-clerks","cat":"office-and-administrative-support"},{"t":"Financial examiners","s":"Business & Finance","e":8,"emp":62830,"w":103650,"o":19,"od":"Much faster than average","edu":"Bachelor's degree","r":"Financial examiners perform work that is almost entirely digital, involving the analysis of balance sheets, loan documentation, and regulatory text. AI is exceptionally well-suited","soc":"13-2061","slug":"financial-examiners","cat":"business-and-financial"},{"t":"Financial managers","s":"Management","e":7,"emp":818620,"w":180470,"o":15,"od":"Much faster than average","edu":"Bachelor's degree","r":"Financial management is a predominantly digital knowledge-work occupation focused on data analysis, reporting, and forecasting, all of which are highly susceptible to AI automation","soc":"11-3031","slug":"financial-managers","cat":"management"},{"t":"Fire inspectors","s":"Protective Services","e":4,"emp":17600,"w":75480,"o":6,"od":"Faster than average","edu":"See How to Become One","r":"The role requires a significant physical presence for onsite inspections, evidence collection in debris, and forest patrolling, which provides a natural barrier to AI. However, AI ","soc":"","slug":"fire-inspectors-and-investigators","cat":"protective-service"},{"t":"Firefighters","s":"Protective Services","e":3,"emp":332240,"w":63890,"o":3,"od":"As fast as average","edu":"Postsecondary nondegree award","r":"The core duties of firefighting are intensely physical and require real-time presence in unpredictable, hazardous environments where AI cannot currently operate. While AI may enhan","soc":"33-2011","slug":"firefighters","cat":"protective-service"},{"t":"Fishing and hunting workers","s":"Agriculture","e":2,"emp":21900,"w":0,"o":-5,"od":"Decline","edu":"No formal educational credential","r":"The core duties are highly physical and take place in unpredictable outdoor environments, requiring manual labor, mechanical repair, and real-time physical coordination. AI's impac","soc":"","slug":"fishers-and-related-fishing-workers","cat":"farming-fishing-and-forestry"},{"t":"Fitness trainers and instructors","s":"Personal Care","e":3,"emp":370100,"w":46180,"o":12,"od":"Much faster than average","edu":"High school diploma or equivalent","r":"The core of this occupation requires physical presence to demonstrate exercises, correct form in real-time to prevent injury, and provide high-touch motivational support. While AI ","soc":"","slug":"fitness-trainers-and-instructors","cat":"personal-care-and-service"},{"t":"Flight attendants","s":"Transportation","e":3,"emp":130800,"w":67130,"o":9,"od":"Much faster than average","edu":"High school diploma or equivalent","r":"The core responsibilities of flight attendants are physical and interpersonal, involving safety enforcement, emergency medical response, and manual service tasks that AI cannot per","soc":"","slug":"flight-attendants","cat":"transportation-and-material-moving"},{"t":"Flooring installers and tile and stone setters","s":"Construction","e":1,"emp":112300,"w":52000,"o":6,"od":"Faster than average","edu":"No formal educational credential","r":"The core duties of this occupation are entirely physical, involving manual dexterity, heavy lifting, and real-time adaptation to irregular physical surfaces in unpredictable enviro","soc":"","slug":"tile-and-marble-setters","cat":"construction-and-extraction"},{"t":"Floral designers","s":"Arts & Design","e":3,"emp":43800,"w":36120,"o":-6,"od":"Decline","edu":"High school diploma or equivalent","r":"The core of the job is a physical craft involving the handling of perishable biological materials and manual assembly, which AI cannot perform. However, AI can significantly assist","soc":"","slug":"floral-designers","cat":"arts-and-design"},{"t":"Food and beverage serving and related workers","s":"Food Service","e":3,"emp":5030600,"w":31040,"o":5,"od":"Faster than average","edu":"No formal educational credential","r":"The core of this occupation involves physical labor, such as clearing tables, carrying heavy trays, and cleaning, which are difficult to automate with current robotics. However, AI","soc":"","slug":"food-and-beverage-serving-and-related-workers","cat":"food-preparation-and-serving"},{"t":"Food preparation workers","s":"Food Service","e":2,"emp":902700,"w":34220,"o":-3,"od":"Decline","edu":"No formal educational credential","r":"The core duties are highly physical and require manual dexterity in unpredictable kitchen environments, which are difficult for AI to automate directly. While AI might optimize inv","soc":"","slug":"food-preparation-workers","cat":"food-preparation-and-serving"},{"t":"Food processing equipment workers","s":"Production","e":3,"emp":282600,"w":40050,"o":5,"od":"Faster than average","edu":"See How to Become One","r":"The core of this occupation involves physical labor, such as loading ingredients, cleaning machinery, and manual quality checks, which are resistant to AI. While AI can optimize re","soc":"","slug":"food-and-tobacco-processing-workers","cat":"production"},{"t":"Food service managers","s":"Management","e":4,"emp":244230,"w":72370,"o":6,"od":"Faster than average","edu":"High school diploma or equivalent","r":"While AI can significantly automate administrative tasks like staff scheduling, inventory ordering, and payroll management, the core of the job requires physical presence and real-","soc":"11-9051","slug":"food-service-managers","cat":"management"},{"t":"Forensic science technicians","s":"Science","e":5,"emp":20700,"w":67440,"o":13,"od":"Much faster than average","edu":"Bachelor's degree","r":"The role is a hybrid of physical evidence collection and digital analysis. While AI can significantly automate pattern recognition (fingerprints, ballistics) and statistical report","soc":"","slug":"forensic-science-technicians","cat":"life-physical-and-social-science"},{"t":"Forest and conservation workers","s":"Agriculture","e":2,"emp":5630,"w":42830,"o":-5,"od":"Decline","edu":"High school diploma or equivalent","r":"The core duties of this occupation are highly physical and performed in unpredictable outdoor environments, such as planting seedlings, clearing brush, and suppressing forest fires","soc":"45-4011","slug":"forest-and-conservation-workers","cat":"farming-fishing-and-forestry"},{"t":"Fundraisers","s":"Business & Finance","e":7,"emp":105930,"w":73130,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"Fundraising involves significant digital work including donor research, data analysis, and the creation of promotional messaging, all of which are highly susceptible to AI automati","soc":"13-1131","slug":"fundraisers","cat":"business-and-financial"},{"t":"Funeral service workers","s":"Personal Care","e":3,"emp":59600,"w":59420,"o":4,"od":"As fast as average","edu":"Associate's degree","r":"The core of this occupation involves physical tasks like preparing remains and transporting the deceased, alongside high-stakes interpersonal work providing grief counseling and co","soc":"","slug":"funeral-service-occupations","cat":"personal-care-and-service"},{"t":"Gambling services workers","s":"Personal Care","e":4,"emp":150600,"w":35630,"o":0,"od":"Little or no change","edu":"High school diploma or equivalent","r":"The occupation is a hybrid of physical hospitality and digital-adjacent information processing. While AI and automation are significantly impacting sports book writers and slot ope","soc":"","slug":"gaming-services-occupations","cat":"personal-care-and-service"},{"t":"General maintenance and repair workers","s":"Installation & Repair","e":2,"emp":1629700,"w":48620,"o":4,"od":"As fast as average","edu":"High school diploma or equivalent","r":"The core of this occupation involves physical labor, manual dexterity, and real-time problem-solving in unpredictable physical environments, which are currently beyond the reach of","soc":"","slug":"general-maintenance-and-repair-workers","cat":"installation-maintenance-and-repair"},{"t":"General office clerks","s":"Office & Admin","e":9,"emp":2646000,"w":43630,"o":-7,"od":"Decline","edu":"High school diploma or equivalent","r":"The core duties of this role—data entry, document formatting, scheduling, and information processing—are almost entirely digital and routine, making them highly susceptible to AI a","soc":"","slug":"general-office-clerks","cat":"office-and-administrative-support"},{"t":"Genetic counselors","s":"Healthcare","e":6,"emp":4000,"w":98910,"o":9,"od":"Much faster than average","edu":"Master's degree","r":"Genetic counselors perform high-level knowledge work, including analyzing complex DNA data and medical histories, which is highly susceptible to AI optimization. However, the core ","soc":"","slug":"genetic-counselors","cat":"healthcare"},{"t":"Geographers","s":"Science","e":8,"emp":1500,"w":97200,"o":-3,"od":"Decline","edu":"Bachelor's degree","r":"Geographers primarily perform digital knowledge work, including data analysis, GIS modeling, and report writing, all of which are highly susceptible to AI automation and enhancemen","soc":"","slug":"geographers","cat":"life-physical-and-social-science"},{"t":"Geological and hydrologic technicians","s":"Science","e":5,"emp":12900,"w":50510,"o":1,"od":"Slower than average","edu":"Associate's degree","r":"This occupation is a hybrid of physical fieldwork and digital data analysis. While AI and automation (like drones and remote sensors) are increasingly handling data collection and ","soc":"","slug":"geological-and-petroleum-technicians","cat":"life-physical-and-social-science"},{"t":"Geoscientists","s":"Science","e":5,"emp":25100,"w":99240,"o":3,"od":"As fast as average","edu":"Bachelor's degree","r":"Geoscientists have a balanced mix of physical and digital work. While AI is highly effective at analyzing seismic data, GIS mapping, and predictive modeling, the core of the job re","soc":"","slug":"geoscientists","cat":"life-physical-and-social-science"},{"t":"Glaziers","s":"Construction","e":2,"emp":60500,"w":55440,"o":3,"od":"As fast as average","edu":"High school diploma or equivalent","r":"The core work of a glazier is highly physical, requiring manual dexterity, strength, and real-time problem-solving in unpredictable construction environments. While AI might assist","soc":"","slug":"glaziers","cat":"construction-and-extraction"},{"t":"Graphic designers","s":"Arts & Design","e":9,"emp":214260,"w":68610,"o":2,"od":"Slower than average","edu":"Bachelor's degree","r":"Graphic design is a fundamentally digital occupation where core tasks—image generation, layout creation, and photo editing—are being rapidly transformed by generative AI. While hig","soc":"27-1024","slug":"graphic-designers","cat":"arts-and-design"},{"t":"Grounds maintenance workers","s":"Building & Cleaning","e":1,"emp":1296400,"w":38470,"o":4,"od":"As fast as average","edu":"See How to Become One","r":"The core duties of this occupation are almost entirely physical and performed in unpredictable outdoor environments, which provides a strong natural barrier against AI. While auton","soc":"","slug":"grounds-maintenance-workers","cat":"building-and-grounds-cleaning"},{"t":"Hand laborers and material movers","s":"Transportation","e":2,"emp":6950000,"w":37680,"o":4,"od":"As fast as average","edu":"No formal educational credential","r":"The core duties of this occupation are fundamentally physical, involving the manual movement, cleaning, and packing of heavy materials in unpredictable real-world environments. Whi","soc":"","slug":"hand-laborers-and-material-movers","cat":"transportation-and-material-moving"},{"t":"Hazardous materials removal workers","s":"Construction","e":2,"emp":51300,"w":48490,"o":1,"od":"Slower than average","edu":"High school diploma or equivalent","r":"The core of this occupation involves physical labor in unpredictable environments, such as scrubbing surfaces, constructing containment areas, and operating heavy machinery. While ","soc":"","slug":"hazardous-materials-removal-workers","cat":"construction-and-extraction"},{"t":"Health and safety engineers","s":"Architecture & Eng","e":5,"emp":23220,"w":113770,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"This occupation involves a significant mix of digital knowledge work and physical presence. While AI can assist in reviewing equipment plans, analyzing accident data, and interpret","soc":"17-2111","slug":"health-and-safety-engineers","cat":"architecture-and-engineering"},{"t":"Health education specialists","s":"Community Service","e":6,"emp":71800,"w":63000,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"A significant portion of the role involves digital knowledge work such as analyzing community health data, writing grant proposals, and creating educational materials, all of which","soc":"","slug":"health-educators","cat":"community-and-social-service"},{"t":"Health information technologists and medical registrars","s":"Healthcare","e":8,"emp":41900,"w":67310,"o":15,"od":"Much faster than average","edu":"Associate's degree","r":"This occupation is almost entirely digital, involving the analysis, organization, and validation of clinical data within computerized systems. AI is exceptionally well-suited for c","soc":"","slug":"health-information-technologists-and-medical-registrars","cat":"healthcare"},{"t":"Heating, air conditioning, and refrigeration mechanics and installers","s":"Installation & Repair","e":2,"emp":425200,"w":59810,"o":8,"od":"Much faster than average","edu":"Postsecondary nondegree award","r":"The core of this occupation involves physical labor, manual dexterity, and real-time problem solving in unpredictable physical environments, which are highly resistant to AI. While","soc":"","slug":"heating-air-conditioning-and-refrigeration-mechanics-and-installers","cat":"installation-maintenance-and-repair"},{"t":"Heavy and tractor-trailer truck drivers","s":"Transportation","e":5,"emp":2070480,"w":58400,"o":4,"od":"As fast as average","edu":"Postsecondary nondegree award","r":"While the core task of driving is physical and occurs in a complex real-world environment, it is a primary target for autonomous vehicle AI, which could eventually automate long-ha","soc":"53-3032","slug":"heavy-and-tractor-trailer-truck-drivers","cat":"transportation-and-material-moving"},{"t":"Heavy vehicle and mobile equipment service technicians","s":"Installation & Repair","e":3,"emp":245600,"w":62740,"o":6,"od":"Faster than average","edu":"High school diploma or equivalent","r":"The core of this occupation is highly physical, involving manual dexterity, strength, and real-world troubleshooting in unpredictable environments like farms and construction sites","soc":"","slug":"heavy-vehicle-and-mobile-equipment-service-technicians","cat":"installation-maintenance-and-repair"},{"t":"High school teachers","s":"Education","e":7,"emp":1094500,"w":64580,"o":-2,"od":"Decline","edu":"Bachelor's degree","r":"High school teachers are heavily exposed because core digital tasks like lesson planning, content creation, and grading are highly susceptible to AI automation and augmentation. Wh","soc":"","slug":"high-school-teachers","cat":"education-training-and-library"},{"t":"Historians","s":"Science","e":7,"emp":3400,"w":74050,"o":2,"od":"Slower than average","edu":"Master's degree","r":"Historians perform high-level knowledge work—researching, analyzing, and writing—that is increasingly digital and highly susceptible to AI-driven efficiency gains in document proce","soc":"","slug":"historians","cat":"life-physical-and-social-science"},{"t":"Home health and personal care aides","s":"Healthcare","e":2,"emp":3988140,"w":34990,"o":17,"od":"Much faster than average","edu":"High school diploma or equivalent","r":"The core duties of this occupation are fundamentally physical and interpersonal, involving manual tasks like bathing, dressing, and lifting patients in unpredictable home environme","soc":"31-1120","slug":"home-health-aides-and-personal-care-aides","cat":"healthcare"},{"t":"Human resources managers","s":"Management","e":7,"emp":221900,"w":140030,"o":5,"od":"Faster than average","edu":"Bachelor's degree","r":"Human resources management is a digital-heavy knowledge occupation where AI can significantly automate recruitment screening, payroll processing, and regulatory compliance reportin","soc":"","slug":"human-resources-managers","cat":"management"},{"t":"Human resources specialists","s":"Business & Finance","e":7,"emp":944300,"w":72910,"o":6,"od":"Faster than average","edu":"Bachelor's degree","r":"The core tasks of recruiting, screening, and administrative record-keeping are highly digital and data-driven, making them prime targets for AI automation and augmentation. While t","soc":"","slug":"human-resources-specialists","cat":"business-and-financial"},{"t":"Hydrologists","s":"Science","e":6,"emp":6300,"w":92060,"o":0,"od":"Little or no change","edu":"Bachelor's degree","r":"Hydrologists have a high exposure to AI because a significant portion of their work involves data analysis, computer modeling, and report writing—tasks where AI is rapidly advancin","soc":"","slug":"hydrologists","cat":"life-physical-and-social-science"},{"t":"Industrial designers","s":"Arts & Design","e":8,"emp":30600,"w":79450,"o":3,"od":"As fast as average","edu":"Bachelor's degree","r":"Industrial design is a predominantly digital occupation where core tasks like sketching, 3D modeling, and rendering are being rapidly transformed by generative AI and advanced CAD ","soc":"","slug":"industrial-designers","cat":"arts-and-design"},{"t":"Industrial engineering technologists and technicians","s":"Architecture & Eng","e":6,"emp":74600,"w":64790,"o":2,"od":"Slower than average","edu":"Associate's degree","r":"This occupation involves a significant amount of digital work, such as analyzing production costs, using CAD/CAM software, and conducting statistical studies, all of which are high","soc":"","slug":"industrial-engineering-technicians","cat":"architecture-and-engineering"},{"t":"Industrial engineers","s":"Architecture & Eng","e":7,"emp":350230,"w":107900,"o":11,"od":"Much faster than average","edu":"Bachelor's degree","r":"Industrial engineering is heavily focused on data analysis, systems design, and process optimization—tasks where AI and machine learning excel. While the role requires physical sit","soc":"17-2112","slug":"industrial-engineers","cat":"architecture-and-engineering"},{"t":"Industrial machinery mechanics, machinery maintenance workers, and millwrights","s":"Installation & Repair","e":3,"emp":538300,"w":63510,"o":13,"od":"Much faster than average","edu":"High school diploma or equivalent","r":"The core of this occupation involves physical labor, manual dexterity, and real-time troubleshooting in unpredictable physical environments, which provides a strong barrier against","soc":"","slug":"industrial-machinery-mechanics-and-maintenance-workers-and-millwrights","cat":"installation-maintenance-and-repair"},{"t":"Industrial production managers","s":"Management","e":6,"emp":234380,"w":129180,"o":2,"od":"Slower than average","edu":"Bachelor's degree","r":"This role is a hybrid of digital knowledge work and physical oversight. AI will significantly enhance the analytical aspects of the job, such as production scheduling, budget optim","soc":"11-3051","slug":"industrial-production-managers","cat":"management"},{"t":"Information clerks","s":"Office & Admin","e":7,"emp":1336600,"w":43730,"o":-3,"od":"Decline","edu":"See How to Become One","r":"This occupation is highly exposed because its core tasks—processing routine data, answering inquiries, and maintaining records—are fundamentally digital and information-based. Whil","soc":"","slug":"information-clerks","cat":"office-and-administrative-support"},{"t":"Information security analysts","s":"Computer & IT","e":8,"emp":179430,"w":127730,"o":29,"od":"Much faster than average","edu":"Bachelor's degree","r":"This occupation is entirely digital, involving tasks like monitoring networks, analyzing vulnerabilities, and writing reports that are highly susceptible to AI automation. While AI","soc":"15-1212","slug":"information-security-analysts","cat":"computer-and-information-technology"},{"t":"Instructional coordinators","s":"Education","e":7,"emp":210850,"w":77600,"o":1,"od":"Slower than average","edu":"Master's degree","r":"Instructional coordinators perform high-level knowledge work including curriculum development, data analysis, and educational material review, all of which are digital-first tasks ","soc":"25-9031","slug":"instructional-coordinators","cat":"education-training-and-library"},{"t":"Insulation workers","s":"Construction","e":2,"emp":67400,"w":50730,"o":4,"od":"As fast as average","edu":"See How to Become One","r":"The core duties of this occupation are highly physical and require manual dexterity in unpredictable, confined environments like attics and crawl spaces. AI has minimal impact on t","soc":"","slug":"insulation-workers","cat":"construction-and-extraction"},{"t":"Insurance sales agents","s":"Sales","e":7,"emp":469480,"w":81510,"o":4,"od":"As fast as average","edu":"High school diploma or equivalent","r":"The core tasks of analyzing policies, customizing insurance programs, and maintaining records are digital and data-driven, making them highly susceptible to AI automation and augme","soc":"41-3021","slug":"insurance-sales-agents","cat":"sales"},{"t":"Insurance underwriters","s":"Business & Finance","e":9,"emp":107820,"w":90830,"o":-3,"od":"Decline","edu":"Bachelor's degree","r":"Underwriting is a fundamentally digital occupation centered on routine information processing, risk modeling, and data analysis—all areas where AI excels. The BLS already projects ","soc":"13-2053","slug":"insurance-underwriters","cat":"business-and-financial"},{"t":"Interior designers","s":"Arts & Design","e":7,"emp":69580,"w":71430,"o":3,"od":"As fast as average","edu":"Bachelor's degree","r":"Interior design is heavily reliant on digital tools like CAD and BIM, which are being rapidly transformed by generative AI capable of creating photorealistic renderings and floor p","soc":"27-1025","slug":"interior-designers","cat":"arts-and-design"},{"t":"Interpreters and translators","s":"Media & Comms","e":9,"emp":75300,"w":59440,"o":2,"od":"Slower than average","edu":"Bachelor's degree","r":"The core work product is purely digital information (text and speech) in a domain where Large Language Models already demonstrate near-human proficiency. While high-stakes interpre","soc":"","slug":"interpreters-and-translators","cat":"media-and-communication"},{"t":"Ironworkers","s":"Construction","e":1,"emp":85100,"w":61940,"o":4,"od":"As fast as average","edu":"High school diploma or equivalent","r":"Ironworking is a highly physical occupation performed in unpredictable, outdoor environments and at great heights, which provides a significant natural barrier to AI and robotics. ","soc":"","slug":"structural-iron-and-steel-workers","cat":"construction-and-extraction"},{"t":"Janitors and building cleaners","s":"Building & Cleaning","e":1,"emp":2447700,"w":35930,"o":2,"od":"Slower than average","edu":"No formal educational credential","r":"The core duties of this occupation are almost entirely physical, involving manual labor in unpredictable and varied environments like schools, hospitals, and construction sites. Wh","soc":"","slug":"janitors-and-building-cleaners","cat":"building-and-grounds-cleaning"},{"t":"Jewelers and precious stone and metal workers","s":"Production","e":4,"emp":35100,"w":49140,"o":-5,"od":"Decline","edu":"High school diploma or equivalent","r":"The core of the job involves physical dexterity, manual repair, and hands-on craftsmanship that AI cannot replicate. However, AI and automation are significantly impacting the desi","soc":"","slug":"jewelers-and-precious-stone-and-metal-workers","cat":"production"},{"t":"Judges and hearing officers","s":"Legal","e":7,"emp":44800,"w":135160,"o":1,"od":"Slower than average","edu":"Doctoral or professional degree","r":"The core tasks of researching legal issues, evaluating documents, and writing opinions are highly digital and susceptible to AI automation, which can significantly increase product","soc":"","slug":"judges-and-hearing-officers","cat":"legal"},{"t":"Kindergarten and elementary school teachers","s":"Education","e":6,"emp":1539800,"w":62310,"o":-2,"od":"Decline","edu":"Bachelor's degree","r":"AI will significantly automate back-end knowledge work such as lesson planning, grading, and administrative communication, which currently occupy a large portion of a teacher's tim","soc":"","slug":"kindergarten-and-elementary-school-teachers","cat":"education-training-and-library"},{"t":"Labor relations specialists","s":"Business & Finance","e":7,"emp":65400,"w":93500,"o":0,"od":"Little or no change","edu":"Bachelor's degree","r":"This occupation is predominantly digital and knowledge-based, involving the drafting of contracts, policy development, and legal compliance—all areas where AI excels. While the hig","soc":"","slug":"labor-relations-specialists","cat":"business-and-financial"},{"t":"Landscape architects","s":"Architecture & Eng","e":7,"emp":53080,"w":76730,"o":3,"od":"As fast as average","edu":"Bachelor's degree","r":"Landscape architecture is a predominantly digital knowledge-based occupation where core tasks like CADD modeling, site analysis, and cost estimation are highly susceptible to AI au","soc":"17-1022","slug":"landscape-architects","cat":"architecture-and-engineering"},{"t":"Lawyers","s":"Legal","e":8,"emp":747750,"w":182760,"o":4,"od":"As fast as average","edu":"Doctoral or professional degree","r":"Lawyers perform high-level knowledge work that is almost entirely digital, involving document drafting, legal research, and complex data analysis—all areas where LLMs excel. While ","soc":"23-1011","slug":"lawyers","cat":"legal"},{"t":"Librarians and library media specialists","s":"Education","e":7,"emp":142100,"w":64320,"o":2,"od":"Slower than average","edu":"Master's degree","r":"Librarianship is fundamentally about information retrieval, organization, and research—domains where LLMs and AI search engines excel. While the physical presence in schools and pu","soc":"","slug":"librarians","cat":"education-training-and-library"},{"t":"Library technicians and assistants","s":"Education","e":7,"emp":163100,"w":37540,"o":-7,"od":"Decline","edu":"See How to Become One","r":"A significant portion of this role involves routine information processing, cataloging, and answering reference questions, all of which are highly susceptible to AI automation. Whi","soc":"","slug":"library-technicians-and-assistants","cat":"education-training-and-library"},{"t":"Licensed practical and licensed vocational nurses","s":"Healthcare","e":4,"emp":651400,"w":62340,"o":3,"od":"As fast as average","edu":"Postsecondary nondegree award","r":"The core of this occupation involves physical tasks such as bathing, dressing, and wound care, which are currently beyond the reach of AI and robotics. However, AI will significant","soc":"","slug":"licensed-practical-and-licensed-vocational-nurses","cat":"healthcare"},{"t":"Loan officers","s":"Business & Finance","e":8,"emp":290530,"w":86020,"o":2,"od":"Slower than average","edu":"Bachelor's degree","r":"The core tasks of loan officers—analyzing financial data, verifying documentation, and assessing risk—are fundamentally digital and highly susceptible to AI automation. While compl","soc":"13-2072","slug":"loan-officers","cat":"business-and-financial"},{"t":"Lodging managers","s":"Management","e":5,"emp":41350,"w":77460,"o":3,"od":"As fast as average","edu":"High school diploma or equivalent","r":"Lodging managers perform a hybrid of digital knowledge work and physical site management. While AI can automate back-office tasks like revenue management, dynamic pricing, and staf","soc":"11-9081","slug":"lodging-managers","cat":"management"},{"t":"Logging workers","s":"Agriculture","e":2,"emp":44300,"w":49540,"o":-2,"od":"Decline","edu":"High school diploma or equivalent","r":"The core work is highly physical, involving the operation of heavy machinery and manual labor in unpredictable outdoor environments. While AI may improve peripheral tasks like log ","soc":"","slug":"logging-workers","cat":"farming-fishing-and-forestry"},{"t":"Logisticians","s":"Business & Finance","e":7,"emp":241000,"w":80880,"o":17,"od":"Much faster than average","edu":"Bachelor's degree","r":"Logisticians perform high-level knowledge work that is primarily digital, involving data analysis, forecasting, and supply chain optimization—tasks where AI excels. While the role ","soc":"","slug":"logisticians","cat":"business-and-financial"},{"t":"Machinists and tool and die makers","s":"Production","e":4,"emp":354800,"w":57700,"o":-2,"od":"Decline","edu":"See How to Become One","r":"The role involves a significant physical component, including manual dexterity, machine setup, and material handling in a factory environment. However, AI and advanced automation a","soc":"","slug":"machinists-and-tool-and-die-makers","cat":"production"},{"t":"Management analysts","s":"Business & Finance","e":7,"emp":893900,"w":114710,"o":9,"od":"Much faster than average","edu":"Bachelor's degree","r":"Management analysts perform high-level knowledge work—including data analysis, report writing, and financial modeling—that is highly susceptible to AI augmentation and automation. ","soc":"13-1111","slug":"management-analysts","cat":"business-and-financial"},{"t":"Manicurists and pedicurists","s":"Personal Care","e":2,"emp":147820,"w":36910,"o":7,"od":"Much faster than average","edu":"Postsecondary nondegree award","r":"The core of this occupation involves high-precision physical labor, tactile sensitivity, and real-time human interaction in a physical environment. While AI can assist with periphe","soc":"39-5092","slug":"manicurists-and-pedicurists","cat":"personal-care-and-service"},{"t":"Marine engineers and naval architects","s":"Architecture & Eng","e":7,"emp":8500,"w":105670,"o":6,"od":"Faster than average","edu":"Bachelor's degree","r":"The core of this occupation involves digital design, complex mathematical modeling, and technical report writing, all of which are highly susceptible to AI-driven productivity gain","soc":"","slug":"marine-engineers-and-naval-architects","cat":"architecture-and-engineering"},{"t":"Market research analysts","s":"Business & Finance","e":9,"emp":861140,"w":86480,"o":7,"od":"Much faster than average","edu":"Bachelor's degree","r":"The core duties of this role—data collection, statistical analysis, trend forecasting, and report generation—are fundamentally digital and align perfectly with AI's strengths in pr","soc":"13-1161","slug":"market-research-analysts","cat":"business-and-financial"},{"t":"Marriage and family therapists","s":"Community Service","e":5,"emp":65870,"w":72720,"o":13,"od":"Much faster than average","edu":"Master's degree","r":"While the work is increasingly digital via telehealth and involves significant information processing, the core value of therapy lies in human-to-human empathy, trust, and the navi","soc":"21-1013","slug":"marriage-and-family-therapists","cat":"community-and-social-service"},{"t":"Masonry workers","s":"Construction","e":2,"emp":294300,"w":56600,"o":2,"od":"Slower than average","edu":"See How to Become One","r":"Masonry is a highly physical trade performed in unpredictable outdoor environments that require manual dexterity, strength, and real-time sensory feedback. While AI and robotics ma","soc":"","slug":"brickmasons-blockmasons-and-stonemasons","cat":"construction-and-extraction"},{"t":"Massage therapists","s":"Healthcare","e":2,"emp":96040,"w":63430,"o":15,"od":"Much faster than average","edu":"Postsecondary nondegree award","r":"The core of this occupation is highly physical, requiring manual manipulation of soft tissues and real-time human empathy in a physical setting. While AI can assist with peripheral","soc":"31-9011","slug":"massage-therapists","cat":"healthcare"},{"t":"Material moving machine operators","s":"Transportation","e":4,"emp":867700,"w":46620,"o":1,"od":"Slower than average","edu":"See How to Become One","r":"The core of the job is physical operation of heavy machinery in dynamic environments like warehouses and construction sites, which provides a buffer against full automation. Howeve","soc":"","slug":"material-moving-machine-operators","cat":"transportation-and-material-moving"},{"t":"Material recording clerks","s":"Office & Admin","e":7,"emp":1300800,"w":46120,"o":-6,"od":"Decline","edu":"High school diploma or equivalent","r":"This occupation is highly exposed because its core functions—tracking data, scheduling, and inventory reporting—are digital information-processing tasks that AI and automated syste","soc":"","slug":"material-recording-clerks","cat":"office-and-administrative-support"},{"t":"Materials engineers","s":"Architecture & Eng","e":7,"emp":22770,"w":116380,"o":6,"od":"Faster than average","edu":"Bachelor's degree","r":"Materials engineering is heavily reliant on digital simulation, data analysis, and computational modeling, areas where AI and machine learning are already accelerating material dis","soc":"17-2131","slug":"materials-engineers","cat":"architecture-and-engineering"},{"t":"Mathematicians and statisticians","s":"Mathematics","e":9,"emp":34600,"w":104350,"o":8,"od":"Much faster than average","edu":"Master's degree","r":"This occupation is almost entirely digital, involving data analysis, mathematical modeling, and coding—all domains where AI and Large Language Models excel. While high-level theore","soc":"","slug":"mathematicians-and-statisticians","cat":"math"},{"t":"Mechanical engineering technologists and technicians","s":"Architecture & Eng","e":5,"emp":38300,"w":68730,"o":0,"od":"Little or no change","edu":"Associate's degree","r":"This occupation is a hybrid of digital knowledge work and physical labor. While AI can significantly automate digital tasks like 3D modeling, data analysis, and cost estimation, th","soc":"","slug":"mechanical-engineering-technicians","cat":"architecture-and-engineering"},{"t":"Mechanical engineers","s":"Architecture & Eng","e":7,"emp":286760,"w":110080,"o":9,"od":"Much faster than average","edu":"Bachelor's degree","r":"Mechanical engineering is heavily reliant on digital tools like CAD, simulations, and data analysis, all of which are being rapidly enhanced by AI to automate complex design iterat","soc":"17-2141","slug":"mechanical-engineers","cat":"architecture-and-engineering"},{"t":"Medical and health services managers","s":"Management","e":6,"emp":565840,"w":137730,"o":23,"od":"Much faster than average","edu":"Bachelor's degree","r":"This role involves a high volume of digital knowledge work, such as budgeting, scheduling, and regulatory compliance, which are highly susceptible to AI optimization. However, the ","soc":"11-9111","slug":"medical-and-health-services-managers","cat":"management"},{"t":"Medical assistants","s":"Healthcare","e":4,"emp":793460,"w":44720,"o":12,"od":"Much faster than average","edu":"Postsecondary nondegree award","r":"Medical assistants perform a hybrid of physical and digital tasks; while AI can significantly automate administrative duties like scheduling, coding, and medical record entry, it c","soc":"31-9092","slug":"medical-assistants","cat":"healthcare"},{"t":"Medical dosimetrists","s":"Healthcare","e":8,"emp":4800,"w":138110,"o":3,"od":"As fast as average","edu":"Bachelor's degree","r":"The core of this occupation involves complex mathematical calculations, image analysis (CT/MRI), and digital treatment planning, all of which are domains where AI and machine learn","soc":"","slug":"medical-dosimetrists","cat":"healthcare"},{"t":"Medical equipment repairers","s":"Installation & Repair","e":3,"emp":68000,"w":62630,"o":13,"od":"Much faster than average","edu":"Associate's degree","r":"The core of this occupation is physical and manual, requiring dexterity to handle tools, disassemble machinery, and work in tight physical spaces. While AI will significantly enhan","soc":"","slug":"medical-equipment-repairers","cat":"installation-maintenance-and-repair"},{"t":"Medical records specialists","s":"Healthcare","e":9,"emp":194800,"w":50250,"o":7,"od":"Much faster than average","edu":"Postsecondary nondegree award","r":"This occupation is almost entirely digital, involving the processing, classification, and entry of data into electronic systems. AI is already highly capable of natural language pr","soc":"","slug":"medical-records-and-health-information-technicians","cat":"healthcare"},{"t":"Medical scientists","s":"Science","e":7,"emp":156300,"w":112690,"o":9,"od":"Much faster than average","edu":"Doctoral or professional degree","r":"Medical scientists perform high-level knowledge work including data analysis, grant writing, and literature reviews, all of which are highly susceptible to AI augmentation and auto","soc":"19-1042","slug":"medical-scientists","cat":"life-physical-and-social-science"},{"t":"Medical transcriptionists","s":"Healthcare","e":10,"emp":43070,"w":39210,"o":-5,"od":"Decline","edu":"Postsecondary nondegree award","r":"Medical transcription is a purely digital, routine information-processing task that has already been heavily impacted by speech recognition. Modern AI and Large Language Models (LL","soc":"31-9094","slug":"medical-transcriptionists","cat":"healthcare"},{"t":"Meeting, convention, and event planners","s":"Business & Finance","e":6,"emp":155800,"w":59440,"o":5,"od":"Faster than average","edu":"Bachelor's degree","r":"A significant portion of the role involves digital tasks such as logistics planning, vendor research, contract review, and communications, which are highly susceptible to AI automa","soc":"","slug":"meeting-convention-and-event-planners","cat":"business-and-financial"},{"t":"Metal and plastic machine workers","s":"Production","e":4,"emp":1000700,"w":46800,"o":-7,"od":"Decline","edu":"See How to Become One","r":"The core of the work is physical and requires presence on a factory floor to handle materials and maintain machinery. However, AI and advanced automation are increasingly capable o","soc":"","slug":"metal-and-plastic-machine-workers","cat":"production"},{"t":"Microbiologists","s":"Science","e":6,"emp":20700,"w":87330,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"Microbiologists have a high exposure to AI because a significant portion of their work involves data analysis, pattern recognition in genetic sequences, and technical reporting—all","soc":"","slug":"microbiologists","cat":"life-physical-and-social-science"},{"t":"Middle school teachers","s":"Education","e":6,"emp":620370,"w":70040,"o":-2,"od":"Decline","edu":"Bachelor's degree","r":"Middle school teachers have high exposure because a significant portion of their workload—lesson planning, grading, and content creation—is digital and highly susceptible to AI aut","soc":"25-2022","slug":"middle-school-teachers","cat":"education-training-and-library"},{"t":"Mining and geological engineers","s":"Architecture & Eng","e":6,"emp":7000,"w":101020,"o":1,"od":"Slower than average","edu":"Bachelor's degree","r":"Mining and geological engineering involves a significant amount of digital knowledge work, including mine design, technical reporting, and data analysis, which are highly susceptib","soc":"","slug":"mining-and-geological-engineers","cat":"architecture-and-engineering"},{"t":"Models","s":"Sales","e":8,"emp":6700,"w":89990,"o":-1,"od":"Decline","edu":"No formal educational credential","r":"While runway and live event modeling require physical presence, the majority of modeling work results in digital or print imagery which is highly vulnerable to AI-generated synthet","soc":"","slug":"models","cat":"sales"},{"t":"Music directors and composers","s":"Entertainment","e":7,"emp":12330,"w":84230,"o":0,"od":"Little or no change","edu":"Bachelor's degree","r":"The occupation is a hybrid of high-exposure digital work (composing) and lower-exposure physical work (conducting). Generative AI is rapidly automating music composition, arrangeme","soc":"27-2041","slug":"music-directors-and-composers","cat":"entertainment-and-sports"},{"t":"Musicians and singers","s":"Entertainment","e":4,"emp":38350,"w":88296,"o":1,"od":"Slower than average","edu":"No formal educational credential","r":"While AI can generate high-quality digital music and vocals, a significant portion of this occupation involves live performance, physical presence at venues, and human-centric even","soc":"27-2042","slug":"musicians-and-singers","cat":"entertainment-and-sports"},{"t":"Natural sciences managers","s":"Management","e":7,"emp":100870,"w":173500,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"This role is predominantly knowledge-based, involving data analysis, budgeting, and technical reporting, all of which are highly susceptible to AI enhancement and automation. While","soc":"11-9121","slug":"natural-sciences-managers","cat":"management"},{"t":"Network and computer systems administrators","s":"Computer & IT","e":8,"emp":318570,"w":101190,"o":-4,"od":"Decline","edu":"Bachelor's degree","r":"This occupation is primarily digital and involves tasks like configuration, monitoring, and troubleshooting that are highly susceptible to AI-driven automation and 'infrastructure ","soc":"15-1244","slug":"network-and-computer-systems-administrators","cat":"computer-and-information-technology"},{"t":"News analysts, reporters, and journalists","s":"Media & Comms","e":7,"emp":49300,"w":60280,"o":-4,"od":"Decline","edu":"Bachelor's degree","r":"The core work product is digital (text, scripts, and multimedia), and AI can already automate significant portions of research, drafting, and editing. While physical presence for f","soc":"","slug":"reporters-correspondents-and-broadcast-news-analysts","cat":"media-and-communication"},{"t":"Nuclear engineers","s":"Architecture & Eng","e":7,"emp":15400,"w":127520,"o":-1,"od":"Decline","edu":"Bachelor's degree","r":"Nuclear engineering is a high-level knowledge profession where core tasks—such as reactor design, dose calculations, and safety simulations—are performed using digital tools and co","soc":"","slug":"nuclear-engineers","cat":"architecture-and-engineering"},{"t":"Nuclear medicine technologists","s":"Healthcare","e":4,"emp":20000,"w":97020,"o":3,"od":"As fast as average","edu":"Associate's degree","r":"The role requires significant physical presence to prepare and administer radiopharmaceuticals, operate heavy machinery, and physically assist or position patients. While AI will l","soc":"","slug":"nuclear-medicine-technologists","cat":"healthcare"},{"t":"Nuclear technicians","s":"Science","e":5,"emp":6000,"w":104240,"o":-8,"od":"Decline","edu":"Associate's degree","r":"Nuclear technicians perform a mix of digital monitoring and physical labor, such as collecting environmental samples and maintaining hardware. While AI can significantly automate t","soc":"","slug":"nuclear-technicians","cat":"life-physical-and-social-science"},{"t":"Nurse anesthetists, nurse midwives, and nurse practitioners","s":"Healthcare","e":5,"emp":382700,"w":132050,"o":35,"od":"Much faster than average","edu":"Master's degree","r":"This occupation involves a significant amount of high-level knowledge work, such as diagnosing conditions and analyzing test results, which is highly susceptible to AI assistance. ","soc":"","slug":"nurse-anesthetists-nurse-midwives-and-nurse-practitioners","cat":"healthcare"},{"t":"Nursing assistants and orderlies","s":"Healthcare","e":2,"emp":1495400,"w":39430,"o":2,"od":"Slower than average","edu":"See How to Become One","r":"The core duties of nursing assistants and orderlies—such as bathing, dressing, and physically transferring patients—are highly manual and require real-time human presence in unpred","soc":"","slug":"nursing-assistants","cat":"healthcare"},{"t":"Occupational health and safety specialists and technicians","s":"Healthcare","e":5,"emp":163700,"w":78900,"o":12,"od":"Much faster than average","edu":"See How to Become One","r":"This occupation is a hybrid of physical fieldwork and digital knowledge work. While AI can significantly automate data analysis, report writing, and regulatory cross-referencing, t","soc":"","slug":"occupational-health-and-safety-specialists-and-technicians","cat":"healthcare"},{"t":"Occupational therapists","s":"Healthcare","e":3,"emp":160000,"w":98340,"o":14,"od":"Much faster than average","edu":"Master's degree","r":"Occupational therapy is a highly physical and interpersonal profession that requires real-time observation, manual manipulation of patients, and the assessment of physical environm","soc":"","slug":"occupational-therapists","cat":"healthcare"},{"t":"Occupational therapy assistants and aides","s":"Healthcare","e":3,"emp":54400,"w":66050,"o":18,"od":"Much faster than average","edu":"See How to Become One","r":"The core of this occupation involves physical assistance, manual therapy, and real-time human interaction, such as lifting patients and guiding motor skill exercises, which AI cann","soc":"","slug":"occupational-therapy-assistants-and-aides","cat":"healthcare"},{"t":"Oil and gas workers","s":"Construction","e":3,"emp":115900,"w":52610,"o":1,"od":"Slower than average","edu":"No formal educational credential","r":"The core of this occupation involves heavy physical labor, equipment maintenance, and manual operation in unpredictable outdoor environments, which provides a strong buffer against","soc":"","slug":"oil-and-gas-workers","cat":"construction-and-extraction"},{"t":"Operations research analysts","s":"Mathematics","e":9,"emp":107760,"w":99120,"o":21,"od":"Much faster than average","edu":"Bachelor's degree","r":"This occupation is almost entirely digital, involving data collection, mathematical modeling, and report writing—all areas where AI and Large Language Models excel. While analysts ","soc":"15-2031","slug":"operations-research-analysts","cat":"math"},{"t":"Opticians","s":"Healthcare","e":4,"emp":79900,"w":46560,"o":3,"od":"As fast as average","edu":"High school diploma or equivalent","r":"The role involves a significant amount of physical, hands-on work such as measuring faces, adjusting frames with tools, and teaching patients how to insert contact lenses. While AI","soc":"","slug":"opticians-dispensing","cat":"healthcare"},{"t":"Optometrists","s":"Healthcare","e":4,"emp":14160,"w":365060,"o":8,"od":"Much faster than average","edu":"Doctoral or professional degree","r":"Optometry is a hybrid of physical clinical procedures and high-level data analysis. AI is highly effective at analyzing retinal scans and diagnostic data to identify diseases, whic","soc":"29-1242","slug":"optometrists","cat":"healthcare"},{"t":"Orthotists and prosthetists","s":"Healthcare","e":4,"emp":10100,"w":78310,"o":13,"od":"Much faster than average","edu":"Master's degree","r":"This occupation involves a significant amount of physical, hands-on work including patient examinations, manual measurements, and the physical fabrication or adjustment of medical ","soc":"","slug":"orthotists-and-prosthetists","cat":"healthcare"},{"t":"Painters, construction and maintenance","s":"Construction","e":1,"emp":224180,"w":53710,"o":4,"od":"As fast as average","edu":"No formal educational credential","r":"The core duties of this occupation are entirely physical, requiring manual dexterity, mobility at heights, and real-time adaptation to unpredictable physical environments. While AI","soc":"47-2141","slug":"painters-construction-and-maintenance","cat":"construction-and-extraction"},{"t":"Painting and coating workers","s":"Production","e":3,"emp":174300,"w":47390,"o":1,"od":"Slower than average","edu":"See How to Become One","r":"The core of this occupation involves physical labor, manual dexterity, and presence in industrial or repair environments, which provides a natural barrier to AI. While AI and compu","soc":"","slug":"painting-and-coating-workers","cat":"production"},{"t":"Paralegals and legal assistants","s":"Legal","e":9,"emp":367220,"w":66510,"o":0,"od":"Little or no change","edu":"Associate's degree","r":"The core duties of this occupation—legal research, document drafting, and information organization—are fundamentally digital and align perfectly with the strengths of Large Languag","soc":"23-2011","slug":"paralegals-and-legal-assistants","cat":"legal"},{"t":"Personal financial advisors","s":"Business & Finance","e":7,"emp":270480,"w":160210,"o":10,"od":"Much faster than average","edu":"Bachelor's degree","r":"The core technical tasks of this role—analyzing market data, optimizing portfolios, and tax planning—are digital and highly susceptible to AI automation, as evidenced by the rise o","soc":"13-2052","slug":"personal-financial-advisors","cat":"business-and-financial"},{"t":"Pest control workers","s":"Building & Cleaning","e":2,"emp":102400,"w":44730,"o":5,"od":"Faster than average","edu":"High school diploma or equivalent","r":"The core of this occupation is highly physical, requiring workers to crawl into tight spaces, set manual traps, and apply chemicals in unpredictable real-world environments. While ","soc":"37-9011","slug":"pest-control-workers","cat":"building-and-grounds-cleaning"},{"t":"Petroleum engineers","s":"Architecture & Eng","e":6,"emp":18970,"w":153560,"o":1,"od":"Slower than average","edu":"Bachelor's degree","r":"Petroleum engineering involves significant digital knowledge work, such as reservoir modeling, data analysis, and drilling simulation, which are highly susceptible to AI-driven opt","soc":"17-2171","slug":"petroleum-engineers","cat":"architecture-and-engineering"},{"t":"Pharmacists","s":"Healthcare","e":5,"emp":335100,"w":137480,"o":5,"od":"Faster than average","edu":"Doctoral or professional degree","r":"Pharmacists face moderate exposure because their core knowledge-based tasks—checking drug interactions, verifying dosages, and analyzing patient records—are highly susceptible to A","soc":"","slug":"pharmacists","cat":"healthcare"},{"t":"Pharmacy technicians","s":"Healthcare","e":4,"emp":487920,"w":44800,"o":6,"od":"Faster than average","edu":"High school diploma or equivalent","r":"The role involves a significant amount of physical labor, such as measuring medications, packaging prescriptions, and interacting with patients in person, which provides a buffer a","soc":"29-2052","slug":"pharmacy-technicians","cat":"healthcare"},{"t":"Phlebotomists","s":"Healthcare","e":2,"emp":139700,"w":43660,"o":6,"od":"Faster than average","edu":"Postsecondary nondegree award","r":"The core of the job is a highly tactile, physical procedure (venipuncture) performed on human patients in unpredictable clinical settings, which is resistant to AI automation. Whil","soc":"","slug":"phlebotomists","cat":"healthcare"},{"t":"Photographers","s":"Media & Comms","e":7,"emp":51230,"w":55650,"o":2,"od":"Slower than average","edu":"High school diploma or equivalent","r":"Photography is a hybrid role where the physical act of capturing real-world events (weddings, news, portraits) provides a buffer, but the digital output is highly vulnerable to AI.","soc":"27-4021","slug":"photographers","cat":"media-and-communication"},{"t":"Physical therapist assistants and aides","s":"Healthcare","e":3,"emp":157100,"w":60050,"o":16,"od":"Much faster than average","edu":"See How to Become One","r":"The core of this occupation involves physical, hands-on work such as massage, stretching, and assisting patients with mobility, which AI cannot perform. While AI can streamline per","soc":"","slug":"physical-therapist-assistants-and-aides","cat":"healthcare"},{"t":"Physical therapists","s":"Healthcare","e":3,"emp":267200,"w":101020,"o":11,"od":"Much faster than average","edu":"Doctoral or professional degree","r":"The core of physical therapy involves manual manipulation, physical assistance, and real-time observation of human movement in a physical environment, which AI cannot replicate. Wh","soc":"","slug":"physical-therapists","cat":"healthcare"},{"t":"Physician assistants","s":"Healthcare","e":5,"emp":162700,"w":133260,"o":20,"od":"Much faster than average","edu":"Master's degree","r":"Physician assistants perform a mix of high-level knowledge work and physical clinical tasks. While AI will significantly augment diagnostic accuracy, treatment planning, and admini","soc":"","slug":"physician-assistants","cat":"healthcare"},{"t":"Physicians and surgeons","s":"Healthcare","e":5,"emp":839000,"w":239200,"o":3,"od":"As fast as average","edu":"Doctoral or professional degree","r":"Physicians and surgeons have moderate exposure because while AI can significantly automate digital tasks like diagnostic image interpretation (radiology), medical history analysis,","soc":"","slug":"physicians-and-surgeons","cat":"healthcare"},{"t":"Physicists and astronomers","s":"Science","e":7,"emp":26400,"w":166290,"o":4,"od":"As fast as average","edu":"Doctoral or professional degree","r":"Physicists and astronomers perform high-level knowledge work that is increasingly digital, including data analysis, mathematical modeling, and software development. While AI signif","soc":"","slug":"physicists-and-astronomers","cat":"life-physical-and-social-science"},{"t":"Plumbers, pipefitters, and steamfitters","s":"Construction","e":2,"emp":455940,"w":69940,"o":4,"od":"As fast as average","edu":"High school diploma or equivalent","r":"The core duties of this occupation are highly physical, requiring manual dexterity, strength, and real-time problem-solving in unpredictable physical environments like crawl spaces","soc":"47-2152","slug":"plumbers-pipefitters-and-steamfitters","cat":"construction-and-extraction"},{"t":"Podiatrists","s":"Healthcare","e":4,"emp":9700,"w":152800,"o":2,"od":"Slower than average","edu":"Doctoral or professional degree","r":"Podiatry is a medical specialty that requires significant physical presence for exams, manual procedures, and complex surgeries that AI cannot perform. However, AI will heavily imp","soc":"","slug":"podiatrists","cat":"healthcare"},{"t":"Police and detectives","s":"Protective Services","e":4,"emp":826800,"w":77270,"o":3,"od":"As fast as average","edu":"See How to Become One","r":"The core of the job involves physical presence, emergency response, and manual tasks like making arrests and patrolling, which are resistant to AI. However, a significant portion o","soc":"","slug":"police-and-detectives","cat":"protective-service"},{"t":"Political scientists","s":"Science","e":8,"emp":6500,"w":139380,"o":-3,"od":"Decline","edu":"Master's degree","r":"Political science is a purely digital knowledge-work occupation centered on data analysis, research, and writing, all of which are core strengths of generative AI and LLMs. While h","soc":"","slug":"political-scientists","cat":"life-physical-and-social-science"},{"t":"Postal service workers","s":"Office & Admin","e":3,"emp":500000,"w":57870,"o":-5,"od":"Decline","edu":"No formal educational credential","r":"The core of this occupation involves physical labor, such as delivering parcels and navigating outdoor environments, which provides a natural barrier to AI. However, AI and advance","soc":"","slug":"postal-service-workers","cat":"office-and-administrative-support"},{"t":"Postsecondary education administrators","s":"Management","e":7,"emp":226600,"w":103960,"o":2,"od":"Slower than average","edu":"Master's degree","r":"This occupation is heavily centered on digital information processing, including reviewing applications, analyzing student data, managing budgets, and maintaining academic records—","soc":"","slug":"postsecondary-education-administrators","cat":"management"},{"t":"Postsecondary teachers","s":"Education","e":7,"emp":1415600,"w":83980,"o":7,"od":"Much faster than average","edu":"See How to Become One","r":"Postsecondary teaching is primarily knowledge work involving research, writing, and curriculum design—all areas where AI is highly capable. While the role requires significant huma","soc":"","slug":"postsecondary-teachers","cat":"education-training-and-library"},{"t":"Power plant operators, distributors, and dispatchers","s":"Production","e":6,"emp":46600,"w":103600,"o":-10,"od":"Decline","edu":"High school diploma or equivalent","r":"The core tasks of monitoring data, adjusting power flows, and responding to system abnormalities are increasingly digital and data-driven, making them highly susceptible to AI-driv","soc":"","slug":"power-plant-operators-distributors-and-dispatchers","cat":"production"},{"t":"Preschool and childcare center directors","s":"Management","e":5,"emp":90200,"w":56270,"o":-3,"od":"Decline","edu":"Bachelor's degree","r":"This role is a hybrid of administrative knowledge work and high-stakes physical presence. While AI can significantly automate digital tasks like budgeting, scheduling, and curricul","soc":"","slug":"preschool-and-childcare-center-directors","cat":"management"},{"t":"Preschool teachers","s":"Education","e":3,"emp":445080,"w":41450,"o":4,"od":"As fast as average","edu":"Associate's degree","r":"The core of this occupation involves physical care, emotional support, and real-time social interaction with children under age five, which AI cannot replicate. While AI can assist","soc":"25-2011","slug":"preschool-teachers","cat":"education-training-and-library"},{"t":"Private detectives and investigators","s":"Protective Services","e":6,"emp":38700,"w":61680,"o":6,"od":"Faster than average","edu":"High school diploma or equivalent","r":"The occupation is a hybrid of digital research and physical field work. AI significantly enhances the digital aspects—such as background checks, social media analysis, and report w","soc":"33-9021","slug":"private-detectives-and-investigators","cat":"protective-service"},{"t":"Probation officers and correctional treatment specialists","s":"Community Service","e":6,"emp":92300,"w":64520,"o":3,"od":"As fast as average","edu":"Bachelor's degree","r":"This occupation is a hybrid of high-exposure digital tasks (writing case reports, risk assessment, and data-driven monitoring) and low-exposure physical/interpersonal tasks (home v","soc":"","slug":"probation-officers-and-correctional-treatment-specialists","cat":"community-and-social-service"},{"t":"Producers and directors","s":"Entertainment","e":7,"emp":167000,"w":83480,"o":5,"od":"Faster than average","edu":"Bachelor's degree","r":"Producers and directors are highly exposed because their core work products—scripts, visual aesthetics, and edited video—are increasingly being generated or enhanced by AI tools. W","soc":"","slug":"producers-and-directors","cat":"entertainment-and-sports"},{"t":"Project management specialists","s":"Business & Finance","e":7,"emp":1046300,"w":100750,"o":6,"od":"Faster than average","edu":"Bachelor's degree","r":"Project management is a digital-heavy knowledge occupation involving data analysis, scheduling, and documentation, all of which are highly susceptible to AI automation and optimiza","soc":"","slug":"project-management-specialists","cat":"business-and-financial"},{"t":"Property appraisers and assessors","s":"Business & Finance","e":7,"emp":77300,"w":65420,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"The core of this occupation involves analyzing data, comparing market trends, and generating reports, all of which are highly susceptible to Automated Valuation Models (AVMs) and A","soc":"","slug":"appraisers-and-assessors-of-real-estate","cat":"business-and-financial"},{"t":"Property, real estate, and community association managers","s":"Management","e":6,"emp":466100,"w":66700,"o":4,"od":"As fast as average","edu":"High school diploma or equivalent","r":"This occupation is a hybrid of digital knowledge work and physical site management. While AI can automate significant portions of the job—such as drafting leases, financial reporti","soc":"","slug":"property-real-estate-and-community-association-managers","cat":"management"},{"t":"Psychiatric technicians and aides","s":"Healthcare","e":3,"emp":182900,"w":42200,"o":16,"od":"Much faster than average","edu":"See How to Become One","r":"The core of this occupation involves physical tasks such as bathing, feeding, and physically restraining patients, which AI cannot perform. While AI can assist with monitoring pati","soc":"","slug":"psychiatric-technicians-and-aides","cat":"healthcare"},{"t":"Psychologists","s":"Science","e":6,"emp":204300,"w":94310,"o":6,"od":"Faster than average","edu":"See How to Become One","r":"Psychology is a knowledge-based profession where core tasks like analyzing data, writing reports, and researching are highly susceptible to AI enhancement. However, the critical re","soc":"","slug":"psychologists","cat":"life-physical-and-social-science"},{"t":"Public relations and fundraising managers","s":"Management","e":7,"emp":128900,"w":132870,"o":5,"od":"Faster than average","edu":"Bachelor's degree","r":"The core digital tasks of this role—writing press releases, drafting speeches, analyzing social media trends, and creating fundraising strategies—are highly susceptible to AI autom","soc":"","slug":"public-relations-managers","cat":"management"},{"t":"Public relations specialists","s":"Media & Comms","e":8,"emp":280590,"w":80310,"o":5,"od":"Faster than average","edu":"Bachelor's degree","r":"The core tasks of this occupation—writing press releases, drafting speeches, creating social media content, and monitoring public sentiment—are digital-first and align perfectly wi","soc":"27-3031","slug":"public-relations-specialists","cat":"media-and-communication"},{"t":"Public safety telecommunicators","s":"Office & Admin","e":7,"emp":105200,"w":50730,"o":3,"od":"As fast as average","edu":"High school diploma or equivalent","r":"The core tasks of this role—receiving digital inputs (voice, text, video), processing information according to protocols, and dispatching resources—are highly susceptible to AI aut","soc":"","slug":"police-fire-and-ambulance-dispatchers","cat":"office-and-administrative-support"},{"t":"Purchasing managers, buyers, and purchasing agents","s":"Business & Finance","e":7,"emp":605600,"w":79830,"o":5,"od":"Faster than average","edu":"Bachelor's degree","r":"The core tasks of analyzing price proposals, monitoring inventory, and reviewing financial reports are highly susceptible to AI automation and optimization. While high-stakes negot","soc":"","slug":"purchasing-managers-buyers-and-purchasing-agents","cat":"business-and-financial"},{"t":"Quality control inspectors","s":"Production","e":5,"emp":598000,"w":47460,"o":0,"od":"Little or no change","edu":"High school diploma or equivalent","r":"This occupation is a hybrid of physical inspection and data analysis. While AI-powered computer vision systems are rapidly automating the visual detection of defects, the role stil","soc":"","slug":"quality-control-inspectors","cat":"production"},{"t":"Radiation therapists","s":"Healthcare","e":4,"emp":19200,"w":101990,"o":2,"od":"Slower than average","edu":"Associate's degree","r":"The role requires a significant physical presence to position patients, operate heavy machinery, and provide empathetic interpersonal care during serious illness. While AI will hea","soc":"","slug":"radiation-therapists","cat":"healthcare"},{"t":"Radiologic and MRI technologists","s":"Healthcare","e":4,"emp":272000,"w":78980,"o":5,"od":"Faster than average","edu":"Associate's degree","r":"While AI is revolutionizing image analysis and quality control, the core of this role requires physical presence to position patients, administer contrast agents, and operate heavy","soc":"","slug":"radiologic-technologists","cat":"healthcare"},{"t":"Railroad workers","s":"Transportation","e":4,"emp":77900,"w":75680,"o":1,"od":"Slower than average","edu":"High school diploma or equivalent","r":"The occupation involves a significant amount of physical labor, mechanical adjustment, and real-world safety monitoring that AI cannot perform. However, core functions like train o","soc":"","slug":"railroad-occupations","cat":"transportation-and-material-moving"},{"t":"Real estate brokers and sales agents","s":"Sales","e":6,"emp":532200,"w":58960,"o":3,"od":"As fast as average","edu":"High school diploma or equivalent","r":"Real estate agents perform a mix of digital knowledge work and physical/interpersonal tasks. AI can automate significant portions of their digital workload, such as market analysis","soc":"","slug":"real-estate-brokers-and-sales-agents","cat":"sales"},{"t":"Receptionists","s":"Office & Admin","e":7,"emp":1007200,"w":37230,"o":0,"od":"Little or no change","edu":"High school diploma or equivalent","r":"Many core tasks such as scheduling, answering phones, and data entry are highly susceptible to automation via AI voice agents and chatbots. While the role retains a physical compon","soc":"","slug":"receptionists","cat":"office-and-administrative-support"},{"t":"Recreation workers","s":"Personal Care","e":3,"emp":309640,"w":37170,"o":4,"od":"As fast as average","edu":"High school diploma or equivalent","r":"The core of this occupation involves physical presence, manual instruction, and real-time interpersonal interaction in unpredictable environments like camps and community centers. ","soc":"39-9032","slug":"recreation-workers","cat":"personal-care-and-service"},{"t":"Recreational therapists","s":"Healthcare","e":3,"emp":16100,"w":60280,"o":3,"od":"As fast as average","edu":"Bachelor's degree","r":"The core of this occupation involves physical presence, manual assistance, and real-time interpersonal interaction through activities like adaptive sports, dance, and community out","soc":"","slug":"recreational-therapists","cat":"healthcare"},{"t":"Registered nurses","s":"Healthcare","e":4,"emp":3282010,"w":98430,"o":5,"od":"Faster than average","edu":"Bachelor's degree","r":"Registered nursing is a hybrid role that combines significant physical labor, such as administering treatments and moving patients, with complex interpersonal care and emotional su","soc":"29-1141","slug":"registered-nurses","cat":"healthcare"},{"t":"Rehabilitation counselors","s":"Community Service","e":5,"emp":88930,"w":51260,"o":1,"od":"Slower than average","edu":"Master's degree","r":"Rehabilitation counseling involves a significant amount of digital knowledge work, such as developing rehabilitation plans, maintaining records, and researching resources, which ar","soc":"21-1015","slug":"rehabilitation-counselors","cat":"community-and-social-service"},{"t":"Respiratory therapists","s":"Healthcare","e":4,"emp":139600,"w":80450,"o":12,"od":"Much faster than average","edu":"Associate's degree","r":"Respiratory therapy involves a significant amount of physical, hands-on patient care, such as performing chest physiotherapy, intubating patients, and maintaining equipment in real","soc":"","slug":"respiratory-therapists","cat":"healthcare"},{"t":"Retail sales workers","s":"Sales","e":4,"emp":4208800,"w":34730,"o":0,"od":"Little or no change","edu":"No formal educational credential","r":"Retail sales involve a mix of physical tasks (stocking shelves, demonstrating products) and interpersonal interaction that provides a barrier to full automation. However, AI is inc","soc":"","slug":"retail-sales-workers","cat":"sales"},{"t":"Roofers","s":"Construction","e":1,"emp":136740,"w":57090,"o":6,"od":"Faster than average","edu":"No formal educational credential","r":"Roofing is a highly physical occupation performed in unpredictable outdoor environments that require manual dexterity, balance, and heavy lifting. While AI might assist with periph","soc":"47-2181","slug":"roofers","cat":"construction-and-extraction"},{"t":"Sales engineers","s":"Sales","e":7,"emp":56800,"w":121520,"o":5,"od":"Faster than average","edu":"Bachelor's degree","r":"Sales engineers perform high-level knowledge work that is increasingly digital, including technical presentations, product customization, and troubleshooting. While AI can automate","soc":"","slug":"sales-engineers","cat":"sales"},{"t":"Sales managers","s":"Management","e":7,"emp":603710,"w":160930,"o":5,"od":"Faster than average","edu":"Bachelor's degree","r":"Sales managers perform high-level knowledge work including data analysis, sales forecasting, and strategic planning, all of which are highly susceptible to AI augmentation. While t","soc":"11-2022","slug":"sales-managers","cat":"management"},{"t":"School and career counselors and advisors","s":"Community Service","e":6,"emp":376300,"w":65140,"o":4,"od":"As fast as average","edu":"Master's degree","r":"This occupation is a mix of high-touch interpersonal work and digital information processing. AI can significantly automate the 'hard' data tasks like analyzing student performance","soc":"","slug":"school-and-career-counselors","cat":"community-and-social-service"},{"t":"Secretaries and administrative assistants","s":"Office & Admin","e":8,"emp":1737820,"w":47640,"o":0,"od":"Little or no change","edu":"High school diploma or equivalent","r":"The core duties of this occupation—scheduling, drafting correspondence, managing databases, and transcribing—are fundamentally digital and align perfectly with the capabilities of ","soc":"43-6014","slug":"secretaries-and-administrative-assistants","cat":"office-and-administrative-support"},{"t":"Securities, commodities, and financial services sales agents","s":"Sales","e":8,"emp":514500,"w":78140,"o":3,"od":"As fast as average","edu":"Bachelor's degree","r":"This occupation is almost entirely digital and information-based, involving data analysis, market monitoring, and financial modeling—all areas where AI is rapidly achieving parity ","soc":"","slug":"securities-commodities-and-financial-services-sales-agents","cat":"sales"},{"t":"Security guards and gambling surveillance officers","s":"Protective Services","e":5,"emp":1272400,"w":38390,"o":0,"od":"Little or no change","edu":"High school diploma or equivalent","r":"The occupation is a hybrid of physical presence and digital monitoring. While AI-powered computer vision is rapidly automating the 'surveillance' and 'monitoring' aspects of the jo","soc":"","slug":"security-guards","cat":"protective-service"},{"t":"Semiconductor processing technicians","s":"Production","e":4,"emp":31900,"w":51180,"o":11,"od":"Much faster than average","edu":"High school diploma or equivalent","r":"The role involves a significant physical component, requiring presence in cleanrooms to handle wafers, maintain equipment, and perform manual inspections. However, AI and advanced ","soc":"","slug":"semiconductor-processing-technicians","cat":"production"},{"t":"Set and exhibit designers","s":"Arts & Design","e":7,"emp":31300,"w":66280,"o":2,"od":"Slower than average","edu":"Bachelor's degree","r":"The core creative process—including script analysis, conceptual sketching, and CAD modeling—is increasingly susceptible to generative AI and automated design tools that can rapidly","soc":"","slug":"set-and-exhibit-designers","cat":"arts-and-design"},{"t":"Sheet metal workers","s":"Construction","e":3,"emp":117470,"w":66110,"o":2,"od":"Slower than average","edu":"High school diploma or equivalent","r":"The core of this occupation involves physical labor, manual dexterity, and on-site installation in unpredictable construction environments, which are highly resistant to AI. While ","soc":"47-2211","slug":"sheet-metal-workers","cat":"construction-and-extraction"},{"t":"Skincare specialists","s":"Personal Care","e":3,"emp":97400,"w":41560,"o":7,"od":"Much faster than average","edu":"Postsecondary nondegree award","r":"The core of the job involves physical, hands-on treatments like facials, massages, and hair removal that require real-time human presence and manual dexterity. While AI can assist ","soc":"","slug":"skincare-specialists","cat":"personal-care-and-service"},{"t":"Small engine mechanics","s":"Installation & Repair","e":2,"emp":78000,"w":48240,"o":4,"od":"As fast as average","edu":"See How to Become One","r":"The core of this occupation involves physical manipulation of mechanical components, manual dexterity, and real-world troubleshooting in unpredictable environments. While AI can as","soc":"","slug":"small-engine-mechanics","cat":"installation-maintenance-and-repair"},{"t":"Social and community service managers","s":"Management","e":6,"emp":195490,"w":86100,"o":6,"od":"Faster than average","edu":"Bachelor's degree","r":"This role involves a significant amount of digital knowledge work, such as grant writing, data analysis, and budget management, which are highly susceptible to AI augmentation. How","soc":"11-9151","slug":"social-and-community-service-managers","cat":"management"},{"t":"Social and human service assistants","s":"Community Service","e":5,"emp":424220,"w":47090,"o":6,"od":"Faster than average","edu":"High school diploma or equivalent","r":"This occupation is a hybrid of digital administrative work and high-touch interpersonal service. AI can significantly automate the 'knowledge work' components, such as researching ","soc":"21-1093","slug":"social-and-human-service-assistants","cat":"community-and-social-service"},{"t":"Social workers","s":"Community Service","e":4,"emp":810900,"w":61330,"o":6,"od":"Faster than average","edu":"See How to Become One","r":"Social work involves a high degree of interpersonal interaction, empathy, and crisis management in physical environments, which provides a strong barrier against full automation. H","soc":"","slug":"social-workers","cat":"community-and-social-service"},{"t":"Sociologists","s":"Science","e":7,"emp":3400,"w":101690,"o":4,"od":"As fast as average","edu":"Master's degree","r":"Sociology is a knowledge-intensive field where core tasks like data analysis, literature reviews, and report writing are highly susceptible to AI enhancement. While qualitative fie","soc":"","slug":"sociologists","cat":"life-physical-and-social-science"},{"t":"Software developers, quality assurance analysts, and testers","s":"Computer & IT","e":9,"emp":1895500,"w":131450,"o":15,"od":"Much faster than average","edu":"Bachelor's degree","r":"This occupation is fundamentally digital, with core tasks like coding, debugging, and test automation being primary use cases for Large Language Models. While high-level system arc","soc":"","slug":"software-developers","cat":"computer-and-information-technology"},{"t":"Solar photovoltaic installers","s":"Construction","e":2,"emp":28600,"w":51860,"o":42,"od":"Much faster than average","edu":"High school diploma or equivalent","r":"The core of this occupation is highly physical, involving manual labor, climbing roofs, and using hand tools in unpredictable outdoor environments. While AI might assist with perip","soc":"","slug":"solar-photovoltaic-installers","cat":"construction-and-extraction"},{"t":"Special education teachers","s":"Education","e":5,"emp":559500,"w":64270,"o":-1,"od":"Decline","edu":"Bachelor's degree","r":"AI will significantly streamline the digital and administrative aspects of the role, such as drafting Individualized Education Programs (IEPs), adapting lesson plans, and tracking ","soc":"25-2055","slug":"special-education-teachers","cat":"education-training-and-library"},{"t":"Special effects artists and animators","s":"Arts & Design","e":9,"emp":57100,"w":99800,"o":2,"od":"Slower than average","edu":"Bachelor's degree","r":"This occupation is almost entirely digital, with core tasks like 3D modeling, rendering, and animation being directly disrupted by generative AI and automated rigging tools. While ","soc":"","slug":"multimedia-artists-and-animators","cat":"arts-and-design"},{"t":"Speech-language pathologists","s":"Healthcare","e":5,"emp":187400,"w":95410,"o":15,"od":"Much faster than average","edu":"Master's degree","r":"Speech-language pathology involves a significant amount of digital-adjacent work, such as analyzing speech patterns, documenting progress, and developing treatment plans, all of wh","soc":"","slug":"speech-language-pathologists","cat":"healthcare"},{"t":"Stationary engineers and boiler operators","s":"Production","e":3,"emp":33300,"w":75190,"o":2,"od":"Slower than average","edu":"High school diploma or equivalent","r":"The core of this occupation involves physical maintenance, manual repairs, and hands-on troubleshooting of heavy mechanical equipment in unpredictable physical environments. While ","soc":"","slug":"stationary-engineers-and-boiler-operators","cat":"production"},{"t":"Substance abuse, behavioral disorder, and mental health counselors","s":"Community Service","e":5,"emp":483500,"w":59190,"o":17,"od":"Much faster than average","edu":"Master's degree","r":"This occupation is a mix of high-level knowledge work and intense interpersonal interaction. While AI can significantly assist with digital tasks like documentation, treatment plan","soc":"","slug":"substance-abuse-behavioral-disorder-and-mental-health-counselors","cat":"community-and-social-service"},{"t":"Surgical assistants and technologists","s":"Healthcare","e":3,"emp":141000,"w":62480,"o":5,"od":"Faster than average","edu":"Postsecondary nondegree award","r":"The core of this occupation is highly physical, requiring manual dexterity, sterile technique, and real-time presence in an operating room. While AI and robotics can assist with su","soc":"","slug":"surgical-technologists","cat":"healthcare"},{"t":"Survey researchers","s":"Science","e":9,"emp":8800,"w":63380,"o":-5,"od":"Decline","edu":"Master's degree","r":"Survey research is a fundamentally digital knowledge occupation involving background research, survey design, statistical analysis, and report generation—all areas where LLMs and s","soc":"","slug":"survey-researchers","cat":"life-physical-and-social-science"},{"t":"Surveying and mapping technicians","s":"Architecture & Eng","e":5,"emp":59400,"w":51940,"o":5,"od":"Faster than average","edu":"High school diploma or equivalent","r":"This occupation is a hybrid of physical fieldwork and digital data processing. While AI and automation (via drones and GIS software) significantly enhance data analysis, map creati","soc":"","slug":"surveying-and-mapping-technicians","cat":"architecture-and-engineering"},{"t":"Surveyors","s":"Architecture & Eng","e":5,"emp":56100,"w":72740,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"Surveying is a hybrid occupation that combines significant physical fieldwork with digital data processing. While AI and automation (via drones and GIS) are rapidly increasing prod","soc":"","slug":"surveyors","cat":"architecture-and-engineering"},{"t":"Tax examiners and collectors, and revenue agents","s":"Business & Finance","e":8,"emp":57600,"w":59740,"o":-2,"od":"Decline","edu":"Bachelor's degree","r":"This occupation is highly exposed because its core tasks—reviewing financial documents, identifying discrepancies, and interpreting tax law—are digital information-processing tasks","soc":"","slug":"tax-examiners-and-collectors-and-revenue-agents","cat":"business-and-financial"},{"t":"Taxi drivers, shuttle drivers, and chauffeurs","s":"Transportation","e":5,"emp":447900,"w":36660,"o":9,"od":"Much faster than average","edu":"No formal educational credential","r":"While the core task of driving is highly susceptible to automation through autonomous vehicle technology (AI), the job currently requires significant physical presence for tasks li","soc":"","slug":"taxi-drivers-and-chauffeurs","cat":"transportation-and-material-moving"},{"t":"Teacher assistants","s":"Education","e":4,"emp":1422800,"w":35240,"o":-1,"od":"Decline","edu":"Some college, no degree","r":"Teacher assistants have moderate exposure because AI can significantly automate their administrative and instructional support tasks, such as grading, lesson preparation, and provi","soc":"","slug":"teacher-assistants","cat":"education-training-and-library"},{"t":"Technical writers","s":"Media & Comms","e":9,"emp":55530,"w":92330,"o":1,"od":"Slower than average","edu":"Bachelor's degree","r":"Technical writing is a fully digital occupation centered on synthesizing complex information into clear documentation, a core strength of Large Language Models. AI can already draf","soc":"27-3042","slug":"technical-writers","cat":"media-and-communication"},{"t":"Telecommunications technicians","s":"Installation & Repair","e":3,"emp":268500,"w":64310,"o":-3,"od":"Decline","edu":"See How to Become One","r":"The core of this occupation is physical labor, including climbing towers, installing hardware, and manual troubleshooting in unpredictable environments, which provides a strong bar","soc":"","slug":"telecommunications-equipment-installers-and-repairers-except-line-installers","cat":"installation-maintenance-and-repair"},{"t":"Tellers","s":"Office & Admin","e":7,"emp":339340,"w":40940,"o":-13,"od":"Decline","edu":"High school diploma or equivalent","r":"Tellers face high exposure because their core tasks—processing routine financial transactions and verifying information—are digital in nature and highly susceptible to automation t","soc":"43-3071","slug":"tellers","cat":"office-and-administrative-support"},{"t":"Top executives","s":"Management","e":6,"emp":4022200,"w":105350,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"Top executives perform high-level knowledge work including financial analysis, strategic planning, and contract review, all of which are highly susceptible to AI augmentation. Howe","soc":"","slug":"top-executives","cat":"management"},{"t":"Tour and travel guides","s":"Personal Care","e":4,"emp":55800,"w":36660,"o":8,"od":"Much faster than average","edu":"High school diploma or equivalent","r":"While AI can automate the digital aspects of the job—such as researching history, planning itineraries, and providing multilingual translations—the core of the role requires physic","soc":"","slug":"tour-and-travel-guides","cat":"personal-care-and-service"},{"t":"Training and development managers","s":"Management","e":7,"emp":44960,"w":140590,"o":6,"od":"Faster than average","edu":"Bachelor's degree","r":"This role is predominantly digital and knowledge-based, involving the creation of instructional content, data-driven needs assessments, and budget management—all areas where AI is ","soc":"11-3131","slug":"training-and-development-managers","cat":"management"},{"t":"Training and development specialists","s":"Business & Finance","e":7,"emp":436610,"w":73760,"o":11,"od":"Much faster than average","edu":"Bachelor's degree","r":"Much of the core work, such as designing training manuals, creating online learning modules, and assessing needs through data, is digital and highly susceptible to AI automation an","soc":"13-1151","slug":"training-and-development-specialists","cat":"business-and-financial"},{"t":"Transportation, storage, and distribution managers","s":"Management","e":6,"emp":216700,"w":102010,"o":6,"od":"Faster than average","edu":"High school diploma or equivalent","r":"This role involves a significant amount of digital knowledge work, such as logistics planning, budgeting, and supply chain optimization, which are highly susceptible to AI-driven e","soc":"","slug":"transportation-storage-and-distribution-managers","cat":"management"},{"t":"Travel agents","s":"Sales","e":9,"emp":65700,"w":48450,"o":2,"od":"Slower than average","edu":"High school diploma or equivalent","r":"The core functions of a travel agent—researching destinations, comparing prices, building itineraries, and processing bookings—are entirely digital and involve information synthesi","soc":"","slug":"travel-agents","cat":"sales"},{"t":"Tutors","s":"Education","e":7,"emp":215500,"w":40090,"o":1,"od":"Slower than average","edu":"Some college, no degree","r":"Tutors primarily engage in knowledge transfer, explanation, and feedback—tasks where generative AI and personalized learning algorithms excel. While the interpersonal and motivatio","soc":"","slug":"tutors","cat":"education-training-and-library"},{"t":"Umpires, referees, and other sports officials","s":"Entertainment","e":5,"emp":19300,"w":38820,"o":6,"od":"Faster than average","edu":"High school diploma or equivalent","r":"The occupation is a hybrid of physical presence and objective data processing. While computer vision and AI can already automate 'calls' (like strike zones or out-of-bounds) with h","soc":"","slug":"umpires-referees-and-other-sports-officials","cat":"entertainment-and-sports"},{"t":"Urban and regional planners","s":"Science","e":7,"emp":44700,"w":83720,"o":3,"od":"As fast as average","edu":"Master's degree","r":"Urban planners perform heavy knowledge work including data analysis, GIS mapping, and report writing, all of which are highly susceptible to AI enhancement and automation. However,","soc":"","slug":"urban-and-regional-planners","cat":"life-physical-and-social-science"},{"t":"Veterinarians","s":"Healthcare","e":4,"emp":86400,"w":125510,"o":10,"od":"Much faster than average","edu":"Doctoral or professional degree","r":"Veterinary work is a hybrid of physical procedures and complex diagnostic knowledge work. While AI will significantly enhance diagnostic accuracy through image analysis (X-rays/ult","soc":"","slug":"veterinarians","cat":"healthcare"},{"t":"Veterinary assistants and laboratory animal caretakers","s":"Healthcare","e":2,"emp":117800,"w":37320,"o":9,"od":"Much faster than average","edu":"High school diploma or equivalent","r":"The core duties of this occupation are almost entirely physical and manual, involving the handling, feeding, and restraining of live animals in unpredictable environments. While AI","soc":"","slug":"veterinary-assistants-and-laboratory-animal-caretakers","cat":"healthcare"},{"t":"Veterinary technologists and technicians","s":"Healthcare","e":4,"emp":134200,"w":45980,"o":9,"od":"Much faster than average","edu":"Associate's degree","r":"The core of this occupation involves physical tasks that AI cannot perform, such as restraining animals, administering anesthesia, performing surgery prep, and providing emergency ","soc":"","slug":"veterinary-technologists-and-technicians","cat":"healthcare"},{"t":"Waiters and waitresses","s":"Food Service","e":3,"emp":2302690,"w":38360,"o":-1,"od":"Decline","edu":"No formal educational credential","r":"While AI and automation are increasingly handling digital tasks like order-taking and payments via kiosks or mobile apps, the core of the job remains physical and interpersonal. Th","soc":"35-3031","slug":"waiters-and-waitresses","cat":"food-preparation-and-serving"},{"t":"Water and wastewater treatment plant and system operators","s":"Production","e":5,"emp":132400,"w":58260,"o":-7,"od":"Decline","edu":"High school diploma or equivalent","r":"The occupation is a hybrid of physical labor and digital monitoring, with AI and advanced automation already contributing to a projected 7% decline in employment. While AI can opti","soc":"","slug":"water-and-wastewater-treatment-plant-and-system-operators","cat":"production"},{"t":"Water transportation workers","s":"Transportation","e":3,"emp":84300,"w":66490,"o":1,"od":"Slower than average","edu":"See How to Become One","r":"The core of the work is physical and requires real-time presence in unpredictable maritime environments, involving manual tasks like equipment maintenance, cargo handling, and emer","soc":"","slug":"water-transportation-occupations","cat":"transportation-and-material-moving"},{"t":"Web developers and digital designers","s":"Computer & IT","e":9,"emp":214900,"w":95380,"o":7,"od":"Much faster than average","edu":"Bachelor's degree","r":"This occupation is entirely digital, with core tasks like writing code (HTML, JavaScript), designing layouts, and creating prototypes being areas where AI has demonstrated high pro","soc":"","slug":"web-developers","cat":"computer-and-information-technology"},{"t":"Welders, cutters, solderers, and brazers","s":"Production","e":2,"emp":424040,"w":55100,"o":2,"od":"Slower than average","edu":"High school diploma or equivalent","r":"The core of this occupation is highly physical, requiring manual dexterity, physical stamina, and real-time adaptation to unpredictable environments like construction sites or repa","soc":"51-4121","slug":"welders-cutters-solderers-and-brazers","cat":"production"},{"t":"Wholesale and manufacturing sales representatives","s":"Sales","e":7,"emp":1613600,"w":74100,"o":1,"od":"Slower than average","edu":"See How to Become One","r":"This occupation is heavily focused on information processing, communication, and data analysis, all of which are highly susceptible to AI enhancement and automation. While high-sta","soc":"","slug":"wholesale-and-manufacturing-sales-representatives","cat":"sales"},{"t":"Wind turbine technicians","s":"Installation & Repair","e":2,"emp":13600,"w":62580,"o":50,"od":"Much faster than average","edu":"Postsecondary nondegree award","r":"The core of this occupation involves high-stakes physical labor, including climbing 200-foot towers, rappelling, and performing manual repairs in confined spaces. While AI can assi","soc":"","slug":"wind-turbine-technicians","cat":"installation-maintenance-and-repair"},{"t":"Woodworkers","s":"Production","e":3,"emp":214600,"w":43720,"o":-2,"od":"Decline","edu":"High school diploma or equivalent","r":"The core of the job involves physical manipulation of materials, manual dexterity, and real-time sensory monitoring in a workshop environment, which are resistant to AI. While AI c","soc":"","slug":"woodworkers","cat":"production"},{"t":"Writers and authors","s":"Media & Comms","e":9,"emp":47800,"w":85780,"o":4,"od":"As fast as average","edu":"Bachelor's degree","r":"The core work product of writers and authors is entirely digital and text-based, which aligns perfectly with the primary capabilities of Large Language Models. AI can now generate ","soc":"27-3043","slug":"writers-and-authors","cat":"media-and-communication"},{"t":"Zoologists and wildlife biologists","s":"Science","e":5,"emp":18200,"w":72860,"o":2,"od":"Slower than average","edu":"Bachelor's degree","r":"This occupation is a hybrid of physical fieldwork and digital knowledge work. AI significantly impacts the data-heavy aspects of the job, such as analyzing GIS data, processing cam","soc":"","slug":"zoologists-and-wildlife-biologists","cat":"life-physical-and-social-science"}];

// ---- POPULATE UI ----

// Sector select
const sectors = [...new Set(OCCUPATIONS.map(d=>d.s))].sort();
const sel = document.getElementById('sector-select');
sectors.forEach(s => {
  const o = document.createElement('option');
  o.value = s; o.textContent = s;
  sel.appendChild(o);
});

// Exposure distribution
function buildDistBars() {
  const filtered = getFiltered(OCCUPATIONS);
  const byScore = d3.rollup(filtered, v => d3.sum(v, d=>d.emp), d=>d.e);
  const maxVal = d3.max([...byScore.values()]);
  const container = document.getElementById('dist-bars');
  container.innerHTML = '';
  for (let i = 0; i <= 10; i++) {
    const v = byScore.get(i) || 0;
    const row = document.createElement('div');
    row.className = 'dist-row';
    const pct = maxVal > 0 ? (v/maxVal*100) : 0;
    row.innerHTML = `
      <div class="dist-label">${i}</div>
      <div class="dist-bar-wrap">
        <div class="dist-bar" style="width:${pct}%;background:${exposureColor(i)}"></div>
      </div>
      <div class="dist-count">${fmtEmp(v)}</div>
    `;
    container.appendChild(row);
  }
}

// Breakdown rows
function buildBreakdown() {
  const filtered = getFiltered(OCCUPATIONS);
  const total = d3.sum(filtered, d=>d.emp);
  const tiers = [
    {label:'Minimal (0–1)', min:0, max:1, color:'#16a34a'},
    {label:'Low (2–3)',      min:2, max:3, color:'#4ade80'},
    {label:'Moderate (4–5)',min:4, max:5, color:'#facc15'},
    {label:'High (6–8)',    min:6, max:8, color:'#f97316'},
    {label:'Very High (9–10)',min:9,max:10,color:'#ef4444'},
  ];
  const container = document.getElementById('breakdown-rows');
  container.innerHTML = '';
  tiers.forEach(t => {
    const grp = filtered.filter(d => d.e >= t.min && d.e <= t.max);
    const emp = d3.sum(grp, d=>d.emp);
    const pct = total > 0 ? emp/total*100 : 0;
    const row = document.createElement('div');
    row.className = 'bdwn-row';
    row.innerHTML = `
      <div class="bdwn-swatch" style="background:${t.color}"></div>
      <div class="bdwn-label">${t.label}</div>
      <div class="bdwn-bar-wrap"><div class="bdwn-bar" style="width:${pct}%;background:${t.color}"></div></div>
      <div class="bdwn-val">${fmtEmp(emp)} <span style="color:var(--text3)">${pct.toFixed(0)}%</span></div>
    `;
    container.appendChild(row);
  });
}

// Pay bars
function buildPayBars() {
  const filtered = getFiltered(OCCUPATIONS);
  const brackets = [
    {label:'<$30K', fn: d => d.w > 0 && d.w < 30000},
    {label:'$30–50K', fn: d => d.w >= 30000 && d.w < 50000},
    {label:'$50–75K', fn: d => d.w >= 50000 && d.w < 75000},
    {label:'$75–100K', fn: d => d.w >= 75000 && d.w < 100000},
    {label:'$100K+', fn: d => d.w >= 100000},
  ];
  const container = document.getElementById('pay-bars');
  container.innerHTML = '';
  brackets.forEach(b => {
    const grp = filtered.filter(b.fn);
    if (grp.length === 0) return;
    const avgExp = d3.sum(grp, d=>d.e*d.emp) / d3.sum(grp, d=>d.emp);
    const pct = (avgExp / 10) * 100;
    const row = document.createElement('div');
    row.className = 'pay-row';
    row.innerHTML = `
      <div class="pay-label">${b.label}</div>
      <div class="pay-bar-bg"><div class="pay-bar-fill" style="width:${pct}%;background:${exposureColor(Math.round(avgExp))}"></div></div>
      <div class="pay-score">${avgExp.toFixed(1)}</div>
    `;
    container.appendChild(row);
  });
}

// Sector heatmap
function buildSectorHeatmap() {
  const filtered = getFiltered(OCCUPATIONS);
  const bySector = d3.rollup(filtered,
    v => d3.sum(v, d=>d.e*d.emp) / d3.sum(v, d=>d.emp),
    d => d.s
  );
  const container = document.getElementById('sector-heatmap');
  container.innerHTML = '';
  [...bySector.entries()].sort((a,b)=>b[1]-a[1]).forEach(([sector, avg]) => {
    const cell = document.createElement('div');
    cell.className = 'sector-cell';
    cell.style.background = exposureBg(Math.round(avg));
    cell.style.borderLeft = `2px solid ${exposureColor(Math.round(avg))}`;
    const shortName = sector.length > 12 ? sector.substring(0,11)+'…' : sector;
    cell.innerHTML = `<div class="sc-name">${shortName}</div><div class="sc-score" style="color:${exposureColor(Math.round(avg))}">${avg.toFixed(1)}</div>`;
    cell.title = `${sector}: ${avg.toFixed(2)} avg exposure`;
    cell.addEventListener('click', () => {
      activeSector = activeSector === sector ? 'all' : sector;
      document.getElementById('sector-select').value = activeSector;
      refresh();
    });
    container.appendChild(cell);
  });
}

// Risk table
function buildRiskTable() {
  const filtered = getFiltered(OCCUPATIONS);
  const topRisk = [...filtered].sort((a,b) => b.e - a.e || b.emp - a.emp).slice(0, 25);
  const tbody = document.getElementById('risk-tbody');
  tbody.innerHTML = '';
  topRisk.forEach((d, i) => {
    const tr = document.createElement('tr');
    tr.style.cursor = 'pointer';
    const color = exposureColor(d.e);
    const shortName = d.t.length > 24 ? d.t.substring(0,23)+'…' : d.t;
    tr.innerHTML = `
      <td style="color:var(--text3)">${i+1}</td>
      <td style="color:var(--text)" title="${d.t}">${shortName}</td>
      <td><span class="exp-badge" style="color:${color};background:${exposureBg(d.e)};border:1px solid ${color}30">${d.e}</span></td>
      <td style="color:var(--text2)">${fmtEmp(d.emp)}</td>
    `;
    tr.addEventListener('click', () => openBls(d));
    tr.addEventListener('mouseenter', () => tr.style.background = 'rgba(6,182,212,0.05)');
    tr.addEventListener('mouseleave', () => tr.style.background = '');
    tbody.appendChild(tr);
  });
}

// Safe jobs
function buildSafeList() {
  const filtered = getFiltered(OCCUPATIONS);
  const safe = [...filtered].filter(d=>d.e<=2).sort((a,b)=>b.emp-a.emp).slice(0,10);
  const container = document.getElementById('safe-list');
  container.innerHTML = '';
  safe.forEach(d => {
    const item = document.createElement('div');
    item.className = 'safe-item';
    item.style.cursor = 'pointer';
    const shortName = d.t.length > 26 ? d.t.substring(0,25)+'…' : d.t;
    item.innerHTML = `
      <div class="si-score">${d.e}/10</div>
      <div class="si-name" title="${d.t}">${shortName}</div>
      <div class="si-emp">${fmtEmp(d.emp)}</div>
    `;
    item.addEventListener('click', () => openBls(d));
    container.appendChild(item);
  });
}

// News feed
function buildNewsFeed() {
  const container = document.getElementById('news-feed');
  container.innerHTML = '';
  NEWS.forEach((n, i) => {
    const item = document.createElement('div');
    item.className = 'news-item';
    item.style.animationDelay = `${i * 60}ms`;
    item.innerHTML = `<div class="ni-source">${n.source} · ${n.time}</div><div class="ni-title">${n.title}</div>`;
    item.addEventListener('click', () => window.open(n.url, '_blank'));
    container.appendChild(item);
  });
}

function refresh() {
  buildDistBars();
  buildBreakdown();
  buildPayBars();
  buildSectorHeatmap();
  buildRiskTable();
  buildSafeList();
  renderTreemap();
  renderScatter();
}

// Filter pills
document.querySelectorAll('.filter-pill').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-pill').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    refresh();
  });
});

sel.addEventListener('change', () => {
  activeSector = sel.value;
  refresh();
});

// View tabs
document.querySelectorAll('.view-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.view-tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.viz-view').forEach(v=>v.classList.remove('active'));
    tab.classList.add('active');
    const view = tab.dataset.view;
    document.getElementById('view-'+view).classList.add('active');
    if (view === 'treemap') renderTreemap();
    if (view === 'map') renderMap();
    if (view === 'scatter') renderScatter();
  });
});

// ---- TREEMAP ----
let treemapRendered = false;

function renderTreemap() {
  const filtered = getFiltered(OCCUPATIONS);
  const container = document.getElementById('view-treemap');
  const W = container.clientWidth;
  const H = container.clientHeight;
  if (W === 0 || H === 0) return;

  const svg = d3.select('#treemap-svg').attr('width', W).attr('height', H);
  svg.selectAll('*').remove();

  // Build hierarchy grouped by sector
  const grouped = d3.group(filtered, d => d.s);
  const root = {name:'root', children: []};
  grouped.forEach((occs, sector) => {
    root.children.push({
      name: sector,
      children: occs.map(d => ({...d, value: d.emp}))
    });
  });

  const hierarchy = d3.hierarchy(root)
    .sum(d => d.value || 0)
    .sort((a,b) => b.value - a.value);

  d3.treemap()
    .size([W, H])
    .padding(2)
    .paddingTop(20)
    .round(true)
    (hierarchy);

  const leaf = svg.selectAll('g.leaf')
    .data(hierarchy.leaves())
    .join('g').attr('class','leaf')
    .attr('transform', d => `translate(${d.x0},${d.y0})`);

  leaf.append('rect')
    .attr('width', d => Math.max(0, d.x1-d.x0))
    .attr('height', d => Math.max(0, d.y1-d.y0))
    .attr('fill', d => exposureBg(d.data.e))
    .attr('stroke', d => exposureColor(d.data.e))
    .attr('stroke-width', 0.5)
    .attr('stroke-opacity', 0.5)
    .attr('opacity', 0)
    .transition().duration(500).delay((d,i) => Math.min(i * 1.5, 300))
    .attr('opacity', 1);

  // Text labels (only if big enough)
  leaf.filter(d => (d.x1-d.x0) > 60 && (d.y1-d.y0) > 30)
    .append('text')
    .attr('x', 4).attr('y', 13)
    .attr('fill', '#e8f0f8')
    .attr('font-size', d => {
      const w = d.x1-d.x0;
      if (w > 200) return '11px';
      if (w > 120) return '10px';
      return '9px';
    })
    .attr('font-weight', '500')
    .each(function(d) {
      const w = d.x1-d.x0;
      const maxChars = Math.floor(w / 6);
      const txt = d.data.t.length > maxChars ? d.data.t.substring(0, maxChars-1)+'…' : d.data.t;
      d3.select(this).text(txt);
    });

  leaf.filter(d => (d.x1-d.x0) > 60 && (d.y1-d.y0) > 44)
    .append('text')
    .attr('x', 4).attr('y', 25)
    .attr('fill', d => exposureColor(d.data.e))
    .attr('font-size', '9px')
    .attr('font-weight', '600')
    .text(d => `${d.data.e}/10 · ${fmtEmp(d.data.emp)} jobs`);

  // Sector group labels
  const groups = svg.selectAll('g.group')
    .data(hierarchy.children || [])
    .join('g').attr('class','group');

  groups.append('rect')
    .attr('x', d=>d.x0).attr('y', d=>d.y0)
    .attr('width', d=>d.x1-d.x0).attr('height', d=>d.y1-d.y0)
    .attr('fill','none').attr('stroke','#1e2a3a').attr('stroke-width',1.5);

  groups.filter(d => (d.x1-d.x0) > 80)
    .append('text')
    .attr('x', d=>d.x0+4).attr('y', d=>d.y0+13)
    .attr('fill','#4a5a70')
    .attr('font-size','9px').attr('font-weight','700')
    .attr('text-transform','uppercase').attr('letter-spacing','0.1em')
    .text(d => d.data.name.toUpperCase());

  // Hover
  const tooltip = document.getElementById('tooltip');
  leaf
    .on('mouseenter', function(event, d) {
      d3.select(this).select('rect')
        .transition().duration(100)
        .attr('stroke-width', 1.5)
        .attr('stroke-opacity', 1)
        .attr('filter', `brightness(1.4) drop-shadow(0 0 4px ${exposureColor(d.data.e)}88)`);
    })
    .on('mouseleave', function() {
      d3.select(this).select('rect')
        .transition().duration(200)
        .attr('stroke-width', 0.5)
        .attr('stroke-opacity', 0.5)
        .attr('filter', null);
      tooltip.style.display = 'none';
    });
  leaf.on('mousemove', function(event, d) {
    const e = d.data;
    document.getElementById('tt-title').textContent = e.t;
    const scoreEl = document.getElementById('tt-score');
    scoreEl.textContent = `AI Exposure: ${e.e}/10`;
    scoreEl.className = 'tt-score ' + (e.e <= 3 ? 'low' : e.e <= 6 ? 'med' : 'high');
    document.getElementById('tt-pay').textContent = fmtWage(e.w);
    document.getElementById('tt-emp').textContent = fmtEmp(e.emp) + ' workers';
    document.getElementById('tt-out').textContent = e.o ? `${e.o}% (${e.od})` : e.od || 'N/A';
    document.getElementById('tt-edu').textContent = e.edu || 'N/A';
    document.getElementById('tt-rat').textContent = e.r || '';
    const blsLink = document.getElementById('tt-bls-link');
    blsLink.href = e.soc ? blsOesUrl(e.soc) : blsOohUrl(e.cat, e.slug);
    tooltip.style.display = 'block';
    const tx = Math.min(event.clientX + 16, window.innerWidth - 340);
    const ty = Math.min(event.clientY - 10, window.innerHeight - 300);
    tooltip.style.left = tx + 'px';
    tooltip.style.top = ty + 'px';
  });

  // Click → open BLS page
  leaf.style('cursor', 'pointer')
    .on('click', function(event, d) { openBls(d.data); });

  treemapRendered = true;
}

// ---- US MAP ----
let mapRendered = false;
let usTopoData = null;

async function renderMap() {
  const container = document.getElementById('view-map');
  const W = container.clientWidth;
  const H = container.clientHeight;
  if (W === 0 || H === 0) return;

  const svg = d3.select('#map-svg').attr('width', W).attr('height', H);
  svg.selectAll('*').remove();

  if (!usTopoData) {
    try {
      usTopoData = await d3.json('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json');
    } catch(e) {
      svg.append('text').attr('x',W/2).attr('y',H/2)
        .attr('text-anchor','middle').attr('fill','var(--text2)')
        .text('Map data requires internet connection');
      return;
    }
  }

  const projection = d3.geoAlbersUsa().fitSize([W-40, H-40], topojson.feature(usTopoData, usTopoData.objects.states));
  const path = d3.geoPath().projection(projection);
  const states = topojson.feature(usTopoData, usTopoData.objects.states);

  // FIPS → abbrev lookup
  const fipsToAbbrev = {"01":"AL","02":"AK","04":"AZ","05":"AR","06":"CA","08":"CO","09":"CT","10":"DE","11":"DC","12":"FL","13":"GA","15":"HI","16":"ID","17":"IL","18":"IN","19":"IA","20":"KS","21":"KY","22":"LA","23":"ME","24":"MD","25":"MA","26":"MI","27":"MN","28":"MS","29":"MO","30":"MT","31":"NE","32":"NV","33":"NH","34":"NJ","35":"NM","36":"NY","37":"NC","38":"ND","39":"OH","40":"OK","41":"OR","42":"PA","44":"RI","45":"SC","46":"SD","47":"TN","48":"TX","49":"UT","50":"VT","51":"VA","53":"WA","54":"WV","55":"WI","56":"WY"};

  const colorScale = d3.scaleSequential()
    .domain([4.0, 8.2])
    .interpolator(d3.interpolateRgbBasis(['#16a34a','#f59e0b','#dc2626']));

  // Build name → score lookup (more reliable than FIPS)
  const nameToAbbrev = {};
  Object.entries(STATE_NAMES).forEach(([abbr, name]) => { nameToAbbrev[name] = abbr; });

  function getStateAbbr(d) {
    // Try by name first (most reliable), fall back to FIPS
    if (d.properties && d.properties.name) {
      const a = nameToAbbrev[d.properties.name];
      if (a) return a;
    }
    return fipsToAbbrev[String(d.id).padStart(2,'0')] || null;
  }

  const g = svg.append('g').attr('transform','translate(20,20)');

  // Draw all states with correct fill immediately, then animate opacity
  const statePaths = g.selectAll('path.state')
    .data(states.features)
    .join('path')
    .attr('class', 'state')
    .attr('d', path)
    .attr('fill', d => {
      const abbr = getStateAbbr(d);
      const score = abbr ? STATE_EXPOSURE[abbr] : null;
      return score ? colorScale(score) : '#1c2230';
    })
    .attr('stroke', '#0a0d12')
    .attr('stroke-width', 0.8)
    .attr('opacity', 0);

  // Fade in with stagger
  statePaths.transition().duration(500).delay((d,i) => i * 8)
    .attr('opacity', 1);

  // Events on the same selection
  statePaths.on('mousemove', function(event, d) {
      const abbr = getStateAbbr(d);
      const score = abbr ? STATE_EXPOSURE[abbr] : null;
      const name = (d.properties && d.properties.name) || abbr || 'Unknown';
      const topOcc = abbr ? (STATE_TOP_OCC[abbr] || 'N/A') : 'N/A';
      const riskLevel = !score ? 'N/A' : score >= 7 ? 'HIGH' : score >= 6 ? 'ELEVATED' : score >= 5 ? 'MODERATE' : 'LOW';
      const riskColor = !score ? 'var(--text3)' : score >= 7 ? 'var(--red)' : score >= 6 ? 'var(--amber)' : score >= 5 ? '#a3e635' : 'var(--green)';
      const stt = document.getElementById('state-tooltip');
      document.getElementById('st-name').textContent = name;
      document.getElementById('st-score').textContent = score ? score.toFixed(1) + '/10' : 'N/A';
      document.getElementById('st-risk').innerHTML = `<span style="color:${riskColor}">${riskLevel}</span>`;
      document.getElementById('st-top').textContent = topOcc;
      stt.style.display = 'block';
      stt.style.left = Math.min(event.clientX+12, window.innerWidth-200)+'px';
      stt.style.top = Math.min(event.clientY-10, window.innerHeight-150)+'px';
      // Highlight state
      d3.select(this)
        .transition().duration(120)
        .attr('stroke', '#e8f0f8')
        .attr('stroke-width', 1.8)
        .attr('filter', 'brightness(1.35) drop-shadow(0 0 6px rgba(255,255,255,0.3))');
    })
    .on('mouseleave', function() {
      document.getElementById('state-tooltip').style.display='none';
      d3.select(this)
        .transition().duration(250)
        .attr('stroke', '#0a0d12')
        .attr('stroke-width', 0.8)
        .attr('filter', null);
    })
    .style('cursor', 'pointer')
    .on('click', function(event, d) {
      const abbr = getStateAbbr(d);
      if (abbr) window.open(blsStateUrl(abbr), '_blank', 'noopener');
    });

  // State borders (separate path, no data binding)
  g.append('path')
    .attr('class','state-borders')
    .datum(topojson.mesh(usTopoData, usTopoData.objects.states, (a,b)=>a!==b))
    .attr('d', path)
    .attr('fill','none')
    .attr('stroke','rgba(10,13,18,0.8)')
    .attr('stroke-width', 0.5)
    .attr('pointer-events','none');

  // State labels (abbreviations for larger states)
  const LABEL_STATES = ['CA','TX','FL','NY','PA','IL','OH','MI','GA','NC','WA','CO','AZ','MA','VA','TN','OR','MO','WI','MN'];
  states.features.forEach(d => {
    const abbr = fipsToAbbrev[String(d.id).padStart(2,'0')];
    if (!LABEL_STATES.includes(abbr)) return;
    const centroid = projection(d3.geoCentroid(d));
    if (!centroid) return;
    g.append('text')
      .attr('x', centroid[0]).attr('y', centroid[1])
      .attr('text-anchor','middle').attr('dominant-baseline','middle')
      .attr('fill','rgba(255,255,255,0.6)').attr('font-size','9px')
      .attr('font-family','var(--font)').attr('font-weight','600')
      .attr('pointer-events','none')
      .text(abbr);
  });

  mapRendered = true;
}

// ---- SCATTER PLOT ----
function renderScatter() {
  const filtered = getFiltered(OCCUPATIONS).filter(d => d.w > 0 && d.emp > 0);
  const container = document.getElementById('view-scatter');
  const W = container.clientWidth;
  const H = container.clientHeight;
  if (W === 0 || H === 0) return;

  const margin = {top: 30, right: 40, bottom: 50, left: 70};
  const w = W - margin.left - margin.right;
  const h = H - margin.top - margin.bottom;

  const svg = d3.select('#scatter-svg').attr('width', W).attr('height', H);
  svg.selectAll('*').remove();

  const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

  const xScale = d3.scaleLog().domain([d3.min(filtered,d=>d.w)*0.9, d3.max(filtered,d=>d.w)*1.05]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 10.2]).range([h, 0]);
  const sizeScale = d3.scaleSqrt().domain([0, d3.max(filtered,d=>d.emp)]).range([3, 28]);

  // Grid
  g.append('g').attr('class','grid')
    .call(d3.axisLeft(yScale).ticks(5).tickSize(-w).tickFormat(''))
    .call(g => g.select('.domain').remove())
    .call(g => g.selectAll('.tick line').attr('stroke','#1e2a3a').attr('stroke-dasharray','2,4'));

  // Quadrant lines
  const medX = d3.median(filtered, d=>d.w);
  const vLineX = xScale(medX);
  const hLineY = yScale(5);

  g.append('line').attr('x1',vLineX).attr('x2',vLineX).attr('y1',0).attr('y2',h)
    .attr('stroke','#253042').attr('stroke-dasharray','4,4').attr('stroke-width',1);
  g.append('line').attr('x1',0).attr('x2',w).attr('y1',hLineY).attr('y2',hLineY)
    .attr('stroke','#253042').attr('stroke-dasharray','4,4').attr('stroke-width',1);

  // Quadrant labels
  const qlStyle = {'fill':'#2a3a4a','font-size':'10px','font-family':'var(--font)','letter-spacing':'0.08em'};
  [
    {x:vLineX+10, y:8, t:'HIGH PAY / HIGH RISK', a:'start'},
    {x:vLineX-10, y:8, t:'LOW PAY / HIGH RISK', a:'end'},
    {x:vLineX+10, y:h-8, t:'HIGH PAY / SAFE', a:'start'},
    {x:vLineX-10, y:h-8, t:'LOW PAY / SAFE', a:'end'},
  ].forEach(q => {
    g.append('text').attr('x',q.x).attr('y',q.y)
      .attr('text-anchor',q.a).attr('dominant-baseline','hanging')
      .attr('fill',qlStyle.fill).attr('font-size',qlStyle['font-size'])
      .attr('font-family',qlStyle['font-family']).attr('letter-spacing',qlStyle['letter-spacing'])
      .text(q.t);
  });

  // Dots
  const dots = g.selectAll('circle')
    .data(filtered.sort((a,b) => b.emp - a.emp))
    .join('circle')
    .attr('cx', d => xScale(d.w))
    .attr('cy', d => yScale(d.e))
    .attr('r', 0)
    .attr('fill', d => exposureColor(d.e))
    .attr('fill-opacity', 0.5)
    .attr('stroke', d => exposureColor(d.e))
    .attr('stroke-width', 0.8)
    .attr('stroke-opacity', 0.8)
    .transition().duration(600).delay((d,i) => i * 2)
    .attr('r', d => sizeScale(d.emp));

  // Hover + click events (after transition)
  g.selectAll('circle')
    .style('cursor', 'pointer')
    .on('mouseenter', function(event, d) {
      d3.select(this)
        .raise()
        .transition().duration(100)
        .attr('r', sizeScale(d.emp) * 1.5)
        .attr('fill-opacity', 0.85)
        .attr('stroke-width', 2)
        .attr('filter', `drop-shadow(0 0 6px ${exposureColor(d.e)})`);
    })
    .on('mouseleave', function(event, d) {
      d3.select(this)
        .transition().duration(200)
        .attr('r', sizeScale(d.emp))
        .attr('fill-opacity', 0.5)
        .attr('stroke-width', 0.8)
        .attr('filter', null);
      document.getElementById('tooltip').style.display = 'none';
    })
    .on('click', function(event, d) { openBls(d); });

  // Axes
  g.append('g').attr('transform',`translate(0,${h})`)
    .call(d3.axisBottom(xScale).ticks(6).tickFormat(d => '$'+d3.format(',')(d)))
    .call(g => g.select('.domain').attr('stroke','#1e2a3a'))
    .call(g => g.selectAll('.tick line').attr('stroke','#1e2a3a'))
    .call(g => g.selectAll('.tick text').attr('fill','#4a5a70').attr('font-size','9px').attr('font-family','var(--font)'));

  g.append('g')
    .call(d3.axisLeft(yScale).ticks(5))
    .call(g => g.select('.domain').attr('stroke','#1e2a3a'))
    .call(g => g.selectAll('.tick line').attr('stroke','#1e2a3a'))
    .call(g => g.selectAll('.tick text').attr('fill','#4a5a70').attr('font-size','9px').attr('font-family','var(--font)'));

  g.append('text').attr('x',w/2).attr('y',h+38)
    .attr('text-anchor','middle').attr('fill','#4a5a70').attr('font-size','10px').attr('font-family','var(--font)')
    .text('ANNUAL MEAN WAGE (LOG SCALE)');

  g.append('text').attr('transform','rotate(-90)').attr('x',-h/2).attr('y',-52)
    .attr('text-anchor','middle').attr('fill','#4a5a70').attr('font-size','10px').attr('font-family','var(--font)')
    .text('AI EXPOSURE SCORE (0–10)');

  // Hover
  const tooltip = document.getElementById('tooltip');
  g.selectAll('circle').on('mousemove', function(event, d) {
    document.getElementById('tt-title').textContent = d.t;
    const scoreEl = document.getElementById('tt-score');
    scoreEl.textContent = `AI Exposure: ${d.e}/10`;
    scoreEl.className = 'tt-score ' + (d.e <= 3 ? 'low' : d.e <= 6 ? 'med' : 'high');
    document.getElementById('tt-pay').textContent = fmtWage(d.w);
    document.getElementById('tt-emp').textContent = fmtEmp(d.emp) + ' workers';
    document.getElementById('tt-out').textContent = d.o ? `${d.o}% (${d.od})` : d.od || 'N/A';
    document.getElementById('tt-edu').textContent = d.edu || 'N/A';
    document.getElementById('tt-rat').textContent = d.r || '';
    const blsLinkS = document.getElementById('tt-bls-link');
    blsLinkS.href = d.soc ? blsOesUrl(d.soc) : blsOohUrl(d.cat, d.slug);
    tooltip.style.display = 'block';
    tooltip.style.left = Math.min(event.clientX+16, window.innerWidth-340)+'px';
    tooltip.style.top = Math.min(event.clientY-10, window.innerHeight-280)+'px';
  });
}

// ---- WEF 2025 BAR CHART (Figure 2.4) ----
function buildWefBarChart() {
  const container = document.getElementById('wef-bar-chart');
  if (!container) return;

  const growing = [
    { label: 'Agricultural Workers', val: 33 },
    { label: 'Delivery Drivers', val: 11 },
    { label: 'Software Developers', val: 7 },
    { label: 'Building Trades Workers', val: 6 },
    { label: 'Shop Salespersons', val: 5 },
    { label: 'Nursing Professionals', val: 4 },
    { label: 'Food & Bev Workers', val: 3 },
    { label: 'Social Work Professionals', val: 3 },
  ];
  const declining = [
    { label: 'Cashiers & Ticket Clerks', val: -9 },
    { label: 'Admin Assistants', val: -6 },
    { label: 'Building Caretakers', val: -4 },
    { label: 'Material-Recording Clerks', val: -3 },
    { label: 'Printing Workers', val: -3 },
    { label: 'Accounting & Payroll Clerks', val: -2 },
    { label: 'Accountants & Auditors', val: -2 },
    { label: 'Customer Service Workers', val: -1 },
  ];

  const maxVal = 33;
  const barW = 230;

  function row(d, isGrow) {
    const pct = Math.abs(d.val) / maxVal;
    const barPx = Math.round(pct * barW);
    const color = isGrow ? '#22c55e' : '#ef4444';
    const bgColor = isGrow ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)';
    return `<div class="wef-bar-row" onclick="window.open('https://www.weforum.org/publications/the-future-of-jobs-report-2025/','_blank')">
      <div class="wef-bar-label" title="${d.label}">${d.label}</div>
      <div class="wef-bar-track">
        <div class="wef-bar-fill" style="width:${barPx}px;background:${color};box-shadow:0 0 4px ${color}40;"></div>
        <span class="wef-bar-val" style="color:${color};">${isGrow ? '+' : ''}${d.val}M</span>
      </div>
    </div>`;
  }

  container.innerHTML = `
    <div style="font-size:8px;font-weight:700;color:#22c55e;letter-spacing:0.1em;margin-bottom:4px;margin-top:2px;">▲ TOP GROWING (NET JOBS)</div>
    ${growing.map(d => row(d, true)).join('')}
    <div style="font-size:8px;font-weight:700;color:#ef4444;letter-spacing:0.1em;margin:8px 0 4px;">▼ TOP DECLINING (NET JOBS)</div>
    ${declining.map(d => row(d, false)).join('')}
    <div style="font-size:7.5px;color:var(--text3);margin-top:6px;line-height:1.4;">Source: WEF Future of Jobs Survey 2024; ILO ILOSTAT</div>
  `;
}

// ---- BLS URL HELPERS ----
function blsOesUrl(soc) {
  // e.g. "13-2011" → https://www.bls.gov/oes/current/oes132011.htm
  if (!soc) return 'https://www.bls.gov/oes/';
  return `https://www.bls.gov/oes/current/oes${soc.replace('-','')}.htm`;
}
function blsOohUrl(cat, slug) {
  // e.g. category="business-and-financial" slug="accountants-and-auditors"
  if (!cat || !slug) return 'https://www.bls.gov/ooh/';
  return `https://www.bls.gov/ooh/${cat}/${slug}.htm`;
}
function blsStateUrl(abbr) {
  // e.g. "CA" → https://www.bls.gov/oes/current/oes_ca.htm
  if (!abbr) return 'https://www.bls.gov/oes/';
  return `https://www.bls.gov/oes/current/oes_${abbr.toLowerCase()}.htm`;
}
function openBls(d) {
  // d = occupation data object with soc, slug, cat fields
  const url = d.soc ? blsOesUrl(d.soc) : blsOohUrl(d.cat, d.slug);
  window.open(url, '_blank', 'noopener');
}

// ---- LIVE MARKETS ----
const FINNHUB_TOKEN = 'd6s2ghhr01qpss2i49agd6s2ghhr01qpss2i49b0';
const MARKETS_REFRESH_MS = 60000; // 60s (free tier: 60 calls/min)

const MARKET_SYMBOLS = [
  // AI Stocks
  { sym: 'NVDA',  name: 'Nvidia',    type: 'stock', emoji: '' },
  { sym: 'MSFT',  name: 'Microsoft', type: 'stock', emoji: '' },
  { sym: 'GOOGL', name: 'Alphabet',  type: 'stock', emoji: '' },
  { sym: 'META',  name: 'Meta',      type: 'stock', emoji: '' },
  { sym: 'AMZN',  name: 'Amazon',    type: 'stock', emoji: '' },
  { sym: 'AAPL',  name: 'Apple',     type: 'stock', emoji: '' },
  { sym: 'AMD',   name: 'AMD',       type: 'stock', emoji: '' },
  { sym: 'TSLA',  name: 'Tesla',     type: 'stock', emoji: '' },
  { sym: 'PLTR',  name: 'Palantir',  type: 'stock', emoji: '' },
  // Crypto
  { sym: 'BINANCE:BTCUSDT', name: 'Bitcoin',  type: 'crypto', label: 'BTC' },
  { sym: 'BINANCE:ETHUSDT', name: 'Ethereum', type: 'crypto', label: 'ETH' },
  { sym: 'BINANCE:SOLUSDT', name: 'Solana',   type: 'crypto', label: 'SOL' },
];

let marketData = {}; // sym -> {c, d, dp, h, l, o, pc}
let marketsPanelOpen = false;
let mktRefreshInterval = null;
let mktNextRefresh = 0;

function formatPrice(val, sym) {
  if (!val && val !== 0) return '—';
  if (sym && (sym.includes('BTC') || sym.includes('ETH'))) {
    return val >= 10000 ? '$' + val.toLocaleString('en-US', {maximumFractionDigits: 0}) : '$' + val.toLocaleString('en-US', {maximumFractionDigits: 2});
  }
  return '$' + val.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function changeClass(dp) {
  if (dp > 0.05) return 'up';
  if (dp < -0.05) return 'down';
  return 'flat';
}

function changeStr(dp, d) {
  if (!dp && dp !== 0) return '—';
  const sign = dp >= 0 ? '+' : '';
  return `${sign}${dp.toFixed(2)}%`;
}

async function fetchQuote(sym) {
  const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(sym)}&token=${FINNHUB_TOKEN}`, { signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
}

async function fetchAllMarkets(silent = false) {
  // Stagger requests to avoid rate limit
  const delay = ms => new Promise(r => setTimeout(r, ms));
  for (let i = 0; i < MARKET_SYMBOLS.length; i++) {
    const item = MARKET_SYMBOLS[i];
    try {
      const data = await fetchQuote(item.sym);
      if (data && data.c) {
        marketData[item.sym] = data;
      }
    } catch(e) { /* keep old data on error */ }
    if (i < MARKET_SYMBOLS.length - 1) await delay(120); // ~120ms between calls
  }
  renderTicker();
  renderMarketCards();
  updateMktTimer();
  // Flash label
  const icon = document.getElementById('mkt-label-icon');
  if (icon) { icon.textContent = '●'; setTimeout(() => { icon.textContent = '▲'; }, 400); }
}

function buildTickerItem(item) {
  const d = marketData[item.sym];
  const displaySym = item.label || item.sym;
  const price = d ? formatPrice(d.c, item.sym) : '—';
  const dp = d ? d.dp : null;
  const cls = dp !== null ? changeClass(dp) : 'flat';
  const chgStr = dp !== null ? changeStr(dp) : '—';
  return `
    <div class="ticker-item" onclick="showMarketDetail('${item.sym}')">
      <span class="ticker-sym">${displaySym}</span>
      <span class="ticker-price">${price}</span>
      <span class="ticker-change ${cls}">${chgStr}</span>
    </div>`;
}

function renderTicker() {
  const track = document.getElementById('ticker-track');
  if (!track) return;
  const items = MARKET_SYMBOLS.map(buildTickerItem).join('<span class="ticker-sep">·</span>');
  // Duplicate for seamless loop
  track.innerHTML = items + '<span class="ticker-sep" style="padding:0 20px;"></span>' + items;
  // Reset animation
  track.style.animation = 'none';
  void track.offsetWidth;
  track.style.animation = '';
}

function renderMarketCards() {
  const stocksGrid = document.getElementById('mkt-stocks-grid');
  const cryptoGrid = document.getElementById('mkt-crypto-grid');
  if (!stocksGrid || !cryptoGrid) return;

  const stocks = MARKET_SYMBOLS.filter(m => m.type === 'stock');
  const cryptos = MARKET_SYMBOLS.filter(m => m.type === 'crypto');

  stocksGrid.innerHTML = stocks.map(item => {
    const d = marketData[item.sym];
    const dp = d ? d.dp : null;
    const cls = dp !== null ? changeClass(dp) : '';
    return `
      <div class="mkt-card ${cls}" onclick="showMarketDetail('${item.sym}')">
        <div class="mkt-card-sym">${item.sym}</div>
        <div class="mkt-card-name">${item.name}</div>
        <div class="mkt-card-price">${d ? formatPrice(d.c, item.sym) : '—'}</div>
        <div class="mkt-card-chg ${dp !== null ? changeClass(dp) : 'flat'}">${d ? changeStr(dp) : '—'}</div>
      </div>`;
  }).join('');

  cryptoGrid.innerHTML = cryptos.map(item => {
    const d = marketData[item.sym];
    const dp = d ? d.dp : null;
    const cls = dp !== null ? changeClass(dp) : '';
    return `
      <div class="mkt-card ${cls}" onclick="showMarketDetail('${item.sym}')">
        <div class="mkt-card-sym">${item.label}</div>
        <div class="mkt-card-name">${item.name}</div>
        <div class="mkt-card-price">${d ? formatPrice(d.c, item.sym) : '—'}</div>
        <div class="mkt-card-chg ${dp !== null ? changeClass(dp) : 'flat'}">${d ? changeStr(dp) : '—'}</div>
      </div>`;
  }).join('');
}

function showMarketDetail(sym) {
  const item = MARKET_SYMBOLS.find(m => m.sym === sym);
  if (!item) return;
  const query = encodeURIComponent(item.name);
  window.open(`https://www.google.com/search?q=${query}`, '_blank', 'noopener');
}

function toggleMarketsPanel() {
  marketsPanelOpen = !marketsPanelOpen;
  const panel = document.getElementById('markets-panel');
  panel.classList.toggle('markets-panel-hidden', !marketsPanelOpen);
  document.getElementById('mkt-expand-btn').textContent = marketsPanelOpen ? '⊟ COLLAPSE' : '⊞ EXPAND';
  // Shift app content
  const app = document.getElementById('app');
  if (marketsPanelOpen) {
    setTimeout(() => {
      const panelH = panel.scrollHeight;
      app.style.marginTop = (72 + panelH) + 'px';
      app.style.height = `calc(100vh - ${72 + panelH}px)`;
    }, 350);
  } else {
    app.style.marginTop = '72px';
    app.style.height = 'calc(100vh - 72px)';
  }
}

function updateMktTimer() {
  mktNextRefresh = Date.now() + MARKETS_REFRESH_MS;
  clearInterval(window._mktTimerInterval);
  window._mktTimerInterval = setInterval(() => {
    const remaining = Math.max(0, Math.ceil((mktNextRefresh - Date.now()) / 1000));
    const el = document.getElementById('mkt-refresh-timer');
    if (el) el.textContent = `↻ ${remaining}s`;
  }, 1000);
}

function startMarketsLoop() {
  fetchAllMarkets(false);
  mktRefreshInterval = setInterval(() => fetchAllMarkets(true), MARKETS_REFRESH_MS);
}

// ---- LIVE NEWS FEED ----
const NEWS_API_KEY = 'pub_3c8e66af67fa48b6a5badbf63d301482';
const NEWS_API_URL = `https://newsdata.io/api/1/latest?apikey=${NEWS_API_KEY}&country=us,gb,ca,cn,tw&language=en&category=technology,business`;
const NEWS_REFRESH_MS = 180000; // 3 minutes

const COUNTRY_FLAGS = { us:'🇺🇸', gb:'🇬🇧', ca:'🇨🇦', cn:'🇨🇳', tw:'🇹🇼' };
const COUNTRY_LABELS = { us:'USA', gb:'UK', ca:'CAN', cn:'CHN', tw:'TWN' };
const COUNTRY_CSS = { us:'lni-src-us', gb:'lni-src-gb', ca:'lni-src-ca', cn:'lni-src-cn', tw:'lni-src-tw' };

let liveNewsData = [];
let newsCountryFilter = 'all';
let newsRefreshInterval = null;
let newsNextRefresh = 0;

function timeAgo(dateStr) {
  const now = Date.now();
  const then = new Date(dateStr.replace(' ', 'T') + 'Z').getTime();
  const diff = Math.floor((now - then) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff/60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff/3600)}h ago`;
  return `${Math.floor(diff/86400)}d ago`;
}

function getCountryCode(countryArr) {
  if (!countryArr || !countryArr.length) return 'default';
  const c = countryArr[0].toLowerCase();
  if (c.includes('united states') || c === 'us') return 'us';
  if (c.includes('united kingdom') || c.includes('great britain') || c === 'gb') return 'gb';
  if (c.includes('canada') || c === 'ca') return 'ca';
  if (c.includes('china') || c === 'cn') return 'cn';
  if (c.includes('taiwan') || c === 'tw') return 'tw';
  return 'default';
}

function renderLiveNews() {
  const container = document.getElementById('live-news-feed');
  const errorEl = document.getElementById('news-error');
  errorEl.style.display = 'none';

  let data = liveNewsData;
  if (newsCountryFilter !== 'all') {
    data = data.filter(a => getCountryCode(a.country) === newsCountryFilter);
  }

  if (data.length === 0) {
    container.innerHTML = '<div style="padding:16px;text-align:center;font-size:10px;color:var(--text3);">No articles for this filter</div>';
    return;
  }

  container.innerHTML = '';
  data.slice(0, 20).forEach((article, i) => {
    const cc = getCountryCode(article.country);
    const flag = COUNTRY_FLAGS[cc] || '🌐';
    const srcLabel = COUNTRY_LABELS[cc] || cc.toUpperCase();
    const srcCss = COUNTRY_CSS[cc] || 'lni-src-default';
    const cats = (article.category || []).filter(c => c !== 'top').slice(0,2);
    const catBadge = cats.length ? cats.map(c => `<span class="lni-cat">${c.toUpperCase()}</span>`).join('') : '';
    const sentiment = article.sentiment;
    const sentClass = sentiment === 'positive' ? 'pos' : sentiment === 'negative' ? 'neg' : 'neu';
    const sentSymbol = sentiment === 'positive' ? '▲' : sentiment === 'negative' ? '▼' : '—';
    const summary = article.ai_summary || article.description || '';
    const summaryTrunc = summary ? summary.substring(0, 140) + (summary.length > 140 ? '…' : '') : '';

    const item = document.createElement('div');
    item.className = 'live-news-item';
    item.style.animationDelay = `${i * 40}ms`;
    item.innerHTML = `
      <div class="lni-header">
        <span class="lni-flag">${flag}</span>
        <span class="lni-source ${srcCss}">${article.source_name || srcLabel}</span>
        ${catBadge}
        <span class="lni-sentiment ${sentClass}">${sentSymbol}</span>
        <span class="lni-time">${timeAgo(article.pubDate)}</span>
      </div>
      <div class="lni-title">${article.title || 'No title'}</div>
      ${summaryTrunc ? `<div class="lni-summary">${summaryTrunc}</div>` : ''}
    `;
    item.addEventListener('click', () => window.open(article.link, '_blank'));
    container.appendChild(item);
  });
}

function showNewsSkeletons() {
  const container = document.getElementById('live-news-feed');
  container.innerHTML = Array(6).fill('<div class="news-skeleton"></div>').join('');
}

async function fetchLiveNews(showSkeleton = true) {
  if (showSkeleton) showNewsSkeletons();
  const errorEl = document.getElementById('news-error');
  try {
    const res = await fetch(NEWS_API_URL, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.status !== 'success') throw new Error(data.message || 'API error');
    liveNewsData = (data.results || []).filter(a => a.title && a.link);
    renderLiveNews();
    updateNewsTimer();
    // Flash LIVE dot
    const dot = document.getElementById('news-live-dot');
    dot.style.color = '#ffffff';
    setTimeout(() => { dot.style.color = 'var(--green)'; }, 300);
  } catch (err) {
    errorEl.textContent = `Feed unavailable: ${err.message}. Retrying in 3min.`;
    errorEl.style.display = 'block';
    document.getElementById('live-news-feed').innerHTML = '';
    console.warn('News fetch failed:', err);
  }
}

function updateNewsTimer() {
  newsNextRefresh = Date.now() + NEWS_REFRESH_MS;
  const timerEl = document.getElementById('news-refresh-timer');
  clearInterval(window._newsTimerInterval);
  window._newsTimerInterval = setInterval(() => {
    const remaining = Math.max(0, Math.ceil((newsNextRefresh - Date.now()) / 1000));
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    timerEl.textContent = `↻ ${m}:${s.toString().padStart(2,'0')}`;
  }, 1000);
}

function startNewsLoop() {
  fetchLiveNews(true);
  newsRefreshInterval = setInterval(() => fetchLiveNews(false), NEWS_REFRESH_MS);
}

// Country filter pills
document.addEventListener('DOMContentLoaded', () => {});
setTimeout(() => {
  document.querySelectorAll('.nf-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nf-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      newsCountryFilter = btn.dataset.country;
      renderLiveNews();
    });
  });
}, 100);

// ---- FEAR INDEX ----
const FEAR_SURVEYS = [
  { pct: 62, color: '#ef4444', source: 'Pew Research 2023', text: 'Americans think AI will have a major impact on US workers overall' },
  { pct: 55, color: '#f97316', source: 'Axios / Ipsos 2023', text: 'US adults worry AI will eliminate jobs in next 10 years' },
  { pct: 46, color: '#f97316', source: 'SHRM 2024', text: 'Workers concerned about AI\'s impact on their workplace' },
  { pct: 41, color: '#facc15', source: 'WEF Future of Jobs 2025', text: 'Employers plan to reduce headcount due to AI by 2030' },
  { pct: 28, color: '#4ade80', source: 'Pew Research 2023', text: 'Workers worried AI will make their own job obsolete' },
  { pct: 22, color: '#22c55e', source: 'Gallup 2023', text: 'Workers personally concerned AI threatens their position' },
];

const FEAR_TREND = [
  { year: 2021, score: 3.8 },
  { year: 2022, score: 4.5 },
  { year: 2023, score: 5.9 },
  { year: 2024, score: 6.2 },
  { year: 2025, score: 6.4 },
];

const FEAR_FACTS = [
  { icon: '⚡', text: '12M US workers may need to switch occupations by 2030 — McKinsey' },
  { icon: '📊', text: '33.6% of US workforce in high AI-exposure roles (score 7+/10)' },
  { icon: '💰', text: '$3.69T in annual wages at elevated AI risk — BLS 2026' },
  { icon: '📈', text: 'AI job postings increased 17× since 2016 — LinkedIn data' },
  { icon: '🌍', text: '170M new roles created vs 92M displaced by 2030 — WEF Future of Jobs 2025' },
  { icon: '📉', text: 'Cashiers, Admin Assistants & Accountants among fastest-declining roles — WEF 2025' },
  { icon: '🔒', text: 'Security Management Specialists & Info Security Analysts: top 5 fastest-growing — WEF 2025' },
  { icon: '🌱', text: 'Green transition driving demand: EV, Renewable Energy & Environmental Engineers — WEF 2025' },
  { icon: '🤖', text: 'AI, robots & autonomous systems are primary drivers of clerical role decline — WEF 2025' },
  { icon: '📡', text: 'Global robot density in factories doubled in 7 years — IFR World Robotics 2024' },
  { icon: '🔬', text: 'AI raises knowledge worker productivity up to 40% on some tasks — Harvard Business School 2023' },
  { icon: '📖', text: 'Generative AI at Work: customer support productivity +14% — Brynjolfsson, Li & Raymond 2024' },
  { icon: '🌐', text: 'IMF 2024: Gen-AI could affect 40% of jobs globally — complementing or displacing labour' },
];

const COMPOSITE_FEAR = 6.4;

function buildFearIndex() {
  // Draw gauge arc
  const gaugeSvg = document.getElementById('fear-gauge');
  const cx = 100, cy = 100, r = 80;
  const startAngle = Math.PI;
  const endAngle = 2 * Math.PI;
  const totalArc = Math.PI;
  const circumference = Math.PI * r; // half circumference

  // Background arc
  const bgArc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const bx1 = cx + r * Math.cos(startAngle), by1 = cy + r * Math.sin(startAngle);
  const bx2 = cx + r * Math.cos(endAngle),   by2 = cy + r * Math.sin(endAngle);
  bgArc.setAttribute('d', `M ${bx1} ${by1} A ${r} ${r} 0 0 1 ${bx2} ${by2}`);
  bgArc.setAttribute('fill', 'none');
  bgArc.setAttribute('stroke', '#1e2a3a');
  bgArc.setAttribute('stroke-width', '14');
  bgArc.setAttribute('stroke-linecap', 'round');
  gaugeSvg.appendChild(bgArc);

  // Gradient arc using multiple colored segments
  const segments = [
    { start: 0,   end: 0.3,  color: '#16a34a' },
    { start: 0.3, end: 0.5,  color: '#4ade80' },
    { start: 0.5, end: 0.65, color: '#facc15' },
    { start: 0.65,end: 0.8,  color: '#f97316' },
    { start: 0.8, end: 1.0,  color: '#ef4444' },
  ];
  segments.forEach(seg => {
    const a1 = startAngle + seg.start * totalArc;
    const a2 = startAngle + seg.end * totalArc;
    const sx = cx + r * Math.cos(a1), sy = cy + r * Math.sin(a1);
    const ex = cx + r * Math.cos(a2), ey = cy + r * Math.sin(a2);
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${sx} ${sy} A ${r} ${r} 0 0 1 ${ex} ${ey}`);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', seg.color);
    path.setAttribute('stroke-width', '10');
    path.setAttribute('stroke-linecap', 'butt');
    path.setAttribute('opacity', '0.7');
    gaugeSvg.appendChild(path);
  });

  // Needle
  const fearFraction = COMPOSITE_FEAR / 10;
  const needleAngle = startAngle + fearFraction * totalArc;
  const nx = cx + (r - 10) * Math.cos(needleAngle);
  const ny = cy + (r - 10) * Math.sin(needleAngle);
  const needle = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  needle.setAttribute('x1', cx); needle.setAttribute('y1', cy);
  needle.setAttribute('x2', cx); needle.setAttribute('y2', cy); // animate from center
  needle.setAttribute('stroke', '#fff');
  needle.setAttribute('stroke-width', '2.5');
  needle.setAttribute('stroke-linecap', 'round');
  needle.style.animation = 'fearPulse 2s infinite';
  gaugeSvg.appendChild(needle);

  // Center dot
  const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.setAttribute('cx', cx); dot.setAttribute('cy', cy); dot.setAttribute('r', '5');
  dot.setAttribute('fill', '#ef4444');
  gaugeSvg.appendChild(dot);

  // Tick labels
  [0, 2, 4, 6, 8, 10].forEach(val => {
    const angle = startAngle + (val/10) * totalArc;
    const lx = cx + (r + 14) * Math.cos(angle);
    const ly = cy + (r + 14) * Math.sin(angle);
    const lbl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    lbl.setAttribute('x', lx); lbl.setAttribute('y', ly);
    lbl.setAttribute('text-anchor','middle'); lbl.setAttribute('dominant-baseline','middle');
    lbl.setAttribute('fill','#4a5a70'); lbl.setAttribute('font-size','8');
    lbl.setAttribute('font-family','JetBrains Mono, monospace');
    lbl.textContent = val;
    gaugeSvg.appendChild(lbl);
  });

  // Animate needle after short delay
  setTimeout(() => {
    needle.setAttribute('x2', nx);
    needle.setAttribute('y2', ny);
    needle.style.transition = 'x2 1.5s cubic-bezier(.34,1.56,.64,1), y2 1.5s cubic-bezier(.34,1.56,.64,1)';
  }, 300);

  // Animate score counter
  const numEl = document.getElementById('fear-score-num');
  let start = 0, target = COMPOSITE_FEAR, duration = 1400, startTime = null;
  function animNum(ts) {
    if (!startTime) startTime = ts;
    const progress = Math.min((ts - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    numEl.textContent = (start + (target - start) * ease).toFixed(1);
    if (progress < 1) requestAnimationFrame(animNum);
  }
  setTimeout(() => requestAnimationFrame(animNum), 200);

  // Fear needle bar
  setTimeout(() => {
    document.getElementById('fear-needle').style.left = (COMPOSITE_FEAR / 10 * 100) + '%';
  }, 400);

  // Survey rows
  const surveyContainer = document.getElementById('fear-surveys');
  surveyContainer.innerHTML = '';
  FEAR_SURVEYS.forEach((s, i) => {
    const row = document.createElement('div');
    row.className = 'survey-row';
    row.style.animationDelay = `${i * 80}ms`;
    row.innerHTML = `
      <div class="survey-pct" style="color:${s.color}">${s.pct}%</div>
      <div class="survey-detail">
        <div class="survey-source">${s.source}</div>
        <div class="survey-text">${s.text}</div>
        <div class="survey-bar-wrap">
          <div class="survey-bar-fill" id="sbar-${i}" style="background:${s.color};"></div>
        </div>
      </div>
    `;
    surveyContainer.appendChild(row);
    setTimeout(() => {
      const bar = document.getElementById(`sbar-${i}`);
      if (bar) bar.style.width = s.pct + '%';
    }, 500 + i * 100);
  });

  // Trend sparkline
  buildFearTrend();

  // Fear facts
  const factsContainer = document.getElementById('fear-facts');
  factsContainer.innerHTML = '';
  FEAR_FACTS.forEach(f => {
    const el = document.createElement('div');
    el.className = 'fear-fact';
    el.innerHTML = `<span class="fear-fact-icon">${f.icon}</span><span>${f.text}</span>`;
    factsContainer.appendChild(el);
  });
}

function buildFearTrend() {
  const el = document.getElementById('fear-trend');
  if (!el) return;
  const W = el.parentElement.clientWidth - 28;
  const H = 54;
  el.setAttribute('width', W);
  const svg = d3.select('#fear-trend').attr('width', W).attr('height', H);
  svg.selectAll('*').remove();

  const xScale = d3.scalePoint().domain(FEAR_TREND.map(d=>d.year)).range([10, W-10]).padding(0.1);
  const yScale = d3.scaleLinear().domain([0, 10]).range([H-12, 4]);

  // Area
  const area = d3.area()
    .x(d => xScale(d.year))
    .y0(H-12)
    .y1(d => yScale(d.score))
    .curve(d3.curveCatmullRom);

  svg.append('path')
    .datum(FEAR_TREND)
    .attr('d', area)
    .attr('fill', 'rgba(239,68,68,0.12)');

  // Line
  const line = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.score))
    .curve(d3.curveCatmullRom);

  const path = svg.append('path')
    .datum(FEAR_TREND)
    .attr('d', line)
    .attr('fill', 'none')
    .attr('stroke', '#ef4444')
    .attr('stroke-width', 1.8);

  // Animate line draw
  const totalLen = path.node().getTotalLength();
  path.attr('stroke-dasharray', totalLen)
      .attr('stroke-dashoffset', totalLen)
      .transition().duration(1200).delay(200)
      .attr('stroke-dashoffset', 0);

  // Dots
  svg.selectAll('circle').data(FEAR_TREND).join('circle')
    .attr('cx', d => xScale(d.year))
    .attr('cy', d => yScale(d.score))
    .attr('r', 3)
    .attr('fill', '#ef4444')
    .attr('opacity', 0)
    .transition().delay((d,i) => 800 + i * 80).duration(200)
    .attr('opacity', 1);

  // Year labels
  svg.selectAll('text.yr').data(FEAR_TREND).join('text')
    .attr('class', 'yr')
    .attr('x', d => xScale(d.year))
    .attr('y', H)
    .attr('text-anchor','middle')
    .attr('fill','#4a5a70').attr('font-size','7').attr('font-family','JetBrains Mono,monospace')
    .text(d => d.year);

  // Score labels on dots
  svg.selectAll('text.sc').data(FEAR_TREND).join('text')
    .attr('class','sc')
    .attr('x', d => xScale(d.year))
    .attr('y', d => yScale(d.score) - 5)
    .attr('text-anchor','middle')
    .attr('fill','#ef4444').attr('font-size','7').attr('font-family','JetBrains Mono,monospace')
    .attr('font-weight','700')
    .text(d => d.score.toFixed(1));
}

// ---- CREON CHAT WINDOW ----
let chatOpen = true; // open by default
let chatMinimized = false;
let chatHistory = []; // [{role, content}]
let chatConnected = false;
let chatSettings = { url: '', token: '', agentId: 'main' };
let isDragging = false, dragOffX = 0, dragOffY = 0;
let isResizing = false, resizeStartW = 0, resizeStartH = 0, resizeStartX = 0, resizeStartY = 0;

function loadChatSettings() {
  try {
    const saved = localStorage.getItem('creon-chat-settings');
    if (saved) chatSettings = { ...chatSettings, ...JSON.parse(saved) };
  } catch(e) {}
  const urlInput = document.getElementById('cfg-gateway-url');
  const tokenInput = document.getElementById('cfg-token');
  const agentInput = document.getElementById('cfg-agent-id');
  if (urlInput) urlInput.value = chatSettings.url || '';
  if (tokenInput) tokenInput.value = chatSettings.token || '';
  if (agentInput) agentInput.value = chatSettings.agentId || 'main';
}

function saveSettings() {
  chatSettings.url = document.getElementById('cfg-gateway-url').value.trim().replace(/\/$/, '');
  chatSettings.token = document.getElementById('cfg-token').value.trim();
  chatSettings.agentId = document.getElementById('cfg-agent-id').value.trim() || 'main';
  localStorage.setItem('creon-chat-settings', JSON.stringify(chatSettings));
  showCfgResult('✓ Settings saved', 'var(--green)');
  setTimeout(() => { document.getElementById('chat-settings-panel').style.display = 'none'; }, 800);
}

function showCfgResult(msg, color) {
  const el = document.getElementById('cfg-test-result');
  el.style.display = 'block';
  el.style.color = color;
  el.textContent = msg;
}

async function testConnection() {
  if (!chatSettings.url) {
    showCfgResult('⚠ Enter gateway URL first', 'var(--amber)'); return;
  }
  showCfgResult('Testing connection…', 'var(--text3)');
  setChatDot('connecting'); setChatStatusLabel('TESTING…');
  try {
    const res = await fetch(`${chatSettings.url}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${chatSettings.token}`,
      },
      body: JSON.stringify({
        model: `openclaw:${chatSettings.agentId}`,
        messages: [{ role: 'user', content: 'ping' }],
        max_tokens: 20,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (res.ok || res.status === 200) {
      showCfgResult('✓ Connected! Agent is reachable', 'var(--green)');
      setChatDot('online'); setChatStatusLabel('CONNECTED');
      chatConnected = true;
    } else {
      showCfgResult(`✗ HTTP ${res.status} — check token/URL`, 'var(--red)');
      setChatDot('offline'); setChatStatusLabel('AUTH FAILED');
    }
  } catch(err) {
    const msg = err.name === 'TimeoutError' ? '✗ Timeout — gateway unreachable' : `✗ ${err.message}`;
    showCfgResult(msg, 'var(--red)');
    setChatDot('offline'); setChatStatusLabel('NOT CONNECTED');
  }
}

function setChatDot(state) {
  const dot = document.getElementById('chat-status-dot');
  dot.className = 'chat-dot ' + state;
}
function setChatStatusLabel(txt) {
  document.getElementById('chat-status-label').textContent = txt;
}

function toggleChat() {
  chatOpen = !chatOpen;
  const el = document.getElementById('agent-chat');
  const btn = document.getElementById('chat-toggle-btn');
  if (chatOpen) {
    el.classList.remove('chat-hidden');
    btn.classList.add('active');
    chatMinimized = false;
    el.classList.remove('chat-minimized');
    if (chatHistory.length === 0) renderWelcome();
    loadChatSettings();
    setTimeout(() => { document.getElementById('chat-input').focus(); }, 100);
  } else {
    el.classList.add('chat-hidden');
    btn.classList.remove('active');
  }
}
function closeChat() {
  chatOpen = false;
  document.getElementById('agent-chat').classList.add('chat-hidden');
  document.getElementById('chat-toggle-btn').classList.remove('active');
}
function toggleChatMinimize() {
  chatMinimized = !chatMinimized;
  document.getElementById('agent-chat').classList.toggle('chat-minimized', chatMinimized);
  document.getElementById('chat-minimize-btn').textContent = chatMinimized ? '□' : '—';
}
function toggleChatSettings() {
  const panel = document.getElementById('chat-settings-panel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function renderWelcome() {
  const msgs = document.getElementById('chat-messages');
  msgs.innerHTML = `
    <div class="chat-msg system">
      <div class="chat-bubble" style="text-align:left;padding:16px 14px;border-left:2px solid rgba(6,182,212,0.35);">

        <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--border);">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="16" height="16" style="opacity:0.9;flex-shrink:0;"><line x1="200" y1="148" x2="200" y2="268" stroke="#ffffff" stroke-width="12" stroke-linecap="round"/><line x1="152" y1="268" x2="248" y2="268" stroke="#ffffff" stroke-width="14" stroke-linecap="round"/><circle cx="200" cy="148" r="14" fill="#ffffff"/><line x1="106" y1="148" x2="294" y2="148" stroke="#ffffff" stroke-width="14" stroke-linecap="round"/><line x1="116" y1="148" x2="116" y2="200" stroke="#ffffff" stroke-width="10" stroke-linecap="round"/><line x1="284" y1="148" x2="284" y2="224" stroke="#ffffff" stroke-width="10" stroke-linecap="round"/><path d="M 82 200 Q 116 216 150 200" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round"/><path d="M 250 224 Q 284 240 318 224" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round"/></svg>
          <span style="font-size:11px;font-weight:700;color:var(--white);letter-spacing:0.12em;">CREON AGENT</span>
          <span style="font-size:9px;color:var(--text3);margin-left:auto;">OPENCLAW RELAY</span>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px;">
          <div style="padding:8px;background:var(--bg3);border:1px solid var(--border);">
            <div style="font-size:8px;font-weight:700;color:var(--cyan);letter-spacing:0.1em;margin-bottom:6px;">WHAT IS THIS</div>
            <div style="font-size:8.5px;color:var(--text2);line-height:1.7;">
              Live AI agent chat via your own OpenClaw relay. Local-first — you own the stack, keys never leave your machine.
            </div>
          </div>
          <div style="padding:8px;background:var(--bg3);border:1px solid var(--border);">
            <div style="font-size:8px;font-weight:700;color:var(--cyan);letter-spacing:0.1em;margin-bottom:6px;">COMPATIBLE WITH</div>
            <div style="font-size:8.5px;color:var(--text2);line-height:1.7;">
              Any OpenAI-compatible frontend via<br>
              <span style="font-family:monospace;color:var(--amber);font-size:8px;">POST /v1/chat/completions</span>
            </div>
          </div>
        </div>

        <div style="font-size:8px;font-weight:700;color:var(--cyan);letter-spacing:0.1em;margin-bottom:8px;">QUICKSTART</div>
        <div style="background:rgba(0,0,0,0.4);border:1px solid var(--border);border-radius:2px;padding:10px 12px;font-family:monospace;font-size:8px;color:#a3e635;line-height:2;margin-bottom:14px;">
          <span style="color:var(--text3)"># 1. clone &amp; start relay</span><br>
          git clone https://github.com/Callixen/CREON &amp;&amp; cd CREON/relay<br>
          cp .env.example .env &amp;&amp; npm install &amp;&amp; npm run dev<br>
          <br>


        </div>

        <div style="font-size:8px;font-weight:700;color:var(--cyan);letter-spacing:0.1em;margin-bottom:6px;">CONNECT</div>
        <div style="font-size:8.5px;color:var(--text2);line-height:1.8;margin-bottom:14px;">
          Press <span style="color:var(--white);font-weight:700;background:rgba(255,255,255,0.08);padding:1px 6px;border:1px solid var(--border);">⚙</span> → relay URL defaults to <span style="font-family:monospace;color:var(--amber);font-size:8px;">localhost:18900</span>. Hit TEST to verify.
        </div>

        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid var(--border);">
          <span style="font-size:7.5px;color:var(--text3);letter-spacing:0.07em;">⚠ never expose your gateway without auth</span>
          <a href="https://github.com/Callixen/creon" target="_blank" rel="noopener" style="font-size:8px;color:var(--cyan);text-decoration:none;letter-spacing:0.08em;">github →</a>
        </div>

      </div>
    </div>`;
}

function addMessage(role, content, ts) {
  if (role !== 'system') {
    // Clear welcome/instructions on first real message
    const msgs = document.getElementById('chat-messages');
    if (msgs.querySelector('.chat-msg.system')) msgs.innerHTML = '';
  }

  chatHistory.push({ role, content });
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `chat-msg ${role}`;
  const time = ts || new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  div.innerHTML = `
    <div class="chat-bubble">${escapeHtml(content)}</div>
    ${role !== 'system' ? `<div class="chat-meta">${time}</div>` : ''}
  `;
  msgs.appendChild(div);
  scrollChatToBottom();
  return div;
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
}

function scrollChatToBottom() {
  const body = document.getElementById('chat-body');
  body.scrollTop = body.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  if (!chatSettings.url) {
    toggleChatSettings();
    showCfgResult('⚠ Configure gateway URL first', 'var(--amber)');
    return;
  }

  input.value = '';
  input.style.height = 'auto';
  addMessage('user', text);

  // Show typing
  document.getElementById('chat-typing').style.display = 'flex';
  document.getElementById('chat-send').disabled = true;
  input.disabled = true;
  setChatDot('connecting');

  const messages = chatHistory
    .filter(m => m.role !== 'system')
    .slice(-20)
    .map(m => ({ role: m.role, content: m.content }));

  try {
    const res = await fetch(`${chatSettings.url}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${chatSettings.token}`,
        'X-OpenClaw-Agent-Id': chatSettings.agentId,
      },
      body: JSON.stringify({
        model: `openclaw:${chatSettings.agentId}`,
        messages,
        stream: false,
      }),
      signal: AbortSignal.timeout(60000),
    });

    document.getElementById('chat-typing').style.display = 'none';

    if (!res.ok) {
      const errTxt = await res.text().catch(() => '');
      throw new Error(`HTTP ${res.status}${errTxt ? ': ' + errTxt.substring(0,80) : ''}`);
    }

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || data.choices?.[0]?.text || JSON.stringify(data);

    addMessage('assistant', reply);
    setChatDot('online'); setChatStatusLabel('CONNECTED');
    chatConnected = true;

  } catch(err) {
    document.getElementById('chat-typing').style.display = 'none';
    const errMsg = err.name === 'TimeoutError' ? 'Request timed out (60s)' : err.message;
    addMessage('error', `Error: ${errMsg}`);
    setChatDot('offline'); setChatStatusLabel('ERROR');
  } finally {
    document.getElementById('chat-send').disabled = false;
    input.disabled = false;
    input.focus();
  }
}

// Enter to send (Shift+Enter for newline)
document.addEventListener('keydown', function(e) {
  const input = document.getElementById('chat-input');
  if (document.activeElement === input && e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

// Auto-grow textarea
document.addEventListener('input', function(e) {
  if (e.target.id === 'chat-input') {
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px';
  }
});

// ---- DRAGGING ----
const chatEl = document.getElementById('agent-chat');
const dragHandle = document.getElementById('chat-drag-handle');

dragHandle.addEventListener('mousedown', (e) => {
  if (e.target.closest('.chat-controls')) return;
  isDragging = true;
  const rect = chatEl.getBoundingClientRect();
  dragOffX = e.clientX - rect.left;
  dragOffY = e.clientY - rect.top;
  chatEl.style.transition = 'none';
  chatEl.style.right = 'auto';
  chatEl.style.bottom = 'auto';
  e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    let x = e.clientX - dragOffX;
    let y = e.clientY - dragOffY;
    const maxX = window.innerWidth - chatEl.offsetWidth;
    const maxY = window.innerHeight - chatEl.offsetHeight;
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));
    chatEl.style.left = x + 'px';
    chatEl.style.top = y + 'px';
  }
  if (isResizing) {
    const newW = Math.max(300, resizeStartW + (e.clientX - resizeStartX));
    const newH = Math.max(300, resizeStartH + (e.clientY - resizeStartY));
    chatEl.style.width = Math.min(newW, 700) + 'px';
    chatEl.style.height = Math.min(newH, window.innerHeight * 0.85) + 'px';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  isResizing = false;
  chatEl.style.transition = '';
});

// ---- RESIZING ----
document.getElementById('chat-resize-handle').addEventListener('mousedown', (e) => {
  isResizing = true;
  resizeStartW = chatEl.offsetWidth;
  resizeStartH = chatEl.offsetHeight;
  resizeStartX = e.clientX;
  resizeStartY = e.clientY;
  chatEl.style.transition = 'none';
  e.preventDefault(); e.stopPropagation();
});

loadChatSettings();

// ---- INIT ----
buildWefBarChart();
buildNewsFeed();
buildFearIndex();
startNewsLoop();
startMarketsLoop();
// Boot chat open
document.getElementById('chat-toggle-btn').classList.add('active');
renderWelcome();
refresh();
// Initial treemap render after layout settles
setTimeout(() => { renderTreemap(); }, 100);

// Handle resize
window.addEventListener('resize', () => {
  const activeView = document.querySelector('.view-tab.active').dataset.view;
  if (activeView === 'treemap') renderTreemap();
  else if (activeView === 'map') renderMap();
  else if (activeView === 'scatter') renderScatter();
});