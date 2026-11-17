import { defineTokens, defineSemanticTokens, defineTextStyles } from '@pandacss/dev';

// Historical UI03 provenance: figma-reference.json. Current font/role overrides: site/DEVELOPMENT.md.
export const tokens = defineTokens({
  "colors": {
    "palette": {
      "white": {
        "value": "#ffffff"
      },
      "paper": {
        "value": "#f8faf9"
      },
      "panel": {
        "value": "#f0f3f2"
      },
      "ink": {
        "value": "#202c28"
      },
      "muted": {
        "value": "#5c6b64"
      },
      "line": {
        "value": "#d6ddd6"
      },
      "control": {
        "value": "#84958a"
      },
      "green": {
        "value": "#176653"
      },
      "greenHover": {
        "value": "#10513f"
      },
      "greenSoft": {
        "value": "#e5f0e9"
      },
      "amber": {
        "value": "#80551d"
      },
      "amberSoft": {
        "value": "#f8eedc"
      },
      "dark": {
        "value": "#111617"
      },
      "darkPanel": {
        "value": "#1b2425"
      },
      "darkInk": {
        "value": "#eef3f0"
      },
      "darkMuted": {
        "value": "#aabbb4"
      },
      "darkLine": {
        "value": "#3b4b48"
      },
      "darkGreen": {
        "value": "#9be0c4"
      },
      "darkGreenSoft": {
        "value": "#243f35"
      },
      "glassDay": {
        "value": "#ffffffee"
      },
      "glassNight": {
        "value": "#1b2425ee"
      },
      "shadowDay": {
        "value": "#102c2414"
      },
      "shadowNight": {
        "value": "#00000066"
      },
      "darkHover": {
        "value": "#b8eed7"
      }
    }
  },
  "spacing": {
    "0": {
      "value": "0px"
    },
    "1": {
      "value": "4px"
    },
    "2": {
      "value": "8px"
    },
    "3": {
      "value": "12px"
    },
    "4": {
      "value": "16px"
    },
    "5": {
      "value": "20px"
    },
    "6": {
      "value": "24px"
    },
    "8": {
      "value": "32px"
    },
    "10": {
      "value": "40px"
    },
    "12": {
      "value": "48px"
    },
    "16": {
      "value": "64px"
    },
    "20": {
      "value": "80px"
    },
    "metric": {
      "14": {
        "value": "14px"
      },
      "10": {
        "value": "10px"
      },
      "20": {
        "value": "20px"
      },
      "4": {
        "value": "4px"
      }
    }
  },
  "radii": {
    "sm": {
      "value": "6px"
    },
    "md": {
      "value": "12px"
    },
    "lg": {
      "value": "20px"
    },
    "full": {
      "value": "999px"
    }
  },
  "sizes": {
    "44": {
      "value": "44px"
    },
    "704": {
      "value": "704px"
    },
    "224": {
      "value": "224px"
    },
    "248": {
      "value": "248px"
    },
    "64": {
      "value": "64px"
    },
    "72": {
      "value": "72px"
    },
    "88": {
      "value": "88px"
    }
  },
  "borderWidths": {
    "1": {
      "value": "1px"
    },
    "2": {
      "value": "2px"
    }
  },
  "fonts": {
    "body": {
      "value": "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Noto Sans CJK SC\", \"Noto Sans SC\", sans-serif"
    },
    "chinese": {
      "value": "{fonts.body}"
    },
    "mono": {
      "value": "\"JetBrains Mono\", ui-monospace, SFMono-Regular, Consolas, monospace"
    }
  }
});

