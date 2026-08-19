/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          blue: '#00f2fe',
          purple: '#9d4edd',
          pink: '#f72585',
          teal: '#4cc9f0',
          dark: '#0a0b10',
          card: '#12131c',
          border: 'rgba(255, 255, 255, 0.1)',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #030712 100%)',
        'cyber-gradient': 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
        'accent-gradient': 'linear-gradient(135deg, #f72585 0%, #7209b7 50%, #3a0ca3 100%)',
        'neon-gradient': 'linear-gradient(90deg, #4cc9f0 0%, #9d4edd 50%, #f72585 100%)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(76, 201, 240, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(157, 78, 221, 0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(76, 201, 240, 0.35)',
        'neon-purple': '0 0 20px rgba(157, 78, 221, 0.35)',
        'neon-pink': '0 0 20px rgba(247, 37, 133, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
