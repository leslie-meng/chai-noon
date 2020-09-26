const productsJson = [
  {
    name: 'English Breakfast Tea',
    description:
      'Robust with flavor, our traditional blend of organic loose leaf black tea is perfect for starting the day. This Sri Lanka black tea brews smooth and malty, with a clean finish. ',
    price: 1199,
    imageUrl: 'https://www.organicfacts.net/wp-content/uploads/blacktea.jpg',
    numOfItems: 10
  },
  {
    name: 'Earl Gray',
    description:
      'Your bold afternoon tea time cup of bliss. Our Organic Earl Grey tea is a loose leaf blend of black teas that are hand picked from select gardens in Sri Lanka. These full bodied leaves are hand blended with oil of bergamot to create a superb citrus and floral cup of tea.',
    price: 1099,
    imageUrl:
      'https://img.theweek.in/content/dam/week/news/health/images/2019/3/20/tea_cancer.jpg',
    numOfItems: 10
  },
  {
    name: 'Earl Grey Crème Tea',
    description:
      'A customer favorite. Start your day in a bold way with our loose leaf organic Earl Grey Creme tea. This is a remarkable black tea blend that is hand blended with fragrant oil of bergamot for citrus notes followed by a touch of french vanilla for a rich and robust finish.',
    price: 1099,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0168/9406/products/earl_grey_creme_grande.jpg?v=1342225845',
    numOfItems: 10
  },
  {
    name: 'Greenfield',
    description:
      'Robust with flavor, our traditional blend of organic loose leaf green tea is perfect for starting the day. This Sri Lanka black tea brews smooth and malty, with a clean finish.',
    price: 1599,
    imageUrl:
      'https://mk0nationaltodayijln.kinstacdn.com/wp-content/uploads/2019/02/national-hot-tea-month-640x514.jpg',
    numOfItems: 10
  },
  {
    name: 'Big Sur Tea ',
    description:
      "This loose leaf organic black tea blend will transport you to California's majestic stretch of coastline with each sip. Big Sur is an organic tea blend that combines the creamy, woodsy flavors of citrus and french vanilla together with refreshing sweet notes of mint for the ultimate morning cup.",
    price: 1599,
    imageUrl:
      'https://static.toiimg.com/thumb/69385334.cms?width=680&height=512&imgsize=191579',
    numOfItems: 10
  },
  {
    name: 'Brooklyn Tea',
    description:
      'An organic black tea blend with a twist. Brooklyn has a vibrant black tea base with high notes of Madagascar vanilla for a full-bodied, malty morning cup.',
    price: 2599,
    imageUrl:
      'https://post.healthline.com/wp-content/uploads/2020/09/AN538-Oolong-Tea-732x549-thumb.jpg',
    numOfItems: 10
  },
  {
    name: 'Turkish Apple Tea',
    description:
      'A robust organic black tea blend. Notes of sweet apple paired with the roundness of organic black tea, this full-flavored blend is a perfect morning cup of tea.',
    price: 3099,
    imageUrl:
      'https://istanbulonfood.com/wp-content/uploads/2013/05/turkish-tea.jpg',
    numOfItems: 10
  },
  {
    name: 'Jasmine Reserve Tea',
    description:
      'An organic green tea that has been repeatedly baked and scented with fresh and fragrant night-blooming jasmine blossoms. This jasmine green tea has beautiful floral and sweet notes.',
    price: 3099,
    imageUrl:
      'https://blog.teabox.com/wp-content/uploads/2016/10/jasmine-tea-1200x500.jpg',
    numOfItems: 10
  },
  {
    name: 'Silver Needle Tea',
    description:
      'Organic Silver needle is the most sought after white tea and is only harvested for a few days each year in the northern district of Fujian, China. This Chinese Silver Needle tea has a light golden flush with a unique savory aroma and a woodsy body, perfect for any time of day.',
    price: 3299,
    imageUrl:
      'https://meileaf.com/uploaded/thumbnails/db_file_img_233_730x730_eaeaec.jpg',
    numOfItems: 10
  },
  {
    name: 'Crimson Oolong Tea',
    description:
      'Grown and harvested in Fujian, China at a garden elevation of 1500m and straight into your morning cup. This Chinese oolong tea is 90% oxidized and steeps dark amber in color with smooth, sweet flavor notes of honey and aged bourbon and a finish of orange blossom and spice.',
    price: 1099,
    imageUrl:
      'https://cdn11.bigcommerce.com/s-m5vfqsj9bp/images/stencil/1200x1200/products/388/662/Crimson_Berry_Rooibos_Monterey_Bay_tea__70701.1565389214.jpg?c=2&imbypass=on',
    numOfItems: 10
  },
  {
    name: 'Monks Blend Tea',
    description:
      'From the pristine gardens of a Northern Indian monastery straight into your morning cup. This Indian black tea is a blend of three select black teas that steep a dark caramel color with crisp notes of apple and a light malty finish.',
    price: 1099,
    imageUrl:
      'https://blogs.rochester.edu/thegreendandelion/wp-content/uploads/2020/01/loose-leaf-tea_1C11DD7A77714168B2EFA65CD2900138.jpg',
    numOfItems: 10
  },
  {
    name: 'Chaga Tea',
    description:
      'A robust organic tea blend. This full-flavored blend is a perfect morning cup of tea.',
    price: 6645,
    imageUrl:
      'https://i2.wp.com/www.eatthis.com/wp-content/uploads/2019/11/chaga-mushroom.jpg?fit=1200%2C879&ssl=1',
    numOfItems: 10
  },
  {
    name: 'Chai Tea',
    description:
      'A customer favorite.This is a remarkable tea blend that is hand blended with fragrant oil of bergamot for citrus notes followed by a touch of french vanilla for a rich and robust finish.',
    price: 10199,
    imageUrl:
      'https://blog.piquetea.com/wp-content/uploads/2019/09/types-of-tea-white-tea.png',
    numOfItems: 10
  },
  {
    name: 'Passionfruit Jasmine Tea',
    description:
      'This award winning blend of select black and green teas, jasmine blossoms, and passionfruit essence has a long lasting, sweet flavor and astounding aroma for a perfect well-rounded cup. Enjoy this black and green tea mix as a stunning hot tea or refreshing iced tea.',
    price: 10199,
    imageUrl:
      'https://www.comvita.co.nz/_assets/Other/NZ-Blog-Images/03620%20Article%20images_NZ_1.jpg',
    numOfItems: 10
  },
  {
    name: 'Happy Tea',
    description:
      'Sweet raspberries are perfectly balanced by tangy fresh hibiscus flowers while the indulgent, floral scent of jasmine carries this slightly stimulating guayusa tea blend to a place that could only be described as Happy! This uplifting tea is fruity and light, perfect for any time of day.',
    price: 10199,
    imageUrl:
      'https://www.asweetpeachef.com/wp-content/uploads/2017/06/4-healthy-iced-teas-recipes-1.jpg',
    numOfItems: 10
  },
  {
    name: 'Green Pomegranate Tea',
    description:
      'Sweeten your senses with a tart and tangy rush to the palate from this pomegranate green tea. Select organic green tea is hand tossed in a large wok, dried to perfection, then carefully blended with organic raspberries and essence of pomegranate.',
    price: 8999,
    imageUrl:
      'https://teafloor.com/blog/wp-content/uploads/2018/04/Pomegranate.jpg',
    numOfItems: 10
  },
  {
    name: 'Matcha Tea',
    description:
      'Our energizing Matcha green tea blend combines organic ceremonial grade matcha with organic high-grade sencha green tea for a super high-quality cup. Fresh green tea leaves are crafted by a gentle steam and dry technique and then dusted with vibrant matcha to maximize the vivid color, fragrance, and fresh taste of this blend.',
    price: 9999,
    imageUrl:
      'https://post.healthline.com/wp-content/uploads/2020/01/matcha-tea-latte-thumb.jpg',
    numOfItems: 10
  },
  {
    name: 'Kyoto Tea',
    description:
      'An elevated twist on the classic Gen Mai Cha, our Kyoto green tea is sourced and blended by master tea blenders in Kyoto, Japan. This Japanese green tea is a Matcha Iri Genmaicha made with premium Gyokuro green tea, roasty puffed rice, and Ceremonial Matcha.',
    price: 18999,
    imageUrl:
      'https://i2.wp.com/blog.govoyagin.com/wp-content/uploads/2019/10/tondaya_kyoto-www.instagram.compBvxxMM0gRdc.jpg?fit=1080%2C759&ssl=1',
    numOfItems: 10
  },
  {
    name: 'Rooibos Chai Tea',
    description:
      'A stunning caffeine free alternative to the classic Indian inspired chai tea. Sip this full and savory blend any time of day to spice up your tea routine.',
    price: 4999,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRf6sVSqV0M4VhEiH6x3XMBvXin60Y5MlB9Qg&usqp=CAU',
    numOfItems: 10
  },
  {
    name: 'Chamomile Tea',
    description:
      'Robust with flavor, our traditional blend of organic loose leaf green tea is perfect for starting the day. This Sri Lanka black tea brews smooth and malty, with a clean finish.',
    price: 5699,
    imageUrl:
      'https://www.foodroutes.org/wp-content/uploads/2020/08/Health-Benefits-of-Different-Types-of-Tea.jpg',
    numOfItems: 10
  },
  {
    name: 'Butterscotch Tea',
    description:
      'Sip the buttery warmth of this golden-hued white tea infusion. With sweet, creamy, and spicy notes, Butterscotch tea is perfect for sipping at any time of day.',
    price: 4699,
    imageUrl:
      'https://i.etsystatic.com/11168683/r/il/b3e230/1009277764/il_fullxfull.1009277764_8zpn.jpg',
    numOfItems: 10
  },
  {
    name: 'Chrysanthemum Tea',
    description:
      'With sweet, creamy, and spicy notes, Chrysanthemum tea is perfect for sipping at any time of day.',
    price: 1699,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0375/8781/2485/articles/Different_Types_of_Tea_290x360_crop_top.jpg?v=1593206743',
    numOfItems: 10
  },
  {
    name: 'Dandelion Tea',
    description:
      'Robust with flavor, our traditional blend of organic loose leaf green tea is perfect for starting the day. This Sri Lanka black tea brews smooth and malty, with a clean finish.',
    price: 5099,
    imageUrl:
      'https://www.nutritionadvance.com/wp-content/uploads/2018/01/chamomile-tea.jpg',
    numOfItems: 10
  },
  {
    name: 'Essiac Tea',
    description:
      'Robust with flavor, our traditional blend of organic loose leaf black tea is perfect for starting the day. This Sri Lanka black tea brews smooth and malty, with a clean finish.',
    price: 599,
    imageUrl:
      'https://leavesthatheal.com/wp-content/uploads/2018/05/herbal-chamomile-tea-1080x675.jpeg',
    numOfItems: 10
  },
  {
    name: 'Green Tea',
    description:
      'Robust with flavor, our traditional blend of organic loose leaf green tea is perfect for starting the day. This Sri Lanka black tea brews smooth and malty, with a clean finish.',
    price: 1699,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoqptGo6ikRtajV5JllskqaygIpR4aaUlDjw&usqp=CAU',
    numOfItems: 10
  },
  {
    name: 'For Him Tea',
    description:
      'Rejuvenating and invigorating, this malty, yet earthy infusion helps to re-energize and enhance daily performance. This tea for men delivers a slightly musky, sweet finish with notes reminiscent of sandalwood.',
    price: 1199,
    imageUrl:
      'https://static.toiimg.com/thumb/72294806.cms?width=680&height=512&imgsize=670264',
    numOfItems: 10
  },
  {
    name: 'Naked Pu-erh Tea',
    description:
      'Naked Pu-erh stems from Yunnan, China and delivers a deep red infusion with a sweet woodsy aroma and mild earthy finish. This organic Pu-erh tea has slight floral notes and a lingering hint of honeysuckle with each sip. This Yunnan Pu-erh tea is cooked and has been aged for approximately 4-6 years',
    price: 1299,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkECYJPG3EoiHIy0bOULxFr2WGJM4s3nkUnQ&usqp=CAU',
    numOfItems: 10
  },
  {
    name: 'Italian Blood Orange Tea',
    description:
      'This revitalizing citrus blend steeps a beautiful light pink hue and leaves behind a clean and refreshing finish of fresh orange blossoms. This citrusy and sweet blood orange blend is delicious hot or iced at any time of day.',
    price: 1399,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2970/0930/products/MTBloodOrange1_600x.jpg?v=1536196357',
    numOfItems: 10
  },
  {
    name: 'Meyer Lemon Tea',
    description:
      'Our award-winning Meyer Lemon Tea blend combines a delightful medley of bright citrus flavors with our premium classic green tea for a vibrant cup. Enjoy the bright flavor notes of real Meyer lemons, complemented by the sweet grassiness of our ultra-premium green teas in one refreshing cup.',
    price: 14999,
    imageUrl:
      'https://c.ndtvimg.com/2019-03/6h6v6png_green-tea_625x300_08_March_19.jpg',
    numOfItems: 10
  },
  {
    name: '1896 Tea',
    description:
      'A blended black tea that offers a rich, flavorful cup that is perfect for your morning routine. This tea blend combines fruity notes of white peach, cinnamon and gala apples, and has a crisp floral finish.',
    price: 6599,
    imageUrl:
      'https://bsmedia.business-standard.com/_media/bs/img/article/2020-01/30/full/1580402378-6782.jpg',
    numOfItems: 10
  },
  {
    name: 'Lychee Peach Tea',
    description:
      "A sweet and fruity black tea blend. We've taken the essence of lychee, mixed it with peach and infused it in organic black tea for a cup filled with notes of apricot, osmanthus, and ripe pear. Enjoy this peach black tea hot or iced.",
    price: 13399,
    imageUrl: 'https://foodess.com/wp-content/uploads/2016/11/chai-2jpg-1.jpg',
    numOfItems: 10
  },
  {
    name: 'Caramelized Pear Tea',
    description:
      'A delectable dessert infusion with sweet and flavorful notes of honey, caramel, and fresh-baked pear. This rooibos tea brews a well-rounded cup.',
    price: 11599,
    imageUrl:
      'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/63/78/5/SkmVD4OjTQaQX3eOKV8D_DSC_6105.jpg',
    numOfItems: 10
  },
  {
    name: 'Raspberry Nectar Tea',
    description:
      'Sweet and refreshing with golden rose color, this nectarous infusion is a delight with natural ambrosia that embraces the senses. Great hot or iced.',
    price: 22599,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpZ4ooKMfb9HLo20stOldVXJ5KgDJ4sai_ww&usqp=CAU',
    numOfItems: 10
  },
  {
    name: 'Blueberry Pomegranate Tea',
    description:
      'Our Blueberry Pomegranate tea has a round, fruity taste with a sweet and slightly tart finish. This refreshing white tea blend is a pure delight at any time of day.',
    price: 11199,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrrz5vRUYsCvrChTI7gYd0CbVbbx7sktVHbw&usqp=CAU',
    numOfItems: 10
  },
  {
    name: 'Lemon Meringue Tea',
    description:
      'Our Lemon Meringue tea has a light, fluffy texture and a sweet, creamy finish. This rooibos based blend is a delight for any moments of sweet cravings throughout the day.',
    price: 3499,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJnkW1Cf6OANJ40LuoaALgwIYgZAXTMLuqsQ&usqp=CAU',
    numOfItems: 10
  },
  {
    name: 'Apricot Escape Tea',
    description:
      'Apricot Escape steeps a delicate pink color with a clean finish reminiscent of ripe apricots and Asian pears. This apricot tea is a stunning herbal infusion that is delicious both hot or iced.',
    price: 34599,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Green_tea_with_blossoming_flower.jpg/220px-Green_tea_with_blossoming_flower.jpg',
    numOfItems: 10
  },
  {
    name: 'Lychee Peach Tea',
    description:
      "A sweet and fruity black tea blend. We've taken the essence of lychee, mixed it with peach and infused it in organic black tea for a cup filled with notes of apricot, osmanthus, and ripe pear. Enjoy this peach black tea hot or iced.",
    price: 2399,
    imageUrl:
      'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/all_about_herbal_tea_slideshow/493ss_thinkstock_rf_peppermint.jpg',
    numOfItems: 10
  },
  {
    name: 'Summer Peach Tea',
    description:
      'A perfectly balanced peach black tea. Our organic Summer Peach tea features the bright, crisp, and oh-so-sweet flavor of sun-ripened summer peaches, counterbalanced by the bold a brisk notes of our premium Classic Black tea.',
    price: 45699,
    imageUrl:
      'https://media.npr.org/assets/img/2018/02/16/tea-honey-lemon_wide-02f78f0d544e8d6b91c061fa73c54f3cf7ca885e-s800-c85.jpg',
    numOfItems: 10
  },
  {
    name: 'Garden of Eden Tea',
    description:
      'An exotic medley with an enticing floral aroma. Garden of Eden combines loose leaf black tea with high notes of summer ripened mangoes and passionfruit. This elixir steeps a vibrant reddish hue with a clean, sweet finish.',
    price: 46799,
    imageUrl:
      'https://www.theharvestkitchen.com/wp-content/uploads/2017/11/ginger-tea-use-t1-650x975.jpg',
    numOfItems: 10
  },
  {
    name: 'Rose Black Tea',
    description:
      'A delectable medley with an enticing floral aroma. Rose Black combines loose leaf black tea with smooth notes of rose and a bright finish. Rose Black is delicious hot or cold brewed and poured over ice. The perfect sip for any time of day.',
    price: 9999,
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/weight-loss-tea-1572293635.jpg?crop=0.716xw:1.00xh;0.111xw,0&resize=640:*',
    numOfItems: 10
  },
  {
    name: 'Egyptian Chamomile Tea',
    description:
      'Our Egyptian Chamomile elicits sweet, calming flavor notes. This tisane is round and soothing with each and every sip, perfect for any time of day.',
    price: 11199,
    imageUrl:
      'https://static.wixstatic.com/media/a884cc_34d45d63bb134ca88f9ac65dfe7dd19a.jpg/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01/a884cc_34d45d63bb134ca88f9ac65dfe7dd19a.webp',
    numOfItems: 10
  },
  {
    name: 'Soothe Tea',
    description:
      'This soothing aromatic blend is crafted with minty, calm, and slightly sweet botanicals. Restoring balance in the digestive system with each and every sip.',
    price: 11599,
    imageUrl:
      'https://i2.wp.com/vickidoefitness.com/wp-content/uploads/2016/04/AdobeStock_13827387_green-tea.jpeg?ssl=1',
    numOfItems: 10
  },
  {
    name: 'Chill Tea',
    description:
      'A dynamic, yet calming woodsy elixir that will ease your mind and spirit. Chill blend is a soothing citrus blend that is perfect for adding a touch of calm to your day.',
    price: 2299,
    imageUrl:
      'https://www.thespruceeats.com/thmb/tr6mUc-fZa74zqZuZ8hcKOnkDDc=/3600x2025/smart/filters:no_upscale()/Herbal_Tea-56a58b493df78cf77288bd17.jpg',
    numOfItems: 10
  },
  {
    name: 'Tuscany Tea',
    description:
      'Tuscany is a delightful minty and delicate floral tea blend. Perfect as an after-meal pick-me-up or as a late-night elixir to refresh your mind and enhance your mood.',
    price: 13299,
    imageUrl:
      'https://healthland.time.com/wp-content/uploads/sites/4/2012/08/146506702.jpg?w=720&h=480&crop=1',
    numOfItems: 10
  },
  {
    name: 'Jasmine Reserve Tea',
    description:
      'An organic green tea that has been repeatedly baked and scented with fresh and fragrant night-blooming jasmine blossoms. This jasmine green tea has beautiful floral and sweet notes.',
    price: 45699,
    imageUrl:
      'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-steep-tea-step-5.jpg',
    numOfItems: 10
  },
  {
    name: 'Jasmine Pearls Tea',
    description:
      'Aromatic organic jasmine blossoms are used for scenting the most tender organic green tea leaves and buds then hand-rolled into small pearls to create this organic jasmine pearl tea. This restorative tea is exquisite in flavor and aroma and yields a clear, light green hue with a delicate finish.',
    price: 3499,
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/weight-loss-tea-1572293635.jpg?crop=0.716xw:1.00xh;0.111xw,0&resize=640:*',
    numOfItems: 10
  },
  {
    name: 'Gunpowder Tea',
    description:
      'A Chinese green tea that is a pick-me-up for any time of day. Comprised of tender, young, organic green tea leaves and rolled into small spheres resembling gunpowder, this organic green tea produces a grassy infusion with a slightly smoky flavor.',
    price: 4599,
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/weight-loss-tea-1572293635.jpg?crop=0.716xw:1.00xh;0.111xw,0&resize=640:*',
    numOfItems: 10
  },
  {
    name: 'Dragonwell Tea',
    description:
      'Sip Dragonwell tea for a legendary experience. This Chinese green tea is prized for its unique, flat, sword-shaped leaves and jade green color. Our organic Dragonwell tea exhibits a fresh, clean aroma and gentle, mellow flavor.',
    price: 5599,
    imageUrl:
      'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-steep-tea-step-5.jpg',
    numOfItems: 10
  },
  {
    name: 'Sencha Tea',
    description:
      'Traditional organic sencha green tea. This organic Chinese green tea is deep steamed and carefully dried. Steeps a lively, grassy cup every time.',
    price: 3599,
    imageUrl:
      'https://i0.wp.com/post.healthline.com/wp-content/uploads/sites/3/2020/02/320540_2200-732x549.jpg?w=756&h=567',
    numOfItems: 10
  },
  {
    name: 'Fresh Greens Tea',
    description:
      'A bright blend of premium green tea leaves and lemongrass, Fresh Greens is a stunning organic tea blend. This citrus tea also has a delicate balance of grassy flavors in this loose leaf green tea blend.',
    price: 6599,
    imageUrl:
      'https://i0.wp.com/post.healthline.com/wp-content/uploads/sites/3/2020/02/320540_2200-732x549.jpg?w=756&h=567',
    numOfItems: 10
  },
  {
    name: 'Maui Tea',
    description:
      'Organic green tea infused with tropical flavors of pineapple, mango, and papaya offering a sweet and refreshing cup of tea. This pineapple green tea is filled with bright and fruity notes in each cup.',
    price: 5499,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0898/3392/articles/Banner_Mulled-Wine-with-Mulling-Spices-Recipe-Stash-Tea_800x.jpg?v=1599869980',
    numOfItems: 10
  },
  {
    name: 'Blue Ocean',
    description:
      'Organic green tea infused with tropical flavors of pineapple, mango, and papaya offering a sweet and refreshing cup of tea. This pineapple green tea is filled with bright and fruity notes in each cup.',
    price: 11599,
    imageUrl: 'https://static.toiimg.com/photo/67394858.cms',
    numOfItems: 10
  }
]

module.exports = {productsJson}
