import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Business Intelligence / Data Analyst with 3+ years delivering executive-ready analytics across transit and e-commerce, including Power BI and Tableau dashboards that cut manual reporting 40% and improved processing speed 25%. Architected KPI-ready data layers using SQL, Oracle views/data modeling, BigQuery, and Python (Pandas/NumPy), improving forecast accuracy 20% and enabling scalable, governance-aligned reporting. Drove measurable growth through pricing + experimentation —boosted bookings 27%, increased conversion 7%, and generated $5M incremental revenue using segmentation, regression, and A/B testing.";

  const experience = [
    {
      company: "New Jersey Transit",
      role: "Data Analyst",
      location: "Newark, NJ",
      dates: "Aug. 2023–Present",
      highlights: [
        "Engineered Power BI dashboards across 3 modes (Bus, Rail, Light Rail), strengthening KPI visibility and decision support for senior leadership.",
        "Optimized Oracle views and strengthened data models to standardize KPI logic across modes, improving data consistency by ~10–15% and reducing recurring reporting discrepancies by ~10%.",
        "Directed requirements workshops with Safety, Operations, and Engineering, converting business rules into scalable reporting logic aligned with regulatory and enterprise data governance standards.",
        "Analyzed 3+ years of incident, injury, and operational datasets to identify trend drivers and risk patterns, enabling data-backed decisions for strategic planning and executive reporting.",
        "Delivered rapid ad-hoc analytics for Safety teams within 24–48 hours, surfacing actionable patterns that accelerated operational response cycles by ~10–15%.",
        "Deployed Power BI Copilot for AI-assisted analytics, improving insight discovery speed by ~15–25% and increasing usability for non-technical users through simplified narratives and guided exploration."
      ]
    },
    {
      company: "LDP Logistics",
      role: "Data Analyst Intern",
      location: "Sayreville, NJ",
      dates: "Jun. 2022–Aug. 2022",
      highlights: [
        "Engineered Tableau Desktop financial dashboards tracking revenue, expenses, and profitability, reducing manual reporting effort by ~35–40% and accelerating executive visibility into key KPIs.",
        "Queried Google BigQuery and automated data cleansing/transformation in Python (Pandas, NumPy), cutting dataset preparation time by ~20–25% and improving reporting readiness.",
        "Developed customer segmentation and trend forecasting models on financial + supply chain data, improving forecast accuracy by ~15–20% and identifying cost-saving and revenue-growth opportunities.",
        "Automated recurring reporting pipelines and refresh workflows, eliminating ~40–50% of repetitive manual work and enabling faster, higher-frequency insights for finance and operations teams."
      ]
    },
    {
      company: "StayVista",
      role: "Executive Revenue (Revenue Analytics)",
      location: "Mumbai, India",
      dates: "Aug 2019–Jul 2021",
      highlights: [
        "Analyzed booking trends, seasonality, and geographic demand to identify high-potential markets and optimize inventory strategy, contributing to ~27% growth in bookings through pricing and promotion alignment.",
        "Executed pricing strategy analysis and promotional performance reviews with Marketing, Product, and Operations teams, improving campaign ROI and strengthening revenue forecasting accuracy by ~10–15%.",
        "Queried user and web behavior data using SQL and Google Analytics, driving website optimization initiatives that increased conversion rate by ~7% and improved funnel performance.",
        "Deployed Tableau dashboards to monitor revenue, customer engagement, and sales KPIs, increasing stakeholder adoption and supporting a ~15% uplift in sales and a ~20% rise in customer engagement.",
        "Identified high-value customer segments and behavioral drivers using regression, cohort/trend analysis, and experimentation; executed A/B tests with Python and Google Optimize, generating ~$5M incremental revenue."
      ]
    }
  ];

  const projects = [
    {
      title: "Product Prediction Analysis",
      subtitle: "Data Mining & Classification",
      category: "Machine Learning",
      introduction: "Implemented classification models to predict clothing types from product data using advanced machine learning algorithms.",
      problem: "Retail inventory management required accurate automated classification of clothing items to optimize categorization and search.",
      objective: "Build a robust classification system achieving high accuracy for clothing type prediction.",
      methodology: [
        "Implemented Logistic Regression as baseline model for binary and multi-class classification.",
        "Applied Support Vector Machine (SVM) for handling high-dimensional feature spaces.",
        "Developed Neural Network architecture to capture complex non-linear patterns in product data.",
        "Performed feature engineering and cross-validation to optimize model performance."
      ],
      results: [
        "Achieved 86.6% classification accuracy across clothing categories.",
        "Compared performance across three algorithms to identify optimal approach.",
        "Demonstrated practical application of machine learning in retail analytics."
      ],
      conclusion: "Successfully delivered a high-accuracy classification system showcasing end-to-end data mining capabilities from preprocessing to model deployment."
    },
    {
      title: "Non-Profit Organization Project Case Study",
      subtitle: "Project Management",
      category: "Project Management",
      introduction: "Developed comprehensive project management documentation and timeline-driven execution plan for non-profit initiative.",
      problem: "Non-profit organizations often lack structured project management frameworks, leading to execution delays and resource misallocation.",
      objective: "Create a complete project management framework with documented deliverables to support successful project execution.",
      methodology: [
        "Produced a timeline-driven project plan with clear milestones and dependencies.",
        "Documented 13 comprehensive project management deliverables covering initiation through closure.",
        "Established governance structures and stakeholder communication protocols.",
        "Created risk management and quality assurance frameworks."
      ],
      results: [
        "Delivered complete project documentation suite ready for implementation.",
        "Established repeatable project management framework for future initiatives.",
        "Strengthened organizational capability for structured project delivery."
      ],
      conclusion: "Demonstrated strong project management discipline and ability to translate methodology into actionable organizational frameworks."
    },
    {
      title: "COVID Vaccination Data Analysis",
      subtitle: "Data Analysis & Visualization",
      category: "Public Health Analytics",
      introduction: "Analyzed global COVID-19 vaccination data to uncover distribution patterns, coverage rates, and demographic insights through interactive dashboards.",
      problem: "Public health officials and policymakers needed accessible, data-driven insights to understand vaccination progress and identify underserved populations.",
      objective: "Transform raw vaccination data into actionable insights through comprehensive cleaning, analysis, and visualization.",
      methodology: [
        "Cleaned and wrangled complex vaccination datasets in Python using Pandas.",
        "Performed exploratory data analysis to identify trends and anomalies.",
        "Built interactive Tableau dashboards with drill-down capabilities.",
        "Created geographic and temporal visualizations to show distribution patterns."
      ],
      results: [
        "Enabled stakeholder self-service analysis through interactive dashboard deployment.",
        "Identified coverage gaps and demographic disparities in vaccination rates.",
        "Supported data-driven policy decisions with clear, accessible visualizations."
      ],
      conclusion: "Showcased ability to work with real-world public health data and transform it into insights that support critical decision-making."
    },
    {
      title: "Consumer Price Index Trends",
      subtitle: "Business Forecasting",
      category: "Time Series Analysis",
      introduction: "Operationalized multiple forecasting models to predict the Harmonized Index of Consumer Prices, enabling economic trend analysis and planning.",
      problem: "Businesses and analysts required accurate inflation forecasting to inform pricing strategies and financial planning.",
      objective: "Develop and compare multiple forecasting approaches to identify the most accurate prediction model for consumer price trends.",
      methodology: [
        "Operationalized 7 distinct forecasting models including Regression and ARIMA.",
        "Performed time series decomposition to identify trend, seasonality, and residual components.",
        "Conducted model validation using train-test splits and error metrics.",
        "Compared forecast accuracy across methodologies to identify optimal approach."
      ],
      results: [
        "Delivered comprehensive forecasting suite with multiple model comparisons.",
        "Identified best-performing models for different time horizons.",
        "Enabled data-driven economic planning with validated prediction capabilities."
      ],
      conclusion: "Demonstrated advanced statistical modeling expertise and ability to apply quantitative methods to macroeconomic forecasting challenges."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Data & Analytics Tools',
      skills: ['SQL (SQL Server, MySQL, PostgreSQL)', 'Oracle', 'Google BigQuery']
    },
    {
      icon: TrendingUp,
      title: 'Programming',
      skills: ['Python (Pandas, NumPy, SciPy, Matplotlib)']
    },
    {
      icon: Users,
      title: 'BI & Visualization',
      skills: ['Power BI', 'Tableau (Desktop, Prep)', 'Looker']
    },
    {
      icon: Lightbulb,
      title: 'ETL / Data Prep',
      skills: ['Alteryx', 'Microsoft Excel (Pivot Tables, VLOOKUP)']
    }
  ];

  const additionalSkills = [
    {
      title: 'Analytics & Business Skills',
      skills: ['Data Extraction', 'Data Cleaning', 'KPI Reporting', 'Dashboard Development', 'Ad Hoc Analysis', 'Trend Analysis', 'Forecasting', 'Customer Segmentation', 'Pricing Strategy', 'E-commerce Metrics']
    },
    {
      title: 'Collaboration',
      skills: ['Requirements Gathering', 'Cross-Functional Stakeholder Management', 'Documentation', 'Process Improvement', 'Client/End-User Focus', 'Project Coordination']
    }
  ];

  const certifications = [
    'Microsoft PL-300: Power BI Data Analyst (Recommended)',
    'Tableau Desktop Specialist',
    'Google Data Analytics Certificate',
    'AWS Cloud Practitioner'
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display text-black tracking-wide">NISHIT PABARI</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'certifications', label: 'Certs' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <div className="w-36 h-36 rounded-full mx-auto mb-6 bg-black flex items-center justify-center border-4 border-brown/30 shadow-lg">
                <span className="text-4xl font-display text-white">NP</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              NISHIT PABARI
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Business Intelligence Analyst | Power BI, SQL, Oracle, Tableau
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              HARRISON, NJ, USA · HYBRID/REMOTE READY
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📊 VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'MANUAL REPORTING REDUCED', value: '40%', detail: 'Power BI & Tableau' },
              { label: 'REVENUE GENERATED', value: '$5M', detail: 'Incremental through analytics' },
              { label: 'BOOKINGS GROWTH', value: '27%', detail: 'Pricing & promotion optimization' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              BI specialist transforming complex data into executive-ready insights that drive revenue growth and operational efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Dashboard Excellence',
                detail: 'Engineered Power BI and Tableau solutions that cut manual reporting by 40% and improved processing speed by 25%.'
              },
              {
                icon: Rocket,
                title: 'Data Architecture',
                detail: 'Architected KPI-ready data layers using SQL, Oracle, and BigQuery, improving forecast accuracy by 20%.'
              },
              {
                icon: Lightbulb,
                title: 'Growth Analytics',
                detail: 'Drove measurable business impact: 27% booking growth, 7% conversion increase, and $5M incremental revenue through experimentation.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Delivering analytics across transit, logistics, and e-commerce sectors with measurable business impact.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Machine learning, forecasting, and analytics projects demonstrating technical depth and business acumen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                <div className="mt-4 flex items-center text-brown hover:text-black transition-colors">
                  <span className="text-sm font-light">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in implementation details or methodology?
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for detailed case studies.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Technical toolkit spanning data engineering, analytics, and business intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {additionalSkills.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-lg font-display text-black mb-6 tracking-wide text-center">{category.title.toUpperCase()}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-xs bg-cream text-brown px-3 py-1 rounded-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">CERTIFICATIONS</h2>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Professional credentials validating technical expertise and analytical capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-cream p-6 rounded-sm border border-brown/10 shadow-sm">
                <Award className="w-6 h-6 text-brown mr-4" />
                <span className="text-brown font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-display text-black tracking-wide">Rutgers University</h3>
                  <p className="text-brown font-medium">Master of Science, Information Technology & Analytics</p>
                </div>
                <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                  Newark, NJ
                </div>
              </div>
              <p className="text-brown leading-relaxed font-light">
                Advanced coursework in data analytics, business intelligence, and information systems management.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-display text-black tracking-wide">K.J. Somaiya College of Engineering</h3>
                  <p className="text-brown font-medium">Bachelor of Technology, Electronics Engineering</p>
                </div>
                <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                  Mumbai, India
                </div>
              </div>
              <p className="text-brown leading-relaxed font-light">
                Foundation in engineering principles, quantitative analysis, and technical problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss how data analytics can drive growth and operational excellence for your organization.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+18623725372"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (862) 372-5372
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/nishitp9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:pnishit.pabari8@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                pnishit.pabari8@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Nishit Pabari · Business Intelligence & Analytics.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;