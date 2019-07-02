class TeveComponent {
  constructor() {
    this.teveneve = "Nyenyere";
    this.tevekora = 27;

    this.setTemplate(`
      <div>
        <span>{{ teveneve | async }}</span>
        <span>{{ tevekora }}</span>
        <span>{{ tevesanyi }}</span>
      </div>
    `);
  }

  setTemplate(template) {
    this.template = template;
  }

  getInnerHtml() {
    let regex = /\{\{\s*(\w*)\s*\}\}/g;

    let result = this.template.replace(regex, (matched, variable) => {
      console.log(variable);
      if (this[variable]) {
        return this[variable];
      } else {
        throw new Error(`Component does not have a member called '${variable}'`);
      }
    });

    return result;
  }
}
