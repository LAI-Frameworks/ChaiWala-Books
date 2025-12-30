'use client'

import { useState } from 'react'

export default function Home() {
  const [cash, setCash] = useState('')
  const [tax, setTax] = useState(0)

  const calculateTax = () => {
    const cashValue = parseFloat(cash) || 0
    const taxValue = cashValue * 0.05
    setTax(taxValue)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 p-4">
      <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-orange-600 text-center mb-6">
          ☕ चायवाला बुक्स
        </h1>
        
        <div className="space-y-4">
          <p className="font-bold text-lg text-gray-800">
            आज का नकद डालें
          </p>
          
          <input
            type="number"
            placeholder="₹"
            className="w-full p-3 text-lg border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
            value={cash}
            onChange={(e) => setCash(e.target.value)}
          />
          
          <button
            onClick={calculateTax}
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all active:scale-95"
          >
            टैक्स कैलकुलेट करें
          </button>
          
          {tax > 0 && (
            <div className="p-4 bg-orange-50 rounded-lg mt-4 border border-orange-200">
              <p className="text-xl font-bold text-gray-900">
                आज का टैक्स: ₹{tax.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                कुल: ₹{cash} | टैक्स (5%): ₹{tax.toFixed(2)}
              </p>
            </div>
          )}
          
          <p className="text-sm text-gray-500 text-center mt-8">
            अपना चाय का बिज़नेस आसान बनाएं
          </p>
        </div>
      </div>
    </div>
  )
}