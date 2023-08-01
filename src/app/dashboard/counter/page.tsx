import { Metadata } from 'next';
import { CartCounter } from '@/app/shopping-cart/components';

export const metadata: Metadata = {
  title: 'Counter Page',
  description: 'Un simple contador',
};

export default function CounterPage() {
  // Este componente se renderiza en el servidor
  // ..y renderiza un componente (CartCounter) en el cliente
  // Esto permite que aquí se hagan llamadas a BD o lo que sea y se pasen los valores
  // ..al componente del cliente.

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20} />
    </div>
  );
}
