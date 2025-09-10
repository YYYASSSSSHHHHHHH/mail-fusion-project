import Link from "next/link";

export function LoginForm() {
  return (
    <div className="flex size-full min-h-screen flex-col items-center justify-center bg-[#111418]">
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-[#1C2026] p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Login to MailFusion</h1>
        </div>
        <div className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              autoComplete="email"
              className="form-input flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border-[#283039] bg-[#283039] p-4 text-base font-normal leading-normal text-white placeholder:text-[#9dabb9] focus:outline-0 focus:ring-2 focus:ring-[#137fec]"
              id="email"
              name="email"
              placeholder="Email"
              required
              type="email"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <input
              autoComplete="current-password"
              className="form-input flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border-[#283039] bg-[#283039] p-4 text-base font-normal leading-normal text-white placeholder:text-[#9dabb9] focus:outline-0 focus:ring-2 focus:ring-[#137fec]"
              id="password"
              name="password"
              placeholder="Password"
              required
              type="password"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <button className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#137fec] px-4 text-base font-bold leading-normal tracking-wide text-white shadow-md transition-all duration-200 hover:bg-opacity-90">
            <span className="truncate">Login</span>
          </button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-600"></span>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-[#1C2026] px-2 text-gray-400">or</span>
            </div>
          </div>
          <button className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl border border-gray-600 bg-[#283039] px-4 text-base font-medium leading-normal tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-gray-700">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56,12.25C22.56,11.45 22.49,10.68 22.36,9.92H12.27V14.4H18.2C17.93,16.03 17.01,17.42 15.64,18.33V21.09H19.53C21.45,19.34 22.56,16.08 22.56,12.25Z"
                fill="#4285F4"
              ></path>
              <path
                d="M12.27,23C15.11,23 17.5,22.14 19.53,20.59L15.64,17.83C14.67,18.47 13.56,18.86 12.27,18.86C9.88,18.86 7.84,17.28 7.04,15.12H3.16V17.91C5.12,21.08 8.44,23 12.27,23Z"
                fill="#34A853"
              ></path>
              <path
                d="M7.04,14.67C6.83,14.07 6.72,13.44 6.72,12.78C6.72,12.12 6.83,11.49 7.04,10.89V8.1L3.16,5.19C2.26,7.03 1.74,9.25 1.74,11.78C1.74,14.31 2.26,16.53 3.16,18.37L7.04,15.58V14.67Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12.27,6.14C13.73,6.14 15.01,6.65 16.05,7.64L19.62,4.07C17.5,2.14 15.11,1 12.27,1C8.44,1 5.12,2.92 3.16,6.09L7.04,8.88C7.84,6.72 9.88,5.14 12.27,5.14Z"
                fill="#EA4335"
              ></path>
            </svg>
            <span className="truncate">Sign in with Google</span>
          </button>
        </div>
        <p className="text-center text-sm text-[#9dabb9]">
          Don't have an account?{" "}
          <Link href="/signup" className="font-medium text-[#137fec] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