export const semanticTokens = defineSemanticTokens({
  "colors": {
    "bg": {
      "canvas": {
        "value": {
          "base": "{colors.palette.paper}",
          "_osDark": {
            "_system": "{colors.palette.dark}"
          },
          "_dark": "{colors.palette.dark}"
        }
      },
      "surface": {
        "value": {
          "base": "{colors.palette.white}",
          "_osDark": {
            "_system": "{colors.palette.darkPanel}"
          },
          "_dark": "{colors.palette.darkPanel}"
        }
      },
      "subtle": {
        "value": {
          "base": "{colors.palette.panel}",
          "_osDark": {
            "_system": "{colors.palette.darkPanel}"
          },
          "_dark": "{colors.palette.darkPanel}"
        }
      },
      "chrome": {
        "value": {
          "base": "{colors.palette.glassDay}",
          "_osDark": {
            "_system": "{colors.palette.glassNight}"
          },
          "_dark": "{colors.palette.glassNight}"
        }
      },
      "selected": {
        "value": {
          "base": "{colors.accent.soft}",
          "_osDark": {
            "_system": "{colors.accent.soft}"
          },
          "_dark": "{colors.accent.soft}"
        }
      },
      "hover": {
        "value": {
          "base": "{colors.bg.subtle}",
          "_osDark": {
            "_system": "{colors.bg.subtle}"
          },
          "_dark": "{colors.bg.subtle}"
        }
      },
      "disabled": {
        "value": {
          "base": "{colors.bg.subtle}",
          "_osDark": {
            "_system": "{colors.bg.subtle}"
          },
          "_dark": "{colors.bg.subtle}"
        }
      }
    },
    "fg": {
      "default": {
        "value": {
          "base": "{colors.palette.ink}",
          "_osDark": {
            "_system": "{colors.palette.darkInk}"
          },
          "_dark": "{colors.palette.darkInk}"
        }
      },
      "muted": {
        "value": {
          "base": "{colors.palette.muted}",
          "_osDark": {
            "_system": "{colors.palette.darkMuted}"
          },
          "_dark": "{colors.palette.darkMuted}"
        }
      },
      "onAccent": {
        "value": {
          "base": "{colors.palette.white}",
          "_osDark": {
            "_system": "{colors.palette.dark}"
          },
          "_dark": "{colors.palette.dark}"
        }
      },
      "link": {
        "value": {
          "base": "{colors.accent.default}",
          "_osDark": {
            "_system": "{colors.accent.default}"
          },
          "_dark": "{colors.accent.default}"
        }
      },
      "disabled": {
        "value": {
          "base": "{colors.fg.muted}",
          "_osDark": {
            "_system": "{colors.fg.muted}"
          },
          "_dark": "{colors.fg.muted}"
        }
      }
    },
    "border": {
      "default": {
        "value": {
          "base": "{colors.palette.line}",
          "_osDark": {
            "_system": "{colors.palette.darkLine}"
          },
          "_dark": "{colors.palette.darkLine}"
        }
      },
      "control": {
        "value": {
          "base": "{colors.palette.control}",
          "_osDark": {
            "_system": "{colors.palette.darkMuted}"
          },
          "_dark": "{colors.palette.darkMuted}"
        }
      },
      "focus": {
        "value": {
          "base": "{colors.accent.default}",
          "_osDark": {
            "_system": "{colors.accent.default}"
          },
          "_dark": "{colors.accent.default}"
        }
      }
    },
    "accent": {
      "default": {
        "value": {
          "base": "{colors.palette.green}",
          "_osDark": {
            "_system": "{colors.palette.darkGreen}"
          },
          "_dark": "{colors.palette.darkGreen}"
        }
      },
      "hover": {
        "value": {
          "base": "{colors.palette.greenHover}",
          "_osDark": {
            "_system": "{colors.palette.darkHover}"
          },
          "_dark": "{colors.palette.darkHover}"
        }
      },
      "soft": {
        "value": {
          "base": "{colors.palette.greenSoft}",
          "_osDark": {
            "_system": "{colors.palette.darkGreenSoft}"
          },
          "_dark": "{colors.palette.darkGreenSoft}"
        }
      }
    },
    "notice": {
      "fg": {
        "value": {
          "base": "{colors.palette.amber}",
          "_osDark": {
            "_system": "{colors.palette.darkInk}"
          },
          "_dark": "{colors.palette.darkInk}"
        }
      },
      "bg": {
        "value": {
          "base": "{colors.palette.amberSoft}",
          "_osDark": {
            "_system": "{colors.palette.darkPanel}"
          },
          "_dark": "{colors.palette.darkPanel}"
        }
      }
    },
    "shadow": {
      "overlay": {
        "value": {
          "base": "{colors.palette.shadowDay}",
          "_osDark": {
            "_system": "{colors.palette.shadowNight}"
          },
          "_dark": "{colors.palette.shadowNight}"
        }
      }
    },
    "focus": {
      "ring": {
        "value": {
          "base": "{colors.accent.default}",
          "_osDark": {
            "_system": "{colors.accent.default}"
          },
          "_dark": "{colors.accent.default}"
        }
      }
    }
  },
  "spacing": {
    "control": {
      "paddingInline": {
        "value": "{spacing.4}"
      },
      "paddingBlock": {
        "value": "{spacing.3}"
      },
      "gap": {
        "value": "{spacing.2}"
      }
    },
    "navigation": {
      "paddingInline": {
        "value": "{spacing.3}"
      },
      "paddingBlock": {
        "value": "{spacing.3}"
      }
    },
    "card": {
      "padding": {
        "value": "{spacing.6}"
      },
      "gap": {
        "value": "{spacing.3}"
      }
    },
    "prose": {
      "blockGap": {
        "value": "{spacing.6}"
      },
      "sectionGap": {
        "value": "{spacing.10}"
      }
    },
    "layout": {
      "gutterNarrow": {
        "value": "{spacing.4}"
      },
      "gutterMobile": {
        "value": "{spacing.5}"
      },
      "gutterTablet": {
        "value": "{spacing.8}"
      },
      "columnGap": {
        "value": "{spacing.6}"
      },
      "sectionGap": {
        "value": "{spacing.16}"
      }
    },
    "code": {
      "padding": {
        "value": "{spacing.5}"
      }
    },
    "table": {
      "cellInline": {
        "value": "{spacing.4}"
      },
      "cellBlock": {
        "value": "{spacing.3}"
      }
    },
    "dialog": {
      "padding": {
        "value": "{spacing.8}"
      }
    },
    "header": {
      "gap": {
        "value": "{spacing.6}"
      },
      "paddingBlockWide": {
        "value": "{spacing.metric.14}"
      },
      "paddingBlockCompact": {
        "value": "{spacing.metric.10}"
      },
      "utilityGap": {
        "value": "{spacing.metric.20}"
      }
    },
    "focus": {
      "inset": {
        "value": "{spacing.metric.4}"
      }
    }
  },
  "radii": {
    "shape": {
      "control": {
        "value": "{radii.md}"
      },
      "card": {
        "value": "{radii.lg}"
      },
      "label": {
        "value": "{radii.sm}"
      },
      "pill": {
        "value": "{radii.full}"
      }
    }
  },
  "sizes": {
    "size": {
      "actionMin": {
        "value": "{sizes.44}"
      },
      "proseMax": {
        "value": "{sizes.704}"
      },
      "pageMax": {
        "value": "68rem"
      },
      "readingLayoutMax": {
        "value": "88rem"
      },
      "sidebarCompact": {
        "value": "{sizes.224}"
      },
      "sidebarWide": {
        "value": "{sizes.248}"
      },
      "headerCompact": {
        "value": "{sizes.64}"
      },
      "headerWide": {
        "value": "{sizes.72}"
      },
      "themeControl": {
        "value": "{sizes.88}"
      }
    }
  },
  "borderWidths": {
    "stroke": {
      "subtle": {
        "value": "{borderWidths.1}"
      },
      "focus": {
        "value": "{borderWidths.2}"
      }
    }
  }
});

