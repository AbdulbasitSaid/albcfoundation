
const contentListContainer = document.getElementById('home-second-causes');

const contentData = [
    {
        imgUrl: 'assets/images/bg_1.jpeg',
        raisedAmount: '$10086 raised of $15000',
        percent: '67%',
        tag: 'Education',
        title: 'Education for Poor Childrens',
        description: 'Inventore veritatis et quasi archit see ecto beatae vitae dicta sunt explaemo enim voluptatem quia',
        link: 'causes-single.html'
    },
    {
        imgUrl: 'assets/images/bg_1.jpeg',
        raisedAmount: '$10086 raised of $15000',
        percent: '67%',
        tag: 'Education',
        title: 'Education for Poor Childrens',
        description: 'Inventore veritatis et quasi archit see ecto beatae vitae dicta sunt explaemo enim voluptatem quia',
        link: 'causes-single.html'
    },
    {
        imgUrl: 'assets/images/bg_1.jpeg',
        raisedAmount: '$10086 raised of $15000',
        percent: '67%',
        tag: 'Education',
        title: 'Education for Poor Childrens',
        description: 'Inventore veritatis et quasi archit see ecto beatae vitae dicta sunt explaemo enim voluptatem quia',
        link: 'causes-single.html'
    },
    {
        imgUrl: 'assets/images/bg_1.jpeg',
        raisedAmount: '$10086 raised of $15000',
        percent: '67%',
        tag: 'Education',
        title: 'Education for Poor Childrens',
        description: 'Inventore veritatis et quasi archit see ecto beatae vitae dicta sunt explaemo enim voluptatem quia',
        link: 'causes-single.html'
    },
    {
        imgUrl: 'assets/images/bg_1.jpeg',
        raisedAmount: '$10086 raised of $15000',
        percent: '67%',
        tag: 'Education',
        title: 'Education for Poor Childrens',
        description: 'Inventore veritatis et quasi archit see ecto beatae vitae dicta sunt explaemo enim voluptatem quia',
        link: 'causes-single.html'
    },
    // Add more objects here
];

contentData.forEach(data => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    
    itemDiv.innerHTML = `
        <div class="causes-wrap">
            <div class="img-wrap">
                <a href="${data.link}"><img src="${data.imgUrl}" alt=""></a>
                <div class="raised-progress">
                    <div class="skillbar-wrap">
                        <div class="clearfix">
                            ${data.raisedAmount}
                        </div>
                        <div class="skillbar" data-percent="${data.percent}">
                            <div class="skillbar-percent">${data.percent}</div>
                            <div class="skillbar-bar"></div>
                        </div>             
                    </div>
                </div>
            </div>

            <div class="content-wrap">
                <span class="tag">${data.tag}</span>
                <h3><a href="${data.link}">${data.title}</a></h3>
                <p>${data.description}</p>
                <div class="btn-wrap">
                    <a class="btn-primary btn" href="${data.link}">Donate Now</a>
                </div>
            </div>
        </div>
    `;

    contentListContainer.appendChild(itemDiv);
});