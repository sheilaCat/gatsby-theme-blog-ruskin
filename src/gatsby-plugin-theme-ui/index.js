// example theme
import { swiss } from '@theme-ui/presets'
// customize css style for your site

export default {
  ...swiss,
  fontSizes: [12, 14, 16, 20, 20, 24, 32, 48, 64],
  // fonts: {
  //   body:  "\"Noto Sans SC\", sans-serif",
  //   heading: "inherit",
  //   monospace: "Menlo, monospace"
  // },
  colors: {
    text: "hsl(10, 20%, 20%)",
    background: "hsl(10, 10%, 98%)",
    primary: "hsl(10, 80%, 50%)",
    secondary: "hsl(10, 60%, 50%)",
    highlight: "hsl(10, 40%, 90%)",
    purple: "hsl(250, 60%, 30%)",
    muted: "hsl(10, 20%, 94%)",
    gray: "hsl(10, 20%, 50%)",
    modes: {
      dark: {
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
    "body": 1.5,
    "heading": 1.25
  },
  "textStyles": {
    "heading": {
      "fontFamily":  "\"Noto Serif SC\", serif" // 标题有衬线
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
      "fontSize": 5
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
      "fontSize": 1,
      "p": 3,
      "color": "text",
      "bg": "muted",
      "overflow": "auto",
      "code": {
        "color": "inherit"
      }
    },
    "code": {
      "fontFamily": "monospace",
      "color": "secondary",
      "fontSize": 1
    },
    "inlineCode": {
      "fontFamily": "monospace",
      "color": "secondary",
      "bg": "muted"
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
    }
  },
  "prism": {
    ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
      "color": "gray"
    },
    ".comment": {
      "fontStyle": "italic"
    },
    ".property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable": {
      "color": "purple"
    },
    ".atrule,.attr-value,.keyword": {
      "color": "primary"
    },
    ".selector,.attr-name,.string,.char,.builtin,.inserted": {
      "color": "secondary"
    }
  }
}