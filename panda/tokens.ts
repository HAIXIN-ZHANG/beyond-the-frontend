import { defineTokens, defineSemanticTokens, defineTextStyles } from '@pandacss/dev';

// Historical UI03 provenance: figma-reference.json. Current font/role overrides: site/DEVELOPMENT.md.
export const tokens = defineTokens({
  "colors": {
    "palette": {
      "white": {
        "value": "#ffffff"
      },
      "paper": {
        "value": "#ffffff"
      },
      "panel": {
        "value": "#f7f9fc"
      },
      "ink": {
        "value": "#202530"
      },
      "muted": {
        "value": "#536175"
      },
      "line": {
        "value": "#e7e9ee"
      },
      "control": {
        "value": "#5b687c"
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
        "value": "#17191f"
      },
      "darkPanel": {
        "value": "#20242c"
      },
      "darkInk": {
        "value": "#eceef4"
      },
      "darkMuted": {
        "value": "#aab3c2"
      },
      "darkLine": {
        "value": "#343943"
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
        "value": "#20242cee"
      },
      "shadowDay": {
        "value": "#20253014"
      },
      "shadowNight": {
        "value": "#00000066"
      },
      "darkHover": {
        "value": "#b8eed7"
      },
      "darkControl": {
        "value": "#b4bdcc"
      },
      "selected": {
        "value": "#e8edf5"
      },
      "darkSelected": {
        "value": "#292e38"
      }
    },
    "families": {
      "blue": {
        "fg": {
          "value": "#245bd2"
        },
        "fgDark": {
          "value": "#8aaeff"
        },
        "hover": {
          "value": "#1c49a5"
        },
        "hoverDark": {
          "value": "#bdd0ff"
        },
        "surface": {
          "value": "#d6e6ff"
        },
        "surfaceDark": {
          "value": "#304665"
        },
        "surfaceHover": {
          "value": "#bed4f5"
        },
        "surfaceHoverDark": {
          "value": "#405d80"
        }
      },
      "green": {
        "fg": {
          "value": "#24794f"
        },
        "fgDark": {
          "value": "#75d4a2"
        },
        "hover": {
          "value": "#185c3b"
        },
        "hoverDark": {
          "value": "#b1e9ca"
        },
        "surface": {
          "value": "#daf0e0"
        },
        "surfaceDark": {
          "value": "#2d5040"
        },
        "surfaceHover": {
          "value": "#bee4ca"
        },
        "surfaceHoverDark": {
          "value": "#3c6651"
        }
      },
      "purple": {
        "fg": {
          "value": "#6841b2"
        },
        "fgDark": {
          "value": "#c2a5ff"
        },
        "hover": {
          "value": "#51318e"
        },
        "hoverDark": {
          "value": "#d9ccff"
        },
        "surface": {
          "value": "#e9e1fa"
        },
        "surfaceDark": {
          "value": "#473b5f"
        },
        "surfaceHover": {
          "value": "#d9c9ef"
        },
        "surfaceHoverDark": {
          "value": "#5a4b76"
        }
      },
      "orange": {
        "fg": {
          "value": "#a74c20"
        },
        "fgDark": {
          "value": "#ffb387"
        },
        "hover": {
          "value": "#803916"
        },
        "hoverDark": {
          "value": "#ffd1b4"
        },
        "surface": {
          "value": "#fbe7d9"
        },
        "surfaceDark": {
          "value": "#604536"
        },
        "surfaceHover": {
          "value": "#f3d2bb"
        },
        "surfaceHoverDark": {
          "value": "#775745"
        }
      },
      "rose": {
        "fg": {
          "value": "#a6345c"
        },
        "fgDark": {
          "value": "#ffa3c4"
        },
        "hover": {
          "value": "#812544"
        },
        "hoverDark": {
          "value": "#ffd1e1"
        },
        "surface": {
          "value": "#fae1ea"
        },
        "surfaceDark": {
          "value": "#5e3d4a"
        },
        "surfaceHover": {
          "value": "#f2cada"
        },
        "surfaceHoverDark": {
          "value": "#774d5d"
        }
      },
      "graphite": {
        "fg": {
          "value": "#505c70"
        },
        "fgDark": {
          "value": "#bcc8db"
        },
        "hover": {
          "value": "#384354"
        },
        "hoverDark": {
          "value": "#dfe6f2"
        },
        "surface": {
          "value": "#e7ebf0"
        },
        "surfaceDark": {
          "value": "#3c4755"
        },
        "surfaceHover": {
          "value": "#d2dbe5"
        },
        "surfaceHoverDark": {
          "value": "#506072"
        }
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
      "value": "10px"
    },
    "lg": {
      "value": "12px"
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
          "base": "{colors.palette.selected}",
          "_osDark": {
            "_system": "{colors.palette.darkSelected}"
          },
          "_dark": "{colors.palette.darkSelected}"
        }
      },
      "hover": {
        "value": {
          "base": "{colors.palette.selected}",
          "_osDark": {
            "_system": "{colors.palette.darkSelected}"
          },
          "_dark": "{colors.palette.darkSelected}"
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
          "base": "{colors.palette.ink}",
          "_osDark": {
            "_system": "{colors.palette.darkInk}"
          },
          "_dark": "{colors.palette.darkInk}"
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
      "proseLink": {
        "value": {
          "base": "#455D80",
          "_osDark": { "_system": "#B0C7E3" },
          "_dark": "#B0C7E3"
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
            "_system": "{colors.palette.darkControl}"
          },
          "_dark": "{colors.palette.darkControl}"
        }
      },
      "focus": {
        "value": {
          "base": "{colors.palette.ink}",
          "_osDark": {
            "_system": "{colors.palette.darkInk}"
          },
          "_dark": "{colors.palette.darkInk}"
        }
      }
    },
    "accent": {
      "default": {
        "value": {
          "base": "{colors.families.blue.fg}",
          "_osDark": {
            "_system": "{colors.families.blue.fgDark}"
          },
          "_dark": "{colors.families.blue.fgDark}",
          "_accentBlue": {
            "base": "{colors.families.blue.fg}",
            "_osDark": {
              "_system": "{colors.families.blue.fgDark}"
            },
            "_dark": "{colors.families.blue.fgDark}"
          },
          "_accentGreen": {
            "base": "{colors.families.green.fg}",
            "_osDark": {
              "_system": "{colors.families.green.fgDark}"
            },
            "_dark": "{colors.families.green.fgDark}"
          },
          "_accentPurple": {
            "base": "{colors.families.purple.fg}",
            "_osDark": {
              "_system": "{colors.families.purple.fgDark}"
            },
            "_dark": "{colors.families.purple.fgDark}"
          },
          "_accentOrange": {
            "base": "{colors.families.orange.fg}",
            "_osDark": {
              "_system": "{colors.families.orange.fgDark}"
            },
            "_dark": "{colors.families.orange.fgDark}"
          },
          "_accentRose": {
            "base": "{colors.families.rose.fg}",
            "_osDark": {
              "_system": "{colors.families.rose.fgDark}"
            },
            "_dark": "{colors.families.rose.fgDark}"
          },
          "_accentGraphite": {
            "base": "{colors.families.graphite.fg}",
            "_osDark": {
              "_system": "{colors.families.graphite.fgDark}"
            },
            "_dark": "{colors.families.graphite.fgDark}"
          }
        }
      },
      "hover": {
        "value": {
          "base": "{colors.families.blue.hover}",
          "_osDark": {
            "_system": "{colors.families.blue.hoverDark}"
          },
          "_dark": "{colors.families.blue.hoverDark}",
          "_accentBlue": {
            "base": "{colors.families.blue.hover}",
            "_osDark": {
              "_system": "{colors.families.blue.hoverDark}"
            },
            "_dark": "{colors.families.blue.hoverDark}"
          },
          "_accentGreen": {
            "base": "{colors.families.green.hover}",
            "_osDark": {
              "_system": "{colors.families.green.hoverDark}"
            },
            "_dark": "{colors.families.green.hoverDark}"
          },
          "_accentPurple": {
            "base": "{colors.families.purple.hover}",
            "_osDark": {
              "_system": "{colors.families.purple.hoverDark}"
            },
            "_dark": "{colors.families.purple.hoverDark}"
          },
          "_accentOrange": {
            "base": "{colors.families.orange.hover}",
            "_osDark": {
              "_system": "{colors.families.orange.hoverDark}"
            },
            "_dark": "{colors.families.orange.hoverDark}"
          },
          "_accentRose": {
            "base": "{colors.families.rose.hover}",
            "_osDark": {
              "_system": "{colors.families.rose.hoverDark}"
            },
            "_dark": "{colors.families.rose.hoverDark}"
          },
          "_accentGraphite": {
            "base": "{colors.families.graphite.hover}",
            "_osDark": {
              "_system": "{colors.families.graphite.hoverDark}"
            },
            "_dark": "{colors.families.graphite.hoverDark}"
          }
        }
      },
      "soft": {
        "value": {
          "base": "{colors.families.blue.surface}",
          "_osDark": {
            "_system": "{colors.families.blue.surfaceDark}"
          },
          "_dark": "{colors.families.blue.surfaceDark}",
          "_accentBlue": {
            "base": "{colors.families.blue.surface}",
            "_osDark": {
              "_system": "{colors.families.blue.surfaceDark}"
            },
            "_dark": "{colors.families.blue.surfaceDark}"
          },
          "_accentGreen": {
            "base": "{colors.families.green.surface}",
            "_osDark": {
              "_system": "{colors.families.green.surfaceDark}"
            },
            "_dark": "{colors.families.green.surfaceDark}"
          },
          "_accentPurple": {
            "base": "{colors.families.purple.surface}",
            "_osDark": {
              "_system": "{colors.families.purple.surfaceDark}"
            },
            "_dark": "{colors.families.purple.surfaceDark}"
          },
          "_accentOrange": {
            "base": "{colors.families.orange.surface}",
            "_osDark": {
              "_system": "{colors.families.orange.surfaceDark}"
            },
            "_dark": "{colors.families.orange.surfaceDark}"
          },
          "_accentRose": {
            "base": "{colors.families.rose.surface}",
            "_osDark": {
              "_system": "{colors.families.rose.surfaceDark}"
            },
            "_dark": "{colors.families.rose.surfaceDark}"
          },
          "_accentGraphite": {
            "base": "{colors.families.graphite.surface}",
            "_osDark": {
              "_system": "{colors.families.graphite.surfaceDark}"
            },
            "_dark": "{colors.families.graphite.surfaceDark}"
          }
        }
      },
      "surface": {
        "value": {
          "base": "{colors.families.blue.surface}",
          "_osDark": {
            "_system": "{colors.families.blue.surfaceDark}"
          },
          "_dark": "{colors.families.blue.surfaceDark}",
          "_accentBlue": {
            "base": "{colors.families.blue.surface}",
            "_osDark": {
              "_system": "{colors.families.blue.surfaceDark}"
            },
            "_dark": "{colors.families.blue.surfaceDark}"
          },
          "_accentGreen": {
            "base": "{colors.families.green.surface}",
            "_osDark": {
              "_system": "{colors.families.green.surfaceDark}"
            },
            "_dark": "{colors.families.green.surfaceDark}"
          },
          "_accentPurple": {
            "base": "{colors.families.purple.surface}",
            "_osDark": {
              "_system": "{colors.families.purple.surfaceDark}"
            },
            "_dark": "{colors.families.purple.surfaceDark}"
          },
          "_accentOrange": {
            "base": "{colors.families.orange.surface}",
            "_osDark": {
              "_system": "{colors.families.orange.surfaceDark}"
            },
            "_dark": "{colors.families.orange.surfaceDark}"
          },
          "_accentRose": {
            "base": "{colors.families.rose.surface}",
            "_osDark": {
              "_system": "{colors.families.rose.surfaceDark}"
            },
            "_dark": "{colors.families.rose.surfaceDark}"
          },
          "_accentGraphite": {
            "base": "{colors.families.graphite.surface}",
            "_osDark": {
              "_system": "{colors.families.graphite.surfaceDark}"
            },
            "_dark": "{colors.families.graphite.surfaceDark}"
          }
        }
      },
      "surfaceHover": {
        "value": {
          "base": "{colors.families.blue.surfaceHover}",
          "_osDark": {
            "_system": "{colors.families.blue.surfaceHoverDark}"
          },
          "_dark": "{colors.families.blue.surfaceHoverDark}",
          "_accentBlue": {
            "base": "{colors.families.blue.surfaceHover}",
            "_osDark": {
              "_system": "{colors.families.blue.surfaceHoverDark}"
            },
            "_dark": "{colors.families.blue.surfaceHoverDark}"
          },
          "_accentGreen": {
            "base": "{colors.families.green.surfaceHover}",
            "_osDark": {
              "_system": "{colors.families.green.surfaceHoverDark}"
            },
            "_dark": "{colors.families.green.surfaceHoverDark}"
          },
          "_accentPurple": {
            "base": "{colors.families.purple.surfaceHover}",
            "_osDark": {
              "_system": "{colors.families.purple.surfaceHoverDark}"
            },
            "_dark": "{colors.families.purple.surfaceHoverDark}"
          },
          "_accentOrange": {
            "base": "{colors.families.orange.surfaceHover}",
            "_osDark": {
              "_system": "{colors.families.orange.surfaceHoverDark}"
            },
            "_dark": "{colors.families.orange.surfaceHoverDark}"
          },
          "_accentRose": {
            "base": "{colors.families.rose.surfaceHover}",
            "_osDark": {
              "_system": "{colors.families.rose.surfaceHoverDark}"
            },
            "_dark": "{colors.families.rose.surfaceHoverDark}"
          },
          "_accentGraphite": {
            "base": "{colors.families.graphite.surfaceHover}",
            "_osDark": {
              "_system": "{colors.families.graphite.surfaceHoverDark}"
            },
            "_dark": "{colors.families.graphite.surfaceHoverDark}"
          }
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
          "base": "{colors.palette.ink}",
          "_osDark": {
            "_system": "{colors.palette.darkInk}"
          },
          "_dark": "{colors.palette.darkInk}"
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
  // Shared reading roles scale with the browser's default text size, independently of chrome/home.
  "reading-body": {
    "value": { "fontFamily": "token(fonts.body)", "fontSize": "1rem", "fontWeight": 400, "lineHeight": "1.75rem", "letterSpacing": "0em" }
  },
  "reading-title": {
    "value": { "fontFamily": "token(fonts.body)", "fontSize": "2rem", "fontWeight": 700, "lineHeight": "2.75rem", "letterSpacing": "0em" }
  },
  "reading-title-compact": {
    "value": { "fontFamily": "token(fonts.body)", "fontSize": "1.75rem", "fontWeight": 700, "lineHeight": "2.5rem", "letterSpacing": "0em" }
  },
  "reading-heading": {
    "value": { "fontFamily": "token(fonts.body)", "fontSize": "1.3125rem", "fontWeight": 700, "lineHeight": "2rem", "letterSpacing": "0em" }
  },
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
