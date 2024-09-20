const products = [
  {
    name: "Samsung Galaxy A13 Blue, 4GB RAM, 64GB Storage",
    image: "/images/Galaxy-A13.jpg",
    description:
      "The Samsung Galaxy A13 Blue is a powerful and stylish smartphone that offers an impressive 4GB of RAM and 64GB of storage. It features a 5.7-inch HD+ Infinity-V display, a 13MP rear camera, and an 8MP front camera. The device is powered by the Exynos 850 octa-core processor and runs on the Android 10 operating system. With its long-lasting battery, you can stay connected for hours on end without having to worry about running out of power. With its sleek design and powerful specs, the Samsung Galaxy A13 Blue is perfect for anyone looking for a reliable and stylish phone that won’t break the bank.",
    brand: "Samsung",
    category: "Smartphones",
    price: 16799,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Xiaomi Redmi Note 11 4G Global Version 128GB + 4GB Unlocked 6.43",
    image: "/images/Redmi-Note-11.jpg",
    description:
      "The Xiaomi Redmi Note 11 4G Global Version 128GB + 4GB is a powerful and feature-packed smartphone that packs a punch. It has a 6.53-inch FHD+ LCD display with a resolution of 2340 x 1080 pixels and an aspect ratio of 19.5:9. It is powered by the MediaTek Helio G85 octa-core processor, along with 4GB of RAM and 128GB of internal storage that can be further expanded via microSD card up to 512GB. The phone runs on the latest Android 10 operating system with MIUI 12 on top. It features four rear cameras including a 48MP primary camera, 8MP ultra wide-angle lens, 2MP macro lens and 2MP depth sensor for capturing stunning photos and videos. The phone is fueled by a 5,020mAh battery which supports 18W fast charging technology for quick top ups.",
    brand: "Xiaomi",
    category: "Smartphones",
    price: 17000,
    countInStock: 20,
    rating: 4.3,
    numReviews: 5,
  },
  {
    name: "iPhone 13, 128GB, Pink - Unlocked (Renewed Premium)",
    image: "/images/iPhone-13-CH.jpg",
    description:
      "This iPhone 13 128GB Pink Unlocked (Renewed Premium) is the perfect combination of style and performance. With its sleek and modern design, you can be sure to turn heads wherever you go. Its powerful A14 Bionic chip ensures a smooth and responsive experience, while the 128GB storage capacity allows you to store all your favorite movies, music, photos, and more. The unlocked feature allows you to use it with any carrier of your choice. Plus, the Renewed Premium designation ensures that this device is in like-new condition so that you can enjoy it for years to come.",
    brand: "iPhone",
    category: "Smartphones",
    price: 85000,
    countInStock: 5,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "Apevia G-PRO-WH Genesis Pro Mid Tower Gaming Case with 2 x Tempered Glass Panel",
    image: "/images/Apevia-G-PRO-WH.jpg",
    description:
      "The Apevia G-PRO-WH Genesis Pro Mid Tower Gaming Case is a stylish and powerful mid tower case designed for gamers. It features two tempered glass panels that provide a clear view of your components, as well as a top panel with USB3.0/USB2.0/Audio ports for easy access to your peripherals. The case also includes six RGB fans for optimal cooling performance, and a white frame to give it a sleek look. With its ample space and efficient cooling, the Apevia G-PRO-WH Genesis Pro is the perfect choice for any gaming setup.",
    brand: "Apevia",
    category: "PC",
    price: 12000,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "Canon EOS Rebel T100 / 4000D DSLR Camera (w/ 18-55 III) (Renewed)",
    image: "/images/Canon-EOS-Rebel.jpg",
    description:
      "The Canon EOS Rebel T100 / 4000D DSLR Camera (w/ 18-55 III) (Renewed) is a great entry-level DSLR camera that offers powerful performance and features at an affordable price. The camera features a 24.1 megapixel APS-C CMOS sensor and DIGIC 4+ image processor, allowing you to capture stunning images with vibrant colors and sharp details. The camera also features an 18-55mm III lens, providing you with a versatile zoom range for capturing wide angle shots or close ups of your subject. With its intuitive controls and easy to use menu system, the Canon EOS Rebel T100 / 4000D DSLR Camera (w/ 18-55 III) (Renewed) is perfect for anyone looking to get into photography.",
    brand: "Canon",
    category: "Camera",
    price: 40000,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: "Anker Portable Charger, 325 Power Bank (PowerCore Essential 20K)",
    image: "/images/Anker-Portable-Charger.jpg",
    description:
      "The Anker Portable Charger, 325 Power Bank (PowerCore Essential 20K) 20000mAh Battery Pack is the perfect companion for any trip. With a massive 20,000mAh capacity, this power bank can charge your devices multiple times over without needing to be recharged itself. Its small size and light weight make it incredibly portable and easy to take with you on the go. It features dual USB ports for simultaneous charging of two devices, and advanced safety features to keep your devices safe from overcharging and short-circuiting. This power bank is compatible with almost all USB-chargeable devices, including phones, tablets, cameras, and more. Get the most out of your travels with this reliable and powerful Anker Portable Charger.",
    brand: "Anker",
    category: "Phone accessories",
    price: 3200,
    countInStock: 42,
    rating: 4.6,
    numReviews: 14,
  },
  {
    name: "EAFU Portable Charger, Compact 10000mAh Triple 3A High Speed LED Display USB C Power Bank",
    image: "/images/EAFU-Portable-Charger.jpg",
    description:
      "This EAFU Portable Charger is a powerful and compact device that provides a 10000mAh Triple 3A High Speed charge with an LED display. It features USB C Power Bank technology, an external battery pack, and a built-in flashlight. It is designed to quickly and efficiently charge your iPhone 14 13 12 X Pro 8 Plus, Samsung S20 S10, Google LG, iPad Tablet and other compatible devices. With its slim design and lightweight construction, this charger is perfect for bringing along anywhere you go. Get reliable power on the go with the EAFU Portable Charger!",
    brand: "EAFU",
    category: "Phone accessories",
    price: 1700,
    countInStock: 13,
    rating: 3.2,
    numReviews: 6,
  },
  {
    name: "Soundcore Anker Life Q20 Hybrid Active Noise Cancelling Headphones, Wireless Over Ear Bluetooth Headphones",
    image: "/images/Soundcore-Anker-Life-Q20.jpg",
    description:
      "The Soundcore Anker Life Q20 Hybrid Active Noise Cancelling Headphones are the perfect choice for anyone looking for superior sound quality, comfort, and convenience. These wireless over ear Bluetooth headphones provide up to 40 hours of playtime, Hi-Res Audio, and Deep Bass. They also feature a memory foam ear cups for superior comfort and noise isolation. Perfect for travel or home office use, these headphones will help you enjoy your music or podcasts with crystal clear sound and maximum comfort.",
    brand: "Soundcore",
    category: "Headphones",
    price: 8000,
    countInStock: 27,
    rating: 3.9,
    numReviews: 8,
  },
  {
    name: "TAGRY Bluetooth Headphones True Wireless Earbuds 60H Playback LED Power Display Earphones",
    image: "/images/TAGRY-Bluetooth-Headphones.jpg",
    description:
      "TAGRY Bluetooth Headphones True Wireless Earbuds provide you with a superior listening experience. With up to 60 hours of playback, LED power display, and IPX5 waterproof protection, you can enjoy your music without worrying about battery life or water damage. The wireless charging case ensures that you'll never have to worry about running out of power while the in-ear earbuds with built-in mic make it easy to take calls and listen to music on the go. These earphones are perfect for watching TV, talking on the phone, or listening to music on your computer or laptop. They are also great for sports and outdoor activities thanks to their lightweight design and secure fit. Enjoy crystal clear sound with TAGRY Bluetooth Headphones True Wireless Earbuds!",
    brand: "TAGRY",
    category: "Headphones",
    price: 3400,
    countInStock: 0,
    rating: 4.7,
    numReviews: 22,
  },
  {
    name: " Xbox Series X",
    image: "/images/Xbox-Series.X.jpg",
    description:
      "The Xbox Series X is the next-generation console from Microsoft, designed to deliver an immersive gaming experience with incredible speed and power. It features a custom-designed processor based on the latest AMD Zen 2 and RDNA 2 architectures, 12 teraflops of GPU power, and next-gen hardware accelerated ray tracing. It has a 4K Blu-ray drive, 1TB of internal storage, and support for up to 8K resolution. It also supports high frame rates up to 120 fps, variable refresh rate, and ultra low latency. With its groundbreaking technology and advanced features, the Xbox Series X is sure to revolutionize gaming.",
    brand: "Microsoft",
    category: "Consoles",
    price: 60000,
    countInStock: 8,
    rating: 5,
    numReviews: 26,
  },
];

export default products;
