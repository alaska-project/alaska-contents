import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SettingsService } from "../../contents/services/settings/settings.service";
import { formatUrl } from "../../contents/utils/url-utils";
import { Observable, of } from "rxjs";
import { FileData } from "../components/editors/media/file-selector-control/file-selector-control.models";

@Injectable({
  providedIn: "root"
})
export class MediaLibraryClient {
  protected jsonParseReviver:
    | ((key: string, value: any) => any)
    | undefined = undefined;

  constructor(
    private http: HttpClient,
    private settingsService: SettingsService
  ) {}

  getRootFolders() {
    const url = formatUrl(
      this.contentsApiEndpoint(),
      "/alaska/api/media/getRootFolders"
    );
    return this.http.get<MediaFolder[]>(url);
  }

  getChildrenFolders(folderId: string) {
    const url = formatUrl(
      this.contentsApiEndpoint(),
      "/alaska/api/media/getChildrenFolders",
      {
        folderId: folderId
      }
    );
    return this.http.get<MediaFolder[]>(url);
  }

  getFolderContents(folderId: string) {
    const url = formatUrl(
      this.contentsApiEndpoint(),
      "/alaska/api/media/getFolderContents",
      {
        folderId: folderId
      }
    );
    return this.http.get<MediaContent[]>(url);
  }

  createFolder(folderName: string, parentFolderId: string) {
    const url = formatUrl(
      this.contentsApiEndpoint(),
      "/alaska/api/media/createFolder",
      {
        folderName: folderName,
        parentFolderId: parentFolderId
      }
    );
    return this.http.post<MediaFolder>(url, undefined);
  }

  createRootFolder(folderName: string) {
    const url = formatUrl(
      this.contentsApiEndpoint(),
      "/alaska/api/media/createRootFolder",
      {
        folderName: folderName
      }
    );
    return this.http.post<MediaFolder>(url, undefined);
  }

  deleteFolder(folderId: string) {
    const url = formatUrl(
      this.contentsApiEndpoint(),
      "/alaska/api/media/deleteFolder",
      {
        folderId: folderId
      }
    );
    return this.http.post<MediaFolder>(url, undefined);
  }

  getMedia(mediaId: string) {
    const url = formatUrl(
      this.contentsApiEndpoint(),
      "/alaska/api/media/getMedia",
      {
        mediaId: mediaId
      }
    );
    return this.http.get<MediaContent>(url);
  }

  addMedia(media: MediaContentFile) {
    const url = formatUrl(
      this.contentsApiEndpoint(),
      "/alaska/api/media/addMedia"
    );
    return this.http.post<MediaContent>(url, <MediaCreationRequest>{
      name: media.name,
      contentType: media.contentType,
      folderId: media.folderId,
      mediaContent: media.mediaContent
    });
  }

  addMediaStreamed(
    content: FileData,
    folder: MediaFolder
  ): Observable<MediaContent> {
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(content.content);

    const content_ = new FormData();
    content_.append("mediaContent", content.content, content.name);

    const url = formatUrl(
      this.contentsApiEndpoint(),
      `/alaska/api/media/addMediaStreamed?folderId=${encodeURIComponent(
        folder.id
      )}`
    );
    return this.http.post<MediaContent>(url, content_);
  }

  deleteMedia(mediaId: string) {
    const url = formatUrl(
      this.contentsApiEndpoint(),
      "/alaska/api/media/deleteMedia",
      {
        mediaId: mediaId
      }
    );
    return this.http.post(url, undefined);
  }

  //   protected processAddMediaResponse(response: HttpResponseBase): Observable<MediaContent> {
  //     const status = response.status;
  //     const responseBlob =
  //         response instanceof HttpResponse ? response.body :
  //         (<any>response).error instanceof Blob ? (<any>response).error : undefined;

  //     let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
  //     if (status === 200) {
  //         return blobToText(responseBlob).pipe(mergeMap(_responseText => {
  //         let result200: any = null;
  //         let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
  //         result200 = resultData200 !== undefined ? resultData200 : <any>null;
  //         return of(result200);
  //         }));
  //     } else if (status !== 200 && status !== 204) {
  //         blobToText(responseBlob).pipe(x => mergeMap(x => ))
  //         return blobToText(responseBlob).pipe(mergeMap(_responseText => {
  //         return throwException("An unexpected server error occurred.", status, _responseText, _headers);
  //         }));
  //     }
  //     return of<string>(<any>null);
  // }

  private contentsApiEndpoint() {
    return this.settingsService.getSettings().contentsApiEndpoint;
  }
}

export interface MediaContentFile {
  name: string;
  contentType: string;
  folderId: string;
  mediaContent: string;
}

export interface MediaFolder {
  id: string;
  name: string;
  path: string;
}

export interface MediaContent {
  id: string;
  name: string;
  url: string;
  thumbnailUrl: string;
  contentType: string;
}

export interface MediaCreationRequest {
  name: string;
  contentType: string;
  folderId: string;
  mediaContent: string;
}

function blobToText(blob: any): Observable<string> {
  return new Observable<string>((observer: any) => {
    if (!blob) {
      observer.next("");
      observer.complete();
    } else {
      let reader = new FileReader();
      reader.onload = event => {
        observer.next((<any>event.target).result);
        observer.complete();
      };
      reader.readAsText(blob);
    }
  });
}
