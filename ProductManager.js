class ProductManager {
  constructor() {
    this.products = [];
    this.lastId = 0;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Error: Todos los campos son obligatorios");
      return;
    }

    const productExist = this.products.find((product) => product.code === code);
    if (productExist) return `El producto con code ${code} ya existe`;

    const id = ++this.lastId;
    this.products.push({
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    });
    console.log(`El producto ${title} se agrego con exito`);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      return product;
    } else {
      console.log("Error: Not Found");
    }
  }
}

const manager = new ProductManager();
manager.addProduct(
  "Camiseta",
  "Camiseta de algodón",
  20,
  "camiseta.jpg",
  "001",
  50
);
manager.addProduct("Pantalon", "jean", 1000, "Pantalon.jpg", "002", 50);

manager.addProduct("remera", "blanca", 600, "Pantalon.jpg", "003", 5);

manager.addProduct("Campera", "cuero", 80000, "", "004", 100);

console.log(manager);
