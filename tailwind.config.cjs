module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': 'Poppins, sans-serif'
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("daisyui")
	],
	daisyui: {
		themes: false,
	}
}
