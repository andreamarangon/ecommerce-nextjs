"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";


export default function CheckoutPage() {
  const { items, removeItem, addItem } = useCartStore();

  // Calculate the total price of the items in the cart.
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // If there are no items in the cart, display a message indicating that the cart is empty.
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Il tuo carrello è vuoto</h1>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <Card className="max-w-md mx-auto mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Riepilogo dell'Ordine</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col gap-2 border-b pb-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-semibold">
                    €{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    –
                  </Button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addItem({ ...item, quantity: 1 })}
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-2 text-lg font-semibold">
            Totale: €{total.toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <form className="max-w-md mx-auto">
        <input type="hidden" name="items" value={JSON.stringify(items)} />
        <Button type="submit" variant="default" className="w-full bg-[#ff5151] hover:bg-[#ff3f26] text-white">
          Procedi al Pagamento
        </Button>
      </form>
    </div>
  );
}
