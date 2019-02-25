import React, { Component } from 'react';
import * as d3 from "d3";
import Coupe from 'images/coupe.png';
import Sedan from 'images/sedan.png';
import Crossover from 'images/crossover.png';
import PickupTruck from 'images/pickup_truck.png';
import SUV from 'images/SUV.png';
import Van from 'images/van.png';

const platDetailLines = {
    "Coupe": [
        { "points": "350, 275 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90", "opacity": ".5" , "decoration" : "none", "color": "black"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150", "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "425, 300 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "815, 300 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "650, 175 650, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "750, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Sedan": [
        { "points": "375, 285 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Shine Exterior Hard Plastics 
        { "points": "450, 235 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "435, 300 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "805, 300 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "640, 185 640, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "740, 185 640, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Crossover": [
        { "points": "350, 300 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Shine Exterior Hard Plastics 
        { "points": "450, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "210", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "430, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "830, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "600, 175 600, 100", "text": "​Clean Exterior Windows", "x": "440", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "700, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "850, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "830, 350 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 200 1050, 175 1050, 100", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Pickup Truck": [
        { "points": "350, 295 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "425, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "820, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "600, 185 600, 100", "text": "​Clean Exterior Windows", "x": "470", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "650, 185 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "SUV": [
        { "points": "350, 275 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "430, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "810, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "600, 175 600, 100", "text": "​Clean Exterior Windows", "x": "440", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "700, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "850, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 355 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 100", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Van or Mini Van": [
        { "points": "370, 275 160, 175 160, 50", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "40" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 130", "text": "​Clay Bar Paint Treatment", "x": "200", "y": "120" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "440, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "805, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "650, 175 650, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "550, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "780, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "865, 250 1050, 175 1050, 50", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "40" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ]
};

const fullDetailLines = {
    "Coupe": [
        { "points": "350, 275 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90", "opacity": ".1" , "decoration" : "line-through", "color": "gray" }, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150", "opacity": ".5" , "decoration" : "none", "color": "black" }, // ​Clay Bar Paint Treatment 
        { "points": "425, 300 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "815, 300 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "650, 175 650, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "750, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Sedan": [
        { "points": "375, 285 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "450, 235 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "435, 300 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "805, 300 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "640, 185 640, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "740, 185 640, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Crossover": [
        { "points": "350, 300 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "450, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "210", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "430, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "830, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "600, 175 600, 100", "text": "​Clean Exterior Windows", "x": "440", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "700, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "850, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "830, 350 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 200 1050, 175 1050, 100", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Pickup Truck": [
        { "points": "350, 295 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "425, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "820, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "600, 185 600, 100", "text": "​Clean Exterior Windows", "x": "470", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "650, 185 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "SUV": [
        { "points": "350, 275 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "430, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "810, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "600, 175 600, 100", "text": "​Clean Exterior Windows", "x": "440", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "700, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "850, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 355 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 100", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Van or Mini Van": [
        { "points": "370, 275 160, 175 160, 50", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "40" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 130", "text": "​Clay Bar Paint Treatment", "x": "200", "y": "120" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "440, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "805, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "650, 175 650, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "550, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "780, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "865, 250 1050, 175 1050, 50", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "40" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ]
};

const miniDetailLines = {
    "Coupe": [
        { "points": "350, 275 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90", "opacity": ".1" , "decoration" : "line-through", "color": "gray" }, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150", "opacity": ".5" , "decoration" : "none", "color": "black" }, // ​Clay Bar Paint Treatment 
        { "points": "425, 300 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "815, 300 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "650, 175 650, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "750, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Sedan": [
        { "points": "375, 285 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "450, 235 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "435, 300 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "805, 300 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "640, 185 640, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "740, 185 640, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Crossover": [
        { "points": "350, 300 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "450, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "210", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "430, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "830, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "600, 175 600, 100", "text": "​Clean Exterior Windows", "x": "440", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "700, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "850, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "830, 350 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 200 1050, 175 1050, 100", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Pickup Truck": [
        { "points": "350, 295 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "425, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "820, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "600, 185 600, 100", "text": "​Clean Exterior Windows", "x": "470", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "650, 185 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "SUV": [
        { "points": "350, 275 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "430, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "810, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "600, 175 600, 100", "text": "​Clean Exterior Windows", "x": "440", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "700, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "850, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 355 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 100", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Van or Mini Van": [
        { "points": "370, 275 160, 175 160, 50", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "40" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 130", "text": "​Clay Bar Paint Treatment", "x": "200", "y": "120" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "440, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "805, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "650, 175 650, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "550, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "780, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "865, 250 1050, 175 1050, 50", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "40" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ]
};

const bigDetailLines = {
    "Coupe": [
        { "points": "350, 275 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90", "opacity": ".1" , "decoration" : "line-through", "color": "gray" }, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150", "opacity": ".1" , "decoration" : "line-through", "color": "gray" }, // ​Clay Bar Paint Treatment 
        { "points": "425, 300 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "815, 300 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "650, 175 650, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "750, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Sedan": [
        { "points": "375, 285 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "450, 235 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Clay Bar Paint Treatment 
        { "points": "435, 300 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "805, 300 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "640, 185 640, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "740, 185 640, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Crossover": [
        { "points": "350, 300 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "450, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "210", "y": "150" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Clay Bar Paint Treatment 
        { "points": "430, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "830, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "600, 175 600, 100", "text": "​Clean Exterior Windows", "x": "440", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "700, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "850, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "830, 350 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 200 1050, 175 1050, 100", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Pickup Truck": [
        { "points": "350, 295 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Clay Bar Paint Treatment 
        { "points": "425, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "820, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "600, 185 600, 100", "text": "​Clean Exterior Windows", "x": "470", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "650, 185 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "SUV": [
        { "points": "350, 275 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Clay Bar Paint Treatment 
        { "points": "430, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "810, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "600, 175 600, 100", "text": "​Clean Exterior Windows", "x": "440", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "700, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "850, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 355 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 100", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Van or Mini Van": [
        { "points": "370, 275 160, 175 160, 50", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "40" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 130", "text": "​Clay Bar Paint Treatment", "x": "200", "y": "120" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Clay Bar Paint Treatment 
        { "points": "440, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "805, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "650, 175 650, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "550, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "780, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "865, 250 1050, 175 1050, 50", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "40" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ]
};

const platInterDetailLines = {
    "Coupe": [
        { "points": "350, 275 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90", "opacity": ".1" , "decoration" : "line-through", "color": "gray" }, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150", "opacity": ".1" , "decoration" : "line-through", "color": "gray" }, // ​Clay Bar Paint Treatment 
        { "points": "425, 300 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "815, 300 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"},
        { "points": "650, 175 650, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Clean Exterior Windows
        { "points": "750, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Sedan": [
        { "points": "375, 285 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "450, 235 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Clay Bar Paint Treatment 
        { "points": "435, 300 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "805, 300 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"},
        { "points": "640, 185 640, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Clean Exterior Windows
        { "points": "740, 185 640, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Crossover": [
        { "points": "350, 300 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "450, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "210", "y": "150" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Clay Bar Paint Treatment 
        { "points": "430, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "830, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"},
        { "points": "600, 175 600, 100", "text": "​Clean Exterior Windows", "x": "440", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Clean Exterior Windows
        { "points": "700, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Clean Exterior Windows
        { "points": "850, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Clean Exterior Windows
        { "points": "830, 350 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Tire Shining
        { "points": "870, 200 1050, 175 1050, 100", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Pickup Truck": [
        { "points": "350, 295 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Clay Bar Paint Treatment 
        { "points": "425, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "820, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"},
        { "points": "600, 185 600, 100", "text": "​Clean Exterior Windows", "x": "470", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Clean Exterior Windows
        { "points": "650, 185 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "SUV": [
        { "points": "350, 275 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Clay Bar Paint Treatment 
        { "points": "430, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "810, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"},
        { "points": "600, 175 600, 100", "text": "​Clean Exterior Windows", "x": "440", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Clean Exterior Windows
        { "points": "700, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Clean Exterior Windows
        { "points": "850, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Clean Exterior Windows
        { "points": "815, 355 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 100", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Van or Mini Van": [
        { "points": "370, 275 160, 175 160, 50", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "40" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 130", "text": "​Clay Bar Paint Treatment", "x": "200", "y": "120" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Clay Bar Paint Treatment 
        { "points": "440, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "805, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"},
        { "points": "650, 175 650, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Clean Exterior Windows
        { "points": "550, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Clean Exterior Windows
        { "points": "780, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // Tire Shining
        { "points": "865, 250 1050, 175 1050, 50", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "40" , "opacity": ".1" , "decoration" : "line-through", "color": "gray"}, // ​Apply Protective Coat of Wax​ to Paint
    ]
};

const platExterDetailLines = {
    "Coupe": [
        { "points": "350, 275 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90", "opacity": ".5" , "decoration" : "none", "color": "black" }, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150", "opacity": ".5" , "decoration" : "none", "color": "black" }, // ​Clay Bar Paint Treatment 
        { "points": "425, 300 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "815, 300 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "650, 175 650, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "750, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Sedan": [
        { "points": "375, 285 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Shine Exterior Hard Plastics 
        { "points": "450, 235 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "435, 300 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "805, 300 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "640, 185 640, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "740, 185 640, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Crossover": [
        { "points": "350, 300 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Shine Exterior Hard Plastics 
        { "points": "450, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "210", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "430, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "830, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "600, 175 600, 100", "text": "​Clean Exterior Windows", "x": "440", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "700, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "850, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "830, 350 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 200 1050, 175 1050, 100", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Pickup Truck": [
        { "points": "350, 295 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "425, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "820, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "600, 185 600, 100", "text": "​Clean Exterior Windows", "x": "470", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "650, 185 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 160", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "SUV": [
        { "points": "350, 275 160, 175 160, 100", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 160", "text": "​Clay Bar Paint Treatment", "x": "220", "y": "150" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "430, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "810, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "600, 175 600, 100", "text": "​Clean Exterior Windows", "x": "440", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "700, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "850, 175 600, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 355 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "870, 250 1050, 175 1050, 100", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ],
    "Van or Mini Van": [
        { "points": "370, 275 160, 175 160, 50", "text": "Shine Exterior Hard Plastics", "x": "20", "y": "40" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Shine Exterior Hard Plastics 
        { "points": "400, 225 350, 175 350, 130", "text": "​Clay Bar Paint Treatment", "x": "200", "y": "120" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Clay Bar Paint Treatment 
        { "points": "440, 310 350, 375 350, 400", "text": "​Deep Cleaning of Wheels & Wheel Wells", "x": "150", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Deep Cleaning of Wheels & Wheel Wells
        { "points": "805, 310 350, 375", "text": "​", "x": "250", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"},
        { "points": "650, 175 650, 100", "text": "​Clean Exterior Windows", "x": "520", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "550, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "780, 175 650, 100", "text": "​", "x": "560", "y": "90" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Clean Exterior Windows
        { "points": "815, 340 950, 375 950, 400", "text": "​Tire Shining", "x": "880", "y": "420" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // Tire Shining
        { "points": "865, 250 1050, 175 1050, 50", "text": "​Apply Protective Coat of Wax​ to Paint", "x": "780", "y": "40" , "opacity": ".5" , "decoration" : "none", "color": "black"}, // ​Apply Protective Coat of Wax​ to Paint
    ]
};

class ExteriorCarLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: platDetailLines.Coupe,
        }
    }

    componentDidMount() {
        this.getVehiclePackageData(this.props.packageFor, this.props.vehicleType);
    }

    componentDidUpdate(prevProps) {
        if (this.props.packageFor !== prevProps.packageFor ||
            this.props.vehicleType !== prevProps.vehicleType) {
            d3.select("#exterior-car-view").remove();
            this.getVehiclePackageData(this.props.packageFor, this.props.vehicleType);
        }
    }

    getVehiclePackageData(packageFor, vehicleType) {
        if (packageFor === "Platinum Detail") {
            this.getDataForVehicleType(platDetailLines, vehicleType);
        } else if (packageFor === "Full Detail") {
            this.getDataForVehicleType(fullDetailLines, vehicleType);
        } else if (packageFor === "Mini Detail") {
            this.getDataForVehicleType(miniDetailLines, vehicleType);
        } else if (packageFor === "Big's Special") {
            this.getDataForVehicleType(bigDetailLines, vehicleType);
        } else if (packageFor === "Platinum Interior Detail") {
            this.getDataForVehicleType(platInterDetailLines, vehicleType);
        } else if (packageFor === "Platinum Exterior Detail") {
            this.getDataForVehicleType(platExterDetailLines, vehicleType);
        } else {
            this.getDataForVehicleType(platDetailLines, vehicleType);
        }
    }

    getDataForVehicleType(data, vehicleType) {
        Object.entries(data).forEach(entry => {
            if (entry[0] === vehicleType) {
                this.drawExteriorCarLabel(entry[1]);
            }
        })
    }

    drawExteriorCarLabel(data) {
        const { packageFor, vehicleType } = this.props;
        const svg = d3.select("#BYD-exterior-view")
            .append("svg")
            .attr("id", "exterior-car-view")
            .attr("viewBox", "0, 0, 1280, 500")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .style("background-size", "contain")
            .style("background-repeat", "no-repeat")
            .style("background-position", "50% 50%");
        setVehicleImage(svg, vehicleType);
        const packageLabelContainer = svg.append("g");
        const labels = packageLabelContainer.append("g").attr("class", "labels");
        const lines = packageLabelContainer.append("g").attr("class", "lines");

        const detailPackagePolylines = lines.selectAll("polyline")
            .data(data)
            .enter()
            .append("polyline");

        detailPackagePolylines
            .attr("points", function (d) { return d.points }) // start
            .attr("stroke", function (d) { return d.color })
            .attr("fill", "none")
            .attr("opacity", function (d) { return d.opacity })
            .attr("stroke-width", "2");

        labels.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .attr("x", function (d) { return d.x })
            .attr("y", function (d) { return d.y })
            .attr("opacity", function (d) { return (parseFloat(d.opacity) + .5) })
            .text(function (d) { return d.text })
            .style("text-decoration", function (d) { return d.decoration })
            .attr("fill", function (d) { return d.color })
            .style("font-size", "24px")
            .style("font-weight", "600");


        this.setState({ data: data });
    }

    render() {
        return <div id={this.props.id} >
            <style jsx>
                {`
          `}
            </style>
        </div>
    }
}

function setVehicleImage(svg, vehicleType) {
    if (vehicleType === "Coupe") {
        svg.style("background-image", `url(${Coupe})`)
    } else if (vehicleType === "Sedan") {
        svg.style("background-image", `url(${Sedan})`)
    } else if (vehicleType === "Crossover") {
        svg.style("background-image", `url(${Crossover})`)
    } else if (vehicleType === "Pickup Truck") {
        svg.style("background-image", `url(${PickupTruck})`)
    } else if (vehicleType === "SUV") {
        svg.style("background-image", `url(${SUV})`)
    } else if (vehicleType === "Van or Mini Van") {
        svg.style("background-image", `url(${Van})`)
    }
}

export default ExteriorCarLabel;