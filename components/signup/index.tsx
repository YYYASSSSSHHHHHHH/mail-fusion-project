import Link from "next/link";

export function SignUpForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 mx-auto sm:px-6 lg:px-8 bg-[#111418]">
      <div className="flex items-center mb-6 text-3xl font-bold text-white">
        {/* SVG Logo */}
        <svg
          className="w-10 h-10 mr-3 text-blue-600"
          fill="currentColor"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
            fillRule="evenodd"
          ></path>
        </svg>
        MailFusion
      </div>
      <div className="w-full bg-gray-800 rounded-2xl shadow-xl border border-gray-700 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-white md:text-2xl">
            Create your account
          </h1>
          <form action="#" className="space-y-4 md:space-y-6">
            {/* Input fields for Name, Email, Password */}
            <div>
              <label
                className="block mb-2 text-sm font-medium text-white"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 placeholder-gray-400"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                type="text"
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 placeholder-gray-400"
                id="email"
                name="email"
                placeholder="name@company.com"
                required
                type="email"
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-white"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 placeholder-gray-400"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                type="password"
              />
            </div>
            {/* Buttons and separator */}
            <button
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-xl text-sm px-5 py-3.5 text-center shadow-lg hover:shadow-xl transition-all duration-200"
              type="submit"
            >
              Create account
            </button>
            <div className="flex items-center">
              <div className="flex-grow border-t border-gray-600"></div>
              <span className="flex-shrink mx-4 text-sm text-gray-400">or</span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>
            <button
              className="w-full text-white bg-gray-700 hover:bg-gray-600 border border-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-xl text-sm px-5 py-3.5 text-center inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
              type="button"
            >
               {/* Google Icon SVG */}
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 -ml-1"
                focusable="false"
                role="img"
                viewBox="0 0 488 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 61.9l-76.3 64.5C308.6 102.3 282.7 96 248 96c-88.8 0-160.1 71.9-160.1 160.1s71.3 160.1 160.1 160.1c98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  fill="currentColor"
                ></path>
              </svg>
              Sign up with Google
            </button>
             {/* Updated Login Link */}
            <p className="text-sm font-light text-center text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-blue-500 hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
      <footer className="mt-8 text-center">
        <p className="text-sm text-gray-400">© 2023 MailFusion. All rights reserved.</p>
      </footer>
    </div>
  );
}
