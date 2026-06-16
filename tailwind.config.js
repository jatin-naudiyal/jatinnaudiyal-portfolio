/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#030712',
          dark: '#0F172A',
          card: '#0d1829',
        },
        primary: {
          DEFAULT: '#38BDF8',
          dim: '#0EA5E9',
          glow: 'rgba(56,189,248,0.15)',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          dim: '#7C3AED',
          glow: 'rgba(139,92,246,0.15)',
        },
        accent: {
          DEFAULT: '#22C55E',
          dim: '#16A34A',
          glow: 'rgba(34,197,94,0.15)',
        },
        surface: {
          DEFAULT: 'rgba(255,255,255,0.04)',
          hover: 'rgba(255,255,255,0.07)',
          border: 'rgba(255,255,255,0.08)',
        },
        text: {
          base: '#F8FAFC',
          muted: '#CBD5E1',
          dim: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #030712 0%, #0F172A 50%, #030712 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x': 'gradientX 4s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(56,189,248,0.2)',
        'glow-secondary': '0 0 30px rgba(139,92,246,0.2)',
        'glow-accent': '0 0 20px rgba(34,197,94,0.2)',
        'card': '0 4px 32px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
