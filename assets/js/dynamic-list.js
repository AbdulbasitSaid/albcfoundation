
const contentListContainer = document.getElementById('home-second-causes');

const contentData = [
    {
        imgUrl: 'assets/images/orphanage_project.jpeg', // Update with an appropriate image
        tag: 'Orphanage',
        title: 'Support for Orphanage Project',
        description: 'Help us build a self-sustaining community including a children’s home, school, and other facilities to support orphans and destitute children in Nigeria.',
    },
    {
        imgUrl: 'assets/images/education_project.jpeg', // Update with an appropriate image
        tag: 'Education',
        title: 'Education for Children',
        description: 'Contribute to providing education, vocational training, and holistic development for street children in Nigeria.',
    },
    {
        imgUrl: 'assets/images/healthcare_project.jpeg', // Update with an appropriate image
        tag: 'Healthcare',
        title: 'Healthcare for Vulnerable Children',
        description: 'Support our mission to offer healthcare services to vulnerable children, including regular check-ups, medicines, and nutritional support.',
    },
    {
        imgUrl: 'assets/images/vocational_training.jpeg', // Update with an appropriate image
        tag: 'Education',
        title: 'Education for Children',
        description: 'Contribute to providing education, vocational training, and holistic development for street children in Nigeria.',
    },
    {
        imgUrl: 'assets/images/clothing_project.jpeg', // Replace with an actual image relevant to the clothing project
        tag: 'Clothing',
        title: 'Clothing for Needy Children',
        description: 'Support our initiative to provide clothing for underprivileged children, ensuring they have adequate attire for all seasons and occasions.',
    }
    
];


contentData.forEach(data => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    
    itemDiv.innerHTML = `
        <div class="causes-wrap">
            <div class="img-wrap">
                <a href="${data.link}"><img src="${data.imgUrl}" alt="" class ="slide-image"></a>
       
            </div>

            <div class="content-wrap">
                <span class="tag">${data.tag}</span>
                <h3><a href="${data.link}">${data.title}</a></h3>
                <p>${data.description}</p>
                <div class="btn-wrap">
                    <a class="btn-primary btn" href="#">Donate Now</a>
                </div>
            </div>
        </div>
    `;

    contentListContainer.appendChild(itemDiv);
});