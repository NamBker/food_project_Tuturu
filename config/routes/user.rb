Rails.application.routes.draw do
	resources :orders
  resources :categories
  resources :products
  # For details on the DSL available within this file, see http:guides.rubyonrails.orgrouting.html
  root "static_pages#home"
  get  'help',    to: 'static_pages#help'
  get  'about',   to: 'static_pages#about'
  get  'contact', to: 'static_pages#contact'
  get  'setting', to: 'static_pages#setting'
  get  'signup',  to: 'users#new'
  post '/signup',  to: 'users#create'

  get  'account', to: 'users#account'

  get    'login',   to: 'sessions#new'
  post   'login',   to: 'sessions#create'
  get 'logout',  to: 'sessions#destroy'
  
    get    'search', to: 'static_pages#search'

  post 'category/sort_product'

  resources :users
  post 'user/add_review', to: 'users#add_review'
end