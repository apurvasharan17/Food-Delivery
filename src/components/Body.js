import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const resList=[
    {
            "info": {
              "id": "788303",
              "name": "Wow! Momo",
              "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
              "locality": "Near Shanti Nagar Bus Stop",
              "areaName": "Shantinagar",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Tibetan",
                "Healthy Food",
                "Asian",
                "Chinese",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.2,
              "parentId": "1776",
              "avgRatingString": "4.2",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-01 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/wow-momo-near-shanti-nagar-bus-stop-shantinagar-bangalore-788303",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "10575",
              "name": "Pizza Hut",
              "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
              "locality": "Richmond Town",
              "areaName": "Shanti Nagar",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "Pizzas"
              ],
              "avgRating": 4.2,
              "parentId": "721",
              "avgRatingString": "4.2",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-02 01:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/pizza-hut-richmond-town-shanti-nagar-bangalore-10575",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "352791",
              "name": "Grameen Kulfi",
              "cloudinaryImageId": "gjcslopkyvnsc1gjjguq",
              "locality": "8th Block",
              "areaName": "Koramangala",
              "costForTwo": "₹120 for two",
              "cuisines": [
                "Ice Cream",
                "Desserts"
              ],
              "avgRating": 4.8,
              "veg": true,
              "parentId": "12175",
              "avgRatingString": "4.8",
              "totalRatingsString": "500+",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 4.8,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-01 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/grameen-kulfi-8th-block-koramangala-bangalore-352791",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "534235",
              "name": "Cheesecake & Co.",
              "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
              "locality": "Koramangala",
              "areaName": "Koramangala",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Bakery"
              ],
              "avgRating": 4.6,
              "parentId": "387417",
              "avgRatingString": "4.6",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 5.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "5.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-02 00:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ],
                "textExtendedBadges": [
                  {
                    "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                    "shortDescription": "Perfect cake delivery",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                          "shortDescription": "Perfect cake delivery"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹75 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/cheesecake-and-co-koramangala-bangalore-534235",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "822315",
              "name": "Subway",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/9/e0ab56c3-3d8e-4214-8705-240795d737c0_822315.jpg",
              "locality": "Langford Road",
              "areaName": "Richmond Town",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "2",
              "avgRatingString": "4.3",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-02 01:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹149"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/subway-langford-road-richmond-town-bangalore-822315",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "440123",
              "name": "Great Indian Khichdi by EatFit",
              "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
              "locality": "Cunnigham road",
              "areaName": "Vasanth Nagar",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Home Food",
                "Indian",
                "North Indian",
                "Healthy Food",
                "Snacks",
                "Desserts",
                "Rajasthani",
                "South Indian",
                "Maharashtrian",
                "Sweets"
              ],
              "avgRating": 4.4,
              "veg": true,
              "parentId": "319582",
              "avgRatingString": "4.4",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 4.2,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-02 01:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ],
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "brand"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-cunnigham-road-vasanth-nagar-bangalore-440123",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "424558",
              "name": "La Pino'z Pizza",
              "cloudinaryImageId": "mocil3npmwpcdcfaxql1",
              "locality": "Gandhi Bazaar Main Road",
              "areaName": "Basavanagudi",
              "costForTwo": "₹220 for two",
              "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "4961",
              "avgRatingString": "4.3",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-02 00:30:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-gandhi-bazaar-main-road-basavanagudi-bangalore-424558",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "622202",
              "name": "MOJO Pizza - 2X Toppings",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/295f1bfc-237b-4bd4-832b-a23fdf08f8aa_622202.JPG",
              "locality": "Langford Road",
              "areaName": "Shantinagar",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Pizzas",
                "Italian",
                "Fast Food",
                "Desserts"
              ],
              "avgRating": 4.5,
              "parentId": "11329",
              "avgRatingString": "4.5",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-30 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-02 02:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-langford-road-shantinagar-bangalore-622202",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "750396",
              "name": "Daily Kitchen - Homely Meals",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750396.JPG",
              "locality": "Lakshmi Road",
              "areaName": "Langford Road",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Home Food",
                "Indian",
                "North Indian",
                "Thalis"
              ],
              "avgRating": 4.4,
              "parentId": "444382",
              "avgRatingString": "4.4",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "15-25 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-02 02:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-lakshmi-road-langford-road-bangalore-750396",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "342643",
              "name": "The Pizza Bakery - Wood Fired Sourdough",
              "cloudinaryImageId": "0335dd45be555d0a4187255e57d2ca88",
              "locality": "Church Street",
              "areaName": "Central Bangalore",
              "costForTwo": "₹700 for two",
              "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Continental"
              ],
              "avgRating": 4.6,
              "parentId": "522292",
              "avgRatingString": "4.6",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-01 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                    "description": "Delivery!"
                  },
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ],
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Pizza.png"
                        }
                      },
                      {
                        "attributes": {
                          "description": "Gourmet",
                          "imageId": "newg.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/the-pizza-bakery-wood-fired-sourdough-church-street-central-bangalore-bangalore-342643",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "667962",
              "name": "Paris Panini - Gourmet Sandwiches & Wraps",
              "cloudinaryImageId": "33101e2fff3a071cbd8b85e73c0d4f45",
              "locality": "Church Street",
              "areaName": "Central Bangalore",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Continental",
                "Pastas",
                "Salads",
                "Snacks",
                "Desserts",
                "Fast Food",
                "French"
              ],
              "avgRating": 4.6,
              "parentId": "21019",
              "avgRatingString": "4.6",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-01 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                    "description": "Delivery!"
                  },
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ],
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                        }
                      },
                      {
                        "attributes": {
                          "description": "Gourmet",
                          "imageId": "newg.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/paris-panini-gourmet-sandwiches-and-wraps-church-street-central-bangalore-bangalore-667962",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "43836",
              "name": "McDonald's",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fe11ced6-89a3-4080-8610-3c743a3bb3f0_43836.jpg",
              "locality": "MG Road",
              "areaName": "Ashok Nagar",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
              ],
              "avgRating": 4.3,
              "parentId": "630",
              "avgRatingString": "4.3",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-02 02:45:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Burger.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "77949",
              "name": "Burger King",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_77949.JPG",
              "locality": "Gandhi Bazar",
              "areaName": "Basavanagudi",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Burgers",
                "American"
              ],
              "avgRating": 4.2,
              "parentId": "166",
              "avgRatingString": "4.2",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-01 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Burger.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹139"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/burger-king-gandhi-bazar-basavanagudi-bangalore-77949",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "432976",
              "name": "KFC",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG",
              "locality": "Double Road",
              "areaName": "Shanti Nagar",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Fast Food",
                "Rolls & Wraps"
              ],
              "avgRating": 4.2,
              "parentId": "547",
              "avgRatingString": "4.2",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-01 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/kfc-double-road-shanti-nagar-bangalore-432976",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "788304",
              "name": "Wow! China",
              "cloudinaryImageId": "95982cfa57cb3b7e504f2015c375fd55",
              "locality": "Near Shanti Nagar Bus Stop",
              "areaName": "Shantinagar",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Tibetan",
                "Chinese",
                "Asian",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 3.6,
              "parentId": "226836",
              "avgRatingString": "3.6",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-01 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹129"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/wow-china-near-shanti-nagar-bus-stop-shantinagar-bangalore-788304",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "23846",
              "name": "Domino's Pizza",
              "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
              "locality": "Rehinus Street",
              "areaName": "Richmond Town",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
              ],
              "avgRating": 4.3,
              "parentId": "2456",
              "avgRatingString": "4.3",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-02 02:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Pizza.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/dominos-pizza-rehinus-street-richmond-town-bangalore-23846",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "697144",
              "name": "Baskin Robbins - Ice Cream Desserts",
              "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
              "locality": "GARUDA MALL",
              "areaName": "MAGARATH ROAD",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Desserts",
                "Ice Cream"
              ],
              "avgRating": 4.6,
              "veg": true,
              "parentId": "5588",
              "avgRatingString": "4.6",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-01 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-garuda-mall-magarath-road-bangalore-697144",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "570511",
              "name": "Bakingo",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/3cef8d39-18af-420a-b2ab-2b1175e02370_570511.jpg",
              "locality": "Puhlong X-road",
              "areaName": "Vasanth Nagar",
              "costForTwo": "₹299 for two",
              "cuisines": [
                "Bakery",
                "Desserts",
                "Beverages",
                "Snacks"
              ],
              "avgRating": 4.6,
              "parentId": "3818",
              "avgRatingString": "4.6",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-02 01:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/bakingo-puhlong-x-road-vasanth-nagar-bangalore-570511",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "426730",
              "name": "Theobroma",
              "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
              "locality": "Vittal Malya Road",
              "areaName": "Ashok Nagar",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Desserts",
                "Bakery",
                "Beverages"
              ],
              "avgRating": 4.7,
              "parentId": "1040",
              "avgRatingString": "4.7",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-01 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Desserts.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Desserts.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "15% OFF",
                "discountTag": "FLAT DEAL"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/theobroma-vittal-malya-road-ashok-nagar-bangalore-426730",
              "type": "WEBLINK"
            }
          },
         
];

const Body=()=>{

    const [resList,setResList]=useState([]);

      useEffect(()=>{
        fetchData();
      },[]);

      const fetchData=async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json.data.cards);
        setResList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      }
      if(resList.length==0){
       return  <h1>Loading...</h1>
      }

    return(
            <div className="body">
                    <div className="filter">
                        <button className="filter-btn" onClick={()=>{
                            const filteredList=resList.filter(
                                (res)=>res.info.avgRating>4.5
                            )
                            setResList(filteredList);
                        }}>
                            Top-rated restaurant
                        </button>
                    </div>
                    <div className="res-container">
                    {
                            resList.map((restaurant)=>(
                                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                            ))
                    }
                    </div>
            </div>
    )
}
export default Body;