export const textStyles = defineTextStyles({
  // Shared chrome role: explicit metrics avoid inheriting locale/prose typography.
  "brand": {
    "value": {
      "fontFamily": "token(fonts.body)",
      "fontSize": "16px",
      "fontWeight": 600,
      "lineHeight": "24px",
      "letterSpacing": "-0.01em"
    }
  },
  "display": {
    "value": {
      "fontFamily": "token(fonts.body)",
      "fontSize": "60px",
      "fontWeight": 600,
      "lineHeight": "64px",
      "letterSpacing": "-0.03em"
    }
  },
  "h1": {
    "value": {
      "fontFamily": "token(fonts.body)",
      "fontSize": "40px",
      "fontWeight": 600,
      "lineHeight": "48px",
      "letterSpacing": "-0.02em"
    }
  },
  "h1-compact": {
    "value": {
      "fontFamily": "token(fonts.body)",
      "fontSize": "32px",
      "fontWeight": 600,
      "lineHeight": "40px",
      "letterSpacing": "-0.02em"
    }
  },
  "h2": {
    "value": {
      "fontFamily": "token(fonts.body)",
      "fontSize": "26px",
      "fontWeight": 600,
      "lineHeight": "34px",
      "letterSpacing": "0.0em"
    }
  },
  "h3": {
    "value": {
      "fontFamily": "token(fonts.body)",
      "fontSize": "20px",
      "fontWeight": 600,
      "lineHeight": "28px",
      "letterSpacing": "0.0em"
    }
  },
  "body": {
    "value": {
      "fontFamily": "token(fonts.body)",
      "fontSize": "18px",
      "fontWeight": 400,
      "lineHeight": "30px",
      "letterSpacing": "0.0em"
    }
  },
  "ui": {
    "value": {
      "fontFamily": "token(fonts.body)",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": "20px",
      "letterSpacing": "0.0em"
    }
  },
  "small": {
    "value": {
      "fontFamily": "token(fonts.body)",
      "fontSize": "13px",
      "fontWeight": 400,
      "lineHeight": "20px",
      "letterSpacing": "0.0em"
    }
  },
  "caption": {
    "value": {
      "fontFamily": "token(fonts.body)",
      "fontSize": "11px",
      "fontWeight": 500,
      "lineHeight": "16px",
      "letterSpacing": "0.0em"
    }
  },
  "mono": {
    "value": {
      "fontFamily": "token(fonts.mono)",
      "fontSize": "13px",
      "fontWeight": 400,
      "lineHeight": "22px",
      "letterSpacing": "0.0em"
    }
  },
  "zh-title": {
    "value": {
      "fontFamily": "token(fonts.chinese)",
      "fontSize": "30px",
      "fontWeight": 700,
      "lineHeight": "43px",
      "letterSpacing": "0.0em"
    }
  },
  "zh-body": {
    "value": {
      "fontFamily": "token(fonts.chinese)",
      "fontSize": "17px",
      "fontWeight": 400,
      "lineHeight": "30px",
      "letterSpacing": "0.0em"
    }
  },
  "zh-h2": {
    "value": {
      "fontFamily": "token(fonts.chinese)",
      "fontSize": "22px",
      "fontWeight": 700,
      "lineHeight": "34px",
      "letterSpacing": "0.0em"
    }
  },
  "zh-ui": {
    "value": {
      "fontFamily": "token(fonts.chinese)",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": "22px",
      "letterSpacing": "0.0em"
    }
  },
  "mobile-body": {
    "value": {
      "fontFamily": "token(fonts.body)",
      "fontSize": "17px",
      "fontWeight": 400,
      "lineHeight": "29px",
      "letterSpacing": "0.0em"
    }
  }
});
