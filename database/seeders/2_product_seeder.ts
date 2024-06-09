import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '#models/products'

export default class extends BaseSeeder {
  async run() {
    await Product.createMany([
      {
        product_type_id: 1,
        brand_id: 1,
        title: 'Nike Homme Basket',
        price: 129.99,
        cover: 'https://m.media-amazon.com/images/I/81j7lKOrUgL._AC_SX575_.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 1,
        title: 'Nike Homme Revolution 6 Nn Chaussures de Course',
        price: 44.99,
        cover: 'https://m.media-amazon.com/images/I/51DeSu3qTpL._AC_SY695_.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 1,
        title: 'Nike Air Max 95 Corteiz Pink Beam',
        price: 350.00,
        cover: 'https://m.media-amazon.com/images/I/41J4N5nPURL._AC_UF480,480_SR480,480_.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 1,
        title: 'Nike Air Max 1 \'86 OG Big Bubble Sport Red',
        price: 190.00,
        cover: 'https://m.media-amazon.com/images/I/41J4N5nPURL._AC_UF480,480_SR480,480_.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 1,
        title: 'Nike Air Max 1 Design by Japan (W)',
        price: 280.00,
        cover: 'https://m.media-amazon.com/images/I/41J4N5nPURL._AC_UF480,480_SR480,480_.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 2,  // Adidas brand ID
        title: 'Adidas Yeezy Boost 350 Turtledove (2022)',
        price: 400.00,
        cover: 'https://m.media-amazon.com/images/I/71GUUtRndkL._AC_SY695_.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 2,
        title: 'Adidas Yeezy Boost 350 V2 Bone',
        price: 400.00,
        cover: 'https://m.media-amazon.com/images/I/71GUUtRndkL._AC_SY695_.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 2,
        title: 'Adidas Yeezy Boost 350 V2 Oreo',
        price: 540.00,
        cover: 'https://m.media-amazon.com/images/I/71GUUtRndkL._AC_SY695_.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 2,
        title: 'Adidas Yeezy Boost 350 V2 Dazzling Blue',
        price: 430.00,
        cover: 'https://m.media-amazon.com/images/I/71GUUtRndkL._AC_SY695_.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 2,
        title: 'Adidas Yeezy Boost 350 V2 Beluga Reflective',
        price: 380.00,
        cover: 'https://m.media-amazon.com/images/I/71GUUtRndkL._AC_SY695_.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 3,  // Puma brand ID
        title: 'Puma XT S',
        price: 46.35,
        cover: 'https://example.com/puma_xt_s.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 3,
        title: 'Puma XS850 Peter',
        price: 52.32,
        cover: 'https://example.com/puma_xs850_peter.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 3,
        title: 'Puma X-Ray Tour',
        price: 88.21,
        cover: 'https://example.com/puma_xray_tour.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 3,
        title: 'Puma X-Ray Speed',
        price: 64.55,
        cover: 'https://example.com/puma_xray_speed.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 3,
        title: 'Puma X-Ray Speed (White/Blue/Red)',
        price: 63.26,
        cover: 'https://example.com/puma_xray_speed_white_blue_red.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 4,  // Reebok brand ID
        title: 'Reebok Court Clean',
        price: 40.54,
        cover: 'https://example.com/reebok_court_clean.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 4,
        title: 'Reebok Club C Double Revenge',
        price: 65.84,
        cover: 'https://example.com/reebok_club_c_double_revenge.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 4,
        title: 'Reebok Court Advance',
        price: 51.13,
        cover: 'https://example.com/reebok_court_advance.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 4,
        title: 'Reebok Court Retro',
        price: 44.07,
        cover: 'https://example.com/reebok_court_retro.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 5,  // New Balance brand ID
        title: 'New Balance 574 Core',
        price: 110.00,
        cover: 'https://example.com/new_balance_574_core.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 5,
        title: 'New Balance 2002R',
        price: 150.00,
        cover: 'https://example.com/new_balance_2002r.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 5,
        title: 'New Balance Made in USA 993',
        price: 240.00,
        cover: 'https://example.com/new_balance_made_in_usa_993.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 5,
        title: 'New Balance 9060 Blue',
        price: 190.00,
        cover: 'https://example.com/new_balance_9060_blue.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 5,
        title: 'New Balance 1906R',
        price: 170.00,
        cover: 'https://example.com/new_balance_1906r.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 5,
        title: 'New Balance 9060 Green',
        price: 190.00,
        cover: 'https://example.com/new_balance_9060_green.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      // Asics
      {
        product_type_id: 1,
        brand_id: 6,
        title: 'Asics Gel-Kayano 27',
        price: 160.00,
        cover: 'https://example.com/asics_gel_kayano_27.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 6,
        title: 'Asics Gel-Nimbus 23',
        price: 150.00,
        cover: 'https://example.com/asics_gel_nimbus_23.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 6,
        title: 'Asics GT-2000 9',
        price: 140.00,
        cover: 'https://example.com/asics_gt_2000_9.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 6,
        title: 'Asics Gel-Excite 8',
        price: 100.00,
        cover: 'https://example.com/asics_gel_excite_8.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 6,
        title: 'Asics Gel-Venture 7',
        price: 90.00,
        cover: 'https://example.com/asics_gel_venture_7.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },

      // Converse
      {
        product_type_id: 1,
        brand_id: 7,
        title: 'Converse Chuck Taylor All Star',
        price: 60.00,
        cover: 'https://example.com/converse_chuck_taylor_all_star.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 7,
        title: 'Converse One Star Pro',
        price: 70.00,
        cover: 'https://example.com/converse_one_star_pro.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 7,
        title: 'Converse Pro Leather',
        price: 75.00,
        cover: 'https://example.com/converse_pro_leather.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 7,
        title: 'Converse Jack Purcell',
        price: 85.00,
        cover: 'https://example.com/converse_jack_purcell.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 7,
        title: 'Converse Star Player',
        price: 65.00,
        cover: 'https://example.com/converse_star_player.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },

      // Vans
      {
        product_type_id: 1,
        brand_id: 8,
        title: 'Vans Old Skool',
        price: 50.00,
        cover: 'https://example.com/vans_old_skool.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 8,
        title: 'Vans Sk8-Hi',
        price: 60.00,
        cover: 'https://example.com/vans_sk8_hi.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 8,
        title: 'Vans Authentic',
        price: 45.00,
        cover: 'https://example.com/vans_authentic.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 8,
        title: 'Vans Era',
        price: 55.00,
        cover: 'https://example.com/vans_era.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 8,
        title: 'Vans Slip-On',
        price: 50.00,
        cover: 'https://example.com/vans_slip_on.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },

      // Timberland
      {
        product_type_id: 1,
        brand_id: 9,
        title: 'Timberland 6-Inch Premium Waterproof Boot',
        price: 180.00,
        cover: 'https://example.com/timberland_6_inch_premium_waterproof_boot.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 9,
        title: 'Timberland PRO Boondock',
        price: 200.00,
        cover: 'https://example.com/timberland_pro_boondock.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 9,
        title: 'Timberland White Ledge Mid Waterproof Boot',
        price: 115.00,
        cover: 'https://example.com/timberland_white_ledge_mid_waterproof_boot.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 9,
        title: 'Timberland Earthkeepers Original',
        price: 150.00,
        cover: 'https://example.com/timberland_earthkeepers_original.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 9,
        title: 'Timberland Mt. Maddsen Waterproof Boot',
        price: 130.00,
        cover: 'https://example.com/timberland_mt_maddsen_waterproof_boot.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },

      // Skechers
      {
        product_type_id: 1,
        brand_id: 10,
        title: 'Skechers D\'Lites',
        price: 65.00,
        cover: 'https://example.com/skechers_dlites.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 10,
        title: 'Skechers Go Walk 5',
        price: 55.00,
        cover: 'https://example.com/skechers_go_walk_5.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 10,
        title: 'Skechers Flex Advantage',
        price: 60.00,
        cover: 'https://example.com/skechers_flex_advantage.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 10,
        title: 'Skechers Ultra Flex',
        price: 70.00,
        cover: 'https://example.com/skechers_ultra_flex.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 10,
        title: 'Skechers After Burn Memory Fit',
        price: 75.00,
        cover: 'https://example.com/skechers_after_burn_memory_fit.jpg',
        withdraw_time: 2,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
    ])
  }
}
