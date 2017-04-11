class Product < ActiveRecord::Base
	TYPES = ['Nomal', 'Small',  'Large',]

	belongs_to :category
	has_many :product_details
	has_many :images

	mount_uploader :image, AvatarUploader
end
