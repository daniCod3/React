import MenuItem from "./components/MenuItem"
import OrderContets from "./components/OrderContets"
import OrderTotals from "./components/OrderTotals"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import TipPercentageForm from "./components/TipPercentageForm"

/* eslint-disable */
function App() {
  const {order, tip, setTip, addItem, removeItem, placeHolder} = useOrder()
  return (
    <>
      <header className="bg-teal-400 py-5"> 
        <h1 className="text-center text-4xl font-black"> Calculadora de propina y consumo </h1>
      </header>
      <main className="max-w-4xl mx-auto py-20 grid md:grid-cols-2 gap-x-10">
        <div>
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem 
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 ">
          {order.length ? (
            <>
              <OrderContets 
                order={order} 
                removeItem={removeItem}
              />

              <TipPercentageForm 
                setTip={setTip}
                tip={tip}
              />
              <OrderTotals
                order={order}
                tip={tip}
                placeHolder={placeHolder}
              />
            </>
          ) : (<p className="text-center">La orden esta vacia</p>)
          }
        </div>
      </main>
    </>
  )
}

export default App
