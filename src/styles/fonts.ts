import localFont from 'next/font/local';

export const bricolage = localFont({
  src: '../assets/fonts/bricolage-grotesque/BricolageGrotesque-Variable.woff2',
  variable: '--font-hero',
  display: 'swap',
  weight: '200 800',
});

export const nohemi = localFont({
  src: [
    {
      path: '../assets/fonts/nohemi/Nohemi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nohemi/Nohemi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nohemi/Nohemi-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-display',
  display: 'swap',
});

export const switzer = localFont({
  src: [
    {
      path: '../assets/fonts/switzer/Switzer-Variable.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/switzer/Switzer-VariableItalic.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-body',
  display: 'swap',
});
