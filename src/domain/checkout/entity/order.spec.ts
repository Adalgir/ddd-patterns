import OrderItem from "../entity/orderItem";
import Order from "./order";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "12345", []);
    }).toThrow("ID is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrow("CustomerId is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("123", "12345", []);
    }).toThrow("Items are required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("123", "12345", []);
    }).toThrow("Items are required");
  });

  it("should calculate total", () => {
    const item = new OrderItem("1", "item1", 100, "p1", 2);
    const item2 = new OrderItem("2", "item2", 200, "p2", 2);
    const order = new Order("123", "12345", [item]);

    let total = order.total();
    expect(total).toBe(200);

    const order2 = new Order("2", "12345", [item, item2]);
    total = order2.total();
    expect(total).toBe(600);
  });

  it("should throw error if the item qte is less or equal zero", () => {
    expect(() => {
      const item = new OrderItem("1", "item1", 100, "p1", 0);
      const order = new Order("123", "12345", [item]);
    }).toThrow("Quantity must be greater than 0");
  });
});
