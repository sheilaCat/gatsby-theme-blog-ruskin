// example theme
import future from '@theme-ui/preset-tosh'
// customize css style for your site

import nightOwl from '@theme-ui/prism/presets/night-owl-light.json'

export default {
  fontSizes: [12, 14, 16, 20, 20, 24, 32, 48, 64],
  fonts: {
    // body: "\"Cereal\",-apple-system,BlinkMacSystemFont,Arial,sans-serif",
    // body: "\"Noto Serif SC\",  sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  colors: {
    text: '#454f5b',
    background: '#fff',
    primary: '#5c6ac4',
    secondary: '#006fbb',
    highlight: '#47c1bf',
    muted: '#e6e6e6',
    gray: '#dfe3e8',
    accent: '#f49342',
    darken: '#00044c',
    navBg: '#202020',
    modes: {
      dark: {
        navBg: '#63638a',
        text: 'hsl(210, 50%, 96%)',
        background: 'hsl(230, 25%, 18%)',
        primary: 'hsl(260, 100%, 80%)',
        secondary: 'hsl(290, 100%, 80%)',
        highlight: 'hsl(260, 20%, 40%)',
        purple: 'hsl(290, 100%, 80%)',
        muted: 'hsla(230, 20%, 0%, 20%)',
        gray: 'hsl(210, 50%, 60%)'
      },
    }
  },
  "fontWeights": {
    "body": 400,
    "heading": 700,
    "display": 900
  },
  "lineHeights": {
    "body": 2,
    "heading": 1.25
  },
  "textStyles": {
    "heading": {
      // "fontFamily":  "\"Noto Serif SC\", serif" // 标题有衬线
    },
    "display": {
      "variant": "textStyles.heading",
      "fontSize": [
        5,
        6
      ],
      "fontWeight": "display",
      "letterSpacing": "0.01em",
      "mt": 3
    }
  },
  "styles": {
    "Container": {
      "p": 3,
      "maxWidth": 1024
    },
    "root": {
      "fontFamily": "body",
      "lineHeight": "body",
      "fontWeight": "body"
    },
    "h1": {
      "variant": "textStyles.display"
    },
    "h2": {
      "variant": "textStyles.heading",
      "fontSize": [5,6]
    },
    "h3": {
      "variant": "textStyles.heading",
      "fontSize": 4
    },
    "h4": {
      "variant": "textStyles.heading",
      "fontSize": 3
    },
    "h5": {
      "variant": "textStyles.heading",
      "fontSize": 2
    },
    "h6": {
      "variant": "textStyles.heading",
      "fontSize": 1
    },
    "a": {
      "color": "primary",
      "&:hover": {
        "color": "secondary"
      }
    },
    "pre": {
      "variant": "prism",
      "fontFamily": "monospace",
      "fontSize": 2,
      "p": 3,
      "color": "text",
      "bg": "muted",
      "overflow": "auto",
      "code": {
        "color": "inherit"
      }
    },
    "table": {
      "width": "100%",
      "my": 4,
      "borderCollapse": "separate",
      "borderSpacing": 0,
      "th,td": {
        "textAlign": "left",
        "py": "4px",
        "pr": "4px",
        "pl": 0,
        "borderColor": "muted",
        "borderBottomStyle": "solid"
      }
    },
    "th": {
      "verticalAlign": "bottom",
      "borderBottomWidth": "2px"
    },
    "td": {
      "verticalAlign": "top",
      "borderBottomWidth": "1px"
    },
    "hr": {
      "border": 0,
      "borderBottom": "1px solid",
      "borderColor": "muted"
    },
    "img": {
      "maxWidth": "100%"
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 1
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted',
      px: 2
    },
  },
  links: {
    nav: {
      px: 2,
      py: 1,
      // textTransform: 'uppercase',
      letterSpacing: '0.2em',
    }
  },
  "prism": {
    ...nightOwl,
  }
}