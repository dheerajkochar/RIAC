// Complete Professor Database - All 4 Departments
// Unique Fields: cs-ai, cs-systems, cs-security, ece-wireless, ece-vlsi, ece-optical, ece-signal, chem-separation, chem-green, chem-energy, chem-nano, civil-hydraulics, civil-structural, civil-geotech, civil-planning, civil-environment

const professorsData = [
    // ==================== COMPUTER SCIENCE & ENGINEERING ====================
    // CS Professors - AI & ML Focus
    {
        id: 1,
        name: "Dr. Devesh C. Jinwala",
        role: "Professor (HAG)",
        dept: "Computer Science & Engineering",
        fields: ["cs-security", "cs-ai", "cs-systems"],
        tags: ["Information Security", "Machine Learning", "Software Security"],
        bio: "Research in Information Security & Privacy Issues in Resource Constrained Environments, Machine Learning Applications in Security, Software Security; Secure Software Engineering.",
        email: "dcj@svnit.ac.in",
        phone: "0261-2201614",
        avatar: 1
    },
    {
        id: 2,
        name: "Dr. Dhiren R. Patel",
        role: "Professor (HAG)",
        dept: "Computer Science & Engineering",
        fields: ["cs-security", "cs-systems", "cs-ai"],
        tags: ["Information Security", "Blockchain", "DLT", "AI for Global Good"],
        bio: "Expert in Information Security, Blockchain and Distributed Ledger Technology, AI for Global Good applications.",
        email: "dhiren@coed.svnit.ac.in",
        phone: "0261-2201613",
        avatar: 2
    },
    {
        id: 3,
        name: "Dr. Mukesh A. Zaveri",
        role: "Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-ai", "cs-systems", "ece-signal"],
        tags: ["Computer Vision", "Image Processing", "Machine Learning", "Wireless Sensor Networks"],
        bio: "Research in Computer Vision, Image Processing, Machine Learning & Soft Computing, Wireless Sensor Network Tracking and Localization.",
        email: "mazaveri@coed.svnit.ac.in",
        phone: "9427581925",
        avatar: 3
    },
    {
        id: 4,
        name: "Dr. Ritu Tiwari",
        role: "Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-ai", "cs-systems", "cs-systems"],
        tags: ["Robotics", "Artificial Intelligence", "Swarm Intelligence", "Deep Learning"],
        bio: "Expertise in Robotics, Artificial intelligence, Swarm Intelligence, Machine learning, Deep learning.",
        email: "ritutiwari@coed.svnit.ac.in",
        phone: "0261-2201610",
        avatar: 4
    },
    {
        id: 5,
        name: "Dr. Rupa G. Mehta",
        role: "Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-systems", "cs-ai", "cs-ai"],
        tags: ["Database Management Systems", "Data Mining", "Fuzzy Classification"],
        bio: "Expert in Database Management Systems, Advance Data Structure, Data Mining, Fuzzy Classification and discretization.",
        email: "rgm@coed.svnit.ac.in",
        phone: "9427113814",
        avatar: 5
    },
    // CS Associate Professors
    {
        id: 6,
        name: "Dr. Bhavesh N. Gohil",
        role: "Associate Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-systems", "cs-security", "cs-systems"],
        tags: ["Compiler Design", "Cloud Computing", "Edge Computing", "Network Security"],
        bio: "Specializes in Compiler Design, Distributed/Cloud/Fog/Edge Computing, Distributed System, Information/Network Security.",
        email: "bng@coed.svnit.ac.in",
        phone: "0261-2201623",
        avatar: 6
    },
    {
        id: 7,
        name: "Dr. Dipti P. Rana",
        role: "Associate Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-ai", "cs-ai", "cs-systems"],
        tags: ["Big Data Analytics", "Data Mining", "Machine Learning", "Recommendation Systems"],
        bio: "Research in Big Data Analytics, Data Mining, Imbalanced Data Mining, Machine Learning, Information Extraction, Recommendation System.",
        email: "dpr@coed.svnit.ac.in",
        phone: "9601286741",
        avatar: 7
    },
    {
        id: 8,
        name: "Dr. Sankita J. Patel",
        role: "Associate Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-security", "ece-wireless", "cs-systems"],
        tags: ["Information Security", "IoT", "Cyber Physical Systems", "Blockchain", "Privacy"],
        bio: "Expert in Information Security and Privacy, Online Social Networks, Cyber Physical Systems/Internet of Things, Blockchain Technology.",
        email: "sjp@coed.svnit.ac.in",
        phone: "0261-2201622",
        avatar: 8
    },
    {
        id: 9,
        name: "Shri. R. P. Gohil",
        role: "Associate Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-systems", "cs-systems", "ece-signal"],
        tags: ["Image and Video Processing", "Multi-core Programming", "System Programming"],
        bio: "Specializes in Image and Video Processing, Multi-core Programming and Optimization, System Programming, Advanced Computer Architecture.",
        email: "rpg@coed.svnit.ac.in",
        phone: "9925207016",
        avatar: 9
    },
    // CS Assistant Professors
    {
        id: 10,
        name: "Dr. Krupa N. Jariwala",
        role: "Assistant Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-ai", "cs-ai", "cs-ai"],
        tags: ["Machine Learning", "Deep Learning", "Neural Networks"],
        bio: "Specializes in Machine Learning and Deep Learning applications and research.",
        email: "knj@coed.svnit.ac.in",
        phone: "9687619996",
        avatar: 10
    },
    {
        id: 11,
        name: "Dr. Balu L. Parne",
        role: "Assistant Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-security", "ece-wireless", "cs-ai"],
        tags: ["Information Security", "IoT", "Cyber Physical Systems", "ML for Security"],
        bio: "Research in Information Security and Privacy, Internet of Things/Cyber Physical Systems, Machine Learning for Security.",
        email: "blparne@coed.svnit.ac.in",
        phone: "9422448729",
        avatar: 11
    },
    {
        id: 12,
        name: "Dr. Chandra Prakash",
        role: "Assistant Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-ai", "cs-systems", "cs-ai"],
        tags: ["Artificial Intelligence", "Motion Analysis", "Robotics", "Deep Learning", "NLP"],
        bio: "Expert in Artificial Intelligence, Motion Analysis, Robotics, Machine Learning, Deep Learning, Healthcare and NLP.",
        email: "cprakash@coed.svnit.ac.in",
        phone: "7568599806",
        avatar: 12
    },
    {
        id: 13,
        name: "Dr. Keyur Parmar",
        role: "Assistant Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-security", "cs-systems", "ece-wireless"],
        tags: ["Cyber Security", "Cryptography", "Network Security", "WSN", "Blockchain"],
        bio: "Expert in Cyber Security and Information Security, Cryptography and Network Security, Blockchain and Distributed Ledger Technology.",
        email: "keyur@coed.svnit.ac.in",
        phone: "0261-2201625",
        avatar: 13
    },
    {
        id: 14,
        name: "Dr. Alok Kumar",
        role: "Assistant Professor",
        dept: "Computer Science & Engineering",
        fields: ["ece-wireless", "ece-wireless", "cs-security"],
        tags: ["Wireless Sensor Networks", "IoT", "Information Security", "Blockchain"],
        bio: "Research in Wireless Sensor Networks, IoT, Information/Network Security, Blockchain.",
        email: "akumar@coed.svnit.ac.in",
        phone: "8728825877",
        avatar: 14
    },
    {
        id: 15,
        name: "Dr. Abhilasha Chaudhuri",
        role: "Assistant Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-ai", "cs-systems", "cs-ai"],
        tags: ["Machine Learning", "Feature Engineering", "Dimensionality Reduction", "Meta-heuristic Optimization"],
        bio: "Specializes in Machine Learning, Feature Engineering, Dimensionality Reduction, Meta-heuristic Optimization, Classification of High-dimensional datasets.",
        email: "abhilasha@coed.svnit.ac.in",
        phone: "9752691565",
        avatar: 15
    },
    {
        id: 16,
        name: "Dr. Anugrah Jain",
        role: "Assistant Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-systems", "cs-ai", "cs-systems"],
        tags: ["Advanced Computer Architecture", "High-Performance Computing", "Parallel Computing", "Deep Learning"],
        bio: "Expert in Advanced Computer Architecture, High-Performance Computing, Parallel Computing, Machine Learning, Deep Learning.",
        email: "ajain@coed.svnit.ac.in",
        phone: "9461030669",
        avatar: 16
    },
    {
        id: 17,
        name: "Dr. Naveen Kumar",
        role: "Assistant Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-systems", "cs-security", "cs-ai"],
        tags: ["Named Data Networking", "Network Security", "P2P Computing", "Machine Learning"],
        bio: "Research in Named Data Networking, Network Security, P2P computing, Machine Learning, Meta-heuristics.",
        email: "naveenkumar@coed.svnit.ac.in",
        phone: "7275473622",
        avatar: 17
    },
    {
        id: 18,
        name: "Dr. Vishesh P. Gaikwad",
        role: "Assistant Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-security", "cs-ai", "cs-ai"],
        tags: ["Information Security", "Healthcare Systems", "Privacy Preserving", "Deep Learning"],
        bio: "Expert in Information Security, Authentication and Key Agreement protocols in Telecare Medicine information system, Privacy Preserving in E-Healthcare.",
        email: "vgaikwad@coed.svnit.ac.in",
        phone: "9579405173",
        avatar: 18
    },
    {
        id: 19,
        name: "Dr. Anirban Bhattacharjee",
        role: "Assistant Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-ai", "cs-ai", "cs-systems"],
        tags: ["Quantum Circuits", "Reversible Circuits", "Quantum Machine Learning"],
        bio: "Specializes in Design and Optimization of Quantum Circuits, Testing of Reversible Circuits, Quantum Machine Learning.",
        email: "anirban@coed.svnit.ac.in",
        phone: "9903380626",
        avatar: 19
    },
    {
        id: 20,
        name: "Dr. Sourajit Behera",
        role: "Assistant Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-ai", "cs-ai", "ece-wireless"],
        tags: ["Predictive Maintenance", "Prognostics and Health Management", "Industry 4.0", "AIoT", "Deep Learning"],
        bio: "Research in Predictive Maintenance, Prognostics and Health Management, Industry 4.0, Artificial Intelligence of Things, Deep Learning.",
        email: "sourajit@coed.svnit.ac.in",
        phone: "7292811677",
        avatar: 20
    },
    {
        id: 21,
        name: "Dr. Siba Sankar Sahu",
        role: "Assistant Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-ai", "cs-ai", "cs-systems"],
        tags: ["Natural Language Processing", "Information Retrieval", "Machine Learning", "Deep Learning"],
        bio: "Expert in Natural language processing, Information Retrieval, Machine learning and deep learning and application to information retrieval.",
        email: "siba.sankar222@gmail.com",
        phone: "9793096369",
        avatar: 21
    },
    {
        id: 22,
        name: "Dr. Shrikant Malviya",
        role: "Assistant Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-ai", "cs-ai", "cs-systems"],
        tags: ["Natural Language Processing", "Misinformation Detection", "Indic Languages"],
        bio: "Specializes in Natural Language Processing, Misinformation Detection, Applications on Indic Languages.",
        email: "shrikant@coed.svnit.ac.in",
        phone: "9451851905",
        avatar: 22
    },
    {
        id: 23,
        name: "Dr. Abhinav Malviya",
        role: "Assistant Professor",
        dept: "Computer Science & Engineering",
        fields: ["cs-systems", "cs-ai", "cs-systems"],
        tags: ["Robotics", "Crowd Simulation", "Autonomous Vehicle Navigation", "Artificial Intelligence"],
        bio: "Expert in Robotics, Crowd Simulation, Autonomous Vehicle Navigation, Artificial Intelligence.",
        email: "abhinav@coed.svnit.ac.in",
        phone: "9792578287",
        avatar: 23
    },

    // ==================== CHEMICAL ENGINEERING ====================
    // Chemical Engineering Professors
    {
        id: 24,
        name: "Dr. Z. V. P. Murthy",
        role: "Professor (HAG)",
        dept: "Chemical Engineering",
        fields: ["chem-separation", "chem-nano", "chem-green"],
        tags: ["Wastewater Treatment", "Nanoscience", "Nanotechnology", "Separation Processes"],
        bio: "Research in Wastewater Treatment, Separation Processes (membrane separations, Adsorption, Electrocoagulation), Nanoscience/Nanotechnology.",
        email: "zvpm@ched.svnit.ac.in",
        phone: "0261-2201643",
        avatar: 24
    },
    {
        id: 25,
        name: "Dr. P. A. Parikh",
        role: "Professor (HAG)",
        dept: "Chemical Engineering",
        fields: ["chem-green", "chem-energy", "chem-green"],
        tags: ["Catalysis", "Refining", "Petrochemical Processes", "Biofuels"],
        bio: "Expert in Catalysis in Refining and Petrochemical Processes, Fuels, Biofuels and related research.",
        email: "pap@ched.svnit.ac.in",
        phone: "0261-2201644",
        avatar: 25
    },
    {
        id: 26,
        name: "Dr. M. Chakraborty",
        role: "Professor",
        dept: "Chemical Engineering",
        fields: ["chem-green", "chem-nano", "chem-separation"],
        tags: ["Green Chemistry", "Nanomaterials", "Separation Processes", "Ionic Liquids"],
        bio: "Expert in Green Chemistry (Ionic Liquid, Microwave synthesis), Separation Processes, Nanomaterials (Synthesis and application).",
        email: "mch@ched.svnit.ac.in",
        phone: "0261-2201646",
        avatar: 26
    },
    {
        id: 27,
        name: "Dr. Jigisha Kamal Parikh",
        role: "Professor",
        dept: "Chemical Engineering",
        fields: ["chem-energy", "chem-energy", "chem-green"],
        tags: ["Energy & Environment", "Energy Efficiency", "Waste to Energy", "Process Design"],
        bio: "Research in Energy & Environment, Energy Conservation and Efficiency Upgradation, Waste to Energy, Process Design & Evaluation, Environment Audit.",
        email: "jkp@ched.svnit.ac.in",
        phone: "9998007325",
        avatar: 27
    },
    {
        id: 28,
        name: "Dr. Meghal A. Desai",
        role: "Professor",
        dept: "Chemical Engineering",
        fields: ["chem-green", "chem-energy", "chem-green"],
        tags: ["Process Intensification", "Biomass Chemistry", "Neoteric Solvents", "Waste Valorization"],
        bio: "Expert in Process intensified approach in Chemical and Allied Technology, Chemicals derived from biomass, Application of Neoteric solvents, Waste valorization.",
        email: "desai_ma@yahoo.com",
        phone: "0261-2201649",
        avatar: 28
    },
    {
        id: 29,
        name: "Dr. V. N. Lad",
        role: "Professor",
        dept: "Chemical Engineering",
        fields: ["chem-nano", "chem-nano", "chem-separation"],
        tags: ["Interfacial Engineering", "Microfluidics", "Nanomaterials", "Thin Films", "Complex Fluids"],
        bio: "Research in Interfacial Engineering, Microfluidics, Complex Fluids, Soft Materials, Nanomaterials, Langmuir Monolayer.",
        email: "vnl@ched.svnit.ac.in",
        phone: "0261-2201641",
        avatar: 29
    },
    {
        id: 30,
        name: "Dr. Sanjay R. Patel",
        role: "Professor",
        dept: "Chemical Engineering",
        fields: ["chem-nano", "chem-green", "chem-separation"],
        tags: ["Microfluidics", "Nanomedicine", "Drug Delivery", "Process Intensification"],
        bio: "Specializes in Microfluidics, Nano medicine, Drug Delivery systems, Process intensification using microreactors, Quality by Design in Pharmaceutics.",
        email: "srp@ched.svnit.ac.in",
        phone: "0261-2201654",
        avatar: 30
    },
    {
        id: 31,
        name: "Dr. A. K. Mungray",
        role: "Professor",
        dept: "Chemical Engineering",
        fields: ["chem-separation", "chem-separation", "chem-green"],
        tags: ["Wastewater Treatment", "Sludge Treatment", "Aerobic Processes", "Anaerobic Processes"],
        bio: "Expert in Wastewater Treatment (biological treatment), sludge treatment, aerobic, anaerobic processes.",
        email: "akm@ched.svnit.ac.in",
        phone: "0261-2201653",
        avatar: 31
    },
    {
        id: 32,
        name: "Dr. Jignasa V. Gohel",
        role: "Professor",
        dept: "Chemical Engineering",
        fields: ["chem-nano", "chem-nano", "chem-energy"],
        tags: ["Advanced Thin Film Solar Cells", "Nanomaterials", "Nanocomposite", "Nanocatalytic Degradation"],
        bio: "Research in Advanced thin film Solar cells, Nanomaterials/Nanocomposite, Nanocatalytic degradation.",
        email: "sjn@ched.svnit.ac.in",
        phone: "0261-2201651",
        avatar: 32
    },
    {
        id: 33,
        name: "Dr. (Mrs.) Alka A. Mungray",
        role: "Professor",
        dept: "Chemical Engineering",
        fields: ["chem-separation", "chem-separation", "chem-separation"],
        tags: ["Membrane Separation Process", "Membrane Bio Reactor", "Wastewater Treatment"],
        bio: "Expert in Membrane separation process, Membrane bio reactor and wastewater treatment.",
        email: "bag@ched.svnit.ac.in",
        phone: "0261-2201652",
        avatar: 33
    },
    // Chemical Engineering - Associate Professors
    {
        id: 34,
        name: "Dr. Chetan M. Patel",
        role: "Associate Professor",
        dept: "Chemical Engineering",
        fields: ["chem-nano", "chem-nano", "chem-separation"],
        tags: ["Nanomaterials Production", "DEM Simulations", "Molecular Simulation", "Advanced Separation"],
        bio: "Expert in large scale nanomaterials production, Nanomaterials for Industrial minerals, pigments, lithium-ion batteries, 2D Materials.",
        email: "cmp@ched.svnit.ac.in",
        phone: "0261-2201648",
        avatar: 34
    },
    {
        id: 35,
        name: "Dr. Arun Kumar Jana",
        role: "Associate Professor",
        dept: "Chemical Engineering",
        fields: ["chem-green", "chem-separation", "chem-energy"],
        tags: ["CFD Modeling", "Multiphase Flows", "Drag Reduction", "Heterogeneous Catalysis"],
        bio: "Research in CFD Based Modelling and Simulation, Liquid-liquid and gas-liquid multiphase flows, Drag Reduction in Pipeline Transportation.",
        email: "akj@ched.svnit.ac.in",
        phone: "9574000192",
        avatar: 35
    },
    {
        id: 36,
        name: "Dr. G. C. Jadeja",
        role: "Associate Professor",
        dept: "Chemical Engineering",
        fields: ["chem-green", "chem-green", "chem-energy"],
        tags: ["Neoteric Green Extraction", "Supercritical Extraction", "Bio-refinery", "Renewable Resources"],
        bio: "Expert in Neoteric Green Extraction Techniques, Sub/Supercritical and Pressurized Fluid Extractions, Valuable Chemicals from Renewable Resources.",
        email: "gcjadeja@gmail.com",
        phone: "9638718644",
        avatar: 36
    },
    {
        id: 37,
        name: "Dr. Smita Gupta",
        role: "Associate Professor",
        dept: "Chemical Engineering",
        fields: ["chem-separation", "chem-separation", "chem-green"],
        tags: ["Membrane Separation Techniques", "Wastewater Treatment", "Biochemical Engineering"],
        bio: "Research in Membrane separation techniques, Wastewater Treatment, Biochemical Engineering.",
        email: "g.smita@ched.svnit.ac.in",
        phone: "9724501205",
        avatar: 37
    },
    // Chemical Engineering - Assistant Professors
    {
        id: 38,
        name: "Dr. Sarita Kalla",
        role: "Assistant Professor",
        dept: "Chemical Engineering",
        fields: ["chem-separation", "chem-separation", "chem-separation"],
        tags: ["Membrane Separation", "Membrane Fabrication", "Desalination", "Wastewater Treatment"],
        bio: "Specializes in Membrane Separation Process and Membrane Fabrication, Desalination and Waste Water Treatment, Process Optimization, Adsorption.",
        email: "sarita87mishra@gmail.com",
        phone: "9001345237",
        avatar: 38
    },
    {
        id: 39,
        name: "Dr. S.K. Sundar",
        role: "Assistant Professor",
        dept: "Chemical Engineering",
        fields: ["chem-nano", "chem-green", "chem-nano"],
        tags: ["Encapsulation", "Controlled Release", "Nanofluids", "Colloids and Interfaces"],
        bio: "Expert in Encapsulation & controlled release of bioactive compounds, Nanofluids/Nanomaterials, Colloids and Interfaces, Biochemical Engineering.",
        email: "tosundarsk@gmail.com",
        phone: "9869607692",
        avatar: 39
    },
    {
        id: 40,
        name: "Dr. Jogender Singh",
        role: "Assistant Professor",
        dept: "Chemical Engineering",
        fields: ["chem-green", "chem-nano", "chem-separation"],
        tags: ["Process Intensification", "Microfluidics", "Extraction Processes", "CFD Modeling"],
        bio: "Research in Process Intensification, Heat Transfer and Fluid flow, Microfluidics, Micro-flow Extraction Processes, Separation Processes.",
        email: "jogender.iitd@gmail.com",
        phone: "8287505262",
        avatar: 40
    },
    {
        id: 41,
        name: "Dr. Vineet Kumar Rathore",
        role: "Assistant Professor",
        dept: "Chemical Engineering",
        fields: ["chem-separation", "chem-nano", "chem-energy"],
        tags: ["Groundwater Treatment", "Nanotechnology", "Electrochemical Processes", "Waste Management"],
        bio: "Expert in Contaminated Groundwater Treatment, Nanotechnology, Electrochemical Processes, Solid Waste Management, LCA and Sustainability Studies.",
        email: "vineetrathore@gmail.com",
        phone: "8433190809",
        avatar: 41
    },
    {
        id: 42,
        name: "Dr. Parag Pralhad Thakur",
        role: "Assistant Professor",
        dept: "Chemical Engineering",
        fields: ["chem-nano", "chem-nano", "chem-nano"],
        tags: ["Nanotechnology", "Nanofluidics", "Microfluidics", "Nanocomposites"],
        bio: "Specializes in Nanotechnology, Nanofluidics, Microfluidics, Nanocomposites and related research.",
        email: "parag@ched.svnit.ac.in",
        phone: "8999254795",
        avatar: 42
    },

    // ==================== ELECTRONICS & COMMUNICATION ENGINEERING ====================
    // ECE Professors
    {
        id: 43,
        name: "Dr. Anand D. Darji",
        role: "Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-vlsi", "ece-signal", "ece-signal"],
        tags: ["VLSI Design", "FPGA Systems", "DSP Architecture", "Embedded Systems", "Biomedical Signal Processing"],
        bio: "Research in VLSI Design, FPGA-based systems design, Device modelling, VLSI DSP architecture, Embedded System Design, Electronics Instrumentation, Signal Processing, Bio-medical Signal/image processing.",
        email: "add@eced.svnit.ac.in",
        phone: "+91 9426886446",
        avatar: 43
    },
    {
        id: 44,
        name: "Dr. Jignesh N. Sarvaiya",
        role: "Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-signal", "ece-optical", "ece-signal"],
        tags: ["Image Processing", "Medical Instrumentation", "Healthcare Technology"],
        bio: "Research in Image Processing and Medical Instrumentation applications in healthcare systems.",
        email: "jns@eced.svnit.ac.in",
        phone: "0261-2201689",
        avatar: 44
    },
    {
        id: 45,
        name: "Dr. Piyush N. Patel",
        role: "Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-optical", "ece-wireless", "ece-wireless"],
        tags: ["Optical Communication", "Sensors & MEMS", "Microwave Communication", "Antenna Design", "Metamaterial Research"],
        bio: "Research in Optical Communication & Networks, Sensors and MEMS, Microwave Communication, Electromagnetics and Antenna, VLC/LiFi/Free Space Optics, Metamaterial/E-Textile based Antenna Design and Fabrication.",
        email: "pnp@eced.svnit.ac.in",
        phone: "+91 8200301738",
        avatar: 45
    },
    {
        id: 46,
        name: "Dr. (Mrs) Upena. D. Dalal",
        role: "Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-wireless", "ece-wireless", "ece-signal"],
        tags: ["5G Technology", "Wireless Communication", "Optical Wireless", "Signal Processing"],
        bio: "Expertise in Wireless Communication techniques, 5G technology, Wireless systems, Optical wireless, Signal processing.",
        email: "udd@eced.svnit.ac.in",
        phone: "+91 0989805772",
        avatar: 46
    },
    // ECE Associate Professors
    {
        id: 47,
        name: "Dr. Abhilash S. Mandloi",
        role: "Associate Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-optical", "ece-optical", "ece-wireless"],
        tags: ["Photonics", "Optical Communication", "Antenna Design", "Optical Sensors", "Machine Learning for Fiber Optics"],
        bio: "Research in Photonics, Optical Communication & Networks, Micro strip Antenna, Optoelectronic circuits, optical sensors, AI and machine learning techniques for Fibre optics communication.",
        email: "asm@eced.svnit.ac.in",
        phone: "+91 9904003858",
        avatar: 47
    },
    {
        id: 48,
        name: "Dr. Abhishek Acharya",
        role: "Associate Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-vlsi", "ece-vlsi", "ece-signal"],
        tags: ["Nano-Scale Devices", "Semiconductors", "2D Materials", "Device-Circuit Interactions"],
        bio: "Research in Physics & Modeling of Nano-Scale Devices, Device-Circuit Interactions in Nano-Scale Transistors, Wide Bandgap Semiconductors and 2D Materials for Devices & Circuits.",
        email: "abhishek@eced.svnit.ac.in",
        phone: "+91 9413279923",
        avatar: 48
    },
    {
        id: 49,
        name: "Dr. (Ms.) Jigisha N. Patel",
        role: "Associate Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-wireless", "ece-signal", "ece-signal"],
        tags: ["Wireless Communication", "Image Coding", "Video Coding"],
        bio: "Specializes in Wireless Communication, Image / Video Coding techniques and standards.",
        email: "jnpatel@eced.svnit.ac.in",
        phone: "+91 9924726100",
        avatar: 49
    },
    {
        id: 50,
        name: "Dr. Kishor P. Upla",
        role: "Associate Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-signal", "ece-signal", "ece-signal"],
        tags: ["Machine/Deep Learning", "Image Processing", "Object Detection", "Image Restoration", "Image Fusion"],
        bio: "Research in Machine/Deep Learning, Object detection/recognition, Multi-spectral and hyperspectral image processing, Image Restoration, Bio-medical Image Fusion, Information Fusion, Multi-Resolution Image Fusion/Pan-Sharpening.",
        email: "kpu@eced.svnit.ac.in",
        phone: "+91 9998969067",
        avatar: 50
    },
    {
        id: 51,
        name: "Dr. Pinalkumar J. Engineer",
        role: "Associate Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-vlsi", "ece-vlsi", "ece-signal"],
        tags: ["Edge Computing", "Processor Design", "Energy-efficient Computing", "High Performance Computing"],
        bio: "Expert in Edge Computing, Application-Specific Processor Design, Energy-efficient Computing, VLSI architecture for real-time signal/image processing, High performance embedded computing.",
        email: "pje@eced.svnit.ac.in",
        phone: "+91 9924711335",
        avatar: 51
    },
    {
        id: 52,
        name: "Dr. (Ms.) Shilpi Gupta",
        role: "Associate Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-wireless", "ece-wireless", "ece-optical"],
        tags: ["5G Technology", "MIMO Detection", "Antenna Design", "Waveform Design", "Free Space Optics"],
        bio: "Research in 5G Technology, Massive MIMO Detection Techniques, Antenna Design for 5G Applications, Waveform Designing for MIMO Radar, Free Space Optics, Fiber Optic Sensors.",
        email: "sgupta@eced.svnit.ac.in",
        phone: "+91 9737011973",
        avatar: 52
    },
    {
        id: 53,
        name: "Dr. (Mrs.) Shweta N. Shah",
        role: "Associate Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-wireless", "ece-wireless", "ece-signal"],
        tags: ["5G/6G Networks", "Mobile Communication", "Digital Video Broadcast", "Cognitive Radio", "NavIC/IRNSS"],
        bio: "Specializes in Wireless Communication, Mobile Communication and standards, Digital Video Broadcast and standards, Cognitive Radio, NavIC/IRNSS.",
        email: "snshah@eced.svnit.ac.in",
        phone: "+91 992545849",
        avatar: 53
    },
    {
        id: 54,
        name: "Dr. Zuber M. Patel",
        role: "Associate Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-vlsi", "ece-vlsi", "ece-vlsi"],
        tags: ["FPGA Design", "Microprocessor Design", "Wireless Transceiver", "Embedded Systems"],
        bio: "Expert in HDL/FPGA based design, VLSI Design of RISC Microprocessors, FPGA/ASIC Design of wireless transceiver hardware, Embedded Systems.",
        email: "zmp@eced.svnit.ac.in",
        phone: "+91 9898698793",
        avatar: 54
    },
    {
        id: 55,
        name: "Shri. Naresh B. Kanirkar",
        role: "Associate Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-wireless", "ece-wireless", "ece-signal"],
        tags: ["CDMA", "Mobile Communication", "Wireless Systems"],
        bio: "Research in CDMA and Mobile Communication technologies.",
        email: "nbk@eced.svnit.ac.in",
        phone: "+91 9924729298",
        avatar: 55
    },
    {
        id: 56,
        name: "Dr. Prashant K. Shah",
        role: "Associate Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-signal", "ece-signal", "cs-ai"],
        tags: ["Digital Signal Processing", "Image Processing", "Adaptive Filtering", "Artificial Intelligence"],
        bio: "Specializes in Digital Signal and Image Processing, Adaptive and Nonlinear filtering, Artificial Intelligence application, LMI Based Improved Stability Criteria.",
        email: "pks@eced.svnit.ac.in",
        phone: "+91 9429510861",
        avatar: 56
    },
    // ECE Assistant Professors
    {
        id: 57,
        name: "Dr. Deepak Joshi",
        role: "Assistant Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-vlsi", "ece-vlsi", "cs-ai"],
        tags: ["VLSI Design", "Analog Circuits", "Computational Intelligence", "CAD for VLSI"],
        bio: "Research in Metaheuristics, Analog Circuits: Design and Optimization, Computational Intelligence, CAD for VLSI.",
        email: "d.joshi@eced.svnit.ac.in",
        phone: "+91 7896171659",
        avatar: 57
    },
    {
        id: 58,
        name: "Dr. Kirti Inamdar",
        role: "Assistant Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-wireless", "ece-wireless", "ece-optical"],
        tags: ["Antenna Design", "Metamaterials", "Wearable Antennas"],
        bio: "Expert in Microstrip Patch Antenna design using Metamaterials, Wearable Antennas.",
        email: "kki@eced.svnit.ac.in",
        phone: "+91 9427452999",
        avatar: 58
    },
    {
        id: 59,
        name: "Dr. Sandeep Mishra",
        role: "Assistant Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-vlsi", "ece-vlsi", "ece-vlsi"],
        tags: ["VLSI Design", "Low Power VLSI", "Memory Design", "Mixed Signal Circuits"],
        bio: "Specializes in VLSI Design, Low Power VLSI, Memory Design, Mixed Signal Circuits.",
        email: "sandeepmishra@eced.svnit.ac.in",
        phone: "+91 9436359828",
        avatar: 59
    },
    {
        id: 60,
        name: "Dr. Suresh Dahiya",
        role: "Assistant Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-wireless", "ece-signal", "ece-signal"],
        tags: ["Wireless Channel Modeling", "Massive MIMO", "Satellite Navigation", "5G Technology"],
        bio: "Research in Wireless Channel Model, Massive MIMO System, Satellite based navigation systems.",
        email: "suresh.dahiya@eced.svnit.ac.in",
        phone: "+91 9571044802",
        avatar: 60
    },
    {
        id: 61,
        name: "Dr. Kamal Captain",
        role: "Assistant Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-wireless", "ece-signal", "cs-ai"],
        tags: ["Cognitive Radio", "Signal Processing", "Wireless Communication", "Machine Learning"],
        bio: "Expert in Cognitive Radio, Signal Processing, Statistical Signal Processing, Wireless Communication, Machine Learning.",
        email: "kamalcaptain@eced.svnit.ac.in",
        phone: "+91 9824755453",
        avatar: 61
    },
    {
        id: 62,
        name: "Dr. Raghavendra Pal",
        role: "Assistant Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-wireless", "ece-wireless", "cs-ai"],
        tags: ["Ad hoc Networks", "Vehicular Networks", "Machine Learning", "MAC Protocols"],
        bio: "Research in Wireless ad hoc Networks, Vehicular ad hoc Networks, Machine Learning for wireless communication, Medium access control.",
        email: "raghavendrapal@eced.svnit.ac.in",
        phone: "+91 7906661452",
        avatar: 62
    },
    {
        id: 63,
        name: "Dr. Suman Deb",
        role: "Assistant Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-signal", "ece-signal", "ece-signal"],
        tags: ["Speech Processing", "Signal Processing", "Emotion Analysis", "Pattern Recognition"],
        bio: "Specializes in Signal Processing, Speech Processing, Speech based Health Analysis, Emotion Analysis based on Speech and Image, Speech Pathology Detection, Voice Conversion.",
        email: "sumandeb@eced.svnit.ac.in",
        phone: "+91 8011870732",
        avatar: 63
    },
    {
        id: 64,
        name: "Dr. Vivek Garg",
        role: "Assistant Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-optical", "ece-optical", "ece-vlsi"],
        tags: ["Photovoltaics", "Photodetectors", "Quantum Technology", "Energy Storage", "Optical Communication"],
        bio: "Expert in Optoelectronic Devices (Photovoltaics, Photodetectors), Quantum Technology (Imaging, Sensing and Communication), Energy Storage Devices, Modelling of Nanoscale Devices.",
        email: "vivekg@eced.svnit.ac.in",
        phone: "+91 9993168368",
        avatar: 64
    },
    {
        id: 65,
        name: "Dr. Golak Santra",
        role: "Assistant Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-wireless", "ece-wireless", "ece-wireless"],
        tags: ["Metamaterial", "Antenna Design", "MIMO Antenna", "RF Energy Harvesting"],
        bio: "Research in Metamaterial, Microstrip filter, Broadband Patch Antenna, MIMO Antenna Design, Horizontal, Vertical and Circularly Polarized Antenna, RF Energy Harvesting.",
        email: "s.golak@eced.svnit.ac.in",
        phone: "+91 8980692441",
        avatar: 65
    },
    {
        id: 66,
        name: "Shri. Mehul C. Patel",
        role: "Assistant Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-signal", "ece-vlsi", "ece-signal"],
        tags: ["Digital Signal Processing", "VLSI Implementation", "Real-time Processing"],
        bio: "Specializes in Digital Signal Processing using VLSI implementation and optimization.",
        email: "mcp@eced.svnit.ac.in",
        phone: "+91 8849578237",
        avatar: 66
    },
    {
        id: 67,
        name: "Dr. Nithin Chatterji",
        role: "Assistant Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-vlsi", "ece-vlsi", "ece-optical"],
        tags: ["Device Simulation", "Semiconductor Physics", "Solar Photovoltaics", "Memory Devices"],
        bio: "Research in Device Simulation and Modelling, Semiconductor device physics, Solar Photovoltaics, Memory devices (DRAM).",
        email: "nithinc@eced.svnit.ac.in",
        phone: "+91 9167473978",
        avatar: 67
    },
    {
        id: 68,
        name: "Dr. Partha Das",
        role: "Assistant Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-vlsi", "ece-optical", "ece-optical"],
        tags: ["GaN Devices", "HEMT", "Resistive Memory", "Energy Harvesting"],
        bio: "Expert in GaN based Devices (HEMT), Resistive Memory Devices(RRAM), Rectenna for Infrared Energy Harvesting, Modeling and simulation of semiconductor devices.",
        email: "pd@eced.svnit.ac.in",
        phone: "+91 8918746469",
        avatar: 68
    },
    {
        id: 69,
        name: "Dr. Rajeev Arya",
        role: "Assistant Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-wireless", "ece-wireless", "ece-wireless"],
        tags: ["Wireless Sensor Networks", "5G/6G", "UAV Communications", "IoT", "Quantum Computing"],
        bio: "Research in Wireless Sensor Networks, Device-to-Device Communication, 5G/6G Network, UAV Communications, IOT, Quantum computing.",
        email: "rajeevarya@eced.svnit.ac.in",
        phone: "+91 8130336451",
        avatar: 69
    },
    {
        id: 70,
        name: "Dr. Pankaj Sharma",
        role: "Assistant Professor",
        dept: "Electronics & Communication Engineering",
        fields: ["ece-vlsi", "ece-optical", "ece-optical"],
        tags: ["HEMT", "Diodes", "Solar Cells", "Photodetectors", "Gas Sensors"],
        bio: "Specializes in Modelling, Simulation and fabrication of advanced and novel semiconductors materials and devices, HEMT, Diodes, Fuel cells, Solar cells, Photodetectors, LEDs, Gas sensors.",
        email: "pankaj.sharma@eced.svnit.ac.in",
        phone: "+91 9893805618",
        avatar: 70
    },

    // ==================== CIVIL ENGINEERING ====================
    // Civil Engineering Professors
    {
        id: 71,
        name: "Dr. J. N. Patel",
        role: "Professor (HAG)",
        dept: "Civil Engineering",
        fields: ["civil-hydraulics", "civil-planning", "civil-hydraulics"],
        tags: ["Water Resources Engineering", "Geo-spatial Technologies", "Computational Techniques"],
        bio: "Expert in Water Resources Engineering, Geo-spatial Technologies, Computational Techniques for hydrological analysis.",
        email: "jnp@ced.svnit.ac.in",
        phone: "9924799422",
        avatar: 71
    },
    {
        id: 72,
        name: "Dr. P. L. Patel",
        role: "Professor (HAG)",
        dept: "Civil Engineering",
        fields: ["civil-hydraulics", "civil-hydraulics", "civil-planning"],
        tags: ["Fluvial Hydraulics", "Sediment Transport", "River Morphology", "Hydrological Modelling"],
        bio: "Research in Experimental and numerical investigations on transport of sediments and bed level variations, Hydrodynamic modelling, Hydrological modelling in assessment of water availability.",
        email: "plpatel@ced.svnit.ac.in",
        phone: "9904003857",
        avatar: 72
    },
    {
        id: 73,
        name: "Dr. C. D. Modhera",
        role: "Professor (HAG)",
        dept: "Civil Engineering",
        fields: ["civil-structural", "civil-structural", "civil-structural"],
        tags: ["Concrete Technology", "Structural Dynamics", "Earthquake Engineering", "Health Monitoring"],
        bio: "Expert in Concrete Technology, Structural dynamics, Earthquake engineering and monitoring health of structural concrete, Special concrete and relevant applications.",
        email: "cdm@amd.svnit.ac.in",
        phone: "9824437861",
        avatar: 73
    },
    {
        id: 74,
        name: "Dr. Atul K. Desai",
        role: "Professor (HAG)",
        dept: "Civil Engineering",
        fields: ["civil-structural", "civil-geotech", "civil-structural"],
        tags: ["Structural Dynamics", "Soil-Structure Interaction", "Fiber Reinforced Soil", "Bridge Engineering", "Earthquake Engineering"],
        bio: "Research in Structural Dynamics, Soil Structure Interaction, Fiber reinforced soil, Bridge engineering, Earthquake engineering & structural forensic, Analysis and designing of tall structures.",
        email: "akd@amd.svnit.ac.in",
        phone: "9327433390",
        avatar: 74
    },
    {
        id: 75,
        name: "Dr. C. H. Solanki",
        role: "Professor (HAG)",
        dept: "Civil Engineering",
        fields: ["civil-geotech", "civil-geotech", "civil-geotech"],
        tags: ["Sub Soil Characteristics", "Ground Improvement", "Geo-environmental Engineering", "Geotechnical Analysis"],
        bio: "Specializes in Sub Soil Characteristics, Prediction in Geo-technical Engineering, Ground improvement techniques, Geo-environmental Engineering.",
        email: "chs@amd.svnit.ac.in",
        phone: "9925207068",
        avatar: 75
    },
    {
        id: 76,
        name: "Dr. G. J. Joshi",
        role: "Professor",
        dept: "Civil Engineering",
        fields: ["civil-planning", "civil-planning", "civil-planning"],
        tags: ["Urban Transportation Planning", "Traffic Flow Modeling", "Public Transport Planning", "Regional Planning"],
        bio: "Expert in Urban Transportation Planning, Traffic Flow Modeling, Public Transport Planning, Regional Planning.",
        email: "gj@ced.svnit.ac.in",
        phone: "9879564862",
        avatar: 76
    },
    {
        id: 77,
        name: "Dr. Krupesh A. Chauhan",
        role: "Professor",
        dept: "Civil Engineering",
        fields: ["civil-planning", "civil-planning", "civil-planning"],
        tags: ["Urban Planning", "Urban Design", "Urban Infrastructure", "Road Safety", "Pavement Design"],
        bio: "Research in Urban Planning, Urban design, Urban infrastructer planning, Housing Road Safty and Pavment Design.",
        email: "kac@ced.svnit.ac.in",
        phone: "9727712357",
        avatar: 77
    },
    {
        id: 78,
        name: "Dr. M. Mansoor Ahammed",
        role: "Professor",
        dept: "Civil Engineering",
        fields: ["civil-environment", "civil-environment", "civil-environment"],
        tags: ["Environmental Engineering", "Water Treatment", "Waste Treatment", "Water Microbiology"],
        bio: "Expert in Environmental Engineering, Househod water treatment, Anaerobic waste treatment, Health-related water microbiology.",
        email: "mma@ced.svnit.ac.in",
        phone: "9825875162",
        avatar: 78
    },
    {
        id: 79,
        name: "DR. P. G. Agnihotri",
        role: "Professor",
        dept: "Civil Engineering",
        fields: ["civil-hydraulics", "civil-environment", "civil-planning"],
        tags: ["Geospatial Technology", "Flood Mitigation", "Water Resources Engineering", "GIS Applications"],
        bio: "Specializes in Application of Geospatial Technology, Flood Mitigation, Water Resources Engineering.",
        email: "pga@ced.svnit.ac.in",
        phone: "9924207781",
        avatar: 79
    },
    {
        id: 80,
        name: "Dr. Rakesh Kumar",
        role: "Professor",
        dept: "Civil Engineering",
        fields: ["civil-planning", "civil-geotech", "civil-planning"],
        tags: ["Pavement Engineering", "Non-Conventional Materials", "Public Transit", "Road Design"],
        bio: "Research in Utilization of Slags, Geosynthetic, Chemical Stabilizers for Pavement, Planning, design, and implementation of Public Bus Transit (BRTS), Pavement Engineering.",
        email: "krakesh@ced.svnit.ac.in",
        phone: "9662039082",
        avatar: 80
    },
    {
        id: 81,
        name: "Dr. Sandip A. Vasanwala",
        role: "Professor",
        dept: "Civil Engineering",
        fields: ["civil-structural", "civil-structural", "civil-structural"],
        tags: ["Structural Analysis", "Computer Applications", "Neural Networks", "Earthquake Resistant Design"],
        bio: "Expert in Computer aided structural analysis, Structural analysis, Computer applications in civil engineering, Earthquake resistance design of structures.",
        email: "sav@amd.svnit.ac.in",
        phone: "9879458558",
        avatar: 81
    },
    {
        id: 82,
        name: "Dr. S. M. Yadav",
        role: "Professor",
        dept: "Civil Engineering",
        fields: ["civil-hydraulics", "civil-hydraulics", "civil-environment"],
        tags: ["Fluvial Hydraulics", "Reservoir Operation", "Sediment Yield", "Hydro Power", "Climate Change"],
        bio: "Research in Fluvial Hydraulics, Reservoir Operation, Sediments & Sediment Yield and Hydro Power, Hydrology and climate change.",
        email: "smy@ced.svnit.ac.in",
        phone: "9426152906",
        avatar: 82
    },
    {
        id: 83,
        name: "Dr. V. L. Manekar",
        role: "Professor",
        dept: "Civil Engineering",
        fields: ["civil-hydraulics", "civil-hydraulics", "civil-environment"],
        tags: ["Sediment Laden Flow", "Hydrodynamic Modelling", "Climate Change Impact", "Water Resources"],
        bio: "Specializes in Sediment Laden Flow Modelling and Simulation, Ago-Climatic Modelling, Hydrodynamic Flood Modelling, Impact of LULC & Climate Change on Water Resources.",
        email: "vlm@ced.svnit.ac.in",
        phone: "9904003865",
        avatar: 83
    },
    {
        id: 84,
        name: "Dr. Ashish Dhamaniya",
        role: "Professor",
        dept: "Civil Engineering",
        fields: ["civil-planning", "civil-planning", "civil-planning"],
        tags: ["Traffic Flow Modeling", "Highway Capacity", "GIS Applications", "Pedestrian Flow", "Road Safety"],
        bio: "Research in Dynamic Traffic Flow Modeling, Highway Capacity and Level of Service, GIS and GPS applications in Transportation Engineering, Pedestrian Flow Modelling.",
        email: "adhamaniya@ced.svnit.ac.in",
        phone: "8347299976",
        avatar: 84
    },
    {
        id: 85,
        name: "Dr. Dilip A. Patel",
        role: "Professor",
        dept: "Civil Engineering",
        fields: ["civil-planning", "civil-planning", "civil-environment"],
        tags: ["Construction Management", "Construction Safety", "Building Information Modelling", "Heritage Conservation"],
        bio: "Expert in Construction Project Management, Construction Safety, Welfare of Worker, Application of Building Information Modelling, Sustainable Construction.",
        email: "dap@ced.svnit.ac.in",
        phone: "9998277731",
        avatar: 85
    },
    {
        id: 86,
        name: "Dr. K. D. Yadav",
        role: "Professor",
        dept: "Civil Engineering",
        fields: ["civil-environment", "civil-environment", "civil-environment"],
        tags: ["Waste Management", "Solid Waste", "Composting", "Vermicomposting", "Organic Waste"],
        bio: "Research in Human Excreta Management, Solid Waste Management, Organic Waste Management by Composting, Vermicomposting.",
        email: "kdy@ced.svnit.ac.in",
        phone: "9428398266",
        avatar: 86
    },
    {
        id: 87,
        name: "Dr. Shriniwas S. Arkatkar",
        role: "Professor",
        dept: "Civil Engineering",
        fields: ["civil-planning", "civil-planning", "civil-planning"],
        tags: ["Heterogeneous Traffic", "Traffic Operation", "Transportation Systems", "Sustainable Transport", "Road Safety"],
        bio: "Specializes in Heterogeneous Traffic Flow Modeling and Simulation, Traffic Operation and Management, Transportation Systems Planning, Design and Operation.",
        email: "sarkatkar@ced.svnit.ac.in",
        phone: "8140252777",
        avatar: 87
    },
    {
        id: 88,
        name: "Dr. Yogesh D. Patil",
        role: "Professor",
        dept: "Civil Engineering",
        fields: ["civil-structural", "civil-structural", "civil-structural"],
        tags: ["Earthquake Engineering", "Fiber Reinforced Concrete", "Steel Structures", "Beam-Column Joints"],
        bio: "Research in Earthquake engineering, Fiber reinforced concrete, Steel & reinforced concrete beam-column joint and design of steel structures.",
        email: "ydp@amd.svnit.ac.in",
        phone: "9998846518",
        avatar: 88
    },
    {
        id: 89,
        name: "Dr. Gaurang R. Vesmawala",
        role: "Professor",
        dept: "Civil Engineering",
        fields: ["civil-structural", "civil-structural", "civil-structural"],
        tags: ["Earthquake Engineering", "Structural Health Monitoring", "Space Structures", "Neural Networks"],
        bio: "Expert in Earthquake Engineering, Structural Health Monitoring, Optimum design of space structures, Neural network applications in structural engineering.",
        email: "grv@amd.svnit.ac.in",
        phone: "9904003872",
        avatar: 89
    },
    {
        id: 90,
        name: "Dr. P. V. Timbadiya",
        role: "Professor",
        dept: "Civil Engineering",
        fields: ["civil-hydraulics", "civil-hydraulics", "civil-hydraulics"],
        tags: ["Surface Water Hydrology", "River Analysis", "Hydrodynamic Modeling", "Water Resources"],
        bio: "Research in Surface water hydrology, River analysis system, Hydrodynamic modeling of water resources.",
        email: "pvtimbadiya@ced.svnit.ac.in",
        phone: "9426137917",
        avatar: 90
    },
    // Civil Engineering - Associate Professors
    {
        id: 91,
        name: "Dr. Satyajit Patel",
        role: "Associate Professor",
        dept: "Civil Engineering",
        fields: ["civil-geotech", "civil-geotech", "civil-environment"],
        tags: ["Industrial Wastes", "Geo-environmental", "Soil Stabilization", "Ground Improvement", "Geosynthetics"],
        bio: "Specializes in Utilization of Industrial solid wastes in Civil Engineering Constructions, Geo-environmental Issues, Soil stabilization, Ground improvement.",
        email: "spatel@amd.svnit.ac.in",
        phone: "9714740022",
        avatar: 91
    },
    {
        id: 92,
        name: "Dr. S. R. Suryawanshi",
        role: "Associate Professor",
        dept: "Civil Engineering",
        fields: ["civil-structural", "civil-structural", "civil-structural"],
        tags: ["Computational Mechanics", "Structural Concrete", "Flexural Behavior", "Non-Flexural Behavior"],
        bio: "Research in Computational Mechanics, Analytical Modelling of Structural Concrete, Flexural and Non-Flexural Behaviour of Concrete Structures.",
        email: "ssr@amd.svnit.ac.in",
        phone: "9316851979",
        avatar: 92
    },
    {
        id: 93,
        name: "Dr. Anant Parghi",
        role: "Associate Professor",
        dept: "Civil Engineering",
        fields: ["civil-structural", "civil-structural", "civil-environment"],
        tags: ["Seismic Design", "Smart Materials", "Shape Memory Alloys", "Fiber Reinforced Polymer", "Structural Dynamics"],
        bio: "Expert in Seismic analysis and design smart materials and their structural application, seismic retrofitting, recycle/reuse of industrial wastes, finite element analysis.",
        email: "amp@amd.svnit.ac.in",
        phone: "9428457867",
        avatar: 93
    },
    {
        id: 94,
        name: "Dr. Bhaven N. Tandel",
        role: "Associate Professor",
        dept: "Civil Engineering",
        fields: ["civil-environment", "civil-environment", "civil-environment"],
        tags: ["Noise Pollution", "Air Quality", "Environmental Legislation", "Health Impact", "EIA"],
        bio: "Research in Noise pollution modelling and mapping, Health impact of noise pollution, Air quality modelling and mapping, Indoor air quality, EIA & Environmental legislation.",
        email: "bnt@ced.svnit.ac.in",
        phone: "9825553175",
        avatar: 94
    },
    {
        id: 95,
        name: "Dr. Patel Chetankumar Ramanlal",
        role: "Associate Professor",
        dept: "Civil Engineering",
        fields: ["civil-planning", "civil-planning", "civil-environment"],
        tags: ["Urban Sprawl", "Active Transportation", "Housing Development", "Urban Freight", "Big Data"],
        bio: "Specializes in Active relation of Physical planning, Climate change and Urban Sprawl, Active Transportation, Urban Freight Trip Generation Modelling, Big data and IoT in Urban Planning.",
        email: "crp@ced.svnit.ac.in",
        phone: "9898603853",
        avatar: 95
    },
    {
        id: 96,
        name: "Dr. Ganesh D. Kale",
        role: "Associate Professor",
        dept: "Civil Engineering",
        fields: ["civil-hydraulics", "civil-hydraulics", "civil-planning"],
        tags: ["Climate Change", "Rainfall Runoff", "GIS Applications", "Remote Sensing", "Optimization"],
        bio: "Research in Effect of Climate Change on Hydrology, Rainfall Runoff Modelling, Application of GIS and Remote Sensing in Water Resources Engineering.",
        email: "gdk@ced.svnit.ac.in",
        phone: "9824166374",
        avatar: 96
    },
    {
        id: 97,
        name: "Dr. B. Kondraivendhan",
        role: "Associate Professor",
        dept: "Civil Engineering",
        fields: ["civil-structural", "civil-structural", "civil-environment"],
        tags: ["Cement Materials", "Pozzolanic Materials", "Concrete Durability", "Concrete Corrosion", "Repair & Rehabilitation"],
        bio: "Expert in Pore structure characterization of cement based materials, Effect of pozzolanic materials, Strength and durability studies, Repair and rehabilitation of concrete structures.",
        email: "bkv@amd.svnit.ac.in",
        phone: "8758209578",
        avatar: 97
    },
    {
        id: 98,
        name: "Dr. Namrata D. Jariwala",
        role: "Associate Professor",
        dept: "Civil Engineering",
        fields: ["civil-environment", "civil-environment", "civil-environment"],
        tags: ["Solid Waste Management", "Environmental Education", "Air Pollution", "Health Impact"],
        bio: "Research in Helth related issues in solid waste mangement practice, Environmetal Education, Environmet and health, Air pollution.",
        email: "ndj@ced.svnit.ac.in",
        phone: "9427492963",
        avatar: 98
    },
    {
        id: 99,
        name: "Dr. Shailendra Kumar",
        role: "Associate Professor",
        dept: "Civil Engineering",
        fields: ["civil-geotech", "civil-geotech", "civil-geotech"],
        tags: ["Ground Improvement", "Soil Stabilization", "Reinforced Earth", "Geosynthetics", "Earthquake Engineering"],
        bio: "Specializes in Ground Improvement Techniques, Soil Stabilization, Reinforced Earth & Geosynthetics and Geotechnical Earthquake Engineering.",
        email: "skumar@amd.svnit.ac.in",
        phone: "7016522404",
        avatar: 99
    },
    {
        id: 100,
        name: "Dr. (Mrs.) Shruti J. Shukla",
        role: "Associate Professor",
        dept: "Civil Engineering",
        fields: ["civil-geotech", "civil-geotech", "civil-structural"],
        tags: ["Geo-technical Engineering", "Soil Improvement", "Piled Raft Foundation", "Deep Foundations"],
        bio: "Research in Geo-technical engineering and soil improvement techniquesPursuing research in the field of piled raft foundation.",
        email: "sdv@amd.svnit.ac.in",
        phone: "9712900868",
        avatar: 100
    },
    {
        id: 101,
        name: "Dr. Tailor Ravin Maheshkumar",
        role: "Associate Professor",
        dept: "Civil Engineering",
        fields: ["civil-planning", "civil-planning", "civil-planning"],
        tags: ["Urban Infrastructure", "Pavement Design", "Pavement Assessment", "Transportation Planning"],
        bio: "Expert in Urban Infrastructure Planning, Pavement Design and Assessment.",
        email: "ravin@ced.svnit.ac.in",
        phone: "9825426592",
        avatar: 101
    },
    {
        id: 102,
        name: "Dr. J. B. Patel",
        role: "Associate Professor",
        dept: "Civil Engineering",
        fields: ["civil-geotech", "civil-geotech", "civil-geotech"],
        tags: ["Ground Improvement", "Soil Enhancement", "Geotechnical Engineering"],
        bio: "Specializes in Ground Improvement techniques and Geotechnical Engineering.",
        email: "pjb@amd.svnit.ac.in",
        phone: "9725757937",
        avatar: 102
    },
    // Civil Engineering - Assistant Professors
    {
        id: 103,
        name: "Dr. Jitesh T. Chavda",
        role: "Assistant Professor",
        dept: "Civil Engineering",
        fields: ["civil-geotech", "civil-geotech", "civil-structural"],
        tags: ["Computational Geomechanics", "Deep Foundations", "Deep Excavations", "Physical Modelling", "Seismic Hazard"],
        bio: "Research in Computational Geomechanics, Deep Foundations, Deep Excavations, Use of PIV Technique, Physical Modelling in Geotechnical Engineering, Seismic Hazard Analysis.",
        email: "jtc@amd.svnit.ac.in",
        phone: "9773134790",
        avatar: 103
    },
    {
        id: 104,
        name: "Dr. Kashyap A. Patel",
        role: "Assistant Professor",
        dept: "Civil Engineering",
        fields: ["civil-structural", "civil-structural", "civil-structural"],
        tags: ["Structural Engineering", "Composite Structures", "Reinforced Concrete", "Bridge Engineering", "Structural Health Monitoring"],
        bio: "Expert in Structural Engineering, Steel-concrete Composite Structures, Reinforced Concrete Structures, Bridge Engineering, Structural Health Monitoring, Rehabilitation and Retrofitting.",
        email: "kapatel@amd.svnit.ac.in",
        phone: "9718993561",
        avatar: 104
    },
    {
        id: 105,
        name: "Dr. Banti A. Gedam",
        role: "Assistant Professor",
        dept: "Civil Engineering",
        fields: ["civil-structural", "civil-structural", "civil-environment"],
        tags: ["Fire Effects", "Heat Transfer", "Performance-based Design", "Spalling Mitigation", "Shrinkage & Creep"],
        bio: "Specializes in Fire effects on RC structures, Heat transfer evaluations, Performance-based fire-resistant design, Spalling mitigation, Artificial intelligence programming for concrete.",
        email: "bantiagedam@ced.svnit.ac.in",
        phone: "0261-2201879",
        avatar: 105
    },
    {
        id: 106,
        name: "Shri. Amit J. Solanki",
        role: "Assistant Professor",
        dept: "Civil Engineering",
        fields: ["civil-planning", "civil-planning", "civil-structural"],
        tags: ["Urban Planning", "Infrastructure Design", "Civil Works"],
        bio: "Research in Civil Engineering applications and Infrastructure Planning.",
        email: "ajs@ced.svnit.ac.in",
        phone: "9409237192",
        avatar: 106
    },
    {
        id: 107,
        name: "Dr. Smaranika Panda",
        role: "Assistant Professor",
        dept: "Civil Engineering",
        fields: ["civil-environment", "civil-environment", "civil-environment"],
        tags: ["Air Quality Management", "Air Quality Modelling", "Environmental Monitoring", "Health Risk Assessment", "Receptor Modelling"],
        bio: "Research in Air Quality Management, Air Quality Modelling, Urban and Industrial Air Quality Monitoring, Carrying Capacity Studies, Chemical characterization of Particulates.",
        email: "smp@ced.svnit.ac.in",
        phone: "9444383276",
        avatar: 107
    },
    {
        id: 108,
        name: "Dr. Tamizharasi G",
        role: "Assistant Professor",
        dept: "Civil Engineering",
        fields: ["civil-structural", "civil-structural", "civil-structural"],
        tags: ["Earthquake Engineering", "Structural Dynamics", "Seismic Design", "Vibration Control"],
        bio: "Expert in Earthquake Engineering, Structural Dynamics and Seismic Analysis.",
        email: "gtamizh@amd.svnit.ac.in",
        phone: "9790573247",
        avatar: 108
    },
    {
        id: 109,
        name: "Dr. Vishisht Bhaiya",
        role: "Assistant Professor",
        dept: "Civil Engineering",
        fields: ["civil-structural", "civil-structural", "civil-environment"],
        tags: ["Seismic Vibration Control", "Probabilistic Framework", "Discrete Element Modelling", "Disaster Mitigation", "Rehabilitation"],
        bio: "Specializes in Seismic Vibration Control and Anti-Seismic Devices, Probabilistic Framework for Seismic Design, Uncertainty Modelling, Disaster Mitigation and Management.",
        email: "vishisht@amd.svnit.ac.in",
        phone: "0261-2201885",
        avatar: 109
    }
];


