function Register() {
  return (

    <div className="min-h-screen flex items-center justify-center bg-rose-50">

      <form className="bg-white p-8 rounded-lg shadow-md w-80">

        <h1 className="text-2xl font-bold text-center text-rose-600 mb-6">Register</h1>

        <label className="block font-bold text-black-700 mb-1" htmlFor="fname">First Name</label>
        <input required placeholder="Saubhagya" className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400" type="text" id="fname" name="fname" />

        <label className="block font-bold text-black-700 mb-1" htmlFor="lname">Last Name</label>
        <input required placeholder="Timilsina" className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400" type="text" id="lname" name="lname" />

        <label className="block font-bold text-black-700 mb-1" htmlFor="fname">Username</label>
        <input required placeholder="saubhagyatimilsina" className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400" type="username" id="username" name="username" />

        <label className="block font-bold text-black-700 mb-1" htmlFor="email">E-mail</label>
        <input required placeholder="saubhagyatimilsina@gmail.com" className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400" type="email" id="email" name="email" />

        <label className="block font-bold text-black-700 mb-1" htmlFor="pronoun">Pronouns</label>
        <select required id="pronoun" name="pronoun" className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400">
          <option value="">Select pronouns</option>
          <option value="she/her">She / Her</option>
          <option value="he/him">He / Him</option>
          <option value="they/them">They / Them</option>
          <option value="other">Other</option>
        </select>

        <label className="block font-bold text-black-700 mb-1">Gender</label>
        <div className="flex gap-4 mb-6">
        <label className="flex items-center gap-2">
        <input required type="radio" name="gender" value="male" className="accent-rose-500" />
        <span>Male</span>
        </label>

        <label className="flex items-center gap-2">
        <input type="radio" name="gender" value="female" className="accent-rose-500" />
        <span>Female</span>
        </label>

        <label className="flex items-center gap-2">
        <input type="radio" name="gender" value="other" className="accent-rose-500" />
        <span>Other</span>
        </label>
        </div>

        <label className="block font-bold text-black-700 mb-1" htmlFor="password">Password</label>
        <input required placeholder="Hello@12345" className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400" type="password" id="password" name="password" />

        <label className="block font-bold text-black-700 mb-1" htmlFor="password">Date</label>
        <input required className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400" type="date" id="date" name="date" />

        <button className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600 transition" type="submit" > Submit </button>
      
      </form>

    </div>
  );
}

export default Register;