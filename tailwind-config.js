tailwind.config = {
    theme: {
      extend: {
        colors: {
          chili:   { DEFAULT:'#C2272D', dark:'#9E1E23', light:'#E64A3F' },
          turmeric:{ DEFAULT:'#F5A623', dark:'#DB8A0B', light:'#FFC55C' },
          coffee:  { DEFAULT:'#241F1B', light:'#5A5048' },
          paper:   { DEFAULT:'#FDEAD2', dark:'#F7D6A6' },
          fresh:   { DEFAULT:'#4C7A3D' },
          card:    '#FFFFFF'
        },
        fontFamily: {
          display: ['"Baloo 2"','sans-serif'],
          body: ['"Plus Jakarta Sans"','sans-serif']
        },
        boxShadow: {
          stamp: '0 4px 0 rgba(59,42,32,0.15)',
          pop: '0 10px 30px -10px rgba(59,42,32,0.35)'
        }
      }
    }
  }