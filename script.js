// Professor Data
const professorsData = [
    {
        id: 1,
        name: "Dr. Priya Sharma",
        role: "Associate Professor",
        dept: "Electrical Engineering",
        fields: ["solar", "ev", "iot"],
        tags: ["Solar PV Systems", "Smart Grid", "Energy Storage"],
        bio: "Expert in solar energy systems and smart grid technologies.",
        email: "priya.sharma@college.edu",
        phone: "+91 98765 43210",
        avatar: 1
    },
    {
        id: 2,
        name: "Dr. Rohan Mehta",
        role: "Assistant Professor",
        dept: "Computer Science",
        fields: ["ai", "data", "iot"],
        tags: ["Machine Learning", "NLP", "Edge AI"],
        bio: "Specializes in AI applications and edge computing solutions.",
        email: "rohan.mehta@college.edu",
        phone: "+91 98700 11223",
        avatar: 2
    },
    {
        id: 3,
        name: "Dr. Ananya Iyer",
        role: "Professor",
        dept: "Biotechnology",
        fields: ["biotech", "health", "sustainability"],
        tags: ["CRISPR", "Bioinformatics", "Drug Discovery"],
        bio: "Leading researcher in genetic engineering and biotech innovation.",
        email: "ananya.iyer@college.edu",
        phone: "+91 99887 65432",
        avatar: 3
    },
    {
        id: 4,
        name: "Dr. Karthik Nair",
        role: "Associate Professor",
        dept: "Mechanical Engineering",
        fields: ["robotics", "ev", "materials"],
        tags: ["Soft Robotics", "Additive Manufacturing"],
        bio: "Pioneer in robotics and advanced materials research.",
        email: "karthik.nair@college.edu",
        phone: "+91 97654 32100",
        avatar: 4
    },
    {
        id: 5,
        name: "Dr. Sunita Patel",
        role: "Professor",
        dept: "Civil & Environmental",
        fields: ["water", "sustainability", "agri"],
        tags: ["Water Harvesting", "GIS Mapping"],
        bio: "Expert in environmental sustainability and water management.",
        email: "sunita.patel@college.edu",
        phone: "+91 91234 56789",
        avatar: 5
    },
    {
        id: 6,
        name: "Dr. Aman Verma",
        role: "Assistant Professor",
        dept: "Computer Science",
        fields: ["ai", "robotics", "iot"],
        tags: ["Computer Vision", "Drone Tech"],
        bio: "Focuses on computer vision and autonomous systems.",
        email: "aman.verma@college.edu",
        phone: "+91 93456 78901",
        avatar: 6
    },
    {
        id: 7,
        name: "Dr. Neha Gupta",
        role: "Associate Professor",
        dept: "Physics",
        fields: ["solar", "materials", "sustainability"],
        tags: ["Perovskite Solar", "Nanomaterials"],
        bio: "Research leader in next-generation solar technologies.",
        email: "neha.gupta@college.edu",
        phone: "+91 92345 67890",
        avatar: 7
    },
    {
        id: 8,
        name: "Dr. Rajesh Kumar",
        role: "Professor",
        dept: "Data Science",
        fields: ["data", "ai", "health"],
        tags: ["Predictive Analytics", "Health Informatics"],
        bio: "Applying data science to healthcare and AI systems.",
        email: "rajesh.kumar@college.edu",
        phone: "+91 94567 89012",
        avatar: 8
    },
    {
        id: 9,
        name: "Dr. Farah Ali",
        role: "Assistant Professor",
        dept: "Biotechnology",
        fields: ["biotech", "agri", "sustainability"],
        tags: ["Biopesticides", "Soil Microbiome"],
        bio: "Working on sustainable agricultural biotechnology solutions.",
        email: "farah.ali@college.edu",
        phone: "+91 96789 01234",
        avatar: 9
    },
    {
        id: 10,
        name: "Dr. Siddharth Rao",
        role: "Associate Professor",
        dept: "Electrical Engineering",
        fields: ["ev", "iot", "solar"],
        tags: ["Power Electronics", "V2G Technology"],
        bio: "Expert in power electronics and electric vehicle systems.",
        email: "siddharth.rao@college.edu",
        phone: "+91 99012 34567",
        avatar: 10
    },
    {
        id: 11,
        name: "Dr. Meera Krishnan",
        role: "Professor",
        dept: "Environmental Science",
        fields: ["water", "sustainability", "agri"],
        tags: ["Climate Modelling", "Carbon Sequestration"],
        bio: "Climate change expert with focus on environmental solutions.",
        email: "meera.krishnan@college.edu",
        phone: "+91 90123 45678",
        avatar: 11
    },
    {
        id: 12,
        name: "Dr. Vikram Singh",
        role: "Associate Professor",
        dept: "Mechanical Engineering",
        fields: ["materials", "robotics", "ev"],
        tags: ["Composite Materials", "3D Printing"],
        bio: "Specializes in advanced materials and manufacturing technologies.",
        email: "vikram.singh@college.edu",
        phone: "+91 91230 45678",
        avatar: 12
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
        <div class="avatar avatar-${professor.avatar}">${initials}</div>
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
