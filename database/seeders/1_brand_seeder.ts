import Brand from '#models/brand'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Brand.createMany([
      // Shoes
      { name: 'Nike', cover: 'nike.jpg' },
      { name: 'Adidas', cover: 'adidas.jpg' },
      { name: 'Puma', cover: 'puma.jpg' },
      { name: 'Reebok', cover: 'reebok.jpg' },
      { name: 'New Balance', cover: 'newbalance.jpg' },
      { name: 'Asics', cover: 'asics.jpg' },
      { name: 'Converse', cover: 'converse.jpg' },
      { name: 'Vans', cover: 'vans.jpg' },
      { name: 'Timberland', cover: 'timberland.jpg' },
      { name: 'Skechers', cover: 'skechers.jpg' },
      
      // Bikes
      { name: 'Trek', cover: 'trek.jpg' },
      { name: 'Specialized', cover: 'specialized.jpg' },
      { name: 'Giant', cover: 'giant.jpg' },
      { name: 'Cannondale', cover: 'cannondale.jpg' },
      { name: 'Bianchi', cover: 'bianchi.jpg' },
      { name: 'Scott', cover: 'scott.jpg' },
      { name: 'Cervelo', cover: 'cervelo.jpg' },
      { name: 'Santa Cruz', cover: 'santacruz.jpg' },
      { name: 'Merida', cover: 'merida.jpg' },
      { name: 'Cube', cover: 'cube.jpg' },
      
      // T-Shirts
      { name: 'Hanes', cover: 'hanes.jpg' },
      { name: 'Fruit of the Loom', cover: 'fruitoftheloom.jpg' },
      { name: 'Gildan', cover: 'gildan.jpg' },
      { name: 'Under Armour', cover: 'underarmour.jpg' },
      { name: 'Champion', cover: 'champion.jpg' },
      { name: 'American Apparel', cover: 'americanapparel.jpg' },
      { name: 'Next Level', cover: 'nextlevel.jpg' },
      { name: 'Bella+Canvas', cover: 'bellacanvas.jpg' },
      
      // Furniture
      { name: 'Ikea', cover: 'ikea.jpg' },
      { name: 'Ashley Furniture', cover: 'ashleyfurniture.jpg' },
      { name: 'Wayfair', cover: 'wayfair.jpg' },
      { name: 'Herman Miller', cover: 'hermanmiller.jpg' },
      { name: 'Steelcase', cover: 'steelcase.jpg' },
      { name: 'La-Z-Boy', cover: 'lazboy.jpg' },
      { name: 'West Elm', cover: 'westelm.jpg' },
      { name: 'Crate & Barrel', cover: 'crateandbarrel.jpg' },
      { name: 'Restoration Hardware', cover: 'restorationhardware.jpg' },
      { name: 'Pottery Barn', cover: 'potterybarn.jpg' },
      
      // Headphones
      { name: 'Bose', cover: 'bose.jpg' },
      { name: 'Sony', cover: 'sony.jpg' },
      { name: 'Sennheiser', cover: 'sennheiser.jpg' },
      { name: 'Beats', cover: 'beats.jpg' },
      { name: 'JBL', cover: 'jbl.jpg' },
      { name: 'Audio-Technica', cover: 'audiotechnica.jpg' },
      { name: 'AKG', cover: 'akg.jpg' },
      { name: 'Bowers & Wilkins', cover: 'bowerswilkins.jpg' },
      { name: 'Bang & Olufsen', cover: 'bangolufsen.jpg' },
      { name: 'Skullcandy', cover: 'skullcandy.jpg' },
      
      // Phones
      { name: 'Apple', cover: 'apple.jpg' },
      { name: 'Samsung', cover: 'samsung.jpg' },
      { name: 'Google', cover: 'google.jpg' },
      { name: 'OnePlus', cover: 'oneplus.jpg' },
      { name: 'Huawei', cover: 'huawei.jpg' },
      { name: 'Xiaomi', cover: 'xiaomi.jpg' },
      { name: 'LG', cover: 'lg.jpg' },
      { name: 'Nokia', cover: 'nokia.jpg' },
      { name: 'Motorola', cover: 'motorola.jpg' },
      
      // Laptops
      { name: 'Dell', cover: 'dell.jpg' },
      { name: 'HP', cover: 'hp.jpg' },
      { name: 'Lenovo', cover: 'lenovo.jpg' },
      { name: 'Asus', cover: 'asus.jpg' },
      { name: 'Acer', cover: 'acer.jpg' },
      { name: 'Microsoft', cover: 'microsoft.jpg' },
      { name: 'Razer', cover: 'razer.jpg' },
      { name: 'MSI', cover: 'msi.jpg' },
      
      // Makeup
      { name: 'Maybelline', cover: 'maybelline.jpg' },
      { name: 'L\'Oreal', cover: 'loreal.jpg' },
      { name: 'MAC', cover: 'mac.jpg' },
      { name: 'Sephora', cover: 'sephora.jpg' },
      { name: 'Urban Decay', cover: 'urbandecay.jpg' },
      { name: 'NARS', cover: 'nars.jpg' },
      { name: 'Clinique', cover: 'clinique.jpg' },
      { name: 'Benefit', cover: 'benefit.jpg' },
      { name: 'Dior', cover: 'dior.jpg' },
      { name: 'Chanel', cover: 'chanel.jpg' },
      
      // Home Appliances
      { name: 'Whirlpool', cover: 'whirlpool.jpg' },
      { name: 'GE', cover: 'ge.jpg' },
      { name: 'Bosch', cover: 'bosch.jpg' },
      { name: 'KitchenAid', cover: 'kitchenaid.jpg' },
      { name: 'Frigidaire', cover: 'frigidaire.jpg' },
      { name: 'Electrolux', cover: 'electrolux.jpg' },
      { name: 'Maytag', cover: 'maytag.jpg' },
      { name: 'Miele', cover: 'miele.jpg' },
      
      // Controllers
      { name: 'Nintendo', cover: 'nintendocontroller.jpg' },
      { name: 'PowerA', cover: 'poweracontroller.jpg' },
      { name: 'PDP', cover: 'pdpcontroller.jpg' },

      // Weights  
      { name: 'Bowflex', cover: 'bowflex.jpg' },
      { name: 'Rogue Fitness', cover: 'roguefitness.jpg' },
      { name: 'CAP Barbell', cover: 'capbarbell.jpg' },
      { name: 'York Fitness', cover: 'yorkfitness.jpg' },
      { name: 'PowerBlock', cover: 'powerblock.jpg' },
      { name: 'Titan Fitness', cover: 'titanfitness.jpg' },
      { name: 'Ironmaster', cover: 'ironmaster.jpg' },
      { name: 'Life Fitness', cover: 'lifefitness.jpg' },
      { name: 'ProForm', cover: 'proform.jpg' },
      { name: 'NordicTrack', cover: 'nordictrack.jpg' },

      // Gardening
      { name: 'Fiskars', cover: 'fiskars.jpg' },
      { name: 'Gardena', cover: 'gardena.jpg' },
      { name: 'Husqvarna', cover: 'husqvarna.jpg' },
      { name: 'Black+Decker', cover: 'blackdecker.jpg' },
      { name: 'Makita', cover: 'makita.jpg' },
      { name: 'Greenworks', cover: 'greenworks.jpg' },
      { name: 'Ryobi', cover: 'ryobi.jpg' },
      { name: 'Stihl', cover: 'stihl.jpg' },
      { name: 'Echo', cover: 'echo.jpg' },
      
      // Books
      { name: 'Penguin', cover: 'penguin.jpg' },
      { name: 'HarperCollins', cover: 'harpercollins.jpg' },
      { name: 'Simon & Schuster', cover: 'simonandschuster.jpg' },
      { name: 'Macmillan', cover: 'macmillan.jpg' },
      { name: 'Hachette', cover: 'hachette.jpg' },
      { name: 'Random House', cover: 'randomhouse.jpg' },
      { name: 'Scholastic', cover: 'scholastic.jpg' },
      { name: 'Bloomsbury', cover: 'bloomsbury.jpg' },
      { name: 'Oxford University Press', cover: 'oxforduniversitypress.jpg' },
      { name: 'Cambridge University Press', cover: 'cambridgeuniversitypress.jpg' },
      
      // Mouses
      { name: 'Logitech', cover: 'logitech.jpg' },
      { name: 'Razer', cover: 'razer.jpg' },
      { name: 'SteelSeries', cover: 'steelseries.jpg' },
      { name: 'Corsair', cover: 'corsair.jpg' },
      { name: 'Apple', cover: 'apple.jpg' },
      { name: 'HP', cover: 'hp.jpg' },
      { name: 'Dell', cover: 'dell.jpg' },
      { name: 'Asus', cover: 'asus.jpg' },
      { name: 'Lenovo', cover: 'lenovo.jpg' },
    ])
  }
}
