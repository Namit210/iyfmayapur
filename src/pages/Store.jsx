import { div } from "framer-motion/client"

export default function Store() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Store Page</h1>
      <p className="text-lg">
        Welcome to the Store page. Here you can find information about our products and how to make a purchase.
      </p>
      <Payment />
      <RazorApp />

    </div>
  )
}

function Payment(){

  const handlePayment = (e) => {
    e.preventDefault();
    const amount = e.target.amount.value;
    console.log("Payment Amount:", amount);
    // Here you can add your payment processing logic
  }

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
        <form onSubmit={handlePayment}>
          <label htmlFor="amt">Enter Amount</label> 
          <input type="number" name="amount" id="amt" className="mx-3 border"/>
          <button className="bg-[blue] p-2 rounded-xl text-white" type="submit">
            Pay Now
          </button>
        </form>
    </div>
  )
}



function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

function RazorApp() {

async function displayRazorpay () {

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

      if (!res){
        alert('Razropay failed to load!!')
        return 
      }

      const data = await fetch('http://localhost:1769/razorpay', {method: 'POST'}).then((t) => 
        t.json()
      ) 

      console.log(data)

    const options = {
      "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
      "amount": "50000", // Amount is in currency subunits. 
      "currency": "<currency>",
      "name": "Acme Corp",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "order_IluGWxBm9U8zJ8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url":"http://localhost:1769/verify",
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  const paymentObject = new window.Razorpay(options); 
  paymentObject.open();
  }

  return (
    <div className="App">
      <header className="App-header">
         
        <button
        onClick={displayRazorpay}
        >
          Pay now 
        </button>
      </header>
    </div>
  );
}