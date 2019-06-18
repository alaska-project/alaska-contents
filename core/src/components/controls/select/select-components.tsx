import { Component, h, Element, State, Prop } from "@stencil/core";
import { SelectOption } from "./select.model";

@Component({
    tag: 'alaska-select',
    shadow: false
})
export class SelectComponent {

    private innerHtml: string;

    @Element()
    element: HTMLElement;

    @Prop()
    options: SelectOption[] = [];

    @State()
    value: string;

    componentWillLoad() {
        this.innerHtml = this.element.innerHTML;
        this.element.innerHTML = '';
    }

    render() {
        return (
            <div ref={el => this.initialize(el)} class="input-field">
                <select ref={el => el.value = this.value}>
                    {this.options.map((option) =>
                        <option value={option.value} innerHTML={option.label} disabled={option.disabled === true}></option>
                    )}
                </select>
                <label innerHTML={this.innerHtml}></label>
            </div>
        );
    }

    private initialize(element: HTMLElement) {
        console.log(element);
        // M.FormSelect.init(element, {});
    }
}

