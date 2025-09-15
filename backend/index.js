// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const { HoldingsModel } = require("./model/HoldingsModel");

// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");

// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// // app.get("/addHoldings", async (req, res) => {
// //   let tempHoldings = [
// //     {
// //       name: "BHARTIARTL",
// //       qty: 2,
// //       avg: 538.05,
// //       price: 541.15,
// //       net: "+0.58%",
// //       day: "+2.99%",
// //     },
// //     {
// //       name: "HDFCBANK",
// //       qty: 2,
// //       avg: 1383.4,
// //       price: 1522.35,
// //       net: "+10.04%",
// //       day: "+0.11%",
// //     },
// //     {
// //       name: "HINDUNILVR",
// //       qty: 1,
// //       avg: 2335.85,
// //       price: 2417.4,
// //       net: "+3.49%",
// //       day: "+0.21%",
// //     },
// //     {
// //       name: "INFY",
// //       qty: 1,
// //       avg: 1350.5,
// //       price: 1555.45,
// //       net: "+15.18%",
// //       day: "-1.60%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "ITC",
// //       qty: 5,
// //       avg: 202.0,
// //       price: 207.9,
// //       net: "+2.92%",
// //       day: "+0.80%",
// //     },
// //     {
// //       name: "KPITTECH",
// //       qty: 5,
// //       avg: 250.3,
// //       price: 266.45,
// //       net: "+6.45%",
// //       day: "+3.54%",
// //     },
// //     {
// //       name: "M&M",
// //       qty: 2,
// //       avg: 809.9,
// //       price: 779.8,
// //       net: "-3.72%",
// //       day: "-0.01%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "RELIANCE",
// //       qty: 1,
// //       avg: 2193.7,
// //       price: 2112.4,
// //       net: "-3.71%",
// //       day: "+1.44%",
// //     },
// //     {
// //       name: "SBIN",
// //       qty: 4,
// //       avg: 324.35,
// //       price: 430.2,
// //       net: "+32.63%",
// //       day: "-0.34%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "SGBMAY29",
// //       qty: 2,
// //       avg: 4727.0,
// //       price: 4719.0,
// //       net: "-0.17%",
// //       day: "+0.15%",
// //     },
// //     {
// //       name: "TATAPOWER",
// //       qty: 5,
// //       avg: 104.2,
// //       price: 124.15,
// //       net: "+19.15%",
// //       day: "-0.24%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "TCS",
// //       qty: 1,
// //       avg: 3041.7,
// //       price: 3194.8,
// //       net: "+5.03%",
// //       day: "-0.25%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "WIPRO",
// //       qty: 4,
// //       avg: 489.3,
// //       price: 577.75,
// //       net: "+18.08%",
// //       day: "+0.32%",
// //     },
// //   ];

// //   tempHoldings.forEach((item) => {
// //     let newHolding = new HoldingsModel({
// //       name: item.name,
// //       qty: item.qty,
// //       avg: item.avg,
// //       price: item.price,
// //       net: item.day,
// //       day: item.day,
// //     });

// //     newHolding.save();
// //   });
// //   res.send("Done!");
// // });

// // app.get("/addPositions", async (req, res) => {
// //   let tempPositions = [
// //     {
// //       product: "CNC",
// //       name: "EVEREADY",
// //       qty: 2,
// //       avg: 316.27,
// //       price: 312.35,
// //       net: "+0.58%",
// //       day: "-1.24%",
// //       isLoss: true,
// //     },
// //     {
// //       product: "CNC",
// //       name: "JUBLFOOD",
// //       qty: 1,
// //       avg: 3124.75,
// //       price: 3082.65,
// //       net: "+10.04%",
// //       day: "-1.35%",
// //       isLoss: true,
// //     },
// //   ];

// //   tempPositions.forEach((item) => {
// //     let newPosition = new PositionsModel({
// //       product: item.product,
// //       name: item.name,
// //       qty: item.qty,
// //       avg: item.avg,
// //       price: item.price,
// //       net: item.net,
// //       day: item.day,
// //       isLoss: item.isLoss,
// //     });

// //     newPosition.save();
// //   });
// //   res.send("Done!");
// // });

// app.get("/allHoldings", async (req, res) => {
//   let allHoldings = await HoldingsModel.find({});
//   res.json(allHoldings);
// });

// app.get("/allPositions", async (req, res) => {
//   let allPositions = await PositionsModel.find({});
//   res.json(allPositions);
// });

// app.post("/newOrder", async (req, res) => {
//   let newOrder = new OrdersModel({
//     name: req.body.name,
//     qty: req.body.qty,
//     price: req.body.price,
//     mode: req.body.mode,
//   });

