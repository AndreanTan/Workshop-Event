"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "workshops",
      [
        {
          id: 1,
          workshop_name: "Pottery Workshop",
          address: "jl.sesuatu 1",
          price: 300000,
          workshop_duration: 2,
          languange_id: 1,
          description_1:
            "Learn the art of pottery and create your own unique pieces.",
          description_2: "Suitable for beginners and intermediate levels.",
          category_type: 1,
          workshop_image: "public/Pottery.jpg",
          ratings: null,
        },
        {
          id: 2,
          workshop_name: "Handmade Jewelry Crafting",
          address: "jl.apapun 2",
          price: 250000,
          workshop_duration: 3,
          languange_id: 1,
          description_1: "Explore the world of handmade jewelry crafting.",
          description_2:
            "Bring your creativity to life with beautiful accessories.",
          category_type: 1,
          workshop_image: "public/Jewelry Crafting.jpg",
          ratings: null,
        },
        {
          id: 3,
          workshop_name: "Batik Art Workshop",
          address: "jl.manapun 3",
          price: 350000,
          workshop_duration: 4,
          languange_id: 2,
          description_1: "Discover the traditional art of batik.",
          description_2:
            "Create your own batik masterpiece with skilled instructors.",
          category_type: 1,
          workshop_image: "public/Batik Art.jpg",
          ratings: null,
        },
        {
          id: 4,
          workshop_name: "Wood Carving Class",
          address: "jl.dimanapun 4",
          price: 280000,
          workshop_duration: 2,
          languange_id: 2,
          description_1: "Experience the beauty of wood carving.",
          description_2:
            "Learn carving techniques and create intricate wooden designs.",
          category_type: 1,
          workshop_image: "public/Wood Carving.jpg",
          ratings: null,
        },
        {
          id: 5,
          workshop_name: "Traditional Textile Weaving",
          address: "jl.apalagi 5",
          price: 320000,
          workshop_duration: 3,
          languange_id: 1,
          description_1:
            "Immerse yourself in the world of traditional textile weaving.",
          description_2:
            "Craft beautiful textiles with guidance from experienced weavers.",
          category_type: 1,
          workshop_image: "public/Traditional Textile Weaving.jpg",
          ratings: null,
        },
        {
          id: 6,
          workshop_name: "Italian Pasta Making",
          address: "Jl. Pasta Bahagia No. 123",
          price: 350000,
          workshop_duration: 3,
          languange_id: 1,
          description_1:
            "Master the art of making authentic Italian pasta from scratch.",
          description_2: "Enjoy a hands-on experience with expert chefs.",
          category_type: 2,
          workshop_image: "public/Italian Pasta Making.jpg",
          ratings: null,
        },
        {
          id: 7,
          workshop_name: "Sushi Masterclass",
          address: "Jl. Sushi Enak No. 456",
          price: 400000,
          workshop_duration: 4,
          languange_id: 2,
          description_1: "Learn the secrets of crafting delicious sushi rolls.",
          description_2: "Get creative with various sushi-making techniques.",
          category_type: 2,
          workshop_image: "public/Sushi Masterclass.jpg",
          ratings: null,
        },
        {
          id: 8,
          workshop_name: "Baking Artistry",
          address: "Jl. Bakery Indah No. 789",
          price: 300000,
          workshop_duration: 2,
          languange_id: 1,
          description_1:
            "Unleash your inner baker with a hands-on baking workshop.",
          description_2:
            "Create delightful pastries and desserts with expert guidance.",
          category_type: 2,
          workshop_image: "public/Baking Artistry.jpg",
          ratings: null,
        },
        {
          id: 9,
          workshop_name: "Barbecue Mastery",
          address: "Jl. Grill Asyik No. 101",
          price: 450000,
          workshop_duration: 5,
          languange_id: 1,
          description_1: "Become a grill master with this barbecue workshop.",
          description_2:
            "Explore various barbecue techniques and flavor profiles.",
          category_type: 2,
          workshop_image: "public/Barbecue Mastery.jpg",
          ratings: null,
        },
        {
          id: 10,
          workshop_name: "Thai Cooking Adventure",
          address: "Jl. Exotic Thai Flavors No. 234",
          price: 380000,
          workshop_duration: 3,
          languange_id: 1,
          description_1:
            "Embark on a culinary journey with a Thai cooking adventure.",
          description_2:
            "Learn to prepare authentic Thai dishes with experienced chefs.",
          category_type: 2,
          workshop_image: "public/Thai Cooking Adventure.jpg",
          ratings: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("workshops", null, {});
  },
};
