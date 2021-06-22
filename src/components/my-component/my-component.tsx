import {Component, Prop, h, Listen} from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return(<div>Hello, World! I'm {this.getText()}
      <my-dropdown title="Toggle">
      Hello World
    </my-dropdown>
    </div>);
  }

  @Listen('onToggle') // Listen to the onToggle event from the dropdown component
  log(event) {
    console.log(event);
  }
}