//   newOrder.save();

//   res.send("Order saved!");
// });

// app.listen(PORT, () => {
//   console.log("App started!");
//   mongoose.connect(uri);
//   console.log("DB started!");
// });
// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const { HoldingsModel } = require("./models/HoldingsModel");
// const { PositionsModel } = require("./models/PositionsModel");
// const { OrdersModel } = require("./models/OrdersModel");

// const PORT = process.env.PORT || 3002;
// const MONGO_URL = process.env.MONGO_URL;

// const app = express();

// // --- Middleware ---
// app.use(cors());
// app.use(express.json());

// // --- Routes ---

// app.post("/seed/holdings", async (req, res) => {
//     // --- DUMMY DATA UPDATED FROM YOUR SCREENSHOT ---
//     const tempHoldings = [
//         { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
//         { name: "INFY", qty: 1, avg: 1350.50, price: 1555.45, net: "+15.18%", day: "+0.90%", isLoss: false },
//         { name: "ITC", qty: 5, avg: 202.00, price: 207.90, net: "+2.92%", day: "+0.80%" },
//         { name: "KPITTECH", qty: 5, avg: 250.30, price: 266.45, net: "+6.45%", day: "+3.54%" },
//         { name: "M&M", qty: 2, avg: 809.90, price: 779.80, net: "-3.72%", day: "-0.01%", isLoss: true },
//         { name: "RELIANCE", qty: 1, avg: 2193.70, price: 2112.40, net: "-3.71%", day: "-1.44%", isLoss: true },
//         { name: "SBIN", qty: 4, avg: 324.35, price: 430.20, net: "+32.63%", day: "-0.34%", isLoss: false },
//         { name: "HDFCBANK", qty: 2, avg: 1383.40, price: 1522.35, net: "+10.04%", day: "+0.11%" },
//         { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.40, net: "+3.49%", day: "+0.21%" },
//         { name: "TCS", qty: 1, avg: 3041.70, price: 3194.80, net: "+5.03%", day: "-0.25%", isLoss: false },
//         { name: "WIPRO", qty: 4, avg: 489.30, price: 577.75, net: "+18.08%", day: "+1.04%" },
//         { name: "SGBMAY29", qty: 2, avg: 4727.00, price: 4719.00, net: "-0.17%", day: "+0.15%", isLoss: true },
//         { name: "TATAPOWER", qty: 5, avg: 104.20, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
//     ];

//     try {
//         await HoldingsModel.deleteMany({}); // Clear old data first
//         const insertedHoldings = await HoldingsModel.insertMany(tempHoldings);
//         res.status(201).json({ message: "Holdings seeded successfully", count: insertedHoldings.length });
//     } catch (error) {
//         console.error("Error seeding holdings:", error);
//         res.status(500).json({ message: "Failed to seed holdings" });
//     }
// });

// app.post("/seed/positions", async (req, res) => {
//     const tempPositions = [
//         { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
//         { product: "MIS", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
//     ];

//     try {
//         await PositionsModel.deleteMany({});
//         const insertedPositions = await PositionsModel.insertMany(tempPositions);
//         res.status(201).json({ message: "Positions seeded successfully", count: insertedPositions.length });
//     } catch (error) {
//         console.error("Error seeding positions:", error);
//         res.status(500).json({ message: "Failed to seed positions" });
//     }
// });


// app.get("/allHoldings", async (req, res) => {
//     try {
//         const allHoldings = await HoldingsModel.find({});
//         res.status(200).json(allHoldings);
//     } catch (error) {
//         console.error("Error fetching holdings:", error);
//         res.status(500).json({ message: "Failed to fetch holdings" });
//     }
// });

// app.get("/allPositions", async (req, res) => {
//     try {
//         const allPositions = await PositionsModel.find({});
//         res.status(200).json(allPositions);
//     } catch (error) {
//         console.error("Error fetching positions:", error);
//         res.status(500).json({ message: "Failed to fetch positions" });
//     }
// });

// app.post("/newOrder", async (req, res) => {
//     try {
//         const { name, qty, price, mode } = req.body;
//         const newOrder = new OrdersModel({ name, qty, price, mode });
        
//         const savedOrder = await newOrder.save();
//         res.status(201).json(savedOrder);
//     } catch (error) {
//         console.error("Error creating new order:", error);
//         res.status(500).json({ message: "Failed to create order" });
//     }
// });

// // --- Server Startup ---
// const startServer = async () => {
//     try {
//         await mongoose.connect(MONGO_URL);
//         console.log("✅ Database Connected Successfully");

