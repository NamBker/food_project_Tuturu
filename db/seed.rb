# puts "Faker 5 Categories"
# Category.create(:name => 'Corporate',:description =>'Flowers have two unique peculiarities because they have very unbelievable appearance and unique smell. This combination makes them perfect. And this magical process of fertilization, it is a real wonder. Just imagine how simple and incredible it is when the bees pollinate flowers. Yeah, our nature is unbelievable. If you want to express your feelings without saying a word just present flowers and everything will be understood. Besides that they have other interesting features because their blossom is the main ingredient of all perfumes. They can cast a spell with their charming smell.')
# Category.create(:name => 'Love & Romance',:description =>'Flowers have two unique peculiarities because they have very unbelievable appearance and unique smell. This combination makes them perfect. And this magical process of fertilization, it is a real wonder. Just imagine how simple and incredible it is when the bees pollinate flowers. Yeah, our nature is unbelievable. If you want to express your feelings without saying a word just present flowers and everything will be understood. Besides that they have other interesting features because their blossom is the main ingredient of all perfumes. They can cast a spell with their charming smell.')
# Category.create(:name => 'Sympathy',:description =>'Flowers have two unique peculiarities because they have very unbelievable appearance and unique smell. This combination makes them perfect. And this magical process of fertilization, it is a real wonder. Just imagine how simple and incredible it is when the bees pollinate flowers. Yeah, our nature is unbelievable. If you want to express your feelings without saying a word just present flowers and everything will be understood. Besides that they have other interesting features because their blossom is the main ingredient of all perfumes. They can cast a spell with their charming smell.')
# Category.create(:name => 'New Baby',:description =>'Flowers have two unique peculiarities because they have very unbelievable appearance and unique smell. This combination makes them perfect. And this magical process of fertilization, it is a real wonder. Just imagine how simple and incredible it is when the bees pollinate flowers. Yeah, our nature is unbelievable. If you want to express your feelings without saying a word just present flowers and everything will be understood. Besides that they have other interesting features because their blossom is the main ingredient of all perfumes. They can cast a spell with their charming smell.')
# Category.create(:name => 'Christmas',:description =>'Flowers have two unique peculiarities because they have very unbelievable appearance and unique smell. This combination makes them perfect. And this magical process of fertilization, it is a real wonder. Just imagine how simple and incredible it is when the bees pollinate flowers. Yeah, our nature is unbelievable. If you want to express your feelings without saying a word just present flowers and everything will be understood. Besides that they have other interesting features because their blossom is the main ingredient of all perfumes. They can cast a spell with their charming smell.')
# puts "Create 4 Special Products"
# Special.create(:product_id => 1)
# Special.create(:product_id => 4)
# Special.create(:product_id => 12)
# Special.create(:product_id => 16)

# puts "Create 4 Featured Products"
# Featured.create(:product_id => 3)
# Featured.create(:product_id => 5)
# Featured.create(:product_id => 7)
# Featured.create(:product_id => 9)

# puts "Create User"
# User.create!(name:  "Example User",
#              email: "admin@gmail.com",
#              password:              "admin1",
#              password_confirmation: "admin1",
#              admin: true)
# User.create!(name:  "Example User",
#              email: "nam@gmail.com",
#              password:              "123456",
#              password_confirmation: "123456",
#              admin: false)

# puts "Faker 50 Users"
# 5.times do |n|
#   password = Faker::Internet.password
#   User.create! name:  Faker::Name.name, email: Faker::Internet.email, password: password, password_confirmation: password,
#     phone: Faker::PhoneNumber.cell_phone, address: Faker::Address.street_address
# end

# puts "Finish"

# puts "Faker 50 Images"
# Image.create(:link => 'http://localhost:3000/assets/product-1-800x800.png',product_id: 1);
# Image.create(:link =>  "http://localhost:3000/assets/product-2-800x800.png",product_id: 2);
# Image.create(:link =>  "http://localhost:3000/assets/product-3-800x800.png",product_id: 3);
# Image.create(:link => "http://localhost:3000/assets/product-4-800x800.png",product_id: 4);
# Image.create(:link => "http://localhost:3000/assets/product-5-800x800.png",product_id: 5);
# Image.create(:link => "http://localhost:3000/assets/product-6-800x800.png",product_id: 6);
# Image.create(:link => "http://localhost:3000/assets/product-7-800x800.png",product_id: 7);
# Image.create(:link => "http://localhost:3000/assets/product-8-800x800.png",product_id: 8);
# Image.create(:link => "http://localhost:3000/assets/product-9-800x800.png",product_id: 9);
# Image.create(:link => "http://localhost:3000/assets/product-10-800x800.png",product_id: 10);
# Image.create(:link => "http://localhost:3000/assets/product-11-800x800.png",product_id: 11);
# Image.create(:link => "http://localhost:3000/assets/product-12-800x800.png",product_id: 12);

# puts "Finish"

# puts "Create 3 Product Details"

# ProductDetail.create(:type_product=> "Nomal",:product_id => '1', :code => 'FL01N',:price =>'12.00',:new => 'true',:discount => '10');
# ProductDetail.create(:type_product=> "Small",:product_id => '1', :code => 'FL01S',:price =>'10.00',:new => 'true',:discount => '10');
# ProductDetail.create(:type_product=> "Large",:product_id => '1', :code => 'FL01L',:price =>'15.00',:new => 'true',:discount => '10');

# ProductDetail.create(:type_product=> "Nomal",:product_id => '2', :code => 'FL02N',:price =>'12.00',:new => 'true',:discount => '10');
# ProductDetail.create(:type_product=> "Small",:product_id => '2', :code => 'FL02S',:price =>'10.00',:new => 'true',:discount => '10');
# ProductDetail.create(:type_product=> "Large",:product_id => '2', :code => 'FL02L',:price =>'15.00',:new => 'true',:discount => '10');
# puts "Finish"