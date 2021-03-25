// import * as moment from 'moment';

// Code below is for rotating pictures
setTimeout(() => {
    const images = [{
        url: 'https://fsl.umich.edu/files/fsl/triangle_2017.jpg',
        alt: 'Exterior shot of the University of Michigan Chapter of Triangle Fraternity.',
        description: 'I was an active member of the University of Michigan Triangle Fraternity chapter from 2016-2020.'
    }, {
        url: 'https://static1.squarespace.com/static/5a5ad2ca8a02c70357f3f50a/t/5a5aea0c0d9297b4ef514246/1611006722081/?format=1500w',
        alt: 'University of Michigan Sailing Team Burgee.',
        description: 'I also was a member of the UM sailing team during my undergrad, but became less involved in my junior and senior years.'
    }, {
        url: 'https://sites.google.com/a/umich.edu/mes/_/rsrc/1419802330316/home/university-of-michigan-logo.png',
        alt: 'University of Michigan Economics Department.',
        description: "I received a Bachelor's degree in Economics from the University of Michigan."
    }, {
        url: 'https://pbs.twimg.com/profile_images/1014201659927429120/mPz4f0D_.jpg',
        alt: 'University of Michigan Center for Entrepreneurship.',
        description: 'I received a minor in Entrepreneurship from the University of Michigan.'
    }, {
      url: 'https://cdn.vox-cdn.com/thumbor/wBWrJPtJVNlX3GzkVbr0HiI4WUE=/0x0:4928x3280/920x613/filters:focal(1696x1086:2484x1874):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59221029/usa_today_10733080.0.jpg',
      alt: 'Michigan in the Final Four',
      description: 'I went to the Final Four in San Antonio in 2018.'
    }, {
      url: 'https://ftw.usatoday.com/wp-content/uploads/sites/90/2019/08/c01-mihigan-22.jpg?w=1000&h=600&crop=1',
      alt: 'Michigan Big House',
      description: 'I went to nearly every home football game during my four years of undergrad.'
    }, {
      url: 'https://cdn.citywonders.com/media/16075/eiffel-tower-view-hero.jpg?anchor=center&mode=crop&width=1024&height=480',
      alt: 'The Eiffel Tower in Paris',
      description: 'I studied abroad in Paris the second semester of my junior year of undergrad.'
}
  ];
      
    const featuredImage = document.getElementById("featured");
    const thumbnails = document.getElementById("thumbnails");
    const current_description = document.getElementById("current_description");
    
    function setFeaturedImageIndex(idx) {
        const img_details = images[idx];
        const imgElement = img_details.element;
        featuredImage.setAttribute("src", img_details.url);
        featuredImage.setAttribute("alt", img_details.alt);
        current_description.textContent = img_details.description;
    
        const previouslyHighlightedImage = images[highlightedImgIndex]
        previouslyHighlightedImage.element.removeAttribute('class');
    
        imgElement.setAttribute('class', 'highlighted');
    
        highlightedImgIndex = idx;
    
        clearTimeout(advanceTimeout);
    
        advanceTimeout = setTimeout(() => {
          setFeaturedImageIndex((idx+1)%images.length);
        }, 5000);
    }
    
    let advanceTimeout;
    let highlightedImgIndex = 0;
    
    for(let i = 0; i<images.length; i++) {
      const img_details = images[i];
      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", img_details.url);
      imgElement.setAttribute("alt", img_details.alt);
    
      img_details.element = imgElement;
    // this is an event listener that waits for the user to hover over the thumbnail pictures
      imgElement.addEventListener("mouseover", () => {
        setFeaturedImageIndex(i);
      });
    
      thumbnails.append(imgElement);
    }
    
    setFeaturedImageIndex(highlightedImgIndex);
    }, 1000)

    // I am using Moment.js for my third party library to have a clock on my homepage
    const NowMoment = moment();

    var update = function() {
        document.getElementById("displayMoment")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    }
    setInterval(update, 1000);