// State variables
let selectedFields = [];
let currentFilter = 'all';
let currentSearch = '';

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    renderAllProfessors();
    setupEventListeners();
});

// Setup all event listeners
function setupEventListeners() {
    // Form submission
    document.getElementById('ideaForm').addEventListener('submit', handleFormSubmit);

    // Field tag pills
    document.querySelectorAll('.tag-pill').forEach(pill => {
        pill.addEventListener('click', toggleFieldTag);
    });

    // Filter chips
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', handleFilterChange);
    });

    // Search bar
    document.getElementById('searchInput').addEventListener('input', handleSearch);
}

// Toggle field selection in form
function toggleFieldTag(e) {
    e.preventDefault();
    const field = e.target.dataset.field;
    
    if (selectedFields.includes(field)) {
        selectedFields = selectedFields.filter(f => f !== field);
        e.target.classList.remove('active');
    } else {
        selectedFields.push(field);
        e.target.classList.add('active');
    }
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();

    if (selectedFields.length === 0) {
        alert('Please select at least one field of interest.');
        return;
    }

    const studentName = document.getElementById('studentName').value;
    const ideaDescription = document.getElementById('ideaDescription').value;

    // Find matching professors
    const matchedProfessors = professorsData.filter(professor => {
        return professor.fields.some(field => selectedFields.includes(field));
    });

    // Display matched professors
    displayMatchedProfessors(matchedProfessors);

    // Smooth scroll to matched section
    setTimeout(() => {
        document.getElementById('matchedProfessors').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Display matched professors
function displayMatchedProfessors(professors) {
    const matchedSection = document.getElementById('matchedProfessors');
    const matchedGrid = document.getElementById('matchedGrid');

    matchedGrid.innerHTML = '';

    if (professors.length === 0) {
        matchedGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">No professors found in your selected fields.</p>';
    } else {
        professors.forEach(professor => {
            matchedGrid.appendChild(createProfessorCard(professor, true));
        });
    }

    matchedSection.style.display = 'block';
}

// Render all professors initially
function renderAllProfessors() {
    const grid = document.getElementById('professorsGrid');
    grid.innerHTML = '';
    professorsData.forEach(professor => {
        grid.appendChild(createProfessorCard(professor, false));
    });
}

// Create professor card element
function createProfessorCard(professor, isMatched = false) {
    const card = document.createElement('div');
    card.className = `professor-card ${isMatched ? 'matched' : ''}`;
    
    const initials = professor.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase();

    const skillsHTML = professor.tags
        .map(tag => `<span class="skill-tag">${tag}</span>`)
        .join('');

    card.innerHTML = `
        <h3 class="professor-name">${professor.name}</h3>
        <p class="professor-role">${professor.role}</p>
        <div class="professor-dept">${professor.dept}</div>
        <div class="skills">${skillsHTML}</div>
        <p class="professor-bio">${professor.bio}</p>
        <div class="contact-buttons">
            <a href="mailto:${professor.email}" class="contact-btn email-btn">📧 Email</a>
            <a href="tel:${professor.phone}" class="contact-btn phone-btn">📞 Call</a>
        </div>
    `;

    return card;
}

// Handle filter chip selection
function handleFilterChange(e) {
    // Remove active class from all chips
    document.querySelectorAll('.chip').forEach(chip => {
        chip.classList.remove('chip-active');
    });

    // Add active class to clicked chip
    e.target.classList.add('chip-active');

    currentFilter = e.target.dataset.filter;
    filterAndRenderProfessors();
}

// Handle search input
function handleSearch(e) {
    currentSearch = e.target.value.toLowerCase();
    filterAndRenderProfessors();
}

// Filter and render professors based on current filter and search
function filterAndRenderProfessors() {
    let filtered = professorsData;

    // Apply field filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(professor => 
            professor.fields.includes(currentFilter)
        );
    }

    // Apply search filter
    if (currentSearch) {
        filtered = filtered.filter(professor => {
            const searchableText = `
                ${professor.name.toLowerCase()} 
                ${professor.dept.toLowerCase()} 
                ${professor.tags.join(' ').toLowerCase()}
                ${professor.bio.toLowerCase()}
            `.toLowerCase();
            return searchableText.includes(currentSearch);
        });
    }

    // Render results
    renderProfessorsGrid(filtered);
}

// Render professors grid
function renderProfessorsGrid(professors) {
    const grid = document.getElementById('professorsGrid');
    const noResults = document.getElementById('noResults');

    grid.innerHTML = '';

    if (professors.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        noResults.style.display = 'none';
        professors.forEach(professor => {
            grid.appendChild(createProfessorCard(professor, false));
        });
    }
}
