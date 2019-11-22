import { ImageFieldData, VideoFieldData, MediaFieldData } from '@alaska-project/contents-core/dist/types/models/content-models';
import { Observable } from 'rxjs';
import { ContentField } from '../models/content-models';

export abstract class MediaEditor {
    abstract editImage(imageField: ContentField<ImageFieldData>): Observable<ImageFieldData>;
    abstract editVideo(videoField: ContentField<VideoFieldData>): Observable<VideoFieldData>;
    abstract editMedia(mediaField: ContentField<MediaFieldData>): Observable<MediaFieldData>;
}