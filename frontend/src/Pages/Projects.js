import React, { useState, useEffect } from "react";
import "./Projects.css";
import { animateScroll as scroll } from "react-scroll";



// import ind1 from "../assets/images/industrial Buildings/LPG Refrigerated Storage and Handling Facilities, BPCL, Uran.png";
// import ind2 from "../assets/images/industrial Buildings/LPG Plant BPCL URAN.png";
// import ind3 from "../assets/images/industrial Buildings/LPG Tank Pad Foundation,  BPCL, Uran.png";
// import ind4 from "../assets/images/industrial Buildings/Raft Foundation for LPG Storage Plant BPCL Uran.png";

// import indes1 from "../assets/images/industrial/eng structure/Tatsuno india.jpg";
// import indes2 from "../assets/images/industrial/eng structure/TGw machine.png";
// import indes3 from "../assets/images/industrial/eng structure/TGw machine2.png";
// import indes4 from "../assets/images/industrial/eng structure/Tractors eng.png";
// import indes5 from "../assets/images/industrial/eng structure/warehouse for kellogs.jpg";

// import indff1 from "../assets/images/industrial/food and farma/godrej agrovet.png";
// import indff2 from "../assets/images/industrial/food and farma/godrej agrovet2.jpg";
// import indff4 from "../assets/images/industrial/food and farma/Smith  and newphaw sinnar 1.png";
// import indff5 from "../assets/images/industrial/food and farma/smith and newphaw ltd sinner 2.png";

// oil section image

// import indogh1 from "../assets/images/industrial/oil&gas/Asian paints R&D turbhe.png";
// import indogh2 from "../assets/images/industrial/oil&gas/Asian paints R&D turbhe2.jpg";
// import indogh3 from "../assets/images/industrial/oil&gas/Asian paints taloja1.png";
// import indogh4 from "../assets/images/ProjectImg/industrial(1)/oil&gas/Asian paints taloja2.png";
// import indogh5 from "../assets/images/industrial/oil&gas/flare stack.jpg";
// import indogh6 from "../assets/images/industrial/oil&gas/lpg plat bpcl.jpg";
// import indogh7 from "../assets/images/industrial/oil&gas/lpg tank pad.jpg";

// infra bridge images

// import infrabfa1 from "../assets/images/ProjectImg/infrasture/bridges/badlapur flayour.jpg";
// import infrabfa2 from "../assets/images/ProjectImg/infrasture/bridges/GHV Bridge dhule.jpg";
// import infrabfa3 from "../assets/images/ProjectImg/infrasture/bridges/GHV Bridge dhule1.jpg";
// import infrabfa4 from "../assets/images/ProjectImg/infrasture/bridges/jalna rob 1.jpg";
// import infrabfa5 from "../assets/images/ProjectImg/infrasture/bridges/jalna rob 4.jpg";
// import infrabfa6 from "../assets/images/ProjectImg/infrasture/bridges/jalna rob2.jpg";
// import infrabfa7 from "../assets/images/ProjectImg/infrasture/bridges/jalna rob3.jpg";
// import infrabfa8 from "../assets/images/ProjectImg/infrasture/bridges/Nerul flyour.jpg";
// import infrabfa9 from "../assets/images/ProjectImg/infrasture/bridges/Rob & aliied.jpg";

// special assignment Interior and Renovation images

// import saiao1 from "../assets/images/ProjectImg/special assignments/interior and fitouts/interior of R&D centre Asia pacific region mumbai.jpg";
// import saiao2 from "../assets/images/ProjectImg/special assignments/interior and fitouts/siemens canteen.jpg";

// multistored building

// import mbcb1 from "../assets/images/ProjectImg/multistoried/cummercial buildings/CITICORP Info tech.jpg";
// import mbcb2 from "../assets/images/ProjectImg/multistoried/cummercial buildings/Simens car parking.jpg";

// import mbphb1 from "../assets/images/ProjectImg/multistoried/public heritage buildings/Dr Ambedkar memorial mahad.jpg";
// import mbphb2 from "../assets/images/ProjectImg/multistoried/public heritage buildings/Mahraja Agrasen Bhavan jalna.jpg";
// import mbphb3 from "../assets/images/ProjectImg/multistoried/public heritage buildings/shiv samrtha smarak.jpg";
// import mbphb4 from "../assets/images/ProjectImg/multistoried/public heritage buildings/shiv smarak electrical room setup1.jpg";
// import mbphb5 from "../assets/images/ProjectImg/multistoried/public heritage buildings/shiv smarak electrical room setup2.jpg";
// import mbphb6 from "../assets/images/ProjectImg/multistoried/public heritage buildings/shiv smarak transformer and pannel.jpg";
// import mbphb7 from "../assets/images/ProjectImg/multistoried/public heritage buildings/shiv smarak1.jpg";
// import mbphb8 from "../assets/images/ProjectImg/multistoried/public heritage buildings/shiv smarak2.jpg";
// import mbphb9 from "../assets/images/ProjectImg/multistoried/public heritage buildings/shiv smarak3.jpg";
// import mbphb10 from "../assets/images/ProjectImg/multistoried/public heritage buildings/shiv smarak4.jpg";
// import mbphb11 from "../assets/images/ProjectImg/multistoried/public heritage buildings/shiv smarak5.jpg";
// import mbphb12 from "../assets/images/ProjectImg/multistoried/public heritage buildings/shiv smarak6.jpg";
// import mbphb13 from "../assets/images/ProjectImg/multistoried/public heritage buildings/shiv smarak7.jpg";
// import mbphb14 from "../assets/images/ProjectImg/multistoried/public heritage buildings/shiv smarak8.jpg";

