function Register() {
  return (

    <div className="min-h-screen flex items-center justify-center bg-rose-50">

      <form className="bg-white p-8 rounded-lg shadow-md w-80">

        <h1 className="text-2xl font-bold text-center text-rose-600 mb-6">Register</h1>

        <label className="block font-bold text-black-700 mb-1" htmlFor="fname">First Name</label>
        <input placeholder="Saubhagya" className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400" type="text" id="fname" name="fname" />

        <label className="block font-bold text-black-700 mb-1" htmlFor="lname">Last Name</label>
        <input placeholder="Timilsina" className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400" type="text" id="lname" name="lname" />

        <label className="block font-bold text-black-700 mb-1" htmlFor="email">E-mail</label>
        <input placeholder="saubhagyatimilsina@gmail.com" className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400" type="email" id="email" name="email" />

        <label className="block font-bold text-black-700 mb-1" htmlFor="password">Password</label>
        <input placeholder="Hello@12345" className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400" type="password" id="password" name="password" />

        <label className="block font-bold text-black-700 mb-1" htmlFor="password">Date</label>
        <input className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400" type="date" id="date" name="date" />

        <button className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600 transition" type="submit" > Submit </button>
      
      </form>

    </div>
  );
}

export default Register;