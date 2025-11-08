import React from 'react'
export default function FeatureCard({ title, desc }) {
return (
<div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 shadow-lg">
<h4 className="font-semibold mb-2">{title}</h4>
<p className="text-sm text-gray-400">{desc}</p>
</div>
)
}
