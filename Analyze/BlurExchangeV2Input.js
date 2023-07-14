let params = [
  [
    [
      "0xBA1BA61Ff159422bCb07F78017186624e94E6936",
      "0x8Ce578bad214D59aEFAFB49bd20408E81271796F",
      "0x06e4cad50d229454f4b02ab922adc62e9e015c1be42d1069d118073305a767d9",
      "8",
      "1689648136",
      0,
      ["0x0000000000000000000000000000000000000000", 0],
      "336667801012517845541861528058746552855",
    ],
    [
      "0",
      [
        "0x02d49884a23ece2d315710356a656d9718055aaf0705d983b90b52334da7ea64",
        "0x0b70b7fc9e28db7a44743d0fd195806ff239cc0df305a66bff3525747942d234",
        "0xd985684f1f1e2c767918e1d54771f47ce500dc718937119b27724044e1147adb",
      ],
      ["1", "1752", "1", "9999000000000000"],
      ["1752", "1"],
    ],
    ["0x0000000000000000000000000000000000000000", 0],
    "0x8e71ad4d30ea456279c18f47df2bc0daf5b7ba7b9dc6798d90a3af4525c25a290bfbbf7c09daa35bbf7111ed4e1e15dd5c489f001ede54c34b762d6d0c5f9b5e1c",
    "0xC675897Bb91797EaeA7584F025A5533DBB13A000",
  ],
  "0x6df918d23fc2d095f00cc30325294b0895ef83ddbd0750dc078c17cfcc2cfc41404aac4dd9f8677bbcb15cfb3ef53018d2f6094283c27a57436e060e61eca6e11c010db1ab6af68e5d010513ff70a3aaed9afeb8661116e6ce",
];

/* struct Order { // Size: 0x100
    address trader; // 0x00
    address collection; // 0x20
    bytes32 listingsRoot; // 0x40
    uint256 numberOfListings; // 0x60
    uint256 expirationTime; // 0x80
    AssetType assetType; // 0xa0
    FeeRate makerFee; // 0xc0
    uint256 salt; // 0xe0
} */

let order = {
  trader: "0xBA1BA61Ff159422bCb07F78017186624e94E6936",
  collection: "0x8Ce578bad214D59aEFAFB49bd20408E81271796F",
  listingsRoot:
    "0x06e4cad50d229454f4b02ab922adc62e9e015c1be42d1069d118073305a767d9",
  numberOfListings: "8",
  expirationTime: "1689648136",
  assetType: 0,
  makerFee: {
    recipient: "0x0000000000000000000000000000000000000000",
    rate: 0,
  },
  salt: "336667801012517845541861528058746552855",
};

/* struct Exchange { // Size: 0x80
    uint256 index; // 0x00
    bytes32[] proof; // 0x20
    Listing listing; // 0x40
    Taker taker; // 0x60
}
struct Listing { // Size: 0x80
    uint256 index; // 0x00
    uint256 tokenId; // 0x20
    uint256 amount; // 0x40
    uint256 price; // 0x60
}
struct Taker { // Size: 0x40
    uint256 tokenId; // 0x00
    uint256 amount; // 0x20
} */

let proof = [
  "0x02d49884a23ece2d315710356a656d9718055aaf0705d983b90b52334da7ea64",
  "0x0b70b7fc9e28db7a44743d0fd195806ff239cc0df305a66bff3525747942d234",
  "0xd985684f1f1e2c767918e1d54771f47ce500dc718937119b27724044e1147adb",
];
let listing = {
  index: "1",
  tokenId: "1752",
  amount: "1",
  price: "9999000000000000",
};
let exchange = { index: "0", proof: proof, listing: listing, taker: taker };
let takerFee = {
  recipient: "0x0000000000000000000000000000000000000000",
  rate: 0,
};
let signature =
  "0x8e71ad4d30ea456279c18f47df2bc0daf5b7ba7b9dc6798d90a3af4525c25a290bfbbf7c09daa35bbf7111ed4e1e15dd5c489f001ede54c34b762d6d0c5f9b5e1c";
let tokenRecipient = "0xC675897Bb91797EaeA7584F025A5533DBB13A000";

let takeAskSingle_inputs = {
  order: order,
  exchange: exchange,
  takerFee: takerFee,
  signature: signature,
  tokenRecipient: tokenRecipient,
};

let takeAskSingle_oracleSignature =
  "0x6df918d23fc2d095f00cc30325294b0895ef83ddbd0750dc078c17cfcc2cfc41404aac4dd9f8677bbcb15cfb3ef53018d2f6094283c27a57436e060e61eca6e11c010db1ab6af68e5d010513ff70a3aaed9afeb8661116e6ce";
// `function takeAskSingle(TakeAskSingle memory inputs, bytes calldata oracleSignature) external payable;`
