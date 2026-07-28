import cameraIcon from "../assets/icons/cameras.svg"
import shieldIcon from "../assets/icons/plan.svg";
import sensorIcon from "../assets/icons/sensors.svg";
import protectionIcon from "../assets/icons/protection.svg";

import WyzeBatteryCamPro from "../assets/images/WyzeBatteryCamPro.png";
import WyzeBatteryCamProWhite from "../assets/images/WyzeBatteryCamProWhite.png";
import WyzeBatteryCamProBlack from "../assets/images/WyzeBatteryCamProBlack.png";
import WyzeCamFloodlightV2 from "../assets/images/WyzeCamFloodlightV2.png";
import WyzeCamFloodlightV2White from "../assets/images/WyzeCamFloodlightV2White.png";
import WyzeCamFloodlightV2Black from "../assets/images/WyzeCamFloodlightV2Black.png";
import WyzeDuoCamDoorbell from "../assets/images/WyzeDuoCamDoorbell.png";
import WyzeCamV4 from "../assets/images/WyzeCamV4.png";
import WyzeCamV4White from "../assets/images/WyzeCamV4White.png";
import WyzeCamV4Grey from "../assets/images/WyzeCamV4Grey.png";
import WyzeCamV4Black from "../assets/images/WyzeCamV4Black.png";
import WyzeCamPanV3 from "../assets/images/WyzeCamPanV3.png";
import WyzeCamPanV3White from "../assets/images/WyzeCamPanV3White.png";
import WyzeCamPanV3Black from "../assets/images/WyzeCamPanV3Black.png";

import CamUnlimited from "../assets/images/CamUnlimited.png";
import WyzeSenseMotionSensor from "../assets/images/WyzeSenseMotionSensor.png";
import WyzeSenseHub from "../assets/images/WyzeSenseHub.png";
import WyzeMicroSDCard from "../assets/images/WyzeMicroSDCard.png";
import FastShipping from "../assets/images/FastShipping.png";

export const steps = [
  {
    id: 1,
    step: "STEP 1 OF 4",
    title: "Choose your cameras",
    icon: cameraIcon,

    products: [
      {
        id: 1,
        title: "Wyze Cam v4",
        description: "The clearest Wyze Cam ever made.",
        image: WyzeCamV4,

        comparePrice: 35.98,
        price: 27.98,

        badge: "save 22%",
        
        variants: [
          {
            id: 0,
            color: "White",
            
            image:WyzeCamV4White,
          },
          {
            id: 1,
            color: "Grey",
            
            image:WyzeCamV4Grey,
          },
          {
            id: 2,
            color: "Black",
            
            image:WyzeCamV4Black,
          },
        ],
      },
      {
        id: 2,
        title: "Wyze Cam Pan v3",
        description: "360° pan and 180° tilt security camera.",
        image: WyzeCamPanV3 ,

        comparePrice: 39.98,
        price: 34.98,

        badge: "save 12%",
        
        variants: [
          {
            id: 0,
            color: "White",
            
            image:WyzeCamPanV3White,
          },
          {
            id: 1,
            color: "Black",
            
            image:WyzeCamPanV3Black,
          },
        ],
      },
      {
        id: 3,
        title: "Wyze Cam Flood light V2",
        description: "2K floodlight camera with a 160° wide-angle view for your garage.",
        image: WyzeCamFloodlightV2,

        comparePrice: 89.98,
        price: 69.98,

        badge: "save 22%",
        
        variants: [
          {
            id: 0,
            color: "White",
            
            image:WyzeCamFloodlightV2White,
          },
          {
            id: 1,
            color: "Black",
            
            image:WyzeCamFloodlightV2Black,
          },
        ],
      },
      {
        id: 4,
        title: "Wyze Duo Cam Doorbell",
        description: "Two cameras. Two views. Double the porch protection.",
        image: WyzeDuoCamDoorbell,

        comparePrice: null,
        price: 69.98,

        badge: null,
        
        variants: [],
      },
      {
        id: 5,
        title: "Wyze Battery Cam Pro",
        description: "Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed. ",
        image: WyzeBatteryCamPro,

        comparePrice: null,
        price: 89.98,

        badge: null,
        
        variants: [
          {
            id: 0,
            color: "White",
            
            image:WyzeBatteryCamProWhite,
          },
          {
            id: 1,
            color: "Black",
            
            image:WyzeBatteryCamProBlack,
          },
        ],
      },
    ],
  },

{
  id: 2,
  step: "STEP 2 OF 4",
  title: "Choose your plan",
  icon: shieldIcon,

  products: [
    {
      id: 6,
      title: "Cam Unlimited",
      description: "Unlimited cloud recording for all your cameras.",
      image: CamUnlimited,

      maxQuantity: 1,

      comparePrice: 12.99,
      price: 9.99,

      badge: "Save 23%",

      variants: [],
    },
  ],
},

{
  id: 3,
  step: "STEP 3 OF 4",
  title: "Choose your sensors",
  icon: sensorIcon,

  products: [
    {
      id: 7,
      title: "Wyze Sense Motion Sensor",
      description: "Detects motion inside your home.",
      image: WyzeSenseMotionSensor,

      comparePrice: null,
      price: 59.98,

      badge: null,

      variants: [],

      requiredProducts: [
        {
          id: "sense-hub",
          title: "Wyze Sense Hub",
          description: "Required for Wyze Sense devices.",
          image: WyzeSenseHub,

          comparePrice: 29.92,
          price: 0,

          quantity: 1,

          required: true,
        },
      ],
    },
  ],
},

{
  id: 4,
  step: "STEP 4 OF 4",
  title: "Add extra protection",
  icon: protectionIcon,

  products: [
    {
      id: 9,
      title: "Wyze MicroSD Card (256GB)",
      description: "Local storage for continuous recording.",
      image: WyzeMicroSDCard,

      comparePrice: null,
      price: 41.96,

      badge: null,

      variants: [],
    },
  ],
},
];