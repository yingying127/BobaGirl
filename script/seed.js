'use strict'

const { db, models: { User, Product, Order, LineItem } } = require('../server/db/')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ 
      profilePicture: 'https://img.freepik.com/free-vector/man-cartoon-character-profile-clipart-drawing_51194-284.jpg?w=996',
      username: 'BobaCody',  
      password: '123', 
      isAdmin: true, 
      firstName: 'Cody', 
      lastName: 'Moldy',
      email: 'moldycody@outlook.com',
      creditCard: 939393939393,
      address: '92 Molding Lane',
      city: 'Cheese Touch',
      state: 'NY',
      zipCode: 11221,
    }),

    User.create({ 
      profilePicture: 'https://img.freepik.com/free-vector/cartoon-girl-student-character-drawing-illustration-clipart-kawaii_51194-275.jpg?w=996',
      username: 'BobaIce',  
      password: '123', 
      isAdmin: true, 
      firstName: 'Ice', 
      lastName: 'Tam',
      email: 'icetam@gmail.com',
      creditCard: 939393939393,
      address: '123 Acorn St',
      city: 'New York',
      state: 'NY',
      zipCode: 11221,
    }),

    User.create({ 
      username: 'murphy', 
      firstName: 'Murphy',
      lastName: 'Smith',
      email: 'murphlovesboba@gmail.com',
      password: '123' 
    }),

    User.create({ 
      profilePicture: 'https://i.pinimg.com/736x/5a/63/8a/5a638a0298e9f8a38ae90862c8a6dc91.jpg',
      username: 'yingying',
      email: 'yingyingbobagirl@gmail.com',
      password: '123',
    }),

    User.create({ 
      username: 'cathy', 
      firstName: 'Cathy ',
      lastName: 'Lu',
      email: 'cathyturtle@gmail.com',
      password: '123',
    }),

    User.create({ 
      username: 'kim',
      firstName: 'Kimberly',
      lastName: 'Wu',
      email: 'kimloveslychee@gmail.com', 
      password: '123' }),

    User.create({ 
      username: 'lucy',
      firstName: 'Lucy',
      lastName: 'Doe',
      email: 'lucydoe1@hotmail.com', 
      password: '123',
      isAdmin: true 
    }),

    User.create({ 
      username: 'bennyboba',
      firstName: 'Benny',
      lastName: 'Jacobs',
      email: 'Benny155@hotmail.com', 
      password: '123',
    }),

    User.create({ 
      username: 'jennyj',
      firstName: 'Jenny',
      lastName: 'Jones',
      email: 'Jennyj155@hotmail.com', 
      password: '123',
    }),

  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded users successfully`)

  // Creating Products
  const products = await Promise.all([
    //Teas:
    Product.create({ 
      name: 'Green Tea', 
      price: 7.00, 
      quantity: 50, 
      key: 'tea', 
      imageUrl: 'https://i.imgur.com/nDYzIbw.png', 
      description: 'In the West, green tea is nowhere near as popular as black tea. Green tea is the most popular type of tea in Japan and in parts of China, and it is gaining popularity in the West. Depending on where they were grown, how they were processed, when they were harvested, etc. good green teas can have a range of tastes. Common descriptors for good quality green tea include: sweet, bittersweet, nutty, vegetal, buttery, floral, swampy, fruity, and oceanic. Steamed green teas tend to taste bittersweet (especially in the aftertaste), while other green teas tend to taste sweet.',
      preparation: 'Many people who think they do not like green tea have simply never tried good green tea that has been prepared correctly. A common mistake in brewing green tea is using boiling water. While it is generally okay to use boiling water to make black tea, using boiling water for green tea can turn even the best leaves into a bitter, nasty mess. Most green teas are best when steeped at around 150 to 180 F, which is only simmering. It is also important to avoid steeping your green tea too long, as over-steeping will also make your green tea undrinkably bitter. Some teas (especially steamed Japanese green teas) should only be steeped for 20 or 30 seconds.'
      }),
    
    Product.create({ 
      name: 'Jasmine Tea', 
      price: 5.50, 
      quantity: 50, 
      key: 'tea', 
      imageUrl: 'https://i.imgur.com/yyeCIty.png', 
      description: 'Jasmine tea generally refers to a tea that has been scented with jasmine flowers or flavorings. It is usually made with green tea and is not an herbal tea. Generally speaking, jasmine tea is only as healthy as the tea used to make it was before it was flavored. However, there is some added benefit in terms of the jasmines relaxing scent, which researchers found was akin to the lavenders relaxing scent in terms of lowering heart rate. Additionally, jasmine flavoring may entice people to drink it more often than unflavored tea, and a tea you drink is much healthier for you than a tea that sits in your cupboard. Some people also claim that jasmine acts as an aphrodisiac... and just when you thought tea was tame! Please note that there is some danger associated with drinking large quantities of jasmine tea during pregnancy and that jasmine tea is best drunk in moderation. Also, while jasmine tea (like many other tea types) is claimed to increase metabolism, it is best to avoid drinking it on an empty stomach, as it is somewhat acidic and can cause stomach discomfort.',
      preparation: 'Jasmine tea is usually best steeped with filtered water that is around 190 F (simmering, not boiling)—three minutes is usually plenty. About one teaspoon per cup of loose-leaf jasmine tea is good, but you can use less tea or more water if you are brewing jasmine pearls (which only take a few pearls per cup) or jasmine flowering tea (one "flower" is enough for a large mug or whole pot of tea).'
    }),
    
    Product.create({ 
      name: 'Oolong Tea', 
      price: 6.00, 
      quantity: 50, 
      key: 'tea', 
      imageUrl: 'https://i.imgur.com/2PnHHmD.png', 
      description: 'Oolong tea, or wulong tea, is one of the five true tea types—along with white tea, green tea, black tea, and pu-erh tea— made from the leaves of the Camellia sinensis plant. The tea is classified as a Chinese tea and is one of the main tea exports from China. The term wulong in Chinese literally translates to "black dragon tea".  Oolong tea has long been used in traditional Chinese medicine as an herbal remedy for everything from stomach ailments to heart disease.',
      preparation: 'There are two methods to brew oolong tea: the traditional Chinese way and the western way. You can also brew oolong tea using oolong tea bags, but most tea experts believe the flavor of bagged teas to be inferior to loose leaf varieties. Whichever method you choose, follow these general guidelines when brewing oolong tea.First, bring water to 200-212 degrees Fahrenheit depending on your oolong variety. Lightly oxidized oolongs should brew at lower temperatures than heavily oxidized varieties.Then, use 2 tablespoons of loose leaf tea for every six ounces of water or one tea pearl if your oolong is sold in ball form.'
    }),
    
    Product.create({ 
      name: 'Lavender Tea', 
      price: 7.00, 
      quantity: 50, 
      key: 'tea', 
      imageUrl: 'https://i.imgur.com/9YPgsbC.png', 
      description: 'Lavender tea offers a delicate flavor and aromatic fragrance that boasts extensive health benefits. Unearth the beauty of this floral plant and find out how drinking a cup of lavender can boost your health. Lavender tea boasts a distinctive flavor and aromatic fragrance. Lavender tea features hints of rosemary and mint. Some blends offer a smoky or woody flavor while others tend to be more floral and sweet. Lavender tea can also have hints of green apple, rose, and earthy notes similar to those found in green tea.',
      preparation: 'Lavender tea can be made using tea bags or loose flowers. The flower buds can be fresh from your garden or dried for added shelf life. We always recommend using loose tea blends rather than tea bags. Loose teas offer fresher flavor and tend to contain better quality flowers and buds than tea bag varieties. Pour 1 cup (250 mL) of water over 1/2 teaspoon of loose lavender buds, and let it steep for a few minutes.'
    }),
    
    Product.create({ 
      name: 'Chamomile Tea', 
      price: 5.00, 
      quantity: 50, 
      key: 'tea', 
      imageUrl: 'https://i.imgur.com/uKiiqAv.png', 
      description: 'Chamomile tea is an herbal tea made from the flowers and buds of the chamomile plant from the daisy family Asteraceae. Chamomile tea is naturally caffeine-free, gluten-free, and a popular bedtime tea. It is known for its soothing and calming properties. The tea is brewed by infusing pure chamomile flowers in hot water. hamomile tea offers herbal and fruity notes with a refreshing, smooth finish. The taste of chamomile tea is often described as similar to a crisp apple. In fact, chamomile derives its name from the Greek words “chamaimelon,” which literally translate to "ground apple" or "earth apple". Chamomile tea boats a light, airy taste with a sweet aromatic scent. The tea is light yellow in color, mimicking the look of gentle sunlight. The tea also boasts a range of health benefits that make it as good for you as it is tasty.',
      preparation: 'To brew fresh chamomile tea, simply place the flowers in hot water and steep for three to five minutes. Use a tea strainer to remove the flowers before drinking. Certified organic loose leaf teas tend to have better flavor and health benefits when compared to tea bags. That is usually because tea bags only contain broken pieces and dust of the healthy plants. Loose tea on the other hand contains the whole flowers, ensuring you get all the flavor and benefits from each brew. If you absolutely have to use a chamomile tea bag, opt for one that is large enough to let the flowers expand completely to infuse flavor.',
      quantity: 50 
    }),
    
    Product.create({ 
      name: 'Chrysanthemum Tea', 
      price: 6.00, 
      quantity: 50, 
      key: 'tea', 
      imageUrl: 'https://i.imgur.com/rXJuJ26.png', 
      description: `Chrysanthemums are flowering plants native to East Asia. These edible flowers are often used as a garden decoration and natural pest control, but they also have culinary applications. Yellow or white chrysanthemum flowers can be boiled to make an herbal tea with a range of health benefits.`, 
      preparation: `You can also make your own chrysanthemum tea at home. To prepare chrysanthemum tea at home, boil 0.2 ounces of dried chrysanthemum flowers in 3 cups of water. Let the tea steep for three to five minutes and enjoy plain or with light sweeteners like a bit of sugar or honey, to taste.`
    }),
    
    Product.create({ 
      name: 'Rose Tea', 
      price: 6.00, 
      quantity: 50, 
      key: 'tea', 
      imageUrl: 'https://i.imgur.com/k1KaFqC.png', 
      description: `Rose tea is an herbal tea that can be made from a variety of different parts of the rose plant including rose petals, rose buds, and rosehips. The tea is also often blended with true tea leaves such as green tea and black tea to make floral flavored teas. Rose tea blends are also combined with other herbal teas such as chamomile tea, hibiscus tea, and rooibos. Rose tea is a caffeine-free herbal tea that is a best seller thanks to its sweet, floral flavor. The tea contains vitamins and minerals as well as antioxidants that are beneficial for well-being. Try this herbal tea today and discover the different flavors or rose petal tea, rose hips tea, and rose bud tea.`,
      preparation: `Rose tea can be brewed using tea bags, loose tea, or fresh petals from your garden. Bring filtered or spring water to a rolling boil in a large teapot or electric kettle. Add in one teaspoon of rose petals or rose hips for every eight ounces of water. Steep the rose tea in the boiling water using an infuser for 5 to 7 minutes. If you are making an herbal tea blend with black tea or another strong true tea, limit the steeping time to 3 to 5 minutes. Remove the strainer from the hot water and pour the rose water tea into a teacup. Add sweetener if desired and enjoy.`
    }),

    //Toppings:

    Product.create({ 
      name: 'Tapioca Pearls', 
      price: 3.00, 
      quantity: 50, 
      key: 'topping', 
      imageUrl: 'https://i.imgur.com/SHp7tL2.png', 
      description: `Tapioca pearls are edible translucent spheres produced from tapioca, a starch extracted from the cassava root. Tapioca pearls make the unique ingredient of a bubble tea or boba tea drinks. They are about the size of pearls or small marbles, with the soft and chewy consistency of gummy candies. The pearls are opaque when raw and turned translucent after cooking. They need to be soaked for a considerable length of time before use in different food preparations.`, 
      preparation: `
      1) Boil 10 cups of water for every 1 cup of tapioca pearls in a large pot. Add tapioca slowly into boiling pot and stir lightly. 
      2) Wait until tapioca floats to water surface. Cover pot. Cook in medium heat for 2-3 minutes. Turn off head and simmer for another 2-3 minutes (adjust time to soften tapioca to personal tastes). 
      3) Scoop out tapioca and let it rest in cold water for 20 seconds. Scoop out tapioca into dry bowl and mix in sugar or honey.` 
    }),

    Product.create({ 
      name: 'Strawberry Popping Boba', 
      price: 6.50, 
      quantity: 50, 
      key: 'topping', 
      imageUrl: 'https://i.imgur.com/7eXsscr.png', 
      description: `Strawberry popping pearls, also known as popping boba, are liquid-filled balls with the essence and goodness of strawberry with a juicy burst of flavor. A little smaller in size than the regular tapioca boba, popping pearls leave your taste buds satisfied with a gush of fruit flavor. The vibrant dark red color of the boba jelly balls makes your recipe look delicious. Our popping pearls will also help your food look creative and trendy that keep them coming back for more.`,
      preparation: `Popping pearls are a simple and easy addition because there are no preparing or cooking required. Serve these popping boba straight from the jar!` 
    }),

    Product.create({ 
      name: 'Lychee Jelly', 
      price: 7.00, 
      quantity: 50, 
      key: 'topping', 
      imageUrl: 'https://i.imgur.com/mrBfQ9k.png', 
      description: `Lychee jelly is a jiggly jelly dessert made from the tropical lychee fruit. Lychee jelly is sweet and slightly tart, with the floral, tropical flavor notes of the lychee fruit. The texture is solid yet soft, jiggly, and bouncy. It's often thicker than jellies made with gelatin.`,
      preparation: `Lychee jelly is a simple and easy addition because there is no preparing or cooking required. Serve the lychee jelly straight from the jar!`
    }),

   Product.create({ 
    name: 'Rainbow Mini Mochi', 
    price: 4.00, 
    quantity: 200 , 
    key: 'topping', 
    imageUrl: 'https://i.imgur.com/PPra5UG.png',
    description: 'Mini Mochi is one of the most popular flavors you can think of to top off your favorite dessert. Imagine a spoonful of matcha green tea snow ice or frozen yogurt, sided with these little rice cake balls, and a bit of red bean. Delicious!',
    preparation: 'Add it as a topping to your drink!'
  }),
    
  Product.create({ 
    name: 'Red Bean Paste', 
    price: 4.00, 
    quantity: 200, 
    key: 'topping', 
    imageUrl: 'https://i.imgur.com/UMw4OGN.png',
    description: 'Red bean soaked and mixed with sugar is a popular topping in bubble tea.  It is not only delicious but healthy and provides nutrients and health benefits. Red bean is rich in potassium which can help to regulate blood pressure and is therefore beneficial to the heart. Red bean is also rich in antioxidants which can protect organs from attack by free radicals.  Red bean contains vitamins A, B6 and minerals like magnesium and iron.',
    preparation: 'Add it as a topping to your drink!'
  }),
  
  Product.create({ 
    name: 'Black Grass Jelly' , 
    price: 4.00, 
    quantity: 200 , 
    key: 'topping', 
    imageUrl: 'https://i.imgur.com/DbVZdG2.png',
    description: 'Grass jelly, also known as leaf jelly or herb jelly, is a jelly-like dessert eaten in East and Southeast Asia. It is created by using the Platostoma palustre plant (a member of the mint family) and has a mild, slightly bitter taste. It is served chilled, with other toppings such as fruit, or in bubble tea or other drinks. It has a soft silky texture, easy to mix and delicious to eat.  Mix it with some sugar if you like things extra sweetened!',
    preparation: 'Add it as a topping to your drink!'
  }),

      // merch
    Product.create({ 
      name: 'Boba Girls Metal Straws (4 Pack, 215mm)', 
      price: 10.00, quantity: 57, key: 'merchandise', 
      imageUrl: 'https://i.imgur.com/pN5jH7H.png', 
      description: `4 premium straight 8.5 inch (215 mm) stainless steel drinking straws with unbleached carry pouch and reusable cleaning brush. These anti-rust, scratch-proof straws are perfect for hot or cold beverages. Ditch the plastic! More than 500,000 straws are thrown away every day. Now you can be part of the solution with a reusable, washable straw that you can take anywhere. Precision crafted from food-grade stainless steel, these straws are perfect for using on the go or at home. Dip into your morning smoothie or tuck into a handy travel pouch for your day at the office. A washable, reusable bristle brush makes cleanup a breeze. Each set includes 4 straight silver drinking straws, one reusable cleaning brush, and one unbleached cloth travel bag for carrying on the go or storing at home. One set will last a lifetime, replacing thousands of plastic drinking straws!`,
      preparation: `
      BPA Free
      Food-grade silicone and stainless steel construction
      Dishwasher safe
      Parts: 4 piece 255mm straw (1 extender)
      Weight: .55 ounces (15.6 g)
      Size: 8.9" H x .39" W (226.1 mm H x 10 mm W)`
    }),

    Product.create({ 
      name: 'Boba Girls Glass Boba Straws (2 Pack, 14mm)', 
      price: 10.00, quantity: 57, key: 'merchandise', 
      imageUrl: 'https://i.imgur.com/06NcLme.png', 
      description: `4-piece set includes two 9-in 14mm etra wide boba straws, one 9-inch cleaning brush and a carrying case. Perfect for drinking bubble tea with toppings, or use the straws for smoothies! This is the ideal size with a nice glass straw.`,
      preparation: `
      Food grade borosilicate glass, BPA FREE, Lead Free, Eco-friendly. DISHWASHER SAFE
      Parts: 4 piece 255mm straw (1 extender)
      Weight: .55 ounces (15.6 g)
      Size: 8.9" H x .39" W (226.1 mm H x 10 mm W)`
    }),

    Product.create({ 
      name: 'Boba Girls 24oz Reusable Boba Cup with Lid', 
      price: 25.00, 
      quantity: 300, 
      key: 'merchandise', 
      imageUrl: 'https://i.imgur.com/kw6LTHd.png', 
      description: `A reusable tumbler cup equipped with a plastic boba straw so you can slurp 24oz of boba goodness. Designed from durable plastic with a double-wall design for a clean look. Featuring a leak-proof lid with a silicone grommet, this reusable boba cup is the perfect vessel for sipping or snapping your aesthetically-pleasing bubble tea, green juices or infused waters! Shake up your drink and toppings with the lid closed and sip sustainably with your perfect reusable boba cup and straw pair`,
      preparation: `
      Size: 24 oz. 
      Material: 100% BPA free, plastic
      Note: Plastic-Free, Dishwasher Safe, Food-Safe, Silicone Take-Back Program.
      Care: To clean, unscrew the reusable bubble tea cup with lid and hand wash the glass jar. The silicone grommet on the lid can be pulled out for cleaning. Please be extra careful when cleaning the drinking hole once the silicone grommet has been removed! Allow parts to fully air dry between uses. Once dry, place the silicone grommet back on the lid and screw the lid back onto the glass.`
    }),

    Product.create({ 
      name: 'Boba Girls 24oz Mason Jar', 
      price: 23.50, 
      quantity: 300, 
      key: 'merchandise', 
      imageUrl: 'https://i.imgur.com/Em5Jovv.png', 
      description: `A reusable mason jar equipped with a metal boba straw so you can slurp 24oz of boba goodness. Designed from durable plastic with a double-wall design for a clean look, this 24-ounce plastic tumbler with straw is as stylish as it is useful. The lidded design helps prevent leaks and spills, while the included straw lets you take easy and refreshing sips of your favorite beverage. Whether used to sip your favorite cold beverage or looking for a standout gift, this tumbler makes the perfect pick.`,
      preparation: `
      Size: 24 oz. 
      Material: 100% BPA free, plastic
      Note: Not dishwasher or microwave safe. Not to be used for hot drinks.` 
    }),

    Product.create({ 
      name: 'Boba Girls 16oz Glass Tumbler with Straw and Bamboo Lid', 
      price: 15.00, 
      quantity: 300, 
      key: 'merchandise', 
      imageUrl: 'https://i.imgur.com/YBKO5hO.png', 
      description: `Whether you're reading, writing or busy with other activities, you'll stay hydrated when you keep this 16-Ounce Glass Tumbler with Straw and Bamboo Lid from Boba Girls close by. This glass tumbler features a solid-color design with a transparent top and wood-tone lid for an elegant construction that suits your daily style. The included straw helps you drink conveniently while the silicone sleeve helps provide a secure fit. Use this lidded tumbler at home, at the office or anywhere on the go to sip your favorite cold beverages with ease. Comes with lid and straw for added convenience!`,
      preparation: `
      Size: 16 oz. 
      Material: 100% BPA free, plastic
      Note: Dishwasher-Safe Top Rack Only` 
    }),

    Product.create({
      name:'Boba Mini Backpack',
      price: 40.00,
      quantity: 200,
      key: 'merchandise',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0101/6617/3732/products/boba-mini-backpack-bubble-tea-boba-tea-14709426618404_800x.jpg?v=1600345348',
      description: 'Calling Boba tea (Bubble tea) lovers from around the world, this cute Mini Backpack will be your new best companion for travelling or for everyday life. It\’s compact yet spacious, perfect for fitting all your essentials whilst going about your everyday life.Don’t let the cuteness fool you, it’s as cute as it is functional. Designed to be configured three different ways—as a backpack, crossbody or a shoulder bag—this Boba Mini Backpack will have you ready for anything.', 
      preparation: `1 main compartment, 1 interior pocket, 1 back zipper pocket, 2 small side pockets. Materials: Premium Faux leather. Dimensions: 19.5 x 11.5 x 24 cm (7.6 x 4.5 x 9.4 in)`,
    }),

    Product.create({
      name:'Boba Girls Tote',
      price: 25.00,
      quantity: 200,
      key: 'merchandise',
      imageUrl: 'https://imgur.com/aDTDrlq.jpg',
      description: 'Introducing our limited edition BobaGirls Tote bag, designed to be the cutest representation of how much Love & Happiness Boba tea brings into our lives and everyone around us. The Boba is Life Tote bag is the cutest way to showcase your love for Boba and is the perfect company for your everyday life.', 
      preparation: `Bag dimensions: 38.1cm x 38.1cm (15 x 15 in). Handle dimensions: Handle Length 30 cm (11.8 in), width 2.5cm (1 in). 100% Polyester`,
    }),

    Product.create({
      name:'Boba Milk Tea AirPods Case',
      price: 20.00,
      quantity: 200,
      key: 'merchandise',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0101/6617/3732/products/boba-milk-tea-airpods-case-bubble-tea-boba-tea-14728192458788_x686@2x.jpg?v=1592523275',
      description: 'If you\’re living life on the edge and leaving your AirPods naked and without a case, you’re almost guaranteed to damage it or even worse, lose it. Don\’t worry, we\’ve got your back on this and designed this cute little Boba Milk Tea AirPods case to help keep your precious AirPods safe and sound in its loving embrace. We\’ve made each of our Boba Milk tea AirPods case promise to keep your AirPods safe no matter how much wear and tear they experience with your everyday life.',
      preparation: 'Compatible with AirPod Pros'
    }),

    Product.create({
      name:'Boba Tea AirPods Pro Case',
      price: 10.00,
      quantity: 200,
      key: 'merchandise',
      imageUrl: 'https://i.imgur.com/3KlZL40.png',
      description: 'This cute Boba tea AirPods Pro Case is the perfect sidekick to your new AirTag. It will stay firmly attached to your bag, backpack or your keys while following you on all of your daily adventures and travel. It\’s adorable yet thoughtful design features raised edges that helps keep your Airtag safely inside without being scratched or damaged. The open design keeps the elegant AirTag design and your personalized engravings exposed.',
      preparation: 'Compatible with AirPod Pros'
    }),

    Product.create({
      name:'BobaGirls Pillow',
      price: 15.00,
      quantity: 20,
      key: 'merchandise',
      imageUrl: 'https://imgur.com/Z3WMmMB.jpg',
      description: 'This cute pillow is the perfect room decor for the boba tea lovers! It goes great in a dorm, living room, bedroom, etc!',
      preparation: '10L x 12W | 100% cotton'
    }),
    
    Product.create({
      name:'BobaGirls iPhone 13 Case',
      price: 10.00,
      quantity: 20,
      key: 'merchandise',
      imageUrl: 'https://imgur.com/6W3izgj.jpg',
      description: 'The best phone case for all the boba lovers!', 
      preparation: 'Fits an iPhone 13 and is shock absorbant'
    }),

    Product.create({
      name:'BobaGirls Dad Hat',
      price: 14.00,
      quantity: 20,
      key: 'merchandise',
      imageUrl: 'https://imgur.com/dNavMU2.jpg',
      description: 'The cutest Dad Hat for all the boba lovers!',
      preparation: 'One Size Fits All'
    }),
   
    Product.create({
      name:'BobaGirls Face Mask ',
      price: 10.00,
      quantity: 20,
      key: 'merchandise',
      imageUrl: 'https://imgur.com/36rbuWZ.jpg',
      description: 'Keep yourself safe from the germs with a BobaGirls face mask! 100% cotton',
      preparation: 'One Size Fits All'
    }),


    //Syrups:
    Product.create({ 
      name: 'Black Sugar Syrup', 
      price: 5.50, 
      quantity: 50, 
      key: 'syrup', 
      imageUrl: 'https://i.imgur.com/8VLoGnr.png', 
      description: `One of the most popular sweeteners used in bubble tea, our Bossen Black Sugar syrup (aka Brown Sugar) is a dark, thick, crystalline form of sugar that has a delicious caramel flavor and aroma. Best for making classic milk teas, also wonderfully enhances smoothies, fruit juices, yogurt, and shaved ice desserts. Historically, more than just a distinctive sweetener, Black Sugar is also used by traditional Chinese medical practitioners who recommend it to provide an energy boost and enhance blood circulation, among other things.`,
      preparation: `
      * Recommended Serving: 8 oz. syrup to every one gallon of plain frozen yogurt.
      * Net Weight: 750 mL (25.4 fl oz) per bottle.` 
      }),
    
    Product.create({ 
      name: 'Dragon Fruit Syrup', 
      price: 5.50, 
      quantity: 50, 
      key: 'syrup', 
      imageUrl: 'https://i.imgur.com/rCFVer5.png', 
      description: `Dragon fruit is native to Central American and is now consumed all around the world. It is also known as "Pitaya" and comes in various forms and colors. Boba Girls' Fruit syrup has a beautiful signature magenta color and it will add a refreshing taste to any summertime tea.`, 
      preparation: `
      * Recommended Serving: 8 oz. syrup to every one gallon of plain frozen yogurt.
      * Net Weight: 750 mL (25.4 fl oz) per bottle.` 
      }),
    
    Product.create({ 
      name: 'Lychee Syrup', 
      price: 5.50, 
      quantity: 50, 
      key: 'syrup', 
      imageUrl: 'https://i.imgur.com/I9oVRTQ.png', 
      description: `Boba Girls' Lychee syrup is a classic Asian fruit with a nice subtle sweetness. This adds a great flavor to your drink without losing the taste of the tea.`,
      preparation:`
      * Recommended Serving: 8 oz. syrup to every one gallon of plain frozen yogurt.
      * Net Weight: 750 mL (25.4 fl oz) per bottle.` 
     }),

    Product.create({ 
      name: 'Peach Syrup', 
      price: 5.50, 
      quantity: 50, 
      key: 'syrup', 
      imageUrl: 'https://i.imgur.com/2zTJCtD.png', 
      description: `Peach syrup is a classic flavor, adding great taste to any drink of your choice. Best paired with black tea.`,
      preparation:`
      * Recommended Serving: 8 oz. syrup to every one gallon of plain frozen yogurt.
      * Net Weight: 750 mL (25.4 fl oz) per bottle.`
     }),

    Product.create({ 
      name: 'Honeydew Syrup', 
      price: 5.50, 
      quantity: 50, 
      key: 'syrup', 
      imageUrl: 'https://i.imgur.com/3SHw77P.png', 
      description: `Honeydew syrup accentuates the real honeydew fruit flavor and is rich in melony sweetness. Use it to make a perfect summer pick-me-up refresher. A melon bubble iced tea, boba smoothie, or ice-blended fruit juice will alight on the tongue like sunshine.`,
      preparation: `
      * Recommended Serving: 8 oz. syrup to every one gallon of plain frozen yogurt.
      * Net Weight: 750 mL (25.4 fl oz) per bottle.` 
      }),

    Product.create({ 
      name: 'Strawberry Syrup', 
      price: 5.50, 
      quantity: 50, 
      key: 'syrup', 
      imageUrl: 'https://i.imgur.com/O4ewIE2.png', 
      description: `Everyone loves strawberries!  Its combination of sweet and tart is divine and addictive. Boba Girls' syrup is extracted from natural strawberries with little seeds and pieces of pulp inside, the syrup has a robust fruity aroma and authentic taste for juicy strawberry.`,
      preparation: `
      * Recommended Serving: 8 oz. syrup to every one gallon of plain frozen yogurt.
      * Net Weight: 750 mL (25.4 fl oz) per bottle.` 
     }),

    Product.create({ 
      name: 'Mango Syrup', 
      price: 5.50, 
      quantity: 50, 
      key: 'syrup', 
      imageUrl: 'https://i.imgur.com/W54T8cE.png', 
      description: `Whatever season it is, in our heart we long for that summer beach vacation sometimes. Let our mango syrup recreate tropical refreshers for you.`,
      preparation: `
      * Recommended Serving: 8 oz. syrup to every one gallon of plain frozen yogurt.
      * Net Weight: 750 mL (25.4 fl oz) per bottle.` 
     }),

    Product.create({ 
      name: 'Passion Fruit Syrup', 
      price: 5.50, 
      quantity: 50, 
      key: 'syrup', 
      imageUrl: 'https://i.imgur.com/RBqkpzv.png', 
      description: `Boba Girls' passion fruit syrup is rich in flavor and contains an authentic passion fruit aroma. Infuse it with your favorite drinks like iced tea, slush, smoothie, or top it on frosty desserts like ice cream, shaved ice, and frozen yogurt.`,
      preparation: `
      * Recommended Serving: 8 oz. syrup to every one gallon of plain frozen yogurt.
      * Net Weight: 750 mL (25.4 fl oz) per bottle.` 
      }),

    Product.create({ 
      name: 'Grapefruit Syrup', 
      price: 5.50, 
      quantity: 50, 
      key: 'syrup', 
      imageUrl: 'https://i.imgur.com/Vj43PCV.png', 
      description: `Boba Girls' grapefruit syrup is a classic. It is balanced perfectly with a nice mix of sweet and bitterness flavors. Paired best with cold drinks, served with black tea.`,
      preparation: `
      * Recommended Serving: 8 oz. syrup to every one gallon of plain frozen yogurt.
      * Net Weight: 750 mL (25.4 fl oz) per bottle.` 
    }),

    Product.create({ 
      name: 'Wintermelon Syrup', 
      price: 5.50, 
      quantity: 50, 
      key: 'syrup', 
      imageUrl: 'https://i.imgur.com/UefXqUF.png', 
      description: `Wintermelon is a large fruit that belongs to the honeydew family. It adds a nice sweetness into your drink! Good either in a cold or hot drink, served with black or green tea.`,
      preparation: `
      * Recommended Serving: 8 oz. syrup to every one gallon of plain frozen yogurt.
      * Net Weight: 750 mL (25.4 fl oz) per bottle.` 
    }),

    Product.create({ 
      name: 'Green Apple Syrup', 
      price: 5.50, 
      quantity: 50, 
      key: 'syrup', 
      imageUrl: 'https://i.imgur.com/xYHQRCB.png', 
      description: `Green apple is classic twist on your drink. Delicious, tart, and sweet flavors to add into your tea! Best when cold mixed with green tea.`,
      preparation: `
      * Recommended Serving: 8 oz. syrup to every one gallon of plain frozen yogurt.
      * Net Weight: 750 mL (25.4 fl oz) per bottle.` 
      }),

    Product.create({ 
      name: 'Kiwi Syrup', 
      price: 5.50, 
      quantity: 50, 
      key: 'syrup', 
      imageUrl: 'https://i.imgur.com/hdASDnL.png', 
      description: `Boba Girls' pride ourselves in providing traditional flavors as well as hard-to-find tropical flavors. We recommend adding 8 oz. of kiwi syrup to every one gallon of plain frozen yogurt.`,
      preparation: `
      * Recommended Serving: 8 oz. syrup to every one gallon of plain frozen yogurt.
      * Net Weight: 750 mL (25.4 fl oz) per bottle.` 
      }),
    
    //milk powders
      Product.create({ 
      name: 'Whole Milk Powder',
      price: 6.00, 
      quantity: 200 , 
      key: 'milk',
      imageUrl: 'https://i.imgur.com/p1fzQCS.png', 
      description: 'Whole milk in its most unadulterated form — and in addition to the fat found in milk, the main component (about 87 percent) is water. You\'ll also find vitamins, minerals, sugars like lactose and proteins like caseins and whey proteins. Perfect for the daily dairy lovers who want it as it\'s made',
      preparation: `
      Net Weight: 5lb (2.27kg)
      `
     }),
    
    Product.create({ 
      name: 'Skim Milk 2% Powder' , 
      price: 6.00, 
      quantity: 200 , 
      key: 'milk',
      imageUrl: 'https://i.imgur.com/ijYJCSo.png', 
      description: 'Skim Milk is made when all the milkfat is removed from whole milk. It tends to contain around very little fat. Perfect for when you want less milk fat in your boba, but still want the nutrients and consistency from real dairy.',
      preparation: `
      Net Weight: 5lb (2.27kg)
      `
    }),
    
    Product.create({ 
      name: 'Almond Milk Powder' , 
      price: 8.00, 
      quantity: 200 , 
      key: 'milk', 
      imageUrl: 'https://i.imgur.com/Coikm4T.png',
      description: 'Almond milk is a plant milk with a creamy texture and nutty flavor manufactured from almonds, although some types or brands are flavored in imitation of cow\'s milk. It does not contain cholesterol or lactose and is low in saturated fat. Perfect for those who cannot have genuine dairy products.',
      preparation: `
      Net Weight: 5lb (2.27kg)
      `
    }),
    
      Product.create({ 
      name: 'Oat Milk Powder' , 
      price: 9.00, 
      quantity: 200 , 
      key: 'milk',
      imageUrl: 'https://i.imgur.com/vDaDHQq.png', 
      description: 'Oat milk is a plant milk derived from whole oat grains by extracting the plant material with water. Oat milk has a creamy texture and mild oatmeal-like flavor, and is manufactured in various flavors, such as sweetened, unsweetened, vanilla, and chocolate. Flavors can also be made at home such as chocolate, with cocoa powder, it makes the perfect chocolate oat milk.  Perfect for those with dairy and almond allegies',
      preparation: `
      Net Weight: 5lb (2.27kg)
      `
    }),
    
    Product.create({ 
      name: 'Soy Milk Powder' , 
      price: 9.00, 
      quantity: 200 , 
      key: 'milk', 
      imageUrl: 'https://i.imgur.com/onHr3RM.png',
      description: 'Soymilk, is a plant-based drink produced by soaking and grinding soybeans, boiling the mixture, and filtering out remaining particulates. It is a stable emulsion of oil, water, and protein. Its original form is an intermediate product of the manufacture of tofu. Perfect for those with dairy and almond allergies that enjoy tofu and something with nutrients.', 
      preparation: `
      Net Weight: 5lb (2.27kg)
      `
    }),

    Product.create({ 
      name: '2 Cups Milk Tea Kit', 
      price: 15.00, 
      quantity: 50, 
      key: 'kit', 
      imageUrl: 'https://i.imgur.com/ekqddxm.png', 
      description: `
      Choose 1 type of tea leaf. Comes with Tapioca Pearls (uncooked), Milk Powder of Choice, Brown Sugar Syrup, Bubble Tea Straws, Instructions & Recipe` ,
      preparation: `
      Able to brew 2 cups of Milk Tea (400 ml per cup)` 
    }),

    Product.create({ 
      name: '2 Cups Fruit Tea Kit', 
      price: 13.00, 
      quantity: 50, 
      key: 'kit', 
      imageUrl: 'https://i.imgur.com/eqrxZ7R.png', 
      description: `
      Choose 1 type of tea leaf, and choose 1 type of fruit syrup. Comes with Tapioca Pearls (uncooked), Brown Sugar Syrup, Bubble Tea Straws, Instructions & Recipe`,
      preparation: `
      Able to brew 2 cups of Fruit Tea (400 ml per cup)`
     }),
    
    Product.create({ 
      name: '4 Cups Milk Tea Kit', 
      price: 23.00, 
      quantity: 50, 
      key: 'kit', 
      imageUrl: 'https://i.imgur.com/mAc0XDU.png', 
      description: `
      Choose 2 types of tea leaves. Comes with Tapioca Pearls (uncooked), Milk Powder of Choice, Brown Sugar Syrup, Bubble Tea Straws, Instructions & Recipe`,
      preparation: `
      Able to brew 4 cups of Milk Tea (400 ml per cup)`
    }),

    Product.create({ 
      name: '4 Cups Mix Tea Kit', 
      price: 26.00, 
      quantity: 50, 
      key: 'kit', 
      imageUrl: 'https://i.imgur.com/ACnnLiD.png', 
      description: `
      Choose 2 types of tea leaves, and choose 2 types of fruit syrup. Comes with Tapioca Pearls (uncooked), Brown Sugar Syrup, Bubble Tea Straws, Instructions & Recipe`,
      preparation: `
      Able to brew 2 cups of Milk Tea and 2 cups of Fruit Tea (400 ml per cup)` 
    }),
      // Product.create({ name: '', price: 6.00, quantity: 50, key: '', imageUrl: '', 
      // description: `` }),
      
  ])

  console.log(`seeded ${products.length} products`)
  console.log(`seeded products successfully`)

  // Creating Orders
  const orders = await Promise.all([
    // cody
    Order.create({ totalCost: 2, userId: users[0].id, isCart: false, time: '4/13/2022'}),
    Order.create({ totalCost: 6, userId: users[0].id, isCart: false, time: '4/17/2022' }),
    
    //murphy
    Order.create({ totalCost: 5, userId: users[1].id, isCart: false, time: '4/2/2022' }),
    Order.create({ totalCost: 3, userId: users[1].id, isCart: false, time: '4/15/2022' }),
    Order.create({ totalCost: 5, userId: users[1].id, isCart: false, time: '4/25/2022' }),
    Order.create({ totalCost: 5, userId: users[1].id, isCart: false, time: '5/2/2022' }),
    Order.create({ totalCost: 5, userId: users[1].id, isCart: false, time: '5/9/2022' }),

    //ice
    Order.create({ totalCost: 5, userId: users[2].id, isCart: false, time: '4/2/2022' }),
    Order.create({ totalCost: 5, userId: users[2].id, isCart: false, time: '5/1/2022' }),

    //yingying
    Order.create({ totalCost: 5, userId: users[3].id, isCart: false, time: '4/2/2022' }),
    Order.create({ totalCost: 5, userId: users[3].id, isCart: false, time: '5/1/2022' }),

    //cathy
    Order.create({ totalCost: 5, userId: users[4].id, isCart: false, time: '4/2/2022' }),
    Order.create({ totalCost: 5, userId: users[4].id, isCart: false, time: '5/1/2022' }),
    
    //kim
    Order.create({ totalCost: 5, userId: users[5].id, isCart: false, time: '4/2/2022' }),
    Order.create({ totalCost: 5, userId: users[5].id, isCart: false, time: '5/1/2022' }),
  ])

  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded orders successfully`)
  /*
    Products:
      0 - Green Tea                     13 - black sugar
      1 - Jasmine Tea                   14 - dragon fruit
      2 - Oolong Tea                    15 - lychee
      3 - Lavender Tea                  16 - peach
      4 - Chamomile Tea                 17 - honeydew
      5 - Chrysanthemum Tea             18 - strawberry
      6 - Rose Tea                      19 - mango
      7 - Tapioca Pearls                20 - passionfruit
      8 - Strawberry Popping Boba       21 - grapefruit
      9 - Lychee Jelly                  22 - wintermleon
      10 - Metal Straws                 23 - green apple
      11 - Reusable Tumblr              24 - kiwi
      12 - Mason Jar                    25 
  */

  // Creating LineItems
  const lineitems = await Promise.all([
    // cody
    LineItem.create({ quantity: 1, cost: 3, productId: products[0].id, orderId: orders[0].id }), // This should show up in cart
    LineItem.create({ quantity: 2, cost: 3, productId: products[1].id, orderId: orders[0].id }), 
    LineItem.create({ quantity: 2, cost: 3, productId: products[2].id, orderId: orders[0].id }),
    LineItem.create({ quantity: 2, cost: 3, productId: products[3].id, orderId: orders[0].id }),
    LineItem.create({ quantity: 2, cost: 3, productId: products[13].id, orderId: orders[0].id }),
    LineItem.create({ quantity: 2, cost: 3, productId: products[15].id, orderId: orders[0].id }),
    LineItem.create({ quantity: 2, cost: 3, productId: products[16].id, orderId: orders[0].id }),
    LineItem.create({ quantity: 2, cost: 3, productId: products[17].id, orderId: orders[0].id }),

    LineItem.create({ quantity: 1, cost: 3, productId: products[2].id, orderId: orders[1].id }), // This should not show up in cart
    LineItem.create({ quantity: 1, cost: 3, productId: products[3].id, orderId: orders[1].id }),

    // murphy
    LineItem.create({ quantity: 1, cost: 6, productId: products[2].id, orderId: orders[2].id }), // This should not show up in cart
    LineItem.create({ quantity: 1, cost: 6, productId: products[3].id, orderId: orders[2].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[4].id, orderId: orders[2].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[7].id, orderId: orders[2].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[9].id, orderId: orders[2].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[10].id, orderId: orders[2].id }),

    LineItem.create({ quantity: 1, cost: 3, productId: products[0].id, orderId: orders[3].id }), // This should show up in cart
    LineItem.create({ quantity: 3, cost: 3, productId: products[2].id, orderId: orders[3].id }),
    LineItem.create({ quantity: 4, cost: 3, productId: products[4].id, orderId: orders[3].id }),

    LineItem.create({ quantity: 1, cost: 6, productId: products[1].id, orderId: orders[4].id }), // This should not show up in cart
    LineItem.create({ quantity: 2, cost: 6, productId: products[12].id, orderId: orders[4].id }),

    LineItem.create({ quantity: 2, cost: 6, productId: products[1].id, orderId: orders[5].id }), // This should not show up in cart
    LineItem.create({ quantity: 2, cost: 6, productId: products[17].id, orderId: orders[5].id }),
    LineItem.create({ quantity: 2, cost: 6, productId: products[6].id, orderId: orders[5].id }),
    LineItem.create({ quantity: 2, cost: 6, productId: products[8].id, orderId: orders[5].id }),

    LineItem.create({ quantity: 10, cost: 6, productId: products[11].id, orderId: orders[6].id }), // This should not show up in cart
    LineItem.create({ quantity: 10, cost: 6, productId: products[12].id, orderId: orders[6].id }),

    //ice
    LineItem.create({ quantity: 1, cost: 6, productId: products[0].id, orderId: orders[7].id }), // This should not show up in cart
    LineItem.create({ quantity: 1, cost: 6, productId: products[2].id, orderId: orders[7].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[7].id, orderId: orders[7].id }),

    LineItem.create({ quantity: 4, cost: 6, productId: products[10].id, orderId: orders[8].id }), // This should not show up in cart
    LineItem.create({ quantity: 4, cost: 6, productId: products[11].id, orderId: orders[8].id }),
    LineItem.create({ quantity: 2, cost: 6, productId: products[16].id, orderId: orders[8].id }),
    LineItem.create({ quantity: 2, cost: 6, productId: products[17].id, orderId: orders[8].id }),
    LineItem.create({ quantity: 2, cost: 6, productId: products[18].id, orderId: orders[8].id }),
    LineItem.create({ quantity: 2, cost: 6, productId: products[19].id, orderId: orders[8].id }),

    //yingying
    LineItem.create({ quantity: 1, cost: 6, productId: products[0].id, orderId: orders[9].id }), // This should not show up in cart
    LineItem.create({ quantity: 1, cost: 6, productId: products[7].id, orderId: orders[9].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[17].id, orderId: orders[9].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[9].id, orderId: orders[9].id }),

    LineItem.create({ quantity: 1, cost: 6, productId: products[1].id, orderId: orders[10].id }), // This should not show up in cart
    LineItem.create({ quantity: 5, cost: 6, productId: products[0].id, orderId: orders[10].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[2].id, orderId: orders[10].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[13].id, orderId: orders[10].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[14].id, orderId: orders[10].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[15].id, orderId: orders[10].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[16].id, orderId: orders[10].id }),

    //cathy
    LineItem.create({ quantity: 1, cost: 6, productId: products[5].id, orderId: orders[11].id }), // This should not show up in cart
    LineItem.create({ quantity: 5, cost: 6, productId: products[6].id, orderId: orders[11].id }),
    LineItem.create({ quantity: 2, cost: 6, productId: products[7].id, orderId: orders[11].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[8].id, orderId: orders[11].id }),
    LineItem.create({ quantity: 3, cost: 6, productId: products[2].id, orderId: orders[11].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[21].id, orderId: orders[11].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[13].id, orderId: orders[11].id }),

    LineItem.create({ quantity: 1, cost: 6, productId: products[10].id, orderId: orders[12].id }), // This should not show up in cart
    
    //kim
    LineItem.create({ quantity: 10, cost: 6, productId: products[6].id, orderId: orders[13].id }), // This should not show up in cart
    LineItem.create({ quantity: 13, cost: 6, productId: products[2].id, orderId: orders[13].id }),
    LineItem.create({ quantity: 13, cost: 6, productId: products[5].id, orderId: orders[13].id }),
    LineItem.create({ quantity: 16, cost: 6, productId: products[1].id, orderId: orders[13].id }),
    LineItem.create({ quantity: 18, cost: 6, productId: products[6].id, orderId: orders[13].id }),

    LineItem.create({ quantity: 25, cost: 6, productId: products[7].id, orderId: orders[14].id }),// This should not show up in cart
    LineItem.create({ quantity: 13, cost: 6, productId: products[8].id, orderId: orders[14].id }),
    LineItem.create({ quantity: 27, cost: 6, productId: products[9].id, orderId: orders[14].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[21].id, orderId: orders[14].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[22].id, orderId: orders[14].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[23].id, orderId: orders[14].id }),
    LineItem.create({ quantity: 1, cost: 6, productId: products[24].id, orderId: orders[14].id }),
  ])

  console.log(`seeded ${lineitems.length} lineitems`)
  console.log(`seeded lineitems successfully`)

  return {
    users: {
      cody: users[0],
      murphy: users[1],
      ice: users[2],
      yingying: users[3],
      cathy: users[4],
      kim: users[5]
    },
    products,
    orders,
    lineitems
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
