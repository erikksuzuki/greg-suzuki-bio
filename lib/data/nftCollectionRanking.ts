export type NftTrait = {
  id: string
  multiplier: number
}

export type NftCollection = {
  [key: string]: {
    name: string
    base_score: number
    traits: NftTrait[]
  }
}

export const ignoredCollections: NftCollection = {
  '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85': {
    name: 'ENS',
    base_score: 0,
    traits: [],
  },
}

const nftCollectionRanking: NftCollection = {
  '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb': {
    name: 'Crypto Punks',
    base_score: 500,
    traits: [
      { id: 'Accessory Earring', multiplier: 1.2 },
      { id: 'Attributes Count 5', multiplier: 1.4 },
      { id: 'Type Zombie', multiplier: 1.6 },
      { id: 'Type Ape', multiplier: 1.8 },
      { id: 'Type Alien', multiplier: 2 },
    ],
  },
  skip: {
    name: 'Fidenza*',
    base_score: 486,
    traits: [
      { id: 'Density Medium', multiplier: 1.2 },
      { id: 'Turbulance Low', multiplier: 1.4 },
      { id: 'Spiral Yes', multiplier: 1.6 },
      { id: 'Colors Party Time', multiplier: 1.8 },
      { id: 'Scale Small', multiplier: 2 },
    ],
  },
  '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d': {
    name: 'BAYC',
    base_score: 471,
    traits: [
      { id: 'Traits count 4', multiplier: 1.2 },
      { id: 'Earring Cross', multiplier: 1.4 },
      { id: 'Eyes Blue Beams', multiplier: 1.6 },
      { id: 'Clothes Black Suit', multiplier: 1.8 },
      { id: 'Mouth Bored Unshaven Pizza', multiplier: 2 },
      { id: 'Mouth Bored Unshaven Dagger', multiplier: 2 },
    ],
  },
  '0x348fc118bcc65a92dc033a951af153d14d945312': {
    name: 'RTFKT - CloneX Mintvial',
    base_score: 457,
    traits: [],
  },
  '0x57a204aa1042f6e66dd7730813f4024114d74f37': {
    name: 'CyberKongz',
    base_score: 443,
    traits: [
      { id: 'Traits Count 0', multiplier: 1.2 },
      { id: 'Traits Count 5', multiplier: 1.4 },
      { id: 'Baby Trait Cyberbrain', multiplier: 1.6 },
      { id: 'Baby Trait Airpods', multiplier: 1.8 },
      { id: 'Baby Trait Kongson Helmet', multiplier: 2 },
    ],
  },
  '0xED5AF388653567Af2F388E6224dC7C4b3241C544': {
    name: 'Azuki',
    base_score: 429,
    traits: [
      { id: 'Count 3 **not actual (fix)', multiplier: 1.2 },
      { id: 'Special Earth', multiplier: 1.4 },
      { id: 'Neck Golden Headphones', multiplier: 1.6 },
      { id: 'Hair Spirit Spiky', multiplier: 1.8 },
      { id: 'Hair Spirit Ponytail', multiplier: 2 },
    ],
  },
  '0x60E4d786628Fea6478F785A6d7e704777c86a7c6': {
    name: 'MAYC',
    base_score: 414,
    traits: [
      { id: 'Background M2 Blue', multiplier: 1.2 },
      { id: 'Traits Count 4', multiplier: 1.4 },
      { id: 'Earring M2 Diamond', multiplier: 1.6 },
      { id: 'Fur M2 Trippy', multiplier: 1.8 },
      { id: 'Traits Count 1', multiplier: 2 },
    ],
  },
  '0xaaDc2D4261199ce24A4B0a57370c4FCf43BB60aa': {
    name: 'The Currency ',
    base_score: 400,
    traits: [
      { id: 'Traits Count 29', multiplier: 1.2 },
      { id: 'Property Questions', multiplier: 1.4 },
      { id: 'Title Words 9', multiplier: 1.6 },
      { id: 'Title Words 10', multiplier: 1.8 },
      { id: 'Property Pride', multiplier: 2 },
    ],
  },
  '0x08D7C0242953446436F34b4C78Fe9da38c73668d': {
    name: 'Proof Collective',
    base_score: 386,
    traits: [],
  },
  '0x23581767a106ae21c074b2276D25e5C3e136a68b': {
    name: 'Moonbirds',
    base_score: 371,
    traits: [
      { id: 'Traits count 3', multiplier: 1.4 },
      { id: 'Body Glitch', multiplier: 1.6 },
      { id: 'Body Jade', multiplier: 1.6 },
      { id: 'Body Enlightened', multiplier: 1.6 },
      { id: 'Background Cosmic', multiplier: 1.8 },
      { id: 'Body Cosmic', multiplier: 1.8 },
      { id: 'Feathers Legendary Brave', multiplier: 2 },
      { id: 'Feathers Legendary Guardian', multiplier: 2 },
    ],
  },
  '0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e': {
    name: 'Doodles',
    base_score: 357,
    traits: [
      { id: 'Piercing Airpod', multiplier: 1.2 },
      { id: 'Background Space', multiplier: 1.4 },
      { id: 'Body Spotted Sweater', multiplier: 1.6 },
      { id: 'Head Balloon', multiplier: 1.8 },
      { id: 'Face Rainbow Puke', multiplier: 1.8 },
      { id: 'Head Cat', multiplier: 2 },
    ],
  },
  '0xe785E82358879F061BC3dcAC6f0444462D4b5330': {
    name: 'World of Women',
    base_score: 343,
    traits: [
      { id: 'Skin Tone Golden', multiplier: 1.2 },
      { id: 'Clothes Naiade', multiplier: 1.4 },
      { id: 'Skin Tone Nightgoddess', multiplier: 1.6 },
      { id: 'Eyes Heterochromia To The Left', multiplier: 1.8 },
      { id: 'Necklace Art Lover', multiplier: 2 },
    ],
  },
  '0x4222b2a98dAa443C6a0a761300d7d6bfD9161E52': {
    name: 'Illuvium',
    base_score: 329,
    traits: [
      { id: 'Rhamphyre - Genesis Promo', multiplier: 1.2 },
      { id: 'Dawnlight Badge - Gold', multiplier: 1.4 },
      { id: 'Dawnlight Badge - Gold', multiplier: 1.6 },
      { id: 'Gangsta Squizz Emote - Genesis Promo', multiplier: 1.8 },
      { id: 'Dawnlight Badge Diamond', multiplier: 2 },
    ],
  },
  '0x348FC118bcC65a92dC033A951aF153d14D945312': {
    name: 'Clone X',
    base_score: 314,
    traits: [],
  },
  '0x1A92f7381B9F03921564a437210bB9396471050C': {
    name: 'Cool Cats',
    base_score: 300,
    traits: [
      { id: 'Points 5', multiplier: 1.2 },
      { id: 'Points 7', multiplier: 1.4 },
      { id: 'Points 6', multiplier: 1.4 },
      { id: 'Points 8', multiplier: 1.6 },
      { id: 'Points 9', multiplier: 1.8 },
      { id: 'Points 10', multiplier: 2 },
    ],
  },
  '0x7d05c8d8cc1bac936ea09308a9e94823986f8321': {
    name: 'Djenerates - Club Edition',
    base_score: 286,
    traits: [
      { id: 'Backgrounds Blue Lasers', multiplier: 1.2 },
      { id: 'Headphones Yellow Glow', multiplier: 1.4 },
      { id: 'Earrings Big Silver Hoops', multiplier: 1.6 },
      { id: 'Eyes Compound Eyes', multiplier: 1.8 },
      { id: 'Hands Acid Laptop', multiplier: 2 },
    ],
  },
  '0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7': {
    name: 'Loot',
    base_score: 271,
    traits: [],
  },
  '0x59468516a8259058baD1cA5F8f4BFF190d30E066': {
    name: 'Invisible Friends',
    base_score: 257,
    traits: [
      { id: 'Shoe Gum Gum', multiplier: 1.2 },
      { id: 'Sleeves Long Sleeves With Stripes', multiplier: 1.4 },
      { id: 'Fannypack Cream Fannypack', multiplier: 1.6 },
      { id: 'Suspenders Rainbow Suspenders', multiplier: 1.8 },
      { id: 'Overhead Halo', multiplier: 1.8 },
      { id: 'Neck Necklace', multiplier: 2 },
    ],
  },
  '0xF3d26915D9c1235D39A0059d9ae1066a3b876B47': {
    name: 'Pigments',
    base_score: 243,
    traits: [
      { id: 'Mirror Single', multiplier: 1.2 },
      { id: 'Vortex Direction Left', multiplier: 1.4 },
      { id: 'Vortex Soft', multiplier: 1.6 },
      { id: 'Vortex Medium', multiplier: 1.8 },
      { id: 'Layout Partitions', multiplier: 1.8 },
      { id: 'Palette Zafron', multiplier: 2 },
      { id: 'Palette Tripico', multiplier: 2 },
    ],
  },
  '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8': {
    name: 'Pudgy Penguins',
    base_score: 229,
    traits: [
      { id: 'Traits Count 4', multiplier: 1.2 },
      { id: 'Face Scouter', multiplier: 1.4 },
      { id: 'Body Pudgy Man', multiplier: 1.6 },
      { id: 'Body Kimono Ice', multiplier: 1.8 },
      { id: 'Skin Ice, Face Star Struck', multiplier: 1.8 },
      { id: 'Skin Navy Blue', multiplier: 2 },
      { id: 'Head Ice Crown', multiplier: 2 },
    ],
  },
  '0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7': {
    name: 'Meebits',
    base_score: 214,
    traits: [
      { id: 'Hat Snoutz Cap', multiplier: 1.2 },
      { id: 'Beard Color Silver', multiplier: 1.4 },
      { id: 'Overshirt Color Luxe', multiplier: 1.6 },
      { id: 'Overshirt Color Arglye', multiplier: 1.6 },
      { id: 'Type Visitor', multiplier: 1.8 },
      { id: 'Type Dissected', multiplier: 2 },
      { id: 'Shoes No Shoes', multiplier: 2 },
    ],
  },
  '0x60bb1e2AA1c9ACAfB4d34F71585D7e959f387769': {
    name: 'Art Gobblers',
    base_score: 200,
    traits: [
      { id: 'Traits count 11', multiplier: 1.2 },
      { id: 'Right leg Shin Guard', multiplier: 1.4 },
      { id: 'Head Two Face', multiplier: 1.4 },
      { id: 'Bottom Fig Leaf', multiplier: 1.6 },
      { id: 'Hat Head Friend', multiplier: 1.8 },
      { id: 'Right leg Dick', multiplier: 1.8 },
      { id: 'Top Tee', multiplier: 1.8 },
      { id: 'Property Crystal', multiplier: 2 },
      { id: 'Top Tank', multiplier: 2 },
    ],
  },
  '0xCcc441ac31f02cD96C153DB6fd5Fe0a2F4e6A68d': {
    name: 'FLUF World',
    base_score: 186,
    traits: [
      { id: 'Background Lambo', multiplier: 1.2 },
      { id: 'Music Hop With_me', multiplier: 1.4 },
      { id: 'Nose Bloody', multiplier: 1.6 },
      { id: 'Ears Santa Hat', multiplier: 1.8 },
      { id: 'Eyewear Steampunk Goggles', multiplier: 1.8 },
      { id: 'Top Holographic Jacket', multiplier: 1.8 },
      { id: 'Dance Turn', multiplier: 2 },
    ],
  },
  '0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258': {
    name: 'Otherdeed for Otherside',
    base_score: 171,
    traits: [
      { id: 'Koda - Mega Yes', multiplier: 1.2 },
      { id: 'Koda - Weapon Undulate Staff', multiplier: 1.4 },
      { id: 'Koda - Weapon Ear Chopper', multiplier: 1.6 },
      { id: 'Koda - Weapon Grazing Wand', multiplier: 1.6 },
      { id: 'Koda- Weapon Betrayer', multiplier: 1.8 },
      { id: 'Koda- Weapon Gunk Blade', multiplier: 1.8 },
      { id: 'Koda- Weapon Bubble Blower', multiplier: 2 },
      { id: 'Koda- Weapon Mush Clobberer', multiplier: 2 },
    ],
  },
  '0x394E3d3044fC89fCDd966D3cb35Ac0B32B0Cda91': {
    name: 'Renga',
    base_score: 157,
    traits: [
      { id: 'Extra Shadow Dancer', multiplier: 1.2 },
      { id: 'Eyes Bug Eyes Purple', multiplier: 1.4 },
      { id: 'Hands Robot Katana Grey', multiplier: 1.6 },
      { id: 'Head Hungry Tiger OG', multiplier: 1.8 },
      { id: 'Head Lazer Ed', multiplier: 1.8 },
      { id: 'Eyewear Love Patch Purple', multiplier: 2 },
      { id: 'Extra Wizard Halo', multiplier: 2 },
    ],
  },
  '0x39ee2c7b3cb80254225884ca001F57118C8f21B6': {
    name: 'The Potatoz',
    base_score: 143,
    traits: [
      { id: 'Element Golden Poop', multiplier: 1.2 },
      { id: 'Element Golden Potato', multiplier: 1.4 },
      { id: 'Element Golden Ticket', multiplier: 1.4 },
      { id: 'Type Galaxy', multiplier: 1.6 },
      { id: 'Type Yin Yang', multiplier: 1.8 },
      { id: 'Type Prototype', multiplier: 1.8 },
      { id: 'Mutation Unit-03', multiplier: 2 },
    ],
  },
  '0x4E1f41613c9084FdB9E34E11fAE9412427480e56': {
    name: 'Terraforms',
    base_score: 129,
    traits: [
      { id: 'Mouth Bubble Gum', multiplier: 1.2 },
      { id: 'Lips Color Space', multiplier: 1.4 },
      { id: 'Hairstyle Black and White', multiplier: 1.6 },
      { id: 'Clothes Naiade', multiplier: 1.8 },
      { id: 'Skin Tone Night Goddess', multiplier: 1.8 },
      { id: 'Necklace Art Lover', multiplier: 2 },
      { id: 'Earrings Artist Palettes', multiplier: 2 },
    ],
  },
  '0x209e639a0EC166Ac7a1A4bA41968fa967dB30221': {
    name: 'Undead',
    base_score: 114,
    traits: [
      { id: 'EYEWEAR CLEAR SHADES', multiplier: 1.2 },
      { id: 'EYEWEAR TITANIUM EYE MOD', multiplier: 1.4 },
      { id: 'TYPES HOLOGRAM', multiplier: 1.6 },
      { id: 'FACE BANDAGE', multiplier: 1.6 },
      { id: 'EYEWEAR EYESHADOW', multiplier: 1.8 },
      { id: 'EYEWEAR FACECRACK', multiplier: 1.8 },
      { id: 'EYEWEAR JUNGLE PAINT', multiplier: 1.8 },
      { id: 'BACKGROUND <none>', multiplier: 2 },
      { id: 'TYPES <none>', multiplier: 2 },
      { id: 'TOPS <none>', multiplier: 2 },
    ],
  },
  '0x54597D13bFF4D093E680B7293C7E9781E167F785': {
    name: 'Tide Predictor by LoVid',
    base_score: 100,
    traits: [
      { id: 'all_period_sync_prob: 0.01', multiplier: 1.2 },
      { id: 'all_period_sync_prob: 0.05', multiplier: 1.4 },
      { id: 'b_period_reset: 500', multiplier: 1.6 },
      { id: 'g_period_reset: 1000', multiplier: 1.8 },
      { id: 'aligned:true', multiplier: 2 },
    ],
  },
  '0xe4d20bc4a845aa35b008f5f9f85e50b581df7263': {
    name: 'Hugo x Imaginary Ones',
    base_score: 86,
    traits: [],
  },
  '0x94ea4c3b679d96ed82aecbb9ca8f33567e4e1c58': {
    name: 'The Cheetahs',
    base_score: 71,
    traits: [
      { id: 'Eyewear Thin Pixel Shades', multiplier: 1.2 },
      { id: 'Eyewear Red Visor SunGlasses', multiplier: 1.4 },
      { id: 'Mouthpiece Dubble Bubble', multiplier: 1.4 },
      { id: 'Mouthpiece Mint Bubble Gum', multiplier: 1.6 },
      { id: 'Fur Black', multiplier: 1.8 },
      { id: 'Headwear Red Crown', multiplier: 1.8 },
      { id: 'Earring Diamond Hanging Earring', multiplier: 2 },
    ],
  },
  '0x1792a96e5668ad7c167ab804a100ce42395ce54d': {
    name: 'Moonbirds Oddities',
    base_score: 57,
    traits: [
      { id: "Outerwear Hero's Tunic", multiplier: 1.2 },
      { id: 'Eyewear Visor (Heat)', multiplier: 1.4 },
      { id: 'Eyes Orb', multiplier: 1.4 },
      { id: 'Trait Count 4', multiplier: 1.6 },
      { id: 'Eyewear Spectacles Of Judgement', multiplier: 1.6 },
      { id: 'Head Bat', multiplier: 1.8 },
      { id: 'Species Lil Elon', multiplier: 1.8 },
      { id: 'Underfood Sapphire', multiplier: 2 },
    ],
  },
  '0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42': {
    name: 'Forgotten Rune Wizards',
    base_score: 43,
    traits: [
      { id: 'Rune Rune Of Up Only', multiplier: 1.2 },
      { id: 'Rune Rune Of Omega', multiplier: 1.2 },
      { id: 'Familiar Jeweled Hummingbird', multiplier: 1.4 },
      { id: 'Traits Count 3', multiplier: 1.6 },
      { id: 'Body Red Yoga', multiplier: 1.6 },
      { id: 'Head Evil One', multiplier: 1.8 },
      { id: 'Familiar Ancient Sphinx', multiplier: 2.0 },
      { id: 'Prop Golden Bull Staff', multiplier: 2.0 },
    ],
  },
  '0x9690b63eb85467be5267a3603f770589ab12dc95': {
    name: 'Forgotten Rune Warriors',
    base_score: 29,
    traits: [
      { id: 'Trait Count 3', multiplier: 1.2 },
      { id: 'Rune of Infinity', multiplier: 1.2 },
      { id: 'Head Vampyre', multiplier: 1.4 },
      { id: 'Body Purple Caped Traveller', multiplier: 1.4 },
      { id: 'Body All Seeing Robe', multiplier: 1.6 },
      { id: 'Body Silver Skeleton', multiplier: 1.6 },
      { id: 'Head Gfunk Head', multiplier: 2.0 },
    ],
  },
  '0x5a0121a0a21232ec0d024dab9017314509026480': {
    name: 'Finiliars',
    base_score: 14,
    traits: [
      { id: 'Frequency Monthly', multiplier: 1.2 },
      { id: 'Mythical Gods', multiplier: 1.4 },
      { id: 'Mythical Angels', multiplier: 1.6 },
      { id: 'Clan Forget Me Nots', multiplier: 1.6 },
      { id: 'Special The Twins', multiplier: 1.8 },
      { id: 'Special Murdered', multiplier: 1.8 },
      { id: 'Clan Royal Earth', multiplier: 1.8 },
      { id: 'Clan Royal Water', multiplier: 2.0 },
      { id: 'Clan Royal Fire', multiplier: 2.0 },
    ],
  },
}

export default nftCollectionRanking
