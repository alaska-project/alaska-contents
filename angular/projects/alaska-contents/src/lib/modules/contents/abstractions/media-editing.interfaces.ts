import { ImageFieldData } from '@alaska-project/contents-core/dist/types/models/content-models';
import { Observable } from 'rxjs';
import { ContentField } from 'alaska-contents/public-api';

export abstract class MediaEditor {
    abstract editImage(imageField: ContentField<ImageFieldData>): Observable<ImageFieldData>;
}