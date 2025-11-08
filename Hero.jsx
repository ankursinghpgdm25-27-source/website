import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.jpg'


export default function Hero() {
return (
<section className="grid md:grid-cols-2 gap-8 items-center py-12">
<div className="space-y-6">
<motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold">
Bold, Crafted, <span className="text-yellow-400">Unmissable</span>
</motion.h2>
<p className="text-gray-300 max-w-xl">Premium men’s jewelry with cinematic visuals — made to stand out in feeds and real life.</p>
<div className="flex gap-4">
<button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold">Explore</button>
<button className="border border-gray-600 px-6 py-3 rounded-2xl">Learn more</button>
</div>
</div>


<div className="relative flex items-center justify-center">
<motion.div initial={{ rotate: -6, scale: 0.95 }} animate={{ rotate: 0, scale: 1 }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl shadow-2xl">
<div className="flex items-center justify-center">
<div className="w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-400 via-gray-800 to-black flex items-center justify-center shadow-inner">
<img src={logo} alt="logo" className="w-28 h-28 object-contain -rotate-6" />
</div>
</div>


<div className="mt-6 text-center">
<h3 className="text-lg font-semibold">Zenith Ranger Chain</h3>
<p className="text-sm text-gray-400">Matte black chain with gold accents — limited drop</p>
<div className="mt-4 flex items-center justify-center gap-3">
<span className="text-xl font-bold">₹3,499</span>
<button className="ml-3 bg-yellow-400 px-4 py-2 rounded-md font-medium">Buy</button>
</div>
</div>
</motion.div>
</div>
</section>
)
}
