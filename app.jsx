import React from 'react'
import Hero from './components/Hero'
import FeatureCard from './components/FeatureCard'
import Footer from './components/Footer'
import logo from './assets/logo.jpg'


export default function App() {
return (
<div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100">
<header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<img src={logo} alt="Zenith" className="w-12 h-12 object-cover rounded-md shadow-2xl" />
<div>
<h1 className="text-lg font-bold">ZENITH</h1>
<div className="text-xs text-gray-400">Men's Jewelry — 3D Studio</div>
</div>
</div>
<nav className="hidden md:flex gap-6 text-sm">
<a className="hover:text-white/90">Collections</a>
<a className="hover:text-white/90">Drops</a>
<a className="hover:text-white/90">About</a>
<button className="ml-2 bg-yellow-400 text-black px-4 py-2 rounded-md font-medium">Shop</button>
</nav>
</header>


<main className="max-w-6xl mx-auto px-6">
<Hero />


<section className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<FeatureCard title="Social-first visuals" desc="Cinematic 3D photos and shorts for feeds" />
<FeatureCard title="Sustainable metals" desc="Ethically sourced — premium feel" />
<FeatureCard title="Limited drops" desc="Small collectible releases" />
<FeatureCard title="Affordable luxury" desc="Bold look, sensible price" />
</section>


<section className="my-12 p-6 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-300 text-black flex flex-col md:flex-row items-center justify-between">
<div>
<h3 className="text-2xl font-bold">Join the drop list</h3>
<p className="text-sm opacity-90">Early access to limited editions and exclusive preorders.</p>
</div>
<div className="mt-4 md:mt-0 flex gap-3">
<input placeholder="Your email" className="px-4 py-2 rounded-lg" />
<button className="bg-black text-white px-4 py-2 rounded-lg">Notify me</button>
</div>
</section>


</main>


<Footer />
</div>
)
}
