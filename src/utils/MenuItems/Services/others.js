const BASE_URL =
  "https://res.cloudinary.com/pushpcloud/image/upload/v1608458732/smart-city/MenuBar/Services/others";

const OtherServices = [
  {
    id: "firstSection",
    bannerImage: `${BASE_URL}/Other_Major_Services_1_gzz6b5`,
    heading: "Smart Data Observatory",
    subHeading: `The first-of-its-kind observatory will leverage data analytics to optimize
     cities operations, improve governance and enhance economic performance of cities across 
     the country. Data empowers citizens and communities in being better informed about their
      lives and surroundings. At SDP , we understand that a business cannot get reliable 
      reporting based on high-quality data unless it has a well-tuned data management process.`,
    description: [
      { id: 1, title: `Business Intelligence` },
      { id: 2, title: `Market Entry & Growth Strategies` },
      { id: 3, title: `Data Analytics & Insights` },
      {
        id: 4,
        title: `Implementation, Transformation & Negotiation Strategies `,
      },
      { id: 5, title: `Data governance & quality management` },
      { id: 6, title: `Master and metadata management` },
      { id: 7, title: `Data security & Privacy guidelines.` },
      { id: 8, title: `Budget Effectiveness evaluation.` },
    ],
  },
  {
    id: "secondSection",
    bannerImage: `${BASE_URL}/Other_Major_Services_2_csj6r3`,
    heading: "Programme & Project Management",
    subHeading: `Careful coordination and management of people, processes, and technology are critical to the success 
    of Projects and Programmes, we established our dedicated services to overcome these challenges ensure that our clients
     achieve their project goals on-time and within their budget. At SDP, we help to evaluate the impact of their projects & program
      operations in smart cities management & implementation. Our management teams pride themselves on their exemplary track record
       of successfully executing projects across industries and geographies.`,
    description: [
      { id: 1, title: `Develop & deploy integration plan.` },
      { id: 2, title: `Evaluation of Project operations and performance.` },
      { id: 3, title: `Establish Operations & Effectiveness consulting` },
      { id: 4, title: `Strategy and Valuation Consulting` },
      { id: 5, title: `Developing Program plans & models` },
      { id: 6, title: `Developing Program plans & models` },
      { id: 7, title: `MoUs & Contract Management` },
      { id: 8, title: `Public-private partnerships (PPP) Advice` },
      { id: 9, title: `Support in Corporate Culture transformation` },
      { id: 10, title: `Corporate social responsibility ` },
      { id: 11, title: `Risk assessment & Management` },
      { id: 12, title: `Stakeholder & vendor Assistance` },
      { id: 13, title: `Financial projection analysis` },
    ],
  },
  {
    id: "thirdSection",
    bannerImage: `${BASE_URL}/Other_Major_Services_3_lvtvrz`,
    heading: "Urban Economics",
    subHeading: `Urban economics is broadly the economic study of urban areas, as such it involves using the tools of economics
     to analyse urban issues such as crime, education, public transit, housing, and local government finance. At SDP, We 
     involve using the tools of economics to analyse urban issues such as crime, education, public transit, housing, and 
     local government finance. We practice urban spatial structure and the location of households.`,
    description: [
      {
        id: 1,
        title: `Multi-lateral & Bi-lateral Trade Investment in Smart Cities `,
      },
      { id: 2, title: `Smart Cities RFI- PPP Evaluation Excel Matrix.` },
      { id: 3, title: `Smart Cities Projects Prioritization Criteria.` },
      { id: 4, title: `Smart Economy in Services (MaaS, SaaS, DaaS etc.)` },
      {
        id: 5,
        title: `Smart Cities KPIs and KPIs for smart cities advantages.`,
      },
      { id: 6, title: `Smart Cities Asset Management, Monetization Data` },
      {
        id: 7,
        title: `Smart Cities Value Capture Finance (VCF) of open spaces, Public Parks, Shopping Mall etc.`,
      },
      {
        id: 8,
        title: `PPP Smart Cities business models analysis & evaluation of proposals`,
      },
      {
        id: 9,
        title: `Conceptualizing & preparing a Maturity Model for Smart Cities.`,
      },
    ],
  },
  {
    id: "fourthSection",
    bannerImage: `${BASE_URL}/Other_Major_Services_4_ix78tf`,
    heading: "Governance & Policies",
    subHeading: `A policy is a deliberate system of principles to guide decisions and achieve rational outcomes. 
    A policy is a statement of intent, and is implemented as a procedure or protocol. Policies are generally adopted
     by a governance body within an organization. At SDP, we entails the functions of setting direction, making policy
      and strategy decision, overseeing and monitoring organizational performance, and ensuring overall accountability.`,
    description: [
      { id: 1, title: `Drafting and Reviewing Policies` },
      { id: 2, title: `Policy attestation & Document cross references` },
      { id: 3, title: `Policy distribution strategies ` },
      {
        id: 4,
        title: `Governance Structuring `,
      },
      { id: 5, title: `Proposal Writing` },
      { id: 6, title: `Prioritize Risk Management.` },
      { id: 7, title: `Policy & Strategy Formation` },
    ],
  },
  {
    id: "fifthSection",
    bannerImage: `${BASE_URL}/Other_Major_Services_5_ykhlbz`,
    heading: "Emerging Technologies Services",
    subHeading: `Emerging technologies have become an important factor in starting, growing and expanding businesses across all industries.
     At SDP, our Emerging Technologies team, help you answer this question based on your particular business and industry, and assist you
      in bringing your ideas to life. We public & private sector clients understand how these new technologies work and create new solutions
       to test and deploy in the market.`,
    description: [
      { id: 1, title: `Disruptive Innovation Services` },
      { id: 2, title: `Strategy Building and Transformation roadmap` },
      { id: 3, title: `Customer Experience Journey mapping` },
      {
        id: 4,
        title: `Artificial Intelligence & Machine Learning `,
      },
      { id: 5, title: `Robotic Process Automation` },
      { id: 6, title: `Internet of Things (IOT)` },
      { id: 7, title: `Block-chain` },
      { id: 8, title: `Augmented Reality (AR) & Virtual Reality (VR)` },
    ],
  },
  {
    id: "sixthSection",
    bannerImage: `${BASE_URL}/Other_Major_Services_6_pqen4d`,
    heading: "Urban Living Lab & Innovation Lab",
    subHeading: `Urban living lab is a new wave of experimental governance. It is a mechanism and strategy for systematic
     change in the development through experimentation. We at SDP help in designing  & development of innovative urban 
     living labs to work towards solving modern urban challenges and to test the potential of future technology.`,
    description: [
      {
        id: 1,
        title: `Urban Living Lab prototyping, challenges identification, solutions designing, lab set up.`,
      },
      {
        id: 2,
        title: `Ideating and experimenting to identify the most desirable, feasible & viable solution to modern urban challenges.`,
      },
      {
        id: 3,
        title: `Incubate those solutions by leveraging emerging technologies.`,
      },
      {
        id: 4,
        title: `Help build and nurture an innovation ecosystem of partners - including producers, thinkers, innovators, consumers, academia and others.`,
      },
    ],
  },
  {
    id: "seventhSection",
    bannerImage: `${BASE_URL}/Other_Major_Services_7_gwpnvx`,
    heading: "Resilience & Sustainability framework",
    subHeading: `Emerging recognition is also of the fact that social, economic, environmental and governance systems 
    cannot be treated in isolation. For the systems to be concurrently aligned in the development paradigm, the first
     step is to develop a meta-metric framework that identifies indicators and their respective roles in the development
      processes. At SDP, We analyse from their overall impact taking social, economic and environmental needs and consequences
       of the action. In such a way, a city or state or a country must therefore be called developed taking in account all dimensions of development.`,
    description: [
      {
        id: 1,
        title: `Achieving the vision of safer more resilient communities.`,
      },
      {
        id: 2,
        title: `Realign policies, programs and activities to help build and strengthen community resilience characteristics.`,
      },
      {
        id: 3,
        title: `Work together to adopt and use Community Based Emergency Management`,
      },
      {
        id: 4,
        title: `Utilize land use planning systems to reduce, community exposure to unreasonable risks from known hazards.`,
      },
      {
        id: 5,
        title: `Integrate planning and implementation to reduce risks in a measured and meaningful way.`,
      },
    ],
  },
  {
    id: "eigthSection",
    bannerImage: `${BASE_URL}/Other_Major_Services_8_wtvd9y`,
    heading: "Smart Buildings & Living",
    subHeading: `At its most basic, a smart building is one that is using technology to share information about what goes on 
    in the building between systems so as to optimize the building’s performance. This information is then used to automate 
    various processes, from heating and ventilation to air conditioning and security. At SDP, we promote the strategy and solutions
     related to the smart energy efficient building by using technology to identify the key areas in your building that waste energy
      and where energy costs can be minimized.`,
    description: [
      { id: 1, title: `Strategy Building and Transformation roadmap` },
      { id: 2, title: `Customer Experience Journey mapping` },
      { id: 3, title: `Smart Inter connection of system` },
      { id: 4, title: `Sensor Integration` },
      { id: 5, title: `Automation` },
      { id: 6, title: `User Interface` },
      { id: 7, title: `Analytics Software` },
      { id: 8, title: `Strategic Sustainability` },
      { id: 9, title: `Sustainable Development Goals` },
      { id: 10, title: `Total Impact Measurement & Management` },
    ],
  },
  {
    id: "ninethSection",
    bannerImage: `${BASE_URL}/Other_Major_Services_9_aqdw9f`,
    heading: "Smart Mobility Services",
    subHeading: `Smart cities & Smart Villages transport can make a big difference in the way passengers commute in dense urban
     areas and can help municipalities save costs, provide better service to citizens, and better manage safety and security. 
     Smart transport infrastructure is often recommended as a first step on the way to becoming a smart city. At SDP, we understand 
     that the problem and difficulties in Transportation sector, hence we help in increasing service levels with little disruption 
     to any processes with the help of ICT, GIS, GPS and AI.`,
    description: [
      { id: 1, title: `Comprehensive Mobility Plan` },
      { id: 2, title: `Intelligent Traffic Management System` },
      { id: 3, title: `NMT Strategy` },
      { id: 4, title: `Integrated transit hubs` },
      { id: 5, title: `Technology Intervention in Transportation` },
      { id: 6, title: `Electric and hybrid vehicles` },
      { id: 7, title: `Strategy & Policy formulation ` },
      { id: 8, title: `Mobility Analytics` },
      { id: 9, title: `Autonomous Vehicles (AVs)` },
    ],
  },
  {
    id: "tenthSection",
    bannerImage: `${BASE_URL}/Other_Major_Services_10_xfkvz6`,
    heading: "Smart Energy Services",
    subHeading: `Smart Energy as a Service is allowing utilities to externalize the technological distractions and focus on improving core 
    operations through dependable mission critical smart grid intelligence. Smart grid as a Service reduces the utility’s challenges associated 
    with IT, but does not confuse IT with energy operations. At SDP, We employ innovative products and services together with intelligent monitoring,
     control, communication, and self-healing technologies in order to Better connection & operation of generators of all sizes & technologies and 
     maintain the existing high levels of system reliability, quality & security of supply.`,
    description: [
      { id: 1, title: `Smart GRID-On/off` },
      { id: 2, title: `Solarisation Planning` },
      { id: 3, title: `Energy Economics ` },
      { id: 4, title: `Energy and capacity building` },
      { id: 5, title: `Smart Metering` },
      { id: 6, title: `Energy Auditing` },
      { id: 7, title: `Green Building Designs & Rating System` },
      { id: 8, title: `Service Data Monitoring` },
    ],
  },
];

export { OtherServices };
