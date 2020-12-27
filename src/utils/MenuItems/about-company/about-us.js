const BASE_URL =
  "https://res.cloudinary.com/pushpcloud/image/upload/v1608458732/smart-city/MenuBar/AboutCompany/about-us";

const AboutCompany = {
  prefix: "We are SDP ",
  suffixFirst: `an emerging company, providing better ideas for solving the Urban & Rural problems
    and delivering the impacts that matter to the citizen experiences, efficient city management & 
    better quality of life by using efficient technologies.`,
  suffixSecond: `We are offering 100+ Management Consulting & National and Local Government Advisory 
    Services, Global reach to 8+ regions, 83+ countries, Data Dashboard for Over 1000+ Smart Cities and 
    Smart Villages and we work with International, National and Local level Agencies, Authorities and 
    Businesses to fabricate the development that makes society inclusive, living smart and proudly 
    inherited by the coming generations.`,
  suffixThird: `We are determined to provide pragmatic, comprehensive,  technologically advanced and 
    innovative strategic solutions to achieve results that bridge what is with what can be. We provide 
    Management and Government Advisory services in public, private and social sectors which have bearing
    on the social, economic, institutional and physical development of an advanced and inclusive society 
    for Urban & Rural settings.`,
};

const StrategicPartner = {
  heading: "Our strategic partnerships",
  body: `At SDP we trust in being an impetus for change and, for us, that implies 
    making the best choice in business and in our general surroundings. To get this going,
     we work together with driving associations in business, government and the scholarly 
     community who share our duty to empowering comprehensive and economical development.`,
};

const StrategyCard = {
  card: [
    {
      image: `${BASE_URL}/about-us-2_rquukc`,
      sector: "Public",
      list: [
        "National Government",
        "State Government",
        "Urban Local Bodies",
        "Smart Cities Offices",
        "Other Sector Agencies",
      ],
    },
    {
      image: `${BASE_URL}/about-us-3_h45dni`,
      sector: "Private",
      list: [
        "MNCs Partnerships",
        "SMEs",
        "Large corporations",
        "Professional Trade associations",
      ],
    },
    {
      image: `${BASE_URL}/about-us-4_altof7`,
      sector: "International",
      list: [
        "International Agencies",
        "Think Tanks",
        "Embassies or Diplomatic Quarters",
        "Trade Relations",
      ],
    },
  ],
};

const SecondCardContent = {
  title: "Shaped by our enthusiasts",
  content: `A team of highly ambitious and motivated experts and clients
    from all over the world broadens our perspective for development
    of the society. We use collaborative approach to promote
    creativity, innovative ideas. We bring a fresh perspective,
    mutual trust and contagious energy to every client relationship.`,
};

const ThirdCardContent = {
  title: "Charged by Knowledge & Understanding",
  content: `Sustainable development requires extensive knowledge and understanding.
     Our work has basis on meticulous understanding of every client’s institutional perspective, 
     framework, sector dynamics, and macroeconomic environment.  For this we have our experts,
      analysts and researchers from 8+ regions of the world. We are building the World’s largest 
      smart data observatory that will be a knowledge source not for our team but for the world.`,
};

export { AboutCompany, StrategicPartner, StrategyCard, SecondCardContent, ThirdCardContent };
