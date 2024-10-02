/* GET 'about' page */
const about = function(req, res) {
  res.render('generic-text', {
    title: 'About FoodHub',
    content: 'FoodHub was created to help food enthusiasts discover the best dining spots and eateries around them.<br/><br/>Our goal is to connect you with a variety of restaurants, from local favorites to hidden gems, offering cuisines from all over the world. Whether you’re looking for a place to enjoy a family meal, a cozy cafe to catch up with friends, or an elegant restaurant for a special occasion, FoodHub is here to guide you to your perfect dining experience. We are constantly updating our listings and adding new features to make your dining discovery even more delightful!'
  });
};

    module.exports = {
        about
      };