
function Login ()
{
    return (

        <div className="min-h-screen flex items-center justify-center bg-rose-50">

            <form className="bg-white p-8 rounded-lg shadow-md w-80">
                
            <h1 className="text-2xl font-bold text-center text-rose-600 mb-6">Login</h1>

            <label className="block font-bold text-black-700 mb-1" htmlFor="email">E-mail</label>
            <input required placeholder="saubhagyatimilsina@gmail.com" className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400" type="email" id="email" name="email" />
            
            <label className="block font-bold text-black-700 mb-1" htmlFor="password">Password</label>
            <input required placeholder="Hello@12345" className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400" type="password" id="password" name="password" />

            <button className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600 transition" type="submit" > Login </button>

            </form>

        </div>

    );

}
export default Login;