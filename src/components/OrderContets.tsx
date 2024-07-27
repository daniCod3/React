import index from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContetsProps ={
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
}

const OrderContets = ({order, removeItem}: OrderContetsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.map(item => (
            <div 
                key={item.id} 
                className="flex justify-between items-center border-t border-gray-200 last-of-type:border-b"
                >
                <div>
                <p>{item.name} - {index(item.price)}</p>
                <p className="font-black">Cantidad: {item.quantity}</p>
                <p className="font-black">Total: {index(item.price * item.quantity)}</p>
                </div>
                <button 
                    className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                    onClick={() => removeItem(item.id)}
                >
                    X
                </button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default OrderContets
