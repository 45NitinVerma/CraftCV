import React from "react";

const Footer = () => {
	return (
		<>
			<style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

			<footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-gradient-to-r from-white via-green-100/40 to-violet-100/40 mt-40">
				{/* LEFT SECTION */}
				<div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
					<a href="/">
						<img
							src="/logo.svg"
							alt="CraftCV Logo"
							className="h-10 w-auto"
						/>
					</a>

					{/* Product Section */}
					<div>
						<p className="text-gray-600 font-semibold">Product</p>
						<ul className="mt-2 space-y-2">
							<li>
								<a href="/" className="hover:text-green-600 transition">
									Home
								</a>
							</li>
							<li>
								<a href="/features" className="hover:text-green-600 transition">
									Features
								</a>
							</li>
							<li>
								<a href="/templates" className="hover:text-green-600 transition">
									Templates
								</a>
							</li>
							<li>
								<a href="/pricing" className="hover:text-green-600 transition">
									Pricing
								</a>
							</li>
						</ul>
					</div>

					{/* Resources Section */}
					<div>
						<p className="text-gray-600 font-semibold">Resources</p>
						<ul className="mt-2 space-y-2">
							<li>
								<a href="/blog" className="hover:text-green-600 transition">
									Blog
								</a>
							</li>
							<li>
								<a href="/faq" className="hover:text-green-600 transition">
									FAQ
								</a>
							</li>
							<li>
								<a href="/support" className="hover:text-green-600 transition">
									Support
								</a>
							</li>
							<li>
								<a href="/about" className="hover:text-green-600 transition">
									About Us
								</a>
							</li>
						</ul>
					</div>

					{/* Legal Section */}
					<div>
						<p className="text-gray-600 font-semibold">Legal</p>
						<ul className="mt-2 space-y-2">
							<li>
								<a href="/privacy" className="hover:text-green-600 transition">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="/terms" className="hover:text-green-600 transition">
									Terms & Conditions
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* RIGHT SECTION */}
				<div className="flex flex-col max-md:items-center max-md:text-center gap-3 items-end">
					<p className="max-w-60 text-gray-600">
						Empowering professionals with AI to build stunning, job-winning resumes.
					</p>

					{/* Social Links */}
					<div className="flex items-center gap-4 mt-3">
						{/* Website */}
						<a
							href="#"
							target="_blank"
							rel="noreferrer"
							className="hover:text-green-600"
						>
							<svg xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								className="w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9 0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm0 0c2.5 2.5 2.5 15.5 0 18m0-18C9.5 5.5 9.5 18.5 12 21m-9-9h18" />
							</svg>
						</a>

						{/* LinkedIn */}
						<a
							href="https://www.linkedin.com/company/"
							target="_blank"
							rel="noreferrer"
							className="hover:text-green-600"
						>
							<svg xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								className="w-5 h-5">
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
								<rect width="4" height="12" x="2" y="9" />
								<circle cx="4" cy="4" r="2" />
							</svg>
						</a>

						{/* Twitter / X */}
						<a
							href="https://x.com/"
							target="_blank"
							rel="noreferrer"
							className="hover:text-green-600"
						>
							<svg xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="w-5 h-5">
								<path d="M4 4l16 16M4 20L20 4" />
							</svg>
						</a>

						{/* Instagram */}
						<a
							href="https://www.instagram.com/"
							target="_blank"
							rel="noreferrer"
							className="hover:text-green-600"
						>
							<svg xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								className="w-5 h-5">
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
								<line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
							</svg>
						</a>
					</div>

					<p className="mt-3 text-center text-gray-600">
						© {new Date().getFullYear()} CraftCV. All rights reserved.
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