//         app.listen(PORT, () => {
//             console.log(`🚀 Server is listening on port ${PORT}`);
//         });
//     } catch (error) {
//         console.error("❌ Failed to connect to the database", error);
//         process.exit(1);
//     }
// };

// startServer();
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// --- Models ---
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const { FundsModel } = require("./models/FundsModel"); // Funds model add kiya

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Routes ---

// --- Seeding Routes (Data daalne ke liye) ---

app.post("/seed/holdings", async (req, res) => {
    const tempHoldings = [
        { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
        { name: "INFY", qty: 1, avg: 1350.50, price: 1555.45, net: "+15.18%", day: "+0.90%", isLoss: false },
        { name: "ITC", qty: 5, avg: 202.00, price: 207.90, net: "+2.92%", day: "+0.80%" },
        { name: "KPITTECH", qty: 5, avg: 250.30, price: 266.45, net: "+6.45%", day: "+3.54%" },
        { name: "M&M", qty: 2, avg: 809.90, price: 779.80, net: "-3.72%", day: "-0.01%", isLoss: true },
        { name: "RELIANCE", qty: 1, avg: 2193.70, price: 2112.40, net: "-3.71%", day: "-1.44%", isLoss: true },
        { name: "SBIN", qty: 4, avg: 324.35, price: 430.20, net: "+32.63%", day: "-0.34%", isLoss: false },
        { name: "HDFCBANK", qty: 2, avg: 1383.40, price: 1522.35, net: "+10.04%", day: "+0.11%" },
        { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.40, net: "+3.49%", day: "+0.21%" },
        { name: "TCS", qty: 1, avg: 3041.70, price: 3194.80, net: "+5.03%", day: "-0.25%", isLoss: false },
        { name: "WIPRO", qty: 4, avg: 489.30, price: 577.75, net: "+18.08%", day: "+1.04%" },
        { name: "SGBMAY29", qty: 2, avg: 4727.00, price: 4719.00, net: "-0.17%", day: "+0.15%", isLoss: true },
        { name: "TATAPOWER", qty: 5, avg: 104.20, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
    ];
    try {
        await HoldingsModel.deleteMany({});
        const inserted = await HoldingsModel.insertMany(tempHoldings);
        res.status(201).json({ message: "Holdings seeded successfully", count: inserted.length });
    } catch (error) {
        res.status(500).json({ message: "Failed to seed holdings" });
    }
});

app.post("/seed/positions", async (req, res) => {
    const tempPositions = [
        { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
        { product: "MIS", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
    ];
    try {
        await PositionsModel.deleteMany({});
        const inserted = await PositionsModel.insertMany(tempPositions);
        res.status(201).json({ message: "Positions seeded successfully", count: inserted.length });
    } catch (error) {
        res.status(500).json({ message: "Failed to seed positions" });
    }
});

// Naya route: Funds ka data daalne ke liye
app.post("/seed/funds", async (req, res) => {
    try {
        await FundsModel.deleteMany({});
        const fundsData = new FundsModel({
            availableMargin: 4043.10,
            usedMargin: 3757.30,
            availableCash: 4043.10,
            openingBalance: 4043.10,
            payin: 4064.00,
        });
        await fundsData.save();
        res.status(201).json({ message: "Funds seeded successfully" });
    } catch (error) {
        console.error("Error seeding funds:", error);
        res.status(500).json({ message: "Failed to seed funds" });
    }
});


// --- Data Fetching Routes (Frontend ke liye) ---

app.get("/allHoldings", async (req, res) => {
    try {
        const allHoldings = await HoldingsModel.find({});
        res.status(200).json(allHoldings);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch holdings" });
    }
});

app.get("/allPositions", async (req, res) => {
    try {
        const allPositions = await PositionsModel.find({});
        res.status(200).json(allPositions);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch positions" });
    }
});

// Naya route: Funds ka data fetch karne ke liye
app.get("/api/funds", async (req, res) => {
    try {
        const fundsData = await FundsModel.findOne({});
        res.status(200).json(fundsData);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch funds" });
    }
});


app.post("/newOrder", async (req, res) => {
    try {
        const { name, qty, price, mode } = req.body;
        const newOrder = new OrdersModel({ name, qty, price, mode });
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: "Failed to create order" });
    }
});

// --- Server Startup ---
const startServer = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("✅ Database Connected Successfully");

        app.listen(PORT, () => {
            console.log(`🚀 Server is listening on port ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Failed to connect to the database", error);
        process.exit(1);
    }
};

startServer();
