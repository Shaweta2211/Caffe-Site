// app/utils/api.ts

const BASE_URL = "http://localhost:5000/api/cart";

export async function getCartItems() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function addToCart(item: { name: string; price: number; image: string }) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return res.json();
}

export async function increaseQty(id: string) {
  const res = await fetch(`${BASE_URL}/increase/${id}`, {
    method: "PUT",
  });
  return res.json();
}

export async function decreaseQty(id: string) {
  const res = await fetch(`${BASE_URL}/decrease/${id}`, {
    method: "PUT",
  });
  return res.json();
}

export async function deleteCartItem(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return res;
}
