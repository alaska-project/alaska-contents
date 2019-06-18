import { Component, Prop, h } from "@stencil/core";
import { LinkFieldData } from "../../../models/content-models";
import { SelectOption } from "../../controls/select/select.model";

@Component({
    tag: 'alaska-link-editor',
    styleUrl: 'link-editor-component.scss',
    shadow: false
})
export class LinkEditorComponent {

    private linkOptions: SelectOption[] = [{
        value: '_self',
        label: 'Self',
    }, {
        value: '_blank',
        label: 'Blank',
    }];


    @Prop()
    linkData: LinkFieldData;

    render() {
        return (<div>
            <div class="input-field">
                <input id="__alaska_link_url" type="text" class="validate"></input>
                <label htmlFor="__alaska_link_url">Url</label>
            </div>
            <alaska-select options={this.linkOptions}></alaska-select>
        </div>
        );
    }
}

