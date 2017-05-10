exports.seed = function (knex, Promise) {
  return knex('profile').del()
    .then(function () {
      return Promise.all([
        knex('profile').insert({id: 1, url: 'http://pestworldforkids.org/pest-guide/ants/', photo: 'http://dl0.creation.com/articles/p100/c10090/aardvark.jpg', info: 'My favourite food is ants', user_id:99901}),
        knex('profile').insert({id: 2, url: 'http://www.animalstown.com/index.php', photo: 'http://www.animalstown.com/animals/b/baboon/baboon-image-04.jpg', info: 'My favourite food is fruit', user_id:99902}),
        knex('profile').insert({id: 3, url: 'https://en.wikipedia.org/wiki/Capybara', photo: 'http://www.rainforest-alliance.org/sites/default/files/styles/large/public/2016-09/capybara-square.jpg?itok=0F-OOUla', info: 'My favourite food is dirt', user_id:99903}),
        knex('profile').insert({id: 4, url: 'https://en.wikipedia.org/wiki/Duck', photo: 'http://copicola.com/single/duck-40.html', info: 'My favourite food is weeds', user_id:99904}),
        knex('profile').insert({id: 5, url: 'https://en.wikipedia.org/wiki/Elephant', photo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/African_elephant_warning_raised_trunk.jpg', info: 'My favourite food is grass', user_id:99905}),
        knex('profile').insert({id: 6, url: 'https://en.wikipedia.org/wiki/Flyingfox', photo: 'https://www.rainforest-rescue.org/uploads/photos/article/wide/l/baby-flughund-close-up.jpg', info: 'My favourite food is grass', user_id:99906}),
        knex('profile').insert({id: 7, url: 'https://en.wikipedia.org/wiki/Gilamonster', photo: 'http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-FwsgxoJK3kDIK8e3ybztorQ9JDGCmr4D1NKHelCDdlFV9wkfv/', info: 'My favourite food is cheese', user_id:99907}),
        knex('profile').insert({id: 8, url: 'https://en.wikipedia.org/wiki/Heron', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Heron_tricol_01.JPG/220px-Heron_tricol_01.JPG', info: 'My favourite food is fish', user_id:99908}),
        knex('profile').insert({id: 9, url: 'https://en.wikipedia.org/wiki/Impala', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Serengeti_Impala3.jpg/1200px-Serengeti_Impala3.jpg', info: 'My favourite food is grass', user_id:99909}),
        knex('profile').insert({id: 10, url: 'https://en.wikipedia.org/wiki/Jerboa', photo: 'http://www.dododex.com/media/creature/jerboa.png', info: 'My favourite food is reeds', user_id:99910}),
        knex('profile').insert({id: 11, url: 'https://en.wikipedia.org/wiki/Kinkajou', photo: 'http://texasexoticanimals.com/wp-content/gallery/kinkajou/kinkajou_7.JPG', info: 'My favourite food is bananas', user_id:99911}),
        knex('profile').insert({id: 12, url: 'https://en.wikipedia.org/wiki/Lemur', photo: 'https://media.mnn.com/assets/images/2016/08/sclaters-lemur-closeup.jpg.653x0_q80_crop-smart.jpg', info: 'My favourite food is mangoes', user_id:99912}),
        knex('profile').insert({id: 13, url: 'https://en.wikipedia.org/wiki/Mongoose', photo: 'http://www.quickanddirtytips.com/sites/default/files/images/7832/plural-of-mongoose.jpg', info: 'My favourite food is wasps', user_id:99913}),
        knex('profile').insert({id: 14, url: 'https://en.wikipedia.org/wiki/Nyala', photo: 'http://blog.londolozi.com/wp-content/uploads/2011/12/blog.male-nyala.jpg', info: 'My favourite food is grass', user_id:99914}),
        knex('profile').insert({id: 15, url: 'https://en.wikipedia.org/wiki/Ocelot', photo: 'http://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/o/ocelot_thumb.ngsversion.1485204610298.adapt.1900.1.JPG', info: 'My favourite food is voilets', user_id:99915}),
        knex('profile').insert({id: 16, url: 'https://en.wikipedia.org/wiki/Pangolin', photo: 'http://www.pangolinsg.org/wp-content/uploads/sites/4/2016/01/DarrenPietersen.jpg', info: 'My favourite food is ants', user_id:99916}),
        knex('profile').insert({id: 17, url: 'https://en.wikipedia.org/wiki/Quokka', photo: 'http://www.abc.net.au/news/image/8370606-1x1-340x340.jpg', info: 'My favourite food is icecream', user_id:99917}),
        knex('profile').insert({id: 18, url: 'https://en.wikipedia.org/wiki/Rail', photo: 'https://vettips.files.wordpress.com/2015/01/dumbo-rat.jpg', info: 'My favourite food is peanut butter', user_id:99918}),
        knex('profile').insert({id: 19, url: 'https://en.wikipedia.org/wiki/Sloth', photo: 'http://www.animalfactguide.com/wp-content/uploads/2015/09/sloth4.jpg', info: 'My favourite food is flowers', user_id:99919}),
        knex('profile').insert({id: 20, url: 'https://en.wikipedia.org/wiki/Turtle', photo: 'http://www.turtlejournal.com/wp-content/uploads/2015/07/Terrapin-825-3Nest-000-1200.jpg', info: 'My favourite food is turtle food', user_id:99920}),
        knex('profile').insert({id: 21, url: 'https://en.wikipedia.org/wiki/Urial', photo: 'http://www.exoticbiggamehunting.com/Animals/images/Urial_Sheep.jpg', info: 'My favourite food is grass', user_id:99921}),
        knex('profile').insert({id: 22, url: 'https://en.wikipedia.org/wiki/Viscacha', photo: 'https://www.sharesloth.com/wp-content/uploads/2014/07/Mountain-Viscacha-14.jpg', info: 'My favourite food is rocks', user_id:99922}),
        knex('profile').insert({id: 23, url: 'https://en.wikipedia.org/wiki/Wombats', photo: 'https://s-media-cache-ak0.pinimg.com/736x/89/47/a8/8947a8ac5b9bcee203e751b2c85c0635.jpg', info: 'My favourite food is all the things', user_id:99923}),
        knex('profile').insert({id: 24, url: 'https://en.wikipedia.org/wiki/Xerus', photo: 'https://i.ytimg.com/vi/K2BIq4T0kxo/hqdefault.jpg', info: 'My favourite food is croissants', user_id:99924}),
        knex('profile').insert({id: 25, url: 'https://en.wikipedia.org/wiki/Yak', photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Bos_grunniens_at_Yundrok_Yumtso_Lake.jpg', info: 'My favourite food is pie', user_id:99925}),
        knex('profile').insert({id: 26, url: 'https://en.wikipedia.org/wiki/Zebu', photo: 'https://s-media-cache-ak0.pinimg.com/736x/f8/e3/dc/f8e3dcfd9c9e4ed296a55c09c6e9a552.jpg', info: 'My favourite food is little boys', user_id:99926})
      ]);
    });
};
