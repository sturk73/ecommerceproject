# frozen_string_literal: true

weapon = Category.find_or_create_by(name: 'Weapons')
armour = Category.find_or_create_by(name: 'Armour')
magicalItem = Category.find_or_create_by(name: 'Magical Items')
potion = Category.find_or_create_by(name: 'Potions & Elixirs')

Product.create(name: 'Cruel Blade of the Desert', description: 'This sword glows hot with the desert sun,', quantity: 1, product_price: 499.99, category_id: weapon['id'])

Product.create(name: 'Tranquility', description: "This sword's guard is formed like a hand with a green-colored material inlaid in the fingernails, making a mystic gesture. Its grip is of a purple metal.", quantity: 1, product_price: 863.99, category_id: weapon['id'])

Product.create(name: 'Onyx Blade', description: "This sword's guard is wave-shaped. Its grip is formed like a mountain, the top inlaid with onyx", quantity: 7, product_price: 199.99, category_id: weapon['id'])

Product.create(name: 'Ravenhold Longsword', description: 'This sword has a keen blade with a silver hue to it, with a pattern made of arcs and spirals engraved on it. Its grip is formed like a tower.', quantity: 3, product_price: 249.99, category_id: weapon['id'])
