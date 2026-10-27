/* Kathmandu Zone menu transcribed from "Kathmandu Zone Menu.pdf".
   Edit prices / dishes here; menu.html renders from this file.
   tags: v = vegetarian, new = new on the printed menu, sig = flagged on the printed menu (chef's special / recommended / our special) */
window.KZ_MENU = [
  {
    id: 'momo', title: 'Momo', kicker: 'Freshly made',
    note: 'Choose your filling: veg, paneer, chicken, lamb or prawn.',
    items: [
      { name: 'Steamed Momo', price: '10.95', desc: 'Authentic Nepali steamed momo filled with spiced minced meat or your choice of filling.' },
      { name: 'Fried Momo', price: '11.95', desc: 'Freshly made momo, lightly fried until golden and served with our signature sauce.' },
      { name: 'Choila Momo', price: '12.95', desc: 'Crispy golden momo tossed in a smoky, Newari-style choila sauce.' },
      { name: 'Chilli Momo', price: '12.95', desc: 'Crispy momo coated in our rich signature chilli sauce.' },
      { name: 'Sadeko Momo', price: '12.95', desc: 'Crispy momo tossed with onion, tomato, chillies and house spices.' },
      { name: 'Szechwan Momo', price: '12.95', desc: 'Crispy momo coated in a bold, smoky homemade Szechwan sauce.' },
      { name: 'Tandoori Momo', price: '12.95', desc: 'Crispy fried momo tossed in our smoky tandoori marinade.' },
      { name: 'Soup Momo', price: '12.95', desc: 'Steamed momo in a light, clear broth with a hot and sour twist.' },
      { name: 'Jhol Momo', price: '12.95', desc: 'Steamed momo in a warm, tomato-based broth with traditional spices.' },
      { name: 'Thai Chilli Momo', price: '13.50', desc: 'Crispy fried momo tossed in sweet, spicy Thai chilli sauce with spring onions.' },
      { name: 'Sizzler Momo', price: '13.95', desc: 'Juicy momo tossed in a homemade spicy sauce with fresh vegetables, served sizzling.' },
      { name: 'Butter Malai Momo', price: '13.95', desc: 'Crispy fried momo in a rich butter malai sauce.' },
      { name: 'Momo Platter', price: '28.95', desc: 'Twenty assorted momo in five flavours: steamed, fried, chilli, tandoori and Szechwan.', tags: ['sig'] }
    ]
  },
  {
    id: 'newari', title: 'Nepali Newari Special', kicker: 'From the valley',
    groups: [
      { title: 'Vegetarian', items: [
        { name: 'Dami Chatpate', price: '8.95', desc: 'Spicy puffed rice salad with beans, peanuts and herbs.', tags: ['v'] },
        { name: 'Aloo Nimki Chaat', price: '9.95', desc: 'Crispy potato bites with spices, chutneys and nimki.', tags: ['v'] },
        { name: 'Bhatmas Sadheko', price: '7.95', desc: 'Spiced soybean salad with onion, tomato and herbs.', tags: ['v'] },
        { name: 'Mushroom Choila', price: '8.95', desc: 'Mushrooms sautéed with Nepali herbs and spices.', tags: ['v'] },
        { name: 'Aloo ko Achar', price: '3.95', desc: 'Spicy potato pickle, served as a side.', tags: ['v'] },
        { name: 'Chiura Bhatmas Set', price: '8.95', desc: 'Beaten rice served with spicy bhatmas.', tags: ['v'] }
      ] },
      { title: 'Non-vegetarian', items: [
        { name: 'Sukuti Chatpate', price: '10.95', desc: 'Spicy dried-meat salad with peanuts, onion and herbs.' },
        { name: 'Chicken Pangra', price: '10.95', desc: 'Chicken wings cooked with Nepali spices.' },
        { name: 'Sekuwa', price: '11.95 / 12.95', desc: 'Traditional Nepali grilled skewers marinated in herbs and spices. Chicken / lamb. Sadeko style +£1.' },
        { name: 'Choila', price: '11.95 / 12.95', desc: 'Spiced grilled meat salad with Nepali spices and mustard oil. Chicken / lamb.' },
        { name: 'Khasi ko Bhutan', price: '10.95', desc: 'Spicy mutton cooked with Nepali herbs and spices.' },
        { name: 'Khasi ko Sukuti', price: '12.95', desc: 'Dry mutton cooked with herbs and spices.' },
        { name: 'Malekhu Style Machha', price: '9.95', desc: 'Fried fish with Malekhu spice blend.' },
        { name: 'Newari Khaja Set', price: '17.95', desc: 'A complete collection of authentic Newari khaja.', tags: ['sig'] }
      ] }
    ]
  },
  {
    id: 'starters', title: 'Starters & Street Food', kicker: 'To begin',
    groups: [
      { title: 'Vegetarian', items: [
        { name: 'Sadeko Papadum', price: '2.95', desc: 'Crispy papad tossed with spices and fresh herbs.', tags: ['v', 'sig'] },
        { name: 'Papadum with Chutney', price: '2.50', desc: 'Crispy lentil wafer with tangy chutney.', tags: ['v'] },
        { name: 'Pani Puri', price: '7.95', desc: 'Crisp shells filled with spiced potato and tangy water.', tags: ['v'] },
        { name: 'Himalaya Chatpate Chaat', price: '8.95', desc: 'A spicy, tangy mix of puffed rice, chutneys and herbs.', tags: ['v', 'sig'] },
        { name: 'Aloo Nimki Chaat', price: '8.95', desc: 'Crispy bites tossed with potato, chutneys and spices.', tags: ['v'] },
        { name: 'Samosa Chaat', price: '10.95', desc: 'Crispy samosa topped with chutneys, yoghurt and spices.', tags: ['v'] },
        { name: 'Chilli Paneer', price: '10.95', desc: 'Paneer stir-fried with peppers in a spicy sauce.', tags: ['v'] },
        { name: 'Chilli Thai Paneer', price: '10.95', desc: 'Paneer tossed in a spicy Thai-style sauce with peppers and onions.', tags: ['v', 'new'] },
        { name: 'Spring Rolls', price: '6.95', desc: 'Crispy rolls filled with seasoned vegetables.', tags: ['v'] },
        { name: 'Chilli Chips', price: '7.95', desc: 'Crispy fries tossed in a spicy chilli sauce.', tags: ['v'] },
        { name: 'Manchurian', price: '9.95 / 10.95', desc: 'Crispy bites in a tangy-sweet Indo-Chinese sauce with ginger, garlic and scallions. Veggie or gobi 9.95, paneer 10.95.', tags: ['v'] }
      ] },
      { title: 'Chicken', items: [
        { name: 'Chat-Pata Chicken', price: '9.95', desc: 'Tender chicken tossed with tangy spices and fresh herbs.' },
        { name: 'Chilli Chicken', price: '10.95', desc: 'Crispy chicken stir-fried with peppers and onions in a spicy sauce.' },
        { name: 'Thai Chilli Chicken', price: '10.95', desc: 'Crispy chicken in a Thai-style chilli sauce with vegetables.', tags: ['new'] },
        { name: 'Chicken Lollipop', price: '10.95', desc: 'Marinated chicken wings fried until crisp, with dipping sauce.' },
        { name: 'Chilli Chicken Lollipop', price: '11.95', desc: 'Crispy lollipops tossed in a spicy chilli-garlic sauce.' },
        { name: 'Chicken 65', price: '10.95', desc: 'South Indian-style fried chicken with curry leaves and aromatic spices.' },
        { name: 'Chicken Manchurian', price: '10.95', desc: 'Crispy chicken in a tangy Manchurian sauce with spring onions.' }
      ] },
      { title: 'Seafood', items: [
        { name: 'Fish Pakora', price: '10.95', desc: 'Fish pieces coated in aromatic spices, battered and fried until crisp.' },
        { name: 'Calamari', price: '9.50', desc: 'Lightly seasoned squid rings, fried until golden.' },
        { name: 'Chilli Squid', price: '10.50', desc: 'Crispy squid stir-fried with peppers and onions in a spicy chilli sauce.' },
        { name: 'Thai Chilli Squid', price: '10.95', desc: 'Crispy squid in a Thai-style chilli sauce.' },
        { name: 'King Prawn Tempura', price: '9.50', desc: 'Lightly battered king prawns, fried until golden.' },
        { name: 'Chilli Prawn', price: '12.95', desc: 'Crispy prawns stir-fried with peppers and onions in a spicy sauce.' },
        { name: 'Thai Chilli Prawn', price: '12.95', desc: 'Crispy prawns in a Thai-style chilli sauce.', tags: ['new'] },
        { name: 'Prawn 65', price: '12.95', desc: 'South Indian-style fried prawns with curry leaves and aromatic spices.' },
        { name: 'Prawn Manchurian', price: '12.95', desc: 'Crispy prawns in a tangy Manchurian sauce with spring onions.' }
      ] }
    ]
  },
  {
    id: 'soups', title: 'Thukpa & Soups', kicker: 'Mountain comfort',
    items: [
      { name: 'Himalayan Thukpa', price: '8.95 / 9.95', desc: 'A warm, soul-soothing mountain noodle soup with fragrant spices. Veg / chicken.' },
      { name: 'Momo Thukpa', price: '10.95', desc: 'Noodles in a light, aromatic broth topped with two steamed momo. Veg / chicken.' },
      { name: 'Tom Yum Soup', price: '7.95 / 8.95', desc: 'Classic Thai soup, spicy, sour and savoury. Veg / chicken.' },
      { name: 'Hot & Sour Soup', price: '8.95 / 9.95', desc: 'Spicy, tangy and warming. Veg / chicken.' },
      { name: 'Manchow Soup', price: '8.95 / 9.95', desc: 'A spicy, warming Indo-Chinese soup. Veg / chicken.' },
      { name: 'King Prawn Won Ton', price: '8.95', desc: 'Delicate prawn wontons in a flavourful, aromatic broth.' }
    ]
  },
  {
    id: 'grills', title: 'Tandoori Grills', kicker: 'Sizzling',
    groups: [
      { title: 'From the tandoor', items: [
        { name: 'Tikka Sizzler', price: '12.50 / 12.95 / 13.95', desc: 'Smoky, tender tikka served on a sizzling platter. Paneer / chicken / lamb.' },
        { name: 'Tandoori Chicken', price: '10.95 / 18.95', desc: 'Marinated chicken grilled in the tandoor, served sizzling. Half / full. Make it peri peri +£1.' },
        { name: 'Tandoori Mixed Grill', price: '20.95', desc: 'Chicken tikka, lamb tikka, tandoori chicken and tandoori wings, with butter naan.' },
        { name: 'Hanging Kebab', price: 'from 13.95', desc: 'Smoky tandoori kebabs on a hanging skewer with chutney and peri peri fries. Paneer 13.95 · chicken 14.95 · lamb 15.95 · prawn 16.95.' }
      ] },
      { title: 'Wings on fire · 6 pcs', items: [
        { name: 'Tandoori Wings', price: '8.95', desc: 'Smoky chargrilled wings cooked in the tandoor.' },
        { name: 'Sadeko Wings', price: '9.50', desc: 'Nepali-style wings tossed with onion, tomato and herbs.' },
        { name: 'KTM Special Wings', price: '9.50', desc: 'Spicy wings coated in our house special sauce.' },
        { name: 'Thai Chilli Wings', price: '9.50', desc: 'Wings tossed in a spicy Thai chilli-lime sauce.' },
        { name: 'Chilli Garlic Wings', price: '9.50', desc: 'Grilled wings tossed in a tangy chilli-garlic sauce.' },
        { name: 'Wings Platter', price: '26.95', desc: 'Twenty wings in five flavours, served sizzling hot to share.' }
      ] }
    ]
  },
  {
    id: 'curries', title: 'Curries', kicker: 'Medium · hot · extra hot',
    note: 'All curries are served with steamed basmati rice. Choose your heat level.',
    groups: [
      { title: 'Lamb', items: [
        { name: 'Kathmandu Zone Lamb', price: '12.95', desc: 'Lamb with bell peppers in a rich tomato-onion gravy and our signature KTM house spices.', tags: ['sig'] },
        { name: 'Himalayan Lamb', price: '12.95', desc: 'Lamb simmered with mixed lentils and traditional Himalayan spices.', tags: ['sig'] },
        { name: 'Karahi Lamb', price: '12.95', desc: 'A bold, spicy curry in a thick tomato sauce with herbs.', tags: ['sig'] },
        { name: 'Lamb Bhuna', price: '12.95', desc: 'Slow-cooked in a rich, intensely spiced gravy, reduced until thick.' },
        { name: 'Lamb Jalfrezi', price: '12.95', desc: 'Stir-fried with bell peppers, onion and tomato in a tangy, spicy sauce.' },
        { name: 'Lamb Kashmiri', price: '12.95', desc: 'A creamy, mildly spiced sauce with Kashmiri flavours.' },
        { name: 'Malai Lamb', price: '12.95', desc: 'Lamb marinated and cooked in a creamy, mildly spiced malai sauce.' },
        { name: 'Saag Gosht', price: '12.95', desc: 'Slow-cooked lamb with fresh spinach and aromatic spices.' },
        { name: 'Balti Lamb', price: '12.95', desc: 'Lamb in a rich, spiced gravy with traditional house seasonings.' }
      ] },
      { title: 'Chicken', items: [
        { name: 'Kathmandu Zone Chicken', price: '11.95', desc: 'House special curry with chicken breast and aromatic spices.' },
        { name: 'Himalayan Chicken', price: '11.95', desc: 'Chicken and mixed lentils in Himalayan spices.' },
        { name: 'Karahi Chicken', price: '11.95', desc: 'Spiced chicken in a rich tomato gravy.' },
        { name: 'Butter Chicken', price: '11.95', desc: 'Tandoori chicken in a rich, creamy tomato-butter sauce.' },
        { name: 'Chicken Tikka Masala', price: '11.95', desc: 'Smoky marinated chicken in a creamy tomato sauce.' },
        { name: 'Chicken Jalfrezi', price: '11.95', desc: 'Chicken with fresh peppers and onions in a spicy sauce.' },
        { name: 'Saag Chicken', price: '11.95', desc: 'Chicken in a spiced spinach gravy.' }
      ] },
      { title: 'Vegetarian', items: [
        { name: 'Paneer Butter Masala', price: '11.95', desc: 'Paneer in a creamy tomato gravy with butter and aromatic spices.', tags: ['v', 'sig'] },
        { name: 'Karahi Paneer', price: '11.95', desc: 'Paneer in a rich tomato gravy with bell peppers.', tags: ['v'] },
        { name: 'Malai Saag Paneer', price: '11.95', desc: 'Soft paneer in a creamy, mildly spiced spinach gravy.', tags: ['v', 'sig'] },
        { name: 'Paneer Jalfrezi', price: '11.95', desc: 'Paneer, peppers and onions in a tangy, spicy sauce.', tags: ['v'] },
        { name: 'Mutter Paneer', price: '11.95', desc: 'Paneer and green peas in a spiced tomato-onion gravy.', tags: ['v'] },
        { name: 'Malai Kofta', price: '11.95', desc: 'Paneer and potato dumplings in a rich, creamy tomato gravy.', tags: ['v'] },
        { name: 'Mix Vegetable', price: '9.95', desc: 'Seasonal vegetables in a tomato-onion gravy.', tags: ['v', 'sig'] },
        { name: 'Bhindi Bhaji', price: '9.95', desc: 'Okra cooked with onion, tomato and traditional spices.', tags: ['v'] },
        { name: 'Aloo Gobi', price: '9.95', desc: 'Himalayan style, with potato, cauliflower, timur, smoked chilli and coriander.', tags: ['v'] },
        { name: 'Daal Makhani', price: '9.95', desc: 'Black lentils and kidney beans slow-cooked in a creamy gravy.', tags: ['v'] },
        { name: 'Tadka Daal', price: '9.95', desc: 'Yellow lentils tempered with garlic, onion and spices.', tags: ['v'] }
      ] }
    ]
  },
  {
    id: 'thali', title: 'Thali & Biryani', kicker: 'Chef special',
    groups: [
      { title: 'Chef special thali', items: [
        { name: 'Thali', price: '18.95 / 19.95 / 20.95', desc: 'A complete meal of basmati rice, curry, daal, pickle and salad. Veg / chicken / lamb.', tags: ['sig'] }
      ] },
      { title: 'Biryani', items: [
        { name: 'Veg Biryani', price: '8.95', desc: 'Fragrant basmati cooked with mixed vegetables, aromatic spices and herbs.', tags: ['v'] },
        { name: 'Chicken Biryani', price: '10.95', desc: 'Tender chicken cooked in aromatic biryani spices with fluffy basmati.' },
        { name: 'Lamb Biryani', price: '11.95', desc: 'Slow-cooked lamb layered with basmati and herbs.' },
        { name: 'Prawn Biryani', price: '12.95', desc: 'Juicy prawns with fragrant spices and basmati, finished with herbs.' }
      ] }
    ]
  },
  {
    id: 'noodles', title: 'Noodles & Rice', kicker: 'From the wok',
    groups: [
      { title: 'Noodles · veg / chicken / prawn / mixed', items: [
        { name: 'Chowmein', price: '9.95 – 13.95', desc: 'Stir-fried noodles with seasonal vegetables and house spice, garnished with spring onion.' },
        { name: 'Szechwan Hakka Noodles', price: '10.50 – 13.50', desc: 'Wok-tossed in a spicy Szechwan sauce with crunchy vegetables.' },
        { name: 'Pad Thai', price: '10.50 – 13.50', desc: 'Stir-fried rice noodles in a savoury-sweet sauce, topped with peanuts.' }
      ] },
      { title: 'Rice', items: [
        { name: 'Steamed Basmati Rice', price: '3.95', desc: 'Fluffy premium basmati, perfectly steamed.', tags: ['v'] },
        { name: 'Fried Rice', price: '6.95 – 9.95', desc: 'Wok-tossed basmati. Veg / mushroom / egg / chicken / prawn.' },
        { name: 'Chilli Garlic Fried Rice', price: '7.95 – 9.95', desc: 'Fresh garlic, chilli and vegetables. Veg / chicken / prawn.' },
        { name: 'Szechuan Fried Rice', price: '7.95 – 9.95', desc: 'With vegetables and a bold, spicy Szechuan sauce. Veg / chicken / prawn.' },
        { name: 'Thai Chilli Fried Rice', price: '8.95 – 10.95', desc: 'Thai chilli sauce, fresh herbs and vegetables. Veg / chicken / prawn.' },
        { name: 'KTM Special Fried Rice', price: '8.95 – 10.95', desc: 'Our signature fried rice with vegetables, egg and house seasonings. Veg / chicken / prawn.' }
      ] },
      { title: 'Naan & roti', items: [
        { name: 'Butter Naan', price: '3.50', desc: 'Soft and fluffy, brushed with butter.', tags: ['v'] },
        { name: 'Garlic Naan', price: '3.95', desc: 'Infused with fresh garlic and herbs.', tags: ['v'] },
        { name: 'Chilli Garlic Naan', price: '3.95', desc: 'Topped with garlic, chilli and herbs.', tags: ['v'] },
        { name: 'Chilli & Coriander Naan', price: '3.95', desc: 'Fresh coriander and a touch of chilli.', tags: ['v'] },
        { name: 'Tandoori Roti', price: '3.95', desc: 'Whole wheat bread baked in the tandoor.', tags: ['v'] }
      ] }
    ]
  },
  {
    id: 'drinks', title: 'Drinks', kicker: 'Cheers to memories',
    groups: [
      { title: 'Cocktails', items: [
        { name: 'Golden Margarita', price: '11.95', desc: 'Gold tequila, Cointreau, lime and orange juice.' },
        { name: 'Raspberry Margarita', price: '11.95', desc: 'Gold tequila, Cointreau, lime and raspberry juice.' },
        { name: 'Mojito', price: '11.95', desc: 'White rum, fresh lime, mint, lemonade and ice.' },
        { name: 'Piña Colada', price: '11.95', desc: 'Coconut cream, pineapple juice and white rum.' },
        { name: 'Blue Lagoon', price: '11.95', desc: 'Rum, blue curaçao, lemonade and ice.' },
        { name: 'Tequila Sunrise', price: '11.95', desc: 'Tequila, orange juice and grenadine.' }
      ] },
      { title: 'Mocktails & lassi', items: [
        { name: 'Virgin Piña Colada', price: '8.95', desc: 'Pineapple and coconut cream.' },
        { name: 'Sunrise Delight', price: '8.95', desc: 'Orange and pineapple with a splash of grenadine.' },
        { name: 'Raspberry Indulgence', price: '8.95', desc: 'A sweet and tangy blend of berries and citrus.', tags: ['new'] },
        { name: 'Virgin Mojito', price: '8.95 / 16.95', desc: 'Fresh mint, lime and soda. Glass / jug to share.' },
        { name: 'Sweet Lassi', price: '8.95', desc: 'Yoghurt, milk and a touch of sweetness.' },
        { name: 'Mango Lassi', price: '8.95', desc: 'Rich, creamy and delightfully smooth.' }
      ] },
      { title: 'Beer, cider & wine', items: [
        { name: 'Cobra, draught', price: '6.95', desc: '' },
        { name: 'Kathmandu, 500ml', price: '6.50', desc: '' },
        { name: 'Gurkha, 660ml', price: '6.95', desc: '' },
        { name: 'Budweiser / Corona, 330ml', price: '3.95 / 4.50', desc: '' },
        { name: 'Kopparberg', price: '6.95', desc: 'Strawberry & lime or mixed fruit.' },
        { name: 'Red wine, bottle', price: '19.95 – 22.95', desc: 'Cabernet Sauvignon, Merlot, Shiraz, Malbec, house red.' },
        { name: 'White wine, bottle', price: '19.95 – 22.95', desc: 'Pinot Grigio, Sauvignon Blanc, Chardonnay, house white.' },
        { name: 'House rosé, bottle', price: '16.95', desc: '' },
        { name: 'Wine by the glass', price: '5.95', desc: 'Red, white or rosé.' }
      ] },
      { title: 'Spirits · 25ml / 50ml', items: [
        { name: 'Whiskey', price: 'from 3.50', desc: 'Black Label, Chivas Regal, Jack Daniel’s, Jameson, Famous Grouse, Southern Comfort.' },
        { name: 'Vodka & gin', price: 'from 3.25', desc: 'Smirnoff, Absolut, Gordon’s.' },
        { name: 'Rum', price: 'from 3.50', desc: 'Bacardi, Captain Morgan, Malibu, Wray & Nephew.' },
        { name: 'Brandy', price: 'from 3.95', desc: 'Martell, Courvoisier.' },
        { name: 'Shots', price: '3.95', desc: 'Tequila, Sambuca, Jägermeister. Jäger bomb 7.95.' }
      ] },
      { title: 'Soft drinks', items: [
        { name: 'Hartridges fruit juice', price: '4.50', desc: 'Apple, orange, cranberry, apple & mango, apple & raspberry, orange & passion fruit.' },
        { name: 'Coke, Diet Coke, Coke Zero, Fanta, Sprite', price: '2.95', desc: '330ml cans.' },
        { name: 'Soda / tonic water', price: '2.50', desc: '' },
        { name: 'Red Bull', price: '4.95', desc: '' },
        { name: 'Still / sparkling water', price: '2.95 / 4.50', desc: '330ml / 750ml.' }
      ] }
    ]
  }
];
