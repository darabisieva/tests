'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Пусть старшина поприветствует пользователя.
    this.log(chalk.red('Let\'s do this'));

    const prompts = [{
      type: 'input',
      name: 'title',
      message: 'Enter the exercise title',
      default: 'title'
    }];

    return this.prompt(prompts).then(props => {
      // Для последующего доступа к реквизитам используйте this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`title.js`),
      this.destinationPath(`${this.props.title}.js`),
      {title: this.props.title}
    );
    this.fs.copyTpl(
      this.templatePath(`title.spec.js`),
      this.destinationPath(`${this.props.title}.spec.js`),
      {title: this.props.title}
    );
    this.fs.copyTpl(
      this.templatePath(`README.md`),
      this.destinationPath(`README.md`),
      {title: this.props.title}
    );
  }
};
