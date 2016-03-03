# Creating the models with sequelize
node_modules/.bin/sequelize model:create --name company --attributes name:string,street:string,city:string,state:string,zip:string,website:string,logo:string

node_modules/.bin/sequelize model:create --name adie --attributes name:string,cohort:integer,github_username:string,twitter:string,linked_in_url:string,image:string,email:string,bio:text

sequelize model:create --name employee --attributes name:string,position:name, email:name,twitter:name,linked_in_url:string,image:string

