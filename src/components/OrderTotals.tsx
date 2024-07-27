import { useMemo } from "react"
import { OrderItem } from "../types"
import index from "../helpers"
type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  placeHolder:() => void
}
const OrderTotals = ({order, tip, placeHolder} : OrderTotalsProps) => {
  
  const subtotalAmount = useMemo( () => order.reduce((total, item)=> total + (item.quantity * item.price),0), [order])
  const tipAmount = useMemo( () => subtotalAmount * tip, [tip,order] )
  const totalAmount = useMemo( () => subtotalAmount + tipAmount, [tip,order])
  return (
      <>
          <div className="space-y-3"> 
              <h2 className="font-black text-2xl">Totales y Propina</h2>
              <p>SubTotal a Pagar: {''}
              <span className="font-bold">{ index(subtotalAmount) }</span>
              </p>

              <p>Propina: {''}
                <span className="font-bold">{index(tipAmount)}</span>
              </p>

              <p>Total a Pagar: {''}
                <span className="font-bold">{index(totalAmount)}</span>
              </p>
          </div>
          <button 
            className="w-full bg-black p-3 uppercase text-white font-bold mt-10 rounded-lg disabled:opacity-10"
            disabled={totalAmount === 0}
            onClick={placeHolder}
          >
            Guardar Orden
          </button>  
      </>
      
    )
}

export default OrderTotals