// import mbrp1 from "../assets/images/ProjectImg/multistoried/residential projects/chaitanya tower.jpg";
// import mbrp2 from "../assets/images/ProjectImg/multistoried/residential projects/Narayan aura vadora.jpg";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/projects/${product.id}`, { state: { product } });
  };

  const [activeSection, setActiveSection] = useState(null);

  const handleCardClick = (section) => {
    setActiveSection(section);
    // scrollIntoView(section);
  };

  const [activeFilter, setActiveFilter] = useState("Engineering Structures");
  const [activeFilterInfrastructure, setActiveFilterInfrastructure] = useState("Bridges, Flyovers and Aqueducts");

  const [activeFilterSpecialAssignments, setActiveFilterSpecialAssignments] = useState("Customized Housing");
  const [activeFilterMultistoredBuilding, setActiveFilterMultistoredBuilding] = useState("Cummercial Buildings");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handlFilterChangeInfrasture = (filter) => {
    setActiveFilterInfrastructure(filter);
  };

  const handlFilterChangeSpecialAssignments = (filter) => {
    setActiveFilterSpecialAssignments(filter);
  };

  const handlFilterChangeMultistoredBuilding = (filter) => {
    setActiveFilterMultistoredBuilding(filter);
  };

  const scrollIntoView = (section) => {
    const targetElement = document.getElementById(`section-${section}`);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop; // Adjust the offset as needed
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Call scrollIntoView when the component is mounted
    if (activeSection) {
      scrollIntoView(activeSection);
    }
  }, [activeSection]); // Trigger the effect whenever activeSection changes

  // Engineering Structure

  const indes = [
    {
      id: 1,
      title: "Tractor Engineering Ltd",
      description: [
        "This shell roof industrial building houses the heat treatment plant of Tractor Engineers Ltd. (TENGL), a wholly owned subsidiary of Larsen & Toubro Limited.",
        "The scope of work included excavation, leveling & filling works, heavy machinery foundations, RCC frames structure, industrial floorings, elevated water tank, shell type roof, drainage, pluming and other area development works.",
        "The critical part was the shell roof construction of 20 mtr span with shell thickness of just 75 mm. Controlled concrete mix design with proper workability was used to get the form finish along with necessary camber which was then carefully lifted by hydraulic cranes.",
      ],
      project_brief: {
        "Total area of the project": "60,000 sft",
        "Concrete quantity": "3000 cum",
        Reinforcement: "450 mt",
        "Tremix flooring": "35,000 sft",
        "Shell roof panels": "200 nos",
        "Overhead Water Tank": "20 mts",
        "Time period": "12 months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186208/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/1.%20Engineering%20Structures/1.%20Tractor%20Engineers%20Ltd/1.Tractor_Engineers_Ltd.._myfsnt.png",
      ],
    },
    {
      id: 2,
      title: "TGW Knives, Indore",
      description:
        "This project is an industrial manufacturing plant for the London based company TGW Knives Ltd. The project was constructed at Pithampur MIDC - Muhu -Dhar highway ,Indore (Madhya Pradesh). The project was completed under watchful eyes and strict supervision of our esteemed UK client, and they were very pleased and appreciative of our performance and output at the end.",
      project_brief: {
        "Total area of the project": "30,000 Sq Ft",
        RCC: "Form finish work",
        "Main manufacturing plant": "55 m x 55 m",
        "Concrete quantity": "1250 Cum",
        "Trimix flooring": "1700 Sqm",
        "Reinforcement steel": "70 MT",
        Shuttering: "3600 Sqm",
        "Floor to floor height": "3.50 mtr",
        "Internal finishes": "Flooring, False ceiling, Electricals, Plumbing etc",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186221/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/1.%20Engineering%20Structures/7.TGW%20Knives%2C%20Indore/3_xrobec.jpg",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186210/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/1.%20Engineering%20Structures/7.TGW%20Knives%2C%20Indore/1_022_naiutl.jpg",
      ],
    },
    {
      id: 3,
      title: "Jay Instruments",
      description:
        "This is the corporate of Jay Instruments, a leading company in the field of weighing solution and represents various multinational companies in India. Scope of work included complete buildings including various finishing work, MEP  and interior works. ",
      project_brief: {},
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720708299/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/1.%20Engineering%20Structures/8.Jay%20Instruments/JISL_Taloja_New_Photo__h1ktux.jpg",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186208/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/1.%20Engineering%20Structures/8.Jay%20Instruments/WhatsApp_Image_2024-07-05_at_11.16.11_AM_ymyvqr.jpg",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186210/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/1.%20Engineering%20Structures/8.Jay%20Instruments/WhatsApp_Image_2024-07-05_at_11.16.08_AM_1_keehz7.jpg",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186209/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/1.%20Engineering%20Structures/8.Jay%20Instruments/WhatsApp_Image_2024-07-05_at_11.16.12_AM_xsynpt.jpg",
      ],
    },
    {
      id: 4,
      title: "Tatsuno, Taloja",
      description:
        "This was an industrial manufacturing plant for the Japan based company Tatsuno India Ltd.,and was constructed at Taloja MIDC ,Navi Mumbai(MS). This work was completed under strict supervision of our Japanese clients, with very pleased appreciation by them at the end.",
      project_brief: {
        "Total area of the project": "30,000 Sq Ft",
        RCC: "Form finish work",
        "Main manufacturing plant": "60 mx 30 m",
        "Concrete quantity": "900 Cum",
        "Reinforcement steel": "30 MT",
        "Trimix flooring": "2000 Sqm",
        "Floor to floor height": "3.50 mtr",
        "Internal finishes": "Flooring, False ceiling, Electricals, Plumbing etc",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186220/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/1.%20Engineering%20Structures/6.Tatsuno%2C%20Taloja%2C%20MIDC/Tatsuno_yarfly.png",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186208/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/1.%20Engineering%20Structures/6.Tatsuno%2C%20Taloja%2C%20MIDC/Tatsuno_taloja_jigidh.jpg",
      ],
    },
    {
      id: 5,
      title: "Larsen And Toubro, Pune",
      description:
        "The expansion project of the Larsen and Toubro Limited Heavy Engineering Division at Talegaon (Pune) in Maharashtra, is one of the finest facilities for realization of series production and proto versions of Strategic Weapon Platforms, Sensors and Military Engineering Systems. Our scope of work included the construction of various Units such as Food Court building, RF Test Building, Worker Change Room, Security Cabins, Scrapyard, GPTF Road, Drain work and Retaining wall near Food court building including massive earthwork",
      project_brief: {
        "Total area of the project": "25,000 sft",
        "Total concrete quantity": "3450 cum",
        "Total reinforcement": "132 mt",
        "Structural steel": "70 mt",
        Shuttering: "7200 sqm",
        Masonry: "266 cum",
        Plastering: "3654 sq m",
        Flooring: "1921 sqm",
        Sheeting: "1642 sq m",
        "Structural Glazing": "455 sqm",
        "ACP Cladding": "391 sqm",
        Duration: "8 months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186220/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/1.%20Engineering%20Structures/4.Larsen%20and%20Toubro%2C%20Talegaon%20Pune/L_T_E_kscrdr.png",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186208/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/1.%20Engineering%20Structures/4.Larsen%20and%20Toubro%2C%20Talegaon%20Pune/1.larsen_and_toubro_fjdaxn.png",
      ],
    },
    // Add more product data
  ];

  const indfap = [
    {
      id: 1,
      title: "Godrej Agrovet, Bangalore",
      description:
        "Godrej - a leading name in the industry had appointed us to construct the RGC (Real Good Chicken) plant at Bangalore. Our scope of work involves construction of sheds, clean rooms, processing area, storage area, rendering plant and wastage processing zone. Independent concrete batch mix plant with concrete pump was set up of this project",
      project_brief: {},
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720262608/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/2.%20Food%20and%20Pharma%20Projects/1.Godrej%20Agrovet%2C%20Bangalore/2_mbkxrd.png",
      ],
    },

    {
      id: 2,
      title: "Indoco",
      description:
        "I, for one, bet on science as helping us. I have yet to see how it fundamentally endangers us, even with the H-bomb lurking about. Science has given us more lives than it has taken; we must remember that",
      project_brief: {},
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186224/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/2.%20Food%20and%20Pharma%20Projects/5.Indoco/Indoco_saegxr.png",
      ],
    },
    {
      id: 3,
      title: "Smith & Nephew",
      description:
        "The moon, by her comparative proximity, and the constantly varying appearances produced by her several phases, has always occupied a considerable share of the attention of the inhabitants of Earth.",
      project_brief: {},
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720262926/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/2.%20Food%20and%20Pharma%20Projects/2.Smith%20and%20Nephew/Smith_and_newphaw_sinnar_1_x0ttnr.png",
      ],
    },
    {
      id: 4,
      title: "Microtrol",
      description:
        "The moon, by her comparative proximity, and the constantly varying appearances produced by her several phases, has always occupied a considerable share of the attention of the inhabitants of Earth.",
      project_brief: {},
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186215/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/2.%20Food%20and%20Pharma%20Projects/6.Microtrol/microtrol1_xnxf5o.png",
      ],
    },
    {
      id: 5,
      title: "Johnson & Johnson",
      description:
        "The moon, by her comparative proximity, and the constantly varying appearances produced by her several phases, has always occupied a considerable share of the attention of the inhabitants of Earth.",
      project_brief: {},
      image:
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720263231/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/2.%20Food%20and%20Pharma%20Projects/johnson%20and%20johnson/jj_afsmyy.png",
    },
  ];

  // oil and gas
  const indogh = [
    {
      id: 1,
      title: "ONGC",
      description:
        "Irure id incididunt est ad dolor elit quis velit veniam irure Lorem.Dolore sit minim et nulla consequat officia aliqua Lorem occaecat ullamco deserunt deserunt duis.",
      project_brief: { "Total area of the project": " " },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186215/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/3.%20Heavy%20Engineering%20Projects/1.ONGC/ONGC_civil_works_izuazb.jpg",
      ],
    },
    {
      id: 2,
      title: "Toyo",
      description:
        "Toyo Engineering was awarded the EPC contract for executing 1500 mt of Ammonia plant at Taloja premises by Deepak Fertiliser. Our scope of work comprised of construction of cooling tower (110 mtr x 12 mtrs- 6 bays), service water tanks (2 nos of 30 mtr dia), lagoon (125 mts x 20 mtr x 6 ntrs), pipe rack foundations (total length 800 mtr), machine foundations (3 major foundation), various plant buildings and its related foundations. The total concrete volume was 19000 cum.  ",
      project_brief: { "Total area of the project": " " },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186225/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/3.%20Heavy%20Engineering%20Projects/2.Toyo/toyo2_umtm2s.png",
      ],
    },
    {
      id: 3,
      title: "Asian Paints",
      description:
        "Irure id incididunt est ad dolor elit quis velit veniam irure Lorem.Dolore sit minim et nulla consequat officia aliqua Lorem occaecat ullamco deserunt deserunt duis.",
      project_brief: { "Total area of the project": " " },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186216/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/3.%20Heavy%20Engineering%20Projects/4.Asian%20Paints%2C%20Taloja/asian1_gf2hsl.png",
      ],
    },
    {
      id: 4,
      title: "BPCL, Uran",
      description:
        "Irure id incididunt est ad dolor elit quis velit veniam irure Lorem.Dolore sit minim et nulla consequat officia aliqua Lorem occaecat ullamco deserunt deserunt duis.",
      project_brief: { "Total area of the project": " " },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186216/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/3.%20Heavy%20Engineering%20Projects/5.BPCL%2C%20LPG%20Tank%20Pad%2C%20Uran/Bpcl_jgikzf.jpg",
      ],
    },
    {
      id: 5,
      title: "Deepak Fertilizer",
      description:
        "The scope was various project works within the existing setup. The total area to be covered was 76 Acres. Various projects completed were the bagging plant setup, Dry Container setup, LDAN (Loose dry ammonium nitrite) plant, various buildings projects, interior projects, plumbing works, weigh bridge, renovation works, strengthening works, water storage lagoons, roads and drain project.",
      project_brief: { "structural steel": "1000 mt", Concrete: "6000 cum" },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186216/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/3.%20Heavy%20Engineering%20Projects/3.Deepak/Deepak_tbbpes.jpg",
      ],
    },
  ];

  const indlog = [
    {
      id: 1,
      title: "Lodha",
      description:
        "Lodha logistic park comprises the central box area and the adjoining infra works. The total work comprised all civil, structural, interiors, plumbing, fire fighting, roads, drainage and other related works including facade. This has been executed within the Usatne premises of Lodha Logistics",
      project_brief: { "Total area of the project": " " },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186218/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/4.%20Logistics%20Structures/3.Lodha/WhatsApp_Image_2024-07-03_at_4.40.14_PM_xkqcbe.jpg",
      ],
    },
    {
      id: 2,
      title: "Kellogg's",
      description:
        "Kellogg India Private Limited is a UK based multinational food products manufacturing company. It is manufacturer of chipmunks fruit flavored snacks, golden honey nut flakes, roasted nut and honey OS, fruit flavored snacks, thick and fluffy original waffles. We had undertaken the expansion project for Kellogg near Palwel at Taloja, Maharashtra. Our scope of work included the  various construction of units such as Raw material  Warehouse, Finish good warehouse, Loading unloading platforms, Roads and Drains",
      project_brief: { "Total area of the project": " " },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186217/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/4.%20Logistics%20Structures/2.Kellogs%20India%20Pvt.%20Ltd/Kellogs_fa9lfr.png",
      ],
    },
    {
      id: 3,
      title: "Siemens Logistics Center",
      description:
        "Irure id incididunt est ad dolor elit quis velit veniam irure Lorem.Dolore sit minim et nulla consequat officia aliqua Lorem occaecat ullamco deserunt deserunt duis.",
      project_brief: { "Total area of the project": " " },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720186217/Progressive/1.Industrial-20240705T132840Z-001/1.Industrial/4.%20Logistics%20Structures/1.Siemens%20Logistics%20Center/2.Siemens_Logistics_Center_hdiduy.jpg",
      ],
    },
  ];

  const infrabfa = [
    {
      id: 1,
      title: "Phulambry Bridge",
      category: "Bridges, Flyovers and Aquaducts",
      hits: 993,
      description: [
        "This is a major bridge across Phulambri river on Aurangabad Jalgoan road in Marathwada area. The total length of the bridge is 77 mtr of 7 mtr span with 250 meter length approaches. The bridge consists of Raft foundation, solid abutment/pier and solid deck slab.",
      ],
      project_brief: {
        "Total length": "77 mtrs",
        "Concrete quantity": "1850 cum",
        "Shuttering quantity": "5200 sqm",
        "Reinforcement quantity": "98 MT",
        Span: "11 nos",
        Foundation: "Raft",
        "Time period": "18 months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720436520/Progressive/3.Infrastructure/1.Bridge/9.Phulambry%20Bridge/Phulambry_e_lyiqnj.png",
      ],
    },
    {
      id: 2,
      title: "Borli Mandala Creek Bridge",
      category: "Bridges, Flyovers and Aquaducts",
      hits: 1019,
      description: [
        "This bridge is about 200 mtr from the sea. The tidal variation at this location is in the range of 2.5 mtrs. As in other creek bridges, foundation was the most difficult part of the entire structure. The total length of the bridge is 60 mtr and 20 mt span x 3 nos.",
      ],
      project_brief: {
        "Total length": "60 mtrs",
        "Concrete quantity": "2800 cum",
        "Reinforcement quantity": "150 mt",
        Span: "20 mts",
        Foundation: "Open",
        "Tidal variation": "2.5 mtrs",
        "Time period": "12 Months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720436455/Progressive/3.Infrastructure/1.Bridge/12.Borli%20Mandala%20Creek%20Bridge/borli_e_l6arbj.png",
      ],
    },
    {
      id: 3,
      title: "Tawsal Creek Bridge",
      category: "Bridges, Flyovers and Aquaducts",
      hits: 1019,
      description: [
        "This creek bridge is about 100 mtrs from the Arabian sea as a part of Coastal Road project in Maharashtra. The total length of the bridge is 60 mtr made up of two spans of each 30 mtrs. The foundation was critical and was carried out by well sinking process. The sinking of the well had to be done to a depth of 30 mtr below the mean sea level.",
      ],
      project_brief: {
        "Total length": "80 mtrs",
        "Concrete quantity": "5500 cum",
        "Reinforcement quantity": "500 mt",
        Span: "30 mts box",
        Foundation: "Well foundation",
        "Tidal variation": "3.5 mtrs",
        Concrete: "M 25, M 30 site mix",
        "Time period": "12 Months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720436461/Progressive/3.Infrastructure/1.Bridge/14.Tawsal%20Creek%20Bridge/tewsal_e_sms5al.png",
      ],
    },
    {
      id: 4,
      title: "Desai Creek Bridge",
      category: "Bridges, Flyovers and Aquaducts",
      hits: 1443,
      description: [
        "On 15 Dec 1999, there was a slab collapse of a major but old bridge across Desai creek due to weakening of masonry structure supporting the slabs. Considering the urgency of the situation, a tender was floated by the PWD Department of Govt of Maharashtra by calling selected 10 bridge contractors and we were fortunate to be awarded the work despite competition from big construction companies.",
        "Our scope included dismantling of existing bridge and reconstruction of the same at the same location. Despite high variation of tide we were successful in completion of the bridge in record time of 86 days which is still a record in creek bridges in Maharashtra.",
      ],
      project_brief: {
        "Total length": "80 mtrs",
        "Concrete quantity": "3000 cum",
        "Reinforcement quantity": "550 mt",
        Span: "13.5 mts",
        Foundation: "Open",
        "Tidal variation": "2 mtrs",
        Concrete: "M 25 site mix",
        "Time period": "86 days",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720436464/Progressive/3.Infrastructure/1.Bridge/15.Desai%20Creek%20Bridge/desai_e_xwdreu.png",
      ],
    },
    {
      id: 5,
      title: "Kendal River Bridge",
      category: "Bridges, Flyovers and Aquaducts",
      hits: 1114,
      description: [
        "The entire river was a sand bed with minimum thickness of 1.5 mtr. The cutoff wall had encountered heavy dewatering creating problems for cutoff wall concreting. The problems were so severe that precast concrete wall had to be done to execute the works. In certain cases well sinking had to be done in rectangular shape of cutoff wall.",
      ],
      project_brief: {
        "Total length": "185 mtrs",
        "Concrete quantity": "2500 cum",
        "Shuttering quantity": "15000 sqm",
        "Reinforcement quantity": "450 mt",
        Span: "9 mt x 3 nos box",
        Foundation: "Raft",
        "Time period": "15 months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720436470/Progressive/3.Infrastructure/1.Bridge/16.Kendal%20River%20Bridge/kendal_e_i9tj0n.png",
      ],
    },
    {
      id: 6,
      title: "Neelkant Bridge",
      category: "Bridges, Flyovers and Aquaducts",
      hits: 1082,
      description: [
        "The work of the bridge proper was self-designed. To enable economies the span was designed as continuous span bridges. Hence 15 mts support span had to be casted as 45 mtrs in one pour.",
      ],
      project_brief: {
        "Total length": "135 mtrs",
        "Concrete quantity": "2800 cum",
        "Shuttering quantity": "12000 sqm",
        "Reinforcement quantity": "300 mt",
        Span: "45 mt x 3 nos",
        Foundation: "Open",
        "Time period": "8 months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720436470/Progressive/3.Infrastructure/1.Bridge/17.Neelkant%20Bridge/neelkanth_e_h9qstc.png",
      ],
    },
    {
      id: 7,
      title: "Shekta Bridge",
      category: "Bridges, Flyovers and Aquaducts",
      hits: 1539,
      description: [
        "Normally a bridge is perpendicular to the flow of the river. However, this bridge is unique as the alignment is in skew of 65 % to the flow of the river. This skew angle is one of the highest in this part of the region. Hence the normal length of the 7.5 mt road width has now measured at 28 mtr at skew length.",
      ],
      project_brief: {
        "Total length": "45 mtrs",
        "Concrete quantity": "1500 cum",
        "Shuttering quantity": "5500 sqm",
        "Reinforcement quantity": "150 mt",
        Span: "9 mt",
        Foundation: "Raft",
        "Time period": "4 months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720436474/Progressive/3.Infrastructure/1.Bridge/18.Shekta%20Bridge/shekta_e_ctoqef.png",
      ],
    },
    {
      id: 8,
      title: "Savitri Bridge",
      category: "Bridges, Flyovers and Aquaducts",
      hits: 1688,
      description: [
        "The bridge spans a major river Savitri in the Konkan area. The total length of the bridge is 300 mtr and the span is of concrete arches designed and then constructed by the company. The existing bridge constructed by the British is along the same alignment. The arches have enabled good aesthetics. The company has been awarded the 1st prize by Indian Institute of Bridge Engineers for this bridge at a National level.",
      ],
      project_brief: {
        "Total length": "300 mtrs",
        "Concrete quantity": "8000 cum",
        "Shuttering quantity": "12000 sqm",
        "Reinforcement quantity": "325 mt",
        Span: "9.0, 9.3 & 10.2 mtrs",
        Foundation: "Open",
        "Time period": "15 months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720436479/Progressive/3.Infrastructure/1.Bridge/19.Savitri%20Bridge/savitri_e_aszt9s.png",
      ],
    },
    {
      id: 9,
      title: "Badlapur Flyover (K.B.M.C)",
      category: "Bridges, Flyovers and Aquaducts",
      hits: 2329,
      description: [
        "The Badlapur flyover was built for the Kulgaon Badlapur Municipal Corporation. The total length of the flyover is 680 mtrs connecting the east Badlapur to the west. The horizontal curve is of S shape to accommodate the heavy gradient created at the junction of the railway bridge and the small river ie this flyover passes over two obligatory road spans and existing railway (which is again over the small river). The height at this junction is more than 10 mtrs.",
      ],
      project_brief: {
        "Total length": "680 mtrs",
        "Concrete quantity": "9500 cum",
        "Shuttering quantity": "38000 sqm",
        "Reinforcement quantity": "1200 mt",
        Foundation: "Open",
        "Time period": "12 months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720436501/Progressive/3.Infrastructure/1.Bridge/20.Badlapur%20Flyover%20%28K.B.M.C%29/WhatsApp_Image_2024-07-04_at_6.07.37_PM_n7gofs.jpg",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720436513/Progressive/3.Infrastructure/1.Bridge/20.Badlapur%20Flyover%20%28K.B.M.C%29/WhatsApp_Image_2024-07-04_at_6.07.39_PM_j4xm5z.jpg",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720436510/Progressive/3.Infrastructure/1.Bridge/20.Badlapur%20Flyover%20%28K.B.M.C%29/WhatsApp_Image_2024-07-04_at_6.07.38_PM_2_mqffze.jpg",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720436519/Progressive/3.Infrastructure/1.Bridge/20.Badlapur%20Flyover%20%28K.B.M.C%29/WhatsApp_Image_2024-07-04_at_6.07.38_PM_1_kl5pd4.jpg",
      ],
    },
    {
      id: 10,
      title: "Rajiv Gandhi Flyover, Nerul, Navi Mumbai",
      category: "Bridges, Flyovers and Aquaducts",
      hits: 2603,
      description: [
        "This bridge is 860 mtr long ROB built within Nerul node of Navi Mumbai connecting the phase 1 and phase 2 of Nerul. The typical span of the bridge is 12.5 mtr with conventional T girder design with two obligatory spans of 25 mtrs each. This bridge crosses 8 railway tracks when completed and two main roads on either side of the railway track.",
        "Anticrash barrier - first time in India was used and tested on this bridge. Now this is a common feature used on all roads and bridges of the golden quadrilateral project.",
      ],
      project_brief: {
        "Total length": "860 mtrs",
        "Concrete quantity": "6000 cum",
        "Shuttering quantity": "25000 sqm",
        "Reinforcement quantity": "900 mt",
        Span: "12.5 & 25 mtrs",
        Foundation: "Open & Piling",
        "Time period": "12 months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720436505/Progressive/3.Infrastructure/1.Bridge/21.Rajiv%20Gandhi%20Flyover%2C%20Nerul%2C%20Navi%20Mumbai/nerulfly_e_qfg9ht.png",
      ],
    },
  ];

  const infrans = [
    {
      id: 1,
      title: "Microtrol - Cobalt 66 Radiation Unit",
      category: "Nuclear Structures",
      hits: 1598,
      description: [
        "Cobalt 66 is a radioactive material used for sterilization of food materials. The construction encompassed the raw-material bay, the processing area, and the finished goods area along with office building and area developments. The most critical area was the construction of the Radiation unit. The raft is 8 mtr deep and thk is 2 mt, walls are 2 mtr thk and slab is 1.7 mtr. The concrete volume of this unit itself is more than 250 cum.",
      ],
      project_brief: {
        "Total concrete quantity": "1000 cum",
        "Total reinforcement": "140 mt",
        Duration: "6 months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720436528/Progressive/3.Infrastructure/2.Nuclear/Microtrol%20-Cobalt%2066%20Radiation%20Unit/microtrol_e_z4ly9u.png",
      ],
    },
  ];

  const inframe = [
    {
      id: 1,
      title: "Konkan Railway (Tunnel Lining Project)",
      category: "Mass Excavation & Geotechnical Projects",
      description: [
        "For all tunnels from Roha to Khed on the Konkan Railway project, certain critical patches of soft soil or fissured rock occurred within the tunnels, which were unable to resist the vibratory forces generated due to the speed of fast-moving trains and ultimately could lead to collapse. In order to avoid this, concrete lining was carried out for the arches and the walls, and guniting/shotcreting was applied to the walls/ceilings.",
      ],
      project_brief: { "Total area of the project": " " },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720436518/Progressive/3.Infrastructure/4.Mass%20Exavation/3.Konkan%20Railway%20%28Tunnel%20Lining%20Project%29/roha_e_tujuls.png",
      ],
    },
  ];

  // Special assignment customized hosing
  const speassch = [
    {
      id: 1,
      title: "Awsari Bungalow",
      category: "Customised Housing",
      description: [
        "This bungalow was built for the Abhang family at their native place in Pune district. The architectural work was based on the Gothic style. The total area of the bungalow is 8000 sft.",
      ],
      project_brief: { "Total area of the project": " " },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720503436/Progressive/3.Special%20assignment-20240709T052809Z-001/3.Special%20assignment/1.Coustomise%20Housing/3.Awsari%20Bungalow/1_004_sdwl40.jpg",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720503540/Progressive/3.Special%20assignment-20240709T052809Z-001/3.Special%20assignment/1.Coustomise%20Housing/3.Awsari%20Bungalow/1_003_a34rkq.jpg",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720503020/Progressive/3.Special%20assignment-20240709T052809Z-001/3.Special%20assignment/1.Coustomise%20Housing/3.Awsari%20Bungalow/awsari_e_zt8xte.png",
      ],
    },
    {
      id: 2,
      title: "RAAJ Bungalow",
      category: "Customised Housing",
      description: [
        "This bungalow was built for the Ramkrishnan family at New Bombay. The scope of work included all RCC work, sloping slabs, architectural RCC finishes, brickwork, plasters, doors, windows, aluminium works, high-quality finishes, and paints, etc., complete with waterproofing. The total area of the bungalow is 2500 sft.",
      ],
      project_brief: { "Total area of the project": " " },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720503022/Progressive/3.Special%20assignment-20240709T052809Z-001/3.Special%20assignment/1.Coustomise%20Housing/4.RAAJ%20Bunglow/raaj1_e_c12y6b.png",
      ],
    },
  ];

  // Special assignment interior

  const saiao = [
    {
      id: 1,
      title: "Johnson & Johnson (Interior project for Regional lab Asian Pacific)",
      category: "Interiors & Fitouts",
      description: [
        "Apart from the RCC work, the company undertakes interior projects for select clientele. The Regional Lab - Asia Pacific region interior works were carried out by the company containing high specification of flooring (natural granite, Italian marbles, marbonite), cladding, spiral staircase, aluminum windows/doors, glass doors, high-quality sanitary wares, false ceilings, various plasters, and painting. All these works were done within tight time duration and with a highly specialized workforce.",
      ],
      project_brief: {},
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720507439/Progressive/3.Special%20assignment-20240709T052809Z-001/3.Special%20assignment/2.Interior/1.%20johnson%20and%20johnson/john_e_lo4sdy.jpg",
      ],
    },
    {
      id: 2,
      title: "Siemens India HQ (Interior project for Canteen Building)",
      category: "Interiors & Fitouts",
      description: [
        "The interiors of the canteen, cafeteria, and conference rooms of the Siemens HQ of India were executed by the company. The scope included high specification of flooring (natural granite, Italian marbles, marbonite), cladding (stone tiles, granite cladding), aluminum windows/doors, glass doors, high-quality sanitary wares, false ceilings, plasters, and painting. The marbonite tiles were cut in wave pattern along with a reverse color which had to be done with an electronic theodolite and CAD drawings.",
      ],
      project_brief: {},
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720503024/Progressive/3.Special%20assignment-20240709T052809Z-001/3.Special%20assignment/2.Interior/3.Siemens%20India%20HQ%20%28Interior%20project%20for%20Canteen%20Building.%29/siemenscanteen_e_kbfbvv.jpg",
      ],
    },
  ];

  // const mbcb = [
  //   {
  //     id: 1,
  //     title: "dfasdf",
  //     description:
  //       "Irure id incididunt est ad dolor elit quis velit veniam irure Lorem.Dolore sit minim et nulla consequat officia aliqua Lorem occaecat ullamco deserunt deserunt duis.",
  //     image: mbcb1,
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem Ipsum",
  //     description:
  //       "Irure id incididunt est ad dolor elit quis velit veniam irure Lorem.Dolore sit minim et nulla consequat officia aliqua Lorem occaecat ullamco deserunt deserunt duis.",
  //     image: mbcb2,
  //   },
  // ];

  const mbcb = [
    {
      id: 1,
      title: "Sun-Magnetica Mall",
      description: [
        "This mall is designed by Sanjay Puri, the architect that specializes in Malls.",
        "The scope of work includes for shopping mall, commercial building, restaurant block and office buildings with podium and parking lots.",
      ],
      project_brief: {
        "Total area of the project": "1,50,000 sft",
        "Total storied": "G+6",
        Basement: "1 nos",
        "Area of showroom interiors": "20000 sft",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355097/Progressive/2.Muiltistored%20building/1.Commercial/1.Sun-Magnetica%20Mall/sunmagnetica_e_bldn7e.jpg",
      ],
    },
    {
      id: 2,
      title: "Siemens Car Park Tower, Bangalore",
      description: [
        "This car park tower is constructed at Electronic city on Hosur road at Bangalore infront of Infosys.",
        "The only difference in this car park is that the circular plan area has been changed to oval shape with additional lifts.",
        "The additional area so derived is used for parking of two wheelers and additional cars.",
        "This carpark is based on the success of the earlier car park tower at Worli Mumbai for the same client – Siemens.",
      ],
      project_brief: {
        "Total area of the project": "1,30,000 sft",
        RCC: "Form finish",
        "Total concrete quantity": "5500 cum",
        "Total nos of car parks": "225 nos",
        "Total nos of two wheelers": "100 nos",
        "Floor to floor height": "3.15 mtr",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355098/Progressive/2.Muiltistored%20building/1.Commercial/2.Siemens%20Car%20Park%20Tower%2C%20Bangalore/siemens_bangalore_1_e_fx1vxm.jpg",
      ],
    },
    {
      id: 3,
      title: "Siemens Car Park Tower, Worli, Mumbai",
      description: [
        "The G+7 storeyed building is only devoted for car parks and is first of its kind in India.",
        "The building rests on 14 peripheral columns with two conical hollow shear walls which in turn rests on raft foundation resting on the piles.",
        "The diameter of the building is 33 mtrs with the outer periphery used for parking car and the central portion having lift & staircase for vertical movement of persons.",
        "The space between the car park and the central portion is the driveway for up & down movement of the vehicles.",
      ],
      project_brief: {
        "Total area of the project": "90,000 sft",
        "Total area of the project": "90,000 sft",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355100/Progressive/2.Muiltistored%20building/1.Commercial/3.Siemens%20Car%20Park%20Tower%2C%20Worli%2C%20Mumbai/building_oieqvz.png",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355129/Progressive/2.Muiltistored%20building/1.Commercial/3.Siemens%20Car%20Park%20Tower%2C%20Worli%2C%20Mumbai/building1_e_purujh.png",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355101/Progressive/2.Muiltistored%20building/1.Commercial/3.Siemens%20Car%20Park%20Tower%2C%20Worli%2C%20Mumbai/siemens_worli_e_xlifyv.jpg",
      ],
    },
    {
      id: 4,
      title: "Citicorp Information Technology Ltd (CITIL)",
      description: [
        "This building is a part of the IT development center for Citicorp – world’s leading financial corporate.",
        "The job involved piling -conventional and micro-piling, pile caps, RCC framed structure, beams spanning 25 mtrs.",
        "Space constrains, working offices and conventional site mix concrete made the job difficult.",
      ],
      project_brief: {},
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355104/Progressive/2.Muiltistored%20building/1.Commercial/4.Citicorp%20Information%20Technology%20Ltd%20%28CITIL%29/citi_e_vrwg3i.jpg",
      ],
    },
  ];

  // multimode building public Heritage building

  const mbphb = [
    {
      id: 1,
      title: "Shiv Samath Smarak.",
      category: "Public Buildings",
      description: [
        "The scope of work was to construct a memorial in the memory of Shri Shivaji Maharaj. This was a design and built project awarded by JNPT.",
        "Scope of work included ",
        "Design - The scope of design was",
        "Architectural consultant - to improve on the basic design proposed by the client.",

        "Structural design consultant -design and third party vetting",

        "MEP design consultant - Designing each component and integrating it within the building.",

        "Landscaping consultant.- to improve on the landscaping aspects. ",
      ],
      project_brief: {
        "Foundation work": "Piling, Ground improvement by PVD, Earth filling and compaction etc.",
        "RCC works": "Construction of buildings, statue foundation etc.",
        "Masonry work": "Brickwork, Plaster and waterproofing",
        "Interior works": "Flooring, tiling, false ceiling, acoustic room, murals",
        "Door, Window and Facade works": "Spider glazing, Automatic doors etc.",
        "MEP works":
          "Electrical HT & LT (including liasioning, getting electrical connection to project site) ELV (including camera, fire alarm system), Passenger Lift, DG, musical fountains",
        "External development":
          "Landscaping, Road, drains, stamped concrete, amphitheater, underground pump house with water tanks, Sloping garden, compound wall and gate",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720710437/Progressive/2.Muiltistored%20building/2.Public/9.JNPT/EBO8A5119LR_as8nrn.jpg",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720710438/Progressive/2.Muiltistored%20building/2.Public/9.JNPT/EBO8A4943LR_aqhw5h.jpg",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720710437/Progressive/2.Muiltistored%20building/2.Public/9.JNPT/BO8A4795LR_qf1h5b.jpg",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720710437/Progressive/2.Muiltistored%20building/2.Public/9.JNPT/EBO8A4868LR_vimges.jpg",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720710438/Progressive/2.Muiltistored%20building/2.Public/9.JNPT/BO8A5158LR_x03ymk.jpg",
      ],
    },
    {
      id: 1,
      title: "Vashi Railway Station (Deck Slab)",
      category: "Public Buildings",
      description: [
        "This station building is basically a bridge structure given a form of a building. This entire work was already awarded to NBCC, a leading government construction company. However, to expedite the job and to get the railway into Navi Mumbai it was necessary to expedite the project and hence the job was awarded to us through re-tendering.",
        "Our scope of work included the pier and deck slab for 50% of the station building area including columns, beams, and slab. The total concrete quantity of the project was 5000 cum.",
        "The bigger slab was of the tune of 600 cum each and the smaller of 400 cum each. This entire pour of 600 cum was continuously concreted through manual means as the use of pump or ready mix concrete was not prominent at that time.",
        "More than 1000 labors were required in different shifts and the concreting process was more than 3 days at times. The work was completed in time and this structure was inaugurated by the President of India.",
      ],
      project_brief: {
        Architect: "Firoz Khodianwala",
        "Structural Consultant": "Dubon",
        Owner: "CIDCO for MTP Railways",
        "Value of Work": "Rs.300 lacs in 1991",
        "Work Competition period": "6 months",
        Concrete: "6000 M3",
        "Reinf. Steel": "F.B.E.C. 1000 MT",
        "Floor span": "25 Meter",
        "Floor beam": "550 mm (W) x 2100 mm (D)",
        "Form work & false work": "24000 M2 (Steel modular)",
        "Flooring dewatering, power float & power trowel": "Floor slab concrete finishing done by Tremix vacuum",
        "Built up area": "5000 sqft",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355107/Progressive/2.Muiltistored%20building/2.Public/1.Vashi%20Railway%20Station%20%28Deck%20Slab%29/deckslabvashistn_e_cwbx8r.jpg",
      ],
    },
    {
      id: 2,
      title: "Dr. Babasaheb Ambedkar Memorial",
      category: "Public Buildings",
      description: [
        "This is a National memorial in respect of Dr Babasaheb Ambedkar – comprising of multi-purpose building complex having auditorium, library, swimming pool, museum, banks, multiple hall, hostel buildings.",
        "The building boasts various architectural features such as polycarbonate domes, Puf ceilings, renova plasters among various others.",
      ],
      project_brief: {
        "Total area of the project": "1,80,000 sft",
        "Total concrete quantity": "14,500 cum",
        "Total reinforcement quantity": "1225 mt",
        Masonry: "8000 cum",
        Plastering: "45000 sqm",
        "Floor to floor height": "3.15 mtr",
        "Project Duration": "18 months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355109/Progressive/2.Muiltistored%20building/2.Public/2.Dr.%20Babasaheb%20Ambedkar%20Memorial/drbabasaheb_e_drvsvb.jpg",
      ],
    },
    {
      id: 3,
      title: "Loreto Convent School",
      category: "Public Buildings",
      description: [
        "This was extension work done in the initial formation years of the company. The scope of work included the addition of the classroom from ground floor to the first floor.",
        "The scope was not huge but still important to be mentioned here as these were initial projects which were the founding stones of the company.",
      ],
      project_brief: {
        // Project brief details can be added here if available
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355115/Progressive/2.Muiltistored%20building/2.Public/4.Loreto%20Convent%20School/loreto_e_polxsl.png",
      ],
    },
    {
      id: 4,
      title: "Georai Hospital",
      category: "Public Buildings",
      description: [
        "This is a 150 bedded hospital constructed in Georai in Marathwada region near Beed.",
        "The scope of work included construction of OPD (Out patients department), Operation Theaters -2 nos, IPD, Pediatric wards, X-Ray rooms, Male and Female wards, special wards and other various other structures.",
        "This is a ground floor structure however spread over a vast area.",
      ],
      project_brief: {
        // Project brief details can be added here if available
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355118/Progressive/2.Muiltistored%20building/2.Public/6.Georai%20Hospital/georai_e_rsqp0a.png",
      ],
    },
    {
      id: 5,
      title: "Maharaja Agrasen Bhavan",
      category: "Public Buildings",
      description: [
        "This is a Memorial Bhavan in respect of Maharaja Agrasen – comprising of multi-purpose building complex having Maharaja Agrasen Hall, A/C multi-purpose hall, Dining hall, Three star hostel buildings of 32 A/C rooms with attached toilet and bathroom, Two separate common toilets for Gents and Ladies.",
        "The building boasts various architectural features such as polycarbonate domes, Huge passages, Puf ceilings, Jaisalmer cladding for outside face of wall among various others.",
      ],
      project_brief: {
        "Total area of the project": "60,000 sft",
        "Total storied": "G +2 nos",
        Basement: "1 nos (partial)",
        "Total concrete quantity": "3000 cum",
        "Total reinforcement": "180 mt",
        "Structural steel": "85 mt",
        "Portal section": "ISMB 450, 72.5 kg per mtr. (25 mtr long)",
        Masonry: "1250 cum",
        Plastering: "15000 sqm",
        "Total area of plot": "2 acres",
        "Floor to floor height": "4 mtr",
        Duration: "12 months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355112/Progressive/2.Muiltistored%20building/2.Public/3.Maharaja%20Agrasen%20Bhavan/agrasen_e_vcwqnb.jpg",
      ],
    },
    {
      id: 6,
      title: "Roha Temple",
      category: "Public Buildings",
      description: [
        "The podium for the temple is constructed for a temple located at Roha, Maharashtra.",
        "The scope of work included excavation, RCC works, and finishing items of high standards.",
      ],
      project_brief: {
        // Project brief details can be added here if available
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355126/Progressive/2.Muiltistored%20building/2.Public/7.Roha%20Temple/roha_e_ldwojb.png",
      ],
    },
  ];

  const mbrp = [
    {
      id: 1,
      title: "Chaitanya Tower, Worli, Mumbai",
      category: "Residential Projects",
      description: [
        "This residential tower is located at Worli near the famous Siddivinayak temple. This building is ground +23 floor and two floors in the basement for car parking. The total height of the building is 100 mtr. The huge basement for car park holds about 1500 cars.",
        "The 22 and 23 floor houses duplex houses. The lift machine room and the overhead water tank is placed within an architectural feature which gives a pleasing look to the building.",
        "There is also a balcony at the ninth floor that protrudes beyond the building face for more than 6 mtrs. Apart from this, there are other beams and architectural pardis at various heights which were difficult for construction. The typical slab was cast at the rate of two slabs per month using conventional shuttering and using lift for lifting the concrete.",
      ],
      project_brief: {
        "Total area of the project": "2,00,000 sft",
        "Total storied": "23 nos",
        Basement: "2 nos",
        "Total concrete quantity": "11000 cum",
        "Total reinforcement": "900 mt",
        "Floor to floor height": "3.0 mtr",
        "Total height": "90 mtr",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355124/Progressive/2.Muiltistored%20building/3.Residential/1.Chaitanya%20Tower%2C%20Worli%2C%20Mumbai/chaitanya_tower-prabhadevi-mumbai-chaitanya_cs3zly.avif",
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355122/Progressive/2.Muiltistored%20building/3.Residential/1.Chaitanya%20Tower%2C%20Worli%2C%20Mumbai/Chaitanya_prabhadevi-Mumbai_ky3gdz.avif",
      ],
    },
    {
      id: 2,
      title: "Rekab Tower",
      category: "Residential Projects",
      description: [
        "This elegant G+ 12 storey residential tower is located in the heart of Mumbai area. The scope of work included excavation, RCC, siporex block masonary, plaster, flooring, painting, plumbing etc. Due to light weight blocks the RCC quantities had drastically reduced making the structure a sleek structure.",
      ],
      project_brief: {
        "Total area of the project": "90,000 sft",
        "Concrete quantity": "2500 cum",
        "Siporex blocks quantity": "15,00,000 nos",
        "Time period": "15 months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355137/Progressive/2.Muiltistored%20building/3.Residential/2.Rekab%20Tower/rekab_e_utungg.png",
      ],
    },
    {
      id: 3,
      title: "Vigyanic Co op. Hsg Society",
      category: "Residential Projects",
      description: [
        "This G + 7 floor residential building located in the heart of Navi Mumbai and has been one of the earliest structures completed during those times. The society houses the scientists of the Tata Institute of Fundamental Research and hence the monitoring of the quality was done through minute details by the scientists.",
      ],
      project_brief: {
        "Total area of the project": "65,000 sft",
        "Time period": "15 months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355141/Progressive/2.Muiltistored%20building/3.Residential/3.Vigyanic%20Co%20op.%20Hsg%20Society/vigyan_e_mwkpnc.png",
      ],
    },
    {
      id: 4,
      title: "Sun Crest Residential Tower",
      category: "Residential Projects",
      description: [
        "This elegant G+ 7 storey residential tower is located at Thane near Sun Magnetica mall. The scope of work included excavation, RCC, masonry, and plaster.",
      ],
      project_brief: {
        "Total area of the project": "45,000 sft",
        "Time Period": "12 months",
      },
      image: [
        "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720355143/Progressive/2.Muiltistored%20building/3.Residential/4.Sun%20Crest%20Residential%20Tower/suncrest_e_clefug.png",
        "image_link2",
      ],
    },
  ];

  function truncateDescription(description, maxLength) {
    // console.log(description.length)
    if (description.length <= maxLength) {
      return description;
    } else {
      const truncatedText = description.substring(0, maxLength);
      const lastSpaceIndex = truncatedText.lastIndexOf(" ");
      return truncatedText.substring(0, lastSpaceIndex) + "...";
    }
  }

  return (
    <div>
      <section class="section-5 projsection" name="section-projects" id="section-projects">
        <div class="heading">
          <h1>Projects</h1>
        </div>
        <div class="row">
          <figure class="figure" onClick={() => handleCardClick("industrial")}>
            <img
              src="https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720778837/Progressive/project/industrialBuildings_njoxap.jpg"
              alt=""
            />
            <figcaption>
              <div class="icon">
                <span>
                  <ion-icon name="images"></ion-icon>
                </span>
              </div>
              <h2>
                Industrial <span>Buildings</span>
              </h2>
              <div class="caption">
                <p>View</p>
              </div>
            </figcaption>
            <a href="#"></a>
          </figure>

          <figure class="figure" onClick={() => handleCardClick("multistored")}>
            <img
              src="https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720778832/Progressive/project/Commercial_Buildings_Residential_Projects_q4bnhg.jpg"
              alt=""
            />
            <figcaption>
              <div class="icon">
                <span>
                  <ion-icon name="images"></ion-icon>
                </span>
              </div>
              <h2>
                Multistored <span>Buildings</span>
              </h2>
              <div class="caption">
                <p>View</p>
              </div>
            </figcaption>
            <a href="#"></a>
          </figure>

          <figure class="figure" onClick={() => handleCardClick("infrastructures")}>
            <img
              src="https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720778834/Progressive/project/Infrastructures_bridges_flyovers_and_auqaducts_hh4hdq.jpg"
              alt=""
            />
            <figcaption>
              <div class="icon">
                <span>
                  <ion-icon name="images"></ion-icon>
                </span>
              </div>
              <h2>
                {" "}
                <span>Infrastructure</span>
              </h2>
              <div class="caption">
                <p>View</p>
              </div>
            </figcaption>
            <a href="#"></a>
          </figure>

          <figure class="figure" onClick={() => handleCardClick("specialAssignments")}>
            <img
              src="https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720778833/Progressive/project/interior_fitouts_repair_renovation_xqfi0u.jpg"
              alt=""
            />
            <figcaption>
              <div class="icon">
                <span>
                  <ion-icon name="images"></ion-icon>
                </span>
              </div>
              <h2>
                Special <span>Assignments</span>
              </h2>
              <div class="caption">
                <p>View</p>
              </div>
            </figcaption>
            <a href="#"></a>
          </figure>
        </div>
      </section>

      {activeSection === "industrial" && (
        <section className="section-6 projsection" id="section-industrial" name="section-industrial">
          <div className="heading">
            <h1>Industrial Buildings</h1>
          </div>
          <div className="industrialfilters">
            <div
              className={activeFilter === "Engineering Structures" ? "active" : ""}
              onClick={() => handleFilterChange("Engineering Structures")}
            >
              Engineering Structures
            </div>
            <div
              className={activeFilter === "Food and Pharma" ? "active" : ""}
              onClick={() => handleFilterChange("Food and Pharma")}
            >
              Food and Pharma
            </div>

            <div
              className={activeFilter === "Oil Heavy Engineering" ? "active" : ""}
              onClick={() => handleFilterChange("Oil & Gas, Heavy Engineering")}
            >
              Heavy Engineering
            </div>

            <div
              className={activeFilter === "Logistics" ? "active" : ""}
              onClick={() => handleFilterChange("Logistics")}
            >
              Logistics
            </div>
          </div>
          <div className="row">
            {activeFilter === "Engineering Structures" && (
              <>
                {indes.map((product) => (
                  <figure className="figure" key={product.id} onClick={() => handleProductClick(product)}>
                    {/* <figure className="figure"> */}
                    <img src={product.image[0]} alt="" />
                    <figcaption>
                      <h3>{product.title}</h3>
                      <p>{truncateDescription(product.description, 100)}</p>
                    </figcaption>
                    {/* </figure> */}
                  </figure>
                ))}
              </>
            )}

            {activeFilter === "Food and Pharma" && (
              <>
                {indfap.map((product) => (
                  <figure className="figure" key={product.id} onClick={() => handleProductClick(product)}>
                    {/* <figure className="figure"> */}
                    <img src={product.image} alt="" />
                    <figcaption>
                      <h3>{product.title}</h3>
                      <p>{truncateDescription(product.description, 100)}</p>
                    </figcaption>
                    {/* </figure> */}
                  </figure>
                ))}
              </>
            )}
            {/* Add similar conditional rendering for other filter options */}

            {activeFilter === "Oil & Gas, Heavy Engineering" && (
              <>
                {indogh.map((product) => (
                  <figure className="figure" key={product.id} onClick={() => handleProductClick(product)}>
                    {/* <figure className="figure"> */}
                    <img src={product.image} alt="" />
                    <figcaption>
                      <h3>{product.title}</h3>
                      <p>{truncateDescription(product.description, 100)}</p>
                    </figcaption>
                    {/* </figure> */}
                  </figure>
                ))}
              </>
            )}

            {activeFilter === "Logistics" && (
              <>
                {indlog.map((product) => (
                  <figure className="figure" key={product.id} onClick={() => handleProductClick(product)}>
                    {/* <figure className="figure"> */}
                    <img src={product.image} alt="" />
                    <figcaption>
                      <h3>{product.title}</h3>
                      <p>{truncateDescription(product.description, 100)}</p>
                    </figcaption>
                    {/* </figure> */}
                  </figure>
                ))}
              </>
            )}
          </div>
        </section>
      )}

      {activeSection === "infrastructures" && (
        <section className="section-6 projsection" id="section-infrastructures" name="section-infrastructures">
          <div className="heading">
            <h1>Infrastructures</h1>
          </div>
          <div className="infrastructureFilters">
            <div
              className={activeFilterInfrastructure === "Bridges, Flyovers and Aqueducts" ? "active" : ""}
              onClick={() => handlFilterChangeInfrasture("Bridges, Flyovers and Aqueducts")}
            >
              Bridges, Flyovers and Aqueducts
            </div>
            <div
              className={activeFilterInfrastructure === "Nuclear Structures" ? "active" : ""}
              onClick={() => handlFilterChangeInfrasture("Nuclear Structures")}
            >
              Nuclear Structures
            </div>
            <div
              className={activeFilterInfrastructure === "Water Supply & Sewage Treatment" ? "active" : ""}
              onClick={() => handlFilterChangeInfrasture("Water Supply & Sewage Treatment")}
            >
              Water Supply & Sewage Treatment
            </div>
            <div
              className={activeFilterInfrastructure === "Mass Excavation & Geotechnical Projects" ? "active" : ""}
              onClick={() => handlFilterChangeInfrasture("Mass Excavation & Geotechnical Projects")}
            >
              Mass Excavation & Geotechnical Projects
            </div>
          </div>
          <div className="row">
            {activeFilterInfrastructure === "Bridges, Flyovers and Aqueducts" && (
              <>
                {infrabfa.map((product) => (
                  <figure className="figure" key={product.id} onClick={() => handleProductClick(product)}>
                    {/* <figure className="figure"> */}
                    <img src={product.image[0]} alt="" />
                    <figcaption>
                      <h3>{product.title}</h3>
                      <p>{truncateDescription(product.description, 100)}</p>
                    </figcaption>
                    {/* </figure> */}
                  </figure>
                ))}
              </>
            )}
            {activeFilterInfrastructure === "Nuclear Structures" && (
              <>
                {infrans.map((product) => (
                  <figure className="figure" key={product.id} onClick={() => handleProductClick(product)}>
                    {/* <figure className="figure"> */}
                    <img src={product.image[0]} alt="" />
                    <figcaption>
                      <h3>{product.title}</h3>
                      <p>{truncateDescription(product.description, 100)}</p>
                    </figcaption>
                    {/* </figure> */}
                  </figure>
                ))}
              </>
            )}
            {activeFilterInfrastructure === "Mass Excavation & Geotechnical Projects" && (
              <>
                {inframe.map((product) => (
                  <figure className="figure" key={product.id} onClick={() => handleProductClick(product)}>
                    {/* <figure className="figure"> */}
                    <img src={product.image[0]} alt="" />
                    <figcaption>
                      <h3>{product.title}</h3>
                      <p>{truncateDescription(product.description, 100)}</p>
                    </figcaption>
                    {/* </figure> */}
                  </figure>
                ))}
              </>
            )}
            {/* Add similar conditional rendering blocks for other filter options */}
          </div>
        </section>
      )}

      {activeSection === "specialAssignments" && (
        <section class="section-6 projsection" id="section-specialAssignments" name="section-specialAssignments">
          <div class="heading">
            <h1>Special Assignments</h1>
          </div>

          <div className="industrialfilters">
            <div
              className={activeFilter === "Customized Housing" ? "active" : ""}
              onClick={() => handlFilterChangeSpecialAssignments("Customized Housing")}
            >
              Customized Housing
            </div>
            <div
              className={activeFilter === "Interior and Fitouts" ? "active" : ""}
              onClick={() => handlFilterChangeSpecialAssignments("Interior and Fitouts")}
            >
              Interior and Fitouts
            </div>
            <div
              className={activeFilter === "Repair and Renovation" ? "active" : ""}
              onClick={() => handlFilterChangeSpecialAssignments("Repair and Renovation")}
            >
              Repair and Renovation
            </div>
          </div>

          <div className="row">
            {activeFilterSpecialAssignments === "Customized Housing" && (
              <>
                {speassch.map((product) => (
                  <figure className="figure" key={product.id} onClick={() => handleProductClick(product)}>
                    {/* <figure className="figure"> */}
                    <img src={product.image[0]} alt="" />
                    <figcaption>
                      <h3>{product.title}</h3>
                      <p>{truncateDescription(product.description, 100)}</p>
                    </figcaption>
                    {/* </figure> */}
                  </figure>
                ))}
              </>
            )}

            {activeFilterSpecialAssignments === "Interior and Fitouts" && (
              <>
                {saiao.map((product) => (
                  <figure className="figure" key={product.id} onClick={() => handleProductClick(product)}>
                    {/* <figure className="figure"> */}
                    <img src={product.image[0]} alt="" />
                    <figcaption>
                      <h3>{product.title}</h3>
                      <p>{truncateDescription(product.description, 100)}</p>
                    </figcaption>
                    {/* </figure> */}
                  </figure>
                ))}
              </>
            )}
          </div>
        </section>
      )}

      {activeSection === "multistored" && (
        <section class="section-6 projsection" id="section-multistored" name="section-multistored">
          <div class="heading">
            <h1>Multistored Buildings</h1>
          </div>

          <div className="industrialfilters">
            <div
              className={activeFilter === "Cummercial Buildings" ? "active" : ""}
              onClick={() => handlFilterChangeMultistoredBuilding("Cummercial Buildings")}
            >
              Cummercial Buildings
            </div>
            <div
              className={activeFilter === "Public Heritage Buildings" ? "active" : ""}
              onClick={() => handlFilterChangeMultistoredBuilding("Public Heritage Buildings")}
            >
              Public Heritage Buildings
            </div>
            <div
              className={activeFilter === "Residential Projects" ? "active" : ""}
              onClick={() => handlFilterChangeMultistoredBuilding("Residential Projects")}
            >
              Residential Projects
            </div>
          </div>

          <div className="row">
            {activeFilterMultistoredBuilding === "Cummercial Buildings" && (
              <>
                {mbcb.map((product) => (
                  <figure className="figure" key={product.id} onClick={() => handleProductClick(product)}>
                    {/* <figure className="figure"> */}
                    <img src={product.image[0]} alt="" />
                    <figcaption>
                      <h3>{product.title}</h3>
                      <p>{truncateDescription(product.description, 100)}</p>
                    </figcaption>
                    {/* </figure> */}
                  </figure>
                ))}
              </>
            )}

            {activeFilterMultistoredBuilding === "Public Heritage Buildings" && (
              <>
                {mbphb.map((product) => (
                  <figure className="figure" key={product.id} onClick={() => handleProductClick(product)}>
                    {/* <figure className="figure"> */}
                    <img src={product.image[0]} alt="" />
                    <figcaption>
                      <h3>{product.title}</h3>
                      <p>{truncateDescription(product.description, 100)}</p>
                    </figcaption>
                    {/* </figure> */}
                  </figure>
                ))}
              </>
            )}

            {activeFilterMultistoredBuilding === "Residential Projects" && (
              <>
                {mbrp.map((product) => (
                  <figure className="figure" key={product.id} onClick={() => handleProductClick(product)}>
                    <img src={product.image[0]} alt="" />
                    <figcaption>
                      <h3>{product.title}</h3>
                      <p>{truncateDescription(product.description, 100)}</p>
                    </figcaption>
                  </figure>
                ))}
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Projects;
