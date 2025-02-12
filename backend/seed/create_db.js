// Create Products
const Product = require("./../models/product")(
  // Build
  // const product1 = Product.build({
  //     name:"Item 1",
  //     weight:12.00,
  //     item_type:"air",
  //     dimension:"60 X 70 X 100",
  // });

  // console.log(product1 instanceof Product)
  // console.log(product1.name);

  // await product1.save()
  // console.log("Data save to db")
  async () => {
    const product1 = await Product.create({
      name: "Item 1",
      weight: 12.0,
      item_type: "air",
      dimension: "60 X 70 X 100",
    });

    console.log(product1 instanceof Product);
    console.log(product1.name);
  }
);
