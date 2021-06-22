import {Component, h, Prop, State, Event} from '@stencil/core';
import {EventEmitter} from "@stencil/core/internal";

@Component({
  tag: 'my-dropdown',
  styleUrl: 'my-dropdown.css',
  shadow: true,
})
export class MyDropdown {
  @Prop() title: string = '';

// Data/state that can change in the component should use the state decorator
  @State() toggle: boolean = false;

// our custom event for other components to listen to
  @Event() onToggle: EventEmitter;

  render() {
    return (
      <div>
        <button onClick={() => this.toggleClick()}>
          {this.title} {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
        </button>

        <div style={{ display: this.toggle ? 'block' : 'none' }}>
          <slot></slot>
        </div>
      </div>
    )
  }

  toggleClick() {
    this.toggle = !this.toggle;
    // When the user click emit the toggle state value
    // A event can emit any type of value
    this.onToggle.emit({ visible: this.toggle });
  }
}
