
export const ChangeCssVariableRoot = (theme) => {
    const root = document.querySelector(':root')
    const components = [
      "color-heading",
      "body-background",
      "color-content",
      "color-card-title",
      "background-card",
      "color-card-text",
      "color-burger-menu",
      "background-divider"
    ]

    components.forEach((component) => {
      root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme})`
      );
    });
}