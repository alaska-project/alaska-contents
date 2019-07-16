import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatIconModule, MatMenuModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EditingModeSwitherComponent } from './components/controls/editing-mode-swither/editing-mode-swither.component';
import { ChangesSaveButtonComponent } from './components/controls/changes-save-button/changes-save-button.component';
import { NotificationsSnackbarComponent } from './components/widgets/notifications-snackbar/notifications-snackbar.component';
import { AlaskaContentsModule } from '../contents/contents.module';
import { LoaderDialogContentComponent } from './components/widgets/loader-dialog-content/loader-dialog-content.component';
import { EscaladeLoaderComponent } from './components/loaders/escalade-loader/escalade-loader.component';
import { BoxesLoaderComponent } from './components/loaders/boxes-loader/boxes-loader.component';
import { ChangesPublishButtonComponent } from './components/controls/changes-publish-button/changes-publish-button.component';
import { PublishingTargetSwitcherComponent } from './components/controls/publishing-target-switcher/publishing-target-switcher.component';
import { DefaultMediaEditorService } from './services/media-editor/default-media-editor.service';
import { MediaEditor } from '../contents/abstractions/media-editing.interfaces';
import { MediaPickerDialogComponent } from './components/editors/media/media-picker-dialog/media-picker-dialog.component';
import { MediaPickerComponent } from './components/editors/media/media-picker/media-picker.component';
import { MediaFolderExplorerComponent } from './components/editors/media/media-folder-explorer/media-folder-explorer.component';
import { MediaFoldersTreeComponent } from './components/editors/media/media-folders-tree/media-folders-tree.component';
import { CreateFolderButtonComponent } from './components/editors/media/create-folder-button/create-folder-button.component';
import { CreateFolderDialogComponent } from './components/editors/media/create-folder-dialog/create-folder-dialog.component';
import { MediaFoldersPanelComponent } from './components/editors/media/media-folders-panel/media-folders-panel.component';
import { MediaFoldersTreeNodeComponent } from './components/editors/media/media-folders-tree-node/media-folders-tree-node.component';
import { MediaFoldersTreeNodeMenuComponent } from './components/editors/media/media-folders-tree-node-menu/media-folders-tree-node-menu.component';

@NgModule({
    declarations: [
        EditingModeSwitherComponent,
        ChangesSaveButtonComponent,
        NotificationsSnackbarComponent,
        LoaderDialogContentComponent,
        EscaladeLoaderComponent,
        BoxesLoaderComponent,
        ChangesPublishButtonComponent,
        PublishingTargetSwitcherComponent,
        MediaPickerComponent,
        MediaPickerDialogComponent,
        MediaFolderExplorerComponent,
        MediaFoldersTreeComponent,
        CreateFolderButtonComponent,
        CreateFolderDialogComponent,
        MediaFoldersPanelComponent,
        MediaFoldersTreeNodeComponent,
        MediaFoldersTreeNodeMenuComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatMenuModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatIconModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatTreeModule,
        MatSidenavModule,
        AlaskaContentsModule,
    ],
    exports: [
        EditingModeSwitherComponent,
        ChangesSaveButtonComponent,
        PublishingTargetSwitcherComponent,
    ],
    entryComponents: [
        NotificationsSnackbarComponent,
        LoaderDialogContentComponent,
        MediaPickerDialogComponent,
        CreateFolderDialogComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlaskaContentEditingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AlaskaContentEditingModule,
            providers: [
                { provide: MediaEditor, useClass: DefaultMediaEditorService }
            ]
        };
    }
}
