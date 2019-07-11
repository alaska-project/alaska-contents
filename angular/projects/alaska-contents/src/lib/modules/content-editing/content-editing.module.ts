import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatIconModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditingModeSwitherComponent } from './components/controls/editing-mode-swither/editing-mode-swither.component';
import { ChangesSaveButtonComponent } from './components/controls/changes-save-button/changes-save-button.component';
import { NotificationsSnackbarComponent } from './components/widgets/notifications-snackbar/notifications-snackbar.component';
import { AlaskaContentsModule } from '../contents/contents.module';

@NgModule({
    declarations: [
        EditingModeSwitherComponent,
        ChangesSaveButtonComponent,
        NotificationsSnackbarComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatIconModule,
        MatSnackBarModule,
        AlaskaContentsModule,
    ],
    exports: [
        EditingModeSwitherComponent,
        ChangesSaveButtonComponent,
    ],
    entryComponents: [
        NotificationsSnackbarComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlaskaContentEditingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AlaskaContentEditingModule,
            providers: []
        };
    }
}
