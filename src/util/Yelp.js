const apiKey = 'wDRG5XtsShufjuIAjtLvSVkMW10rIx63EiDdAsM2zo-Yd7igsnFu4IifPmyf1wTn8Ehl77IkXP6lw2RACFdBIXMTWvMm2XiBI1n35cP7nEcZVUm8mVmh-N-hcPpOW3Yx';
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
      headers : {
        Authorization : `Bearer ${apiKey}`
      }
    }).then(response => {
        return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1 + business.location.address2 + business.location.address3,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
        }));
      }
    });
  }
};

export default Yelp;
