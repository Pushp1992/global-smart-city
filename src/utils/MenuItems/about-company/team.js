const BASE_URL =
  "https://res.cloudinary.com/pushpcloud/image/upload/v1608458732/smart-city/MenuBar/AboutCompany/team";

const TeamAndLeaderShip = {
  bannerImage: `${BASE_URL}/Team-5_nh3y4p`,
  bannerHeading: "The Right Talent",
  bannerSubHeading: `The right expertise, right team at the right time`,
  mainContent: {
    contentImage: `${BASE_URL}/Team-4_gn5aw3`,
    prefix: "Smart Development Professionals (SDP) LLC",
    paraGraph1: `collaborates with specialists across a spectrum of capabilities in Smart Cities-Villages. 
    From MBAs to Masters in Urban-Rural Infrastructure Planning, Economists, Techno-Innovation Management,
    from industry experts to experience designers and technologists, we work with a pool of specialists &
    industry experts with different backgrounds who collaborate on solving urban-rural issues and business
    problems of the present and future.`,
    paraGraph2: `Together with deep global network of SDP LLC, we quickly mobilize the best-suited team to 
    tackle Smart Cities’-Villages’ tech & business problems. With the right focused and aligned people in
    place, accountable from ideation to execution.`,
  },
  team: [
    {
      type: "leadership",
      heading: "About Leadership",
      people: [
        {
          name: "SD Prakash",
          avatar: `${BASE_URL}/Team_-2_weot4p`,
          designation: "Founder & CEO",
          email: 'sdprakash@sdpgroups.com',
          role:
            "Global Smart Cities Expert, National & Local Government Advisor",
          company: "SDP LLC",
          experience: "10+ years",
          extrainfo: "",
          metrics: ["Consulting - 39%", "Advisory - 49%", "Others - 12%"],
          details: `SD Prakash is an entrepreneur and a very experienced National & Local Government Advisor
          in more than 40 smart cities projects globally. His background in technology as well as the business
          is one of the biggest strengths. He is a driven, goal-oriented, entrepreneur, compassionate success
          -oriented person with team-building skills and a problem-solving attitude. He enjoys empowering
          government entities, MNCs, decision-makers and to help them to accomplish their project goals
          and look for opportunities to develop a global business. He is passionate about solving urban 
          & rural problems and delivering the impacts that matter to citizen experiences & quality of
          life by using efficient technologies and urban-rural management for a better future to our kids.`,
        },
      ],
    },
  ],
  extraInfo: {
    infoImage1: `${BASE_URL}/Team_-1_uw9pse`,
    infoImage2: `${BASE_URL}/Team-3_remj8b`,
    infoData2: `We at SDP believe in Vision, Framework, Collaborations and Strategy for success.`,
  },
};

export { TeamAndLeaderShip };
