// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css:['assets/css/tailwind.css'],

   postcss: {						
     plugins: {						
     tailwindcss: {},						
     autoprefixer: {},						
     },						
     },		
     
     
     app: {
      head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        link: [
          {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
          }
        ]
      }
    },

    
})
