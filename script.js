// Add this to your existing script.js file
// Project details page functionality
if (window.location.pathname.includes('projects/details.html')) {
    // Sample project data (in a real app, this would come from an API)
    const projects = [
        {
            id: 1,
            title: "Quantum Simulation Platform",
            description: "Advanced quantum computing simulations using Qiskit framework with visualization tools for quantum states and circuits.",
            image: "http://static.photos/technology/640x360/1",
            tags: ["Python", "Qiskit", "Quantum Computing"],
            timeline: "June 2023 - Present",
            team: "Solo project with mentor guidance",
            status: "In Development",
            content: `
                <p>This project aims to create an intuitive platform for simulating quantum algorithms and visualizing quantum states. The system integrates with IBM's quantum computers through Qiskit while providing educational tools for understanding quantum phenomena.</p>
                
                <h3 class="text-xl font-semibold mt-8 mb-4">Key Features</h3>
                <ul class="list-disc pl-6 mb-6">
                    <li>Interactive quantum circuit builder</li>
                    <li>Real-time statevector visualization</li>
                    <li>Quantum algorithm tutorials</li>
                    <li>Performance benchmarking tools</li>
                    <li>Export capabilities for research papers</li>
                </ul>

                <h3 class="text-xl font-semibold mt-8 mb-4">Technical Details</h3>
                <p>The backend is built with Python using Qiskit for quantum operations, NumPy for matrix operations, and Flask for the API layer. The frontend uses React with D3.js for visualizations and Three.js for 3D Bloch sphere representations.</p>
            `,
            gallery: [
                "http://static.photos/technology/640x360/5",
                "http://static.photos/technology/640x360/6"
            ]
        },
        // Add more projects as needed
    ];

    // Load project data based on URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (projectId) {
        const project = projects.find(p => p.id.toString() === projectId);
        if (project) {
            document.getElementById('project-title').textContent = project.title;
            document.getElementById('project-description').textContent = project.description;
            document.getElementById('project-image').src = project.image;
            document.getElementById('project-timeline').textContent = project.timeline;
            document.getElementById('project-team').textContent = project.team;
            document.getElementById('project-status').textContent = project.status;
            document.getElementById('project-content').innerHTML = project.content;
            
            // Clear and populate tags
            const tagsContainer = document.getElementById('project-tags');
            tagsContainer.innerHTML = '';
            project.tags.forEach(tag => {
                const span = document.createElement('span');
                span.className = 'px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm';
                span.textContent = tag;
                tagsContainer.appendChild(span);
            });

            // Populate gallery
            const galleryContainer = document.getElementById('project-gallery');
            galleryContainer.innerHTML = '';
            project.gallery.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = 'Project screenshot';
                img.className = 'rounded-lg shadow-md';
                galleryContainer.appendChild(img);
            });
        }
    }
}