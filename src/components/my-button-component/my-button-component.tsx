import {Component, Host, h, Prop} from '@stencil/core';

/**
 * @slot default - The slot containing the text shown on the button
 * @part button - The css shadow root part to target the button
 */
@Component({
  tag: 'my-button-component',
  styleUrl: 'my-button-component.css',
  shadow: true,
})
export class MyButtonComponent {

  /**
   * Type of the button
   */
  @Prop() type: 'primary' | 'secondary' = 'primary';

  render() {
    return (
      <Host>
        <button part="button" type="button" class={"button " + this.type} onClick={() => alert('Button clicked')}>
          <slot/>
        </button>
      </Host>
    );
  }
}
